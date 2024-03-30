function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("22287"),
        o = n("306912"),
        i = n("281767"),
        a = [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GUILD_VOICE, i.ChannelTypes.GUILD_ANNOUNCEMENT, i.ChannelTypes.GUILD_FORUM, i.ChannelTypes.PUBLIC_THREAD, i.ChannelTypes.PRIVATE_THREAD],
        u = r.combine(i.Permissions.VIEW_CHANNEL, i.Permissions.SEND_MESSAGES);

    function s(e) {
        if (null == e || !a.includes(e.type)) return [];
        var t = o.default.getGuild(e.guild_id);
        return null == t ? [] : Object.values(e.permissionOverwrites).filter(function(e) {
            var n, i;
            return 0 === e.type && (null === (i = o.default.getRoles(t.id)[e.id]) || void 0 === i ? void 0 : null === (n = i.tags) || void 0 === n ? void 0 : n.guild_connections) === null && !r.hasAny(e.deny, u)
        }).map(function(e) {
            return o.default.getRoles(t.id)[e.id]
        }).filter(function(e) {
            return null != e
        })
    }
}