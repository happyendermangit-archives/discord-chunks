function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hydrateReadySupplementalPayload: function() {
            return S
        },
        preloadReadyPayloadData: function() {
            return A
        },
        hydrateReadyPayloadPrioritized: function() {
            return D
        },
        hydrateInitialGuild: function() {
            return O
        },
        hydratePreviouslyUnavailableGuild: function() {
            return R
        }
    }), n("424973"), n("222007"), n("70102");
    var s = n("627445"),
        i = n.n(s),
        r = n("917351"),
        a = n.n(r),
        o = n("802493"),
        d = n("105059"),
        u = n("849365"),
        l = n("860255"),
        f = n("723939"),
        _ = n("70754"),
        c = n("605250"),
        g = n("385976"),
        m = n("364685"),
        h = n("233069"),
        v = n("305961"),
        E = n("660478"),
        p = n("665618");
    let y = new c.default("ReadyPayloadUtils"),
        T = {},
        C = null,
        I = {};

    function S(e, t) {
        var n;
        let {
            guilds: s,
            merged_members: i,
            merged_presences: r,
            ...a
        } = e, o = P(I, null == r ? void 0 : r.friends), d = null !== (n = null == s ? void 0 : s.map((e, t) => {
            let n = P(I, null == r ? void 0 : r.guilds[t]),
                s = P(I, null == i ? void 0 : i[t]);
            return {
                ...e,
                unavailable: void 0 === e.voice_states,
                presences: n,
                members: s
            }
        })) && void 0 !== n ? n : [], u = N(t, s, e => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            embedded_activities: e.embedded_activities,
            voice_states: e.voice_states,
            unavailable: !1
        }));
        return null != u && d.push(u), I = {}, {
            ...a,
            presences: o,
            guilds: d
        }
    }

    function A() {
        let e = o.default.database(),
            t = (0, _.isCacheEnabled)() ? d.default.getCommittedVersions() : Promise.resolve({}),
            n = (0, _.isCacheEnabled)() ? l.default.getGuildIds() : Promise.resolve(new Set),
            s = null != e ? u.default.okAsync(e) : Promise.resolve(!1);
        return Promise.all([t, n, s]).then(e => {
            let [t, n, s] = e;
            return {
                guildVersions: t,
                guildChannels: n,
                databaseOk: s
            }
        })
    }

    function D(e, t, n) {
        var s;
        let {
            users: r,
            relationships: d,
            private_channels: u,
            merged_members: l,
            guilds: _,
            ...c
        } = e;
        (function(e) {
            let t = o.default.database();
            null != t && !1 === e.databaseOk && f.default.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"), T = {};
            let n = Object.values(v.default.getGuilds()),
                s = g.default.getGuilds(),
                i = m.default.getRawStickersByGuild(),
                r = E.default.getReadStatesByChannel();
            for (let t of n) {
                var a, d, u;
                t.id in e.guildVersions && e.guildChannels.has(t.id) && (T[t.id] = {
                    properties: p.toServer(t),
                    roles: t.roles,
                    emojis: null !== (d = null === (a = s[t.id]) || void 0 === a ? void 0 : a.rawEmojis) && void 0 !== d ? d : null,
                    stickers: null !== (u = i.get(t.id)) && void 0 !== u ? u : null,
                    readStates: r
                })
            }
        })(n), I = a.keyBy(r, e => e.id);
        let h = P(I, d);
        null == u || u.forEach(e => {
            let t = e.recipient_ids;
            null != t && (e.recipients = t.map(e => (i(null != I[e], "Missing user in compressed ready payload"), I[e]))), delete e.recipient_ids
        });
        let y = null !== (s = null == _ ? void 0 : _.map((e, t) => !0 === e.unavailable ? e : (e.members = P(I, null == l ? void 0 : l[t]), V(e)))) && void 0 !== s ? s : [],
            C = N(t, _, e => V(e));
        return null != C && y.push(C), {
            ...c,
            users: r,
            presences: [],
            relationships: h,
            guilds: y,
            private_channels: null != u ? u : []
        }
    }

    function N(e, t, n) {
        return null == C || C.identifyTime !== e || null != t && t.some(e => e.id === C.guild.id) ? null : n(C.guild)
    }

    function O(e, t) {
        var n, s, i;
        let r = v.default.getGuild(e.id),
            a = R(e, null == r ? void 0 : {
                properties: p.toServer(r),
                roles: r.roles,
                emojis: null !== (s = null === (n = g.default.getGuilds()[r.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== s ? s : null,
                stickers: null !== (i = m.default.getRawStickersByGuild().get(r.id)) && void 0 !== i ? i : null,
                readStates: {}
            });
        return C = {
            guild: e,
            identifyTime: t
        }, a
    }

    function P(e, t) {
        let n = [];
        return null == t || t.forEach(t => {
            if (null == t) return;
            let s = t.user_id;
            null != s && (i(null != e[s], "Missing user[".concat(s, "] in compressed ready payload")), t.user = e[s]), delete t.user_id, n.push(t)
        }), n
    }

    function b(e) {
        let t = T[e];
        return delete T[e], t
    }

    function V(e) {
        var t, n, s, i, r, a, o, d, u, l, f, _;
        let c = b(e.id);
        if ("partial" !== e.data_mode) return {
            id: e.id,
            dataMode: e.data_mode,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null !== (i = null === (s = e.threads) || void 0 === s ? void 0 : s.map(t => (0, h.createChannelRecordFromServer)(t, e.id))) && void 0 !== i ? i : [],
            threadMessages: k(e.threads),
            channels: e.channels.map(t => (t.guild_id = e.id, (0, h.createChannelRecordFromServer)(t, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
        if (null == c) throw y.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
        return {
            id: e.id,
            dataMode: e.data_mode,
            channels: null,
            channelUpdates: {
                writes: null !== (r = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, h.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
                deletes: null !== (a = e.partial_updates.deleted_channel_ids) && void 0 !== a ? a : []
            },
            channelTimestampUpdates: e.channel_updates,
            emojis: null == c.emojis ? null : M(c.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
            emojiUpdates: {
                writes: null !== (o = e.partial_updates.emojis) && void 0 !== o ? o : [],
                deletes: null !== (d = e.partial_updates.deleted_emoji_ids) && void 0 !== d ? d : []
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: null !== (u = e.properties) && void 0 !== u ? u : c.properties,
            roles: p.filterRoleDeletes(e.id, c.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
            stage_instances: e.stage_instances,
            stickers: null == c.stickers ? null : M(c.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
            stickerUpdates: {
                writes: null !== (l = e.partial_updates.stickers) && void 0 !== l ? l : [],
                deletes: null !== (f = e.partial_updates.deleted_sticker_ids) && void 0 !== f ? f : []
            },
            unableToSyncDeletes: e.unable_to_sync_deletes,
            threads: null !== (_ = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, h.createChannelRecordFromServer)(t, e.id))) && void 0 !== _ ? _ : [],
            threadMessages: k(e.threads),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        }
    }

    function R(e, t) {
        var n, s, i, r, a, o, d, u, l, f, _, c;
        if (null == t && (t = b(e.id)), "partial" !== e.data_mode) return {
            id: e.id,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null !== (r = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, h.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
            threadMessages: k(e.threads),
            channels: e.channels.map(t => (t.guild_id = e.id, (0, h.createChannelRecordFromServer)(t, e.id))),
            presences: e.presences,
            embedded_activities: e.embedded_activities,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
        if (null == t) throw y.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
        return {
            id: e.id,
            channels: null,
            channelUpdates: {
                writes: null !== (a = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map(t => (0, h.createChannelRecordFromServer)(t, e.id))) && void 0 !== a ? a : [],
                deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
            },
            channelTimestampUpdates: e.channel_updates,
            embedded_activities: e.embedded_activities,
            emojis: null == t.emojis ? null : M(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
            emojiUpdates: {
                writes: null !== (d = e.partial_updates.emojis) && void 0 !== d ? d : [],
                deletes: null !== (u = e.partial_updates.deleted_emoji_ids) && void 0 !== u ? u : []
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            presences: e.presences,
            properties: null !== (l = e.properties) && void 0 !== l ? l : t.properties,
            roles: p.filterRoleDeletes(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
            stage_instances: e.stage_instances,
            stickers: null == t.stickers ? null : M(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
            stickerUpdates: {
                writes: null !== (f = e.partial_updates.stickers) && void 0 !== f ? f : [],
                deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
            },
            unableToSyncDeletes: e.unable_to_sync_deletes,
            threads: null !== (c = null === (s = e.threads) || void 0 === s ? void 0 : s.map(t => (0, h.createChannelRecordFromServer)(t, e.id))) && void 0 !== c ? c : [],
            threadMessages: k(e.threads),
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        }
    }

    function k(e) {
        let t = [];
        if (null != e)
            for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
        return t
    }

    function M(e, t, n) {
        t = null != t ? t : [];
        let s = new Set((null != n ? n : []).concat(t.map(e => e.id)));
        return e.filter(e => !s.has(e.id)).concat(t)
    }
}