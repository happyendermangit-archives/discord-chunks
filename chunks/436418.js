function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        ReactionIcon: function() {
            return s
        }
    });
    var l = n("37983");
    n("884691");
    var r = n("669491"),
        a = n("82169");
    let s = t => {
        let {
            width: e = 24,
            height: n = 24,
            color: s = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...i
        } = t;
        return (0, l.jsx)("svg", {
            ...(0, a.default)(i),
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}