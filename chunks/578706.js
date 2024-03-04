function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("469563"),
        r = n("891128"),
        a = n("75196"),
        o = (0, s.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: s = "currentColor",
                foreground: r,
                backgroundColor: o,
                ...l
            } = e;
            return (0, i.jsxs)("svg", {
                ...(0, a.default)(l),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: [null != o ? (0, i.jsx)("circle", {
                    r: 8,
                    cx: 12,
                    cy: 12,
                    fill: o
                }) : null, (0, i.jsx)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: (0, i.jsx)("path", {
                        className: r,
                        fill: s,
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    })
                })]
            })
        }, r.CircleCheckIcon, {
            backgroundColor: "secondaryColor",
            foreground: "colorClass",
            className: "className",
            color: "color"
        }, {
            size: 24
        })
}