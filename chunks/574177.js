function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MoreVerticalIcon: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        a = n("331595");
    let s = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: s = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...l
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}