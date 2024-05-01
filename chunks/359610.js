function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("481060"),
        o = n("995865");

    function l(e) {
        let {
            children: t,
            className: n,
            size: r = s.Button.Sizes.SMALL,
            ...l
        } = e;
        return (0, i.jsx)(s.Button, {
            ...l,
            size: r,
            className: a()(o.button, n),
            children: t
        })
    }
}