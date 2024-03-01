function(t, r, n) {
    "use strict";
    var e = n("868822"),
        o = n("727204"),
        i = n("418855"),
        u = n("649675"),
        f = n("579697"),
        c = TypeError;
    t.exports = function(t, r) {
        var n = arguments.length < 2 ? f(t) : r;
        if (o(n)) return i(e(n, t));
        throw c(u(t) + " is not iterable")
    }
}