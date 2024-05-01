function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("481060"),
        l = n("189798"),
        u = n("844166");

    function d(e) {
        let {
            children: t,
            size: n = 16,
            className: a,
            flowerStarClassName: d,
            ..._
        } = e, c = r.Children.only(t), E = (0, o.useRedesignIconContext)().enabled;
        return (0, i.jsxs)("div", {
            className: s()(u.flowerStarContainer, a),
            style: {
                width: n,
                height: n
            },
            children: [(0, i.jsx)(l.default, {
                ..._,
                className: s()(d, u.flowerStar)
            }), (0, i.jsx)("div", {
                className: s()(u.childContainer, {
                    [u.redesignIconChildContainer]: E
                }),
                children: c
            })]
        })
    }
}