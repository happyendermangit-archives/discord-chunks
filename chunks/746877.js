function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useHereMentionCallback: function() {
            return c
        }
    }), n("47120");
    var i = n("470079"),
        r = n("392711"),
        s = n.n(r),
        a = n("941028"),
        o = n("509848"),
        l = n("849522"),
        u = n("439170");
    let d = "@here";

    function _(e) {
        return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
    }

    function c(e, t, n) {
        let r = (0, l.default)(),
            [c, E] = i.useState(!1),
            I = i.useMemo(() => s().debounce(e => {
                var i, s, l, c;
                if (i = e, s = r, l = t, c = n, _(u.default.getProps(l, c).groups) || !(i.length < d.length) && !(i.length > s) && -1 !== i.indexOf(d) && ((0, a.subscribeChannel)(l, c, o.DEFAULT_RANGES), 1)) E(!0)
            }, 200, {
                maxWait: 500
            }), [r, t, n]);
        i.useEffect(() => {
            let i = u.default.getProps(t, n).groups;
            if (null != t && !_(i) && !c) return e.addListener("text-changed", I), () => {
                e.removeListener("text-changed", I), I.cancel()
            }
        }, [c, I, e, t, n])
    }
}