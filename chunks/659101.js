function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("167712");

    function o(e) {
        let {
            children: t,
            lastSection: n = !1,
            className: r,
            ...o
        } = e;
        return (0, i.jsx)("div", {
            className: s()(a.section, r, {
                [a.lastSection]: n
            }),
            ...o,
            children: t
        })
    }
}