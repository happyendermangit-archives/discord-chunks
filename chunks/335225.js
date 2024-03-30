function(t, r, n) {
    "use strict";
    var e = n("566885"),
        o = n("581031"),
        i = n("470592"),
        u = n("339718"),
        f = n("49693"),
        c = n("29016"),
        a = o([].push),
        s = function(t) {
            var r = 1 === t,
                n = 2 === t,
                o = 3 === t,
                s = 4 === t,
                y = 6 === t,
                h = 7 === t,
                p = 5 === t || y;
            return function(v, d, l, g) {
                for (var A, w, b = u(v), x = i(b), T = e(d, l), E = f(x), I = 0, R = g || c, m = r ? R(v, E) : n || h ? R(v, 0) : void 0; E > I; I++)
                    if ((p || I in x) && (w = T(A = x[I], I, b), t)) {
                        if (r) m[I] = w;
                        else if (w) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return A;
                            case 6:
                                return I;
                            case 2:
                                a(m, A)
                        } else switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                a(m, A)
                        }
                    } return y ? -1 : o || s ? s : m
            }
        };
    t.exports = {
        forEach: s(0),
        map: s(1),
        filter: s(2),
        some: s(3),
        every: s(4),
        find: s(5),
        findIndex: s(6),
        filterReject: s(7)
    }
}