function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserClockIcon: function() {
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
                d: "M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 20.53A9.53 9.53 0 0 1 11.53 11h.94c1.28 0 2.5.25 3.61.7.41.18.36.77-.05.96a7 7 0 0 0-3.65 8.6c.11.36-.13.74-.5.74H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16-.48.74-1.03 1.8-1.32 2.9a.53.53 0 0 1-.5.41h-.22C2.66 22 2 21.34 2 20.53Z",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M19 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm1-7a1 1 0 1 0-2 0v2c0 .27.1.52.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.71V17Z",
                clipRule: "evenodd",
                className: o
            })]
        })
    }
}