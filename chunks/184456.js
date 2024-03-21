function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Progress: function() {
            return _
        }
    });
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("669491"),
        d = n("755234");
    (i = s || (s = {})).XSMALL = "xsmall", i.SMALL = "small", i.LARGE = "large";
    let c = "indeterminate";

    function _(e) {
        let t, {
                className: n,
                percent: i,
                size: s = "small",
                foregroundColor: o = u.default.unsafe_rawColors.BRAND_500.css,
                backgroundColor: _ = "var(--background-modifier-active)",
                foregroundGradientColor: f,
                animate: E = !0
            } = e,
            h = null != i ? i : 0;
        return t = null != f ? {
            background: "linear-gradient(to right, ".concat(f[0], ", ").concat(f[1], ")")
        } : {
            backgroundColor: o
        }, (0, r.jsx)("div", {
            className: l(n, d.progress, d[s]),
            style: {
                backgroundColor: _
            },
            children: h !== c && "number" == typeof h ? (0, r.jsx)("div", {
                className: l(d.progressBar, d[s], {
                    [d.animating]: E
                }),
                style: {
                    transform: "translate3d(".concat(Math.min(Math.max(0, h), 100) - 100, "%, 0, 0)"),
                    ...t
                }
            }) : (0, r.jsxs)(a.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: l(d.indeterminateBar1, d[s], {
                        [d.animating]: E
                    }),
                    style: t
                }), (0, r.jsx)("div", {
                    className: l(d.indeterminateBar2, d[s], {
                        [d.animating]: E
                    }),
                    style: t
                })]
            })
        })
    }
    _.Sizes = s, _.INDETERMINATE = c
}