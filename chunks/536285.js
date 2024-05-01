function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("836560"),
        r = n("525654"),
        a = n.n(r),
        s = n("664751"),
        o = n("153832"),
        l = n("544891"),
        u = n("996106"),
        d = n("981631");
    let _ = d.RPC_STARTING_PORT + d.RPC_PORT_RANGE - 1;

    function c(e, t) {
        if (null == e || null == t) throw Error("cmd and name required");
        return "".concat(e, ":").concat(t)
    }
    let E = s.parse(location.search.slice(1)),
        I = parseInt(null != E.rpc && "" !== E.rpc ? E.rpc : d.RPC_STARTING_PORT, 10),
        T = null;
    class f extends i.EventEmitter {
        get port() {
            return I
        }
        get connected() {
            return null != T && T.readyState === WebSocket.OPEN
        }
        connect() {
            if (null == T) {
                if (I > _) {
                    I = d.RPC_STARTING_PORT, this.emit("disconnected");
                    return
                }
                try {
                    T = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(d.RPC_VERSION))
                } catch (e) {
                    this.disconnect({
                        code: d.RPCCloseCodes.CLOSE_ABNORMAL
                    });
                    return
                }
                null != T && (T.onmessage = e => {
                    let t;
                    try {
                        if ("string" == typeof e.data) t = JSON.parse(e.data);
                        else throw Error("payload data not a string")
                    } catch (e) {
                        this.emit("error", e), this.disconnect();
                        return
                    }
                    let {
                        cmd: n,
                        evt: i,
                        nonce: r,
                        data: a
                    } = t;
                    if (n === d.RPCCommands.DISPATCH) {
                        if (i === d.RPCEvents.READY) {
                            this.emit("connected");
                            return
                        }
                        if (i === d.RPCEvents.ERROR) {
                            this.emit("error", new u.default({
                                errorCode: a.code
                            }, a.message)), this.disconnect();
                            return
                        }
                        this.emit(c(n, i), a);
                        return
                    }
                    let s = null;
                    i === d.RPCEvents.ERROR && (s = new u.default({
                        errorCode: a.code
                    }, a.message), a = null), this.emit(c(n, r), s, a)
                }, T.onclose = T.onerror = e => this.disconnect(e))
            }
        }
        disconnect(e) {
            if (null != e && "code" in e && [d.RPCCloseCodes.CLOSE_ABNORMAL, d.RPCCloseCodes.INVALID_CLIENTID].includes(e.code)) {
                I++, T = null, this.connect();
                return
            }
            null != T && (this.emit("disconnected"), T.close(), T = null)
        }
        subscribe(e, t, n) {
            return this.on(c(d.RPCCommands.DISPATCH, e), n), this.request(d.RPCCommands.SUBSCRIBE, t, e)
        }
        unsubscribe(e, t, n) {
            return this.removeListener(c(d.RPCCommands.DISPATCH, e), n), this.request(d.RPCCommands.UNSUBSCRIBE, t, e)
        }
        request(e, t, n) {
            return new Promise((i, r) => {
                if (!this.connected) {
                    this.once("connected", () => {
                        this.removeAllListeners("disconnected"), i(this.request(e, t, n))
                    }), this.once("disconnected", () => {
                        this.removeAllListeners("connected"), r(Error("disconnected during request"))
                    }), this.connect();
                    return
                }
                let a = (0, o.v4)(),
                    s = JSON.stringify({
                        cmd: e,
                        args: t,
                        evt: n,
                        nonce: a
                    });
                this.once(c(e, a), (e, t) => null != e ? r(e) : i(t)), null == T || T.send(s)
            })
        }
        requestOnce(e, t, n) {
            return l.HTTP.post({
                url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(d.RPC_VERSION),
                body: {
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.v4)()
                }
            }).then(e => {
                let {
                    body: {
                        evt: t,
                        data: n
                    }
                } = e;
                if (t === d.RPCEvents.ERROR) throw new u.default({
                    errorCode: n.code
                }, n.message);
                return n
            })
        }
        requestRedirect(e, t, n) {
            if ("Chrome" === a().name && parseInt(a().version, 10) >= 58) return this.requestOnce(e, t, n);
            let i = encodeURIComponent(JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.v4)()
                })),
                r = encodeURIComponent("".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"));
            return window.open("http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(d.RPC_VERSION, "&payload=").concat(i, "&callback=").concat(r), "_self"), new Promise(() => null)
        }
    }
    t.default = new f
}