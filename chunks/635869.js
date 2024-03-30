function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("718017"),
        d = n("442837"),
        _ = n("607070"),
        c = n("320173");
    let E = {
        mass: 10,
        tension: 550,
        friction: 140
    };

    function I(e) {
        let {
            className: t,
            pageMultiplier: n
        } = e, s = (0, d.useStateFromStores)([_.default], () => _.default.useReducedMotion), [o, I] = r.useState({
            x: 0,
            y: 0
        }), T = r.useMemo(() => l().throttle(e => {
            if (s) return;
            let t = (window.innerWidth - e.pageX * n) / 90;
            I({
                x: t,
                y: (window.innerHeight - e.pageY * n) / 90
            })
        }, 20), [n, s]);
        r.useEffect(() => (window.addEventListener("mousemove", T), () => window.removeEventListener("mousemove", T)), [T]);
        let [f, S] = (0, u.useSpring)(() => ({
            x: 0,
            y: 0,
            config: E
        }));
        return r.useEffect(() => {
            S({
                x: o.x,
                y: o.y
            })
        }, [o.x, o.y, S]), (0, i.jsx)(u.animated.div, {
            style: {
                transform: (0, u.to)([f.x, f.y], (e, t) => "translate3d(".concat(e, "px, ").concat(t, "px, 0)"))
            },
            className: a()(c.background, t)
        })
    }
}