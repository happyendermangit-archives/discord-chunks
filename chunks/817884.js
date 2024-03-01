function(t, r, n) {
    "use strict";
    var e = n("503486"),
        o = n("404446"),
        i = n("664144"),
        u = n("727204"),
        f = n("492470"),
        c = n("188523"),
        a = n("332306"),
        s = n("43971"),
        y = n("693523"),
        h = n("239502"),
        p = c.aTypedArray,
        v = c.exportTypedArrayMethod,
        Uint16Array = e.Uint16Array,
        d = Uint16Array && o(Uint16Array.prototype.sort),
        g = !!d && !(i(function() {
            d(new Uint16Array(2), null)
        }) && i(function() {
            d(new Uint16Array(2), {})
        })),
        l = !!d && !i(function() {
            if (y) return y < 74;
            if (a) return a < 67;
            if (s) return !0;
            if (h) return h < 602;
            var t, r, n = new Uint16Array(516),
                e = Array(516);
            for (t = 0; t < 516; t++) r = t % 4, n[t] = 515 - t, e[t] = t - 2 * r + 3;
            for (d(n, function(t, r) {
                    return (t / 4 | 0) - (r / 4 | 0)
                }), t = 0; t < 516; t++)
                if (n[t] !== e[t]) return !0
        });
    v("sort", function(t) {
        var r;
        if (void 0 !== t && u(t), l) return d(this, t);
        return f(p(this), (r = t, function(t, n) {
            return void 0 !== r ? +r(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
        }))
    }, !l || g)
}