function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("112560"),
        a = n("285952"),
        s = n("872517");

    function o(e) {
        let {
            mainText: t,
            supportingText: n,
            children: o,
            size: l
        } = e;
        return (0, i.jsxs)(a.default, {
            className: s.root,
            justify: a.default.Justify.CENTER,
            align: a.default.Align.CENTER,
            direction: a.default.Direction.VERTICAL,
            children: [(0, i.jsx)(r.default, {
                header: t,
                description: n,
                size: l
            }), o]
        })
    }
}