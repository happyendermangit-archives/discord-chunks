function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return o
        }
    });
    var l = n("37983");
    n("884691");
    var r = n("469563"),
        a = n("906069"),
        s = n("75196"),
        o = (0, r.replaceIcon)(function(t) {
            let {
                width: e = 24,
                height: n = 24,
                color: r = "currentColor",
                foreground: a,
                ...o
            } = t;
            return (0, l.jsx)("svg", {
                ...(0, s.default)(o),
                width: e,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: r,
                    className: a,
                    d: "M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                })
            })
        }, a.ReactionIcon, void 0, {
            size: 24
        })
}