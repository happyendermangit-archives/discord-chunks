function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return d
        }
    }), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        u = n("607070"),
        a = n("301822"),
        l = n("409302"),
        o = n("474936");

    function d(t) {
        let {
            giftStyle: e,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: c,
            idleAnimationState: h
        } = t, f = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion), [b, p] = r.useState(c), m = r.useRef((0, l.getGiftAnimationData)(e, b)), [S, _] = r.useState(null == h), [E, P] = r.useState(!1), [I, O] = r.useState(-1), g = () => {
            m.current = (0, l.getGiftAnimationData)(e, b), O(t => t + 1)
        }, A = () => {
            _(!1), P(!0), O(-1), p(c)
        };
        r.useEffect(() => {
            null == h && p(c)
        }, [h, c]), r.useEffect(() => {
            if (null != h && I >= 0) {
                A();
                return
            }
            g()
        }, [e, h]), r.useEffect(() => {
            (!E || null == h) && g()
        }, [b]), r.useEffect(() => {
            E && (_(null == h), P(!1), g())
        }, [E]);
        if (!o.PremiumGiftStyles.hasOwnProperty(e)) throw Error("Unexpected giftStyle ".concat(e));
        return (0, i.jsx)(a.default, {
            importData: m.current,
            shouldAnimate: !f && d,
            className: n,
            versionKey: I,
            onComplete: null != h ? () => {
                null != h && (p(h), _(!0))
            } : void 0,
            loop: S
        })
    }
}