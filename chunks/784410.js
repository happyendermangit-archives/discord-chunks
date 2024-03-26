function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return l
        }
    }), r("222007"), r("808653");
    var n = r("884691"),
        o = r("845962"),
        u = r("501768"),
        l = e => {
            let [t, r] = n.useState(e), [l, i] = n.useState(o.default.getProfileEffectById(e)), a = null == o.default.getProfileEffectById(e) && null != e, s = n.useMemo(() => (0, u.getOrFetchProfileEffects)(a), [a]), c = s.reduce((t, r, n) => (r.id === e && (t = n), t), 0), [, f] = n.useState(c), d = n.useRef(c);
            return n.useEffect(() => {
                r(e), i(o.default.getProfileEffectById(e))
            }, [e, s]), {
                increment: () => {
                    let e = (d.current + 1) % s.length;
                    d.current = e, f(e), r(s[e].id), i(s[e])
                },
                decrement: () => {
                    let e = 0 === d.current ? s.length - 1 : d.current - 1;
                    d.current = e, f(e), r(s[e].id), i(s[e])
                },
                id: t,
                preset: l
            }
        }
}