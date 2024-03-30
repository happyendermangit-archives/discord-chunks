function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldRedactExplicitContent: function() {
            return c
        },
        useShouldRedactExplicitContentForForum: function() {
            return f
        }
    });
    var r = n("37295"),
        o = n("935741"),
        i = n("776982"),
        a = n("208454"),
        u = n("688221"),
        s = n("411372"),
        l = n("638379"),
        c = function(e, t) {
            var n = (0, u.useIsEligibleForExplicitMediaRedaction)(),
                c = (0, l.useExplicitContentSettingOrDefault)(),
                f = c.explicitContentGuilds,
                d = c.explicitContentFriendDm,
                _ = c.explicitContentNonFriendDm,
                E = (0, r.useStateFromStores)([i.default], function() {
                    return i.default.getFriendIDs().includes(t)
                }),
                p = (0, r.useStateFromStores)([a.default], function() {
                    return a.default.getCurrentUser()
                }),
                m = (0, r.useStateFromStores)([o.default], function() {
                    var t = o.default.getChannel(e);
                    return null != t && t.isPrivate()
                });
            return !!n && null != p && p.id !== t && (m && E ? (0, s.getShouldObscureForSetting)(d) : m ? (0, s.getShouldObscureForSetting)(_) : (0, s.getShouldObscureForSetting)(f))
        },
        f = function() {
            var e = (0, u.useIsEligibleForExplicitMediaRedaction)(),
                t = (0, l.useExplicitContentSettingOrDefault)().explicitContentGuilds,
                n = (0, r.useStateFromStores)([a.default], function() {
                    return a.default.getCurrentUser()
                });
            return !!e && null != n && (0, s.getShouldObscureForSetting)(t)
        }
}