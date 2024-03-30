function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("37295"),
        i = n("1477"),
        a = n("332022"),
        u = n("118044"),
        s = n("957808"),
        l = n("937129"),
        c = n("208454"),
        f = n("187192");
    t.default = function(e) {
        var t = e.isTryItOut,
            n = e.analyticsLocations,
            d = e.guildId,
            _ = (0, o.useStateFromStores)([c.default], function() {
                return c.default.getCurrentUser()
            }),
            E = (0, o.useStateFromStores)([s.default], function() {
                return null != d && null != _ ? s.default.getMember(d, _.id) : null
            }),
            p = null != E ? E.avatarDecoration : null == _ ? void 0 : _.avatarDecoration,
            m = (0, i.default)(n),
            y = (0, o.useStateFromStoresObject)([l.default, a.default], function() {
                return {
                    pendingAvatar: t ? l.default.getTryItOutAvatar() : null != d ? a.default.getPendingAvatar() : l.default.getPendingAvatar(),
                    pendingAvatarDecoration: t ? l.default.getTryItOutAvatarDecoration() : null != d ? a.default.getPendingAvatarDecoration() : l.default.getPendingAvatarDecoration(),
                    pendingErrors: null != d ? a.default.getErrors().avatarDecoration : l.default.getErrors().avatarDecoration
                }
            }),
            I = y.pendingAvatar,
            h = y.pendingAvatarDecoration,
            O = y.pendingErrors,
            T = (0, r.useCallback)(function(e) {
                return (0, u.setNewPendingAvatar)(e, null == _ ? void 0 : _.avatar)
            }, [null == _ ? void 0 : _.avatar]),
            S = (0, r.useCallback)(function(e) {
                (0, u.setNewPendingAvatarDecoration)(d, e), null != e && m(e)
            }, [m, d]);
        return {
            pendingAvatar: I,
            pendingAvatarDecoration: h,
            setPendingAvatar: t ? f.setTryItOutAvatar : T,
            setPendingAvatarDecoration: t ? f.setTryItOutAvatarDecoration : S,
            savedAvatarDecoration: p,
            pendingErrors: O
        }
    }
}