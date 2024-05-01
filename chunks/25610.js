function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldRedactExplicitContent: function() {
            return d
        },
        useShouldRedactExplicitContentForForum: function() {
            return _
        }
    });
    var i = n("399606"),
        r = n("592125"),
        s = n("699516"),
        a = n("594174"),
        o = n("651530"),
        l = n("163268"),
        u = n("294602");
    let d = (e, t) => {
            let n = (0, o.useIsEligibleForExplicitMediaRedaction)(),
                {
                    explicitContentGuilds: d,
                    explicitContentFriendDm: _,
                    explicitContentNonFriendDm: c
                } = (0, u.useExplicitContentSettingOrDefault)(),
                E = (0, i.useStateFromStores)([s.default], () => s.default.getFriendIDs().includes(t)),
                I = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
                T = (0, i.useStateFromStores)([r.default], () => {
                    let t = r.default.getChannel(e);
                    return null != t && t.isPrivate()
                });
            return !!n && null != I && I.id !== t && (T && E ? (0, l.getShouldObscureForSetting)(_) : T ? (0, l.getShouldObscureForSetting)(c) : (0, l.getShouldObscureForSetting)(d))
        },
        _ = () => {
            let e = (0, o.useIsEligibleForExplicitMediaRedaction)(),
                {
                    explicitContentGuilds: t
                } = (0, u.useExplicitContentSettingOrDefault)(),
                n = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser());
            return !!e && null != n && (0, l.getShouldObscureForSetting)(t)
        }
}