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
        a = n("47693"),
        s = n("75196"),
        r = (0, l.replaceIcon)(function(e) {
            let {
                width: t = 24,
                height: n = 24,
                color: l = "currentColor",
                foreground: a,
                ...r
            } = e;
            return (0, i.jsxs)("svg", {
                ...(0, s.default)(r),
                width: t,
                height: n,
                viewBox: "0 0 24 24",
                children: [(0, i.jsx)("path", {
                    fill: l,
                    className: a,
                    d: "M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
                }), (0, i.jsx)("path", {
                    fill: l,
                    className: a,
                    d: "M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
                })]
            })
        }, a.TrashIcon, void 0, {
            size: 24
        })
}