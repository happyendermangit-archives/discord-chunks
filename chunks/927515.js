function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PollsIcon: function() {
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
                d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
                className: o
            })
        })
    }
}