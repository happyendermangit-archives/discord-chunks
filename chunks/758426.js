function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("381708"),
        a = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 6,
            height: n = 11,
            color: r = "currentColor",
            foreground: s,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 6 11",
            children: (0, i.jsx)("path", {
                fill: r,
                className: s,
                d: "M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"
            })
        })
    }, s.BoostTier1SimpleIcon, void 0, {
        size: 11
    })
}