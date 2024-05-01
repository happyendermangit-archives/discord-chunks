function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("329800"),
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
            fill: "none",
            children: (0, i.jsx)("path", {
                className: a,
                fill: r,
                d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
            })
        })
    }, a.ArrowSmallLeftIcon, void 0, {
        size: 24
    })
}