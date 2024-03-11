function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("917351"),
        r = n.n(o),
        u = n("907002"),
        d = n("446674"),
        c = n("206230"),
        f = n("150496");
    let g = {
        mass: 10,
        tension: 550,
        friction: 140
    };

    function m(e) {
        let {
            className: t,
            pageMultiplier: n
        } = e, l = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion), [o, m] = a.useState({
            x: 0,
            y: 0
        }), h = a.useMemo(() => r.throttle(e => {
            if (l) return;
            let t = (window.innerWidth - e.pageX * n) / 90,
                i = (window.innerHeight - e.pageY * n) / 90;
            m({
                x: t,
                y: i
            })
        }, 20), [n, l]);
        a.useEffect(() => (window.addEventListener("mousemove", h), () => window.removeEventListener("mousemove", h)), [h]);
        let [_, p] = (0, u.useSpring)(() => ({
            x: 0,
            y: 0,
            config: g
        }));
        return a.useEffect(() => {
            p({
                x: o.x,
                y: o.y
            })
        }, [o.x, o.y, p]), (0, i.jsx)(u.animated.div, {
            style: {
                transform: (0, u.to)([_.x, _.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
            },
            className: s(f.background, t)
        })
    }
}