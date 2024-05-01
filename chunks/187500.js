function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("552075"),
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
            children: (0, i.jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                transform: "translate(2 6)",
                children: (0, i.jsx)("path", {
                    className: a,
                    fill: r,
                    d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                })
            })
        })
    }, a.AnalyticsIcon, void 0, {
        size: 24
    })
}