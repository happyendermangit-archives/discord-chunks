function(t, e, n) {
    "use strict";
    var r = n("97131").f;
    t.exports = function(t, e, n) {
        n in t || r(t, n, {
            configurable: !0,
            get: function() {
                return e[n]
            },
            set: function(t) {
                e[n] = t
            }
        })
    }
}