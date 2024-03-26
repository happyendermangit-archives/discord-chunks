function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
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
        E = e => {
            let {
                direction: t = h.DOWN,
                width: n = 24,
                height: r = 24,
                color: E = "currentColor",
                transition: v = f.transition,
                className: C,
                foreground: p,
                expanded: _,
                ...I
            } = e, {
                enabled: m
            } = (0, c.useRedesignIconContext)(), N = t;
            if (!0 === _ ? N = h.DOWN : !1 === _ && (N = h.RIGHT), m) {
                let e = {
                    [h.UP]: u.ChevronSmallUpIcon,
                    [h.DOWN]: l.ChevronSmallDownIcon,
                    [h.LEFT]: a.ChevronSmallLeftIcon,
                    [h.RIGHT]: o.ChevronSmallRightIcon
                } [N];
                return (0, i.jsx)(e, {
                    ...I,
                    className: C,
                    width: n,
                    height: r,
                    color: E,
                    colorClass: p
                })
            }
            return (0, i.jsx)("svg", {
                className: s(C, v, N),
                width: n,
                height: r,
                viewBox: "0 0 24 24",
                ...(0, d.default)(I),
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