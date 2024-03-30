function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("481060"),
        l = n("189798"),
        u = n("179753");

    function d(e) {
        let {
            children: t,
            size: n = 16,
            className: s,
            flowerStarClassName: d,
            ..._
        } = e, c = r.Children.only(t), E = (0, o.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
            className: a()(u.flowerStarContainer, s),
            style: {
                width: n,
                height: n
            },
            children: [(0, i.jsx)(l.default, {
                ..._,
                className: a()(d, u.flowerStar)
            }), (0, i.jsx)("div", {
                className: a()(u.childContainer, {
                    [u.redesignIconChildContainer]: E
                }),
                children: c
            })]
        })
    }
}