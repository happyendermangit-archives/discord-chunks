function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("960259"),
        a = n("612165"),
        s = n("325767");
    t.default = (0, r.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: n = 24,
            color: r = "currentColor",
            foreground: a,
            backgroundColor: o,
            ...l
        } = e;
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(l),
            width: t,
            height: n,
            viewBox: "0 0 14 14",
            children: [null != o ? (0, i.jsx)("circle", {
                r: 5,
                cx: 7,
                cy: 7,
                fill: o
            }) : null, (0, i.jsx)("path", {
                fill: r,
                className: a,
                d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
            })]
        })
    }, a.CircleXIcon, void 0, {
        size: 24
    })
}