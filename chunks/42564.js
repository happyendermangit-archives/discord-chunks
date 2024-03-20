function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PollsIcon: function() {
            return i
        }
    });
    var a = n("37983");
    n("884691");
    var s = n("669491"),
        r = n("82169");
    let i = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: i = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: l = "",
            ...o
        } = e;
        return (0, a.jsx)("svg", {
            ...(0, r.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
                className: l
            })
        })
    }
}