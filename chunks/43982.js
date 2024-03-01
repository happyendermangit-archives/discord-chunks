function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("70102");
    var i = n("44170"),
        r = n("597755"),
        s = n.n(r),
        a = n("522632"),
        o = n("748820"),
        l = n("872717"),
        u = n("861309"),
        c = n("49111");
    let d = c.RPC_STARTING_PORT + c.RPC_PORT_RANGE - 1;

    function f(e, t) {
        if (null == e || null == t) throw Error("cmd and name required");
        return "".concat(e, ":").concat(t)
    }
    let E = a.parse(location.search.slice(1)),
        p = parseInt(null != E.rpc && "" !== E.rpc ? E.rpc : c.RPC_STARTING_PORT, 10),
        h = null;
    class _ extends i.EventEmitter {
        get port() {
            return p
        }
        get connected() {
            return null != h && h.readyState === WebSocket.OPEN
        }
        connect() {
            if (null == h) {
                if (p > d) {
                    p = c.RPC_STARTING_PORT, this.emit("disconnected");
                    return
                }
                try {
                    h = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(c.RPC_VERSION))
                } catch (e) {
                    this.disconnect({
                        code: c.RPCCloseCodes.CLOSE_ABNORMAL
                    });
                    return
                }
                null != h && (h.onmessage = e => {
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
                        data: s
                    } = t;
                    if (n === c.RPCCommands.DISPATCH) {
                        if (i === c.RPCEvents.READY) {
                            this.emit("connected");
                            return
                        }
                        if (i === c.RPCEvents.ERROR) {
                            this.emit("error", new u.default({
                                errorCode: s.code
                            }, s.message)), this.disconnect();
                            return
                        }
                        this.emit(f(n, i), s);
                        return
                    }
                    let a = null;
                    i === c.RPCEvents.ERROR && (a = new u.default({
                        errorCode: s.code
                    }, s.message), s = null), this.emit(f(n, r), a, s)
                }, h.onclose = h.onerror = e => this.disconnect(e))
            }
        }
        disconnect(e) {
            if (null != e && "code" in e && [c.RPCCloseCodes.CLOSE_ABNORMAL, c.RPCCloseCodes.INVALID_CLIENTID].includes(e.code)) {
                p++, h = null, this.connect();
                return
            }
            null != h && (this.emit("disconnected"), h.close(), h = null)
        }
        subscribe(e, t, n) {
            return this.on(f(c.RPCCommands.DISPATCH, e), n), this.request(c.RPCCommands.SUBSCRIBE, t, e)
        }
        unsubscribe(e, t, n) {
            return this.removeListener(f(c.RPCCommands.DISPATCH, e), n), this.request(c.RPCCommands.UNSUBSCRIBE, t, e)
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
                let s = (0, o.v4)(),
                    a = JSON.stringify({
                        cmd: e,
                        args: t,
                        evt: n,
                        nonce: s
                    });
                this.once(f(e, s), (e, t) => null != e ? r(e) : i(t)), null == h || h.send(a)
            })
        }
        requestOnce(e, t, n) {
            return l.default.post({
                url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(c.RPC_VERSION),
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
                if (t === c.RPCEvents.ERROR) throw new u.default({
                    errorCode: n.code
                }, n.message);
                return n
            })
        }
        requestRedirect(e, t, n) {
            if ("Chrome" === s.name && parseInt(s.version, 10) >= 58) return this.requestOnce(e, t, n);
            let i = encodeURIComponent(JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: (0, o.v4)()
                })),
                r = encodeURIComponent("".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"));
            return window.open("http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(c.RPC_VERSION, "&payload=").concat(i, "&callback=").concat(r), "_self"), new Promise(() => null)
        }
    }
    var S = new _
}