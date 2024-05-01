function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StickerSendability: function() {
            return r
        },
        getStickerSendability: function() {
            return u
        },
        isSendableSticker: function() {
            return d
        }
    });
    var i, r, s = n("700785"),
        a = n("74538"),
        o = n("378233"),
        l = n("981631");
    (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
    let u = (e, t, n) => {
            if (null == t) return 2;
            let i = a.default.canUseCustomStickersEverywhere(t);
            if ((0, o.isStandardSticker)(e)) return 0;
            if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || s.can({
                permission: l.Permissions.USE_EXTERNAL_STICKERS,
                user: t,
                context: n
            }) ? i ? 0 : 1 : 2 : 3;
            return 2
        },
        d = (e, t, n) => 0 === u(e, t, n)
}