function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BellIcon: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var a = n("669491"),
        s = n("82169");
    let r = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: r = a.default.colors.INTERACTIVE_NORMAL,
            colorClass: u = "",
            ...i
        } = e;
        return (0, l.jsx)("svg", {
            ...(0, s.default)(i),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
                className: u
            })
        })
    }
}