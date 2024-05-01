function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458");
    var i = n("470079"),
        r = n("442837"),
        a = n("25251"),
        s = n("731896");
    t.default = e => {
        let [t, n] = i.useState(e), [o, l] = i.useState(a.default.getProfileEffectById(e));
        (0, s.useProfileEffectPreset)(e);
        let u = (0, r.useStateFromStores)([a.default], () => a.default.profileEffects),
            d = u.reduce((t, n, i) => (n.id === e && (t = i), t), 0),
            [, _] = i.useState(d),
            c = i.useRef(d);
        return i.useEffect(() => {
            n(e), l(a.default.getProfileEffectById(e))
        }, [e, u]), {
            increment: () => {
                let e = (c.current + 1) % u.length;
                c.current = e, _(e), n(u[e].id), l(u[e])
            },
            decrement: () => {
                let e = 0 === c.current ? u.length - 1 : c.current - 1;
                c.current = e, _(e), n(u[e].id), l(u[e])
            },
            id: t,
            preset: o
        }
    }
}