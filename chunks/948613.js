function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("469563"),
        a = n("4997"),
        s = n("75196"),
        r = (0, i.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: i = "currentColor",
                foreground: a,
                ...r
            } = e;
            return (0, l.jsx)("svg", {
                ...(0, s.default)(r),
                width: t,
                height: n,
                viewBox: "0 0 18 18",
                children: (0, l.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [(0, l.jsx)("path", {
                        d: "M0 0H18V18H0z"
                    }), (0, l.jsx)("path", {
                        fill: i,
                        className: a,
                        fillRule: "nonzero",
                        d: "M7,13 L7,5 L12,9 L7,13 Z M9,1 C4.581722,1 1,4.581722 1,9 C1,11.1217319 1.84285472,13.1565632 3.34314575,14.6568542 C4.84343678,16.1571453 6.87826808,17 9,17 C11.1217319,17 13.1565632,16.1571453 14.6568542,14.6568542 C16.1571453,13.1565632 17,11.1217319 17,9 C17,6.87826808 16.1571453,4.84343678 14.6568542,3.34314575 C13.1565632,1.84285472 11.1217319,1 9,1 Z"
                    })]
                })
            })
        }, a.CirclePlayIcon, void 0, {
            size: 24
        })
}