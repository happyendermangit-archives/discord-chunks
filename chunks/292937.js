function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("605260"),
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
            viewBox: "0 0 24 24",
            children: (0, i.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [(0, i.jsx)("polygon", {
                    className: a,
                    fill: r,
                    fillRule: "nonzero",
                    points: "18.35 4.35 16 2 6 12 16 22 18.35 19.65 10.717 12"
                }), (0, i.jsx)("polygon", {
                    points: "0 0 24 0 24 24 0 24"
                })]
            })
        })
    }, a.ChevronSmallLeftIcon, void 0, {
        size: 24
    })
}