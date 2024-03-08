function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("206230"),
        r = n("491605");

    function o(e) {
        let {
            animationData: t,
            className: n
        } = e, [o, u] = (0, l.useState)(0), d = (0, a.useStateFromStores)([s.default], () => s.default.useReducedMotion);
        return (0, l.useEffect)(() => {
            let e = o + 1;
            e < t.length && t[e]()
        }, [o, t]), (0, i.jsx)(r.default, {
            importData: t[o],
            className: n,
            shouldAnimate: !d,
            versionKey: o,
            onComplete: () => {
                o < t.length - 1 && u(o + 1)
            },
            loop: o === t.length - 1
        })
    }
}