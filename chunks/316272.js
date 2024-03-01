function(e, t, n) {
    "use strict";
    var i;
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007"), n("704744"), i = class {
        initialize() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            !this.isInitialized && (this.isInitialized = !0, this._initialize(...t))
        }
        terminate() {
            this.isInitialized && (this.isInitialized = !1, this._terminate())
        }
        constructor() {
            this.isInitialized = !1
        }
    }
}