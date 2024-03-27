function(t, r, e) {
    "use strict";
    var n = e("526988"),
        o = e("339718"),
        i = e("470592"),
        a = e("49693"),
        c = TypeError,
        u = function(t) {
            return function(r, e, u, s) {
                n(e);
                var f = o(r),
                    h = i(f),
                    l = a(f),
                    p = t ? l - 1 : 0,
                    y = t ? -1 : 1;
                if (u < 2)
                    for (;;) {
                        if (p in h) {
                            s = h[p], p += y;
                            break
                        }
                        if (p += y, t ? p < 0 : l <= p) throw c("Reduce of empty array with no initial value")
                    }
                for (; t ? p >= 0 : l > p; p += y) p in h && (s = e(s, h[p], p, f));
                return s
            }
        };
    t.exports = {
        left: u(!1),
        right: u(!0)
    }
}