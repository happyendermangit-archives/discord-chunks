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
        s = n("269096"),
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
                    className: s,
                    fill: r,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
                })
            })
        }, s.CheckmarkLargeIcon, void 0, {
            size: 24
        })
}