function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("47120"), n("17089");
    class i {
        initialize() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            !this.isInitialized && (this.isInitialized = !0, this._initialize(...t))
        }
        terminate() {
            this.isInitialized && (this.isInitialized = !1, this._terminate())
        }
        constructor() {
            var e, t, n;
            e = this, n = !1, (t = "isInitialized") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}