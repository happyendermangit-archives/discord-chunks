function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelLoader: function() {
            return V
        },
        default: function() {
            return el
        }
    }), n("222007"), n("581081"), n("70102");
    var i = n("917351"),
        r = n.n(i),
        s = n("102053"),
        a = n("446674"),
        o = n("913144"),
        l = n("802493"),
        u = n("595525"),
        c = n("860255"),
        d = n("846527"),
        f = n("1544"),
        E = n("605250"),
        p = n("379881"),
        h = n("560208"),
        _ = n("233069"),
        S = n("449008"),
        m = n("299039"),
        T = n("271938"),
        g = n("305961"),
        I = n("697218"),
        C = n("49111");
    let v = new E.default("ChannelStore"),
        A = {},
        R = {},
        N = {},
        O = {},
        D = null,
        y = {},
        P = {},
        L = 0,
        b = {},
        M = {},
        U = new Set,
        G = {},
        w = 0,
        k = {},
        x = 0,
        F = 0;
    class V {
        static loadAllMissingChannels() {
            let e = g.default.getGuildIds().filter(e => !U.has(e));
            return this.loadGuildIds(e)
        }
        static loadGuildFromChannelId(e) {
            var t;
            return null == e ? null : V.loadGuildIds([null === (t = j(e)) || void 0 === t ? void 0 : t.guild_id])
        }
        static loadGuildIds(e) {
            let t = e.filter(S.isNotNullish);
            if (0 === t.length) return null;
            let n = l.default.database();
            if (null == n) return null;
            let i = t.some(e => !U.has(e));
            if (!i) return null;
            let r = w;
            return (0, u.tryLoadOrResetCacheGatewayAsync)("loadChannels", async () => {
                let e = t.map(e => {
                        if (U.has(e)) return null;
                        let t = G[e];
                        if (null != t) return v.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
                        let i = c.default.getAsync(n, e).then(t => (v.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
                            guildId: e,
                            channels: t
                        }));
                        return G[e] = i, {
                            guildId: e,
                            promise: i
                        }
                    }).filter(S.isNotNullish),
                    i = e.map(e => e.promise);
                try {
                    let t = await Promise.all(i);
                    if (w !== r) return v.fileOnly("lastResetTime has changed, skipping loads for " + e.map(e => e.guildId)), null;
                    let n = t.filter(e => !U.has(e.guildId));
                    await o.default.dispatch({
                        type: "LOAD_CHANNELS",
                        channels: n
                    })
                } catch (t) {
                    for (let n of (v.error("Failed to load channels from disk for " + e.map(e => e.guildId), t), e)) delete G[n.guildId];
                    throw t
                }
                return null
            })
        }
    }

    function B(e, t, n) {
        if (null == e || "null" === e || U.has(e) || 0 === t && d.default.hasGuild(e)) return;
        let i = l.default.database();
        if (null == i) return;
        v.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
        let r = (0, u.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), () => c.default.getSync(i, e));
        if (null == r) {
            U.add(e), d.default.restored(e), v.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
            return
        }
        let [a, o] = r;
        for (let n of ((0, f.default)(a), 0 !== t && (F += 1), U.add(e), d.default.restored(e), s.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), o), a)) !Object.hasOwn(R, n.id) && X((0, _.castChannelRecord)(n));
        v.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(F, ")"))
    }

    function H(e, t, n) {
        if (!Object.hasOwn(R, e) && !Object.hasOwn(O, e) && !Object.hasOwn(y, e) && !Object.hasOwn(M, e) && 1 === t) {
            let i = d.default.getBasicChannel(e);
            (null == i ? void 0 : i.guild_id) != null && B(i.guild_id, t, n)
        }
    }

    function Y(e) {
        if (v.fileOnly("Deleting guild channels for ".concat(e)), null != N[e]) {
            for (let t of m.default.keys(N[e])) delete R[t];
            delete N[e]
        }
    }

    function j(e) {
        var t, n, i, r;
        return H(e, 0, "getBasicChannel"), null !== (r = null !== (i = null !== (n = null !== (t = R[e]) && void 0 !== t ? t : O[e]) && void 0 !== n ? n : y[e]) && void 0 !== i ? i : M[e]) && void 0 !== r ? r : d.default.getBasicChannel(e)
    }

    function W(e) {
        var t, n, i, r;
        return H(e, 1, "getChannel"), null !== (r = null !== (i = null !== (n = null !== (t = R[e]) && void 0 !== t ? t : O[e]) && void 0 !== n ? n : y[e]) && void 0 !== i ? i : M[e]) && void 0 !== r ? r : k[e]
    }

    function K(e) {
        e.isPrivate() ? (delete k[e.id], z(e)) : e.isThread() ? q(e) : _.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
            X(e)
        }(e)
    }

    function z(e) {
        O[e.id] = e, e.type === C.ChannelTypes.DM && (P[e.getRecipientId()] = e.id), L += 1
    }

    function q(e) {
        let t = R[e.parent_id];
        y[e.id] = e.merge({
            nsfw: (null == t ? void 0 : t.nsfw) === !0,
            parentChannelThreadType: null == t ? void 0 : t.type
        }), e.isScheduledForDeletion() && o.default.dispatch({
            type: "THREAD_DELETE",
            channel: e
        })
    }

    function X(e) {
        var t, n;
        let {
            id: i,
            guild_id: r
        } = e;
        R[i] = e, N[r] = null !== (t = N[r]) && void 0 !== t ? t : {}, N[r][i] = e, b[r] = (null !== (n = b[r]) && void 0 !== n ? n : 0) + 1
    }

    function Q(e) {
        if (null != e.channels)
            for (let t of (v.fileOnly("GuildCreate contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), Y(e.id), U.add(e.id), d.default.restored(e.id), e.channels)) X(t);
        if (null != e.channelUpdates) {
            let t = e.channelUpdates;
            for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && d.default.invalidate(e.id), t.deletes)) ee(R[n]);
            for (let e of t.writes) X(e)
        }
        if (null != e.threads)
            for (let t of e.threads) q(t)
    }

    function Z(e) {
        for (let t of e.channels) K((0, f.deserializeChannel)((0, _.castChannelRecord)(t)));
        e.guilds.forEach(e => {
            v.fileOnly("Early cache contained full guild channels for ".concat(e.id)), U.add(e.id)
        })
    }

    function J(e) {
        if (!_.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
        let t = W(e.channel.id);
        if (null == t) t = e.channel;
        else {
            var n;
            t = t.merge({
                ...e.channel.toJS(),
                bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
            })
        }
        K(t)
    }

    function $(e) {
        let {
            threads: t
        } = e;
        t.forEach(e => {
            _.ALL_CHANNEL_TYPES.has(e.type) && K((0, _.createChannelRecordFromServer)(e))
        })
    }

    function ee(e) {
        if (null == e) return;
        let t = e.guild_id;
        e.id in O && delete O[e.id], e.id in R && delete R[e.id], e.id in y && delete y[e.id], null != t && null != N[t] && e.id in N[t] && delete N[t][e.id], ! function(e) {
            if (null == e.guild_id || _.THREAD_CHANNEL_TYPES.has(e.type))(0, _.isPrivate)(e.type) && (L += 1);
            else {
                var t;
                b[e.guild_id] = (null !== (t = b[e.guild_id]) && void 0 !== t ? t : 0) + 1
            }
        }(e)
    }

    function et(e) {
        var t, n;
        let {
            channel: i
        } = e, r = null !== (n = null !== (t = R[i.id]) && void 0 !== t ? t : O[i.id]) && void 0 !== n ? n : y[i.id];
        if (null == r) return !1;
        ee(r), ! function(e) {
            if ("basicPermissions" in e || e.type !== C.ChannelTypes.DM) return;
            let t = e.getRecipientId(),
                n = P[t];
            n === e.id && delete P[t]
        }(r)
    }

    function en(e) {
        let {
            messages: t
        } = e;
        for (let e of t) null != e.thread && !(e.thread.id in y) && _.ALL_CHANNEL_TYPES.has(e.thread.type) && q((0, _.createChannelRecordFromServer)(e.thread))
    }

    function ei(e) {
        let {
            messages: t,
            threads: n,
            channels: i
        } = e;
        for (let e of t)
            for (let t of e) er(t.thread);
        n.forEach(er), null == i || i.forEach(e => {
            let t = (0, _.createChannelRecordFromServer)(e),
                n = null != W(e.id),
                i = null != k[e.id];
            t.isPrivate() && (!n || i) ? k[t.id] = t : !n && K(t)
        })
    }

    function er(e) {
        null != e && !(e.id in y) && _.ALL_CHANNEL_TYPES.has(e.type) && q((0, _.createChannelRecordFromServer)(e))
    }

    function es() {
        for (let e in M = {}, p.default.getFavoriteChannels()) {
            let t = p.default.getCategoryRecord(e);
            null != t && (M[e] = t)
        }
    }
    class ea extends a.default.Store {
        initialize() {
            this.waitFor(d.default, I.default, g.default, p.default), this.syncWith([p.default], es)
        }
        hasChannel(e) {
            return null != j(e)
        }
        getBasicChannel(e) {
            if (null != e) return j(e)
        }
        getChannel(e) {
            if (null != e) return W(e)
        }
        loadAllGuildAndPrivateChannelsFromDisk() {
            for (let e of g.default.getGuildIds()) B(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
            return {
                ...R,
                ...O
            }
        }
        getChannelIds(e) {
            var t, n;
            return (B(e, 0, "getChannelIds"), null == e) ? m.default.keys(O) : m.default.keys(null !== (n = null !== (t = d.default.getGuildBasicChannels(e)) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : A)
        }
        getMutablePrivateChannels() {
            return O
        }
        getMutableBasicGuildChannelsForGuild(e) {
            var t, n;
            return B(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = d.default.getGuildBasicChannels(e)) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : A
        }
        getMutableGuildChannelsForGuild(e) {
            var t;
            return B(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = N[e]) && void 0 !== t ? t : A
        }
        getSortedPrivateChannels() {
            return r(O).values().sort((e, t) => m.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
        }
        getDMFromUserId(e) {
            if (null != e) return P[e]
        }
        getMutableDMsByUserIds() {
            return P
        }
        getDMUserIds() {
            return m.default.keys(P)
        }
        getPrivateChannelsVersion() {
            return L
        }
        getGuildChannelsVersion(e) {
            var t;
            return null !== (t = b[e]) && void 0 !== t ? t : 0
        }
        getAllThreadsForParent(e) {
            return r.values(y).filter(t => t.parent_id === e)
        }
        getInitialOverlayState() {
            return {
                ...R,
                ...O,
                ...y
            }
        }
        getDebugInfo() {
            return {
                loadedGuildIds: Array.from(U).sort(m.default.compare),
                pendingGuildLoads: Object.keys(G).sort(m.default.compare),
                guildSizes: Object.keys(N).sort(m.default.compare).map(e => "".concat(e, ": ").concat(eo(e)))
            }
        }
    }

    function eo(e) {
        return null == N[e] ? null : Object.keys(N[e]).length
    }
    ea.displayName = "ChannelStore";
    var el = new ea(o.default, {
        BACKGROUND_SYNC: function(e) {
            let {
                guilds: t
            } = e, n = N;
            R = {}, N = {}, b = {}, t.forEach(e => {
                if ("unavailable" === e.data_mode) v.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(eo(e.id))), r.forEach(n[e.id], X);
                else if ("partial" === e.data_mode) {
                    var t, i;
                    v.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(eo(e.id))), r.forEach(n[e.id], X);
                    let s = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
                    s.length > 0 && (B(e.id, 1, "handleBackgroundSync"), s.forEach(e => ee(R[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => X((0, _.createChannelRecordFromServer)(t, e.id)))
                } else v.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), Y(e.id), U.add(e.id), d.default.restored(e.id), e.channels.forEach(t => X((0, _.createChannelRecordFromServer)(t, e.id)))
            })
        },
        CACHE_LOADED_LAZY: function(e) {
            for (let [t, n] of(e.guilds.length, e.guildChannels))
                for (let e of (v.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)), U.add(t), n)) K((0, _.castChannelRecord)(e))
        },
        CACHE_LOADED: Z,
        CHANNEL_CREATE: function(e) {
            K(e.channel)
        },
        CHANNEL_DELETE: et,
        CHANNEL_RECIPIENT_ADD: function(e) {
            let t = W(e.channelId),
                n = T.default.getId();
            return (null == t ? !!void 0 : !!t.isPrivate()) && (K(t.addRecipient(e.user.id, e.nick, n)), !0)
        },
        CHANNEL_RECIPIENT_REMOVE: function(e) {
            let t = W(e.channelId);
            return (null == t ? !!void 0 : !!t.isPrivate()) && (K(t.removeRecipient(e.user.id)), !0)
        },
        CHANNEL_UPDATES: function(e) {
            let t = e.channels.some(e => {
                let t = W(e.id);
                return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
            });
            for (let t of e.channels) K(t);
            t && Object.values(y).forEach(e => K(e))
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                lazyPrivateChannels: t
            } = e;
            null != D && (O = {}, D.forEach(z)), t.forEach(z)
        },
        CONNECTION_OPEN: function(e) {
            let t = N;
            for (let n of (P = {}, R = {}, N = {}, y = {}, b = {}, k = {}, G = {}, w = Date.now(), D = e.initialPrivateChannels, e.initialPrivateChannels.forEach(z), e.guilds)) "partial" === n.dataMode && (v.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(eo(n.id))), r.forEach(t[n.id], X)), Q(n);
            es()
        },
        GUILD_CREATE: function(e) {
            Q(e.guild)
        },
        GUILD_DELETE: function(e) {
            v.fileOnly("GuildDelete of ".concat(e.guild.id)), Y(e.guild.id), U.delete(e.guild.id), d.default.invalidate(e.guild.id)
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = !1, i = (0, h.getThreadsFromGuildFeedFetch)(t);
            for (let e of i) !(e.id in y) && _.ALL_CHANNEL_TYPES.has(e.type) && (q((0, _.createChannelRecordFromServer)(e)), n = !0);
            return n
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: $,
        LOAD_CHANNELS: function(e) {
            for (let {
                    guildId: t,
                    channels: n
                }
                of e.channels)
                for (let e of (v.fileOnly("Lazy loaded guild channels for ".concat(t)), (0, f.default)(n), U.add(t), d.default.restored(t), n)) !Object.hasOwn(R, e.id) && X((0, _.castChannelRecord)(e));
            return !1
        },
        LOAD_MESSAGES_AROUND_SUCCESS: en,
        LOAD_MESSAGES_SUCCESS: en,
        LOAD_THREADS_SUCCESS: $,
        LOGOUT: function() {
            v.fileOnly("initializeClear()"), P = {}, R = {}, N = {}, b = {}, O = {}, k = {}, y = {}, U = new Set, G = {}, w = Date.now()
        },
        OVERLAY_INITIALIZE: Z,
        SEARCH_FINISH: ei,
        MOD_VIEW_SEARCH_FINISH: ei,
        THREAD_CREATE: J,
        THREAD_DELETE: et,
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t
            } = e;
            t.forEach(e => {
                _.ALL_CHANNEL_TYPES.has(e.type) && K(e)
            })
        },
        THREAD_UPDATE: J,
        VOICE_BACKGROUND_UPDATE: function(e) {
            let t = W(e.channelId);
            null != t && (t.voiceBackgroundDisplay = e.background, K(t))
        }
    })
}