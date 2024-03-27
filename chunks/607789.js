function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458");
    var i = n("470079"),
        r = n("25251"),
        s = n("996678");
    t.default = e => {
        let [t, n] = i.useState(e), [a, o] = i.useState(r.default.getProfileEffectById(e)), l = null == r.default.getProfileEffectById(e) && null != e, u = i.useMemo(() => (0, s.getOrFetchProfileEffects)(l), [l]), d = u.reduce((t, n, i) => (n.id === e && (t = i), t), 0), [, _] = i.useState(d), c = i.useRef(d);
        return i.useEffect(() => {
            n(e), o(r.default.getProfileEffectById(e))
        }, [e, u]), {
            increment: () => {
                let e = (c.current + 1) % u.length;
                c.current = e, _(e), n(u[e].id), o(u[e])
            },
            decrement: () => {
                let e = 0 === c.current ? u.length - 1 : c.current - 1;
                c.current = e, _(e), n(u[e].id), o(u[e])
            },
            id: t,
            preset: a
        }
    }
}