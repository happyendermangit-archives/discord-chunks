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
    var o = function e(t, n, o) {
        ! function(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }(this, e), r(this, "name", void 0), r(this, "description", void 0), r(this, "getFeatureValue", void 0), this.name = t, this.description = o, this.getFeatureValue = n, Object.defineProperty(this, "getFeatureValue", {
            value: n,
            configurable: !1,
            writable: !1
        })
    }
}