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
            foreground: a,
            ...o
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, r.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 8 12",
            children: [(0, i.jsx)("path", {
                d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                fill: s,
                className: a
            }), (0, i.jsx)("path", {
                d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                fill: s,
                className: a
            })]
        })
    }
}