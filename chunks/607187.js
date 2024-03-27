function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("492223");
    t.default = r.forwardRef(function(e, t) {
        let {
            children: n,
            className: r,
            style: s,
            noBorder: l = !1,
            participantUserId: u
        } = e;
        return (0, i.jsx)("div", {
            className: a()(r, o.tile, {
                [o.noBorder]: l
            }),
            style: s,
            ref: t,
            "data-selenium-video-tile": u,
            children: n
        })
    })
}