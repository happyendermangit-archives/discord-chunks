function(t, e, n) {
    "use strict";
    n("70102");
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        Animation = function() {
            function Animation() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, Animation)
            }
            return r(Animation, [{
                key: "start",
                value: function(t, e, n, r) {}
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "__debouncedOnEnd",
                value: function(t) {
                    var e = this.__onEnd;
                    this.__onEnd = null, e && e(t)
                }
            }]), Animation
        }();
    t.exports = Animation
}