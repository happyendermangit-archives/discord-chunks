function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079"),
        r = n("979590"),
        s = n.n(r),
        a = n("866442"),
        o = n("442837"),
        l = n("607070");
    t.default = e => {
        let t = (0, o.useStateFromStores)([l.default], () => l.default.desaturateUserColors ? l.default.saturation : 1);
        return (0, i.useMemo)(() => {
            let {
                h: n,
                s: i,
                l: r
            } = s()((0, a.int2hex)(e)).toHsl(), o = s()({
                h: n,
                s: i * t,
                l: r
            });
            return {
                hex: o.toHexString(),
                hsl: o.toHslString()
            }
        }, [e, t])
    }
}