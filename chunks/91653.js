function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return f
        }
    });
    var a = r("884691"),
        l = r("65597"),
        n = r("170313"),
        i = r("424562"),
        u = r("906932"),
        o = r("26989"),
        s = r("790618"),
        c = r("697218"),
        d = r("783142"),
        f = e => {
            let {
                isTryItOut: t,
                analyticsLocations: r,
                guildId: f
            } = e, v = (0, l.default)([c.default], () => c.default.getCurrentUser()), C = (0, l.default)([o.default], () => null != f && null != v ? o.default.getMember(f, v.id) : null), E = null != C ? C.avatarDecoration : null == v ? void 0 : v.avatarDecoration, A = (0, n.default)(r), {
                pendingAvatar: T,
                pendingAvatarDecoration: g,
                pendingErrors: m
            } = (0, l.useStateFromStoresObject)([s.default, i.default], () => ({
                pendingAvatar: t ? s.default.getTryItOutAvatar() : null != f ? i.default.getPendingAvatar() : s.default.getPendingAvatar(),
                pendingAvatarDecoration: t ? s.default.getTryItOutAvatarDecoration() : null != f ? i.default.getPendingAvatarDecoration() : s.default.getPendingAvatarDecoration(),
                pendingErrors: null != f ? i.default.getErrors().avatarDecoration : s.default.getErrors().avatarDecoration
            })), I = (0, a.useCallback)(e => (0, u.setNewPendingAvatar)(e, null == v ? void 0 : v.avatar), [null == v ? void 0 : v.avatar]), P = (0, a.useCallback)(e => {
                (0, u.setNewPendingAvatarDecoration)(f, e), null != e && A(e)
            }, [A, f]);
            return {
                pendingAvatar: T,
                pendingAvatarDecoration: g,
                setPendingAvatar: t ? d.setTryItOutAvatar : I,
                setPendingAvatarDecoration: t ? d.setTryItOutAvatarDecoration : P,
                savedAvatarDecoration: E,
                pendingErrors: m
            }
        }
}