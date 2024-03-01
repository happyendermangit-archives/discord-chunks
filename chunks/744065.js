function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createScroller: function() {
            return u
        }
    }), n("70102");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("15542"),
        l = n("942005");

    function u(e, t) {
        let n = (0, l.getScrollbarSpecs)(e);
        return r.forwardRef(function(s, u) {
            let {
                children: c,
                className: d,
                dir: f = "ltr",
                orientation: E = "vertical",
                paddingFix: p = !0,
                fade: h = !1,
                onScroll: _,
                style: S,
                ...m
            } = s, T = r.useRef(null), g = (0, l.usePaddingFixes)({
                paddingFix: p,
                orientation: E,
                dir: f,
                className: d,
                scrollerRef: T,
                specs: n
            });
            return (0, i.jsx)("div", {
                ref: e => {
                    "function" == typeof u ? u(e) : null != u && (u.current = e), T.current = e
                },
                className: a(d, {
                    [e]: !0,
                    [t]: h
                }),
                style: (0, l.getMergedOrientationStyles)(S, E),
                dir: f,
                ...m,
                children: (0, i.jsxs)(o.FocusRingScope, {
                    containerRef: T,
                    children: [c, g]
                })
            })
        })
    }
}