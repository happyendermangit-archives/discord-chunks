function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StackedProgress: function() {
            return c
        }
    }), n("47120");
    var i, r, a = n("735250");
    n("470079");
    var s = n("120356"),
        o = n.n(s),
        l = n("392711"),
        u = n.n(l),
        d = n("692547"),
        _ = n("376935");

    function c(e) {
        let {
            className: t,
            percents: n,
            size: i = "small",
            foregroundColors: r = [d.default.unsafe_rawColors.BRAND_500.css],
            backgroundColor: s = "var(--background-modifier-active)",
            animate: l = !0
        } = e, c = u().zip(n, r).map((e, t) => {
            let n, [r, s] = e;
            return n = Array.isArray(s) ? {
                background: "linear-gradient(to right, ".concat(s[0], ", ").concat(s[1], ")")
            } : {
                backgroundColor: s
            }, (0, a.jsx)("div", {
                className: o()(_.progressBar, _[i], {
                    [_.animating]: l
                }),
                style: {
                    transform: "translate3d(".concat(Math.min(Math.max(0, r), 100) - 100, "%, 0, 0)"),
                    ...n
                }
            }, t)
        }).reverse();
        return (0, a.jsx)("div", {
            className: o()(t, _.progress, _[i]),
            style: {
                backgroundColor: s
            },
            children: c
        })
    }(r = i || (i = {})).XSMALL = "xsmall", r.SMALL = "small", r.LARGE = "large", c.Sizes = i
}