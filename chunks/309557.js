function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CheckmarkSmallIcon: function() {
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
                d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}