function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        a = n("77078"),
        o = n("760607"),
        u = n("684133");

    function c(e) {
        let {
            children: t,
            size: n = 16,
            className: s,
            flowerStarClassName: c,
            ...d
        } = e, f = r.Children.only(t), h = (0, a.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
            className: l(u.flowerStarContainer, s),
            style: {
                width: n,
                height: n
            },
            children: [(0, i.jsx)(o.default, {
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