function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("469563"),
        r = n("867603"),
        a = n("75196"),
        o = (0, s.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: s = "currentColor",
                foreground: r,
                ...o
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, a.default)(o),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, i.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [(0, i.jsx)("path", {
                        className: r,
                        fill: s,
                        d: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"
                    }), (0, i.jsx)("rect", {
                        width: "24",
                        height: "24"
                    })]
                })
            })
        }, r.CalendarIcon, void 0, {
            size: 24
        })
}