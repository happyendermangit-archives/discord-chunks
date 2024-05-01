function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withFallbacks: function() {
            return u
        }
    }), n("47120");
    var i = n("592125"),
        r = n("771845"),
        a = n("553245"),
        s = n("814074"),
        o = n("989263"),
        l = n("981631");

    function u(e, t) {
        if (e.totalLength >= t) return e;
        let n = new a.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
            u = t - e.totalLength;
        for (let t of r.default.getGuildFolders())
            for (let r of t.guildIds)
                for (let t of Object.values(i.default.getMutableBasicGuildChannelsForGuild(r)))
                    if (function(e) {
                            return e.type === l.ChannelTypes.DM || e.type === l.ChannelTypes.GROUP_DM || e.type === l.ChannelTypes.GUILD_TEXT
                        }(t) && (0, o.isReadableChannel)(t) && !(0, s.isLimitedChannel)(t) && function(e, t, n) {
                            !n.hasExtended(t.id) && n.put(t.id, {
                                guildId: e,
                                channelId: t.id,
                                channelType: t.type,
                                fallback: !0
                            })
                        }(r, t, n), n.totalLength >= u) return d(n, e);
        return d(n, e)
    }

    function d(e, t) {
        for (let [n, i] of t.allEntries()) e.put(n, i);
        return e
    }
}