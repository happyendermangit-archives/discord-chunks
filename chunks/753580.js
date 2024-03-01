function(t, r, n) {
    "use strict";
    var e = n("886639"),
        i = n("868822"),
        o = n("116180"),
        u = n("579813"),
        a = n("763589"),
        f = n("904520"),
        c = n("308274"),
        s = n("790199"),
        l = n("55082"),
        h = n("579697"),
        p = Array;
    t.exports = function(t) {
        var r, n, v, g, d, y, b = o(t),
            m = f(this),
            _ = arguments.length,
            w = _ > 1 ? arguments[1] : void 0,
            k = void 0 !== w;
        k && (w = e(w, _ > 2 ? arguments[2] : void 0));
        var E = h(b),
            R = 0;
        if (E && !(this === p && a(E)))
            for (d = (g = l(b, E)).next, n = m ? new this : []; !(v = i(d, g)).done; R++) y = k ? u(g, w, [v.value, R], !0) : v.value, s(n, R, y);
        else
            for (r = c(b), n = m ? new this(r) : p(r); r > R; R++) y = k ? w(b[R], R) : b[R], s(n, R, y);
        return n.length = R, n
    }
}