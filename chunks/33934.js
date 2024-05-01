function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("339085"),
        r = n("131704"),
        s = n("176354"),
        a = n("700785"),
        o = n("981631");

    function l(e, t, n) {
        if (e.type !== o.ActivityTypes.CUSTOM_STATUS || null == e.emoji) return !1;
        let l = e.emoji;
        if (null == l.id || null == n || !(0, r.isGuildTextChannelType)(n.type)) return !0;
        let u = i.default.getUsableCustomEmojiById(l.id),
            d = s.default.isInternalEmojiForGuildId(u, n.getGuildId()),
            _ = a.can({
                permission: o.Permissions.USE_EXTERNAL_EMOJIS,
                user: t,
                context: n
            });
        return !d || _
    }
}