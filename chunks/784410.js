function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    }), r("222007"), r("808653");
    var n = r("884691"),
        u = r("845962"),
        o = e => {
            let t = u.default.profileEffects,
                [r, o] = n.useState(e),
                [l, i] = n.useState(u.default.getProfileEffectById(e)),
                a = t.reduce((t, r, n) => (r.id === e && (t = n), t), 0),
                [, s] = n.useState(a),
                c = n.useRef(a);
            return n.useEffect(() => {
                o(e), i(u.default.getProfileEffectById(e))
            }, [e, t]), {
                increment: () => {
                    let e = (c.current + 1) % t.length;
                    c.current = e, s(e), o(t[e].id), i(t[e])
                },
                decrement: () => {
                    let e = 0 === c.current ? t.length - 1 : c.current - 1;
                    c.current = e, s(e), o(t[e].id), i(t[e])
                },
                id: r,
                preset: l
            }
        }
}