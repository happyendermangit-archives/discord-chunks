function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("316693"),
        s = n("305961"),
        r = n("49111");
    let a = [r.ChannelTypes.GUILD_TEXT, r.ChannelTypes.GUILD_VOICE, r.ChannelTypes.GUILD_ANNOUNCEMENT, r.ChannelTypes.GUILD_FORUM, r.ChannelTypes.PUBLIC_THREAD, r.ChannelTypes.PRIVATE_THREAD],
        o = i.default.combine(r.Permissions.VIEW_CHANNEL, r.Permissions.SEND_MESSAGES);

    function l(e) {
        if (null == e || !a.includes(e.type)) return [];
        let t = s.default.getGuild(e.guild_id);
        return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
            var n, s;
            return 0 === e.type && (null === (s = t.roles[e.id]) || void 0 === s ? void 0 : null === (n = s.tags) || void 0 === n ? void 0 : n.guild_connections) === null && !i.default.hasAny(e.deny, o)
        }).map(e => t.roles[e.id]).filter(e => null != e)
    }
}