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
        h = function(e, t) {
            this.stopped = e, this.result = t
        },
        m = h.prototype;
    e.exports = function(e, t, n) {
        var y, _, g, v, b, M, w, k = n && n.that,
            L = !!(n && n.AS_ENTRIES),
            D = !!(n && n.IS_RECORD),
            T = !!(n && n.IS_ITERATOR),
            S = !!(n && n.INTERRUPTED),
            Y = r(t, k),
            x = function(e) {
                return y && f(y, "normal", e), new h(!0, e)
            },
            O = function(e) {
                return L ? (o(e), S ? Y(e[0], e[1], x) : Y(e[0], e[1])) : S ? Y(e, x) : Y(e)
            };
        if (D) y = e.iterator;
        else if (T) y = e;
        else {
            if (!(_ = d(e))) throw p(i(e) + " is not iterable");
            if (s(_)) {
                for (g = 0, v = u(e); v > g; g++)
                    if ((b = O(e[g])) && l(m, b)) return b;
                return new h(!1)
            }
            y = c(e, _)
        }
        for (M = D ? e.next : y.next; !(w = a(M, y)).done;) {
            try {
                b = O(w.value)
            } catch (e) {
                f(y, "throw", e)
            }
            if ("object" == typeof b && b && l(m, b)) return b
        }
        return new h(!1)
    }
}