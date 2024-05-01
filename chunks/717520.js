function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ItalicIcon: function() {
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
                d: "M8.87 2.31A.5.5 0 0 1 9.34 2h10.92c.36 0 .6.36.47.69l-.6 1.5a.5.5 0 0 1-.47.31h-4.28l-4.17 15h4.05c.36 0 .6.36.47.69l-.6 1.5a.5.5 0 0 1-.47.31H3.74a.5.5 0 0 1-.47-.69l.6-1.5a.5.5 0 0 1 .47-.31h4.28l4.17-15H8.74a.5.5 0 0 1-.47-.69l.6-1.5Z",
                className: o
            })
        })
    }
}