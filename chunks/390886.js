function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("385976"),
        i = n("233069"),
        a = n("402671"),
        s = n("991170"),
        r = n("49111");

    function o(e, t, n) {
        if (e.type !== r.ActivityTypes.CUSTOM_STATUS || null == e.emoji) return !1;
        let o = e.emoji;
        if (null == o.id || null == n || !(0, i.isGuildTextChannelType)(n.type)) return !0;
        let u = l.default.getUsableCustomEmojiById(o.id),
            d = a.default.isInternalEmojiForGuildId(u, n.getGuildId()),
            c = s.default.can({
                permission: r.Permissions.USE_EXTERNAL_EMOJIS,
                user: t,
                context: n
            });
        return !d || c
    }
}