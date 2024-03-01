function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("884691"),
        i = n("656280"),
        a = n.n(i),
        s = n("509043"),
        r = n("446674"),
        o = n("206230"),
        u = e => {
            let t = (0, r.useStateFromStores)([o.default], () => o.default.desaturateUserColors ? o.default.saturation : 1),
                n = (0, l.useMemo)(() => {
                    let {
                        h: n,
                        s: l,
                        l: i
                    } = a((0, s.int2hex)(e)).toHsl(), r = a({
                        h: n,
                        s: l * t,
                        l: i
                    });
                    return {
                        hex: r.toHexString(),
                        hsl: r.toHslString()
                    }
                }, [e, t]);
            return n
        }
}