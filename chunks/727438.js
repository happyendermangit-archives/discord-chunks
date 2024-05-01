function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DeviceSettingsStore: function() {
            return E
        },
        OfflineCacheStore: function() {
            return I
        },
        PersistedStore: function() {
            return _
        }
    }), n("47120"), n("411104");
    var i = n("123763"),
        r = n.n(i),
        s = n("956067"),
        a = n("433517"),
        o = n("445346");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = {
            _state: void 0,
            _version: void 0
        },
        d = null;
    class _ extends o.Store {
        getClass() {
            return this.constructor
        }
        static clearAll(e) {
            return d = e, null == _._clearAllPromise && (_._clearAllPromise = new Promise(t => {
                requestIdleCallback(() => {
                    _.clearPersistQueue(e), _.allPersistKeys.forEach(t => {
                        _.shouldClear(e, t) && a.Storage.remove(t)
                    }), o.Store.getAll().forEach(t => {
                        t instanceof _ && _.shouldClear(e, t.getClass().persistKey) && (t._isInitialized = !1, t.initializeIfNeeded())
                    }), _._clearAllPromise = null, t()
                }, {
                    timeout: 500
                })
            })), _._clearAllPromise
        }
        static shouldClear(e, t) {
            var n;
            return (null === (n = e.omit) || void 0 === n ? !void 0 : !n.includes(t)) && ("all" === e.type || "user-data-only" === e.type && !_.userAgnosticPersistKeys.has(t))
        }
        static clearPersistQueue(e) {
            _._writeResolvers.forEach((t, n) => {
                let [i, r] = t;
                _.shouldClear(e, n) && (_._writePromises.delete(n), _._writeResolvers.delete(n), cancelIdleCallback(r), i(!1))
            }), _._writePromises.clear(), _._writeResolvers.clear()
        }
        static getAllStates() {
            return Promise.all(Array.from(_._writePromises.values())).then(() => {
                let e = {};
                return _.allPersistKeys.forEach(t => {
                    var n;
                    e[t] = (null !== (n = a.Storage.get(t)) && void 0 !== n ? n : u)._state
                }), e
            })
        }
        static initializeAll(e) {
            o.Store.getAll().forEach(t => {
                if (t instanceof _) {
                    let n = t.getClass().persistKey;
                    e.hasOwnProperty(n) && t.initializeFromState(e[n])
                }
            })
        }
        initializeFromState(e) {
            this.initialize(e) && this.asyncPersist(), this._isInitialized ? this.emitChange() : (_.allPersistKeys.add(this.getClass().persistKey), this._isInitialized = !0)
        }
        static destroy() {
            d = null, o.Store.destroy(), _.clearPersistQueue({
                type: "all"
            }), _.allPersistKeys.clear(), _.userAgnosticPersistKeys.clear()
        }
        initializeIfNeeded() {
            if (!this._isInitialized) {
                let e = Date.now();
                _.allPersistKeys.add(this.getClass().persistKey);
                let {
                    state: t,
                    requiresPersist: n
                } = _.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations);
                this.initialize(t) && this.asyncPersist(), n && this.asyncPersist(), this._isInitialized = !0;
                let i = Date.now() - e;
                i > 5 && s.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", i)
            }
        }
        static migrateAndReadStoreState(e, t) {
            if (null != d && _.shouldClear(d, e)) return a.Storage.remove(e), {
                state: void 0,
                requiresPersist: !1
            };
            let n = null != _._clearAllPromise ? null : a.Storage.get(e),
                {
                    _state: i,
                    _version: r,
                    ...s
                } = null != n ? n : u,
                o = null == t ? 0 : t.length;
            if (0 !== o && r !== o && null != t) {
                let e = null != r ? r : 0,
                    n = i;
                for (null == r && (n = s); e < o;) n = (0, t[e])(n), e++;
                return {
                    state: n,
                    requiresPersist: !0
                }
            }
            if (Object.values(s).length > 0) return {
                state: s,
                requiresPersist: !0
            };
            return {
                state: i,
                requiresPersist: !1
            }
        }
        asyncPersist() {
            let {
                persistKey: e,
                disableWrite: t,
                throttleDelay: n
            } = this.getClass();
            if (_.disableWrites || t) return Promise.resolve(!1);
            let i = _._writePromises.get(e);
            return null != i ? i : (i = new Promise(t => {
                let i = n > 0 ? () => this.throttledCallback(t) : () => this.callback(t);
                _._writeResolvers.set(e, [t, requestIdleCallback(i, {
                    timeout: 500
                })])
            }), _._writePromises.set(e, i), i)
        }
        persist() {
            let {
                persistKey: e
            } = this.getClass(), t = this.getState(), n = this._version;
            a.Storage.set(e, {
                _state: t,
                _version: n
            })
        }
        clear() {
            let {
                persistKey: e
            } = this.getClass();
            a.Storage.remove(e)
        }
        constructor(e, t) {
            if (super(e, t), l(this, "_version", null == this.getClass().migrations ? 0 : this.getClass().migrations.length), l(this, "callback", e => {
                    let {
                        persistKey: t
                    } = this.getClass();
                    this.persist(), _._writePromises.delete(t), _._writeResolvers.delete(t), e()
                }), l(this, "throttledCallback", r()(e => this.callback(e), this.getClass().throttleDelay, {
                    leading: !1
                })), "string" != typeof this.getClass().persistKey) throw Error("".concat(this.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
            if ("function" != typeof this.initialize) throw Error("".concat(this.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
            if ("function" != typeof this.getState) throw Error("".concat(this.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
            this.addChangeListener(() => this.asyncPersist())
        }
    }
    l(_, "allPersistKeys", new Set), l(_, "userAgnosticPersistKeys", new Set), l(_, "_writePromises", new Map), l(_, "_writeResolvers", new Map), l(_, "_clearAllPromise", void 0), l(_, "disableWrites", !1), l(_, "persistKey", void 0), l(_, "disableWrite", !1), l(_, "throttleDelay", 0), l(_, "migrations", void 0);
    class c extends _ {
        initializeFromState(e) {
            return _.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeFromState(e)
        }
        initializeIfNeeded() {
            return _.userAgnosticPersistKeys.add(this.getClass().persistKey), super.initializeIfNeeded()
        }
        getState() {
            return this.getUserAgnosticState()
        }
    }
    class E extends c {}
    class I extends c {}
}