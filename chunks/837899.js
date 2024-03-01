function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("469563"),
        s = n("384737"),
        a = n("75196"),
        o = (0, r.replaceIcon)(function(e) {
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
                    d: "M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"
                })
            })
        }, s.ChevronSmallDownIcon, void 0, {
            size: 24
        })
}