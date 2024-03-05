function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("469563"),
        s = n("354087"),
        i = n("75196"),
        l = (0, r.replaceIcon)(function(e) {
            let {
                width: t = 16,
                height: n = 16,
                color: r = "currentColor",
                foreground: s,
                ...l
            } = e;
            return (0, a.jsx)("svg", {
                ...(0, i.default)(l),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    className: s,
                    fill: r,
                    d: "M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
                })
            })
        }, s.DoorExitIcon, void 0, {
            size: 16
        })
}