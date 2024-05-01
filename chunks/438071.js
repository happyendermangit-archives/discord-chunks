function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("231764"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 40 40",
            children: (0, i.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [(0, i.jsx)("path", {
                    className: a,
                    fill: r,
                    fillOpacity: ".8",
                    d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z"
                }), (0, i.jsx)("rect", {
                    className: a,
                    width: "38",
                    height: "38",
                    x: "1",
                    y: "1",
                    stroke: r,
                    strokeOpacity: ".4",
                    strokeWidth: "2",
                    rx: "5"
                }), (0, i.jsx)("circle", {
                    className: a,
                    cx: "7",
                    cy: "7",
                    r: "2",
                    fill: r,
                    fillOpacity: ".4"
                }), (0, i.jsx)("circle", {
                    className: a,
                    cx: "7",
                    cy: "33",
                    r: "2",
                    fill: r,
                    fillOpacity: ".4"
                }), (0, i.jsx)("circle", {
                    className: a,
                    cx: "33",
                    cy: "7",
                    r: "2",
                    fill: r,
                    fillOpacity: ".4"
                }), (0, i.jsx)("circle", {
                    className: a,
                    cx: "33",
                    cy: "33",
                    r: "2",
                    fill: r,
                    fillOpacity: ".4"
                })]
            })
        })
    }, a.UnknownGameIcon, void 0, {
        size: 24
    })
}