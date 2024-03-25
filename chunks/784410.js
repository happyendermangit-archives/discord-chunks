function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return l
        }
    }), r("222007"), r("808653");
    var n = r("884691"),
        u = r("845962"),
        o = r("501768"),
        l = e => {
            let [t, r] = n.useState(e), [l, i] = n.useState(u.default.getProfileEffectById(e)), a = (0, o.default)(null == l), s = a.reduce((t, r, n) => (r.id === e && (t = n), t), 0), [, c] = n.useState(s), f = n.useRef(s);
            return n.useEffect(() => {
                r(e), i(u.default.getProfileEffectById(e))
            }, [e, a]), {
                increment: () => {
                    let e = (f.current + 1) % a.length;
                    f.current = e, c(e), r(a[e].id), i(a[e])
                },
                decrement: () => {
                    let e = 0 === f.current ? a.length - 1 : f.current - 1;
                    f.current = e, c(e), r(a[e].id), i(a[e])
                },
                id: t,
                preset: l
            }
        }
}