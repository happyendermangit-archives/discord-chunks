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
            width: t = 8,
            height: n = 13,
            color: s = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 8 13",
            children: (0, i.jsx)("path", {
                className: null != a ? a : void 0,
                stroke: s,
                fill: "transparent",
                d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z"
            })
        })
    }
}