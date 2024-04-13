function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("47120"), n("411104");
    var s = n("735250"),
        a = n("470079"),
        i = n("442837"),
        l = n("607070"),
        r = n("301822"),
        u = n("409302"),
        o = n("474936");

    function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: c,
            idleAnimationState: f
        } = e, E = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), [I, h] = a.useState(c), _ = a.useRef((0, u.getGiftAnimationData)(t, I)), [p, T] = a.useState(null == f), [m, N] = a.useState(!1), [g, A] = a.useState(-1), S = () => {
            _.current = (0, u.getGiftAnimationData)(t, I), A(e => e + 1)
        }, v = () => {
            T(!1), N(!0), A(-1), h(c)
        };
        a.useEffect(() => {
            null == f && h(c)
        }, [f, c]), a.useEffect(() => {
            if (null != f && g >= 0) {
                v();
                return
            }
            S()
        }, [t, f]), a.useEffect(() => {
            (!m || null == f) && S()
        }, [I]), a.useEffect(() => {
            m && (T(null == f), N(!1), S())
        }, [m]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
        return (0, s.jsx)(r.default, {
            importData: _.current,
            shouldAnimate: !E && d,
            className: n,
            versionKey: g,
            onComplete: null != f ? () => {
                null != f && (h(f), T(!0))
            } : void 0,
            loop: p
        })
    }
}