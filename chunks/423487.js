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
        s = n("165984"),
        a = n("75196"),
        o = (0, r.replaceIcon)(function(e) {
            let {
                width: t = 20,
                height: n = 20,
                color: r = "currentColor",
                foreground: s,
                ...o
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, a.default)(o),
                width: t,
                height: n,
                viewBox: "0 0 20 20",
                children: (0, i.jsx)("path", {
                    d: "M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    className: s,
                    fill: r
                })
            })
        }, s.CircleExclamationPointIcon, void 0, {
            size: 20
        })
}