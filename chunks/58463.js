function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("75196");

    function s(e) {
        let {
            width: t = 12,
            height: n = 12,
            color: s = "currentColor",
            foreground: i,
            ...l
        } = e;
        return (0, a.jsx)("svg", {
            ...(0, r.default)(l),
            width: t,
            height: n,
            viewBox: "0 0 12 12",
            children: (0, a.jsx)("rect", {
                className: i,
                fill: s,
                width: "10",
                height: "1",
                x: "1",
                y: "6"
            })
        })
    }
}