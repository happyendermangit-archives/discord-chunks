function(e, s, t) {
    "use strict";
    t.r(s), t.d(s, {
        MicrophoneIcon: function() {
            return i
        }
    });
    var l = t("37983");
    t("884691");
    var a = t("669491"),
        n = t("82169");
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
                d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                className: r
            }), (0, l.jsx)("path", {
                fill: "string" == typeof i ? i : i.css,
                d: "M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                className: r
            })]
        })
    }
}