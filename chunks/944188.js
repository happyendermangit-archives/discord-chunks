function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        WindowLaunchIcon: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("331595");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: a = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...l
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z",
                className: o
            })]
        })
    }
}