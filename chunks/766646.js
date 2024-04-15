function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HiddenVisually: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("513209");

    function o(e) {
        let {
            id: t,
            tag: n = "span",
            showOnFocus: r,
            children: o
        } = e;
        return (0, i.jsx)(n, {
            id: t,
            className: s()({
                [a.hiddenVisually]: !r,
                [a.showOnFocus]: r
            }),
            children: o
        })
    }
}