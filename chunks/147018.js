function(t, r, n) {
    "use strict";
    var e = n("161581"),
        o = n("347722").f,
        i = n("251069"),
        u = n("859209"),
        c = n("492424"),
        s = n("381740"),
        f = n("474180");
    t.exports = function(t, r) {
        var n, a, p, l, v, y = t.target,
            b = t.global,
            h = t.stat;
        if (n = b ? e : h ? e[y] || c(y, {}) : (e[y] || {}).prototype)
            for (a in r) {
                if (l = r[a], p = t.dontCallGetSet ? (v = o(n, a)) && v.value : n[a], !f(b ? a : y + (h ? "." : "#") + a, t.forced) && void 0 !== p) {
                    if (typeof l == typeof p) continue;
                    s(l, p)
                }(t.sham || p && p.sham) && i(l, "sham", !0), u(n, a, l, t)
            }
    }
}