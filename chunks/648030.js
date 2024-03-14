function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("843762"), n("424973"), n("70102"), n("222007");
    var i, s = n("627445"),
        r = n.n(s),
        a = n("917351"),
        o = n.n(a),
        l = n("599110"),
        u = n("718517"),
        d = n("843158"),
        c = n("861309"),
        f = n("694352"),
        _ = n("846678"),
        h = n("492249"),
        E = n("49111");
    let g = "RPC_STORE_WAIT",
        m = [];
    i = class {
        registerTransport(e) {
            e.on("connect", e => this.handleConnect(e)), e.on("request", (e, t) => this.handleRequest(e, t)), e.on("disconnect", (e, t) => this.handleDisconnect(e, t))
        }
        handleConnect(e) {
            this.sockets.add(e), this.onConnect(e);
            let t = {
                v: e.version,
                config: {
                    cdn_host: window.GLOBAL_ENV.CDN_HOST,
                    api_endpoint: window.GLOBAL_ENV.API_ENDPOINT,
                    environment: "production"
                }
            };
            if (e.transport === h.TransportTypes.IPC) {
                let n = this.getCurrentUser();
                if (null == n) {
                    e.close(E.RPCCloseCodes.CLOSE_NORMAL, "User logged out");
                    return
                }
                t.user = (0, f.default)(n)
            }
            this.dispatch(e, null, E.RPCCommands.DISPATCH, E.RPCEvents.READY, t)
        }
        handleDisconnect(e, t) {
            this.removeSubscriptions(e), this.sockets.delete(e), this.onDisconnect(e, t)
        }
        handleRequest(e, t) {
            new Promise(n => {
                if (null == t.nonce || "" === t.nonce) throw new c.default({
                    errorCode: E.RPCErrors.INVALID_PAYLOAD
                }, "Payload requires a nonce");
                let i = t.cmd,
                    s = this.commands[i];
                if (null == s) throw new c.default({
                    errorCode: E.RPCErrors.INVALID_COMMAND
                }, "Invalid command: ".concat(t.cmd));
                if (!(0, _.default)(e.authorization.scopes, s.scope)) throw new c.default({
                    errorCode: E.RPCErrors.INVALID_PERMISSIONS
                }, "Not authenticated or invalid scope");
                d.ExperimentRPCServerAnalyticsKillswitch.getCurrentConfig({
                    location: "RPCServer"
                }).enabled && l.default.track(E.AnalyticEvents.RPC_COMMAND_SENT, {
                    command: i,
                    scope: "object" == typeof s.scope ? JSON.stringify(s.scope) : s.scope,
                    application_id: e.application.id,
                    socket_scope: e.authorization.scopes.toString()
                }), n(s)
            }).then(e => new Promise(async (n, i) => {
                if (null != e.validation) {
                    let s = await this.getJoi();
                    r(null != e.validation, "command.validation must not be null"), s.validate(t.args, e.validation(s), {
                        convert: !1
                    }, t => {
                        if (null != t) {
                            i(new c.default({
                                errorCode: E.RPCErrors.INVALID_PAYLOAD
                            }, t.message));
                            return
                        }
                        n(e)
                    })
                } else n(e)
            })).then(n => {
                var i;
                return n.handler({
                    socket: e,
                    server: this,
                    cmd: t.cmd,
                    evt: t.evt,
                    nonce: t.nonce,
                    args: null !== (i = t.args) && void 0 !== i ? i : {},
                    isSocketConnected: () => this.sockets.has(e)
                })
            }).then(n => this.dispatch(e, t.nonce, t.cmd, null, n)).catch(n => {
                let {
                    code: i,
                    message: s
                } = n;
                return this.error(e, t.nonce, t.cmd, i, s)
            })
        }
        setCommandHandler(e, t) {
            this.commands[e] = t
        }
        setEventHandler(e, t) {
            this.events[e] = t
        }
        dispatch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.RPCCommands.DISPATCH,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            e.send({
                cmd: n,
                data: s,
                evt: i,
                nonce: t
            })
        }
        error(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.RPCCommands.DISPATCH,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.RPCErrors.UNKNOWN_ERROR,
                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Unknown Error";
            l.default.track(E.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT, {
                command: n,
                code: i,
                message: s
            }), this.dispatch(e, t, n, E.RPCEvents.ERROR, {
                code: i,
                message: s
            })
        }
        isSubscribed(e, t) {
            return void 0 !== this.subscriptions.find(n => n.socket.application.id === e && n.evt === t)
        }
        getSubscription(e, t, n) {
            return this.subscriptions.find(i => i.socket === e && i.evt === t && o.isEqual(i.args, n))
        }
        addSubscription(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                s = this.dispatch.bind(this, e, null, E.RPCCommands.DISPATCH, t);
            null == this.getSubscription(e, t, n) && this.subscriptions.push({
                update: i,
                dispatch: s,
                prevState: i ? i({
                    prevState: null,
                    dispatch: s
                }) : null,
                socket: e,
                evt: t,
                args: n
            })
        }
        removeSubscription(e, t, n) {
            o.remove(this.subscriptions, i => i.socket === e && i.evt === t && o.isEqual(i.args, n))
        }
        removeSubscriptions(e) {
            o.remove(this.subscriptions, t => t.socket === e)
        }
        dispatchToSubscriptions(e, t, n, i) {
            var s;
            if (!(null != i && "" !== i && (s = i, m.includes(s) || (m.unshift(s), m.splice(50), 0)))) this.subscriptions.forEach(i => {
                var s, r, a;
                if (i.evt === e) {
                    if (("function" != typeof t || t(i)) && ("object" != typeof t || (r = t, a = null !== (s = i.args) && void 0 !== s ? s : {}, o.isEqual(r, o.pick(a, Object.keys(r)))))) this.dispatch(i.socket, null, E.RPCCommands.DISPATCH, i.evt, n)
                }
            })
        }
        updateSubscriptions() {
            this.subscriptions.forEach(e => {
                e.update && (e.prevState = e.update(e))
            })
        }
        storeWait(e, t, n) {
            let i = t();
            if (i || 0 === n) return Promise.resolve(i);
            let s = o.uniqueId(),
                r = () => this.removeSubscription(e, g, {
                    uniqueId: s
                });
            return new Promise((i, a) => {
                let o = setTimeout(() => {
                    r(), a(Error("timeout"))
                }, n * u.default.Millis.SECOND);
                this.addSubscription(e, g, {
                    uniqueId: s
                }, () => {
                    let e = t();
                    e && (clearTimeout(o), i(e))
                })
            }).then(e => (r(), e))
        }
        constructor(e) {
            this.getCurrentUser = () => null, this.onConnect = () => {}, this.onDisconnect = () => {}, this.events = {}, this.commands = {}, this.sockets = new Set, this.subscriptions = [], this.getJoi = e
        }
    }
}