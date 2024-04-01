function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createAdvancedScroller: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("789978"),
        l = n("780900");

    function u(e, t, n) {
        let s = (0, l.getScrollbarSpecs)(e);
        return r.forwardRef(function(u, d) {
            let {
                children: _,
                className: c,
                dir: E = "ltr",
                orientation: I = "vertical",
                fade: T = !1,
                customTheme: f = !1,
                paddingFix: S = !0,
                style: A,
                ...h
            } = u, {
                scrollerRef: m,
                getScrollerState: N
            } = (0, l.useUncachedScrollerState)(), O = (0, l.useScrollSpring)(m, I);
            r.useImperativeHandle(d, () => ({
                getScrollerNode: () => m.current,
                getScrollerState: N,
                ...(0, l.getAnimatedScrollHelpers)(m, N, O, I)
            }), [m, N, I, O]);
            let p = (0, l.usePaddingFixes)({
                paddingFix: S,
                orientation: I,
                dir: E,
                className: c,
                scrollerRef: m,
                specs: s
            });
            return (0, i.jsx)("div", {
                ref: m,
                className: a()(c, {
                    [e]: !0,
                    [t]: T,
                    [n]: f
                }),
                style: (0, l.getMergedOrientationStyles)(A, I),
                dir: E,
                ...h,
                children: (0, i.jsxs)(o.FocusRingScope, {
                    containerRef: m,
                    children: [_, p]
                })
            })
        })
    }
}