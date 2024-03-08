function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        Dispatcher: function() {
            return A
        }
    }), E("222007"), E("424973"), E("70102");
    var t = E("487445"),
        o = E("627445"),
        n = E.n(o),
        r = E("102053");
    E("704744");
    var a = E("811022"),
        i = E("435660"),
        I = E("805833"),
        s = E("377678"),
        T = E("120082");
    let S = void 0,
        N = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]),
        O = new a.default("Flux");
    class A {
        isDispatching() {
            return null != this._currentDispatchActionType
        }
        dispatch(e) {
            return new Promise((_, E) => {
                this._waitQueue.push(() => {
                    try {
                        null == this.functionCache[e.type] && (this.functionCache[e.type] = e => this._dispatchWithDevtools(e), l(this.functionCache[e.type], "dispatch_" + e.type)), this.functionCache[e.type](e), _()
                    } catch (e) {
                        E(e)
                    }
                }), this.flushWaitQueue()
            })
        }
        flushWaitQueue() {
            if (!this._processingWaitQueue) try {
                this._processingWaitQueue = !0, I.default.isDispatching = !0;
                let _ = 0;
                for (; this._waitQueue.length > 0;) {
                    if (++_ > 100) {
                        var e;
                        let _ = s.serialize();
                        throw O.error("LastFewActions", _), null === (e = this._sentryUtils) || void 0 === e || e.addBreadcrumb({
                            message: "Dispatcher: Dispatch loop detected",
                            data: {
                                lastFewActions: _
                            }
                        }), Error("Dispatch loop detected, aborting")
                    }
                    for (; this._waitQueue.length > 0;) {
                        let e = this._waitQueue.shift();
                        e()
                    }
                    I.default.emit()
                }
            } finally {
                this._processingWaitQueue = !1, I.default.isDispatching = !1, null == S || S()
            }
        }
        _dispatchWithDevtools(e) {
            this._dispatchWithLogging(e)
        }
        _dispatchWithLogging(e) {
            n(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ".concat(e.type, " Already dispatching: ").concat(this._currentDispatchActionType)), n(e.type, "Dispatch.dispatch(...) called without an action type"), N.has(e.type) && O.log("Dispatching ".concat(e.type)), (0, i.mark)(e.type), s.add(e.type);
            let _ = this.actionLogger.log(e, _ => {
                try {
                    this._currentDispatchActionType = e.type, this._dispatch(e, _)
                } finally {
                    this._currentDispatchActionType = null
                }
            });
            _.totalTime > 100 && O.verbose("Slow dispatch on ".concat(e.type, ": ").concat(_.totalTime, "ms"));
            try {
                (0, i.measure)("DISPATCH[".concat(e.type, "]"), e.type)
            } catch (e) {}
        }
        _dispatch(e, _) {
            for (let _ of this._interceptors)
                if (_(e)) return !1;
            let E = this._actionHandlers.getOrderedActionHandlers(e);
            for (let t = 0, o = E.length; t < o; t++) {
                let {
                    name: o,
                    actionHandler: n,
                    storeDidChange: r
                } = E[t];
                !1 !== _(o, () => n(e)) && r(e)
            }
            let t = this._subscriptions[e.type];
            null != t && _("__subscriptions", () => {
                t.forEach(_ => _(e))
            })
        }
        addInterceptor(e) {
            this._interceptors.push(e)
        }
        wait(e) {
            this._waitQueue.push(e), this.flushWaitQueue()
        }
        subscribe(e, _) {
            let E = this._subscriptions[e];
            null == E && (this._subscriptions[e] = E = new Set), E.add(_)
        }
        unsubscribe(e, _) {
            let E = this._subscriptions[e];
            null != E && (E.delete(_), 0 === E.size && delete this._subscriptions[e])
        }
        register(e, _, E, t, o) {
            return this._actionHandlers.register(e, _, E, null != t ? t : this._defaultBand, o)
        }
        createToken() {
            return this._actionHandlers.createToken()
        }
        addDependencies(e, _) {
            this._actionHandlers.addDependencies(e, _)
        }
        constructor(e = 0, _, E) {
            this._interceptors = [], this._subscriptions = {}, this._waitQueue = [], this._processingWaitQueue = !1, this._currentDispatchActionType = null, this._actionHandlers = new R, this._sentryUtils = void 0, this.functionCache = {}, this._defaultBand = e, this._sentryUtils = E, null != _ ? this.actionLogger = _ : this.actionLogger = new T.ActionLogger, this.actionLogger.on("trace", (e, _, E) => {
                r.default.isTracing && E >= 10 && r.default.mark("\uD83E\uDDA5", _, E)
            })
        }
    }
    class R {
        getOrderedActionHandlers(e) {
            var _;
            return null !== (_ = this._orderedActionHandlers[e.type]) && void 0 !== _ ? _ : this._computeOrderedActionHandlers(e.type)
        }
        register(e, _, E, t) {
            let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
            n(t >= 0 && Number.isInteger(t), "band must be a non-negative integer.");
            let r = {};
            for (let E in _) {
                let t = _[E],
                    o = e => t(e);
                l(o, "".concat(e, "_").concat(E)), r[E] = o
            }
            return this._dependencyGraph.addNode(o, {
                name: e,
                band: t,
                actionHandler: r,
                storeDidChange: E
            }), this._addToBand(o, t), this._invalidateCaches(), o
        }
        createToken() {
            return "ID_".concat(this._lastID++)
        }
        addDependencies(e, _) {
            for (let E of (this._validateDependencies(e, _), _)) this._dependencyGraph.addDependency(e, E);
            this._invalidateCaches()
        }
        _validateDependencies(e, _) {}
        _invalidateCaches() {
            this._orderedCallbackTokens = null, this._orderedActionHandlers = {}
        }
        _bandToken(e) {
            let _ = "band.".concat(e);
            return !this._dependencyGraph.hasNode(_) && (this._dependencyGraph.addNode(_, {
                name: _,
                band: e,
                actionHandler: {},
                storeDidChange: () => {}
            }), e > 0 && this._dependencyGraph.addDependency(_, this._bandToken(e - 1))), _
        }
        _addToBand(e, _) {
            this._dependencyGraph.addDependency(this._bandToken(_), e), _ > 0 && this._dependencyGraph.addDependency(e, this._bandToken(_ - 1))
        }
        _computeOrderedActionHandlers(e) {
            var _;
            let E = null !== (_ = this._orderedCallbackTokens) && void 0 !== _ ? _ : this._computeOrderedCallbackTokens(),
                t = [];
            for (let _ = 0, o = E.length; _ < o; _++) {
                let {
                    name: o,
                    actionHandler: n,
                    storeDidChange: r
                } = this._dependencyGraph.getNodeData(E[_]), a = n[e];
                null != a && t.push({
                    name: o,
                    actionHandler: a,
                    storeDidChange: r
                })
            }
            return this._orderedActionHandlers[e] = t, t
        }
        _computeOrderedCallbackTokens() {
            try {
                let e = this._dependencyGraph.overallOrder();
                return this._orderedCallbackTokens = e, e
            } catch (e) {
                if (null != e.cyclePath) {
                    let _ = e.cyclePath.map(e => "".concat(this._dependencyGraph.getNodeData(e).name, "(").concat(e, ")"));
                    throw Error("Dependency Cycle Found: ".concat(_.join(" -> ")))
                }
                throw e
            }
        }
        constructor() {
            this._orderedActionHandlers = {}, this._orderedCallbackTokens = null, this._lastID = 1, this._dependencyGraph = new t.DepGraph
        }
    }

    function l(e, _) {
        Object.defineProperty(e, "name", {
            value: _
        })
    }
}