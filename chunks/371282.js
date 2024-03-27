function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("942264"),
        a = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: s,
            ...o
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, a.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                className: s,
                fill: r,
                d: "M16,8V3H14V8a2,2,0,0,0,2,2h5V8Z"
            }), (0, i.jsx)("path", {
                className: s,
                fill: r,
                d: "M14,16v5h2V16h5V14H16A2,2,0,0,0,14,16Z"
            }), (0, i.jsx)("path", {
                className: s,
                fill: r,
                d: "M8,8H3v2H8a2,2,0,0,0,2-2V3H8Z"
            }), (0, i.jsx)("path", {
                className: s,
                fill: r,
                d: "M8,14H3v2H8v5h2V16A2,2,0,0,0,8,14Z"
            })]
        })
    }, s.FullscreenExitIcon, void 0, {
        size: 24
    })
}