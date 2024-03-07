function(e, _, E) {
    "use strict";
    let t;
    E.r(_), E.d(_, {
        default: function() {
            return n
        }
    }), E("860677"), E("222007"), E("424973");
    var o, n, r = E("627445"),
        a = E.n(r),
        i = E("102053");
    E("704744");
    var I = E("782648"),
        T = E("805833");
    let s = [],
        S = !1,
        N = new Promise(e => {
            t = () => {
                e(), t = null
            }
        });
    (o = class {
        static initialize() {
            S = !0, s.forEach(e => e.initializeIfNeeded()), null != t && t()
        }
        static destroy() {
            s.length = 0, T.default.destroy()
        }
        static getAll() {
            return s
        }
        registerActionHandlers(e, _) {
            this._dispatcher.register(this.getName(), e, e => {
                (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny()) && (T.default.markChanged(this), T.default.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && T.default.resume(!1))
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
                _ > 5 && i.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", _)
            }
        }
        initialize() {}
        syncWith(e, _, E) {
            var t, o;
            let n;
            this.waitFor(...e);
            let r = 0,
                a = () => {
                    r !== T.default.getChangeSentinel() && (r = T.default.getChangeSentinel(), !1 !== _() && this.emitChange())
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
        }
        waitFor() {
            for (var e = arguments.length, _ = Array(e), E = 0; E < e; E++) _[E] = arguments[E];
            let t = _.map((e, _) => (a(null != e, "Store.waitFor(...) called with null Store at index ".concat(_, " for store ").concat(this.getName())), null != e._dispatcher) ? (a(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."), e.getDispatchToken()) : null);
            this._dispatcher.addDependencies(this.getDispatchToken(), t.filter(e => null != e))
        }
        emitChange() {
            T.default.markChanged(this)
        }
        getDispatchToken() {
            return this._dispatchToken
        }
        mustEmitChanges() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
            this._mustEmitChanges = e
        }
        constructor(e, _, E) {
            this._changeCallbacks = new I.default, this._reactChangeCallbacks = new I.default, this._isInitialized = !1, this.addChangeListener = this._changeCallbacks.add, this.addConditionalChangeListener = this._changeCallbacks.addConditional, this.removeChangeListener = this._changeCallbacks.remove, this.addReactChangeListener = this._reactChangeCallbacks.add, this.removeReactChangeListener = this._reactChangeCallbacks.remove, this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), this.registerActionHandlers(null != _ ? _ : {}, E), s.push(this), S && this.initializeIfNeeded()
        }
    }).initialized = N, n = o
}