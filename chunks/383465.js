function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CirclePlusIcon: function() {
            return a
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("669491"),
        r = n("82169");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            secondaryColor: a = "transparent",
            secondaryColorClass: o = "",
            color: d = i.default.colors.INTERACTIVE_NORMAL,
            colorClass: u = "",
            ...l
        } = e;
        return (0, s.jsxs)("svg", {
            ...(0, r.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, s.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                fill: "string" == typeof a ? a : a.css,
                className: o
            }), (0, s.jsx)("path", {
                fill: "string" == typeof d ? d : d.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                clipRule: "evenodd",
                className: u
            })]
        })
    }
}