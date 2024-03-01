function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        HeartIcon: function() {
            return l
        }
    });
    var i = s("37983");
    s("884691");
    var r = s("669491"),
        a = s("82169");
    let l = e => {
        let {
            width: t = 24,
            height: s = 24,
            color: l = r.default.colors.INTERACTIVE_NORMAL,
            colorClass: o = "",
            ...n
        } = e;
        return (0, i.jsx)("svg", {
            ...(0, a.default)(n),
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: s,
            fill: "none",
            viewBox: "0 0 24 24",
            children: (0, i.jsx)("path", {
                fill: "string" == typeof l ? l : l.css,
                d: "M12.47 21.73a.92.92 0 0 1-.94 0C9.43 20.48 1 15.09 1 8.75A5.75 5.75 0 0 1 6.75 3c2.34 0 3.88.9 5.25 2.26A6.98 6.98 0 0 1 17.25 3 5.75 5.75 0 0 1 23 8.75c0 6.34-8.42 11.73-10.53 12.98Z",
                className: o
            })
        })
    }
}