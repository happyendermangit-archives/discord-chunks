function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var a = n("37983"),
        i = n("884691"),
        s = n("414456"),
        l = n.n(s),
        o = n("917351"),
        r = n.n(o),
        u = n("146606"),
        d = n("446674"),
        c = n("206230"),
        f = n("197936");
    let g = {
        mass: 10,
        tension: 550,
        friction: 140
    };

    function m(e) {
        let {
            className: t,
            pageMultiplier: n
        } = e, s = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion), [o, m] = i.useState({
            x: 0,
            y: 0
        }), h = i.useMemo(() => r.throttle(e => {
            if (s) return;
            let t = (window.innerWidth - e.pageX * n) / 90,
                a = (window.innerHeight - e.pageY * n) / 90;
            m({
                x: t,
                y: a
            })
        }, 20), [n, s]);
        i.useEffect(() => (window.addEventListener("mousemove", h), () => window.removeEventListener("mousemove", h)), [h]);
        let [_, p] = (0, u.useSpring)(() => ({
            x: 0,
            y: 0,
            config: g
        }));
        return i.useEffect(() => {
            p({
                x: o.x,
                y: o.y
            })
        }, [o.x, o.y, p]), (0, a.jsx)(u.animated.div, {
            style: {
                transform: (0, u.to)([_.x, _.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
            },
            className: l(f.background, t)
        })
    }
}