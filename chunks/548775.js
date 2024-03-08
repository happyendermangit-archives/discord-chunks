function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("469563"),
        a = n("645156"),
        s = (0, l.replaceIcon)(function(e) {
            let {
                width: t = 16,
                height: n = 16,
                color: l = "currentColor",
                className: a,
                foreground: s
            } = e;
            return (0, i.jsx)("svg", {
                className: a,
                width: t,
                height: n,
                viewBox: "0 0 16 16",
                children: (0, i.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [(0, i.jsx)("rect", {
                        width: "16",
                        height: "16"
                    }), (0, i.jsx)("polygon", {
                        className: s,
                        fill: l,
                        points: "12 2.32 10.513 2 4 13.68 5.487 14"
                    })]
                })
            })
        }, a.SlashIcon, void 0, {
            size: 16
        })
}