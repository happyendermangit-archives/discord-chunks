function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlashBoxIcon: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("669491"),
        a = n("82169");
    let o = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: o = l.default.colors.INTERACTIVE_NORMAL,
            colorClass: r = "",
            ...s
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(s),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof o ? o : o.css,
                fillRule: "evenodd",
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                clipRule: "evenodd",
                className: r
            })
        })
    }
}