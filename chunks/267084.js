function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    });
    var r = n("292155"),
        i = n("379384"),
        o = n("765909"),
        a = function(t, e, n) {
            if (r.default.randomUUID && !e && !t) return r.default.randomUUID();
            t = t || {};
            let a = t.random || (t.rng || (0, i.default))();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, e) {
                n = n || 0;
                for (let t = 0; t < 16; ++t) e[n + t] = a[t];
                return e
            }
            return (0, o.unsafeStringify)(a)
        }
}