function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CopyIcon: function() {
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
                d: "M3 16a1 1 0 0 1-1-1v-5a8 8 0 0 1 8-8h5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H10a6 6 0 0 0-6 6v5.5a.5.5 0 0 1-.5.5H3Z",
                className: r
            }), (0, l.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M6 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-3a5 5 0 0 1-5-5V6h-4a4 4 0 0 0-4 4v8Z",
                className: r
            }), (0, l.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M21.73 12a3 3 0 0 0-.6-.88l-4.25-4.24a3 3 0 0 0-.88-.61V9a3 3 0 0 0 3 3h2.73Z",
                className: r
            })]
        })
    }
}