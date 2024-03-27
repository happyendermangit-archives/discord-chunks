function(t, r, n) {
    "use strict";
    var e = n("49693");
    t.exports = function(t, r) {
        for (var n = e(t), o = new r(n), i = 0; i < n; i++) o[i] = t[n - i - 1];
        return o
    }
}