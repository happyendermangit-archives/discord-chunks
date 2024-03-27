function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        s = n("452804"),
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
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: r,
                className: s,
                d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
            })
        })
    }, s.FolderIcon, void 0, {
        size: 24
    })
}