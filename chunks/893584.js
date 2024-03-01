function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        BookCheckIcon: function() {
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
                d: "M15 2a3 3 0 0 1 3 3v12H5.5a1.5 1.5 0 0 0 0 3h14a.5.5 0 0 0 .5-.5V5h1a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10Zm-.3 5.7a1 1 0 0 0-1.4-1.4L9 10.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                clipRule: "evenodd",
                className: i
            })
        })
    }
}