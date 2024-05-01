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
            width: t = 12,
            height: n = 12,
            color: s = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 12 12",
            children: (0, i.jsx)("rect", {
                width: "9",
                height: "9",
                x: "1.5",
                y: "1.5",
                fill: "none",
                stroke: s,
                className: a
            })
        })
    }
}