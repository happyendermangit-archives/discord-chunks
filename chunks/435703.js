function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClockIcon: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("669491"),
        r = n("82169");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: a = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...l
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, r.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1-18a1 1 0 1 0-2 0v7c0 .27.1.52.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.58V5Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}