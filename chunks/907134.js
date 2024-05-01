function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentIcon: function() {
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
                d: "M10.57 4.01a6.97 6.97 0 0 1 9.86 0l.54.55a6.99 6.99 0 0 1 0 9.88l-7.26 7.27a1 1 0 0 1-1.42-1.42l7.27-7.26a4.99 4.99 0 0 0 0-7.06L19 5.43a4.97 4.97 0 0 0-7.02 0l-8.02 8.02a3.24 3.24 0 1 0 4.58 4.58l6.24-6.24a1.12 1.12 0 0 0-1.58-1.58l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5a3.12 3.12 0 1 1 4.42 4.42l-6.24 6.24a5.24 5.24 0 0 1-7.42-7.42l8.02-8.02Z",
                className: o
            })
        })
    }
}