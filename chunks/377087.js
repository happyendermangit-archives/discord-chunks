function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("104600");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: r = "currentColor",
            className: s,
            foreground: a
        } = e;
        return (0, i.jsx)("svg", {
            className: s,
            width: t,
            height: n,
            viewBox: "0 0 16 16",
            children: (0, i.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [(0, i.jsx)("rect", {
                    width: "16",
                    height: "16"
                }), (0, i.jsx)("polygon", {
                    className: a,
                    fill: r,
                    points: "12 2.32 10.513 2 4 13.68 5.487 14"
                })]
            })
        })
    }, s.SlashIcon, void 0, {
        size: 16
    })
}