function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return s
        }
    });
    var n = r("37983");
    r("884691");
    var l = r("469563"),
        i = r("225389"),
        a = r("75196"),
        s = (0, l.replaceIcon)(function(e) {
            let {
                width: t = 16,
                height: r = 16,
                color: l = "currentColor",
                foreground: i,
                ...s
            } = e;
            return (0, n.jsx)("svg", {
                ...(0, a.default)(s),
                width: t,
                height: r,
                viewBox: "0 0 12 12",
                children: (0, n.jsx)("path", {
                    fill: l,
                    className: i,
                    d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                })
            })
        }, i.CircleInformationIcon, {}, {
            size: 16
        })
}