function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return i
        }
    }), E("860677"), E("222007"), E("70102"), E("704744");
    var t = E("811022"),
        o = E("377678");
    let n = void 0,
        r = new t.Logger("Flux"),
        a = e => e();
    var i = new class e {
        destroy() {
            this.changedStores.clear(), this.reactChangedStores.clear(), a = e => e()
        }
        injectBatchEmitChanges(e) {
            a = e
        }
        pause() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            this.isPaused = !0, null !== this.pauseTimer && clearTimeout(this.pauseTimer), null !== e && (this.pauseTimer = setTimeout(() => {
                this.pauseTimer = null, this.resume()
            }, e))
        }
        resume() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            clearTimeout(this.pauseTimer), this.pauseTimer = null, this.isPaused && (this.isPaused = !1, e && this.changedStores.size > 0 && setImmediate(() => this.emit()))
        }
        batched(e) {
            if (this.isPaused) return e();
            try {
                return this.isPaused = !0, e()
            } finally {
                this.resume(!1), this.emit()
            }
        }
        emit() {
            !this.isBatchEmitting && !this.isPaused && a(() => {
                try {
                    this.isBatchEmitting = !0, this.changeSentinel++;
                    let e = 0,
                        _ = new Set,
                        E = new Set;
                    for (; this.changedStores.size > 0;) {
                        if (++e > 100) throw r.error("LastFewActions", o.serialize()), Error("change emit loop detected, aborting");
                        this.emitNonReactOnce(_, E)
                    }
                    for (; this.reactChangedStores.size > 0;) {
                        if (++e > 100) throw r.error("LastFewActions", o.serialize()), Error("react change emit loop detected, aborting");
                        this.emitReactOnce()
                    }
                } finally {
                    null == n || n(), this.isBatchEmitting = !1
                }
            })
        }
        getChangeSentinel() {
            return this.changeSentinel
        }
        getIsPaused() {
            return this.isPaused
        }
        markChanged(e) {
            (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), !this.isBatchEmitting && !this.isDispatching && !this.isPaused && this.emit()
        }
        emitNonReactOnce(e, _) {
            let E = Date.now(),
                t = this.changedStores;
            this.changedStores = new Set, t.forEach(e => {
                _.add(e), e._changeCallbacks.invokeAll(), this.changedStores.delete(e)
            }), t.forEach(E => {
                E._syncWiths.forEach(E => {
                    let {
                        func: t,
                        store: o
                    } = E;
                    if (e.has(t)) return;
                    e.add(t);
                    let n = t();
                    !1 !== n && !_.has(o) && (_.add(o), this.markChanged(o))
                })
            });
            let n = Date.now();
            n - E > 100 && r.verbose("Slow batch emitChanges took ".concat(n - E, "ms recentActions:"), o.serialize())
        }
        emitReactOnce() {
            let e = Date.now(),
                _ = this.reactChangedStores;
            this.reactChangedStores = new Set, _.forEach(e => {
                e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e)
            });
            let E = Date.now();
            E - e > 100 && r.verbose("Slow batch emitReactChanges took ".concat(E - e, "ms recentActions:"), o.serialize())
        }
        constructor() {
            this.changedStores = new Set, this.reactChangedStores = new Set, this.changeSentinel = 0, this.isBatchEmitting = !1, this.isDispatching = !1, this.isPaused = !1, this.pauseTimer = null
        }
    }
}