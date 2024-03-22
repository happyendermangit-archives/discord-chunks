function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        PersistedStore: function() {
            return s
        },
        DeviceSettingsStore: function() {
            return S
        },
        OfflineCacheStore: function() {
            return N
        }
    }), E("222007"), E("70102");
    var t = E("229042"),
        o = E.n(t),
        n = E("102053"),
        r = E("95410"),
        a = E("75247");
    let i = {
            _state: void 0,
            _version: void 0
        },
        I = null;
    class s extends a.Store {
        getClass() {
            return this.constructor
        }
        static clearAll(e) {
            return I = e, null == s._clearAllPromise && (s._clearAllPromise = new Promise(_ => {
                requestIdleCallback(() => {
                    s.clearPersistQueue(e), s.allPersistKeys.forEach(_ => {
                        s.shouldClear(e, _) && r.default.remove(_)
                    }), a.Store.getAll().forEach(_ => {
                        _ instanceof s && s.shouldClear(e, _.getClass().persistKey) && (_._isInitialized = !1, _.initializeIfNeeded())
                    }), s._clearAllPromise = null, _()
                }, {
                    timeout: 500
                })
            })), s._clearAllPromise
        }
        static shouldClear(e, _) {
            var E;
            return (null === (E = e.omit) || void 0 === E ? !void 0 : !E.includes(_)) && ("all" === e.type || "user-data-only" === e.type && !s.userAgnosticPersistKeys.has(_))
        }
        static clearPersistQueue(e) {
            s._writeResolvers.forEach((_, E) => {
                let [t, o] = _;
                s.shouldClear(e, E) && (s._writePromises.delete(E), s._writeResolvers.delete(E), cancelIdleCallback(o), t(!1))
            }), s._writePromises.clear(), s._writeResolvers.clear()
        }
        static getAllStates() {
            return Promise.all(Array.from(s._writePromises.values())).then(() => {
                let e = {};
                return s.allPersistKeys.forEach(_ => {
                    var E;
                    e[_] = (null !== (E = r.default.get(_)) && void 0 !== E ? E : i)._state
                }), e
            })
        }
        static initializeAll(e) {
            a.Store.getAll().forEach(_ => {
                if (_ instanceof s) {
                    let E = _.getClass().persistKey;
                    e.hasOwnProperty(E) && _.initializeFromState(e[E])
                }
            })
        }
        initializeFromState(e) {
            this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (s.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = !0)
        }
        static destroy() {
            I = null, a.Store.destroy(), s.clearPersistQueue({
                type: "all"
            }), s.allPersistKeys.clear(), s.userAgnosticPersistKeys.clear()
        }
        initializeIfNeeded() {
            if (!this._isInitialized) {
                let e = Date.now();
                s.allPersistKeys.add(this.getClass().persistKey);
                let {
                    state: _,
                    requiresPersist: E
                } = s.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
                this.initialize(_) && this.asyncPersist(), E && this.asyncPersist(), this._isInitialized = !0;
                let t = Date.now() - e;
                t > 5 && n.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", t)
            }
        }
        static migrateAndReadStoreState(e, _) {
            if (null != I && s.shouldClear(I, e)) return r.default.remove(e), {
                state: void 0,
                requiresPersist: !1
            };
            let E = null != s._clearAllPromise ? null : r.default.get(e),
                {
                    _state: t,
                    _version: o,
                    ...n
                } = null != E ? E : i,
                a = null == _ ? 0 : _.length;
            if (0 !== a && o !== a && null != _) {
                let e = null != o ? o : 0,
                    E = t;
                for (null == o && (E = n); e < a;) {
                    let t = _[e];
                    E = t(E), e++
                }
                return {
                    state: E,
                    requiresPersist: !0
                }
            }
            if (Object.values(n).length > 0) return {
                state: n,
                requiresPersist: !0
            };
            return {
                state: t,
                requiresPersist: !1
            }
        }
        asyncPersist() {
            let {
                persistKey: e,
                disableWrite: _,
                throttleDelay: E
            } = this.getClass();
            if (s.disableWrites || _) return Promise.resolve(!1);
            let t = s._writePromises.get(e);
            return null != t ? t : (t = new Promise(_ => {
                let t = E > 0 ? () => this.throttledCallback(_) : () => this.callback(_);
                s._writeResolvers.set(e, [_, requestIdleCallback(t, {
                    timeout: 500
                })])
            }), s._writePromises.set(e, t), t)
        }
        persist() {
            let {
                persistKey: e
            } = this.getClass(), _ = this.getState(), E = this._version;
            r.default.set(e, {
                _state: _,
                _version: E
            })
        }
        clear() {
            let {
                persistKey: e
            } = this.getClass();
            r.default.remove(e)
        }
        constructor(e, _) {
            if (super(e, _), this._version = null == this.getClass().migrations ? 0 : this.getClass().migrations.length, this.callback = e => {
                    let {
                        persistKey: _
                    } = this.getClass();
                    this.persist(), s._writePromises.delete(_), s._writeResolvers.delete(_), e()
                }, this.throttledCallback = o(e => this.callback(e), this.getClass().throttleDelay, {
                    leading: !1
                }), "string" != typeof this.getClass().persistKey) throw Error("".concat(this.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
            if ("function" != typeof this.initialize) throw Error("".concat(this.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
            if ("function" != typeof this.getState) throw Error("".concat(this.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
            this.addChangeListener(() => this.asyncPersist())
        }
    }
    s.allPersistKeys = new Set, s.userAgnosticPersistKeys = new Set, s._writePromises = new Map, s._writeResolvers = new Map, s.disableWrites = !1, s.disableWrite = !1, s.throttleDelay = 0;
    class T extends s {
        initializeFromState(e) {
            return s.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e)
        }
        initializeIfNeeded() {
            return s.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded()
        }
        getState() {
            return this.getUserAgnosticState()
        }
    }
    class S extends T {}
    class N extends T {}
}