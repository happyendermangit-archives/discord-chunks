function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("981452"),
        a = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: r = "currentColor",
            foreground: s,
            ...o
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, a.default)(o),
            viewBox: "0 0 24 24",
            width: t,
            height: n,
            children: [(0, i.jsx)("path", {
                d: "M0,0H24V24H0Z",
                fill: "none"
            }), (0, i.jsx)("path", {
                fill: r,
                className: s,
                d: "M12.5,17.6l3.6,2.2a1,1,0,0,0,1.5-1.1l-1-4.1a1,1,0,0,1,.3-1l3.2-2.8A1,1,0,0,0,19.5,9l-4.2-.4a.87.87,0,0,1-.8-.6L12.9,4.1a1.05,1.05,0,0,0-1.9,0l-1.6,4a1,1,0,0,1-.8.6L4.4,9a1.06,1.06,0,0,0-.6,1.8L7,13.6a.91.91,0,0,1,.3,1l-1,4.1a1,1,0,0,0,1.5,1.1l3.6-2.2A1.08,1.08,0,0,1,12.5,17.6Z"
            })]
        })
    }, s.StarIcon, void 0, {
        size: 16
    })
}