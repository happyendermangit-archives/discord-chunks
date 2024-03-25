function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        i = n("952990"),
        u = r.forwardRef(function(e, t) {
            let {
                children: n,
                className: r,
                style: s,
                noBorder: u = !1,
                participantUserId: o
            } = e;
            return (0, a.jsx)("div", {
                className: l(r, i.tile, {
                    [i.noBorder]: u
                }),
                style: s,
                ref: t,
                "data-selenium-video-tile": o,
                children: n
            })
        })
}