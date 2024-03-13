function(t, r, e) {
    "use strict";
    var n = e("886639"),
        o = e("868822"),
        i = e("116180"),
        a = e("579813"),
        u = e("763589"),
        s = e("904520"),
        f = e("308274"),
        c = e("790199"),
        l = e("55082"),
        h = e("579697"),
        p = Array;
    t.exports = function(t) {
        var r, e, v, d, g, b, y = i(t),
            m = s(this),
            w = arguments.length,
            _ = w > 1 ? arguments[1] : void 0,
            k = void 0 !== _;
        k && (_ = n(_, w > 2 ? arguments[2] : void 0));
        var x = h(y),
            E = 0;
        if (x && !(this === p && u(x)))
            for (g = (d = l(y, x)).next, e = m ? new this : []; !(v = o(g, d)).done; E++) b = k ? a(d, _, [v.value, E], !0) : v.value, c(e, E, b);
        else
            for (r = f(y), e = m ? new this(r) : p(r); r > E; E++) b = k ? _(y[E], E) : y[E], c(e, E, b);
        return e.length = E, e
    }
}