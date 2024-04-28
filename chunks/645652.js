function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("819758"),
        o = n("108671");

    function l(e) {
        let {
            className: t,
            children: n,
            forceUseColor: r = !1,
            hideStars: l
        } = e;
        return (0, i.jsxs)("span", {
            className: s()(o.container, t, {
                [o.containerColored]: r
            }),
            children: [n, l ? null : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(a.default, {
                    foreground: o.sparkleStarTopRight
                }), (0, i.jsx)(a.default, {
                    foreground: o.sparkleStarRight
                }), (0, i.jsx)(a.default, {
                    foreground: o.sparkleStarBottomLeft
                })]
            })]
        })
    }
}