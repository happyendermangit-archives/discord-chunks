function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("116710"),
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
            viewBox: "0 0 16 16",
            fill: "none",
            children: [(0, i.jsx)("path", {
                className: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7 15H9V8H12.5L15 5.5L12.5 3H9V1H7V3H1L3.5 5.5L1 8H7V15Z",
                fill: r
            }), (0, i.jsx)("path", {
                className: s,
                d: "M5 14C5 12.8954 5.89543 12 7 12H9C10.1046 12 11 12.8954 11 14V15H5V14Z",
                fill: r
            })]
        })
    }, s.SignPostIcon, void 0, {
        size: 24
    })
}