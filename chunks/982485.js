function(t, r, n) {
    "use strict";
    var e = n("64980"),
        o = n("59393"),
        i = n("124852"),
        u = n("759413").indexOf,
        c = n("241818"),
        s = e([].push);
    t.exports = function(t, r) {
        var n, e = i(t),
            f = 0,
            a = [];
        for (n in e) !o(c, n) && o(e, n) && s(a, n);
        for (; r.length > f;) o(e, n = r[f++]) && (~u(a, n) || s(a, n));
        return a
    }
}