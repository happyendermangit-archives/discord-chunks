function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("484815");

    function o(e) {
        let {
            children: t,
            className: n,
            size: l = s.Button.Sizes.SMALL,
            ...o
        } = e;
        return (0, i.jsx)(s.Button, {
            ...o,
            size: l,
            className: a(r.button, n),
            children: t
        })
    }
}