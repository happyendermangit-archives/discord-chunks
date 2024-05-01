function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAnimatedAvatarSrc: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        a = n("607070"),
        s = n("654904"),
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
        } = e, [I, T] = i.useState(!1), f = (0, r.useStateFromStores)([a.default], () => a.default.useReducedMotion), S = (0, r.useStateFromStores)([l.default], () => l.default.isFocused()) && (I || !f && !c), {
            pendingAvatar: h
        } = (0, u.default)({}), A = (0, r.useStateFromStores)([o.default], () => null != n && null != t ? o.default.getMember(n, t.id) : null), m = i.useMemo(() => null != t ? (0, s.getPreviewAvatar)(_ ? null != E ? E : h : void 0, A, t, {
            canAnimate: S,
            size: d
        }) : void 0, [_, h, A, t, S, d, E]), N = i.useCallback(() => T(!0), []);
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