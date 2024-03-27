function(t, r, n) {
    "use strict";
    var e = n("566885"),
        o = n("926515"),
        i = n("772425"),
        u = n("339718"),
        f = n("49693"),
        c = n("981971"),
        a = n("11697"),
        s = n("908355"),
        y = n("536524"),
        h = n("192291").aTypedArrayConstructor,
        p = n("165915");
    t.exports = function(t) {
        var r, n, v, d, l, g, A, w, b = i(this),
            x = u(t),
            T = arguments.length,
            E = T > 1 ? arguments[1] : void 0,
            I = void 0 !== E,
            R = a(x);
        if (R && !s(R))
            for (w = (A = c(x, R)).next, x = []; !(g = o(w, A)).done;) x.push(g.value);
        for (I && T > 2 && (E = e(E, arguments[2])), n = f(x), d = y(v = new(h(b))(n)), r = 0; n > r; r++) l = I ? E(x[r], r) : x[r], v[r] = d ? p(l) : +l;
        return v
    }
}