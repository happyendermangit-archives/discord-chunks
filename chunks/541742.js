function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MoreHorizontalIcon: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var r = n("669491"),
        a = n("82169");
    let u = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: u = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: s = "",
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
                fill: "string" == typeof u ? u : u.css,
                fillRule: "evenodd",
                d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                clipRule: "evenodd",
                className: s
            })
        })
    }
}