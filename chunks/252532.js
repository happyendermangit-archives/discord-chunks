function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAnimatedAvatarSrc: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("607070"),
        a = n("654904"),
        o = n("271383"),
        l = n("451478"),
        u = n("166625");

    function d(e) {
        let {
            user: t,
            guildId: n,
            size: d,
            showPending: _ = !1,
            animateOnHover: c = !1,
            avatarOverride: E
        } = e, [I, T] = i.useState(!1), f = (0, r.useStateFromStores)([s.default], () => s.default.useReducedMotion), S = (0, r.useStateFromStores)([l.default], () => l.default.isFocused()) && (I || !f && !c), {
            pendingAvatar: A
        } = (0, u.default)({}), h = (0, r.useStateFromStores)([o.default], () => null != n && null != t ? o.default.getMember(n, t.id) : null), m = i.useMemo(() => null != t ? (0, a.getPreviewAvatar)(_ ? null != E ? E : A : void 0, h, t, {
            canAnimate: S,
            size: d
        }) : void 0, [_, A, h, t, S, d, E]), N = i.useCallback(() => T(!0), []);
        return {
            avatarSrc: m,
            isAvatarAnimating: S,
            eventHandlers: {
                onMouseEnter: N,
                onMouseLeave: i.useCallback(() => T(!1), [])
            }
        }
    }
}