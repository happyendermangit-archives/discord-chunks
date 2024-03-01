function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivitiesIcon: function() {
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
        return (0, l.jsxs)("svg", {
            ...(0, a.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M22 4v1.51a6 6 0 0 1-1.76 4.25l-4.1 4.1a.5.5 0 0 0-.14.35v3.74a3 3 0 0 1-.66 1.87l-1.79 2.24a.5.5 0 0 1-.86-.14l-1.86-5.02a.5.5 0 0 0-.11-.18l-3.46-3.46a.5.5 0 0 0-.17-.11l-4.8-1.85a.5.5 0 0 1-.15-.85l2.02-1.73A3 3 0 0 1 6.1 8h3.68a.5.5 0 0 0 .36-.15l4.1-4.1A6 6 0 0 1 18.48 2H20a2 2 0 0 1 2 2Zm-5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                clipRule: "evenodd",
                className: r
            }), (0, l.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M9 19a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1 3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h3a3 3 0 0 0 3-3Z",
                className: r
            })]
        })
    }
}