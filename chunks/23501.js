function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("836560"),
        o = n("525654"),
        i = n.n(o),
        a = n("664751"),
        u = n("153832"),
        s = n("967888"),
        l = n("829416"),
        c = n("281767");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = c.RPC_STARTING_PORT + c.RPC_PORT_RANGE - 1;

    function p(e, t) {
        if (null == e || null == t) throw Error("cmd and name required");
        return "".concat(e, ":").concat(t)
    }
    var m = a.parse(location.search.slice(1)),
        y = parseInt(null != m.rpc && "" !== m.rpc ? m.rpc : c.RPC_STARTING_PORT, 10),
        I = null,
        h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(h, e);
            var t, n, r, o, a, m = (t = h, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function h() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, h), m.apply(this, arguments)
            }
            return r = h, o = [{
                key: "port",
                get: function() {
                    return y
                }
            }, {
                key: "connected",
                get: function() {
                    return null != I && I.readyState === WebSocket.OPEN
                }
            }, {
                key: "connect",
                value: function() {
                    var e = this;
                    if (null == I) {
                        if (y > E) {
                            y = c.RPC_STARTING_PORT, this.emit("disconnected");
                            return
                        }
                        try {
                            I = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(c.RPC_VERSION))
                        } catch (e) {
                            this.disconnect({
                                code: c.RPCCloseCodes.CLOSE_ABNORMAL
                            });
                            return
                        }
                        null != I && (I.onmessage = function(t) {
                            try {
                                if ("string" == typeof t.data) n = JSON.parse(t.data);
                                else throw Error("payload data not a string")
                            } catch (t) {
                                e.emit("error", t), e.disconnect();
                                return
                            }
                            var n, r = n.cmd,
                                o = n.evt,
                                i = n.nonce,
                                a = n.data;
                            if (r === c.RPCCommands.DISPATCH) {
                                if (o === c.RPCEvents.READY) {
                                    e.emit("connected");
                                    return
                                }
                                if (o === c.RPCEvents.ERROR) {
                                    e.emit("error", new l.default({
                                        errorCode: a.code
                                    }, a.message)), e.disconnect();
                                    return
                                }
                                e.emit(p(r, o), a);
                                return
                            }
                            var u = null;
                            o === c.RPCEvents.ERROR && (u = new l.default({
                                errorCode: a.code
                            }, a.message), a = null), e.emit(p(r, i), u, a)
                        }, I.onclose = I.onerror = function(t) {
                            return e.disconnect(t)
                        })
                    }
                }
            }, {
                key: "disconnect",
                value: function(e) {
                    if (null != e && "code" in e && [c.RPCCloseCodes.CLOSE_ABNORMAL, c.RPCCloseCodes.INVALID_CLIENTID].includes(e.code)) {
                        y++, I = null, this.connect();
                        return
                    }
                    null != I && (this.emit("disconnected"), I.close(), I = null)
                }
            }, {
                key: "subscribe",
                value: function(e, t, n) {
                    return this.on(p(c.RPCCommands.DISPATCH, e), n), this.request(c.RPCCommands.SUBSCRIBE, t, e)
                }
            }, {
                key: "unsubscribe",
                value: function(e, t, n) {
                    return this.removeListener(p(c.RPCCommands.DISPATCH, e), n), this.request(c.RPCCommands.UNSUBSCRIBE, t, e)
                }
            }, {
                key: "request",
                value: function(e, t, n) {
                    var r = this;
                    return new Promise(function(o, i) {
                        if (!r.connected) {
                            r.once("connected", function() {
                                r.removeAllListeners("disconnected"), o(r.request(e, t, n))
                            }), r.once("disconnected", function() {
                                r.removeAllListeners("connected"), i(Error("disconnected during request"))
                            }), r.connect();
                            return
                        }
                        var a = (0, u.v4)(),
                            s = JSON.stringify({
                                cmd: e,
                                args: t,
                                evt: n,
                                nonce: a
                            });
                        r.once(p(e, a), function(e, t) {
                            return null != e ? i(e) : o(t)
                        }), null == I || I.send(s)
                    })
                }
            }, {
                key: "requestOnce",
                value: function(e, t, n) {
                    return s.HTTP.post({
                        url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(c.RPC_VERSION),
                        body: {
                            cmd: e,
                            args: t,
                            evt: n,
                            nonce: (0, u.v4)()
                        }
                    }).then(function(e) {
                        var t = e.body,
                            n = t.evt,
                            r = t.data;
                        if (n === c.RPCEvents.ERROR) throw new l.default({
                            errorCode: r.code
                        }, r.message);
                        return r
                    })
                }
            }, {
                key: "requestRedirect",
                value: function(e, t, n) {
                    if ("Chrome" === i().name && parseInt(i().version, 10) >= 58) return this.requestOnce(e, t, n);
                    var r = encodeURIComponent(JSON.stringify({
                            cmd: e,
                            args: t,
                            evt: n,
                            nonce: (0, u.v4)()
                        })),
                        o = encodeURIComponent("".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"));
                    return window.open("http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(c.RPC_VERSION, "&payload=").concat(r, "&callback=").concat(o), "_self"), new Promise(function() {
                        return null
                    })
                }
            }], f(r.prototype, o), a && f(r, a), h
        }(r.EventEmitter);
    t.default = new h
}