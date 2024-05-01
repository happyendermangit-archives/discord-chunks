function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("865824"),
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
            children: (0, i.jsx)("path", {
                fill: r,
                className: a,
                d: "M7.41 16.0001L12 11.4201L16.59 16.0001L18 14.5901L12 8.59006L6 14.5901L7.41 16.0001Z"
            })
        })
    }, a.ChevronSmallUpIcon, void 0, {
        size: 24
    })
}