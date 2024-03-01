function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("469563"),
        a = n("578478"),
        s = n("75196"),
        r = (0, i.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: i = "currentColor",
                foreground: a,
                ...r
            } = e;
            return (0, l.jsx)("svg", {
                ...(0, s.default)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    className: a,
                    d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                    fill: i
                })
            })
        }, a.ImageIcon, void 0, {
            size: 24
        })
}