function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Dispatcher: function() {
            return T
        }
    }), n("47120"), n("653041"), n("411104");
    var i = n("121014"),
        r = n("512722"),
        a = n.n(r),
        s = n("956067");
    n("17089");
    var o = n("259443"),
        l = n("986529"),
        u = n("153102"),
        d = n("625306"),
        _ = n("420970");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]),
        I = new o.Logger("Flux");
    class T {
        isDispatching() {
            return null != this._currentDispatchActionType
        }
        dispatch(e) {
            return new Promise((t, n) => {
                this._waitQueue.push(() => {
                    try {
                        null == this.functionCache[e.type] && (this.functionCache[e.type] = e => this._dispatchWithDevtools(e), S(this.functionCache[e.type], "dispatch_" + e.type)), this.functionCache[e.type](e), t()
                    } catch (e) {
                        n(e)
                    }
                }), this.flushWaitQueue()
            })
        }
        flushWaitQueue() {
            if (!this._processingWaitQueue) try {
                this._processingWaitQueue = !0, u.default.isDispatching = !0;
                let t = 0;
                for (; this._waitQueue.length > 0;) {
                    if (++t > 100) {
                        var e;
                        let t = d.serialize();
                        throw I.error("LastFewActions", t), null === (e = this._sentryUtils) || void 0 === e || e.addBreadcrumb({
                            message: "Dispatcher: Dispatch loop detected",
                            data: {
                                lastFewActions: t
                            }
                        }), Error("Dispatch loop detected, aborting")
                    }
                    for (; this._waitQueue.length > 0;) this._waitQueue.shift()();
                    u.default.emit()
                }
            } finally {
                this._processingWaitQueue = !1, u.default.isDispatching = !1
            }
        }
        _dispatchWithDevtools(e) {
            this._dispatchWithLogging(e)
        }
        _dispatchWithLogging(e) {
            a()(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ".concat(e.type, " Already dispatching: ").concat(this._currentDispatchActionType)), a()(e.type, "Dispatch.dispatch(...) called without an action type"), E.has(e.type) && I.log("Dispatching ".concat(e.type)), (0, l.mark)(e.type), d.add(e.type);
            let t = this.actionLogger.log(e, t => {
                try {
                    this._currentDispatchActionType = e.type, this._dispatch(e, t)
                } finally {
                    this._currentDispatchActionType = null
                }
            });
            t.totalTime > 100 && I.verbose("Slow dispatch on ".concat(e.type, ": ").concat(t.totalTime, "ms"));
            try {
                (0, l.measure)("DISPATCH[".concat(e.type, "]"), e.type)
            } catch (e) {}
        }
        _dispatch(e, t) {
            for (let t of this._interceptors)
                if (t(e)) return !1;
            let n = this._actionHandlers.getOrderedActionHandlers(e);
            for (let i = 0, r = n.length; i < r; i++) {
                let {
                    name: r,
                    actionHandler: a,
                    storeDidChange: s
                } = n[i];
                !1 !== t(r, () => a(e)) && s(e)
            }
            let i = this._subscriptions[e.type];
            null != i && t("__subscriptions", () => {
                i.forEach(t => t(e))
            })
        }
        addInterceptor(e) {
            this._interceptors.push(e)
        }
        wait(e) {
            this._waitQueue.push(e), this.flushWaitQueue()
        }
        subscribe(e, t) {
            let n = this._subscriptions[e];
            null == n && (this._subscriptions[e] = n = new Set), n.add(t)
        }
        unsubscribe(e, t) {
            let n = this._subscriptions[e];
            null != n && (n.delete(t), 0 === n.size && delete this._subscriptions[e])
        }
        register(e, t, n, i, r) {
            return this._actionHandlers.register(e, t, n, null != i ? i : this._defaultBand, r)
        }
        createToken() {
            return this._actionHandlers.createToken()
        }
        addDependencies(e, t) {
            this._actionHandlers.addDependencies(e, t)
        }
        constructor(e = 0, t, n) {
            c(this, "_defaultBand", void 0), c(this, "_interceptors", []), c(this, "_subscriptions", {}), c(this, "_waitQueue", []), c(this, "_processingWaitQueue", !1), c(this, "_currentDispatchActionType", null), c(this, "_actionHandlers", new f), c(this, "_sentryUtils", void 0), c(this, "actionLogger", void 0), c(this, "functionCache", {}), this._defaultBand = e, this._sentryUtils = n, null != t ? this.actionLogger = t : this.actionLogger = new _.ActionLogger, this.actionLogger.on("trace", (e, t, n) => {
                s.default.isTracing && n >= 10 && s.default.mark("\uD83E\uDDA5", t, n)
            })
        }
    }
    class f {
        getOrderedActionHandlers(e) {
            var t;
            return null !== (t = this._orderedActionHandlers[e.type]) && void 0 !== t ? t : this._computeOrderedActionHandlers(e.type)
        }
        register(e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
            a()(i >= 0 && Number.isInteger(i), "band must be a non-negative integer.");
            let s = {};
            for (let n in t) {
                let i = t[n],
                    r = e => i(e);
                S(r, "".concat(e, "_").concat(n)), s[n] = r
            }
            return this._dependencyGraph.addNode(r, {
                name: e,
                band: i,
                actionHandler: s,
                storeDidChange: n
            }), this._addToBand(r, i), this._invalidateCaches(), r
        }
        createToken() {
            return "ID_".concat(this._lastID++)
        }
        addDependencies(e, t) {
            for (let n of (this._validateDependencies(e, t), t)) this._dependencyGraph.addDependency(e, n);
            this._invalidateCaches()
        }
        _validateDependencies(e, t) {}
        _invalidateCaches() {
            this._orderedCallbackTokens = null, this._orderedActionHandlers = {}
        }
        _bandToken(e) {
            let t = "band.".concat(e);
            return !this._dependencyGraph.hasNode(t) && (this._dependencyGraph.addNode(t, {
                name: t,
                band: e,
                actionHandler: {},
                storeDidChange: () => {}
            }), e > 0 && this._dependencyGraph.addDependency(t, this._bandToken(e - 1))), t
        }
        _addToBand(e, t) {
            this._dependencyGraph.addDependency(this._bandToken(t), e), t > 0 && this._dependencyGraph.addDependency(e, this._bandToken(t - 1))
        }
        _computeOrderedActionHandlers(e) {
            var t;
            let n = null !== (t = this._orderedCallbackTokens) && void 0 !== t ? t : this._computeOrderedCallbackTokens(),
                i = [];
            for (let t = 0, r = n.length; t < r; t++) {
                let {
                    name: r,
                    actionHandler: a,
                    storeDidChange: s
                } = this._dependencyGraph.getNodeData(n[t]), o = a[e];
                null != o && i.push({
                    name: r,
                    actionHandler: o,
                    storeDidChange: s
                })
            }
            return this._orderedActionHandlers[e] = i, i
        }
        _computeOrderedCallbackTokens() {
            try {
                let e = this._dependencyGraph.overallOrder();
                return this._orderedCallbackTokens = e, e
            } catch (e) {
                if (null != e.cyclePath) {
                    let t = e.cyclePath.map(e => "".concat(this._dependencyGraph.getNodeData(e).name, "(").concat(e, ")"));
                    throw Error("Dependency Cycle Found: ".concat(t.join(" -> ")))
                }
                throw e
            }
        }
        constructor() {
            c(this, "_orderedActionHandlers", {}), c(this, "_orderedCallbackTokens", null), c(this, "_lastID", 1), c(this, "_dependencyGraph", new i.DepGraph)
        }
    }

    function S(e, t) {
        Object.defineProperty(e, "name", {
            value: t
        })
    }
}