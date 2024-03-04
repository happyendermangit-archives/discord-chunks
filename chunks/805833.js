function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    }), E("860677"), E("70102"), E("222007"), E("704744");
    var t = E("811022"),
        o = E("377678");
    let n = new t.default("Flux"),
        r = e => e();
    var a = new class e {
        destroy() {
            this.changedStores.clear(), this.reactChangedStores.clear(), r = e => e()
        }
        injectBatchEmitChanges(e) {
            r = e
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
            !this.isBatchEmitting && !this.isPaused && r(() => {
                try {
                    this.isBatchEmitting = !0, this.changeSentinel++;
                    let e = 0;
                    for (; this.changedStores.size > 0;) {
                        if (++e > 100) throw n.error("LastFewActions", o.serialize()), Error("change emit loop detected, aborting");
                        this.emitNonReactOnce()
                    }
                    for (; this.reactChangedStores.size > 0;) {
                        if (++e > 100) throw n.error("LastFewActions", o.serialize()), Error("react change emit loop detected, aborting");
                        this.emitReactOnce()
                    }
                } finally {
                    this.isBatchEmitting = !1
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
            e._changeCallbacks.hasAny() && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), !this.isBatchEmitting && !this.isDispatching && !this.isPaused && this.emit()
        }
        emitNonReactOnce() {
            let e = Date.now(),
                _ = this.changedStores;
            this.changedStores = new Set, _.forEach(e => {
                e._changeCallbacks.invokeAll(), this.changedStores.delete(e)
            });
            let E = Date.now();
            E - e > 100 && n.verbose("Slow batch emitChanges took ".concat(E - e, "ms recentActions:"), o.serialize())
        }
        emitReactOnce() {
            let e = Date.now(),
                _ = this.reactChangedStores;
            this.reactChangedStores = new Set, _.forEach(e => {
                e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e)
            });
            let E = Date.now();
            E - e > 100 && n.verbose("Slow batch emitReactChanges took ".concat(E - e, "ms recentActions:"), o.serialize())
        }
        constructor() {
            this.changedStores = new Set, this.reactChangedStores = new Set, this.changeSentinel = 0, this.isBatchEmitting = !1, this.isDispatching = !1, this.isPaused = !1, this.pauseTimer = null
        }
    }
}