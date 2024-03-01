function(t, r, n) {
    "use strict";
    var e = n("886639"),
        o = n("64980"),
        i = n("949580"),
        u = n("116180"),
        f = n("308274"),
        c = n("688756"),
        a = o([].push),
        s = function(t) {
            var r = 1 === t,
                n = 2 === t,
                o = 3 === t,
                s = 4 === t,
                y = 6 === t,
                h = 7 === t,
                p = 5 === t || y;
            return function(v, d, g, l) {
                for (var A, w, x = u(v), b = i(x), T = e(d, g), I = f(b), E = 0, R = l || c, m = r ? R(v, I) : n || h ? R(v, 0) : void 0; I > E; E++)
                    if ((p || E in b) && (w = T(A = b[E], E, x), t)) {
                        if (r) m[E] = w;
                        else if (w) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return A;
                            case 6:
                                return E;
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