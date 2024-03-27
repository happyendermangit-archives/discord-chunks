function(t, r, n) {
    "use strict";
    var e = n("325008"),
        o = n("97131"),
        i = n("879");
    t.exports = e ? function(t, r, n) {
        return o.f(t, r, i(1, n))
    } : function(t, r, n) {
        return t[r] = n, t
    }
}