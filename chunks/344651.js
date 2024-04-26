function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return k
        }
    }), n("653041"), n("47120"), n("789020"), n("411104");
    var i = n("392711"),
        r = n.n(i);
    n("724522");
    var s = n("442837"),
        a = n("570140"),
        o = n("749210"),
        l = n("821849"),
        u = n("232567"),
        d = n("710845"),
        _ = n("292419"),
        c = n("566006"),
        E = n("952537"),
        I = n("218543"),
        T = n("48481"),
        f = n("131704"),
        S = n("209747"),
        h = n("598077"),
        A = n("592125"),
        m = n("271383"),
        N = n("819640"),
        p = n("594174"),
        O = n("979651"),
        R = n("509545"),
        C = n("78839"),
        g = n("936101"),
        L = n("868158"),
        D = n("483012"),
        v = n("955132");
    let M = new d.default("ConnectionStore"),
        y = new D.default(v.socket, (e, t) => {
            var n;
            e = null != e ? e : {
                type: "CHANNEL_UPDATES",
                channels: []
            };
            let i = (0, f.createChannelRecordFromServer)(t),
                r = A.default.getChannel(t.id),
                s = null == r ? void 0 : r.merge({
                    ...i,
                    recipients: r.recipients,
                    bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : r.bitrate
                });
            return e.channels.push(null != s ? s : i), e
        }, e => "CHANNEL_UPDATE" !== e),
        P = new D.default(v.socket, (e, t) => ((e = null == e ? {
            type: "SOUNDBOARD_SOUNDS_RECEIVED",
            updates: []
        } : e).updates.push({
            guildId: t.guild_id,
            sounds: t.soundboard_sounds.map(e => ({
                name: e.name,
                soundId: e.sound_id,
                emojiName: e.emoji_name,
                emojiId: e.emoji_id,
                userId: e.user_id,
                volume: e.volume,
                available: e.available,
                guildId: t.guild_id
            }))
        }), e), e => "SOUNDBOARD_SOUNDS" !== e),
        U = new D.default(v.socket, (e, t) => ((e = null != e ? e : {
            type: "GUILD_MEMBERS_CHUNK_BATCH",
            chunks: []
        }).chunks.push(t), e), e => "GUILD_MEMBERS_CHUNK" !== e),
        b = new D.default(v.socket, (e, t) => ((e = null == e ? {
            type: "PRESENCE_UPDATES",
            updates: []
        } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e),
        G = {};

    function w(e, t) {
        for (let n of e) G[n] = {
            preload: () => null,
            dispatch: t
        }
    }

    function B(e, t, n) {
        for (let i of e) G[i] = {
            preload: t,
            dispatch: n
        }
    }

    function k(e) {
        return G[e]
    }

    function V(e) {
        a.default.dispatch(e).catch(t => v.socket.resetSocketOnDispatchError({
            error: t,
            action: e.type
        }))
    }

    function x(e, t, n) {
        let {
            roles: i,
            nick: s,
            avatar: a,
            avatar_decoration_data: o,
            flags: l,
            premium_since: u,
            pending: d,
            joined_at: _,
            communication_disabled_until: c,
            unusual_dm_activity_until: E
        } = n, I = m.default.getMember(e, t.id);
        (!(null != I && I.nick === s && I.avatar === a && r().isEqual(I.roles, i) && r().isEqual(I.avatarDecoration, o)) || I.premiumSince !== u || I.isPending !== d || I.joinedAt !== _ || I.communicationDisabledUntil !== c || I.flags !== l || I.unusualDMActivityUntil !== E) && V({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: i,
            nick: s,
            avatar: a,
            avatarDecoration: o,
            premiumSince: u,
            isPending: d,
            joinedAt: _,
            communicationDisabledUntil: c,
            unusualDMActivityUntil: E,
            flags: l
        })
    }

    function F(e) {
        let {
            member: t,
            mentions: n,
            author: i,
            guild_id: r
        } = e;
        null != t && null != r && x(r, i, t), null != n && n.forEach(e => {
            if (null != e.member && null != r) {
                let {
                    member: t
                } = e;
                delete e.member, x(r, e, t)
            }
        })
    }

    function H(e) {
        return e.map(e => ({
            sessionId: e.session_id,
            lastModified: e.last_modified,
            status: e.status,
            activities: e.activities,
            active: !!e.active,
            clientInfo: e.client_info,
            broadcast: e.broadcast
        }))
    }

    function Y(e) {
        let {
            guildId: t,
            user: n,
            status: i,
            activities: r,
            clientStatus: s,
            broadcast: a
        } = e;
        b.add({
            guildId: t,
            user: n,
            status: i,
            clientStatus: s,
            activities: r,
            broadcast: a
        })
    }
    B(["INITIAL_GUILD"], e => "full" === e.data_mode ? null : A.ChannelLoader.loadGuildIds([e.id]), e => {
        I.default.initialGuild.measure(() => {
            s.default.Emitter.batched(() => {
                let t = L.hydrateInitialGuild(e, v.socket.identifyStartTime);
                null != p.default.getCurrentUser() && (V({
                    type: "GUILD_CREATE",
                    guild: t
                }), V({
                    type: "VOICE_STATE_UPDATES",
                    voiceStates: t.voice_states.map(e => {
                        var n;
                        return {
                            userId: e.user_id,
                            guildId: t.id,
                            sessionId: e.session_id,
                            channelId: e.channel_id,
                            mute: e.mute,
                            deaf: e.deaf,
                            selfMute: e.self_mute,
                            selfDeaf: e.self_deaf,
                            selfVideo: e.self_video || !1,
                            suppress: e.suppress,
                            selfStream: e.self_stream || !1,
                            requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
                        }
                    })
                }), M.log("Dispatched INITIAL_GUILD ".concat(e.id)))
            })
        })
    }), w(["READY_SUPPLEMENTAL"], e => {
        I.default.readySupplemental.measure(() => {
            s.default.Emitter.batched(() => {
                var t, n;
                e = I.default.hydrateReadySupplemental.measure(() => L.hydrateReadySupplementalPayload(e, v.socket.identifyStartTime));
                let i = e => e.map(e => ({
                        user: e.user,
                        status: e.status,
                        clientStatus: e.client_status,
                        activities: e.activities,
                        broadcast: e.broadcast
                    })),
                    r = e.guilds.filter(e => !0 !== e.unavailable);
                r.forEach(e => {
                    e.presences = i(e.presences || [])
                });
                let s = e.presences ? i(e.presences) : [],
                    a = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(e => (0, f.createChannelRecordFromServer)(e)),
                    o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
                I.default.dispatchReadySupplemental.measure(() => {
                    V({
                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                        guilds: r,
                        presences: s,
                        lazyPrivateChannels: a,
                        gameInvites: o
                    })
                });
                let l = [];
                r.forEach(e => {
                    e.voice_states.forEach(t => {
                        var n;
                        l.push({
                            userId: t.user_id,
                            guildId: e.id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf,
                            selfVideo: t.self_video || !1,
                            suppress: t.suppress,
                            selfStream: t.self_stream || !1,
                            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
                        })
                    })
                }), V({
                    type: "VOICE_STATE_UPDATES",
                    voiceStates: l,
                    initial: !0
                }), v.localVoiceState.update()
            })
        }), setTimeout(() => V({
            type: "POST_CONNECTION_OPEN"
        }), 2e3)
    }), B(["READY"], e => {
        var t;
        let n = L.preloadReadyPayloadData(),
            i = e.guilds.filter(e => {
                var t, n;
                return !e.unavailable && "partial" === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0)
            }).map(e => e.id);
        return Promise.all([n, null !== (t = A.ChannelLoader.loadGuildIds(i)) && void 0 !== t ? t : Promise.resolve()]).then(e => {
            let [t] = e;
            return t
        })
    }, (e, t, n) => {
        if (e.user.bot) {
            V({
                type: "LOGOUT"
            });
            return
        }
        I.default.ready.measure(() => {
            s.default.Emitter.batched(() => {
                let t = (e = I.default.hydrateReady.measure(() => L.hydrateReadyPayloadPrioritized(e, v.socket.identifyStartTime, n))).private_channels.map(e => (0, f.createChannelRecordFromServer)(e)),
                    i = e.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
                    r = e.guilds.filter(e => !0 !== e.unavailable),
                    s = e.guilds.filter(e => !0 === e.geo_restricted);
                r.forEach(e => {
                    e.presences = []
                });
                let a = null == e.user_settings_proto ? void 0 : (0, T.b64ToPreloadedUserSettingsProto)(e.user_settings_proto);
                I.default.dispatchReady.measure(() => {
                    var n;
                    V({
                        type: "CONNECTION_OPEN",
                        sessionId: e.session_id,
                        authSessionIdHash: e.auth_session_id_hash,
                        user: e.user,
                        users: e.users,
                        guilds: r,
                        initialPrivateChannels: t,
                        unavailableGuilds: i,
                        readState: e.read_state,
                        userGuildSettings: e.user_guild_settings,
                        tutorial: e.tutorial,
                        relationships: e.relationships,
                        friendSuggestionCount: e.friend_suggestion_count,
                        presences: e.presences,
                        analyticsToken: e.analytics_token,
                        experiments: e.experiments,
                        connectedAccounts: e.connected_accounts,
                        guildExperiments: e.guild_experiments,
                        requiredAction: e.required_action,
                        consents: e.consents,
                        sessions: H(e.sessions || []),
                        pendingPayments: e.pending_payments,
                        countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
                        guildJoinRequests: e.guild_join_requests || [],
                        userSettingsProto: a,
                        apiCodeVersion: e.api_code_version,
                        auth: e.auth,
                        notificationSettings: {
                            flags: e.notification_settings.flags
                        },
                        geoRestrictedGuilds: s
                    })
                }), null != e.auth_token && V({
                    type: "UPDATE_TOKEN",
                    token: e.auth_token,
                    userId: e.user.id
                }), v.localPresenceState.update(), v.localVoiceState.update()
            })
        })
    }), w(["RESUMED"], () => {
        v.localPresenceState.forceUpdate(), v.localVoiceState.forceUpdate(), V({
            type: "CONNECTION_RESUMED"
        })
    }), w(["TYPING_START"], e => {
        null != e.member && x(e.guild_id, e.member.user, e.member), V({
            type: "TYPING_START",
            channelId: e.channel_id,
            userId: e.user_id
        })
    }), w(["ACTIVITY_START"], e => {
        V({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity
        })
    }), w(["ACTIVITY_USER_ACTION"], e => {
        V({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), B(["MESSAGE_CREATE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        F(e), null != e.author && V({
            type: "MESSAGE_CREATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            message: e,
            optimistic: !1,
            isPushNotification: !1
        })
    }), B(["MESSAGE_UPDATE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        F(e), V({
            type: "MESSAGE_UPDATE",
            guildId: e.guild_id,
            message: e
        })
    }), B(["MESSAGE_DELETE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "MESSAGE_DELETE",
            guildId: e.guild_id,
            id: e.id,
            channelId: e.channel_id
        })
    }), B(["MESSAGE_DELETE_BULK"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "MESSAGE_DELETE_BULK",
            guildId: e.guild_id,
            ids: e.ids,
            channelId: e.channel_id
        })
    }), B(["MESSAGE_ACK"], e => A.ChannelLoader.loadGuildFromChannelId(e.channel_id), e => {
        V({
            type: "MESSAGE_ACK",
            channelId: e.channel_id,
            messageId: e.message_id,
            manual: e.manual,
            newMentionCount: e.mention_count,
            version: e.version
        })
    }), w(["GUILD_FEATURE_ACK"], e => {
        V({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), w(["USER_NON_CHANNEL_ACK"], e => {
        V({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), B(["CHANNEL_PINS_ACK"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "CHANNEL_PINS_ACK",
            channelId: e.channel_id,
            timestamp: e.timestamp,
            version: e.version
        })
    }), B(["CHANNEL_PINS_UPDATE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "CHANNEL_PINS_UPDATE",
            channelId: e.channel_id,
            lastPinTimestamp: e.last_pin_timestamp
        })
    }), B(["CHANNEL_CREATE", "CHANNEL_DELETE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        V({
            type: t,
            channel: (0, f.createChannelRecordFromServer)(e)
        })
    }), w(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        V({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        })
    }), w(["CHANNEL_STATUSES"], (e, t) => {
        V({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        })
    }), B(["CHANNEL_UPDATE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        y.add(e)
    }), B(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        let {
            newly_created: n,
            ...i
        } = e;
        V({
            type: t,
            isNewlyCreated: n,
            channel: (0, f.createChannelRecordFromServer)(i)
        })
    }), B(["THREAD_LIST_SYNC"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "THREAD_LIST_SYNC",
            guildId: e.guild_id,
            threads: e.threads.map(e => {
                let t = A.default.getChannel(e.parent_id);
                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, f.createChannelRecordFromServer)(e)
            }),
            mostRecentMessages: e.most_recent_messages,
            members: e.members ? r().map(e.members, E.default) : void 0,
            channelIds: e.channel_ids
        })
    }), w(["THREAD_MEMBER_UPDATE"], e => {
        V({
            type: "THREAD_MEMBER_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp
        })
    }), w(["THREAD_MEMBERS_UPDATE"], e => {
        var t;
        V({
            type: "THREAD_MEMBERS_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers: null === (t = e.added_members) || void 0 === t ? void 0 : t.map(t => ({
                id: t.id,
                guildId: e.guild_id,
                userId: t.user_id,
                flags: t.flags,
                joinTimestamp: t.join_timestamp
            })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview
        })
    }), w(["FORUM_UNREADS"], e => {
        !e.permission_denied && V({
            type: "FORUM_UNREADS",
            channelId: e.channel_id,
            threads: e.threads.map(e => ({
                threadId: e.thread_id,
                missing: e.missing,
                count: e.count
            }))
        })
    }), w(["SOUNDBOARD_SOUNDS"], e => {
        P.add(e)
    }), w(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = A.default.getBasicChannel(e.channel_id);
        V({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        })
    }), B(["GUILD_CREATE"], e => "full" === e.data_mode ? null : A.ChannelLoader.loadGuildIds([e.id]), e => {
        if (e.unavailable) V({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        });
        else {
            let t = L.hydratePreviouslyUnavailableGuild(e);
            o.default.createGuild(t), V({
                type: "VOICE_STATE_UPDATES",
                voiceStates: t.voice_states.map(e => {
                    var n;
                    return {
                        userId: e.user_id,
                        guildId: t.id,
                        sessionId: e.session_id,
                        channelId: e.channel_id,
                        mute: e.mute,
                        deaf: e.deaf,
                        selfMute: e.self_mute,
                        selfDeaf: e.self_deaf,
                        selfVideo: e.self_video || !1,
                        suppress: e.suppress,
                        selfStream: e.self_stream || !1,
                        requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
                    }
                })
            })
        }
    }), w(["GUILD_UPDATE"], e => {
        V({
            type: "GUILD_UPDATE",
            guild: e
        }), e.unavailable && V({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), w(["GUILD_DELETE"], e => {
        V({
            type: "GUILD_DELETE",
            guild: e
        }), e.geo_restricted ? V({
            type: "GUILD_GEO_RESTRICTED",
            guildId: e.id,
            icon: e.icon,
            name: e.name
        }) : e.unavailable && V({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), w(["GUILD_MEMBERS_CHUNK"], e => {
        s.default.Emitter.batched(() => {
            U.add({
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }), null != e.presences && e.presences.forEach(t => {
                let {
                    user: n,
                    status: i,
                    client_status: r,
                    activities: s,
                    broadcast: a
                } = t;
                return Y({
                    guildId: e.guild_id,
                    user: n,
                    status: i,
                    activities: s,
                    clientStatus: r,
                    broadcast: a
                })
            }), D.default.flush("GUILD_MEMBERS_CHUNK")
        })
    }), w(["THREAD_MEMBER_LIST_UPDATE"], e => {
        s.default.Emitter.batched(() => {
            V({
                type: "THREAD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }), null != e.presences && e.presences.forEach(t => {
                let {
                    user: n,
                    status: i,
                    client_status: r,
                    activities: s,
                    broadcast: a
                } = t;
                return Y({
                    guildId: e.guild_id,
                    user: n,
                    status: i,
                    activities: s,
                    clientStatus: r,
                    broadcast: a
                })
            }), D.default.flush()
        })
    }), w(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
        V({
            type: t,
            guildId: e.guild_id,
            user: e.user,
            avatar: e.avatar,
            avatarDecoration: e.avatar_decoration_data,
            roles: e.roles,
            nick: e.nick,
            premiumSince: e.premium_since,
            isPending: e.pending,
            joinedAt: e.joined_at,
            communicationDisabledUntil: e.communication_disabled_until,
            unusualDMActivityUntil: e.unusual_dm_activity_until,
            flags: e.flags
        })
    }), B(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        V({
            type: t,
            guildId: e.guild_id,
            role: e.role
        })
    }), B(["GUILD_ROLE_DELETE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "GUILD_ROLE_DELETE",
            guildId: e.guild_id,
            roleId: e.role_id,
            version: e.version
        })
    }), w(["GUILD_EMOJIS_UPDATE"], e => {
        V({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis
        })
    }), w(["GUILD_STICKERS_UPDATE"], e => {
        V({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers
        })
    }), w(["GUILD_INTEGRATIONS_UPDATE"], e => {
        V({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id
        })
    }), w(["INTEGRATION_CREATE"], e => {
        V({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id
        })
    }), w(["INTEGRATION_DELETE"], e => {
        V({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id
        })
    }), w(["USER_UPDATE"], e => {
        V({
            type: "CURRENT_USER_UPDATE",
            user: e
        })
    }), w(["USER_SETTINGS_PROTO_UPDATE"], e => {
        let t = (0, T.b64ToProtoWithType)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
                parsed: t,
                wire: e.settings.proto,
                type: e.settings.type
            }), Error("UserSettingsProto must not be a string");
            V({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            })
        }
    }), w(["USER_GUILD_SETTINGS_UPDATE"], e => {
        V({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e]
        })
    }), w(["USER_CONNECTIONS_UPDATE"], () => {
        V({
            type: "USER_CONNECTIONS_UPDATE"
        })
    }), w(["USER_REQUIRED_ACTION_UPDATE"], e => {
        V({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action
        })
    }), w(["USER_NOTE_UPDATE"], e => {
        V({
            type: "USER_NOTE_UPDATE",
            ...e
        })
    }), w(["RELATIONSHIP_ADD"], e => {
        V({
            type: "RELATIONSHIP_ADD",
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname
            },
            shouldNotify: !0 === e.should_notify
        })
    }), w(["RELATIONSHIP_REMOVE"], e => {
        V({
            type: "RELATIONSHIP_REMOVE",
            relationship: e
        })
    }), w(["RELATIONSHIP_UPDATE"], e => {
        V({
            type: "RELATIONSHIP_UPDATE",
            relationship: e
        })
    }), w(["PRESENCE_UPDATE"], e => {
        Y({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            clientStatus: e.client_status,
            broadcast: e.broadcast
        })
    }), w(["PRESENCES_REPLACE"], e => {
        V({
            type: "PRESENCES_REPLACE",
            presences: e
        })
    }), w(["SESSIONS_REPLACE"], e => {
        V({
            type: "SESSIONS_REPLACE",
            sessions: H(e)
        })
    }), w(["VOICE_STATE_UPDATE"], e => {
        var t;
        null != e.member && x(e.guild_id, e.member.user, e.member), V({
            type: "VOICE_STATE_UPDATES",
            voiceStates: [{
                userId: e.user_id,
                guildId: e.guild_id,
                sessionId: e.session_id,
                channelId: e.channel_id,
                mute: e.mute,
                deaf: e.deaf,
                selfMute: e.self_mute,
                selfDeaf: e.self_deaf,
                selfVideo: e.self_video || !1,
                suppress: e.suppress,
                selfStream: e.self_stream || !1,
                requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                oldChannelId: O.default.getUserVoiceChannelId(e.guild_id, e.user_id)
            }]
        })
    }), w(["VOICE_SERVER_UPDATE"], e => {
        V({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        })
    }), w(["CALL_CREATE"], e => {
        V({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            embeddedActivities: e.embedded_activities,
            region: e.region,
            ringing: e.ringing
        });
        let t = e.voice_states;
        null != t && V({
            type: "VOICE_STATE_UPDATES",
            voiceStates: t.map(e => {
                var t;
                return {
                    userId: e.user_id,
                    guildId: null,
                    sessionId: e.session_id,
                    channelId: e.channel_id,
                    mute: e.mute,
                    deaf: e.deaf,
                    selfMute: e.self_mute,
                    selfDeaf: e.self_deaf,
                    selfVideo: e.self_video || !1,
                    suppress: e.suppress,
                    selfStream: e.self_stream || !1,
                    requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null
                }
            })
        })
    }), w(["CALL_UPDATE"], e => {
        V({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        })
    }), w(["CALL_DELETE"], e => {
        V({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable
        })
    }), w(["OAUTH2_TOKEN_REVOKE"], e => {
        V({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token
        })
    }), w(["RECENT_MENTION_DELETE"], e => {
        V({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id
        })
    }), w(["FRIEND_SUGGESTION_CREATE"], e => {
        V({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e
        })
    }), w(["FRIEND_SUGGESTION_DELETE"], e => {
        V({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id
        })
    }), w(["WEBHOOKS_UPDATE"], e => {
        V({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id
        })
    }), w(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        V({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type
        })
    }), w(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        V({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: ""
            },
            reactionType: c.ReactionTypes.VOTE
        })
    }), w(["MESSAGE_REACTION_REMOVE_ALL"], e => {
        V({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), w(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
        V({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        })
    }), w(["MESSAGE_REACTION_ADD_MANY"], e => {
        V({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        })
    }), w(["PAYMENT_UPDATE"], e => {
        V({
            type: "PAYMENT_UPDATE",
            payment: e
        })
    }), w(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        V({
            type: t,
            entitlement: e
        })
    }), w(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        N.default.hasLayers() && (n("355467").fetchPaymentSources(), l.fetchSubscriptionPlansBySKUs(R.default.getFetchedSKUIDs()))
    }), w(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        u.fetchCurrentUser(), N.default.hasLayers() && n("355467").fetchSubscriptions()
    }), w(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
        V({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: S.default.createFromServer(e, C.default.getSubscriptionById(e.subscription_id))
        })
    }), w(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
        V({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: S.default.createFromServer(e, C.default.getSubscriptionById(e.subscription_id))
        })
    }), w(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
        V({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        })
    }), w(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
        V({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id
        })
    }), w(["USER_PAYMENT_CLIENT_ADD"], e => {
        (0, g.getPurchaseTokenHash)().then(t => {
            let n = e.purchase_token_hash;
            n === t && V({
                type: "USER_PAYMENT_CLIENT_ADD",
                purchaseTokenHash: n,
                expiresAt: e.expires_at
            })
        })
    }), w(["GUILD_MEMBER_LIST_UPDATE"], e => {
        s.default.Emitter.batched(() => {
            let t = t => {
                if (null == t.member) return;
                let {
                    member: n
                } = t;
                if (x(e.guild_id, n.user, n), null == n.presence) return;
                let {
                    presence: i
                } = n;
                Y({
                    guildId: e.guild_id,
                    user: i.user,
                    status: i.status,
                    activities: i.activities,
                    clientStatus: i.client_status,
                    broadcast: i.broadcast
                })
            };
            e.ops.forEach(e => {
                let {
                    op: n,
                    items: i,
                    item: r
                } = e;
                switch (n) {
                    case "SYNC":
                        i.forEach(t);
                        break;
                    case "UPDATE":
                    case "INSERT":
                        t(r)
                }
            }), D.default.flush(), V({
                type: "GUILD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                id: e.id,
                ops: e.ops,
                groups: e.groups,
                memberCount: e.member_count,
                onlineCount: e.online_count
            })
        })
    }), w(["GIFT_CODE_UPDATE"], e => {
        V({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code
        })
    }), w(["GIFT_CODE_CREATE"], e => {
        V({
            type: "GIFT_CODE_CREATE",
            giftCode: e
        })
    }), w(["USER_ACHIEVEMENT_UPDATE"], e => {
        V({
            type: "USER_ACHIEVEMENT_UPDATE",
            userAchievement: e
        })
    }), w(["LIBRARY_APPLICATION_UPDATE"], e => {
        V({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e
        })
    }), w(["STREAM_CREATE"], e => {
        V({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), w(["STREAM_SERVER_UPDATE"], e => {
        V({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), w(["STREAM_UPDATE"], e => {
        V({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), w(["STREAM_DELETE"], e => {
        V({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), w(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
        V({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        })
    }), w(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
        V({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e
        })
    }), w(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
        V({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id
        })
    }), w(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
        V({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1
        })
    }), w(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
        V({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum
        })
    }), w(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        V({
            type: t,
            guildId: e.guild_id
        })
    }), w(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
        V({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version
        })
    }), w(["GUILD_JOIN_REQUEST_CREATE"], e => {
        V({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), w(["GUILD_JOIN_REQUEST_UPDATE"], e => {
        V({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), w(["GUILD_JOIN_REQUEST_DELETE"], e => {
        V({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        })
    }), w(["INTERACTION_CREATE"], e => {
        V({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), w(["INTERACTION_SUCCESS"], e => {
        V({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), w(["INTERACTION_FAILURE"], e => {
        V({
            type: "INTERACTION_FAILURE",
            nonce: e.nonce
        })
    }), w(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
        V({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce
        })
    }), w(["INTERACTION_MODAL_CREATE"], e => {
        V({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, _.transformComponents)(e.components),
            nonce: e.nonce
        })
    }), w(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
        V({
            type: "INTERACTION_IFRAME_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            iframePath: e.iframe_path,
            modalSize: e.modal_size,
            nonce: e.nonce
        })
    }), w(["STAGE_INSTANCE_CREATE"], e => {
        V({
            type: "STAGE_INSTANCE_CREATE",
            instance: e
        })
    }), w(["STAGE_INSTANCE_UPDATE"], e => {
        V({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e
        })
    }), w(["STAGE_INSTANCE_DELETE"], e => {
        V({
            type: "STAGE_INSTANCE_DELETE",
            instance: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id
        })
    }), w(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), w(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
        V({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), w(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
        V({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), w(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
        V({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), w(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
        V({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        })
    }), w(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
        V({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        })
    }), w(["VOICE_CHANNEL_EFFECT_SEND"], e => {
        V({
            type: "VOICE_CHANNEL_EFFECT_SEND",
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
            points: e.points,
            streamerId: e.streamer_id,
            lineId: e.line_id,
            emojiHose: e.emoji_hose
        })
    }), w(["GUILD_SOUNDBOARD_SOUND_CREATE"], e => {
        V({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new h.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), w(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
        V({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new h.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), w(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
        V({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id
        })
    }), w(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
        V({
            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map(t => ({
                name: t.name,
                soundId: t.sound_id,
                emojiName: t.emoji_name,
                emojiId: t.emoji_id,
                userId: t.user_id,
                volume: t.volume,
                available: t.available,
                guildId: e.guild_id
            }))
        })
    }), B(["EMBEDDED_ACTIVITY_UPDATE"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "EMBEDDED_ACTIVITY_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            embeddedActivity: e.embedded_activity,
            connections: e.connections,
            updateCode: e.update_code
        })
    }), B(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V({
            type: "EMBEDDED_ACTIVITY_UPDATE_V2",
            applicationId: e.application_id,
            instanceId: e.instance_id,
            location: e.location,
            participants: e.participants
        })
    }), w(["AUTH_SESSION_CHANGE"], e => {
        V({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash
        })
    }), w(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
        V({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        })
    }), w(["DELETED_ENTITY_IDS"], e => {
        V({
            type: "DELETED_ENTITY_IDS",
            ...e
        })
    }), w(["CONSOLE_COMMAND_UPDATE"], e => {
        V({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error
        })
    }), B(["PASSIVE_UPDATE_V1"], e => A.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        var t, n;
        V({
            type: "PASSIVE_UPDATE_V1",
            guildId: e.guild_id,
            members: e.members,
            channels: null === (t = e.channels) || void 0 === t ? void 0 : t.map(e => ({
                id: e.id,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp
            })),
            voiceStates: null === (n = e.voice_states) || void 0 === n ? void 0 : n.map(e => {
                var t;
                return {
                    channelId: e.channel_id,
                    deaf: e.deaf || !1,
                    mute: e.mute || !1,
                    requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                    selfDeaf: e.self_deaf || !1,
                    selfMute: e.self_mute || !1,
                    selfStream: e.self_stream || !1,
                    selfVideo: e.self_video || !1,
                    sessionId: e.session_id,
                    suppress: e.suppress,
                    userId: e.user_id
                }
            })
        })
    }), w(["PRIVATE_CHANNEL_INTEGRATION_CREATE"], e => {
        V({
            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
            integration: e
        })
    }), w(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], e => {
        V({
            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
            integration: e
        })
    }), w(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], e => {
        V({
            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
            channelId: e.channel_id,
            applicationId: e.application_id
        })
    }), w(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
        V({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions
        })
    }), w(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
        V({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        })
    }), w(["SPEED_TEST_CREATE"], e => {
        V({
            type: "SPEED_TEST_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), w(["SPEED_TEST_SERVER_UPDATE"], e => {
        V({
            type: "SPEED_TEST_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), w(["SPEED_TEST_UPDATE"], e => {
        V({
            type: "SPEED_TEST_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), w(["SPEED_TEST_DELETE"], e => {
        V({
            type: "SPEED_TEST_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), w(["LAST_MESSAGES"], e => {
        V({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages
        })
    }), w(["AUTHENTICATOR_UPDATE"], e => {
        V({
            type: "AUTHENTICATOR_UPDATE",
            credential: e
        })
    }), w(["AUTHENTICATOR_CREATE"], e => {
        V({
            type: "AUTHENTICATOR_CREATE",
            credential: e
        })
    }), w(["AUTHENTICATOR_DELETE"], e => {
        V({
            type: "AUTHENTICATOR_DELETE",
            credential: e
        })
    }), w(["NOTIFICATION_SETTINGS_UPDATE"], e => {
        V({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: {
                flags: e.flags
            }
        })
    }), w(["GAME_INVITE_CREATE"], e => {
        V({
            type: "GAME_INVITE_CREATE",
            gameInvite: e
        })
    }), w(["GAME_INVITE_DELETE"], e => {
        V({
            type: "GAME_INVITE_DELETE",
            inviteId: e.invite_id
        })
    }), w(["GAME_INVITE_DELETE_MANY"], e => {
        V({
            type: "GAME_INVITE_DELETE_MANY",
            inviteIds: e.invite_ids
        })
    }), w(["CONVERSATION_SUMMARY_UPDATE"], e => {
        V({
            type: "CONVERSATION_SUMMARY_UPDATE",
            ...e
        })
    }), w(["PREMIUM_MARKETING_PREVIEW"], e => {
        V({
            type: "PREMIUM_MARKETING_PREVIEW",
            properties: e.properties
        })
    }), w(["USER_APPLICATION_UPDATE"], e => {
        V({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id
        })
    }), w(["USER_APPLICATION_REMOVE"], e => {
        V({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id
        })
    }), w(["DM_SETTINGS_UPSELL_SHOW"], e => {
        V({
            type: "DM_SETTINGS_UPSELL_SHOW",
            guildId: e.guild_id
        })
    })
}