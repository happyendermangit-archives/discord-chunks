function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Collapsible: function() {
            return f
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("907002"),
        l = n("446674"),
        u = n("731898"),
        d = n("206230"),
        c = n("716806");

    function f(e) {
        let {
            children: t,
            className: n,
            collapsibleContent: r,
            isExpanded: f
        } = e, [_, E] = s.useState(!1), h = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion), [g, m] = s.useState(!0), [p, S] = s.useState(!1), v = null != f ? f : _, {
            ref: T,
            height: I = 0
        } = (0, u.default)(), {
            ref: C,
            height: A = 0
        } = (0, u.default)(), y = (0, o.useSpring)({
            height: v ? I + A : A,
            immediate: g || h,
            config: o.config.stiff,
            onRest: () => S(!0)
        }), N = s.useCallback(() => {
            E(!_)
        }, [_, E]);
        return s.useLayoutEffect(() => {
            let e = setTimeout(() => {
                m(!1)
            }, 100);
            return () => clearTimeout(e)
        }, []), (0, i.jsx)("div", {
            className: a(c.collapseable, {
                [c.toggled]: v
            }, n),
            children: (0, i.jsxs)(o.animated.div, {
                className: a(c.contentExpandContainer, {
                    [c.showOverflow]: v && p
                }),
                style: y,
                children: [(0, i.jsx)("div", {
                    ref: C,
                    className: a(c.header, {
                        [c.toggled]: v
                    }),
                    children: t({
                        onClick: N
                    })
                }), (0, i.jsx)("div", {
                    ref: T,
                    children: r
                })]
            })
        })
    }
}