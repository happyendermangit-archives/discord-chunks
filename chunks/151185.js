function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("469563"),
        s = n("424823"),
        l = n("75196"),
        a = (0, r.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: r = "currentColor",
                foreground: s,
                ...a
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, l.default)(a),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: r,
                    className: s,
                    d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                })
            })
        }, s.PlusSmallIcon, void 0, {
            size: 24
        })
}