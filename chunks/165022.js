function(t, r, n) {
    "use strict";
    var e = n("969708"),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, r) {
        var n = e(t);
        return n < 0 ? o(n + r, 0) : i(n, r)
    }
}