function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("75196");

    function a(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: a = "currentColor",
            ...s
        } = e;
        return (0, l.jsx)("svg", {
            ...(0, i.default)(s),
            width: t,
            height: n,
            viewBox: "0 0 4 4",
            children: (0, l.jsx)("circle", {
                cx: "2",
                cy: "2",
                r: "2",
                fill: a
            })
        })
    }
}