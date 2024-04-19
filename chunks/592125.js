function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelLoader: function() {
            return j
        }
    }), n("47120"), n("51350"), n("411104");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("956067"),
        d = n("442837"),
        _ = n("570140"),
        c = n("287328"),
        E = n("86670"),
        I = n("591526"),
        T = n("458772"),
        f = n("38217"),
        S = n("710845"),
        h = n("853856"),
        A = n("900489"),
        m = n("131704"),
        N = n("823379"),
        p = n("709054"),
        O = n("314897"),
        R = n("430824"),
        C = n("594174"),
        g = n("981631");
    let L = new S.default("ChannelStore"),
        D = {},
        v = {},
        M = {},
        y = {},
        P = null,
        U = {},
        b = {},
        G = 0,
        w = {},
        B = {},
        k = new Set,
        F = {},
        V = 0,
        x = {},
        H = 0,
        Y = 0;
    class j {
        static loadAllMissingChannels() {
            let e = R.default.getGuildIds().filter(e => !k.has(e));
            return this.loadGuildIds(e)
        }
        static loadGuildFromChannelId(e) {
            var t;
            return null == e ? null : j.loadGuildIds([null === (t = X(e)) || void 0 === t ? void 0 : t.guild_id])
        }
        static loadGuildIds(e) {
            let t = e.filter(N.isNotNullish);
            if (0 === t.length) return null;
            let n = c.default.database();
            if (null == n || !t.some(e => !k.has(e))) return null;
            let i = V;
            return (0, E.tryLoadOrResetCacheGatewayAsync)("loadChannels", async () => {
                let e = t.map(e => {
                        if (k.has(e)) return null;
                        if (null != F[e]) return L.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
                        let t = I.default.getAsync(n, e).then(t => (L.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
                            guildId: e,
                            channels: t
                        }));
                        return F[e] = t, {
                            guildId: e,
                            promise: t
                        }
                    }).filter(N.isNotNullish),
                    r = e.map(e => e.promise);
                try {
                    let t = await Promise.all(r);
                    if (V !== i) return L.fileOnly("lastResetTime has changed, skipping loads for " + e.map(e => e.guildId)), null;
                    let n = t.filter(e => !k.has(e.guildId));
                    await _.default.dispatch({
                        type: "LOAD_CHANNELS",
                        channels: n
                    })
                } catch (t) {
                    for (let n of (L.error("Failed to load channels from disk for " + e.map(e => e.guildId), t), e)) delete F[n.guildId];
                    throw t
                }
                return null
            })
        }
    }

    function W(e, t, n) {
        if (null == e || "null" === e || k.has(e) || 0 === t && T.default.hasGuild(e)) return;
        let i = c.default.database();
        if (null == i) return;
        L.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
        let r = (0, E.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), () => I.default.getSync(i, e));
        if (null == r) {
            k.add(e), T.default.restored(e), L.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
            return
        }
        let [s, a] = r;
        for (let n of ((0, f.default)(s), 0 !== t && (Y += 1), k.add(e), T.default.restored(e), u.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), a), s)) !Object.hasOwn(v, n.id) && $((0, m.castChannelRecord)(n));
        L.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(s.length, ", guilds_loaded: ").concat(Y, ")"))
    }

    function K(e, t, n) {
        if (!Object.hasOwn(v, e) && !Object.hasOwn(y, e) && !Object.hasOwn(U, e) && !Object.hasOwn(B, e) && 1 === t) {
            let i = T.default.getBasicChannel(e);
            (null == i ? void 0 : i.guild_id) != null && W(i.guild_id, t, n)
        }
    }

    function z(e) {
        if (L.fileOnly("Deleting guild channels for ".concat(e)), null != M[e]) {
            for (let t of p.default.keys(M[e])) delete v[t];
            delete M[e]
        }
    }

    function X(e) {
        var t, n, i, r;
        return K(e, 0, "getBasicChannel"), null !== (r = null !== (i = null !== (n = null !== (t = v[e]) && void 0 !== t ? t : y[e]) && void 0 !== n ? n : U[e]) && void 0 !== i ? i : B[e]) && void 0 !== r ? r : T.default.getBasicChannel(e)
    }

    function q(e) {
        var t, n, i, r;
        return K(e, 1, "getChannel"), null !== (r = null !== (i = null !== (n = null !== (t = v[e]) && void 0 !== t ? t : y[e]) && void 0 !== n ? n : U[e]) && void 0 !== i ? i : B[e]) && void 0 !== r ? r : x[e]
    }

    function Q(e) {
        e.isPrivate() ? (delete x[e.id], Z(e)) : e.isThread() ? J(e) : m.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
            $(e)
        }(e)
    }

    function Z(e) {
        y[e.id] = e, e.type === g.ChannelTypes.DM && (b[e.getRecipientId()] = e.id), G += 1
    }

    function J(e) {
        let t = v[e.parent_id];
        U[e.id] = e.merge({
            nsfw: (null == t ? void 0 : t.nsfw) === !0,
            parentChannelThreadType: null == t ? void 0 : t.type
        }), e.isScheduledForDeletion() && _.default.dispatch({
            type: "THREAD_DELETE",
            channel: e
        })
    }

    function $(e) {
        var t, n;
        let {
            id: i,
            guild_id: r
        } = e;
        v[i] = e, M[r] = null !== (t = M[r]) && void 0 !== t ? t : {}, M[r][i] = e, w[r] = (null !== (n = w[r]) && void 0 !== n ? n : 0) + 1
    }

    function ee(e) {
        if (null != e.channels)
            for (let t of (L.fileOnly("GuildCreate contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), z(e.id), k.add(e.id), T.default.restored(e.id), e.channels)) $(t);
        if (null != e.channelUpdates) {
            let t = e.channelUpdates;
            for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && T.default.invalidate(e.id), t.deletes)) ei(v[n]);
            for (let e of t.writes) $(e)
        }
        if (null != e.threads)
            for (let t of e.threads) J(t)
    }

    function et(e) {
        if (!m.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
        let t = q(e.channel.id);
        if (null == t) t = e.channel;
        else {
            var n;
            t = t.merge({
                ...e.channel.toJS(),
                bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
            })
        }
        Q(t)
    }

    function en(e) {
        let {
            threads: t
        } = e;
        t.forEach(e => {
            m.ALL_CHANNEL_TYPES.has(e.type) && Q((0, m.createChannelRecordFromServer)(e))
        })
    }

    function ei(e) {
        if (null == e) return;
        let t = e.guild_id;
        e.id in y && delete y[e.id], e.id in v && delete v[e.id], e.id in U && delete U[e.id], null != t && null != M[t] && e.id in M[t] && delete M[t][e.id], ! function(e) {
            if (null == e.guild_id || m.THREAD_CHANNEL_TYPES.has(e.type))(0, m.isPrivate)(e.type) && (G += 1);
            else {
                var t;
                w[e.guild_id] = (null !== (t = w[e.guild_id]) && void 0 !== t ? t : 0) + 1
            }
        }(e)
    }

    function er(e) {
        var t, n;
        let {
            channel: i
        } = e, r = null !== (n = null !== (t = v[i.id]) && void 0 !== t ? t : y[i.id]) && void 0 !== n ? n : U[i.id];
        if (null == r) return !1;
        ei(r), ! function(e) {
            if ("basicPermissions" in e || e.type !== g.ChannelTypes.DM) return;
            let t = e.getRecipientId();
            b[t] === e.id && delete b[t]
        }(r)
    }

    function es(e) {
        let {
            messages: t
        } = e;
        for (let e of t) null != e.thread && !(e.thread.id in U) && m.ALL_CHANNEL_TYPES.has(e.thread.type) && J((0, m.createChannelRecordFromServer)(e.thread))
    }

    function ea(e) {
        let {
            messages: t,
            threads: n,
            channels: i
        } = e;
        for (let e of t)
            for (let t of e) eo(t.thread);
        n.forEach(eo), null == i || i.forEach(e => {
            let t = (0, m.createChannelRecordFromServer)(e),
                n = null != q(e.id),
                i = null != x[e.id];
            t.isPrivate() && (!n || i) ? x[t.id] = t : !n && Q(t)
        })
    }

    function eo(e) {
        null != e && !(e.id in U) && m.ALL_CHANNEL_TYPES.has(e.type) && J((0, m.createChannelRecordFromServer)(e))
    }

    function el() {
        for (let e in B = {}, h.default.getFavoriteChannels()) {
            let t = h.default.getCategoryRecord(e);
            null != t && (B[e] = t)
        }
    }
    class eu extends(i = d.default.Store) {
        initialize() {
            this.waitFor(T.default, C.default, R.default, h.default), this.syncWith([h.default], el)
        }
        hasChannel(e) {
            return null != X(e)
        }
        getBasicChannel(e) {
            if (null != e) return X(e)
        }
        getChannel(e) {
            if (null != e) return q(e)
        }
        loadAllGuildAndPrivateChannelsFromDisk() {
            for (let e of R.default.getGuildIds()) W(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
            return {
                ...v,
                ...y
            }
        }
        getChannelIds(e) {
            var t, n;
            return (W(e, 0, "getChannelIds"), null == e) ? p.default.keys(y) : p.default.keys(null !== (n = null !== (t = T.default.getGuildBasicChannels(e)) && void 0 !== t ? t : M[e]) && void 0 !== n ? n : D)
        }
        getMutablePrivateChannels() {
            return y
        }
        getMutableBasicGuildChannelsForGuild(e) {
            var t, n;
            return W(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = T.default.getGuildBasicChannels(e)) && void 0 !== t ? t : M[e]) && void 0 !== n ? n : D
        }
        getMutableGuildChannelsForGuild(e) {
            var t;
            return W(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = M[e]) && void 0 !== t ? t : D
        }
        getSortedPrivateChannels() {
            return l()(y).values().sort((e, t) => p.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
        }
        getDMFromUserId(e) {
            if (null != e) return b[e]
        }
        getMutableDMsByUserIds() {
            return b
        }
        getDMUserIds() {
            return p.default.keys(b)
        }
        getPrivateChannelsVersion() {
            return G
        }
        getGuildChannelsVersion(e) {
            var t;
            return null !== (t = w[e]) && void 0 !== t ? t : 0
        }
        getAllThreadsForParent(e) {
            return l().values(U).filter(t => t.parent_id === e)
        }
        getInitialOverlayState() {
            return {
                ...v,
                ...y,
                ...U
            }
        }
        getDebugInfo() {
            return {
                loadedGuildIds: Array.from(k).sort(p.default.compare),
                pendingGuildLoads: Object.keys(F).sort(p.default.compare),
                guildSizes: Object.keys(M).sort(p.default.compare).map(e => "".concat(e, ": ").concat(ed(e)))
            }
        }
    }

    function ed(e) {
        return null == M[e] ? null : Object.keys(M[e]).length
    }
    a = "ChannelStore", (s = "displayName") in(r = eu) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new eu(_.default, {
        BACKGROUND_SYNC: function(e) {
            let {
                guilds: t
            } = e, n = M;
            v = {}, M = {}, w = {}, t.forEach(e => {
                if ("unavailable" === e.data_mode) L.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(ed(e.id))), l().forEach(n[e.id], $);
                else if ("partial" === e.data_mode) {
                    var t, i;
                    L.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(ed(e.id))), l().forEach(n[e.id], $);
                    let r = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
                    r.length > 0 && (W(e.id, 1, "handleBackgroundSync"), r.forEach(e => ei(v[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => $((0, m.createChannelRecordFromServer)(t, e.id)))
                } else L.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), z(e.id), k.add(e.id), T.default.restored(e.id), e.channels.forEach(t => $((0, m.createChannelRecordFromServer)(t, e.id)))
            })
        },
        CACHE_LOADED_LAZY: function(e) {
            for (let [t, n] of e.guildChannels)
                for (let e of (L.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)), k.add(t), n)) Q((0, m.castChannelRecord)(e))
        },
        CACHE_LOADED: function(e) {
            var t;
            e.guilds.length;
            let {
                privateChannels: n,
                initialGuildChannels: i
            } = e;
            for (let e of [n, i])
                for (let t of e) Q((0, f.deserializeChannel)((0, m.castChannelRecord)(t)));
            let r = null === (t = i[0]) || void 0 === t ? void 0 : t.guild_id;
            null != r && (L.fileOnly("Early cache contained full guild channels for ".concat(r)), k.add(r))
        },
        CHANNEL_CREATE: function(e) {
            Q(e.channel)
        },
        CHANNEL_DELETE: er,
        CHANNEL_RECIPIENT_ADD: function(e) {
            let t = q(e.channelId),
                n = O.default.getId();
            return (null == t ? !!void 0 : !!t.isPrivate()) && (Q(t.addRecipient(e.user.id, e.nick, n)), !0)
        },
        CHANNEL_RECIPIENT_REMOVE: function(e) {
            let t = q(e.channelId);
            return (null == t ? !!void 0 : !!t.isPrivate()) && (Q(t.removeRecipient(e.user.id)), !0)
        },
        CHANNEL_UPDATES: function(e) {
            let t = e.channels.some(e => {
                let t = q(e.id);
                return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
            });
            for (let t of e.channels) Q(t);
            t && Object.values(U).forEach(e => Q(e))
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                lazyPrivateChannels: t
            } = e;
            null != P && (y = {}, P.forEach(Z)), t.forEach(Z)
        },
        CONNECTION_OPEN: function(e) {
            let t = M;
            for (let n of (b = {}, v = {}, M = {}, U = {}, w = {}, x = {}, F = {}, V = Date.now(), P = e.initialPrivateChannels, e.initialPrivateChannels.forEach(Z), e.guilds)) "partial" === n.dataMode && (l().forEach(t[n.id], $), L.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(ed(n.id)))), ee(n);
            el()
        },
        GUILD_CREATE: function(e) {
            ee(e.guild)
        },
        GUILD_DELETE: function(e) {
            L.fileOnly("GuildDelete of ".concat(e.guild.id)), z(e.guild.id), k.delete(e.guild.id), T.default.invalidate(e.guild.id)
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = !1;
            for (let e of (0, A.getThreadsFromGuildFeedFetch)(t)) !(e.id in U) && m.ALL_CHANNEL_TYPES.has(e.type) && (J((0, m.createChannelRecordFromServer)(e)), n = !0);
            return n
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: en,
        LOAD_CHANNELS: function(e) {
            for (let {
                    guildId: t,
                    channels: n
                }
                of e.channels)
                for (let e of (L.fileOnly("Lazy loaded guild channels for ".concat(t)), (0, f.default)(n), k.add(t), T.default.restored(t), n)) !Object.hasOwn(v, e.id) && $((0, m.castChannelRecord)(e));
            return !1
        },
        LOAD_MESSAGES_AROUND_SUCCESS: es,
        LOAD_MESSAGES_SUCCESS: es,
        LOAD_THREADS_SUCCESS: en,
        LOGOUT: function() {
            L.fileOnly("initializeClear()"), b = {}, v = {}, M = {}, w = {}, y = {}, x = {}, U = {}, k = new Set, F = {}, V = Date.now()
        },
        OVERLAY_INITIALIZE: function(e) {
            for (let t of (e.guilds.length, e.channels)) Q((0, f.deserializeChannel)((0, m.castChannelRecord)(t)))
        },
        SEARCH_FINISH: ea,
        MOD_VIEW_SEARCH_FINISH: ea,
        THREAD_CREATE: et,
        THREAD_DELETE: er,
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t
            } = e;
            t.forEach(e => {
                m.ALL_CHANNEL_TYPES.has(e.type) && Q(e)
            })
        },
        THREAD_UPDATE: et,
        VOICE_BACKGROUND_UPDATE: function(e) {
            let t = q(e.channelId);
            null != t && (t.voiceBackgroundDisplay = e.background, Q(t))
        }
    })
}