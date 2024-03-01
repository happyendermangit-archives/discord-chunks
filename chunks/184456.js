function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Progress: function() {
            return f
        }
    });
    var i, r, s = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("669491"),
        c = n("755234");
    (i = r || (r = {})).XSMALL = "xsmall", i.SMALL = "small", i.LARGE = "large";
    let d = "indeterminate";

    function f(e) {
        let t, {
                className: n,
                percent: i,
                size: r = "small",
                foregroundColor: o = u.default.unsafe_rawColors.BRAND_500.css,
                backgroundColor: f = "var(--background-modifier-active)",
                foregroundGradientColor: E,
                animate: p = !0
            } = e,
            h = null != i ? i : 0;
        return t = null != E ? {
            background: "linear-gradient(to right, ".concat(E[0], ", ").concat(E[1], ")")
        } : {
            backgroundColor: o
        }, (0, s.jsx)("div", {
            className: l(n, c.progress, c[r]),
            style: {
                backgroundColor: f
            },
            children: h !== d && "number" == typeof h ? (0, s.jsx)("div", {
                className: l(c.progressBar, c[r], {
                    [c.animating]: p
                }),
                style: {
                    transform: "translate3d(".concat(Math.min(Math.max(0, h), 100) - 100, "%, 0, 0)"),
                    ...t
                }
            }) : (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)("div", {
                    className: l(c.indeterminateBar1, c[r], {
                        [c.animating]: p
                    }),
                    style: t
                }), (0, s.jsx)("div", {
                    className: l(c.indeterminateBar2, c[r], {
                        [c.animating]: p
                    }),
                    style: t
                })]
            })
        })
    }
    f.Sizes = r, f.INDETERMINATE = d
}