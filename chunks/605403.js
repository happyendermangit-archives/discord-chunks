function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("960259"),
        o = n("531057"),
        l = n("157192");
    t.default = (0, a.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            className: a,
            foreground: o,
            open: u = !1
        } = e;
        return (0, i.jsx)("svg", {
            className: s()(l.arrow, a, {
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