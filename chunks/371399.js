function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Dispatcher: function() {
            return I
        }
    });
    var r = n("121014"),
        o = n("512722"),
        i = n.n(o),
        a = n("757167");
    n("179870");
    var u = n("188129"),
        s = n("283791"),
        l = n("533785"),
        c = n("703864"),
        f = n("392022");

    function d(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t && _(e.prototype, t), n && _(e, n), e
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var m = new Set(["APP_STATE_UPDATE", "CLEAR_CACHES", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_SOCKET", "SESSION_START", "UPLOAD_FAIL", "WRITE_CACHES"]),
        y = new u.Logger("Flux"),
        I = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                d(this, e), p(this, "_defaultBand", void 0), p(this, "_interceptors", []), p(this, "_subscriptions", {}), p(this, "_waitQueue", []), p(this, "_processingWaitQueue", !1), p(this, "_currentDispatchActionType", null), p(this, "_actionHandlers", new h), p(this, "_sentryUtils", void 0), p(this, "actionLogger", void 0), p(this, "functionCache", {}), this._defaultBand = t, this._sentryUtils = r, null != n ? this.actionLogger = n : this.actionLogger = new f.ActionLogger, this.actionLogger.on("trace", function(e, t, n) {
                    a.default.isTracing && n >= 10 && a.default.mark("\uD83E\uDDA5", t, n)
                })
            }
            return E(e, [{
                key: "isDispatching",
                value: function() {
                    return null != this._currentDispatchActionType
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n, r) {
                        t._waitQueue.push(function() {
                            try {
                                null == t.functionCache[e.type] && (t.functionCache[e.type] = function(e) {
                                    return t._dispatchWithDevtools(e)
                                }, O(t.functionCache[e.type], "dispatch_" + e.type)), t.functionCache[e.type](e), n()
                            } catch (e) {
                                r(e)
                            }
                        }), t.flushWaitQueue()
                    })
                }
            }, {
                key: "flushWaitQueue",
                value: function() {
                    if (!this._processingWaitQueue) try {
                        this._processingWaitQueue = !0, l.default.isDispatching = !0;
                        for (var e = 0; this._waitQueue.length > 0;) {
                            if (++e > 100) {
                                var t, n = c.serialize();
                                throw y.error("LastFewActions", n), null === (t = this._sentryUtils) || void 0 === t || t.addBreadcrumb({
                                    message: "Dispatcher: Dispatch loop detected",
                                    data: {
                                        lastFewActions: n
                                    }
                                }), Error("Dispatch loop detected, aborting")
                            }
                            for (; this._waitQueue.length > 0;) this._waitQueue.shift()();
                            l.default.emit()
                        }
                    } finally {
                        this._processingWaitQueue = !1, l.default.isDispatching = !1
                    }
                }
            }, {
                key: "_dispatchWithDevtools",
                value: function(e) {
                    this._dispatchWithLogging(e)
                }
            }, {
                key: "_dispatchWithLogging",
                value: function(e) {
                    var t = this;
                    i()(null == this._currentDispatchActionType, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ".concat(e.type, " Already dispatching: ").concat(this._currentDispatchActionType)), i()(e.type, "Dispatch.dispatch(...) called without an action type"), m.has(e.type) && y.log("Dispatching ".concat(e.type)), (0, s.mark)(e.type), c.add(e.type);
                    var n = this.actionLogger.log(e, function(n) {
                        try {
                            t._currentDispatchActionType = e.type, t._dispatch(e, n)
                        } finally {
                            t._currentDispatchActionType = null
                        }
                    });
                    n.totalTime > 100 && y.verbose("Slow dispatch on ".concat(e.type, ": ").concat(n.totalTime, "ms"));
                    try {
                        (0, s.measure)("DISPATCH[".concat(e.type, "]"), e.type)
                    } catch (e) {}
                }
            }, {
                key: "_dispatch",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = this._interceptors[Symbol.iterator](); !(n = (i = a.next()).done); n = !0)
                            if ((0, i.value)(e)) return !1
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    for (var u = this._actionHandlers.getOrderedActionHandlers(e), s = 0, l = u.length; s < l; s++) ! function(n, r) {
                        var o = u[n],
                            i = o.name,
                            a = o.actionHandler,
                            s = o.storeDidChange;
                        !1 !== t(i, function() {
                            return a(e)
                        }) && s(e)
                    }(s, 0);
                    var c = this._subscriptions[e.type];
                    null != c && t("__subscriptions", function() {
                        c.forEach(function(t) {
                            return t(e)
                        })
                    })
                }
            }, {
                key: "addInterceptor",
                value: function(e) {
                    this._interceptors.push(e)
                }
            }, {
                key: "wait",
                value: function(e) {
                    this._waitQueue.push(e), this.flushWaitQueue()
                }
            }, {
                key: "subscribe",
                value: function(e, t) {
                    var n = this._subscriptions[e];
                    null == n && (this._subscriptions[e] = n = new Set), n.add(t)
                }
            }, {
                key: "unsubscribe",
                value: function(e, t) {
                    var n = this._subscriptions[e];
                    null != n && (n.delete(t), 0 === n.size && delete this._subscriptions[e])
                }
            }, {
                key: "register",
                value: function(e, t, n, r, o) {
                    return this._actionHandlers.register(e, t, n, null != r ? r : this._defaultBand, o)
                }
            }, {
                key: "createToken",
                value: function() {
                    return this._actionHandlers.createToken()
                }
            }, {
                key: "addDependencies",
                value: function(e, t) {
                    this._actionHandlers.addDependencies(e, t)
                }
            }]), e
        }(),
        h = function() {
            function e() {
                d(this, e), p(this, "_orderedActionHandlers", {}), p(this, "_orderedCallbackTokens", null), p(this, "_lastID", 1), p(this, "_dependencyGraph", new r.DepGraph)
            }
            return E(e, [{
                key: "getOrderedActionHandlers",
                value: function(e) {
                    var t;
                    return null !== (t = this._orderedActionHandlers[e.type]) && void 0 !== t ? t : this._computeOrderedActionHandlers(e.type)
                }
            }, {
                key: "register",
                value: function(e, t, n, r) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
                    i()(r >= 0 && Number.isInteger(r), "band must be a non-negative integer.");
                    var a = {};
                    for (var u in t) ! function(n) {
                        var r = t[n],
                            o = function(e) {
                                return r(e)
                            };
                        O(o, "".concat(e, "_").concat(n)), a[n] = o
                    }(u);
                    return this._dependencyGraph.addNode(o, {
                        name: e,
                        band: r,
                        actionHandler: a,
                        storeDidChange: n
                    }), this._addToBand(o, r), this._invalidateCaches(), o
                }
            }, {
                key: "createToken",
                value: function() {
                    return "ID_".concat(this._lastID++)
                }
            }, {
                key: "addDependencies",
                value: function(e, t) {
                    this._validateDependencies(e, t);
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            this._dependencyGraph.addDependency(e, u)
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    this._invalidateCaches()
                }
            }, {
                key: "_validateDependencies",
                value: function(e, t) {}
            }, {
                key: "_invalidateCaches",
                value: function() {
                    this._orderedCallbackTokens = null, this._orderedActionHandlers = {}
                }
            }, {
                key: "_bandToken",
                value: function(e) {
                    var t = "band.".concat(e);
                    return !this._dependencyGraph.hasNode(t) && (this._dependencyGraph.addNode(t, {
                        name: t,
                        band: e,
                        actionHandler: {},
                        storeDidChange: function() {}
                    }), e > 0 && this._dependencyGraph.addDependency(t, this._bandToken(e - 1))), t
                }
            }, {
                key: "_addToBand",
                value: function(e, t) {
                    this._dependencyGraph.addDependency(this._bandToken(t), e), t > 0 && this._dependencyGraph.addDependency(e, this._bandToken(t - 1))
                }
            }, {
                key: "_computeOrderedActionHandlers",
                value: function(e) {
                    for (var t, n = null !== (t = this._orderedCallbackTokens) && void 0 !== t ? t : this._computeOrderedCallbackTokens(), r = [], o = 0, i = n.length; o < i; o++) {
                        var a = this._dependencyGraph.getNodeData(n[o]),
                            u = a.name,
                            s = a.actionHandler,
                            l = a.storeDidChange,
                            c = s[e];
                        null != c && r.push({
                            name: u,
                            actionHandler: c,
                            storeDidChange: l
                        })
                    }
                    return this._orderedActionHandlers[e] = r, r
                }
            }, {
                key: "_computeOrderedCallbackTokens",
                value: function() {
                    var e = this;
                    try {
                        var t = this._dependencyGraph.overallOrder();
                        return this._orderedCallbackTokens = t, t
                    } catch (t) {
                        if (null != t.cyclePath) {
                            var n = t.cyclePath.map(function(t) {
                                return "".concat(e._dependencyGraph.getNodeData(t).name, "(").concat(t, ")")
                            });
                            throw Error("Dependency Cycle Found: ".concat(n.join(" -> ")))
                        }
                        throw t
                    }
                }
            }]), e
        }();

    function O(e, t) {
        Object.defineProperty(e, "name", {
            value: t
        })
    }
}