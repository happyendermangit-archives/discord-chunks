function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("292155"),
        i = n("379384"),
        o = n("765909"),
        s = function(e, t, n) {
            if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
            e = e || {};
            let s = e.random || (e.rng || (0, i.default))();
            if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = s[e];
                return t
            }
            return (0, o.unsafeStringify)(s)
        }
}