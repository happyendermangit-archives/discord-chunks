function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShouldRedactExplicitContent: function() {
            return d
        },
        useShouldRedactExplicitContentForForum: function() {
            return c
        }
    });
    var l = n("65597"),
        i = n("42203"),
        a = n("27618"),
        s = n("697218"),
        r = n("457971"),
        o = n("447435"),
        u = n("10130");
    let d = (e, t) => {
            let n = (0, r.useIsEligibleForExplicitMediaRedaction)(),
                {
                    explicitContentGuilds: d,
                    explicitContentFriendDm: c,
                    explicitContentNonFriendDm: f
                } = (0, u.useExplicitContentSettingOrDefault)(),
                m = (0, l.default)([a.default], () => a.default.getFriendIDs().includes(t)),
                p = (0, l.default)([s.default], () => s.default.getCurrentUser()),
                h = (0, l.default)([i.default], () => {
                    let t = i.default.getChannel(e);
                    return null != t && t.isPrivate()
                });
            return !!n && null != p && p.id !== t && (h && m ? (0, o.getShouldObscureForSetting)(c) : h ? (0, o.getShouldObscureForSetting)(f) : (0, o.getShouldObscureForSetting)(d))
        },
        c = () => {
            let e = (0, r.useIsEligibleForExplicitMediaRedaction)(),
                {
                    explicitContentGuilds: t
                } = (0, u.useExplicitContentSettingOrDefault)(),
                n = (0, l.default)([s.default], () => s.default.getCurrentUser());
            return !!e && null != n && (0, o.getShouldObscureForSetting)(t)
        }
}