function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("560123"),
        a = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: s,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, i.jsxs)("g", {
                fill: r,
                className: s,
                children: [(0, i.jsx)("circle", {
                    cx: "16.9804",
                    cy: "7.01942",
                    r: "4.01942"
                }), (0, i.jsx)("circle", {
                    cx: "16.9804",
                    cy: "16.9805",
                    r: "4.01942"
                }), (0, i.jsx)("circle", {
                    cx: "7.01942",
                    cy: "16.9805",
                    r: "4.01942"
                }), (0, i.jsx)("rect", {
                    x: "3",
                    y: "3",
                    width: "8.03884",
                    height: "8.03884",
                    rx: "2"
                })]
            })
        })
    }, s.ServerGridIcon, void 0, {
        size: 24
    })
}