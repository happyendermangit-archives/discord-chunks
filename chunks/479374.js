function(e, t, n) {
    "use strict";
    var r = n("161581"),
        i = n("955903"),
        a = n("354848"),
        o = n("474180"),
        s = n("943329"),
        u = n("641236"),
        c = n("531379"),
        l = n("42024"),
        d = n("992051"),
        f = n("106295"),
        p = i && i.prototype,
        h = u("species"),
        m = !1,
        g = a(r.PromiseRejectionEvent),
        _ = o("Promise", function() {
            var e = s(i),
                t = e !== String(i);
            if (!t && 66 === f || d && !(p.catch && p.finally)) return !0;
            if (!f || f < 51 || !/native code/.test(e)) {
                var n = new i(function(e) {
                        e(1)
                    }),
                    r = function(e) {
                        e(function() {}, function() {})
                    };
                if ((n.constructor = {})[h] = r, !(m = n.then(function() {}) instanceof r)) return !0
            }
            return !t && (c || l) && !g
        });
    e.exports = {
        CONSTRUCTOR: _,
        REJECTION_EVENT: g,
        SUBCLASSING: m
    }
}