function(t, e, l) {
    "use strict";
    l.r(e), l.d(e, {
        UploadIcon: function() {
            return s
        }
    });
    var n = l("37983");
    l("884691");
    var r = l("669491"),
        a = l("82169");
    let s = t => {
        let {
            width: e = 24,
            height: l = 24,
            color: s = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...i
        } = t;
        return (0, n.jsx)("svg", {
            ...(0, a.default)(i),
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: l,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, n.jsx)("path", {
                fill: "string" == typeof s ? s : s.css,
                d: "M13 16V5.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.42L11 5.4V16a1 1 0 1 0 2 0ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
                className: o
            })
        })
    }
}