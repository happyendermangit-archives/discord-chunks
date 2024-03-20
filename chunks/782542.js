function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ScreenArrowIcon: function() {
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
        return (0, i.jsxs)("svg", {
            ...(0, s.default)(o),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                clipRule: "evenodd",
                className: a
            }), (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                className: a
            })]
        })
    }
}