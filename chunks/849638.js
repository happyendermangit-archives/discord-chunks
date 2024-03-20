function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        PlayIcon: function() {
            return a
        }
    });
    var r = i("37983");
    i("884691");
    var n = i("669491"),
        s = i("82169");
    let a = e => {
        let {
            width: t = 24,
            height: i = 24,
            color: a = n.default.colors.INTERACTIVE_NORMAL,
            colorClass: l = "",
            ...u
        } = e;
        return (0, r.jsx)("svg", {
            ...(0, s.default)(u),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: i,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
                fill: "string" == typeof a ? a : a.css,
                d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                className: l
            })
        })
    }
}