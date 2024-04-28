function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("465670"),
        o = n("436088"),
        l = n("806519"),
        u = n("186443");

    function d(e) {
        let {
            width: t = 20,
            height: n = 20,
            className: r
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(u.icon, r),
            children: [(0, i.jsx)(l.default, {
                mask: l.default.Masks.STATUS_SCREENSHARE,
                width: t,
                height: n,
                children: (0, i.jsx)(o.default, {
                    width: t,
                    height: n
                })
            }), (0, i.jsx)(a.default, {
                className: u.badge
            })]
        })
    }
}