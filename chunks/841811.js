function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("469563"),
        r = n("503420"),
        a = n("75196"),
        o = (0, i.replaceIcon)(function(e) {
            let {
                width: t = 16,
                height: n = 16,
                color: i = "currentColor",
                foreground: r,
                ...o
            } = e;
            return (0, s.jsx)("svg", {
                ...(0, a.default)(o),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    d: "M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z",
                    fill: i,
                    className: r
                })
            })
        }, r.ClockIcon, void 0, {
            size: 16
        })
}