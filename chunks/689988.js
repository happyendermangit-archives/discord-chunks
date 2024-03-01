function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("70102"), n("222007"), n("704744");
    var i, l = n("913144");
    i = class {
        initialize() {
            this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                let [t, n] = e;
                l.default.subscribe(t, "function" == typeof n ? n : n.callback)
            }), this.stores.forEach((e, t) => {
                t.addChangeListener(e), e()
            }))
        }
        terminate(e) {
            !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                let [t, n] = e;
                l.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
            })))
        }
        _initialize() {}
        _terminate() {}
        constructor() {
            this.initializedCount = 0, this.actions = {}, this.stores = new Map
        }
    }
}