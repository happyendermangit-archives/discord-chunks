function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
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
        _ = n("566006"),
        c = n("952537"),
        E = n("218543"),
        I = n("48481"),
        T = n("131704"),
        f = n("209747"),
        S = n("598077"),
        h = n("592125"),
        A = n("271383"),
        m = n("819640"),
        N = n("594174"),
        p = n("979651"),
        O = n("509545"),
        R = n("78839"),
        C = n("936101"),
        g = n("868158"),
        L = n("483012"),
        D = n("955132");
    let v = new d.default("ConnectionStore"),
        M = new L.default(D.socket, (e, t) => {
            var n;
            e = null != e ? e : {
                type: "CHANNEL_UPDATES",
                channels: []
            };
            let i = (0, T.createChannelRecordFromServer)(t),
                r = h.default.getChannel(t.id),
                s = null == r ? void 0 : r.merge({
                    ...i,
                    recipients: r.recipients,
                    bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : r.bitrate
                });
            return e.channels.push(null != s ? s : i), e
        }, e => "CHANNEL_UPDATE" !== e),
        y = new L.default(D.socket, (e, t) => ((e = null == e ? {
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
        P = new L.default(D.socket, (e, t) => ((e = null == e ? {
            type: "PRESENCE_UPDATES",
            updates: []
        } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e),
        U = {};

    function b(e, t) {
        for (let n of e) U[n] = {
            preload: () => null,
            dispatch: t
        }
    }

    function G(e, t, n) {
        for (let i of e) U[i] = {
            preload: t,
            dispatch: n
        }
    }

    function w(e) {
        return U[e]
    }

    function B(e) {
        a.default.dispatch(e).catch(t => D.socket.resetSocketOnDispatchError({
            error: t,
            action: e.type
        }))
    }

    function k(e, t, n) {
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
        } = n, I = A.default.getMember(e, t.id);
        (!(null != I && I.nick === s && I.avatar === a && r().isEqual(I.roles, i) && r().isEqual(I.avatarDecoration, o)) || I.premiumSince !== u || I.isPending !== d || I.joinedAt !== _ || I.communicationDisabledUntil !== c || I.flags !== l || I.unusualDMActivityUntil !== E) && B({
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

    function V(e) {
        let {
            member: t,
            mentions: n,
            author: i,
            guild_id: r
        } = e;
        null != t && null != r && k(r, i, t), null != n && n.forEach(e => {
            if (null != e.member && null != r) {
                let {
                    member: t
                } = e;
                delete e.member, k(r, e, t)
            }
        })
    }

    function F(e) {
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

    function x(e) {
        let {
            guildId: t,
            user: n,
            status: i,
            activities: r,
            clientStatus: s,
            broadcast: a
        } = e;
        P.add({
            guildId: t,
            user: n,
            status: i,
            clientStatus: s,
            activities: r,
            broadcast: a
        })
    }
    G(["INITIAL_GUILD"], e => "full" === e.data_mode ? null : h.ChannelLoader.loadGuildIds([e.id]), e => {
        E.default.initialGuild.measure(() => {
            s.default.Emitter.batched(() => {
                let t = g.hydrateInitialGuild(e, D.socket.identifyStartTime);
                null != N.default.getCurrentUser() && (B({
                    type: "GUILD_CREATE",
                    guild: t
                }), B({
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
                }), v.log("Dispatched INITIAL_GUILD ".concat(e.id)))
            })
        })
    }), b(["READY_SUPPLEMENTAL"], e => {
        E.default.readySupplemental.measure(() => {
            s.default.Emitter.batched(() => {
                var t, n;
                e = E.default.hydrateReadySupplemental.measure(() => g.hydrateReadySupplementalPayload(e, D.socket.identifyStartTime));
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
                    a = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(e => (0, T.createChannelRecordFromServer)(e)),
                    o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
                E.default.dispatchReadySupplemental.measure(() => {
                    B({
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
                }), B({
                    type: "VOICE_STATE_UPDATES",
                    voiceStates: l,
                    initial: !0
                }), D.localVoiceState.update()
            })
        }), setTimeout(() => B({
            type: "POST_CONNECTION_OPEN"
        }), 2e3)
    }), G(["READY"], e => {
        var t;
        let n = g.preloadReadyPayloadData(),
            i = e.guilds.filter(e => {
                var t, n;
                return !e.unavailable && "partial" === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0)
            }).map(e => e.id);
        return Promise.all([n, null !== (t = h.ChannelLoader.loadGuildIds(i)) && void 0 !== t ? t : Promise.resolve()]).then(e => {
            let [t] = e;
            return t
        })
    }, (e, t, n) => {
        if (e.user.bot) {
            B({
                type: "LOGOUT"
            });
            return
        }
        E.default.ready.measure(() => {
            s.default.Emitter.batched(() => {
                let t = (e = E.default.hydrateReady.measure(() => g.hydrateReadyPayloadPrioritized(e, D.socket.identifyStartTime, n))).private_channels.map(e => (0, T.createChannelRecordFromServer)(e)),
                    i = e.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
                    r = e.guilds.filter(e => !0 !== e.unavailable),
                    s = e.guilds.filter(e => !0 === e.geo_restricted);
                r.forEach(e => {
                    e.presences = []
                });
                let a = null == e.user_settings_proto ? void 0 : (0, I.b64ToPreloadedUserSettingsProto)(e.user_settings_proto);
                E.default.dispatchReady.measure(() => {
                    var n;
                    B({
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
                        sessions: F(e.sessions || []),
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
                }), null != e.auth_token && B({
                    type: "UPDATE_TOKEN",
                    token: e.auth_token,
                    userId: e.user.id
                }), D.localPresenceState.update(), D.localVoiceState.update()
            })
        })
    }), b(["RESUMED"], () => {
        D.localPresenceState.forceUpdate(), D.localVoiceState.forceUpdate(), B({
            type: "CONNECTION_RESUMED"
        })
    }), b(["TYPING_START"], e => {
        null != e.member && k(e.guild_id, e.member.user, e.member), B({
            type: "TYPING_START",
            channelId: e.channel_id,
            userId: e.user_id
        })
    }), b(["ACTIVITY_START"], e => {
        B({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity
        })
    }), b(["ACTIVITY_USER_ACTION"], e => {
        B({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), G(["MESSAGE_CREATE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V(e), null != e.author && B({
            type: "MESSAGE_CREATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            message: e,
            optimistic: !1,
            isPushNotification: !1
        })
    }), G(["MESSAGE_UPDATE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V(e), B({
            type: "MESSAGE_UPDATE",
            guildId: e.guild_id,
            message: e
        })
    }), G(["MESSAGE_DELETE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "MESSAGE_DELETE",
            guildId: e.guild_id,
            id: e.id,
            channelId: e.channel_id
        })
    }), G(["MESSAGE_DELETE_BULK"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "MESSAGE_DELETE_BULK",
            guildId: e.guild_id,
            ids: e.ids,
            channelId: e.channel_id
        })
    }), G(["MESSAGE_ACK"], e => h.ChannelLoader.loadGuildFromChannelId(e.channel_id), e => {
        B({
            type: "MESSAGE_ACK",
            channelId: e.channel_id,
            messageId: e.message_id,
            manual: e.manual,
            newMentionCount: e.mention_count,
            version: e.version
        })
    }), b(["GUILD_FEATURE_ACK"], e => {
        B({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), b(["USER_NON_CHANNEL_ACK"], e => {
        B({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), G(["CHANNEL_PINS_ACK"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "CHANNEL_PINS_ACK",
            channelId: e.channel_id,
            timestamp: e.timestamp,
            version: e.version
        })
    }), G(["CHANNEL_PINS_UPDATE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "CHANNEL_PINS_UPDATE",
            channelId: e.channel_id,
            lastPinTimestamp: e.last_pin_timestamp
        })
    }), G(["CHANNEL_CREATE", "CHANNEL_DELETE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        B({
            type: t,
            channel: (0, T.createChannelRecordFromServer)(e)
        })
    }), b(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        B({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        })
    }), b(["CHANNEL_STATUSES"], (e, t) => {
        B({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        })
    }), G(["CHANNEL_UPDATE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        M.add(e)
    }), G(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        let {
            newly_created: n,
            ...i
        } = e;
        B({
            type: t,
            isNewlyCreated: n,
            channel: (0, T.createChannelRecordFromServer)(i)
        })
    }), G(["THREAD_LIST_SYNC"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "THREAD_LIST_SYNC",
            guildId: e.guild_id,
            threads: e.threads.map(e => {
                let t = h.default.getChannel(e.parent_id);
                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, T.createChannelRecordFromServer)(e)
            }),
            mostRecentMessages: e.most_recent_messages,
            members: e.members ? r().map(e.members, c.default) : void 0,
            channelIds: e.channel_ids
        })
    }), b(["THREAD_MEMBER_UPDATE"], e => {
        B({
            type: "THREAD_MEMBER_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp
        })
    }), b(["THREAD_MEMBERS_UPDATE"], e => {
        var t;
        B({
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
    }), b(["FORUM_UNREADS"], e => {
        !e.permission_denied && B({
            type: "FORUM_UNREADS",
            channelId: e.channel_id,
            threads: e.threads.map(e => ({
                threadId: e.thread_id,
                missing: e.missing,
                count: e.count
            }))
        })
    }), b(["SOUNDBOARD_SOUNDS"], e => {
        y.add(e)
    }), b(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = h.default.getBasicChannel(e.channel_id);
        B({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        })
    }), G(["GUILD_CREATE"], e => "full" === e.data_mode ? null : h.ChannelLoader.loadGuildIds([e.id]), e => {
        if (e.unavailable) B({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        });
        else {
            let t = g.hydratePreviouslyUnavailableGuild(e);
            o.default.createGuild(t), B({
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
    }), b(["GUILD_UPDATE"], e => {
        B({
            type: "GUILD_UPDATE",
            guild: e
        }), e.unavailable && B({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), b(["GUILD_DELETE"], e => {
        B({
            type: "GUILD_DELETE",
            guild: e
        }), e.geo_restricted ? B({
            type: "GUILD_GEO_RESTRICTED",
            guildId: e.id,
            icon: e.icon,
            name: e.name
        }) : e.unavailable && B({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), b(["GUILD_MEMBERS_CHUNK"], e => {
        s.default.Emitter.batched(() => {
            B({
                type: "GUILD_MEMBERS_CHUNK",
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
                return x({
                    guildId: e.guild_id,
                    user: n,
                    status: i,
                    activities: s,
                    clientStatus: r,
                    broadcast: a
                })
            }), L.default.flush()
        })
    }), b(["THREAD_MEMBER_LIST_UPDATE"], e => {
        s.default.Emitter.batched(() => {
            B({
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
                return x({
                    guildId: e.guild_id,
                    user: n,
                    status: i,
                    activities: s,
                    clientStatus: r,
                    broadcast: a
                })
            }), L.default.flush()
        })
    }), b(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
        B({
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
    }), G(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        B({
            type: t,
            guildId: e.guild_id,
            role: e.role
        })
    }), G(["GUILD_ROLE_DELETE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "GUILD_ROLE_DELETE",
            guildId: e.guild_id,
            roleId: e.role_id,
            version: e.version
        })
    }), b(["GUILD_EMOJIS_UPDATE"], e => {
        B({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis
        })
    }), b(["GUILD_STICKERS_UPDATE"], e => {
        B({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers
        })
    }), b(["GUILD_INTEGRATIONS_UPDATE"], e => {
        B({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id
        })
    }), b(["INTEGRATION_CREATE"], e => {
        B({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id
        })
    }), b(["INTEGRATION_DELETE"], e => {
        B({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id
        })
    }), b(["USER_UPDATE"], e => {
        B({
            type: "CURRENT_USER_UPDATE",
            user: e
        })
    }), b(["USER_SETTINGS_PROTO_UPDATE"], e => {
        let t = (0, I.b64ToProtoWithType)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
                parsed: t,
                wire: e.settings.proto,
                type: e.settings.type
            }), Error("UserSettingsProto must not be a string");
            B({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            })
        }
    }), b(["USER_GUILD_SETTINGS_UPDATE"], e => {
        B({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e]
        })
    }), b(["USER_CONNECTIONS_UPDATE"], () => {
        B({
            type: "USER_CONNECTIONS_UPDATE"
        })
    }), b(["USER_REQUIRED_ACTION_UPDATE"], e => {
        B({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action
        })
    }), b(["USER_NOTE_UPDATE"], e => {
        B({
            type: "USER_NOTE_UPDATE",
            ...e
        })
    }), b(["RELATIONSHIP_ADD"], e => {
        B({
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
    }), b(["RELATIONSHIP_REMOVE"], e => {
        B({
            type: "RELATIONSHIP_REMOVE",
            relationship: e
        })
    }), b(["RELATIONSHIP_UPDATE"], e => {
        B({
            type: "RELATIONSHIP_UPDATE",
            relationship: e
        })
    }), b(["PRESENCE_UPDATE"], e => {
        x({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            clientStatus: e.client_status,
            broadcast: e.broadcast
        })
    }), b(["PRESENCES_REPLACE"], e => {
        B({
            type: "PRESENCES_REPLACE",
            presences: e
        })
    }), b(["SESSIONS_REPLACE"], e => {
        B({
            type: "SESSIONS_REPLACE",
            sessions: F(e)
        })
    }), b(["VOICE_STATE_UPDATE"], e => {
        var t;
        null != e.member && k(e.guild_id, e.member.user, e.member), B({
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
                oldChannelId: p.default.getUserVoiceChannelId(e.guild_id, e.user_id)
            }]
        })
    }), b(["VOICE_SERVER_UPDATE"], e => {
        B({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        })
    }), b(["CALL_CREATE"], e => {
        B({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            embeddedActivities: e.embedded_activities,
            region: e.region,
            ringing: e.ringing
        });
        let t = e.voice_states;
        null != t && B({
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
    }), b(["CALL_UPDATE"], e => {
        B({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        })
    }), b(["CALL_DELETE"], e => {
        B({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable
        })
    }), b(["OAUTH2_TOKEN_REVOKE"], e => {
        B({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token
        })
    }), b(["RECENT_MENTION_DELETE"], e => {
        B({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id
        })
    }), b(["FRIEND_SUGGESTION_CREATE"], e => {
        B({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e
        })
    }), b(["FRIEND_SUGGESTION_DELETE"], e => {
        B({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id
        })
    }), b(["WEBHOOKS_UPDATE"], e => {
        B({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id
        })
    }), b(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        B({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type
        })
    }), b(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        B({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: ""
            },
            reactionType: _.ReactionTypes.VOTE
        })
    }), b(["MESSAGE_REACTION_REMOVE_ALL"], e => {
        B({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), b(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
        B({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        })
    }), b(["MESSAGE_REACTION_ADD_MANY"], e => {
        B({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        })
    }), b(["PAYMENT_UPDATE"], e => {
        B({
            type: "PAYMENT_UPDATE",
            payment: e
        })
    }), b(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        B({
            type: t,
            entitlement: e
        })
    }), b(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        m.default.hasLayers() && (n("355467").fetchPaymentSources(), l.fetchSubscriptionPlansBySKUs(O.default.getFetchedSKUIDs()))
    }), b(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        u.fetchCurrentUser(), m.default.hasLayers() && n("355467").fetchSubscriptions()
    }), b(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
        B({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: f.default.createFromServer(e, R.default.getSubscriptionById(e.subscription_id))
        })
    }), b(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
        B({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: f.default.createFromServer(e, R.default.getSubscriptionById(e.subscription_id))
        })
    }), b(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
        B({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        })
    }), b(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
        B({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id
        })
    }), b(["USER_PAYMENT_CLIENT_ADD"], e => {
        (0, C.getPurchaseTokenHash)().then(t => {
            let n = e.purchase_token_hash;
            n === t && B({
                type: "USER_PAYMENT_CLIENT_ADD",
                purchaseTokenHash: n,
                expiresAt: e.expires_at
            })
        })
    }), b(["GUILD_MEMBER_LIST_UPDATE"], e => {
        s.default.Emitter.batched(() => {
            let t = t => {
                if (null == t.member) return;
                let {
                    member: n
                } = t;
                if (k(e.guild_id, n.user, n), null == n.presence) return;
                let {
                    presence: i
                } = n;
                x({
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
            }), L.default.flush(), B({
                type: "GUILD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                id: e.id,
                ops: e.ops,
                groups: e.groups,
                memberCount: e.member_count,
                onlineCount: e.online_count
            })
        })
    }), b(["GIFT_CODE_UPDATE"], e => {
        B({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code
        })
    }), b(["GIFT_CODE_CREATE"], e => {
        B({
            type: "GIFT_CODE_CREATE",
            giftCode: e
        })
    }), b(["USER_ACHIEVEMENT_UPDATE"], e => {
        B({
            type: "USER_ACHIEVEMENT_UPDATE",
            userAchievement: e
        })
    }), b(["LIBRARY_APPLICATION_UPDATE"], e => {
        B({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e
        })
    }), b(["STREAM_CREATE"], e => {
        B({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), b(["STREAM_SERVER_UPDATE"], e => {
        B({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), b(["STREAM_UPDATE"], e => {
        B({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), b(["STREAM_DELETE"], e => {
        B({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), b(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
        B({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        })
    }), b(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
        B({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e
        })
    }), b(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
        B({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id
        })
    }), b(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
        B({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1
        })
    }), b(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
        B({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum
        })
    }), b(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        B({
            type: t,
            guildId: e.guild_id
        })
    }), b(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
        B({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version
        })
    }), b(["GUILD_JOIN_REQUEST_CREATE"], e => {
        B({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), b(["GUILD_JOIN_REQUEST_UPDATE"], e => {
        B({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), b(["GUILD_JOIN_REQUEST_DELETE"], e => {
        B({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        })
    }), b(["INTERACTION_CREATE"], e => {
        B({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), b(["INTERACTION_SUCCESS"], e => {
        B({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), b(["INTERACTION_FAILURE"], e => {
        B({
            type: "INTERACTION_FAILURE",
            nonce: e.nonce
        })
    }), b(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
        B({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce
        })
    }), b(["INTERACTION_MODAL_CREATE"], e => {
        B({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: e.components,
            nonce: e.nonce
        })
    }), b(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
        B({
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
    }), b(["STAGE_INSTANCE_CREATE"], e => {
        B({
            type: "STAGE_INSTANCE_CREATE",
            instance: e
        })
    }), b(["STAGE_INSTANCE_UPDATE"], e => {
        B({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e
        })
    }), b(["STAGE_INSTANCE_DELETE"], e => {
        B({
            type: "STAGE_INSTANCE_DELETE",
            instance: e
        })
    }), b(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e
        })
    }), b(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e
        })
    }), b(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e
        })
    }), b(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e
        })
    }), b(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e
        })
    }), b(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e
        })
    }), b(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id
        })
    }), b(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), b(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
        B({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), b(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
        B({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), b(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
        B({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), b(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
        B({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        })
    }), b(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
        B({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        })
    }), b(["VOICE_CHANNEL_EFFECT_SEND"], e => {
        B({
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
    }), b(["GUILD_SOUNDBOARD_SOUND_CREATE"], e => {
        B({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new S.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), b(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
        B({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new S.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), b(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
        B({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id
        })
    }), b(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
        B({
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
    }), G(["EMBEDDED_ACTIVITY_UPDATE"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "EMBEDDED_ACTIVITY_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            embeddedActivity: e.embedded_activity,
            connections: e.connections,
            updateCode: e.update_code
        })
    }), G(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        B({
            type: "EMBEDDED_ACTIVITY_UPDATE_V2",
            applicationId: e.application_id,
            instanceId: e.instance_id,
            location: e.location,
            participants: e.participants
        })
    }), b(["AUTH_SESSION_CHANGE"], e => {
        B({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash
        })
    }), b(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
        B({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        })
    }), b(["DELETED_ENTITY_IDS"], e => {
        B({
            type: "DELETED_ENTITY_IDS",
            ...e
        })
    }), b(["CONSOLE_COMMAND_UPDATE"], e => {
        B({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error
        })
    }), G(["PASSIVE_UPDATE_V1"], e => h.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        var t, n;
        B({
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
    }), b(["PRIVATE_CHANNEL_INTEGRATION_CREATE"], e => {
        B({
            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
            integration: e
        })
    }), b(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], e => {
        B({
            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
            integration: e
        })
    }), b(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], e => {
        B({
            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
            channelId: e.channel_id,
            applicationId: e.application_id
        })
    }), b(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
        B({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions
        })
    }), b(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
        B({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        })
    }), b(["SPEED_TEST_CREATE"], e => {
        B({
            type: "SPEED_TEST_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), b(["SPEED_TEST_SERVER_UPDATE"], e => {
        B({
            type: "SPEED_TEST_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), b(["SPEED_TEST_UPDATE"], e => {
        B({
            type: "SPEED_TEST_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), b(["SPEED_TEST_DELETE"], e => {
        B({
            type: "SPEED_TEST_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), b(["LAST_MESSAGES"], e => {
        B({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages
        })
    }), b(["AUTHENTICATOR_UPDATE"], e => {
        B({
            type: "AUTHENTICATOR_UPDATE",
            credential: e
        })
    }), b(["AUTHENTICATOR_CREATE"], e => {
        B({
            type: "AUTHENTICATOR_CREATE",
            credential: e
        })
    }), b(["AUTHENTICATOR_DELETE"], e => {
        B({
            type: "AUTHENTICATOR_DELETE",
            credential: e
        })
    }), b(["NOTIFICATION_SETTINGS_UPDATE"], e => {
        B({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: {
                flags: e.flags
            }
        })
    }), b(["GAME_INVITE_CREATE"], e => {
        B({
            type: "GAME_INVITE_CREATE",
            gameInvite: e
        })
    }), b(["GAME_INVITE_DELETE"], e => {
        B({
            type: "GAME_INVITE_DELETE",
            inviteId: e.invite_id
        })
    }), b(["GAME_INVITE_DELETE_MANY"], e => {
        B({
            type: "GAME_INVITE_DELETE_MANY",
            inviteIds: e.invite_ids
        })
    }), b(["CONVERSATION_SUMMARY_UPDATE"], e => {
        B({
            type: "CONVERSATION_SUMMARY_UPDATE",
            ...e
        })
    }), b(["PREMIUM_MARKETING_PREVIEW"], e => {
        B({
            type: "PREMIUM_MARKETING_PREVIEW",
            properties: e.properties
        })
    }), b(["USER_APPLICATION_UPDATE"], e => {
        B({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id
        })
    }), b(["USER_APPLICATION_REMOVE"], e => {
        B({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id
        })
    }), b(["DM_SETTINGS_UPSELL_SHOW"], e => {
        B({
            type: "DM_SETTINGS_UPSELL_SHOW",
            guildId: e.guild_id
        })
    })
}