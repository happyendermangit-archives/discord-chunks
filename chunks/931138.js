function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        l = n.n(r),
        o = n("77078"),
        a = n("760607"),
        u = n("684133");

    function c(e) {
        let {
            children: t,
            size: n = 16,
            className: r,
            flowerStarClassName: c,
            ...d
        } = e, f = s.Children.only(t), h = (0, o.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
            className: l(u.flowerStarContainer, r),
            style: {
                width: n,
                height: n
            },
            children: [(0, i.jsx)(a.default, {
                ...d,
                className: l(c, u.flowerStar)
            }), (0, i.jsx)("div", {
                className: l(u.childContainer, {
                    [u.redesignIconChildContainer]: h
                }),
                children: f
            })]
        })
    }
}