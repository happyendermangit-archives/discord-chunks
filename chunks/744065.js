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
                dir: f = "ltr",
                orientation: _ = "vertical",
                paddingFix: h = !0,
                fade: E = !1,
                onScroll: g,
                style: m,
                ...p
            } = r, S = s.useRef(null), v = (0, l.usePaddingFixes)({
                paddingFix: h,
                orientation: _,
                dir: f,
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
                    [t]: E
                }),
                style: (0, l.getMergedOrientationStyles)(m, _),
                dir: f,
                ...p,
                children: (0, i.jsxs)(o.FocusRingScope, {
                    containerRef: S,
                    children: [d, v]
                })
            })
        })
    }
}