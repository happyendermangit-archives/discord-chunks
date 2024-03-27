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
        s = n("285952"),
        a = n("584506");

    function o(e) {
        let {
            mainText: t,
            supportingText: n,
            children: o,
            size: l
        } = e;
        return (0, i.jsxs)(s.default, {
            className: a.root,
            justify: s.default.Justify.CENTER,
            align: s.default.Align.CENTER,
            direction: s.default.Direction.VERTICAL,
            children: [(0, i.jsx)(r.default, {
                header: t,
                description: n,
                size: l
            }), o]
        })
    }
}