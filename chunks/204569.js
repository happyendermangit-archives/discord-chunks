function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SendMessageIcon: function() {
            return s
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("669491"),
        a = n("82169");
    let s = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: s = i.default.colors.INTERACTIVE_NORMAL,
            colorClass: r = "",
            ...o
        } = e;
        return (0, l.jsx)("svg", {
            ...(0, a.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M6.6 10.02 14 11.4a.6.6 0 0 1 0 1.18L6.6 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L5.65 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z",
                className: r
            })
        })
    }
}