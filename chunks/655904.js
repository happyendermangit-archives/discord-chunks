function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Progress: function() {
            return c
        }
    });
    var i, r, a = n("735250"),
        s = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("692547"),
        d = n("605103");
    (i = r || (r = {})).XSMALL = "xsmall", i.SMALL = "small", i.LARGE = "large";
    let _ = "indeterminate";

    function c(e) {
        let t, {
                className: n,
                percent: i,
                size: r = "small",
                foregroundColor: o = u.default.unsafe_rawColors.BRAND_500.css,
                backgroundColor: c = "var(--background-modifier-active)",
                foregroundGradientColor: E,
                animate: I = !0
            } = e,
            T = null != i ? i : 0;
        return t = null != E ? {
            background: "linear-gradient(to right, ".concat(E[0], ", ").concat(E[1], ")")
        } : {
            backgroundColor: o
        }, (0, a.jsx)("div", {
            className: l()(n, d.progress, d[r]),
            style: {
                backgroundColor: c
            },
            children: T !== _ && "number" == typeof T ? (0, a.jsx)("div", {
                className: l()(d.progressBar, d[r], {
                    [d.animating]: I
                }),
                style: {
                    transform: "translate3d(".concat(Math.min(Math.max(0, T), 100) - 100, "%, 0, 0)"),
                    ...t
                }
            }) : (0, a.jsxs)(s.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: l()(d.indeterminateBar1, d[r], {
                        [d.animating]: I
                    }),
                    style: t
                }), (0, a.jsx)("div", {
                    className: l()(d.indeterminateBar2, d[r], {
                        [d.animating]: I
                    }),
                    style: t
                })]
            })
        })
    }
    c.Sizes = r, c.INDETERMINATE = _
}