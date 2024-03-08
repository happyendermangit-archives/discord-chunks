function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("75196");

    function a(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: a = "currentColor",
            foreground: s,
            ...r
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, l.default)(r),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                className: s,
                fill: a,
                transform: "translate(3.000000, 4.000000)",
                d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z"
            })
        })
    }
}