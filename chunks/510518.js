function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("300983"),
        o = n("569492"),
        i = n("739226"),
        a = n("359017"),
        u = n("281767");

    function s(e, t, n) {
        if (e.type !== u.ActivityTypes.CUSTOM_STATUS || null == e.emoji) return !1;
        var s = e.emoji;
        if (null == s.id || null == n || !(0, o.isGuildTextChannelType)(n.type)) return !0;
        var l = r.default.getUsableCustomEmojiById(s.id),
            c = i.default.isInternalEmojiForGuildId(l, n.getGuildId()),
            f = a.can({
                permission: u.Permissions.USE_EXTERNAL_EMOJIS,
                user: t,
                context: n
            });
        return !c || f
    }
}