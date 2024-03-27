function(t, r, n) {
    "use strict";
    var e = n("926515"),
        o = n("526988"),
        i = n("24033"),
        u = n("938507"),
        f = n("11697"),
        c = TypeError;
    t.exports = function(t, r) {
        var n = arguments.length < 2 ? f(t) : r;
        if (o(n)) return i(e(n, t));
        throw c(u(t) + " is not iterable")
    }
}