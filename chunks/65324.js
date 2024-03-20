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
        r = n("206230"),
        i = n("491605"),
        u = n("642716"),
        o = n("646718");

    function d(e) {
        let {
            giftStyle: t,
            className: n,
            shouldAnimate: d = !0,
            defaultAnimationState: c,
            idleAnimationState: f
        } = e, E = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion), [_, I] = a.useState(c), h = a.useRef((0, u.getGiftAnimationData)(t, _)), [p, m] = a.useState(null == f), [T, N] = a.useState(!1), [g, A] = a.useState(-1), S = () => {
            h.current = (0, u.getGiftAnimationData)(t, _), A(e => e + 1)
        }, C = () => {
            m(!1), N(!0), A(-1), I(c)
        };
        a.useEffect(() => {
            null == f && I(c)
        }, [f, c]), a.useEffect(() => {
            if (null != f && g >= 0) {
                C();
                return
            }
            S()
        }, [t, f]), a.useEffect(() => {
            (!T || null == f) && S()
        }, [_]), a.useEffect(() => {
            T && (m(null == f), N(!1), S())
        }, [T]);
        if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
        return (0, s.jsx)(i.default, {
            importData: h.current,
            shouldAnimate: !E && d,
            className: n,
            versionKey: g,
            onComplete: null != f ? () => {
                null != f && (I(f), m(!0))
            } : void 0,
            loop: p
        })
    }
}