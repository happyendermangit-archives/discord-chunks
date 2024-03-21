function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StackedProgress: function() {
            return _
        }
    }), n("222007");
    var i, s, r = n("37983");
    n("884691");
    var a = n("414456"),
        o = n.n(a),
        l = n("917351"),
        u = n.n(l),
        d = n("669491"),
        c = n("789163");

    function _(e) {
        let {
            className: t,
            percents: n,
            size: i = "small",
            foregroundColors: s = [d.default.unsafe_rawColors.BRAND_500.css],
            backgroundColor: a = "var(--background-modifier-active)",
            animate: l = !0
        } = e, _ = u.zip(n, s).map((e, t) => {
            let n, [s, a] = e;
            return n = Array.isArray(a) ? {
                background: "linear-gradient(to right, ".concat(a[0], ", ").concat(a[1], ")")
            } : {
                backgroundColor: a
            }, (0, r.jsx)("div", {
                className: o(c.progressBar, c[i], {
                    [c.animating]: l
                }),
                style: {
                    transform: "translate3d(".concat(Math.min(Math.max(0, s), 100) - 100, "%, 0, 0)"),
                    ...n
                }
            }, t)
        }).reverse();
        return (0, r.jsx)("div", {
            className: o(t, c.progress, c[i]),
            style: {
                backgroundColor: a
            },
            children: _
        })
    }(s = i || (i = {})).XSMALL = "xsmall", s.SMALL = "small", s.LARGE = "large", _.Sizes = i
}