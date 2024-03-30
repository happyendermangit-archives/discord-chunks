function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StickerSendability: function() {
            return o
        },
        getStickerSendability: function() {
            return l
        },
        isSendableSticker: function() {
            return c
        }
    });
    var r, o, i = n("359017"),
        a = n("830721"),
        u = n("443699"),
        s = n("281767");
    (r = o || (o = {}))[r.SENDABLE = 0] = "SENDABLE", r[r.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", r[r.NONSENDABLE = 2] = "NONSENDABLE", r[r.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
    var l = function(e, t, n) {
            if (null == t) return 2;
            var r = a.default.canUseCustomStickersEverywhere(t);
            if ((0, u.isStandardSticker)(e)) return 0;
            if ((0, u.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || i.can({
                permission: s.Permissions.USE_EXTERNAL_STICKERS,
                user: t,
                context: n
            }) ? r ? 0 : 1 : 2 : 3;
            return 2
        },
        c = function(e, t, n) {
            return 0 === l(e, t, n)
        }
}