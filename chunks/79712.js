function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("325767");

    function s(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: s = "currentColor",
            ...a
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(a),
            width: t,
            height: n,
            viewBox: "0 0 4 4",
            children: (0, i.jsx)("circle", {
                cx: "2",
                cy: "2",
                r: "2",
                fill: s
            })
        })
    }
}