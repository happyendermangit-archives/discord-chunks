function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        BoostTier1SimpleIcon: function() {
            return i
        }
    });
    var n = l("37983");
    l("884691");
    var r = l("669491"),
        s = l("82169");
    let i = e => {
        let {
            width: t = 24,
            height: l = 24,
            color: i = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...o
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, s.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, n.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                fillRule: "evenodd",
                d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 3.12 7.32 6.95C7.25 7.01 7 7.35 7 8v8c0 .65.25 1 .32 1.05L12 20.88l4.68-3.83c.07-.06.32-.4.32-1.05V8c0-.65-.25-1-.32-1.05L12 3.12Z",
                clipRule: "evenodd",
                className: a
            })
        })
    }
}