function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var a = n("42203"),
        l = n("525065"),
        s = n("18494"),
        i = n("455079"),
        r = n("8001"),
        u = n("625483"),
        d = n("185496"),
        o = n("689257"),
        c = n("753848"),
        E = n("818697"),
        _ = n("875081");
    let f = null,
        g = new u.ExtendedMemoryLru(750, 500),
        S = new d.Lru(15),
        h = !1;
    class m extends i.default {
        initialize() {
            this.waitFor(a.default), this.waitFor(s.default), this.waitFor(l.default), this.syncWith([r.default], () => !0), this.syncWith([s.default], T)
        }
        loadCache() {
            let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
            null != e && (h = !0, m.mergeSnapshot(e))
        }
        canEvictOrphans() {
            return h
        }
        saveLimit(e) {
            let t = a.default.getBasicChannel(e);
            return null != t && (0, c.isPrivateChannel)(t) || null != t && g.has(e) ? 25 : 1
        }
        getSaveableChannels() {
            let e = a.default.getChannelIds(null),
                t = e.map(e => ({
                    guildId: null,
                    channelId: e
                }));
            return r.default.isLowDisk ? null != f ? [...t, f] : t : [...t, ...g.values()]
        }
        takeSnapshot() {
            return {
                version: m.LATEST_SNAPSHOT_VERSION,
                data: {
                    channels: [...g.allValues()].filter(e => !e.fallback),
                    penalized: [...S.keys()],
                    lastChannel: f
                }
            }
        }
        static mergeSnapshot(e) {
            let t = g,
                n = S;
            for (let n of (g = new u.ExtendedMemoryLru(g.primaryCapacity, g.extendedCapacity), S = new d.Lru(S.capacity), f = null != f ? f : e.lastChannel, [e.channels, t.values()]))
                for (let e of n) !e.fallback && g.put(e.channelId, e);
            for (let t of [e.penalized, n.keys()])
                for (let e of t) S.put(e, null)
        }
        static recordChannel(e) {
            let t = a.default.getBasicChannel(e);
            if (null != t && (0, E.isReadableChannel)(t)) {
                var n;
                let a = {
                    guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                    channelId: e,
                    channelType: t.type
                };
                if (f = a, g.put(e, a), (0, o.isLimitedChannel)(t)) {
                    let t = S.put(e, null);
                    null != t && g.delete(e)
                }
            }
        }
        static deleteChannel(e) {
            g.delete(e)
        }
        static deleteGuild(e) {
            for (let t of g.allValues()) t.guildId === e && g.delete(t.channelId)
        }
        static dropUnreachableChannels() {
            for (let e of g.keys()) {
                let t = a.default.getBasicChannel(e);
                !(0, E.isReadableChannel)(t) && m.deleteChannel(e)
            }
        }
        static deleteUnreadableGuildChannels(e) {
            for (let t of g.values()) e === t.guildId && !(0, E.isReadableChannelId)(t.channelId) && m.deleteChannel(t.channelId)
        }
        static replaceLru(e) {
            g = e
        }
        constructor() {
            super({
                CACHE_LOADED_LAZY_NO_CACHE: v,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                CHANNEL_DELETE: I,
                CHANNEL_UPDATES: p,
                CONNECTION_OPEN_SUPPLEMENTAL: M,
                GUILD_DELETE: D,
                LOGIN_SUCCESS: O,
                THREAD_DELETE: L,
                THREAD_UPDATE: C
            })
        }
    }

    function T() {
        let e = s.default.getChannelId();
        null != e && m.recordChannel(e)
    }

    function M() {
        m.dropUnreachableChannels(), m.replaceLru((0, _.withFallbacks)(g, 1250))
    }

    function A(e) {
        let t = e.id,
            n = (0, E.isReadableChannel)(e),
            a = s.default.getChannelId();
        n && t === a && m.recordChannel(t), !n && m.deleteChannel(t)
    }

    function p(e) {
        for (let t of e.channels) A(t)
    }

    function I(e) {
        m.deleteChannel(e.channel.id)
    }

    function C(e) {
        A(e.channel)
    }

    function L(e) {
        m.deleteChannel(e.channel.id)
    }

    function D(e) {
        return !e.guild.unavailable && (m.deleteGuild(e.guild.id), !0)
    }

    function O(e) {
        g.clear(), S.clear(), h = !1
    }

    function v(e) {
        h = !0
    }
    m.displayName = "SaveableChannelsStore", m.LATEST_SNAPSHOT_VERSION = 1;
    var N = new m
}