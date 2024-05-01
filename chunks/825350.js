function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ScreenXIcon: function() {
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
        return (0, i.jsxs)("svg", {
            ...(0, a.default)(l),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                fillRule: "evenodd",
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                clipRule: "evenodd",
                className: o
            }), (0, i.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                className: o
            })]
        })
    }
}