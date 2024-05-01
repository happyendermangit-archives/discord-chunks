function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("596440"),
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
            viewBox: "0 0 18 18",
            fill: "none",
            children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.25 2.25226H7.5C7.9125 2.25226 8.25 2.58976 8.25 3.00226V15.0023C8.25 15.4148 7.9125 15.7523 7.5 15.7523H5.25C4.8375 15.7523 4.5 15.4148 4.5 15.0023V3.00226C4.5 2.58976 4.8375 2.25226 5.25 2.25226ZM11.25 2.25226H13.5C13.9125 2.25226 14.25 2.58976 14.25 3.00226V15.0023C14.25 15.4148 13.9125 15.7523 13.5 15.7523H11.25C10.8375 15.7523 10.5 15.4148 10.5 15.0023V3.00226C10.5 2.58976 10.8375 2.25226 11.25 2.25226Z",
                fill: r,
                className: a
            })
        })
    }, a.PauseIcon, void 0, {
        size: 16
    })
}