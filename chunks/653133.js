function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("979590"),
        i = n.n(o),
        a = n("194926"),
        u = n("898511"),
        s = n("622780");
    t.default = function(e) {
        var t = (0, u.useStateFromStores)([s.default], function() {
            return s.default.desaturateUserColors ? s.default.saturation : 1
        });
        return (0, r.useMemo)(function() {
            var n = i()((0, a.int2hex)(e)).toHsl(),
                r = n.h,
                o = n.s,
                u = n.l,
                s = i()({
                    h: r,
                    s: o * t,
                    l: u
                });
            return {
                hex: s.toHexString(),
                hsl: s.toHslString()
            }
        }, [e, t])
    }
}