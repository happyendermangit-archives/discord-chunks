function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007"), n("70102");
    var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        i = n("206230"),
        r = n("491605"),
        u = n("642716"),
        o = n("646718");

    function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: c,
            idleAnimationState: f
        } = e, E = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), [I, _] = a.useState(c), h = a.useRef((0, u.getGiftAnimationData)(t, I)), [p, T] = a.useState(null == f), [m, N] = a.useState(!1), [g, A] = a.useState(-1), S = () => {
            h.current = (0, u.getGiftAnimationData)(t, I), A(e => e + 1)
        }, v = () => {
            T(!1), N(!0), A(-1), _(c)
        };
        a.useEffect(() => {
            null == f && _(c)
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
            importData: h.current,
            shouldAnimate: !E && d,
            className: n,
            versionKey: g,
            onComplete: null != f ? () => {
                null != f && (_(f), T(!0))
            } : void 0,
            loop: p
        })
    }
}