function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return f
        }
    }), r("222007");
    var a = r("884691"),
        n = r("446674"),
        l = r("206230"),
        i = r("91653"),
        u = r("26989"),
        o = r("697218"),
        s = r("471671"),
        c = r("315102"),
        d = r("53708"),
        f = e => {
            var t;
            let {
                user: r,
                guildId: f,
                size: v,
                animateOnHover: E = !1,
                showPending: C = !1,
                showTryItOut: A = !1,
                avatarDecorationOverride: T
            } = e, [m, I] = a.useState(!1), P = (0, n.useStateFromStores)([l.default], () => l.default.useReducedMotion), g = (0, n.useStateFromStores)([s.default], () => s.default.isFocused()), p = (0, n.useStateFromStores)([u.default], () => null != f && null != r ? u.default.getMember(f, r.id) : null), [F, S] = (0, n.useStateFromStoresArray)([o.default], () => {
                var e;
                return [null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, o.default.getUser(null == r ? void 0 : r.id)]
            }), _ = null == p ? null == S ? void 0 : S.avatarDecoration : null === p.avatarDecoration ? null : null !== (t = p.avatarDecoration) && void 0 !== t ? t : null == S ? void 0 : S.avatarDecoration, {
                pendingAvatarDecoration: O
            } = (0, i.default)({
                isTryItOut: A,
                guildId: f
            }), y = g && (m || !P && !E), L = C && void 0 !== O && void 0 !== F && F === (null == r ? void 0 : r.id), R = null != f && null === O, D = L ? R ? null == r ? void 0 : r.avatarDecoration : null != O ? O : _ : null != _ ? _ : null == r ? void 0 : r.avatarDecoration, b = a.useMemo(() => (0, c.getAvatarDecorationURL)({
                avatarDecoration: void 0 !== T ? T : D,
                canAnimate: y,
                size: v
            }), [D, y, v, T]), h = a.useCallback(() => I(!0), []), M = a.useCallback(() => I(!1), []);
            return {
                avatarPlaceholderSrc: d,
                avatarDecorationSrc: b,
                isAvatarDecorationAnimating: y,
                eventHandlers: {
                    onMouseEnter: h,
                    onMouseLeave: M
                }
            }
        }
}