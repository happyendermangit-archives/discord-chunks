function(t, r, n) {
    "use strict";
    var e = n("49693");
    t.exports = function(t, r) {
        for (var n = 0, o = e(r), i = new t(o); o > n;) i[n] = r[n++];
        return i
    }
}