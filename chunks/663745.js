function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("469563"),
        s = n("738707"),
        l = n("75196"),
        a = (0, r.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: r = "currentColor",
                foreground: s,
                ...a
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, l.default)(a),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: (0, i.jsxs)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [(0, i.jsx)("path", {
                        d: "M24 0v24H0V0z"
                    }), (0, i.jsx)("path", {
                        className: s,
                        fill: r,
                        d: "M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                    })]
                })
            })
        }, s.MoreVerticalIcon, void 0, {
            size: 24
        })
}