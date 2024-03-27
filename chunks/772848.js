function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("258099"),
        i = n("883830"),
        a = n("14309");
    t.default = function(e, t, n) {
        if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
        let o = (e = e || {}).random || (e.rng || (0, i.default))();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
            n = n || 0;
            for (let e = 0; e < 16; ++e) t[n + e] = o[e];
            return t
        }
        return (0, a.unsafeStringify)(o)
    }
}