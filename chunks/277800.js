function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("149765"),
        r = n("430824"),
        s = n("981631");
    let a = [s.ChannelTypes.GUILD_TEXT, s.ChannelTypes.GUILD_VOICE, s.ChannelTypes.GUILD_ANNOUNCEMENT, s.ChannelTypes.GUILD_FORUM, s.ChannelTypes.PUBLIC_THREAD, s.ChannelTypes.PRIVATE_THREAD],
        o = i.combine(s.Permissions.VIEW_CHANNEL, s.Permissions.SEND_MESSAGES);

    function l(e) {
        if (null == e || !a.includes(e.type)) return [];
        let t = r.default.getGuild(e.guild_id);
        return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
            var n, s;
            return 0 === e.type && (null === (s = r.default.getRoles(t.id)[e.id]) || void 0 === s ? void 0 : null === (n = s.tags) || void 0 === n ? void 0 : n.guild_connections) === null && !i.hasAny(e.deny, o)
        }).map(e => r.default.getRoles(t.id)[e.id]).filter(e => null != e)
    }
}