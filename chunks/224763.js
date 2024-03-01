function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Interactive: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        a = n("227645"),
        o = n("272066");

    function l(e) {
        let {
            as: t,
            muted: n = !1,
            selected: r = !1,
            className: l,
            ...u
        } = e, c = null != t ? t : a.Clickable;
        return (0, i.jsx)(c, {
            ...u,
            className: s(o.interactive, l, {
                [o.muted]: n,
                [o.selected]: r
            })
        })
    }
}