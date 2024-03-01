function(t, r, n) {
    "use strict";
    var e = n("814026"),
        o = n("541368"),
        i = n("16447");
    t.exports = e ? function(t, r, n) {
        return o.f(t, r, i(1, n))
    } : function(t, r, n) {
        return t[r] = n, t
    }
}