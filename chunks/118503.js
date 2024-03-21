function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    });
    var l = n("37983");
    n("884691");
    var r = n("75196");

    function a(t) {
        let {
            width: e = 24,
            height: n = 24,
            color: a = "currentColor",
            foreground: s,
            ...o
        } = t;
        return (0, l.jsxs)("svg", {
            ...(0, r.default)(o),
            width: e,
            height: n,
            viewBox: "0 0 8 12",
            children: [(0, l.jsx)("path", {
                d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                fill: a,
                className: s
            }), (0, l.jsx)("path", {
                d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                fill: a,
                className: s
            })]
        })
    }
}