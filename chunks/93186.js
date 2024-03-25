function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createAdvancedScroller: function() {
            return u
        }
    });
    var i = n("37983"),
        r = n("884691"),
        o = n("414456"),
        s = n.n(o),
        l = n("15542"),
        a = n("942005");

    function u(e, t, n) {
        let o = (0, a.getScrollbarSpecs)(e);
        return r.forwardRef(function(u, c) {
            let {
                children: d,
                className: _,
                dir: f = "ltr",
                orientation: S = "vertical",
                fade: E = !1,
                customTheme: g = !1,
                paddingFix: m = !0,
                style: h,
                ...p
            } = u, {
                scrollerRef: I,
                getScrollerState: T
            } = (0, a.useUncachedScrollerState)(), v = (0, a.useScrollSpring)(I, S);
            r.useImperativeHandle(c, () => ({
                getScrollerNode: () => I.current,
                getScrollerState: T,
                ...(0, a.getAnimatedScrollHelpers)(I, T, v, S)
            }), [I, T, S, v]);
            let A = (0, a.usePaddingFixes)({
                paddingFix: m,
                orientation: S,
                dir: f,
                className: _,
                scrollerRef: I,
                specs: o
            });
            return (0, i.jsx)("div", {
                ref: I,
                className: s(_, {
                    [e]: !0,
                    [t]: E,
                    [n]: g
                }),
                style: (0, a.getMergedOrientationStyles)(h, S),
                dir: f,
                ...p,
                children: (0, i.jsxs)(l.FocusRingScope, {
                    containerRef: I,
                    children: [d, A]
                })
            })
        })
    }
}