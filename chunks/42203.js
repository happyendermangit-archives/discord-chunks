function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelLoader: function() {
            return x
        },
        default: function() {
            return el
        }
    }), n("222007"), n("581081"), n("70102");
    var i = n("917351"),
        s = n.n(i),
        r = n("102053"),
        a = n("446674"),
        o = n("913144"),
        l = n("802493"),
        u = n("595525"),
        d = n("860255"),
        c = n("846527"),
        f = n("1544"),
        _ = n("605250"),
        h = n("379881"),
        E = n("560208"),
        g = n("233069"),
        m = n("449008"),
        p = n("299039"),
        S = n("271938"),
        v = n("305961"),
        T = n("697218"),
        I = n("49111");
    let C = new _.default("ChannelStore"),
        A = {},
        y = {},
        N = {},
        R = {},
        O = null,
        D = {},
        P = {},
        L = 0,
        M = {},
        b = {},
        U = new Set,
        w = {},
        k = 0,
        V = {},
        G = 0,
        F = 0;
    class x {
        static loadAllMissingChannels() {
            let e = v.default.getGuildIds().filter(e => !U.has(e));
            return this.loadGuildIds(e)
        }
        static loadGuildFromChannelId(e) {
            var t;
            return null == e ? null : x.loadGuildIds([null === (t = j(e)) || void 0 === t ? void 0 : t.guild_id])
        }
        static loadGuildIds(e) {
            let t = e.filter(m.isNotNullish);
            if (0 === t.length) return null;
            let n = l.default.database();
            if (null == n) return null;
            let i = t.some(e => !U.has(e));
            if (!i) return null;
            let s = k;
            return (0, u.tryLoadOrResetCacheGatewayAsync)("loadChannels", async () => {
                let e = t.map(e => {
                        if (U.has(e)) return null;
                        let t = w[e];
                        if (null != t) return C.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
                        let i = d.default.getAsync(n, e).then(t => (C.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
                            guildId: e,
                            channels: t
                        }));
                        return w[e] = i, {
                            guildId: e,
                            promise: i
                        }
                    }).filter(m.isNotNullish),
                    i = e.map(e => e.promise);
                try {
                    let t = await Promise.all(i);
                    if (k !== s) return C.fileOnly("lastResetTime has changed, skipping loads for " + e.map(e => e.guildId)), null;
                    let n = t.filter(e => !U.has(e.guildId));
                    await o.default.dispatch({
                        type: "LOAD_CHANNELS",
                        channels: n
                    })
                } catch (t) {
                    for (let n of (C.error("Failed to load channels from disk for " + e.map(e => e.guildId), t), e)) delete w[n.guildId];
                    throw t
                }
                return null
            })
        }
    }

    function B(e, t, n) {
        if (null == e || "null" === e || U.has(e) || 0 === t && c.default.hasGuild(e)) return;
        let i = l.default.database();
        if (null == i) return;
        C.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
        let s = (0, u.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), () => d.default.getSync(i, e));
        if (null == s) {
            U.add(e), c.default.restored(e), C.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
            return
        }
        let [a, o] = s;
        for (let n of ((0, f.default)(a), 0 !== t && (F += 1), U.add(e), c.default.restored(e), r.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), o), a)) !Object.hasOwn(y, n.id) && X((0, g.castChannelRecord)(n));
        C.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(F, ")"))
    }

    function H(e, t, n) {
        if (!Object.hasOwn(y, e) && !Object.hasOwn(R, e) && !Object.hasOwn(D, e) && !Object.hasOwn(b, e) && 1 === t) {
            let i = c.default.getBasicChannel(e);
            (null == i ? void 0 : i.guild_id) != null && B(i.guild_id, t, n)
        }
    }

    function Y(e) {
        if (C.fileOnly("Deleting guild channels for ".concat(e)), null != N[e]) {
            for (let t of p.default.keys(N[e])) delete y[t];
            delete N[e]
        }
    }

    function j(e) {
        var t, n, i, s;
        return H(e, 0, "getBasicChannel"), null !== (s = null !== (i = null !== (n = null !== (t = y[e]) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : D[e]) && void 0 !== i ? i : b[e]) && void 0 !== s ? s : c.default.getBasicChannel(e)
    }

    function W(e) {
        var t, n, i, s;
        return H(e, 1, "getChannel"), null !== (s = null !== (i = null !== (n = null !== (t = y[e]) && void 0 !== t ? t : R[e]) && void 0 !== n ? n : D[e]) && void 0 !== i ? i : b[e]) && void 0 !== s ? s : V[e]
    }

    function K(e) {
        e.isPrivate() ? (delete V[e.id], z(e)) : e.isThread() ? q(e) : g.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
            X(e)
        }(e)
    }

    function z(e) {
        R[e.id] = e, e.type === I.ChannelTypes.DM && (P[e.getRecipientId()] = e.id), L += 1
    }

    function q(e) {
        let t = y[e.parent_id];
        D[e.id] = e.merge({
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
            guild_id: s
        } = e;
        y[i] = e, N[s] = null !== (t = N[s]) && void 0 !== t ? t : {}, N[s][i] = e, M[s] = (null !== (n = M[s]) && void 0 !== n ? n : 0) + 1
    }

    function Q(e) {
        if (null != e.channels)
            for (let t of (C.fileOnly("GuildCreate contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), Y(e.id), U.add(e.id), c.default.restored(e.id), e.channels)) X(t);
        if (null != e.channelUpdates) {
            let t = e.channelUpdates;
            for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && c.default.invalidate(e.id), t.deletes)) ee(y[n]);
            for (let e of t.writes) X(e)
        }
        if (null != e.threads)
            for (let t of e.threads) q(t)
    }

    function Z(e) {
        for (let t of e.channels) K((0, f.deserializeChannel)((0, g.castChannelRecord)(t)));
        e.guilds.forEach(e => {
            C.fileOnly("Early cache contained full guild channels for ".concat(e.id)), U.add(e.id)
        })
    }

    function J(e) {
        if (!g.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
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
            g.ALL_CHANNEL_TYPES.has(e.type) && K((0, g.createChannelRecordFromServer)(e))
        })
    }

    function ee(e) {
        if (null == e) return;
        let t = e.guild_id;
        e.id in R && delete R[e.id], e.id in y && delete y[e.id], e.id in D && delete D[e.id], null != t && null != N[t] && e.id in N[t] && delete N[t][e.id], ! function(e) {
            if (null == e.guild_id || g.THREAD_CHANNEL_TYPES.has(e.type))(0, g.isPrivate)(e.type) && (L += 1);
            else {
                var t;
                M[e.guild_id] = (null !== (t = M[e.guild_id]) && void 0 !== t ? t : 0) + 1
            }
        }(e)
    }

    function et(e) {
        var t, n;
        let {
            channel: i
        } = e, s = null !== (n = null !== (t = y[i.id]) && void 0 !== t ? t : R[i.id]) && void 0 !== n ? n : D[i.id];
        if (null == s) return !1;
        ee(s), ! function(e) {
            if ("basicPermissions" in e || e.type !== I.ChannelTypes.DM) return;
            let t = e.getRecipientId(),
                n = P[t];
            n === e.id && delete P[t]
        }(s)
    }

    function en(e) {
        let {
            messages: t
        } = e;
        for (let e of t) null != e.thread && !(e.thread.id in D) && g.ALL_CHANNEL_TYPES.has(e.thread.type) && q((0, g.createChannelRecordFromServer)(e.thread))
    }

    function ei(e) {
        let {
            messages: t,
            threads: n,
            channels: i
        } = e;
        for (let e of t)
            for (let t of e) es(t.thread);
        n.forEach(es), null == i || i.forEach(e => {
            let t = (0, g.createChannelRecordFromServer)(e),
                n = null != W(e.id),
                i = null != V[e.id];
            t.isPrivate() && (!n || i) ? V[t.id] = t : !n && K(t)
        })
    }

    function es(e) {
        null != e && !(e.id in D) && g.ALL_CHANNEL_TYPES.has(e.type) && q((0, g.createChannelRecordFromServer)(e))
    }

    function er() {
        for (let e in b = {}, h.default.getFavoriteChannels()) {
            let t = h.default.getCategoryRecord(e);
            null != t && (b[e] = t)
        }
    }
    class ea extends a.default.Store {
        initialize() {
            this.waitFor(c.default, T.default, v.default, h.default), this.syncWith([h.default], er)
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
            for (let e of v.default.getGuildIds()) B(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
            return {
                ...y,
                ...R
            }
        }
        getChannelIds(e) {
            var t, n;
            return (B(e, 0, "getChannelIds"), null == e) ? p.default.keys(R) : p.default.keys(null !== (n = null !== (t = c.default.getGuildBasicChannels(e)) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : A)
        }
        getMutablePrivateChannels() {
            return R
        }
        getMutableBasicGuildChannelsForGuild(e) {
            var t, n;
            return B(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = c.default.getGuildBasicChannels(e)) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : A
        }
        getMutableGuildChannelsForGuild(e) {
            var t;
            return B(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = N[e]) && void 0 !== t ? t : A
        }
        getSortedPrivateChannels() {
            return s(R).values().sort((e, t) => p.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
        }
        getDMFromUserId(e) {
            if (null != e) return P[e]
        }
        getMutableDMsByUserIds() {
            return P
        }
        getDMUserIds() {
            return p.default.keys(P)
        }
        getPrivateChannelsVersion() {
            return L
        }
        getGuildChannelsVersion(e) {
            var t;
            return null !== (t = M[e]) && void 0 !== t ? t : 0
        }
        getAllThreadsForParent(e) {
            return s.values(D).filter(t => t.parent_id === e)
        }
        getInitialOverlayState() {
            return {
                ...y,
                ...R,
                ...D
            }
        }
        getDebugInfo() {
            return {
                loadedGuildIds: Array.from(U).sort(p.default.compare),
                pendingGuildLoads: Object.keys(w).sort(p.default.compare),
                guildSizes: Object.keys(N).sort(p.default.compare).map(e => "".concat(e, ": ").concat(eo(e)))
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
            y = {}, N = {}, M = {}, t.forEach(e => {
                if ("unavailable" === e.data_mode) C.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(eo(e.id))), s.forEach(n[e.id], X);
                else if ("partial" === e.data_mode) {
                    var t, i;
                    C.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(eo(e.id))), s.forEach(n[e.id], X);
                    let r = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
                    r.length > 0 && (B(e.id, 1, "handleBackgroundSync"), r.forEach(e => ee(y[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => X((0, g.createChannelRecordFromServer)(t, e.id)))
                } else C.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), Y(e.id), U.add(e.id), c.default.restored(e.id), e.channels.forEach(t => X((0, g.createChannelRecordFromServer)(t, e.id)))
            })
        },
        CACHE_LOADED_LAZY: function(e) {
            for (let [t, n] of(e.guilds.length, e.guildChannels))
                for (let e of (C.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)), U.add(t), n)) K((0, g.castChannelRecord)(e))
        },
        CACHE_LOADED: Z,
        CHANNEL_CREATE: function(e) {
            K(e.channel)
        },
        CHANNEL_DELETE: et,
        CHANNEL_RECIPIENT_ADD: function(e) {
            let t = W(e.channelId),
                n = S.default.getId();
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
            t && Object.values(D).forEach(e => K(e))
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                lazyPrivateChannels: t
            } = e;
            null != O && (R = {}, O.forEach(z)), t.forEach(z)
        },
        CONNECTION_OPEN: function(e) {
            let t = N;
            for (let n of (P = {}, y = {}, N = {}, D = {}, M = {}, V = {}, w = {}, k = Date.now(), O = e.initialPrivateChannels, e.initialPrivateChannels.forEach(z), e.guilds)) "partial" === n.dataMode && (C.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(eo(n.id))), s.forEach(t[n.id], X)), Q(n);
            er()
        },
        GUILD_CREATE: function(e) {
            Q(e.guild)
        },
        GUILD_DELETE: function(e) {
            C.fileOnly("GuildDelete of ".concat(e.guild.id)), Y(e.guild.id), U.delete(e.guild.id), c.default.invalidate(e.guild.id)
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = !1, i = (0, E.getThreadsFromGuildFeedFetch)(t);
            for (let e of i) !(e.id in D) && g.ALL_CHANNEL_TYPES.has(e.type) && (q((0, g.createChannelRecordFromServer)(e)), n = !0);
            return n
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: $,
        LOAD_CHANNELS: function(e) {
            for (let {
                    guildId: t,
                    channels: n
                }
                of e.channels)
                for (let e of (C.fileOnly("Lazy loaded guild channels for ".concat(t)), (0, f.default)(n), U.add(t), c.default.restored(t), n)) !Object.hasOwn(y, e.id) && X((0, g.castChannelRecord)(e));
            return !1
        },
        LOAD_MESSAGES_AROUND_SUCCESS: en,
        LOAD_MESSAGES_SUCCESS: en,
        LOAD_THREADS_SUCCESS: $,
        LOGOUT: function() {
            C.fileOnly("initializeClear()"), P = {}, y = {}, N = {}, M = {}, R = {}, V = {}, D = {}, U = new Set, w = {}, k = Date.now()
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
                g.ALL_CHANNEL_TYPES.has(e.type) && K(e)
            })
        },
        THREAD_UPDATE: J,
        VOICE_BACKGROUND_UPDATE: function(e) {
            let t = W(e.channelId);
            null != t && (t.voiceBackgroundDisplay = e.background, K(t))
        }
    })
}