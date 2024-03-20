function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MoreVerticalIcon: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("669491"),
        s = n("82169");
    let l = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: l = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
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
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
                clipRule: "evenodd",
                className: a
            })
        })
    }
}