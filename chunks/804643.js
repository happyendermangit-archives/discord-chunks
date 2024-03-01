function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var a = n("37983");
    n("884691");
    var l = n("75196");

    function i(e) {
        let {
            width: t = 8,
            height: n = 8,
            color: i = "currentColor",
            foreground: o,
            ...r
        } = e;
        return (0, a.jsx)("svg", {
            ...(0, l.default)(r),
            width: t,
            height: n,
            viewBox: "0 0 8 8",
            fill: "none",
            children: (0, a.jsx)("path", {
                className: o,
                fill: i,
                d: "M8 3.99957L4 0 0 3.99957l1.20161 1.20149L3.1502 3.25268V8h1.6996V3.25268l1.94858 1.94838L8 3.99957z"
            })
        })
    }
}