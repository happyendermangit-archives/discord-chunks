function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return i
        }
    });
    var l = n("37983");
    n("884691");
    var r = n("414456"),
        a = n.n(r),
        s = n("642032"),
        o = n("625948");

    function i(t) {
        let {
            className: e,
            children: n,
            forceUseColor: r = !1,
            hideStars: i
        } = t;
        return (0, l.jsxs)("span", {
            className: a(o.container, e, {
                [o.containerColored]: r
            }),
            children: [n, i ? null : (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s.default, {
                    foreground: o.sparkleStarTopRight
                }), (0, l.jsx)(s.default, {
                    foreground: o.sparkleStarRight
                }), (0, l.jsx)(s.default, {
                    foreground: o.sparkleStarBottomLeft
                })]
            })]
        })
    }
}