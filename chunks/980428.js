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
        r = n("448052"),
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
                    children: [(0, i.jsx)("polygon", {
                        className: r,
                        fill: s,
                        fillRule: "nonzero",
                        points: "18.35 4.35 16 2 6 12 16 22 18.35 19.65 10.717 12"
                    }), (0, i.jsx)("polygon", {
                        points: "0 0 24 0 24 24 0 24"
                    })]
                })
            })
        }, r.ChevronSmallLeftIcon, void 0, {
            size: 24
        })
}