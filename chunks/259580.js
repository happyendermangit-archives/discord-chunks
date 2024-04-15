function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("531057"),
        o = n("605260"),
        l = n("465270"),
        u = n("865824"),
        d = n("481060"),
        _ = n("325767"),
        c = n("715837");
    let E = {
            UP: c.directionUp,
            RIGHT: c.directionRight,
            DOWN: c.directionDown,
            LEFT: c.directionLeft
        },
        I = e => {
            let {
                direction: t = E.DOWN,
                width: n = 24,
                height: r = 24,
                color: I = "currentColor",
                transition: T = c.transition,
                className: f,
                foreground: S,
                expanded: A,
                ...h
            } = e, {
                enabled: m
            } = (0, d.useRedesignIconContext)(), N = t;
            if (!0 === A ? N = E.DOWN : !1 === A && (N = E.RIGHT), m) {
                let e = {
                    [E.UP]: u.ChevronSmallUpIcon,
                    [E.DOWN]: a.ChevronSmallDownIcon,
                    [E.LEFT]: o.ChevronSmallLeftIcon,
                    [E.RIGHT]: l.ChevronSmallRightIcon
                } [N];
                return (0, i.jsx)(e, {
                    ...h,
                    className: f,
                    width: n,
                    height: r,
                    color: I,
                    colorClass: S
                })
            }
            return (0, i.jsx)("svg", {
                className: s()(f, T, N),
                width: n,
                height: r,
                viewBox: "0 0 24 24",
                ...(0, _.default)(h),
                children: (0, i.jsx)("path", {
                    className: S,
                    fill: "none",
                    stroke: I,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7 10L12 15 17 10",
                    "aria-hidden": !0
                })
            })
        };
    I.Directions = E, t.default = I
}