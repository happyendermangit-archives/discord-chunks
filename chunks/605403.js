function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("960259"),
        o = n("531057"),
        l = n("423034");
    t.default = (0, s.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            className: s,
            foreground: o,
            open: u = !1
        } = e;
        return (0, i.jsx)("svg", {
            className: a()(l.arrow, s, {
                [l.open]: u
            }),
            width: t,
            height: n,
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                className: o,
                fill: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
            })
        })
    }, o.ChevronSmallDownIcon, void 0, {
        size: 24
    })
}