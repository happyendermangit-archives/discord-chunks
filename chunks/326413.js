function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("607070"),
        o = n("301822");

    function l(e) {
        let {
            animationData: t,
            className: n
        } = e, [l, u] = (0, r.useState)(0), d = (0, s.useStateFromStores)([a.default], () => a.default.useReducedMotion);
        return (0, r.useEffect)(() => {
            let e = l + 1;
            e < t.length && t[e]()
        }, [l, t]), (0, i.jsx)(o.default, {
            importData: t[l],
            className: n,
            shouldAnimate: !d,
            versionKey: l,
            onComplete: () => {
                l < t.length - 1 && u(l + 1)
            },
            loop: l === t.length - 1
        })
    }
}