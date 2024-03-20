function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CircleXIcon: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("669491"),
        s = n("82169");
    let l = e => {
        let {
            width: t = 24,
            height: n = 24,
            secondaryColor: l = "transparent",
            secondaryColorClass: a = "",
            color: o = r.default.colors.INTERACTIVE_NORMAL,
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
                fill: "string" == typeof l ? l : l.css,
                className: a
            }), (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                clipRule: "evenodd",
                className: u
            })]
        })
    }
}