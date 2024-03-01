function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        TextLockIcon: function() {
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
        return (0, n.jsxs)("svg", {
            ...(0, a.default)(c),
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: t,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [(0, n.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                fillRule: "evenodd",
                d: "M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z",
                clipRule: "evenodd",
                className: i
            }), (0, n.jsx)("path", {
                fill: "string" == typeof r ? r : r.css,
                d: "M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z",
                className: i
            })]
        })
    }
}