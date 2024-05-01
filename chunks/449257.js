function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CircleXIcon: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("331595");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            secondaryColor: a = "transparent",
            secondaryColorClass: o = "",
            color: l = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: u = "",
            ...d
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(d),
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
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                clipRule: "evenodd",
                className: u
            })]
        })
    }
}