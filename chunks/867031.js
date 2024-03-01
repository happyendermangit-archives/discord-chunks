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
        i = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return r(t, [{
                key: "__attach",
                value: function() {}
            }, {
                key: "__detach",
                value: function() {}
            }, {
                key: "__getValue",
                value: function() {}
            }, {
                key: "__getAnimatedValue",
                value: function() {
                    return this.__getValue()
                }
            }, {
                key: "__addChild",
                value: function(t) {}
            }, {
                key: "__removeChild",
                value: function(t) {}
            }, {
                key: "__getChildren",
                value: function() {
                    return []
                }
            }]), t
        }();
    t.exports = i
}