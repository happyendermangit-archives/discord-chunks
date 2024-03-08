function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("469563"),
        a = n("509317"),
        s = n("75196"),
        r = (0, l.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: l = "currentColor",
                foreground: a,
                ...r
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, s.default)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: l,
                    className: a,
                    d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                })
            })
        }, a.FolderIcon, void 0, {
            size: 24
        })
}