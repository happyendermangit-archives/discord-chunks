function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("609873"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 16,
            height: n = 16,
            color: r = "currentColor",
            foreground: a,
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, s.default)(o),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
            })
        })
    }, a.DoorExitIcon, void 0, {
        size: 16
    })
}