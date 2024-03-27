function(t, r, n) {
    "use strict";
    var e = n("161581"),
        o = n("173850"),
        i = n("936940"),
        u = n("526988"),
        f = n("976418"),
        c = n("192291"),
        a = n("679622"),
        s = n("310731"),
        y = n("106295"),
        h = n("361270"),
        p = c.aTypedArray,
        v = c.exportTypedArrayMethod,
        d = e.Uint16Array,
        l = d && o(d.prototype.sort),
        g = !!l && !(i(function() {
            l(new d(2), null)
        }) && i(function() {
            l(new d(2), {})
        })),
        A = !!l && !i(function() {
            if (y) return y < 74;
            if (a) return a < 67;
            if (s) return !0;
            if (h) return h < 602;
            var t, r, n = new d(516),
                e = Array(516);
            for (t = 0; t < 516; t++) r = t % 4, n[t] = 515 - t, e[t] = t - 2 * r + 3;
            for (l(n, function(t, r) {
                    return (t / 4 | 0) - (r / 4 | 0)
                }), t = 0; t < 516; t++)
                if (n[t] !== e[t]) return !0
        });
    v("sort", function(t) {
        var r;
        if (void 0 !== t && u(t), A) return l(this, t);
        return f(p(this), (r = t, function(t, n) {
            return void 0 !== r ? +r(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
        }))
    }, !A || g)
}