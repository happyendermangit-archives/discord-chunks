function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("834345"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M19,3H14V5h5v5h2V5A2,2,0,0,0,19,3Z"
            }), (0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M19,19H14v2h5a2,2,0,0,0,2-2V14H19Z"
            }), (0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M3,5v5H5V5h5V3H5A2,2,0,0,0,3,5Z"
            }), (0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M5,14H3v5a2,2,0,0,0,2,2h5V19H5Z"
            })]
        })
    }, a.FullscreenEnterIcon, void 0, {
        size: 24
    })
}