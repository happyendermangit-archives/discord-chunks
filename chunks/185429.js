function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CircleExclamationPointIcon: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("669491"),
        s = n("82169");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            secondaryColor: a = "transparent",
            secondaryColorClass: o = "",
            color: l = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: u = "",
            ...c
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(c),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                fill: "string" == typeof a ? a : a.css,
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1.44-15.94L13.06 14a1.06 1.06 0 0 1-2.12 0l-.38-6.94a1 1 0 0 1 1-1.06h.88a1 1 0 0 1 1 1.06Zm-.19 10.69a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z",
                clipRule: "evenodd",
                className: u
            })]
        })
    }
}