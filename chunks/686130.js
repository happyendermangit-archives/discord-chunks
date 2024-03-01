function(e, t, n) {
    "use strict";
    var r = n("859514"),
        a = n("868822"),
        i = n("64980"),
        o = n("590455"),
        s = n("125359"),
        c = n("551544"),
        l = n("238104"),
        u = n("998270"),
        d = n("47361"),
        p = n("623105"),
        f = n("87078"),
        m = n("174669"),
        h = n("140925"),
        v = m("replace"),
        g = TypeError,
        y = i("".indexOf),
        b = i("".replace),
        x = i("".slice),
        S = Math.max,
        w = function(e, t, n) {
            return n > e.length ? -1 : "" === t ? n : y(e, t, n)
        };
    r({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(e, t) {
            var n, r, i, m, D, C, k, P, E = o(this),
                T = 0,
                M = 0,
                R = "";
            if (!c(e)) {
                if ((n = l(e)) && !~y(u(o(p(e))), "g")) throw g("`.replaceAll` does not allow non-global regexes");
                if (r = d(e, v)) return a(r, e, E, t);
                if (h && n) return b(u(E), e, t)
            }
            for (i = u(E), m = u(e), !(D = s(t)) && (t = u(t)), k = S(1, C = m.length), T = w(i, m, 0); - 1 !== T;) P = D ? u(t(m, T, i)) : f(m, i, T, [], void 0, t), R += x(i, M, T) + P, M = T + C, T = w(i, m, T + k);
            return M < i.length && (R += x(i, M)), R
        }
    })
}