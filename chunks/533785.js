function(e, t, n) {
    "use strict";
    n.r(t), n("179870");
    var r = n("188129"),
        o = n("703864");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = new r.Logger("Flux"),
        s = function(e) {
            return e()
        },
        l = function() {
            var e, t, n;

            function r() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), a(this, "changedStores", new Set), a(this, "reactChangedStores", new Set), a(this, "changeSentinel", 0), a(this, "isBatchEmitting", !1), a(this, "isDispatching", !1), a(this, "isPaused", !1), a(this, "pauseTimer", null)
            }
            return e = r, t = [{
                key: "destroy",
                value: function() {
                    this.changedStores.clear(), this.reactChangedStores.clear(), s = function(e) {
                        return e()
                    }
                }
            }, {
                key: "injectBatchEmitChanges",
                value: function(e) {
                    s = e
                }
            }, {
                key: "pause",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.isPaused = !0, null !== this.pauseTimer && clearTimeout(this.pauseTimer), null !== t && (this.pauseTimer = setTimeout(function() {
                        e.pauseTimer = null, e.resume()
                    }, t))
                }
            }, {
                key: "resume",
                value: function() {
                    var e = this,
                        t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    clearTimeout(this.pauseTimer), this.pauseTimer = null, this.isPaused && (this.isPaused = !1, t && this.changedStores.size > 0 && setImmediate(function() {
                        return e.emit()
                    }))
                }
            }, {
                key: "batched",
                value: function(e) {
                    if (this.isPaused) return e();
                    try {
                        return this.isPaused = !0, e()
                    } finally {
                        this.resume(!1), this.emit()
                    }
                }
            }, {
                key: "emit",
                value: function() {
                    var e = this;
                    !this.isBatchEmitting && !this.isPaused && s(function() {
                        try {
                            e.isBatchEmitting = !0, e.changeSentinel++;
                            for (var t = 0, n = new Set, r = new Set; e.changedStores.size > 0;) {
                                if (++t > 100) throw u.error("LastFewActions", o.serialize()), Error("change emit loop detected, aborting");
                                e.emitNonReactOnce(n, r)
                            }
                            for (; e.reactChangedStores.size > 0;) {
                                if (++t > 100) throw u.error("LastFewActions", o.serialize()), Error("react change emit loop detected, aborting");
                                e.emitReactOnce()
                            }
                        } finally {
                            e.isBatchEmitting = !1
                        }
                    })
                }
            }, {
                key: "getChangeSentinel",
                value: function() {
                    return this.changeSentinel
                }
            }, {
                key: "getIsPaused",
                value: function() {
                    return this.isPaused
                }
            }, {
                key: "markChanged",
                value: function(e) {
                    (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), !this.isBatchEmitting && !this.isDispatching && !this.isPaused && this.emit()
                }
            }, {
                key: "emitNonReactOnce",
                value: function(e, t) {
                    var n = this,
                        r = Date.now(),
                        i = this.changedStores;
                    this.changedStores = new Set, i.forEach(function(e) {
                        t.add(e), e._changeCallbacks.invokeAll(), n.changedStores.delete(e)
                    }), i.forEach(function(r) {
                        r._syncWiths.forEach(function(r) {
                            var o = r.func,
                                i = r.store;
                            !e.has(o) && (e.add(o), !1 !== o() && !t.has(i) && (t.add(i), n.markChanged(i)))
                        })
                    });
                    var a = Date.now();
                    a - r > 100 && u.verbose("Slow batch emitChanges took ".concat(a - r, "ms recentActions:"), o.serialize())
                }
            }, {
                key: "emitReactOnce",
                value: function() {
                    var e = this,
                        t = Date.now(),
                        n = this.reactChangedStores;
                    this.reactChangedStores = new Set, n.forEach(function(t) {
                        t._reactChangeCallbacks.invokeAll(), e.reactChangedStores.delete(t)
                    });
                    var r = Date.now();
                    r - t > 100 && u.verbose("Slow batch emitReactChanges took ".concat(r - t, "ms recentActions:"), o.serialize())
                }
            }], i(e.prototype, t), n && i(e, n), r
        }();
    t.default = new l
}