function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("607070"),
        a = n("166625"),
        o = n("271383"),
        l = n("594174"),
        u = n("451478"),
        d = n("768581"),
        _ = n("660097");
    t.default = e => {
        var t;
        let {
            user: n,
            guildId: c,
            size: E,
            animateOnHover: I = !1,
            showPending: T = !1,
            showTryItOut: f = !1,
            avatarDecorationOverride: S
        } = e, [A, h] = i.useState(!1), m = (0, r.useStateFromStores)([s.default], () => s.default.useReducedMotion), N = (0, r.useStateFromStores)([u.default], () => u.default.isFocused()), O = (0, r.useStateFromStores)([o.default], () => null != c && null != n ? o.default.getMember(c, n.id) : null), [p, R] = (0, r.useStateFromStoresArray)([l.default], () => {
            var e;
            return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)]
        }), C = null == O ? null == R ? void 0 : R.avatarDecoration : null === O.avatarDecoration ? null : null !== (t = O.avatarDecoration) && void 0 !== t ? t : null == R ? void 0 : R.avatarDecoration, {
            pendingAvatarDecoration: g
        } = (0, a.default)({
            isTryItOut: f,
            guildId: c
        }), L = N && (A || !m && !I), D = T && void 0 !== g && void 0 !== p && p === (null == n ? void 0 : n.id), v = null != c && null === g, M = D ? v ? null == n ? void 0 : n.avatarDecoration : null != g ? g : C : null != C ? C : null == n ? void 0 : n.avatarDecoration, y = i.useMemo(() => (0, d.getAvatarDecorationURL)({
            avatarDecoration: void 0 !== S ? S : M,
            canAnimate: L,
            size: E
        }), [M, L, E, S]), P = i.useCallback(() => h(!0), []);
        return {
            avatarPlaceholderSrc: _,
            avatarDecorationSrc: y,
            isAvatarDecorationAnimating: L,
            eventHandlers: {
                onMouseEnter: P,
                onMouseLeave: i.useCallback(() => h(!1), [])
            }
        }
    }
}