function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TicketIcon: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var a = n("669491"),
        s = n("82169");
    let r = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: r = a.default.colors.INTERACTIVE_NORMAL,
            colorClass: l = "",
            ...o
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, s.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M2.1 12a3 3 0 0 0 0 4.24l.46.46c.17.17.43.2.65.1a3 3 0 0 1 4 4c-.1.2-.08.47.08.64l.47.46a3 3 0 0 0 4.24 0l6.77-6.77a1 1 0 0 1 1.36-1.36L21.9 12a3 3 0 0 0 0-4.24l-.46-.47a.56.56 0 0 0-.65-.08 3 3 0 0 1-4-4 .56.56 0 0 0-.09-.65l-.46-.46a3 3 0 0 0-4.24 0l-1.77 1.77a1 1 0 0 1-1.36 1.36L2.1 12Zm10.01-6.3A1 1 0 1 0 10.7 7.1l.69.7a1 1 0 1 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 1 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Zm2.75 2.75a1 1 0 0 0-1.41 1.41l.69.7a1 1 0 0 0 1.41-1.42l-.69-.7Z",
                clipRule: "evenodd",
                className: l
            })
        })
    }
}