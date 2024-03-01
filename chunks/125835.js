function(t, e, l) {
    "use strict";
    l.r(e), l.d(e, {
        default: function() {
            return i
        }
    });
    var n = l("37983");
    l("884691");
    var r = l("414456"),
        a = l.n(r),
        s = l("642032"),
        o = l("625948");

    function i(t) {
        let {
            className: e,
            children: l,
            forceUseColor: r = !1,
            hideStars: i
        } = t;
        return (0, n.jsxs)("span", {
            className: a(o.container, e, {
                [o.containerColored]: r
            }),
            children: [l, i ? null : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.default, {
                    foreground: o.sparkleStarTopRight
                }), (0, n.jsx)(s.default, {
                    foreground: o.sparkleStarRight
                }), (0, n.jsx)(s.default, {
                    foreground: o.sparkleStarBottomLeft
                })]
            })]
        })
    }
}