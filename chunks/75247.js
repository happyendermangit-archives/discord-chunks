function(e, _, E) {
    "use strict";
    let t;
    E.r(_), E.d(_, {
        default: function() {
            return n
        }
    }), E("860677"), E("222007"), E("424973");
    var o, n, r = E("627445"),
        i = E.n(r),
        a = E("102053");
    E("704744");
    var I = E("782648"),
        s = E("805833");
    let T = [],
        S = !1,
        N = new Promise(e => {
            t = () => {
                e(), t = null
            }
        });
    (o = class {
        static initialize() {
            S = !0, T.forEach(e => e.initializeIfNeeded()), null != t && t()
        }
        static destroy() {
            T.length = 0, s.default.destroy()
        }
        static getAll() {
            return T
        }
        registerActionHandlers(e, _) {
            this._dispatcher.register(this.getName(), e, e => {
                (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny()) && (s.default.markChanged(this), s.default.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && s.default.resume(!1))
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
                _ > 5 && a.default.mark("\uD83E\uDDA5", this.getName() + ".initialize()", _)
            }
        }
        initialize() {}
        syncWith(e, _, E) {
            var t, o;
            let n;
            this.waitFor(...e);
            let r = 0,
                i = () => {
                    r !== s.default.getChangeSentinel() && (r = s.default.getChangeSentinel(), !1 !== _() && this.emitChange())
                };
            t = null != E ? E : 0, o = i, n = null, i = 0 === t ? function() {
                clearImmediate(n), n = setImmediate(o)
            } : function() {
                null == n && (n = setTimeout(() => {
                    try {
                        o()
                    } finally {
                        n = null
                    }
                }, t))
            }, e.forEach(e => e.addChangeListener(i))
        }
        waitFor() {
            for (var e = arguments.length, _ = Array(e), E = 0; E < e; E++) _[E] = arguments[E];
            let t = _.map((e, _) => (i(null != e, "Store.waitFor(...) called with null Store at index ".concat(_, " for store ").concat(this.getName())), null != e._dispatcher) ? (i(e._dispatcher === this._dispatcher, "Stores belong to two separate dispatchers."), e.getDispatchToken()) : null);
            this._dispatcher.addDependencies(this.getDispatchToken(), t.filter(e => null != e))
        }
        emitChange() {
            s.default.markChanged(this)
        }
        getDispatchToken() {
            return this._dispatchToken
        }
        mustEmitChanges() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
            this._mustEmitChanges = e
        }
        constructor(e, _, E) {
            this._changeCallbacks = new I.default, this._reactChangeCallbacks = new I.default, this._isInitialized = !1, this.addChangeListener = this._changeCallbacks.add, this.addConditionalChangeListener = this._changeCallbacks.addConditional, this.removeChangeListener = this._changeCallbacks.remove, this.addReactChangeListener = this._reactChangeCallbacks.add, this.removeReactChangeListener = this._reactChangeCallbacks.remove, this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), this.registerActionHandlers(null != _ ? _ : {}, E), T.push(this), S && this.initializeIfNeeded()
        }
    }).initialized = N, n = o
}