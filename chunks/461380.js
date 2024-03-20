function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        l = n("384737"),
        a = n("448052"),
        o = n("748802"),
        u = n("260792"),
        c = n("77078"),
        d = n("75196"),
        f = n("366842");
    let h = {
            UP: f.directionUp,
            RIGHT: f.directionRight,
            DOWN: f.directionDown,
            LEFT: f.directionLeft
        },
        v = e => {
            let {
                direction: t = h.DOWN,
                width: n = 24,
                height: r = 24,
                color: v = "currentColor",
                transition: p = f.transition,
                className: C,
                foreground: E,
                expanded: m,
                ..._
            } = e, {
                enabled: g
            } = (0, c.useRedesignIconContext)(), N = t;
            if (!0 === m ? N = h.DOWN : !1 === m && (N = h.RIGHT), g) {
                let e = {
                    [h.UP]: u.ChevronSmallUpIcon,
                    [h.DOWN]: l.ChevronSmallDownIcon,
                    [h.LEFT]: a.ChevronSmallLeftIcon,
                    [h.RIGHT]: o.ChevronSmallRightIcon
                } [N];
                return (0, i.jsx)(e, {
                    ..._,
                    className: C,
                    width: n,
                    height: r,
                    color: v,
                    colorClass: E
                })
            }
            return (0, i.jsx)("svg", {
                className: s(C, p, N),
                width: n,
                height: r,
                viewBox: "0 0 24 24",
                ...(0, d.default)(_),
                children: (0, i.jsx)("path", {
                    className: E,
                    fill: "none",
                    stroke: v,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7 10L12 15 17 10",
                    "aria-hidden": !0
                })
            })
        };
    v.Directions = h;
    var p = v
}