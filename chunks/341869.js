function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChatCheckIcon: function() {
            return u
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("669491"),
        r = n("82169");
    let u = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: u = i.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...d
        } = e;
        return (0, l.jsxs)("svg", {
            ...(0, r.default)(d),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M12.66 21.98c.4-.03.56-.51.28-.8l-.06-.06a3 3 0 1 1 4.24-4.24l.53.52c.2.2.5.2.7 0l2.53-2.52a3 3 0 0 1 .64-.5c.14-.07.24-.2.27-.34a10 10 0 1 0-18.24 3.32c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.22 0 .44 0 .66-.02Z",
                className: a
            }), (0, l.jsx)("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M23.7 17.7a1 1 0 0 0-1.4-1.4L18 20.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                className: a
            })]
        })
    }
}