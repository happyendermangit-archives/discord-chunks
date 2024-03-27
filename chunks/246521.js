function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SendMessageIcon: function() {
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
                d: "M6.6 10.02 14 11.4a.6.6 0 0 1 0 1.18L6.6 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L5.65 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z",
                className: o
            })
        })
    }
}