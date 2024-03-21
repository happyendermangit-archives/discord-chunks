function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    }), n("222007");
    var i = n("42203"),
        s = n("525065"),
        r = n("18494"),
        a = n("455079"),
        o = n("8001"),
        l = n("625483"),
        u = n("185496"),
        d = n("689257"),
        c = n("753848"),
        _ = n("818697"),
        f = n("875081");
    let E = null,
        h = new l.ExtendedMemoryLru(750, 500),
        g = new u.Lru(15),
        m = !1;
    class p extends a.default {
        initialize() {
            this.waitFor(i.default), this.waitFor(r.default), this.waitFor(s.default), this.syncWith([o.default], () => !0), this.syncWith([r.default], S)
        }
        loadCache() {
            let e = this.readSnapshot(p.LATEST_SNAPSHOT_VERSION);
            null != e && (m = !0, p.mergeSnapshot(e))
        }
        canEvictOrphans() {
            return m
        }
        saveLimit(e) {
            let t = i.default.getBasicChannel(e);
            return null != t && (0, c.isPrivateChannel)(t) || null != t && h.has(e) ? 25 : 1
        }
        getSaveableChannels() {
            let e = i.default.getChannelIds(null),
                t = e.map(e => ({
                    guildId: null,
                    channelId: e
                }));
            return o.default.isLowDisk ? null != E ? [...t, E] : t : [...t, ...h.values()]
        }
        takeSnapshot() {
            return {
                version: p.LATEST_SNAPSHOT_VERSION,
                data: {
                    channels: [...h.allValues()].filter(e => !e.fallback),
                    penalized: [...g.keys()],
                    lastChannel: E
                }
            }
        }
        static mergeSnapshot(e) {
            let t = h,
                n = g;
            for (let n of (h = new l.ExtendedMemoryLru(h.primaryCapacity, h.extendedCapacity), g = new u.Lru(g.capacity), E = null != E ? E : e.lastChannel, [e.channels, t.values()]))
                for (let e of n) !e.fallback && h.put(e.channelId, e);
            for (let t of [e.penalized, n.keys()])
                for (let e of t) g.put(e, null)
        }
        static recordChannel(e) {
            let t = i.default.getBasicChannel(e);
            if (null != t && (0, _.isReadableChannel)(t)) {
                var n;
                let i = {
                    guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                    channelId: e,
                    channelType: t.type
                };
                if (E = i, h.put(e, i), (0, d.isLimitedChannel)(t)) {
                    let t = g.put(e, null);
                    null != t && h.delete(e)
                }
            }
        }
        static deleteChannel(e) {
            h.delete(e)
        }
        static deleteGuild(e) {
            for (let t of h.allValues()) t.guildId === e && h.delete(t.channelId)
        }
        static dropUnreachableChannels() {
            for (let e of h.keys()) {
                let t = i.default.getBasicChannel(e);
                !(0, _.isReadableChannel)(t) && p.deleteChannel(e)
            }
        }
        static deleteUnreadableGuildChannels(e) {
            for (let t of h.values()) e === t.guildId && !(0, _.isReadableChannelId)(t.channelId) && p.deleteChannel(t.channelId)
        }
        static replaceLru(e) {
            h = e
        }
        constructor() {
            super({
                CACHE_LOADED_LAZY_NO_CACHE: O,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: I,
                CONNECTION_OPEN_SUPPLEMENTAL: v,
                GUILD_DELETE: N,
                LOGIN_SUCCESS: R,
                THREAD_DELETE: y,
                THREAD_UPDATE: C
            })
        }
    }

    function S() {
        let e = r.default.getChannelId();
        null != e && p.recordChannel(e)
    }

    function v() {
        p.dropUnreachableChannels(), p.replaceLru((0, f.withFallbacks)(h, 1250))
    }

    function T(e) {
        let t = e.id,
            n = (0, _.isReadableChannel)(e),
            i = r.default.getChannelId();
        n && t === i && p.recordChannel(t), !n && p.deleteChannel(t)
    }

    function I(e) {
        for (let t of e.channels) T(t)
    }

    function A(e) {
        p.deleteChannel(e.channel.id)
    }

    function C(e) {
        T(e.channel)
    }

    function y(e) {
        p.deleteChannel(e.channel.id)
    }

    function N(e) {
        return !e.guild.unavailable && (p.deleteGuild(e.guild.id), !0)
    }

    function R(e) {
        h.clear(), g.clear(), m = !1
    }

    function O(e) {
        m = !0
    }
    p.displayName = "SaveableChannelsStore", p.LATEST_SNAPSHOT_VERSION = 1;
    var D = new p
}