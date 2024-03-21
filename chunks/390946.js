function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hydrateReadySupplementalPayload: function() {
            return C
        },
        preloadReadyPayloadData: function() {
            return y
        },
        hydrateReadyPayloadPrioritized: function() {
            return N
        },
        hydrateInitialGuild: function() {
            return O
        },
        hydratePreviouslyUnavailableGuild: function() {
            return M
        }
    }), n("424973"), n("222007"), n("70102");
    var i = n("627445"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("802493"),
        l = n("105059"),
        u = n("849365"),
        d = n("860255"),
        c = n("723939"),
        _ = n("70754"),
        f = n("605250"),
        E = n("385976"),
        h = n("364685"),
        g = n("233069"),
        m = n("305961"),
        p = n("660478"),
        S = n("665618");
    let T = new f.default("ReadyPayloadUtils"),
        v = {},
        I = null,
        A = {};

    function C(e, t) {
        var n;
        let {
            guilds: i,
            merged_members: s,
            merged_presences: r,
            ...a
        } = e, o = D(A, null == r ? void 0 : r.friends), l = null !== (n = null == i ? void 0 : i.map((e, t) => {
            let n = D(A, null == r ? void 0 : r.guilds[t]),
                i = D(A, null == s ? void 0 : s[t]);
            return {
                ...e,
                unavailable: void 0 === e.voice_states,
                presences: n,
                members: i
            }
        })) && void 0 !== n ? n : [], u = R(t, i, e => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            embedded_activities: e.embedded_activities,
            voice_states: e.voice_states,
            unavailable: !1
        }));
        return null != u && l.push(u), A = {}, {
            ...a,
            presences: o,
            guilds: l
        }
    }

    function y() {
        let e = o.default.database(),
            t = (0, _.isCacheEnabled)() ? l.default.getCommittedVersions() : Promise.resolve({}),
            n = (0, _.isCacheEnabled)() ? d.default.getGuildIds() : Promise.resolve(new Set),
            i = null != e ? u.default.okAsync(e) : Promise.resolve(!1);
        return Promise.all([t, n, i]).then(e => {
            let [t, n, i] = e;
            return {
                guildVersions: t,
                guildChannels: n,
                databaseOk: i
            }
        })
    }

    function N(e, t, n) {
        var i;
        let {
            users: r,
            relationships: l,
            private_channels: u,
            merged_members: d,
            guilds: _,
            ...f
        } = e;
        (function(e) {
            let t = o.default.database();
            null != t && !1 === e.databaseOk && c.default.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"), v = {};
            let n = Object.values(m.default.getGuilds()),
                i = E.default.getGuilds(),
                s = h.default.getRawStickersByGuild(),
                r = p.default.getReadStatesByChannel();
            for (let t of n) {
                var a, l, u;
                t.id in e.guildVersions && e.guildChannels.has(t.id) && (v[t.id] = {
                    properties: S.toServer(t),
                    roles: m.default.getRoles(t.id),
                    emojis: null !== (l = null === (a = i[t.id]) || void 0 === a ? void 0 : a.rawEmojis) && void 0 !== l ? l : null,
                    stickers: null !== (u = s.get(t.id)) && void 0 !== u ? u : null,
                    readStates: r
                })
            }
        })(n), A = a.keyBy(r, e => e.id);
        let g = D(A, l);
        null == u || u.forEach(e => {
            let t = e.recipient_ids;
            null != t && (e.recipients = t.map(e => (s(null != A[e], "Missing user in compressed ready payload"), A[e]))), delete e.recipient_ids
        });
        let T = null !== (i = null == _ ? void 0 : _.map((e, t) => !0 === e.unavailable ? e : (e.members = D(A, null == d ? void 0 : d[t]), L(e)))) && void 0 !== i ? i : [],
            I = R(t, _, e => L(e));
        return null != I && T.push(I), {
            ...f,
            users: r,
            presences: [],
            relationships: g,
            guilds: T,
            private_channels: null != u ? u : []
        }
    }

    function R(e, t, n) {
        return null == I || I.identifyTime !== e || null != t && t.some(e => e.id === I.guild.id) ? null : n(I.guild)
    }

    function O(e, t) {
        var n, i, s;
        let r = m.default.getGuild(e.id),
            a = M(e, null == r ? void 0 : {
                properties: S.toServer(r),
                roles: m.default.getRoles(r.id),
                emojis: null !== (i = null === (n = E.default.getGuilds()[r.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== i ? i : null,
                stickers: null !== (s = h.default.getRawStickersByGuild().get(r.id)) && void 0 !== s ? s : null,
                readStates: {}
            });
        return I = {
            guild: e,
            identifyTime: t
        }, a
    }

    function D(e, t) {
        let n = [];
        return null == t || t.forEach(t => {
            if (null == t) return;
            let i = t.user_id;
            null != i && (s(null != e[i], "Missing user[".concat(i, "] in compressed ready payload")), t.user = e[i]), delete t.user_id, n.push(t)
        }), n
    }

    function P(e) {
        let t = v[e];
        return delete v[e], t
    }

    function L(e) {
        var t, n, i, s, r, a, o, l, u, d, c, _;
        let f = P(e.id);
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
            threads: null !== (s = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, g.createChannelRecordFromServer)(t, e.id))) && void 0 !== s ? s : [],
            threadMessages: b(e.threads),
            channels: e.channels.map(t => (t.guild_id = e.id, (0, g.createChannelRecordFromServer)(t, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
        if (null == f) throw T.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
        return {
            id: e.id,
            dataMode: e.data_mode,
            channels: null,
            channelUpdates: {
                writes: null !== (r = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, g.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
                deletes: null !== (a = e.partial_updates.deleted_channel_ids) && void 0 !== a ? a : []
            },
            channelTimestampUpdates: e.channel_updates,
            emojis: null == f.emojis ? null : U(f.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
            emojiUpdates: {
                writes: null !== (o = e.partial_updates.emojis) && void 0 !== o ? o : [],
                deletes: null !== (l = e.partial_updates.deleted_emoji_ids) && void 0 !== l ? l : []
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: null !== (u = e.properties) && void 0 !== u ? u : null,
            roles: S.filterRoleDeletes(e.id, f.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
            stage_instances: e.stage_instances,
            stickers: null == f.stickers ? null : U(f.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
            stickerUpdates: {
                writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
                deletes: null !== (c = e.partial_updates.deleted_sticker_ids) && void 0 !== c ? c : []
            },
            unableToSyncDeletes: e.unable_to_sync_deletes,
            threads: null !== (_ = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, g.createChannelRecordFromServer)(t, e.id))) && void 0 !== _ ? _ : [],
            threadMessages: b(e.threads),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        }
    }

    function M(e, t) {
        var n, i, s, r, a, o, l, u, d, c, _, f;
        if (null == t && (t = P(e.id)), "partial" !== e.data_mode) return {
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
            threads: null !== (r = null === (s = e.threads) || void 0 === s ? void 0 : s.map(t => (0, g.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
            threadMessages: b(e.threads),
            channels: e.channels.map(t => (t.guild_id = e.id, (0, g.createChannelRecordFromServer)(t, e.id))),
            presences: e.presences,
            embedded_activities: e.embedded_activities,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
        if (null == t) throw T.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
        return {
            id: e.id,
            channels: null,
            channelUpdates: {
                writes: null !== (a = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map(t => (0, g.createChannelRecordFromServer)(t, e.id))) && void 0 !== a ? a : [],
                deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
            },
            channelTimestampUpdates: e.channel_updates,
            embedded_activities: e.embedded_activities,
            emojis: null == t.emojis ? null : U(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
            emojiUpdates: {
                writes: null !== (l = e.partial_updates.emojis) && void 0 !== l ? l : [],
                deletes: null !== (u = e.partial_updates.deleted_emoji_ids) && void 0 !== u ? u : []
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            presences: e.presences,
            properties: null !== (d = e.properties) && void 0 !== d ? d : t.properties,
            roles: S.filterRoleDeletes(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
            stage_instances: e.stage_instances,
            stickers: null == t.stickers ? null : U(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
            stickerUpdates: {
                writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
                deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
            },
            unableToSyncDeletes: e.unable_to_sync_deletes,
            threads: null !== (f = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, g.createChannelRecordFromServer)(t, e.id))) && void 0 !== f ? f : [],
            threadMessages: b(e.threads),
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        }
    }

    function b(e) {
        let t = [];
        if (null != e)
            for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
        return t
    }

    function U(e, t, n) {
        t = null != t ? t : [];
        let i = new Set((null != n ? n : []).concat(t.map(e => e.id)));
        return e.filter(e => !i.has(e.id)).concat(t)
    }
}