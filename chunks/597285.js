function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        StickerSadIcon: function() {
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
                fillRule: "evenodd",
                d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                clipRule: "evenodd",
                className: a
            }), (0, r.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                className: a
            })]
        })
    }
}