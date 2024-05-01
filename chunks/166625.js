function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079"),
        r = n("399606"),
        a = n("311395"),
        s = n("778825"),
        o = n("150039"),
        l = n("271383"),
        u = n("25990"),
        d = n("594174"),
        _ = n("350327");
    t.default = e => {
        let {
            isTryItOut: t,
            analyticsLocations: n,
            guildId: c
        } = e, E = (0, r.useStateFromStores)([d.default], () => d.default.getCurrentUser()), I = (0, r.useStateFromStores)([l.default], () => null != c && null != E ? l.default.getMember(c, E.id) : null), T = null != I ? I.avatarDecoration : null == E ? void 0 : E.avatarDecoration, f = (0, a.default)(n), {
            pendingAvatar: S,
            pendingAvatarDecoration: h,
            pendingErrors: A
        } = (0, r.useStateFromStoresObject)([u.default, s.default], () => ({
            pendingAvatar: t ? u.default.getTryItOutAvatar() : null != c ? s.default.getPendingAvatar() : u.default.getPendingAvatar(),
            pendingAvatarDecoration: t ? u.default.getTryItOutAvatarDecoration() : null != c ? s.default.getPendingAvatarDecoration() : u.default.getPendingAvatarDecoration(),
            pendingErrors: null != c ? s.default.getErrors().avatarDecoration : u.default.getErrors().avatarDecoration
        })), m = (0, i.useCallback)(e => (0, o.setNewPendingAvatar)(e, null == E ? void 0 : E.avatar), [null == E ? void 0 : E.avatar]), N = (0, i.useCallback)(e => {
            (0, o.setNewPendingAvatarDecoration)(c, e), null != e && f(e)
        }, [f, c]);
        return {
            pendingAvatar: S,
            pendingAvatarDecoration: h,
            setPendingAvatar: t ? _.setTryItOutAvatar : m,
            setPendingAvatarDecoration: t ? _.setTryItOutAvatarDecoration : N,
            savedAvatarDecoration: T,
            pendingErrors: A
        }
    }
}