function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return a
        }
    });
    var s = r("37983");
    r("884691");
    var n = r("469563"),
        l = r("308472"),
        i = r("75196"),
        a = (0, n.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: r = 24,
                color: n = "currentColor",
                foreground: l,
                ...a
            } = e;
            return (0, s.jsx)("svg", {
                ...(0, i.default)(a),
                width: t,
                height: r,
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    transform: "translate(2 6)",
                    children: (0, s.jsx)("path", {
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