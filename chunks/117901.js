function(e, t, n) {
    "use strict";
    var r = n("566885"),
        i = n("926515"),
        a = n("339718"),
        o = n("627060"),
        s = n("908355"),
        u = n("933676"),
        c = n("49693"),
        l = n("182867"),
        d = n("981971"),
        f = n("11697"),
        p = Array;
    e.exports = function(e) {
        var t, n, h, m, g, _, b = a(e),
            v = u(this),
            y = arguments.length,
            E = y > 1 ? arguments[1] : void 0,
            S = void 0 !== E;
        S && (E = r(E, y > 2 ? arguments[2] : void 0));
        var x = f(b),
            w = 0;
        if (x && !(this === p && s(x)))
            for (g = (m = d(b, x)).next, n = v ? new this : []; !(h = i(g, m)).done; w++) _ = S ? o(m, E, [h.value, w], !0) : h.value, l(n, w, _);
        else
            for (t = c(b), n = v ? new this(t) : p(t); t > w; w++) _ = S ? E(b[w], w) : b[w], l(n, w, _);
        return n.length = w, n
    }
}