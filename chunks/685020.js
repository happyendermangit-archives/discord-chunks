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
        a = n("652397"),
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
                viewBox: "0 0 24 24",
                ...(0, s.default)(r),
                width: t,
                height: n,
                children: (0, i.jsx)("path", {
                    fill: l,
                    className: a,
                    d: "M21 4V2H11V4H14.461L7.351 20H3V22H13V20H9.539L16.649 4H21Z"
                })
            })
        }, a.ItalicIcon, void 0, {
            size: 24
        })
}