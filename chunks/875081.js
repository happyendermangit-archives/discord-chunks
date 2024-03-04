function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withFallbacks: function() {
            return u
        }
    }), n("222007");
    var i = n("42203"),
        s = n("677099"),
        r = n("625483"),
        a = n("689257"),
        o = n("818697"),
        l = n("49111");

    function u(e, t) {
        if (e.totalLength >= t) return e;
        let n = new r.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
            u = t - e.totalLength;
        for (let t of s.default.getGuildFolders())
            for (let s of t.guildIds)
                for (let t of Object.values(i.default.getMutableBasicGuildChannelsForGuild(s)))
                    if (function(e) {
                            return e.type === l.ChannelTypes.DM || e.type === l.ChannelTypes.GROUP_DM || e.type === l.ChannelTypes.GUILD_TEXT
                        }(t) && (0, o.isReadableChannel)(t) && !(0, a.isLimitedChannel)(t) && function(e, t, n) {
                            !n.hasExtended(t.id) && n.put(t.id, {
                                guildId: e,
                                channelId: t.id,
                                channelType: t.type,
                                fallback: !0
                            })
                        }(s, t, n), n.totalLength >= u) return d(n, e);
        return d(n, e)
    }

    function d(e, t) {
        for (let [n, i] of t.allEntries()) e.put(n, i);
        return e
    }
}