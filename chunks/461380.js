function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
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
        v = e => {
            let {
                direction: t = h.DOWN,
                width: n = 24,
                height: s = 24,
                color: v = "currentColor",
                transition: C = f.transition,
                className: E,
                foreground: p,
                expanded: _,
                ...I
            } = e, {
                enabled: S
            } = (0, c.useRedesignIconContext)(), m = t;
            if (!0 === _ ? m = h.DOWN : !1 === _ && (m = h.RIGHT), S) {
                let e = {
                    [h.UP]: u.ChevronSmallUpIcon,
                    [h.DOWN]: l.ChevronSmallDownIcon,
                    [h.LEFT]: o.ChevronSmallLeftIcon,
                    [h.RIGHT]: a.ChevronSmallRightIcon
                } [m];
                return (0, i.jsx)(e, {
                    ...I,
                    className: E,
                    width: n,
                    height: s,
                    color: v,
                    colorClass: p
                })
            }
            return (0, i.jsx)("svg", {
                className: r(E, C, m),
                width: n,
                height: s,
                viewBox: "0 0 24 24",
                ...(0, d.default)(I),
                children: (0, i.jsx)("path", {
                    className: p,
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
    var C = v
}