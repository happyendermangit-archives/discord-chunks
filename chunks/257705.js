function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createScroller: function() {
            return u
        }
    }), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("789978"),
        l = n("780900");

    function u(e, t) {
        let n = (0, l.getScrollbarSpecs)(e);
        return r.forwardRef(function(s, u) {
            let {
                children: d,
                className: _,
                dir: c = "ltr",
                orientation: E = "vertical",
                paddingFix: I = !0,
                fade: T = !1,
                onScroll: f,
                style: S,
                ...A
            } = s, h = r.useRef(null), m = (0, l.usePaddingFixes)({
                paddingFix: I,
                orientation: E,
                dir: c,
                className: _,
                scrollerRef: h,
                specs: n
            });
            return (0, i.jsx)("div", {
                ref: e => {
                    "function" == typeof u ? u(e) : null != u && (u.current = e), h.current = e
                },
                className: a()(_, {
                    [e]: !0,
                    [t]: T
                }),
                style: (0, l.getMergedOrientationStyles)(S, E),
                dir: c,
                ...A,
                children: (0, i.jsxs)(o.FocusRingScope, {
                    containerRef: h,
                    children: [d, m]
                })
            })
        })
    }
}