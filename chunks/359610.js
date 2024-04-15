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
        s = n.n(r),
        a = n("481060"),
        o = n("272434");

    function l(e) {
        let {
            children: t,
            className: n,
            size: r = a.Button.Sizes.SMALL,
            ...l
        } = e;
        return (0, i.jsx)(a.Button, {
            ...l,
            size: r,
            className: s()(o.button, n),
            children: t
        })
    }
}