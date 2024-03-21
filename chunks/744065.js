function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createScroller: function() {
            return u
        }
    }), n("70102");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("15542"),
        l = n("942005");

    function u(e, t) {
        let n = (0, l.getScrollbarSpecs)(e);
        return s.forwardRef(function(r, u) {
            let {
                children: d,
                className: c,
                dir: _ = "ltr",
                orientation: f = "vertical",
                paddingFix: E = !0,
                fade: h = !1,
                onScroll: g,
                style: m,
                ...p
            } = r, S = s.useRef(null), T = (0, l.usePaddingFixes)({
                paddingFix: E,
                orientation: f,
                dir: _,
                className: c,
                scrollerRef: S,
                specs: n
            });
            return (0, i.jsx)("div", {
                ref: e => {
                    "function" == typeof u ? u(e) : null != u && (u.current = e), S.current = e
                },
                className: a(c, {
                    [e]: !0,
                    [t]: h
                }),
                style: (0, l.getMergedOrientationStyles)(m, f),
                dir: _,
                ...p,
                children: (0, i.jsxs)(o.FocusRingScope, {
                    containerRef: S,
                    children: [d, T]
                })
            })
        })
    }
}