function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHereMentionCallback: function() {
            return f
        }
    }), n("222007");
    var i = n("884691"),
        l = n("917351"),
        a = n.n(l),
        s = n("666020"),
        r = n("696605"),
        o = n("217535"),
        u = n("19766");
    let d = "@here";

    function c(e) {
        return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
    }

    function f(e, t, n) {
        let l = (0, o.default)(),
            [f, m] = i.useState(!1),
            p = i.useMemo(() => a.debounce(e => {
                (function(e, t, n, i) {
                    let l = u.default.getProps(n, i).groups;
                    return !!c(l) || !(e.length < d.length) && !(e.length > t) && -1 !== e.indexOf(d) && ((0, s.subscribeChannel)(n, i, r.DEFAULT_RANGES), !0)
                })(e, l, t, n) && m(!0)
            }, 200, {
                maxWait: 500
            }), [l, t, n]);
        i.useEffect(() => {
            let i = u.default.getProps(t, n).groups;
            if (null != t && !c(i) && !f) return e.addListener("text-changed", p), () => {
                e.removeListener("text-changed", p), p.cancel()
            }
        }, [f, p, e, t, n])
    }
}