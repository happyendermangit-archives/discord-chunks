function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("469563"),
        a = n("618991"),
        s = n("75196"),
        r = (0, l.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: l = "currentColor",
                foreground: a,
                ...r
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, s.default)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    className: a,
                    fill: l,
                    d: "M23 10V4H1V10C2.1 10 3 10.9 3 12C3 13.1 2.1 14 1 14V20H23V14C21.9 14 21 13.1 21 12C21 10.9 21.9 10 23 10ZM13 16V18H11V16H9V14H13C13.27 14 13.5 13.83 13.5 13.62C13.5 12.58 8.5 13.62 8.5 10.37C8.5 9.07 9.62 8 11 8V6H13V8H15V10H11C10.73 10 10.5 10.17 10.5 10.38C10.5 11.42 15.5 10.38 15.5 13.63C15.5 14.93 14.38 16 13 16Z"
                })
            })
        }, a.TicketIcon, void 0, {
            size: 24
        })
}