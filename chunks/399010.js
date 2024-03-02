function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return U
        }
    }), n("424973"), n("222007"), n("702976"), n("70102");
    var s = n("917351"),
        i = n.n(s);
    n("576863");
    var r = n("446674"),
        a = n("913144"),
        o = n("851387"),
        d = n("775433"),
        u = n("327037"),
        l = n("605250"),
        f = n("875978"),
        _ = n("25932"),
        c = n("410912"),
        g = n("116949"),
        m = n("233069"),
        h = n("522308"),
        v = n("766274"),
        E = n("42203"),
        p = n("26989"),
        y = n("778588"),
        T = n("260320"),
        C = n("697218"),
        I = n("800762"),
        S = n("10514"),
        A = n("521012"),
        D = n("224400"),
        N = n("390946"),
        O = n("509065"),
        P = n("518916");
    let b = new l.default("ConnectionStore"),
        V = new O.default(P.socket, (e, t) => {
            var n;
            e = null != e ? e : {
                type: "CHANNEL_UPDATES",
                channels: []
            };
            let s = (0, m.createChannelRecordFromServer)(t),
                i = E.default.getChannel(t.id),
                r = null == i ? void 0 : i.merge({
                    ...s,
                    recipients: i.recipients,
                    bitrate: null !== (n = s.bitrate) && void 0 !== n ? n : i.bitrate
                });
            return e.channels.push(null != r ? r : s), e
        }, e => "CHANNEL_UPDATE" !== e),
        R = new O.default(P.socket, (e, t) => ((e = null == e ? {
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
        k = new O.default(P.socket, (e, t) => ((e = null == e ? {
            type: "PRESENCE_UPDATES",
            updates: []
        } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e),
        M = {};

    function w(e, t) {
        for (let n of e) M[n] = {
            preload: () => null,
            dispatch: t
        }
    }

    function L(e, t, n) {
        for (let s of e) M[s] = {
            preload: t,
            dispatch: n
        }
    }

    function U(e) {
        return M[e]
    }

    function G(e) {
        a.default.dispatch(e).catch(t => P.socket.resetSocketOnDispatchError({
            error: t,
            action: e.type
        }))
    }

    function F(e, t, n) {
        let {
            roles: s,
            nick: r,
            avatar: a,
            avatar_decoration_data: o,
            flags: d,
            premium_since: u,
            pending: l,
            joined_at: f,
            communication_disabled_until: _,
            unusual_dm_activity_until: c
        } = n, g = p.default.getMember(e, t.id);
        (!(null != g && g.nick === r && g.avatar === a && i.isEqual(g.roles, s) && i.isEqual(g.avatarDecoration, o)) || g.premiumSince !== u || g.isPending !== l || g.joinedAt !== f || g.communicationDisabledUntil !== _ || g.flags !== d || g.unusualDMActivityUntil !== c) && G({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: s,
            nick: r,
            avatar: a,
            avatarDecoration: o,
            premiumSince: u,
            isPending: l,
            joinedAt: f,
            communicationDisabledUntil: _,
            unusualDMActivityUntil: c,
            flags: d
        })
    }

    function H(e) {
        let {
            member: t,
            mentions: n,
            author: s,
            guild_id: i
        } = e;
        null != t && null != i && F(i, s, t), null != n && n.forEach(e => {
            if (null != e.member && null != i) {
                let {
                    member: t
                } = e;
                delete e.member, F(i, e, t)
            }
        })
    }

    function x(e) {
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

    function B() {
        P.socket.isSessionEstablished() && T.default.getPendingLobbies().forEach(e => {
            P.socket.lobbyConnect(e.id, e.secret)
        })
    }

    function Y(e) {
        let {
            guildId: t,
            user: n,
            status: s,
            activities: i,
            clientStatus: r,
            broadcast: a
        } = e;
        k.add({
            guildId: t,
            user: n,
            status: s,
            clientStatus: r,
            activities: i,
            broadcast: a
        })
    }
    L(["INITIAL_GUILD"], e => "full" === e.data_mode ? null : E.ChannelLoader.loadGuildIds([e.id]), e => {
        c.default.initialGuild.measure(() => {
            r.default.Emitter.batched(() => {
                let t = N.hydrateInitialGuild(e, P.socket.identifyStartTime);
                null != C.default.getCurrentUser() && (G({
                    type: "GUILD_CREATE",
                    guild: t
                }), G({
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
                }), b.log("Dispatched INITIAL_GUILD ".concat(e.id)))
            })
        })
    }), w(["READY_SUPPLEMENTAL"], e => {
        c.default.readySupplemental.measure(() => {
            r.default.Emitter.batched(() => {
                var t, n;
                e = c.default.hydrateReadySupplemental.measure(() => N.hydrateReadySupplementalPayload(e, P.socket.identifyStartTime));
                let s = e => e.map(e => ({
                        user: e.user,
                        status: e.status,
                        clientStatus: e.client_status,
                        activities: e.activities,
                        broadcast: e.broadcast
                    })),
                    i = e.guilds.filter(e => !0 !== e.unavailable);
                i.forEach(e => {
                    e.presences = s(e.presences || [])
                });
                let r = e.presences ? s(e.presences) : [],
                    a = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(e => (0, m.createChannelRecordFromServer)(e)),
                    o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
                c.default.dispatchReadySupplemental.measure(() => {
                    G({
                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                        guilds: i,
                        presences: r,
                        lazyPrivateChannels: a,
                        gameInvites: o
                    })
                });
                let d = [];
                i.forEach(e => {
                    e.voice_states.forEach(t => {
                        var n;
                        d.push({
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
                }), G({
                    type: "VOICE_STATE_UPDATES",
                    voiceStates: d,
                    initial: !0
                }), P.localVoiceState.update(), P.localLobbyVoiceStates.update({}, !0)
            })
        }), setTimeout(() => G({
            type: "POST_CONNECTION_OPEN"
        }), 2e3)
    }), L(["READY"], e => {
        var t;
        let n = N.preloadReadyPayloadData(),
            s = e.guilds,
            i = s.filter(e => {
                var t, n;
                return !e.unavailable && "partial" === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0)
            }).map(e => e.id),
            r = null !== (t = E.ChannelLoader.loadGuildIds(i)) && void 0 !== t ? t : Promise.resolve();
        return Promise.all([n, r]).then(e => {
            let [t] = e;
            return t
        })
    }, (e, t, n) => {
        if (e.user.bot) {
            G({
                type: "LOGOUT"
            });
            return
        }
        c.default.ready.measure(() => {
            r.default.Emitter.batched(() => {
                e = c.default.hydrateReady.measure(() => N.hydrateReadyPayloadPrioritized(e, P.socket.identifyStartTime, n));
                let t = e.private_channels.map(e => (0, m.createChannelRecordFromServer)(e)),
                    s = e.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
                    i = e.guilds.filter(e => !0 !== e.unavailable),
                    r = e.guilds.filter(e => !0 === e.geo_restricted);
                i.forEach(e => {
                    e.presences = []
                });
                let a = null == e.user_settings_proto ? void 0 : (0, g.b64ToPreloadedUserSettingsProto)(e.user_settings_proto);
                c.default.dispatchReady.measure(() => {
                    var n;
                    G({
                        type: "CONNECTION_OPEN",
                        sessionId: e.session_id,
                        authSessionIdHash: e.auth_session_id_hash,
                        user: e.user,
                        users: e.users,
                        guilds: i,
                        initialPrivateChannels: t,
                        unavailableGuilds: s,
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
                        sessions: x(e.sessions || []),
                        pendingPayments: e.pending_payments,
                        countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
                        guildJoinRequests: e.guild_join_requests || [],
                        userSettingsProto: a,
                        apiCodeVersion: e.api_code_version,
                        auth: e.auth,
                        notificationSettings: {
                            flags: e.notification_settings.flags
                        },
                        geoRestrictedGuilds: r
                    })
                }), null != e.auth_token && G({
                    type: "UPDATE_TOKEN",
                    token: e.auth_token,
                    userId: e.user.id
                }), P.localPresenceState.update(), P.localVoiceState.update(), P.localLobbyVoiceStates.update(), B()
            })
        })
    }), w(["RESUMED"], () => {
        P.localPresenceState.forceUpdate(), P.localVoiceState.forceUpdate(), P.localLobbyVoiceStates.forceUpdate(), B(), G({
            type: "CONNECTION_RESUMED"
        })
    }), w(["TYPING_START"], e => {
        null != e.member && F(e.guild_id, e.member.user, e.member), G({
            type: "TYPING_START",
            channelId: e.channel_id,
            userId: e.user_id
        })
    }), w(["ACTIVITY_START"], e => {
        G({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity
        })
    }), w(["ACTIVITY_USER_ACTION"], e => {
        G({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), L(["MESSAGE_CREATE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        H(e), null != e.author && G({
            type: "MESSAGE_CREATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            message: e,
            optimistic: !1,
            isPushNotification: !1
        })
    }), L(["MESSAGE_UPDATE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        H(e), G({
            type: "MESSAGE_UPDATE",
            guildId: e.guild_id,
            message: e
        })
    }), L(["MESSAGE_DELETE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "MESSAGE_DELETE",
            guildId: e.guild_id,
            id: e.id,
            channelId: e.channel_id
        })
    }), L(["MESSAGE_DELETE_BULK"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "MESSAGE_DELETE_BULK",
            guildId: e.guild_id,
            ids: e.ids,
            channelId: e.channel_id
        })
    }), L(["MESSAGE_ACK"], e => E.ChannelLoader.loadGuildFromChannelId(e.channel_id), e => {
        G({
            type: "MESSAGE_ACK",
            channelId: e.channel_id,
            messageId: e.message_id,
            manual: e.manual,
            newMentionCount: e.mention_count,
            version: e.version
        })
    }), w(["GUILD_FEATURE_ACK"], e => {
        G({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), w(["USER_NON_CHANNEL_ACK"], e => {
        G({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), L(["CHANNEL_PINS_ACK"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "CHANNEL_PINS_ACK",
            channelId: e.channel_id,
            timestamp: e.timestamp,
            version: e.version
        })
    }), L(["CHANNEL_PINS_UPDATE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "CHANNEL_PINS_UPDATE",
            channelId: e.channel_id,
            lastPinTimestamp: e.last_pin_timestamp
        })
    }), L(["CHANNEL_CREATE", "CHANNEL_DELETE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        G({
            type: t,
            channel: (0, m.createChannelRecordFromServer)(e)
        })
    }), w(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        G({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        })
    }), w(["CHANNEL_STATUSES"], (e, t) => {
        G({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        })
    }), L(["CHANNEL_UPDATE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        V.add(e)
    }), L(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        let {
            newly_created: n,
            ...s
        } = e;
        G({
            type: t,
            isNewlyCreated: n,
            channel: (0, m.createChannelRecordFromServer)(s)
        })
    }), L(["THREAD_LIST_SYNC"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "THREAD_LIST_SYNC",
            guildId: e.guild_id,
            threads: e.threads.map(e => {
                let t = E.default.getChannel(e.parent_id);
                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, m.createChannelRecordFromServer)(e)
            }),
            mostRecentMessages: e.most_recent_messages,
            members: e.members ? i.map(e.members, _.default) : void 0,
            channelIds: e.channel_ids
        })
    }), w(["THREAD_MEMBER_UPDATE"], e => {
        G({
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
        G({
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
        !e.permission_denied && G({
            type: "FORUM_UNREADS",
            channelId: e.channel_id,
            threads: e.threads.map(e => ({
                threadId: e.thread_id,
                missing: e.missing,
                count: e.count
            }))
        })
    }), w(["SOUNDBOARD_SOUNDS"], e => {
        R.add(e)
    }), w(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = E.default.getBasicChannel(e.channel_id);
        G({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        })
    }), L(["GUILD_CREATE"], e => "full" === e.data_mode ? null : E.ChannelLoader.loadGuildIds([e.id]), e => {
        if (e.unavailable) G({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        });
        else {
            let t = N.hydratePreviouslyUnavailableGuild(e);
            o.default.createGuild(t), G({
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
        G({
            type: "GUILD_UPDATE",
            guild: e
        }), e.unavailable && G({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), w(["GUILD_DELETE"], e => {
        G({
            type: "GUILD_DELETE",
            guild: e
        }), e.geo_restricted ? G({
            type: "GUILD_GEO_RESTRICTED",
            guildId: e.id,
            icon: e.icon,
            name: e.name
        }) : e.unavailable && G({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), w(["GUILD_MEMBERS_CHUNK"], e => {
        r.default.Emitter.batched(() => {
            G({
                type: "GUILD_MEMBERS_CHUNK",
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }), null != e.presences && e.presences.forEach(t => {
                let {
                    user: n,
                    status: s,
                    client_status: i,
                    activities: r,
                    broadcast: a
                } = t;
                return Y({
                    guildId: e.guild_id,
                    user: n,
                    status: s,
                    activities: r,
                    clientStatus: i,
                    broadcast: a
                })
            }), O.default.flush()
        })
    }), w(["THREAD_MEMBER_LIST_UPDATE"], e => {
        r.default.Emitter.batched(() => {
            G({
                type: "THREAD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }), null != e.presences && e.presences.forEach(t => {
                let {
                    user: n,
                    status: s,
                    client_status: i,
                    activities: r,
                    broadcast: a
                } = t;
                return Y({
                    guildId: e.guild_id,
                    user: n,
                    status: s,
                    activities: r,
                    clientStatus: i,
                    broadcast: a
                })
            }), O.default.flush()
        })
    }), w(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
        G({
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
    }), L(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
        G({
            type: t,
            guildId: e.guild_id,
            role: e.role
        })
    }), L(["GUILD_ROLE_DELETE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "GUILD_ROLE_DELETE",
            guildId: e.guild_id,
            roleId: e.role_id,
            version: e.version
        })
    }), w(["GUILD_EMOJIS_UPDATE"], e => {
        G({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis
        })
    }), w(["GUILD_STICKERS_UPDATE"], e => {
        G({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers
        })
    }), w(["GUILD_INTEGRATIONS_UPDATE"], e => {
        G({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id
        })
    }), w(["INTEGRATION_CREATE"], e => {
        G({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id
        })
    }), w(["INTEGRATION_DELETE"], e => {
        G({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id
        })
    }), w(["USER_UPDATE"], e => {
        G({
            type: "CURRENT_USER_UPDATE",
            user: e
        })
    }), w(["USER_SETTINGS_PROTO_UPDATE"], e => {
        let t = (0, g.b64ToProtoWithType)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
                parsed: t,
                wire: e.settings.proto,
                type: e.settings.type
            }), Error("UserSettingsProto must not be a string");
            G({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            })
        }
    }), w(["USER_GUILD_SETTINGS_UPDATE"], e => {
        G({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e]
        })
    }), w(["USER_CONNECTIONS_UPDATE"], () => {
        G({
            type: "USER_CONNECTIONS_UPDATE"
        })
    }), w(["USER_REQUIRED_ACTION_UPDATE"], e => {
        G({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action
        })
    }), w(["USER_NOTE_UPDATE"], e => {
        G({
            type: "USER_NOTE_UPDATE",
            ...e
        })
    }), w(["RELATIONSHIP_ADD"], e => {
        G({
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
        G({
            type: "RELATIONSHIP_REMOVE",
            relationship: e
        })
    }), w(["RELATIONSHIP_UPDATE"], e => {
        G({
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
        G({
            type: "PRESENCES_REPLACE",
            presences: e
        })
    }), w(["SESSIONS_REPLACE"], e => {
        G({
            type: "SESSIONS_REPLACE",
            sessions: x(e)
        })
    }), w(["VOICE_STATE_UPDATE"], e => {
        var t;
        null != e.member && F(e.guild_id, e.member.user, e.member), G({
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
                oldChannelId: I.default.getUserVoiceChannelId(e.guild_id, e.user_id)
            }]
        })
    }), w(["LOBBY_VOICE_STATE_UPDATE"], e => {
        G({
            type: "LOBBY_VOICE_STATE_UPDATE",
            userId: e.user_id,
            lobbyId: e.lobby_id,
            sessionId: e.session_id,
            channelId: e.channel_id,
            mute: e.mute,
            deaf: e.deaf,
            selfMute: e.self_mute,
            selfDeaf: e.self_deaf
        })
    }), w(["VOICE_SERVER_UPDATE"], e => {
        G({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        })
    }), w(["LOBBY_VOICE_SERVER_UPDATE"], e => {
        G({
            type: "LOBBY_VOICE_SERVER_UPDATE",
            lobbyId: e.lobby_id,
            endpoint: e.endpoint,
            token: e.token
        })
    }), w(["CALL_CREATE"], e => {
        G({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            embeddedActivities: e.embedded_activities,
            region: e.region,
            ringing: e.ringing
        });
        let t = e.voice_states;
        null != t && G({
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
        G({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        })
    }), w(["CALL_DELETE"], e => {
        G({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable
        })
    }), w(["OAUTH2_TOKEN_REVOKE"], e => {
        G({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token
        })
    }), w(["RECENT_MENTION_DELETE"], e => {
        G({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id
        })
    }), w(["FRIEND_SUGGESTION_CREATE"], e => {
        G({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e
        })
    }), w(["FRIEND_SUGGESTION_DELETE"], e => {
        G({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id
        })
    }), w(["WEBHOOKS_UPDATE"], e => {
        G({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id
        })
    }), w(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        G({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type
        })
    }), w(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        G({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: ""
            },
            reactionType: f.ReactionTypes.VOTE
        })
    }), w(["MESSAGE_REACTION_REMOVE_ALL"], e => {
        G({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), w(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
        G({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        })
    }), w(["MESSAGE_REACTION_ADD_MANY"], e => {
        G({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        })
    }), w(["PAYMENT_UPDATE"], e => {
        G({
            type: "PAYMENT_UPDATE",
            payment: e
        })
    }), w(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        G({
            type: t,
            entitlement: e
        })
    }), w(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        y.default.hasLayers() && (n("850068").fetchPaymentSources(), d.fetchSubscriptionPlansBySKUs(S.default.getFetchedSKUIDs()))
    }), w(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        u.fetchCurrentUser(), y.default.hasLayers() && n("850068").fetchSubscriptions()
    }), w(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
        G({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: h.default.createFromServer(e, A.default.getSubscriptionById(e.subscription_id))
        })
    }), w(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
        G({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: h.default.createFromServer(e, A.default.getSubscriptionById(e.subscription_id))
        })
    }), w(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
        G({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        })
    }), w(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
        G({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id
        })
    }), w(["USER_PAYMENT_CLIENT_ADD"], e => {
        (0, D.getPurchaseTokenHash)().then(t => {
            let n = e.purchase_token_hash;
            n === t && G({
                type: "USER_PAYMENT_CLIENT_ADD",
                purchaseTokenHash: n,
                expiresAt: e.expires_at
            })
        })
    }), w(["GUILD_MEMBER_LIST_UPDATE"], e => {
        r.default.Emitter.batched(() => {
            let t = t => {
                if (null == t.member) return;
                let {
                    member: n
                } = t;
                if (F(e.guild_id, n.user, n), null == n.presence) return;
                let {
                    presence: s
                } = n;
                Y({
                    guildId: e.guild_id,
                    user: s.user,
                    status: s.status,
                    activities: s.activities,
                    clientStatus: s.client_status,
                    broadcast: s.broadcast
                })
            };
            e.ops.forEach(e => {
                let {
                    op: n,
                    items: s,
                    item: i
                } = e;
                switch (n) {
                    case "SYNC":
                        s.forEach(t);
                        break;
                    case "UPDATE":
                    case "INSERT":
                        t(i)
                }
            }), O.default.flush(), G({
                type: "GUILD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                id: e.id,
                ops: e.ops,
                groups: e.groups,
                memberCount: e.member_count,
                onlineCount: e.online_count
            })
        })
    }), w(["LOBBY_CREATE"], e => {
        G({
            type: "LOBBY_CREATE",
            lobby: e
        }), e.voice_states.forEach(t => {
            G({
                type: "LOBBY_VOICE_STATE_UPDATE",
                lobbyId: e.id,
                userId: t.user_id,
                sessionId: t.session_id,
                channelId: t.channel_id,
                mute: t.mute,
                deaf: t.deaf,
                selfMute: t.self_mute,
                selfDeaf: t.self_deaf
            })
        })
    }), w(["LOBBY_UPDATE"], e => {
        G({
            type: "LOBBY_UPDATE",
            lobby: e
        })
    }), w(["LOBBY_DELETE"], e => {
        G({
            type: "LOBBY_DELETE",
            lobbyId: e.id,
            reason: e.reason
        })
    }), w(["LOBBY_MEMBER_CONNECT", "LOBBY_MEMBER_UPDATE", "LOBBY_MEMBER_DISCONNECT"], (e, t) => {
        G({
            type: t,
            lobbyId: e.lobby_id,
            member: e.member
        })
    }), w(["LOBBY_MESSAGE"], e => {
        G({
            type: "LOBBY_MESSAGE",
            lobbyId: e.lobby_id,
            senderId: e.sender_id,
            data: e.data
        })
    }), w(["GIFT_CODE_UPDATE"], e => {
        G({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code
        })
    }), w(["GIFT_CODE_CREATE"], e => {
        G({
            type: "GIFT_CODE_CREATE",
            giftCode: e
        })
    }), w(["USER_ACHIEVEMENT_UPDATE"], e => {
        G({
            type: "USER_ACHIEVEMENT_UPDATE",
            userAchievement: e
        })
    }), w(["LIBRARY_APPLICATION_UPDATE"], e => {
        G({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e
        })
    }), w(["STREAM_CREATE"], e => {
        G({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), w(["STREAM_SERVER_UPDATE"], e => {
        G({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), w(["STREAM_UPDATE"], e => {
        G({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), w(["STREAM_DELETE"], e => {
        G({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), w(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
        G({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        })
    }), w(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
        G({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e
        })
    }), w(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
        G({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id
        })
    }), w(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
        G({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1
        })
    }), w(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
        G({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum
        })
    }), w(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        G({
            type: t,
            guildId: e.guild_id
        })
    }), w(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
        G({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version
        })
    }), w(["GUILD_JOIN_REQUEST_CREATE"], e => {
        G({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), w(["GUILD_JOIN_REQUEST_UPDATE"], e => {
        G({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), w(["GUILD_JOIN_REQUEST_DELETE"], e => {
        G({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        })
    }), w(["INTERACTION_CREATE"], e => {
        G({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), w(["INTERACTION_SUCCESS"], e => {
        G({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), w(["INTERACTION_FAILURE"], e => {
        G({
            type: "INTERACTION_FAILURE",
            nonce: e.nonce
        })
    }), w(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
        G({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce
        })
    }), w(["INTERACTION_MODAL_CREATE"], e => {
        G({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: e.components,
            nonce: e.nonce
        })
    }), w(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
        G({
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
        G({
            type: "STAGE_INSTANCE_CREATE",
            instance: e
        })
    }), w(["STAGE_INSTANCE_UPDATE"], e => {
        G({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e
        })
    }), w(["STAGE_INSTANCE_DELETE"], e => {
        G({
            type: "STAGE_INSTANCE_DELETE",
            instance: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e
        })
    }), w(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id
        })
    }), w(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), w(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
        G({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), w(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
        G({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), w(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
        G({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), w(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
        G({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        })
    }), w(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
        G({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        })
    }), w(["VOICE_CHANNEL_EFFECT_SEND"], e => {
        G({
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
        G({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new v.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), w(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
        G({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new v.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), w(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
        G({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id
        })
    }), w(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
        G({
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
    }), L(["EMBEDDED_ACTIVITY_UPDATE"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            embeddedActivity: e.embedded_activity,
            connections: e.connections,
            updateCode: e.update_code
        })
    }), L(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        G({
            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2",
            activitySessionId: e.activity_session_id,
            applicationId: e.application_id,
            channelId: e.channel_id,
            guildId: e.guild_id,
            instanceId: e.instance_id,
            userIds: e.user_ids
        })
    }), w(["AUTH_SESSION_CHANGE"], e => {
        G({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash
        })
    }), w(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
        G({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        })
    }), w(["DELETED_ENTITY_IDS"], e => {
        G({
            type: "DELETED_ENTITY_IDS",
            ...e
        })
    }), w(["CONSOLE_COMMAND_UPDATE"], e => {
        G({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error
        })
    }), L(["PASSIVE_UPDATE_V1"], e => E.ChannelLoader.loadGuildIds([e.guild_id]), e => {
        var t, n;
        G({
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
        G({
            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
            integration: e
        })
    }), w(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], e => {
        G({
            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
            integration: e
        })
    }), w(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], e => {
        G({
            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
            channelId: e.channel_id,
            applicationId: e.application_id
        })
    }), w(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
        G({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions
        })
    }), w(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
        G({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        })
    }), w(["SPEED_TEST_CREATE"], e => {
        G({
            type: "SPEED_TEST_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), w(["SPEED_TEST_SERVER_UPDATE"], e => {
        G({
            type: "SPEED_TEST_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), w(["SPEED_TEST_UPDATE"], e => {
        G({
            type: "SPEED_TEST_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), w(["SPEED_TEST_DELETE"], e => {
        G({
            type: "SPEED_TEST_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), w(["LAST_MESSAGES"], e => {
        G({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages
        })
    }), w(["AUTHENTICATOR_UPDATE"], e => {
        G({
            type: "AUTHENTICATOR_UPDATE",
            credential: e
        })
    }), w(["AUTHENTICATOR_CREATE"], e => {
        G({
            type: "AUTHENTICATOR_CREATE",
            credential: e
        })
    }), w(["AUTHENTICATOR_DELETE"], e => {
        G({
            type: "AUTHENTICATOR_DELETE",
            credential: e
        })
    }), w(["NOTIFICATION_SETTINGS_UPDATE"], e => {
        G({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: {
                flags: e.flags
            }
        })
    }), w(["GAME_INVITE_CREATE"], e => {
        G({
            type: "GAME_INVITE_CREATE",
            gameInvite: e
        })
    }), w(["GAME_INVITE_DELETE"], e => {
        G({
            type: "GAME_INVITE_DELETE",
            inviteId: e.invite_id
        })
    }), w(["GAME_INVITE_DELETE_MANY"], e => {
        G({
            type: "GAME_INVITE_DELETE_MANY",
            inviteIds: e.invite_ids
        })
    }), w(["PREMIUM_MARKETING_PREVIEW"], e => {
        G({
            type: "PREMIUM_MARKETING_PREVIEW",
            properties: e.properties
        })
    }), w(["USER_APPLICATION_UPDATE"], e => {
        G({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id
        })
    }), w(["USER_APPLICATION_REMOVE"], e => {
        G({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id
        })
    })
}