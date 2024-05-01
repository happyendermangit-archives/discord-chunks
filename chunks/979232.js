function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("99259"),
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
            viewBox: "0 0 24 24",
            ...(0, s.default)(o),
            width: t,
            height: n,
            children: (0, i.jsx)("path", {
                fill: r,
                className: a,
                d: "M21 4V2H11V4H14.461L7.351 20H3V22H13V20H9.539L16.649 4H21Z"
            })
        })
    }, a.ItalicIcon, void 0, {
        size: 24
    })
}