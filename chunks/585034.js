function(e, t, n) {
    "use strict";
    var r = n("886639"),
        a = n("868822"),
        o = n("418855"),
        i = n("649675"),
        s = n("763589"),
        u = n("308274"),
        l = n("470984"),
        c = n("55082"),
        d = n("579697"),
        f = n("161323"),
        p = TypeError,
        m = function(e, t) {
            this.stopped = e, this.result = t
        },
        h = m.prototype;
    e.exports = function(e, t, n) {
        var y, _, g, v, b, M, w, k = n && n.that,
            L = !!(n && n.AS_ENTRIES),
            D = !!(n && n.IS_RECORD),
            T = !!(n && n.IS_ITERATOR),
            S = !!(n && n.INTERRUPTED),
            Y = r(t, k),
            O = function(e) {
                return y && f(y, "normal", e), new m(!0, e)
            },
            x = function(e) {
                return L ? (o(e), S ? Y(e[0], e[1], O) : Y(e[0], e[1])) : S ? Y(e, O) : Y(e)
            };
        if (D) y = e.iterator;
        else if (T) y = e;
        else {
            if (!(_ = d(e))) throw p(i(e) + " is not iterable");
            if (s(_)) {
                for (g = 0, v = u(e); v > g; g++)
                    if ((b = x(e[g])) && l(h, b)) return b;
                return new m(!1)
            }
            y = c(e, _)
        }
        for (M = D ? e.next : y.next; !(w = a(M, y)).done;) {
            try {
                b = x(w.value)
            } catch (e) {
                f(y, "throw", e)
            }
            if ("object" == typeof b && b && l(h, b)) return b
        }
        return new m(!1)
    }
}