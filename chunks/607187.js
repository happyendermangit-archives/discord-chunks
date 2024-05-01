function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("159778");
    t.default = r.forwardRef(function(e, t) {
        let {
            children: n,
            className: r,
            style: a,
            noBorder: l = !1,
            participantUserId: u
        } = e;
        return (0, i.jsx)("div", {
            className: s()(r, o.tile, {
                [o.noBorder]: l
            }),
            style: a,
            ref: t,
            "data-selenium-video-tile": u,
            children: n
        })
    })
}