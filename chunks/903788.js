function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CircleCheckIcon: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        a = n("331595");
    let s = e => {
        let {
            width: t = 24,
            height: n = 24,
            secondaryColor: s = "transparent",
            secondaryColorClass: o = "",
            color: l = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: u = "",
            ...d
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, a.default)(d),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                fill: "string" == typeof s ? s : s.css,
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z",
                clipRule: "evenodd",
                className: u
            })]
        })
    }
}