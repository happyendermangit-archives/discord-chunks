function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnnouncementsIcon: function() {
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
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M19.56 2a3 3 0 0 0-2.46 1.28 3.85 3.85 0 0 1-1.86 1.42l-8.9 3.18a.5.5 0 0 0-.34.47v10.09a3 3 0 0 0 2.27 2.9l.62.16c1.57.4 3.15-.56 3.55-2.12a.92.92 0 0 1 1.23-.63l2.36.94c.42.27.79.62 1.07 1.03A3 3 0 0 0 19.56 22h.94c.83 0 1.5-.67 1.5-1.5v-17c0-.83-.67-1.5-1.5-1.5h-.94Zm-8.53 15.8L8 16.7v1.73a1 1 0 0 0 .76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1Z",
                clipRule: "evenodd",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4Z",
                className: o
            })]
        })
    }
}