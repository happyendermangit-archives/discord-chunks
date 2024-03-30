function(e, t, n) {
    "use strict";
    var r = n("566885"),
        i = n("926515"),
        a = n("24033"),
        o = n("938507"),
        s = n("908355"),
        u = n("49693"),
        c = n("838957"),
        l = n("981971"),
        d = n("11697"),
        f = n("776245"),
        p = TypeError,
        h = function(e, t) {
            this.stopped = e, this.result = t
        },
        m = h.prototype;
    e.exports = function(e, t, n) {
        var g, _, b, v, y, E, S, x = n && n.that,
            w = !!(n && n.AS_ENTRIES),
            T = !!(n && n.IS_RECORD),
            C = !!(n && n.IS_ITERATOR),
            D = !!(n && n.INTERRUPTED),
            O = r(t, x),
            M = function(e) {
                return g && f(g, "normal", e), new h(!0, e)
            },
            A = function(e) {
                return w ? (a(e), D ? O(e[0], e[1], M) : O(e[0], e[1])) : D ? O(e, M) : O(e)
            };
        if (T) g = e.iterator;
        else if (C) g = e;
        else {
            if (!(_ = d(e))) throw p(o(e) + " is not iterable");
            if (s(_)) {
                for (b = 0, v = u(e); v > b; b++)
                    if ((y = A(e[b])) && c(m, y)) return y;
                return new h(!1)
            }
            g = l(e, _)
        }
        for (E = T ? e.next : g.next; !(S = i(E, g)).done;) {
            try {
                y = A(S.value)
            } catch (e) {
                f(g, "throw", e)
            }
            if ("object" == typeof y && y && c(m, y)) return y
        }
        return new h(!1)
    }
}