function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        l = n("384737"),
        o = n("448052"),
        a = n("748802"),
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
        E = e => {
            let {
                direction: t = h.DOWN,
                width: n = 24,
                height: s = 24,
                color: E = "currentColor",
                transition: v = f.transition,
                className: C,
                foreground: p,
                expanded: _,
                ...S
            } = e, {
                enabled: I
            } = (0, c.useRedesignIconContext)(), N = t;
            if (!0 === _ ? N = h.DOWN : !1 === _ && (N = h.RIGHT), I) {
                let e = {
                    [h.UP]: u.ChevronSmallUpIcon,
                    [h.DOWN]: l.ChevronSmallDownIcon,
                    [h.LEFT]: o.ChevronSmallLeftIcon,
                    [h.RIGHT]: a.ChevronSmallRightIcon
                } [N];
                return (0, i.jsx)(e, {
                    ...S,
                    className: C,
                    width: n,
                    height: s,
                    color: E,
                    colorClass: p
                })
            }
            return (0, i.jsx)("svg", {
                className: r(C, v, N),
                width: n,
                height: s,
                viewBox: "0 0 24 24",
                ...(0, d.default)(S),
                children: (0, i.jsx)("path", {
                    className: p,
                    fill: "none",
                    stroke: E,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7 10L12 15 17 10",
                    "aria-hidden": !0
                })
            })
        };
    E.Directions = h;
    var v = E
}