function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("675030"),
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
            viewBox: "0 0 16 16",
            children: (0, i.jsx)("path", {
                fill: r,
                className: s,
                d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
            })
        })
    }, s.MinusIcon, void 0, {
        size: 24
    })
}