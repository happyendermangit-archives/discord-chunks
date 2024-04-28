function(e, t, s) {
    "use strict";
    s.r(t);
    var n = s("735250");
    s("470079");
    var l = s("960259"),
        a = s("652335"),
        r = s("325767");
    t.default = (0, l.replaceIcon)(function(e) {
        let {
            width: t = 24,
            height: s = 24,
            color: l = "currentColor",
            foreground: a,
            ...u
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, r.default)(u),
            width: t,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, n.jsx)("path", {
                className: a,
                fill: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
            })
        })
    }, a.BellIcon, void 0, {
        size: 24
    })
}