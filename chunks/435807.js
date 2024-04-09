function(e, s, t) {
    "use strict";
    t.r(s), t.d(s, {
        StickerSmallIcon: function() {
            return i
        }
    });
    var l = t("735250");
    t("470079");
    var a = t("692547"),
        n = t("331595");
    let i = e => {
        let {
            width: s = 24,
            height: t = 24,
            color: i = a.default.colors.INTERACTIVE_NORMAL,
            colorClass: r = "",
            ...c
        } = e;
        return (0, l.jsxs)("svg", {
            ...(0, n.default)(c),
            xmlns: "http://www.w3.org/2000/svg",
            width: s,
            height: t,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                fillRule: "evenodd",
                d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                className: r
            }), (0, l.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                d: "M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z",
                className: r
            })]
        })
    }
}