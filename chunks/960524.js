function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CirclePlayIcon: function() {
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
                d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM9 8.09c0-.88 1-1.4 1.73-.9l5.8 3.91c.63.44.63 1.36 0 1.8l-5.8 3.9C10 17.3 9 16.8 9 15.92V8.1Z",
                clipRule: "evenodd",
                className: u
            })]
        })
    }
}