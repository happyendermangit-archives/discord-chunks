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
            width: t = 12,
            height: n = 12,
            color: a = "currentColor",
            foreground: s,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 12 12",
            children: (0, i.jsx)("rect", {
                fill: a,
                className: s,
                width: "8",
                height: "2",
                x: "2",
                y: "5",
                fillRule: "evenodd"
            })
        })
    }
}