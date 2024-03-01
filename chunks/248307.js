function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FullscreenExitIcon: function() {
            return s
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("669491"),
        a = n("82169");
    let s = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: s = i.default.colors.INTERACTIVE_NORMAL,
            colorClass: r = "",
            ...o
        } = e;
        return (0, l.jsx)("svg", {
            ...(0, a.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M8 6a2 2 0 0 1-2 2H3a1 1 0 0 0 0 2h3a4 4 0 0 0 4-4V3a1 1 0 0 0-2 0v3ZM8 18a2 2 0 0 0-2-2H3a1 1 0 1 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 1 1-2 0v-3ZM18 8a2 2 0 0 1-2-2V3a1 1 0 1 0-2 0v3a4 4 0 0 0 4 4h3a1 1 0 1 0 0-2h-3ZM16 18c0-1.1.9-2 2-2h3a1 1 0 1 0 0-2h-3a4 4 0 0 0-4 4v3a1 1 0 1 0 2 0v-3Z",
                className: r
            })
        })
    }
}