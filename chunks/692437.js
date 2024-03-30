function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("465270"),
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
                fill: "none",
                fillRule: "evenodd",
                children: [(0, i.jsx)("polygon", {
                    className: s,
                    fill: r,
                    fillRule: "nonzero",
                    points: "8.47 2 6.12 4.35 13.753 12 6.12 19.65 8.47 22 18.47 12"
                }), (0, i.jsx)("polygon", {
                    points: "0 0 24 0 24 24 0 24"
                })]
            })
        })
    }, s.ChevronSmallRightIcon, void 0, {
        size: 24
    })
}