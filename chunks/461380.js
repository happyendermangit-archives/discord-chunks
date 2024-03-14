function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
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
                height: s = 24,
                color: v = "currentColor",
                transition: E = f.transition,
                className: C,
                foreground: p,
                expanded: m,
                ..._
            } = e, {
                enabled: S
            } = (0, c.useRedesignIconContext)(), I = t;
            if (!0 === m ? I = h.DOWN : !1 === m && (I = h.RIGHT), S) {
                let e = {
                    [h.UP]: u.ChevronSmallUpIcon,
                    [h.DOWN]: l.ChevronSmallDownIcon,
                    [h.LEFT]: a.ChevronSmallLeftIcon,
                    [h.RIGHT]: o.ChevronSmallRightIcon
                } [I];
                return (0, i.jsx)(e, {
                    ..._,
                    className: C,
                    width: n,
                    height: s,
                    color: v,
                    colorClass: p
                })
            }
            return (0, i.jsx)("svg", {
                className: r(C, E, I),
                width: n,
                height: s,
                viewBox: "0 0 24 24",
                ...(0, d.default)(_),
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
    var E = v
}