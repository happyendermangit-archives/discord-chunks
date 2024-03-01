function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return a
        }
    });
    var r = s("37983");
    s("884691");
    var n = s("469563"),
        l = s("308472"),
        i = s("75196"),
        a = (0, n.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: s = 24,
                color: n = "currentColor",
                foreground: l,
                ...a
            } = e;
            return (0, r.jsx)("svg", {
                ...(0, i.default)(a),
                width: t,
                height: s,
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    transform: "translate(2 6)",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: n,
                        d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                    })
                })
            })
        }, l.AnalyticsIcon, void 0, {
            size: 24
        })
}