function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("870331"),
        s = n("388990"),
        l = n("296484"),
        c = n("829416"),
        f = n("138608"),
        d = n("980014"),
        _ = n("902735"),
        E = n("281767");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var I = "RPC_STORE_WAIT",
        h = [],
        O = function() {
            var e, t, n;

            function r(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), y(this, "getCurrentUser", function() {
                    return null
                }), y(this, "onConnect", function() {}), y(this, "onDisconnect", function() {}), y(this, "getJoi", void 0), y(this, "events", {}), y(this, "commands", {}), y(this, "sockets", new Set), y(this, "subscriptions", []), this.getJoi = e
            }
            return e = r, t = [{
                key: "registerTransport",
                value: function(e) {
                    var t = this;
                    e.on("connect", function(e) {
                        return t.handleConnect(e)
                    }), e.on("request", function(e, n) {
                        return t.handleRequest(e, n)
                    }), e.on("disconnect", function(e, n) {
                        return t.handleDisconnect(e, n)
                    })
                }
            }, {
                key: "handleConnect",
                value: function(e) {
                    this.sockets.add(e), this.onConnect(e);
                    var t = {
                        v: e.version,
                        config: {
                            cdn_host: window.GLOBAL_ENV.CDN_HOST,
                            api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                            environment: "production"
                        }
                    };
                    if (e.transport === _.TransportTypes.IPC) {
                        var n = this.getCurrentUser();
                        if (null == n) {
                            e.close(E.RPCCloseCodes.CLOSE_NORMAL, "User logged out");
                            return
                        }
                        t.user = (0, f.default)(n)
                    }
                    this.dispatch(e, null, E.RPCCommands.DISPATCH, E.RPCEvents.READY, t)
                }
            }, {
                key: "handleDisconnect",
                value: function(e, t) {
                    this.removeSubscriptions(e), this.sockets.delete(e), this.onDisconnect(e, t)
                }
            }, {
                key: "handleRequest",
                value: function(e, t) {
                    var n = this,
                        r = this;
                    new Promise(function(r) {
                        if (null == t.nonce || "" === t.nonce) throw new c.default({
                            errorCode: E.RPCErrors.INVALID_PAYLOAD
                        }, "Payload requires a nonce");
                        var o = t.cmd,
                            i = n.commands[o];
                        if (null == i) throw new c.default({
                            errorCode: E.RPCErrors.INVALID_COMMAND
                        }, "Invalid command: ".concat(t.cmd));
                        if (!(0, d.default)(e.authorization.scopes, i.scope)) throw new c.default({
                            errorCode: E.RPCErrors.INVALID_PERMISSIONS
                        }, "Not authenticated or invalid scope");
                        l.ExperimentRPCServerAnalyticsKillswitch.getCurrentConfig({
                            location: "RPCServer"
                        }).enabled && u.default.track(E.AnalyticEvents.RPC_COMMAND_SENT, {
                            command: o,
                            scope: "object" == typeof i.scope ? JSON.stringify(i.scope) : i.scope,
                            application_id: e.application.id,
                            socket_scope: e.authorization.scopes.toString()
                        }), r(i)
                    }).then(function(e) {
                        var n, i;
                        return new Promise((i = (n = function(n, i) {
                            var a;
                            return function(e, t) {
                                var n, r, o, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function u(i) {
                                    return function(u) {
                                        return function(i) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a;) try {
                                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: i[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = i[1], i = [0];
                                                        continue;
                                                    case 7:
                                                        i = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                            a.label = i[1];
                                                            break
                                                        }
                                                        if (6 === i[0] && a.label < o[1]) {
                                                            a.label = o[1], o = i;
                                                            break
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            a.label = o[2], a.ops.push(i);
                                                            break
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                i = t.call(e, a)
                                            } catch (e) {
                                                i = [6, e], r = 0
                                            } finally {
                                                n = o = 0
                                            }
                                            if (5 & i[0]) throw i[1];
                                            return {
                                                value: i[0] ? i[1] : void 0,
                                                done: !0
                                            }
                                        }([i, u])
                                    }
                                }
                            }(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (!(null != e.validation)) return [3, 2];
                                        return [4, r.getJoi()];
                                    case 1:
                                        return a = u.sent(), o()(null != e.validation, "command.validation must not be null"), a.validate(t.args, e.validation(a), {
                                            convert: !1
                                        }, function(t) {
                                            if (null != t) {
                                                i(new c.default({
                                                    errorCode: E.RPCErrors.INVALID_PAYLOAD
                                                }, t.message));
                                                return
                                            }
                                            n(e)
                                        }), [3, 3];
                                    case 2:
                                        n(e), u.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise(function(r, o) {
                                var i = n.apply(e, t);

                                function a(e) {
                                    p(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    p(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            })
                        }), function(e, t) {
                            return i.apply(this, arguments)
                        }))
                    }).then(function(r) {
                        var o;
                        return r.handler({
                            socket: e,
                            server: n,
                            cmd: t.cmd,
                            evt: t.evt,
                            nonce: t.nonce,
                            args: null !== (o = t.args) && void 0 !== o ? o : {},
                            isSocketConnected: function() {
                                return n.sockets.has(e)
                            }
                        })
                    }).then(function(r) {
                        return n.dispatch(e, t.nonce, t.cmd, null, r)
                    }).catch(function(r) {
                        var o = r.code,
                            i = r.message;
                        return n.error(e, t.nonce, t.cmd, o, i)
                    })
                }
            }, {
                key: "setCommandHandler",
                value: function(e, t) {
                    this.commands[e] = t
                }
            }, {
                key: "setEventHandler",
                value: function(e, t) {
                    this.events[e] = t
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.RPCCommands.DISPATCH,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    e.send({
                        cmd: n,
                        data: o,
                        evt: r,
                        nonce: t
                    })
                }
            }, {
                key: "error",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.RPCCommands.DISPATCH,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.RPCErrors.UNKNOWN_ERROR,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
                    u.default.track(E.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT, {
                        command: n,
                        code: r,
                        message: o
                    }), this.dispatch(e, t, n, E.RPCEvents.ERROR, {
                        code: r,
                        message: o
                    })
                }
            }, {
                key: "isSubscribed",
                value: function(e, t) {
                    return void 0 !== this.subscriptions.find(function(n) {
                        return n.socket.application.id === e && n.evt === t
                    })
                }
            }, {
                key: "getSubscription",
                value: function(e, t, n) {
                    return this.subscriptions.find(function(r) {
                        return r.socket === e && r.evt === t && a().isEqual(r.args, n)
                    })
                }
            }, {
                key: "addSubscription",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        o = this.dispatch.bind(this, e, null, E.RPCCommands.DISPATCH, t);
                    null == this.getSubscription(e, t, n) && this.subscriptions.push({
                        update: r,
                        dispatch: o,
                        prevState: r ? r({
                            prevState: null,
                            dispatch: o
                        }) : null,
                        socket: e,
                        evt: t,
                        args: n
                    })
                }
            }, {
                key: "removeSubscription",
                value: function(e, t, n) {
                    a().remove(this.subscriptions, function(r) {
                        return r.socket === e && r.evt === t && a().isEqual(r.args, n)
                    })
                }
            }, {
                key: "removeSubscriptions",
                value: function(e) {
                    a().remove(this.subscriptions, function(t) {
                        return t.socket === e
                    })
                }
            }, {
                key: "dispatchToSubscriptions",
                value: function(e, t, n, r) {
                    var o, i = this;
                    if (!(null != r && "" !== r && (o = r, h.includes(o) || (h.unshift(o), h.splice(50), 0)))) this.subscriptions.forEach(function(r) {
                        var o, u, s;
                        if (r.evt === e) {
                            if (("function" != typeof t || t(r)) && ("object" != typeof t || (u = t, s = null !== (o = r.args) && void 0 !== o ? o : {}, a().isEqual(u, a().pick(s, Object.keys(u)))))) i.dispatch(r.socket, null, E.RPCCommands.DISPATCH, r.evt, n)
                        }
                    })
                }
            }, {
                key: "updateSubscriptions",
                value: function() {
                    this.subscriptions.forEach(function(e) {
                        e.update && (e.prevState = e.update(e))
                    })
                }
            }, {
                key: "storeWait",
                value: function(e, t, n) {
                    var r = this,
                        o = t();
                    if (o || 0 === n) return Promise.resolve(o);
                    var i = a().uniqueId(),
                        u = function() {
                            return r.removeSubscription(e, I, {
                                uniqueId: i
                            })
                        };
                    return new Promise(function(o, a) {
                        var l = setTimeout(function() {
                            u(), a(Error("timeout"))
                        }, n * s.default.Millis.SECOND);
                        r.addSubscription(e, I, {
                            uniqueId: i
                        }, function() {
                            var e = t();
                            e && (clearTimeout(l), o(e))
                        })
                    }).then(function(e) {
                        return u(), e
                    })
                }
            }], m(e.prototype, t), n && m(e, n), r
        }()
}