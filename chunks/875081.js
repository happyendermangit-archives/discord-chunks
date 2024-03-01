function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withFallbacks: function() {
            return d
        }
    }), n("222007");
    var a = n("42203"),
        l = n("677099"),
        s = n("625483"),
        i = n("689257"),
        r = n("818697"),
        u = n("49111");

    function d(e, t) {
        if (e.totalLength >= t) return e;
        let n = new s.ExtendedMemoryLru(e.primaryCapacity, e.extendedCapacity),
            d = t - e.totalLength;
        for (let t of l.default.getGuildFolders())
            for (let l of t.guildIds)
                for (let t of Object.values(a.default.getMutableBasicGuildChannelsForGuild(l)))
                    if (function(e) {
                            return e.type === u.ChannelTypes.DM || e.type === u.ChannelTypes.GROUP_DM || e.type === u.ChannelTypes.GUILD_TEXT
                        }(t) && (0, r.isReadableChannel)(t) && !(0, i.isLimitedChannel)(t) && function(e, t, n) {
                            !n.hasExtended(t.id) && n.put(t.id, {
                                guildId: e,
                                channelId: t.id,
                                channelType: t.type,
                                fallback: !0
                            })
                        }(l, t, n), n.totalLength >= d) return o(n, e);
        return o(n, e)
    }

    function o(e, t) {
        for (let [n, a] of t.allEntries()) e.put(n, a);
        return e
    }
}