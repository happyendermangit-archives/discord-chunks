function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Runtime: function() {
            return c
        }
    });
    var r = n("188129"),
        o = n("313312"),
        i = n("444675");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = "1" === i.env.KV_STORAGE_LOGGING,
        l = new r.Logger("Runtime"),
        c = function() {
            var e, t, n;

            function r() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r)
            }
            return e = r, t = null, n = [{
                key: "nextId",
                value: function() {
                    return ++this.counter
                }
            }, {
                key: "executeAsync",
                value: function(e, t) {
                    var n = this;
                    return this.initialize(), new Promise(function(r, o) {
                        var i = n.nextId();
                        t(i), n.pending.set(i, {
                            id: i,
                            tag: e,
                            started: performance.now(),
                            resolve: r,
                            reject: o
                        })
                    })
                }
            }, {
                key: "addCompletionCallback",
                value: function(e) {
                    return this.completionCallbacks.push(e), e
                }
            }, {
                key: "addDatabaseStateCallback",
                value: function(e) {
                    return this.dbStateCallbacks.push(e), e
                }
            }, {
                key: "removeCompletionCallback",
                value: function(e) {
                    this.completionCallbacks = this.completionCallbacks.filter(function(t) {
                        return t !== e
                    })
                }
            }, {
                key: "removeDatabaseStateCallback",
                value: function(e) {
                    this.dbStateCallbacks = this.dbStateCallbacks.filter(function(t) {
                        return t !== e
                    })
                }
            }, {
                key: "onResponse",
                value: function(e, t) {
                    var n = performance.now(),
                        r = this.pending.get(e.id);
                    null != r && (this.pending.delete(e.id), e.timings.materializationTimeNanoseconds = null != t ? t : 0, this.completeOperation(r, e, n), this.resolveOperation(r, e))
                }
            }, {
                key: "onStatus",
                value: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = this.dbStateCallbacks[Symbol.iterator](); !(t = (o = i.next()).done); t = !0)(0, o.value)(e.handle, e.state)
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "resolveOperation",
                value: function(e, t) {
                    t.ok ? e.resolve(t.data) : e.reject("string" == typeof t.data ? Error(t.data) : t.data)
                }
            }, {
                key: "completeOperation",
                value: function(e, t, n) {
                    if (this.completionCallbacks.length > 0) {
                        var r = {
                                id: e.id,
                                tag: e.tag,
                                ok: t.ok,
                                value: t.data,
                                timings: {
                                    queue: t.timings.queueTimeNanoseconds / 1e6,
                                    execution: t.timings.executionTimeNanoseconds / 1e6,
                                    materialization: t.timings.materializationTimeNanoseconds / 1e6,
                                    ccTotal: t.timings.totalTimeNanoseconds / 1e6,
                                    jsTotal: n - e.started
                                }
                            },
                            o = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var u, s = this.completionCallbacks[Symbol.iterator](); !(o = (u = s.next()).done); o = !0)(0, u.value)(r)
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !o && null != s.return && s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                    }
                }
            }, {
                key: "initialize",
                value: function() {
                    var e = this;
                    !this.initialized && (o.KV_RAW.setCallbacks({
                        status: function(t) {
                            return e.onStatus(t)
                        },
                        response: function(t, n) {
                            return e.onResponse(t, n)
                        }
                    }), s && (this.addCompletionCallback(function(e) {
                        var t = e.ok ? "completed" : "failed",
                            n = ["".concat(e.timings.execution.toFixed(3), "ms execution"), "".concat(e.timings.materialization.toFixed(3), "ms js materialization"), "".concat(e.timings.ccTotal.toFixed(3), "ms cc completion"), "".concat(e.timings.jsTotal.toFixed(3), "ms js reception")].join(", ");
                        l.info("".concat(e.tag, " (#").concat(e.id, ") ").concat(t, " in ").concat(e.timings.ccTotal.toFixed(3), "ms (").concat(n, ")."))
                    }), this.addDatabaseStateCallback(function(e, t) {
                        return l.info("".concat(e, " (state: ").concat(t, ")"))
                    })), this.initialized = !0)
                }
            }], t && a(e.prototype, t), n && a(e, n), r
        }();
    u(c, "counter", 0), u(c, "pending", new Map), u(c, "initialized", !1), u(c, "dbStateCallbacks", []), u(c, "completionCallbacks", [])
}