function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("469563"),
        r = n("384737"),
        o = n("549817"),
        u = (0, s.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: l = "currentColor",
                className: s,
                foreground: r,
                open: u = !1
            } = e;
            return (0, i.jsx)("svg", {
                className: a(o.arrow, s, {
                    [o.open]: u
                }),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    className: r,
                    fill: l,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                })
            })
        }, r.ChevronSmallDownIcon, void 0, {
            size: 24
        })
}