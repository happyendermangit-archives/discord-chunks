function(t, r, n) {
    "use strict";
    var e = n("727204"),
        i = n("116180"),
        o = n("949580"),
        u = n("308274"),
        a = TypeError,
        f = function(t) {
            return function(r, n, f, c) {
                e(n);
                var s = i(r),
                    l = o(s),
                    h = u(s),
                    p = t ? h - 1 : 0,
                    v = t ? -1 : 1;
                if (f < 2)
                    for (;;) {
                        if (p in l) {
                            c = l[p], p += v;
                            break
                        }
                        if (p += v, t ? p < 0 : h <= p) throw a("Reduce of empty array with no initial value")
                    }
                for (; t ? p >= 0 : h > p; p += v) p in l && (c = n(c, l[p], p, s));
                return c
            }
        };
    t.exports = {
        left: f(!1),
        right: f(!0)
    }
}