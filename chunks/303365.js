function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        DeviceSettingsStore: function() {
            return N
        },
        OfflineCacheStore: function() {
            return O
        },
        default: function() {
            return o
        }
    }), E("222007"), E("70102");
    var t, o, n = E("773179"),
        r = E.n(n),
        a = E("102053"),
        i = E("95410"),
        I = E("75247");
    let T = {
            _state: void 0,
            _version: void 0
        },
        s = null;
    (t = class e extends I.default {
        getClass() {
            return this.constructor
        }
        static clearAll(_) {
            return s = _, null == e._clearAllPromise && (e._clearAllPromise = new Promise(E => {
                requestIdleCallback(() => {
                    e.clearPersistQueue(_), e.allPersistKeys.forEach(E => {
                        e.shouldClear(_, E) && i.default.remove(E)
                    }), I.default.getAll().forEach(E => {
                        E instanceof e && e.shouldClear(_, E.getClass().persistKey) && (E._isInitialized = !1, E.initializeIfNeeded())
                    }), e._clearAllPromise = null, E()
                }, {
                    timeout: 500
                })
            })), e._clearAllPromise
        }
        static shouldClear(_, E) {
            var t;
            return (null === (t = _.omit) || void 0 === t ? !void 0 : !t.includes(E)) && ("all" === _.type || "user-data-only" === _.type && !e.userAgnosticPersistKeys.has(E))
        }
        static clearPersistQueue(_) {
            e._writeResolvers.forEach((E, t) => {
                let [o, n] = E;
                e.shouldClear(_, t) && (e._writePromises.delete(t), e._writeResolvers.delete(t), cancelIdleCallback(n), o(!1))
            }), e._writePromises.clear(), e._writeResolvers.clear()
        }
        static getAllStates() {
            return Promise.all(Array.from(e._writePromises.values())).then(() => {
                let _ = {};
                return e.allPersistKeys.forEach(e => {
                    var E;
                    _[e] = (null !== (E = i.default.get(e)) && void 0 !== E ? E : T)._state
                }), _
            })
        }
        static initializeAll(_) {
            I.default.getAll().forEach(E => {
                if (E instanceof e) {
                    let e = E.getClass().persistKey;
                    _.hasOwnProperty(e) && E.initializeFromState(_[e])
                }
            })
        }
        initializeFromState(_) {
            this.initialize(_) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (e.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = !0)
        }
        static destroy() {
            s = null, I.default.destroy(), e.clearPersistQueue({
                type: "all"
            }), e.allPersistKeys.clear(), e.userAgnosticPersistKeys.clear()
        }
        initializeIfNeeded() {
            if (!this._isInitialized) {
                let _ = Date.now();
                e.allPersistKeys.add(this.getClass().persistKey);
                let {
                    state: E,
                    requiresPersist: t
                } = e.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
                this.initialize(E) && this.asyncPersist(), t && this.asyncPersist(), this._isInitialized = !0;
                let o = Date.now() - _;
                o > 5 && a.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", o)
            }
        }
        static migrateAndReadStoreState(_, E) {
            if (null != s && e.shouldClear(s, _)) return i.default.remove(_), {
                state: void 0,
                requiresPersist: !1
            };
            let t = null != e._clearAllPromise ? null : i.default.get(_),
                {
                    _state: o,
                    _version: n,
                    ...r
                } = null != t ? t : T,
                a = null == E ? 0 : E.length;
            if (0 !== a && n !== a && null != E) {
                let e = null != n ? n : 0,
                    _ = o;
                for (null == n && (_ = r); e < a;) {
                    let t = E[e];
                    _ = t(_), e++
                }
                return {
                    state: _,
                    requiresPersist: !0
                }
            }
            if (Object.values(r).length > 0) return {
                state: r,
                requiresPersist: !0
            };
            return {
                state: o,
                requiresPersist: !1
            }
        }
        asyncPersist() {
            let {
                persistKey: _,
                disableWrite: E,
                throttleDelay: t
            } = this.getClass();
            if (e.disableWrites || E) return Promise.resolve(!1);
            let o = e._writePromises.get(_);
            return null != o ? o : (o = new Promise(E => {
                let o = t > 0 ? () => this.throttledCallback(E) : () => this.callback(E);
                e._writeResolvers.set(_, [E, requestIdleCallback(o, {
                    timeout: 500
                })])
            }), e._writePromises.set(_, o), o)
        }
        persist() {
            let {
                persistKey: e
            } = this.getClass(), _ = this.getState(), E = this._version;
            i.default.set(e, {
                _state: _,
                _version: E
            })
        }
        clear() {
            let {
                persistKey: e
            } = this.getClass();
            i.default.remove(e)
        }
        constructor(_, E) {
            if (super(_, E), this._version = null == this.getClass().migrations ? 0 : this.getClass().migrations.length, this.callback = _ => {
                    let {
                        persistKey: E
                    } = this.getClass();
                    this.persist(), e._writePromises.delete(E), e._writeResolvers.delete(E), _()
                }, this.throttledCallback = r.throttle(e => this.callback(e), this.getClass().throttleDelay, {
                    leading: !1
                }), "string" != typeof this.getClass().persistKey) throw Error("".concat(this.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
            if ("function" != typeof this.initialize) throw Error("".concat(this.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
            if ("function" != typeof this.getState) throw Error("".concat(this.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
            this.addChangeListener(() => this.asyncPersist())
        }
    }).allPersistKeys = new Set, t.userAgnosticPersistKeys = new Set, t._writePromises = new Map, t._writeResolvers = new Map, t.disableWrites = !1, t.disableWrite = !1, t.throttleDelay = 0, o = t;
    class S extends o {
        initializeFromState(e) {
            return o.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e)
        }
        initializeIfNeeded() {
            return o.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded()
        }
        getState() {
            return this.getUserAgnosticState()
        }
    }
    class N extends S {}
    class O extends S {}
}