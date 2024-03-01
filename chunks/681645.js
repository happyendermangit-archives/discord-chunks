function(t, r, n) {
    "use strict";
    var e = n("541368").f;
    t.exports = function(t, r, n) {
        n in t || e(t, n, {
            configurable: !0,
            get: function() {
                return r[n]
            },
            set: function(t) {
                r[n] = t
            }
        })
    }
}