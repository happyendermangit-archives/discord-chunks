function(e, l, t) {
    "use strict";
    t.r(l);
    var n = t("735250");
    t("470079");
    var s = t("960259"),
        i = t("652335"),
        a = t("325767");
    l.default = (0, s.replaceIcon)(function(e) {
        let {
            width: l = 24,
            height: t = 24,
            color: s = "currentColor",
            foreground: i,
            ...o
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, a.default)(o),
            width: l,
            height: t,
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, n.jsx)("path", {
                className: i,
                fill: s,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
            })
        })
    }, i.BellIcon, void 0, {
        size: 24
    })
}