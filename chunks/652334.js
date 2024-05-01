function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Interactive: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("1561"),
        o = n("559911");

    function l(e) {
        let {
            as: t,
            muted: n = !1,
            selected: r = !1,
            className: l,
            ...u
        } = e, d = null != t ? t : s.Clickable;
        return (0, i.jsx)(d, {
            ...u,
            className: a()(o.interactive, l, {
                [o.muted]: n,
                [o.selected]: r
            })
        })
    }
}