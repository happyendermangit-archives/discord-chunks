function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("75196"),
        r = function(e) {
            let {
                width: t = 16,
                height: n = 16,
                color: r = "currentColor",
                foreground: l,
                ...a
            } = e;
            return (0, i.jsx)("svg", {
                ...(0, s.default)(a),
                width: t,
                height: n,
                viewBox: "0 0 16 15.2",
                children: (0, i.jsx)("path", {
                    className: l,
                    fill: r,
                    fillRule: "evenodd",
                    d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                })
            })
        }
}