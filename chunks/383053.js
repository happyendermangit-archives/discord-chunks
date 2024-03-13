function(t, r, e) {
    "use strict";
    var n = e("727204"),
        o = e("116180"),
        i = e("949580"),
        a = e("308274"),
        u = TypeError,
        s = function(t) {
            return function(r, e, s, f) {
                n(e);
                var c = o(r),
                    l = i(c),
                    h = a(c),
                    p = t ? h - 1 : 0,
                    v = t ? -1 : 1;
                if (s < 2)
                    for (;;) {
                        if (p in l) {
                            f = l[p], p += v;
                            break
                        }
                        if (p += v, t ? p < 0 : h <= p) throw u("Reduce of empty array with no initial value")
                    }
                for (; t ? p >= 0 : h > p; p += v) p in l && (f = e(f, l[p], p, c));
                return f
            }
        };
    t.exports = {
        left: s(!1),
        right: s(!0)
    }
}