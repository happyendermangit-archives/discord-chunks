function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        TagIcon: function() {
            return r
        }
    });
    var n = t("37983");
    t("884691");
    var s = t("669491"),
        a = t("82169");
    let r = e => {
        let {
            width: l = 24,
            height: t = 24,
            color: r = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: i = "",
            ...c
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, a.default)(c),
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: t,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, n.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M12.24 2a3 3 0 0 0-2.12.88l-8.25 8.25a3 3 0 0 0 0 4.24l6.76 6.76a3 3 0 0 0 4.24 0l8.25-8.25a3 3 0 0 0 .88-2.12V4a2 2 0 0 0-2-2h-7.76ZM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                clipRule: "evenodd",
                className: i
            })
        })
    }
}