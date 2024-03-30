function(t, r, n) {
    "use strict";
    var e = n("161581"),
        o = n("972277"),
        i = n("740362"),
        u = n("457507"),
        c = n("400957"),
        s = n("769992"),
        f = e.Symbol,
        a = o("wks"),
        p = s ? f.for || f : f && f.withoutSetter || u;
    t.exports = function(t) {
        return !i(a, t) && (a[t] = c && i(f, t) ? f[t] : p("Symbol." + t)), a[t]
    }
}