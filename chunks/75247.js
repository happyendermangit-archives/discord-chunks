function(e, _, E) {
    "use strict";
    let t;
    E.r(_), E.d(_, {
        Store: function() {
            return S
        }
    }), E("860677"), E("222007"), E("424973");
    var o = E("627445"),
        n = E.n(o),
        r = E("102053");
    E("704744");
    var a = E("782648"),
        i = E("805833");
    let I = [],
        s = !1,
        T = new Promise(e => {
            t = () => {
                e(), t = null
            }
        });
    class S {
        static initialize() {
            s = !0, I.forEach(e => e.initializeIfNeeded()), null != t && t()
        }
        static destroy() {
            I.length = 0, i.default.destroy()
        }
        static getAll() {
            return I
        }
        registerActionHandlers(e, _) {
            this._dispatcher.register(this.getName(), e, e => {
                (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) && (i.default.markChanged(this), i.default.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && i.default.resume(!1))
            }, _, this._dispatchToken)
        }
        getName() {
            var e;
            return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name
        }
        initializeIfNeeded() {
            if (!this._isInitialized) {
                let e = Date.now();
                this.initialize(), this._isInitialized = !0;
                let _ = Date.now() - e;
                _ > 5 && r.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", _)
            }
        }
        initialize() {}
        syncWith(e, _, E) {
            if (this.waitFor(...e), null != E) {
                var t, o;
                let n, r = 0,
                    a = () => {
                        r !== i.default.getChangeSentinel() && (r = i.default.getChangeSentinel(), !1 !== _() && this.emitChange())
                    };
                t = null != E ? E : 0, o = a, n = null, a = 0 === t ? function() {
                    clearImmediate(n), n = setImmediate(o)
                } : function() {
                    null == n && (n = setTimeout(() => {
                        try {
                            o()
                        } finally {
                            n = null
                        }
                    }, t))
                }, e.forEach(e => e.addChangeListener(a))
            } else e.forEach(e => {
                e._syncWiths.push({
                    func: _,
                    store: this
                })
            })
        }
        waitFor() {
            for (var e = arguments.length, _ = Array(e), E = 0; E < e; E++) _[E] = arguments[E];
            let t = _.map((e, _) => (n(null != e, "Store.waitFor(...) called with null Store at index ".concat(_, " for store ").concat(this.getName())), null != e._dispatcher) ? (n(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."), e.getDispatchToken()) : null);
            this._dispatcher.addDependencies(this.getDispatchToken(), t.filter(e => null != e))
        }
        emitChange() {
            i.default.markChanged(this)
        }
        getDispatchToken() {
            return this._dispatchToken
        }
        mustEmitChanges() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
            this._mustEmitChanges = e
        }
        constructor(e, _, E) {
            this._changeCallbacks = new a.ChangeListeners, this._reactChangeCallbacks = new a.ChangeListeners, this._syncWiths = [], this._isInitialized = !1, this.addChangeListener = this._changeCallbacks.add, this.addConditionalChangeListener = this._changeCallbacks.addConditional, this.removeChangeListener = this._changeCallbacks.remove, this.addReactChangeListener = this._reactChangeCallbacks.add, this.removeReactChangeListener = this._reactChangeCallbacks.remove, this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), this.registerActionHandlers(null != _ ? _ : {}, E), I.push(this), s && this.initializeIfNeeded()
        }
    }
    S.initialized = T
}