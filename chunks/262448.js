function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Collapsible: function() {
            return f
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("907002"),
        l = n("446674"),
        u = n("731898"),
        c = n("206230"),
        d = n("716806");

    function f(e) {
        let {
            children: t,
            className: n,
            collapsibleContent: s,
            isExpanded: f
        } = e, [E, p] = r.useState(!1), h = (0, l.useStateFromStores)([c.default], () => c.default.useReducedMotion), [_, S] = r.useState(!0), [m, T] = r.useState(!1), g = null != f ? f : E, {
            ref: I,
            height: C = 0
        } = (0, u.default)(), {
            ref: v,
            height: A = 0
        } = (0, u.default)(), R = (0, o.useSpring)({
            height: g ? C + A : A,
            immediate: _ || h,
            config: o.config.stiff,
            onRest: () => T(!0)
        }), N = r.useCallback(() => {
            p(!E)
        }, [E, p]);
        return r.useLayoutEffect(() => {
            let e = setTimeout(() => {
                S(!1)
            }, 100);
            return () => clearTimeout(e)
        }, []), (0, i.jsx)("div", {
            className: a(d.collapseable, {
                [d.toggled]: g
            }, n),
            children: (0, i.jsxs)(o.animated.div, {
                className: a(d.contentExpandContainer, {
                    [d.showOverflow]: g && m
                }),
                style: R,
                children: [(0, i.jsx)("div", {
                    ref: v,
                    className: a(d.header, {
                        [d.toggled]: g
                    }),
                    children: t({
                        onClick: N
                    })
                }), (0, i.jsx)("div", {
                    ref: I,
                    children: s
                })]
            })
        })
    }
}