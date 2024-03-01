function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        NitroWheelIcon: function() {
            return l
        }
    });
    var r = i("37983");
    i("884691");
    var n = i("669491"),
        s = i("82169");
    let l = e => {
        let {
            width: t = 24,
            height: i = 24,
            color: l = n.default.colors.INTERACTIVE_NORMAL,
            colorClass: a = "",
            ...u
        } = e;
        return (0, r.jsxs)("svg", {
            ...(0, s.default)(u),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: i,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                className: a
            }), (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                clipRule: "evenodd",
                className: a
            }), (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                className: a
            })]
        })
    }
}