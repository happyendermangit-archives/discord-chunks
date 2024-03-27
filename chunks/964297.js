function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("131661"),
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
            viewBox: "0 0 18 18",
            children: (0, i.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [(0, i.jsx)("path", {
                    d: "M0 0H18V18H0z"
                }), (0, i.jsx)("path", {
                    fill: r,
                    className: s,
                    fillRule: "nonzero",
                    d: "M7,13 L7,5 L12,9 L7,13 Z M9,1 C4.581722,1 1,4.581722 1,9 C1,11.1217319 1.84285472,13.1565632 3.34314575,14.6568542 C4.84343678,16.1571453 6.87826808,17 9,17 C11.1217319,17 13.1565632,16.1571453 14.6568542,14.6568542 C16.1571453,13.1565632 17,11.1217319 17,9 C17,6.87826808 16.1571453,4.84343678 14.6568542,3.34314575 C13.1565632,1.84285472 11.1217319,1 9,1 Z"
                })]
            })
        })
    }, s.CirclePlayIcon, void 0, {
        size: 24
    })
}