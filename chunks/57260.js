function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Collapsible: function() {
            return c
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("718017"),
        l = n("442837"),
        u = n("393238"),
        d = n("607070"),
        _ = n("925555");

    function c(e) {
        let {
            children: t,
            className: n,
            collapsibleContent: s,
            isExpanded: c
        } = e, [E, I] = r.useState(!1), T = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion), [f, S] = r.useState(!0), [h, A] = r.useState(!1), m = null != c ? c : E, {
            ref: N,
            height: p = 0
        } = (0, u.default)(), {
            ref: O,
            height: R = 0
        } = (0, u.default)(), C = (0, o.useSpring)({
            height: m ? p + R : R,
            immediate: f || T,
            config: o.config.stiff,
            onRest: () => A(!0)
        }), g = r.useCallback(() => {
            I(!E)
        }, [E, I]);
        return r.useLayoutEffect(() => {
            let e = setTimeout(() => {
                S(!1)
            }, 100);
            return () => clearTimeout(e)
        }, []), (0, i.jsx)("div", {
            className: a()(_.collapseable, {
                [_.toggled]: m
            }, n),
            children: (0, i.jsxs)(o.animated.div, {
                className: a()(_.contentExpandContainer, {
                    [_.showOverflow]: m && h
                }),
                style: C,
                children: [(0, i.jsx)("div", {
                    ref: O,
                    className: a()(_.header, {
                        [_.toggled]: m
                    }),
                    children: t({
                        onClick: g
                    })
                }), (0, i.jsx)("div", {
                    ref: N,
                    children: s
                })]
            })
        })
    }
}