function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("325767");

    function a(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: a = "currentColor",
            ...s
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(s),
            width: t,
            height: n,
            viewBox: "0 0 4 4",
            children: (0, i.jsx)("circle", {
                cx: "2",
                cy: "2",
                r: "2",
                fill: a
            })
        })
    }
}