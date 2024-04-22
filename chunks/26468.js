function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        LocationIcon: function() {
            return a
        }
    });
    var n = t("735250");
    t("470079");
    var s = t("692547"),
        i = t("331595");
    let a = e => {
        let {
            width: l = 24,
            height: t = 24,
            color: a = s.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...u
        } = e;
        return (0, n.jsx)("svg", {
            ...(0, i.default)(u),
            xmlns: "http://www.w3.org/2000/svg",
            width: l,
            height: t,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, n.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                fillRule: "evenodd",
                d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                clipRule: "evenodd",
                className: o
            })
        })
    }
}