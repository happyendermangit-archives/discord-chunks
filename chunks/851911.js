function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SparklesIcon: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("331595");
    let a = e => {
        let {
            width: t = 24,
            height: n = 24,
            color: a = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...l
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, s.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M18.14 2.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.21 1.21 0 0 0 2.28 0l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19l-.51-1.38ZM10.6 9.11a1.7 1.7 0 0 0-3.2 0l-.84 2.27a2 2 0 0 1-1.18 1.18l-2.27.85a1.7 1.7 0 0 0 0 3.18l2.27.85a2 2 0 0 1 1.18 1.18l.85 2.27a1.7 1.7 0 0 0 3.18 0l.85-2.27a2 2 0 0 1 1.18-1.18l2.27-.85a1.7 1.7 0 0 0 0-3.18l-2.27-.85a2 2 0 0 1-1.18-1.18l-.85-2.27Z",
                className: o
            })
        })
    }
}