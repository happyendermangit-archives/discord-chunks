function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("242411"),
        o = n("952794");
    t.default = function(e) {
        let {
            glowOpacity: t,
            className: n
        } = e;
        return (0, i.jsxs)("div", {
            className: a()(o.nitroTopDividerContainer, n),
            children: [(0, i.jsx)("div", {
                className: o.nitroTopDividerUpper
            }), (0, i.jsx)("div", {
                style: {
                    opacity: t
                },
                className: o.nitroTopDividerShadow
            }), (0, i.jsxs)("div", {
                className: a()(o.nitroTopDividerLockContainer),
                children: [(0, i.jsx)("div", {
                    className: o.nitroTopDividerLockBorder
                }), (0, i.jsx)("div", {
                    className: o.nitroTopDividerLockCircle,
                    children: (0, i.jsx)(s.default, {
                        width: 16,
                        height: 16,
                        color: "white"
                    })
                }), (0, i.jsx)("div", {
                    className: o.nitroTopDividerLockBorderReversed
                })]
            }), (0, i.jsx)("div", {
                className: o.nitroTopDividerLower
            })]
        })
    }
}