function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("149765"),
        r = n("430824"),
        a = n("981631");
    let s = [a.ChannelTypes.GUILD_TEXT, a.ChannelTypes.GUILD_VOICE, a.ChannelTypes.GUILD_ANNOUNCEMENT, a.ChannelTypes.GUILD_FORUM, a.ChannelTypes.PUBLIC_THREAD, a.ChannelTypes.PRIVATE_THREAD],
        o = i.combine(a.Permissions.VIEW_CHANNEL, a.Permissions.SEND_MESSAGES);

    function l(e) {
        if (null == e || !s.includes(e.type)) return [];
        let t = r.default.getGuild(e.guild_id);
        return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
            var n, a;
            return 0 === e.type && (null === (a = r.default.getRoles(t.id)[e.id]) || void 0 === a ? void 0 : null === (n = a.tags) || void 0 === n ? void 0 : n.guild_connections) === null && !i.hasAny(e.deny, o)
        }).map(e => r.default.getRoles(t.id)[e.id]).filter(e => null != e)
    }
}