function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HiddenVisually: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("639303");

    function o(e) {
        let {
            id: t,
            tag: n = "span",
            showOnFocus: s,
            children: o
        } = e;
        return (0, i.jsx)(n, {
            id: t,
            className: r({
                [a.hiddenVisually]: !s,
                [a.showOnFocus]: s
            }),
            children: o
        })
    }
}