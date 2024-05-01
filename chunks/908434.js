function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("485303"),
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
            viewBox: "0 0 20 20",
            fill: "none",
            children: (0, i.jsx)("path", {
                transform: "translate(2, 1.5)",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.2 0C1.43269 0 0 1.43269 0 3.2V12.8C0 14.5673 1.43269 16 3.2 16H12.8C14.5673 16 16 14.5673 16 12.8V3.2C16 1.43269 14.5673 0 12.8 0H3.2ZM6.4 4.8C6.4 3.91616 5.68256 3.2 4.8 3.2C3.91552 3.2 3.2 3.91616 3.2 4.8C3.2 5.68448 3.91552 6.4 4.8 6.4C5.68256 6.4 6.4 5.68448 6.4 4.8ZM5.6 9.6L3.2 12.8H12.8L10.4 7.2L7.2 11.2L5.6 9.6Z",
                className: s,
                fill: r
            })
        })
    }, s.ImageIcon, void 0, {
        size: 24
    })
}