function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAnimatedAvatarSrc: function() {
            return c
        }
    }), n("222007");
    var r = n("884691"),
        i = n("446674"),
        l = n("206230"),
        a = n("771325"),
        s = n("26989"),
        o = n("471671"),
        u = n("91653");

    function c(e) {
        let {
            user: t,
            guildId: n,
            size: c,
            showPending: d = !1,
            animateOnHover: f = !1,
            avatarOverride: m
        } = e, [_, E] = r.useState(!1), I = (0, i.useStateFromStores)([l.default], () => l.default.useReducedMotion), T = (0, i.useStateFromStores)([o.default], () => o.default.isFocused()), p = T && (_ || !I && !f), {
            pendingAvatar: S
        } = (0, u.default)({}), P = (0, i.useStateFromStores)([s.default], () => null != n && null != t ? s.default.getMember(n, t.id) : null), R = r.useMemo(() => null != t ? (0, a.getPreviewAvatar)(d ? null != m ? m : S : void 0, P, t, {
            canAnimate: p,
            size: c
        }) : void 0, [d, S, P, t, p, c, m]), C = r.useCallback(() => E(!0), []), O = r.useCallback(() => E(!1), []);
        return {
            avatarSrc: R,
            isAvatarAnimating: p,
            eventHandlers: {
                onMouseEnter: C,
                onMouseLeave: O
            }
        }
    }
}