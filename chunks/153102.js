function(e, t, n) {
    "use strict";
    n.r(t), n("177593"), n("47120"), n("411104"), n("17089");
    var i = n("259443"),
        r = n("625306");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let a = new i.Logger("Flux"),
        o = e => e();
    t.default = new class e {
        destroy() {
            this.changedStores.clear(), this.reactChangedStores.clear(), o = e => e()
        }
        injectBatchEmitChanges(e) {
            o = e
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
            !this.isBatchEmitting && !this.isPaused && o(() => {
                try {
                    this.isBatchEmitting = !0, this.changeSentinel++;
                    let e = 0,
                        t = new Set,
                        n = new Set;
                    for (; this.changedStores.size > 0;) {
                        if (++e > 100) throw a.error("LastFewActions", r.serialize()), Error("change emit loop detected, aborting");
                        this.emitNonReactOnce(t, n)
                    }
                    for (; this.reactChangedStores.size > 0;) {
                        if (++e > 100) throw a.error("LastFewActions", r.serialize()), Error("react change emit loop detected, aborting");
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
            (e._changeCallbacks.hasAny() || e._syncWiths.length > 0) && this.changedStores.add(e), e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e), !this.isBatchEmitting && !this.isDispatching && !this.isPaused && this.emit()
        }
        emitNonReactOnce(e, t) {
            let n = Date.now(),
                i = this.changedStores;
            this.changedStores = new Set, i.forEach(e => {
                t.add(e), e._changeCallbacks.invokeAll(), this.changedStores.delete(e)
            }), i.forEach(n => {
                n._syncWiths.forEach(n => {
                    let {
                        func: i,
                        store: r
                    } = n;
                    if (!e.has(i)) e.add(i), !1 !== i() && !t.has(r) && (t.add(r), this.markChanged(r))
                })
            });
            let s = Date.now();
            s - n > 100 && a.verbose("Slow batch emitChanges took ".concat(s - n, "ms recentActions:"), r.serialize())
        }
        emitReactOnce() {
            let e = Date.now(),
                t = this.reactChangedStores;
            this.reactChangedStores = new Set, t.forEach(e => {
                e._reactChangeCallbacks.invokeAll(), this.reactChangedStores.delete(e)
            });
            let n = Date.now();
            n - e > 100 && a.verbose("Slow batch emitReactChanges took ".concat(n - e, "ms recentActions:"), r.serialize())
        }
        constructor() {
            s(this, "changedStores", new Set), s(this, "reactChangedStores", new Set), s(this, "changeSentinel", 0), s(this, "isBatchEmitting", !1), s(this, "isDispatching", !1), s(this, "isPaused", !1), s(this, "pauseTimer", null)
        }
    }
}