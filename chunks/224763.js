function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Interactive: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("227645"),
        o = n("272066");

    function l(e) {
        let {
            as: t,
            muted: n = !1,
            selected: s = !1,
            className: l,
            ...u
        } = e, d = null != t ? t : a.Clickable;
        return (0, i.jsx)(d, {
            ...u,
            className: r(o.interactive, l, {
                [o.muted]: n,
                [o.selected]: s
            })
        })
    }
}