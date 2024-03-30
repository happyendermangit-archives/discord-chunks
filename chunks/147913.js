function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("411104"), n("47120"), n("17089");
    var i = n("570140");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class s {
        initialize() {
            this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                let [t, n] = e;
                i.default.subscribe(t, "function" == typeof n ? n : n.callback)
            }), this.stores.forEach((e, t) => {
                t.addChangeListener(e), e()
            }))
        }
        terminate(e) {
            !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                let [t, n] = e;
                i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
            })))
        }
        _initialize() {}
        _terminate() {}
        constructor() {
            r(this, "initializedCount", 0), r(this, "actions", {}), r(this, "stores", new Map)
        }
    }
}