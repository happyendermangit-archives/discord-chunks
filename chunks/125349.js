function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = function e(t, n) {
        ! function(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }(this, e), r(this, "skuId", void 0), r(this, "skuFeatures", void 0), this.skuId = t, this.skuFeatures = n
    }
}