function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("592125"),
        r = n("650774"),
        a = n("944486"),
        s = n("412788"),
        o = n("368321"),
        l = n("553245"),
        u = n("143806"),
        d = n("814074"),
        _ = n("582142"),
        c = n("989263"),
        E = n("872261");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let T = null,
        f = new l.ExtendedMemoryLru(750, 500),
        S = new u.Lru(15),
        h = !1;
    class A extends s.default {
        initialize() {
            this.waitFor(i.default), this.waitFor(a.default), this.waitFor(r.default), this.syncWith([o.default], () => !0), this.syncWith([a.default], m)
        }
        loadCache() {
            let e = this.readSnapshot(A.LATEST_SNAPSHOT_VERSION);
            null != e && (h = !0, A.mergeSnapshot(e))
        }
        canEvictOrphans() {
            return h
        }
        saveLimit(e) {
            let t = i.default.getBasicChannel(e);
            return null != t && (0, _.isPrivateChannel)(t) || null != t && f.has(e) ? 25 : 1
        }
        getSaveableChannels() {
            let e = i.default.getChannelIds(null).map(e => ({
                guildId: null,
                channelId: e
            }));
            return o.default.isLowDisk ? null != T ? [...e, T] : e : [...e, ...f.values()]
        }
        takeSnapshot() {
            return {
                version: A.LATEST_SNAPSHOT_VERSION,
                data: {
                    channels: [...f.allValues()].filter(e => !e.fallback),
                    penalized: [...S.keys()],
                    lastChannel: T
                }
            }
        }
        static mergeSnapshot(e) {
            let t = f,
                n = S;
            for (let n of (f = new l.ExtendedMemoryLru(f.primaryCapacity, f.extendedCapacity), S = new u.Lru(S.capacity), T = null != T ? T : e.lastChannel, [e.channels, t.values()]))
                for (let e of n) !e.fallback && f.put(e.channelId, e);
            for (let t of [e.penalized, n.keys()])
                for (let e of t) S.put(e, null)
        }
        static recordChannel(e) {
            let t = i.default.getBasicChannel(e);
            if (null != t && (0, c.isReadableChannel)(t)) {
                var n;
                let i = {
                    guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                    channelId: e,
                    channelType: t.type
                };
                T = i, f.put(e, i), (0, d.isLimitedChannel)(t) && null != S.put(e, null) && f.delete(e)
            }
        }
        static deleteChannel(e) {
            f.delete(e)
        }
        static deleteGuild(e) {
            for (let t of f.allValues()) t.guildId === e && f.delete(t.channelId)
        }
        static dropUnreachableChannels() {
            for (let e of f.keys()) {
                let t = i.default.getBasicChannel(e);
                !(0, c.isReadableChannel)(t) && A.deleteChannel(e)
            }
        }
        static deleteUnreadableGuildChannels(e) {
            for (let t of f.values()) e === t.guildId && !(0, c.isReadableChannelId)(t.channelId) && A.deleteChannel(t.channelId)
        }
        static replaceLru(e) {
            f = e
        }
        constructor() {
            super({
                CACHE_LOADED_LAZY_NO_CACHE: D,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                CHANNEL_DELETE: R,
                CHANNEL_UPDATES: O,
                CONNECTION_OPEN_SUPPLEMENTAL: N,
                GUILD_DELETE: L,
                LOGIN_SUCCESS: v,
                THREAD_DELETE: g,
                THREAD_UPDATE: C
            })
        }
    }

    function m() {
        let e = a.default.getChannelId();
        null != e && A.recordChannel(e)
    }

    function N() {
        A.dropUnreachableChannels(), A.replaceLru((0, E.withFallbacks)(f, 1250))
    }

    function p(e) {
        let t = e.id,
            n = (0, c.isReadableChannel)(e),
            i = a.default.getChannelId();
        n && t === i && A.recordChannel(t), !n && A.deleteChannel(t)
    }

    function O(e) {
        for (let t of e.channels) p(t)
    }

    function R(e) {
        A.deleteChannel(e.channel.id)
    }

    function C(e) {
        p(e.channel)
    }

    function g(e) {
        A.deleteChannel(e.channel.id)
    }

    function L(e) {
        return !e.guild.unavailable && (A.deleteGuild(e.guild.id), !0)
    }

    function v(e) {
        f.clear(), S.clear(), h = !1
    }

    function D(e) {
        h = !0
    }
    I(A, "displayName", "SaveableChannelsStore"), I(A, "LATEST_SNAPSHOT_VERSION", 1), t.default = new A
}