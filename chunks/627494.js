function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("926515"),
        a = n("581031"),
        o = n("676125"),
        s = n("354848"),
        u = n("35179"),
        c = n("155763"),
        l = n("714050"),
        d = n("995739"),
        f = n("87046"),
        p = n("115726"),
        h = n("641236"),
        m = n("992051"),
        g = h("replace"),
        _ = TypeError,
        b = a("".indexOf),
        v = a("".replace),
        y = a("".slice),
        E = Math.max,
        S = function(e, t, n) {
            return n > e.length ? -1 : "" === t ? n : b(e, t, n)
        };
    r({
        target: "String",
        proto: !0
    }, {
        replaceAll: function(e, t) {
            var n, r, a, h, x, w, T, C, D = o(this),
                O = 0,
                M = 0,
                A = "";
            if (!u(e)) {
                if ((n = c(e)) && !~b(l(o(f(e))), "g")) throw _("`.replaceAll` does not allow non-global regexes");
                if (r = d(e, g)) return i(r, e, D, t);
                if (m && n) return v(l(D), e, t)
            }
            for (a = l(D), h = l(e), !(x = s(t)) && (t = l(t)), T = E(1, w = h.length), O = S(a, h, 0); - 1 !== O;) C = x ? l(t(h, O, a)) : p(h, a, O, [], void 0, t), A += y(a, M, O) + C, M = O + w, O = S(a, h, O + T);
            return M < a.length && (A += y(a, M)), A
        }
    })
}