function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    });
    var r = n("392711"),
        o = n.n(r);
    n("753055");
    var i = n("898511"),
        a = n("629815"),
        u = n("322997"),
        s = n("824646"),
        l = n("531822"),
        c = n("35523"),
        f = n("796205"),
        d = n("653009"),
        _ = n("117459"),
        E = n("428249"),
        p = n("569492"),
        m = n("69527"),
        y = n("428009"),
        I = n("935741"),
        h = n("957808"),
        O = n("854106"),
        T = n("947063"),
        S = n("208454"),
        v = n("665863"),
        g = n("622753"),
        A = n("428920"),
        b = n("715526"),
        N = n("704550"),
        R = n("843682"),
        C = n("942060");

    function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function D(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var L = new c.default("ConnectionStore"),
        M = new R.default(C.socket, function(e, t) {
            e = null != e ? e : {
                type: "CHANNEL_UPDATES",
                channels: []
            };
            var n, r, o, i = (0, p.createChannelRecordFromServer)(t),
                a = I.default.getChannel(t.id);
            var u = null == a ? void 0 : a.merge((n = D({}, i), r = (r = {
                recipients: a.recipients,
                bitrate: null !== (o = i.bitrate) && void 0 !== o ? o : a.bitrate
            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n));
            return e.channels.push(null != u ? u : i), e
        }, function(e) {
            return "CHANNEL_UPDATE" !== e
        }),
        U = new R.default(C.socket, function(e, t) {
            return (e = null == e ? {
                type: "SOUNDBOARD_SOUNDS_RECEIVED",
                updates: []
            } : e).updates.push({
                guildId: t.guild_id,
                sounds: t.soundboard_sounds.map(function(e) {
                    return {
                        name: e.name,
                        soundId: e.sound_id,
                        emojiName: e.emoji_name,
                        emojiId: e.emoji_id,
                        userId: e.user_id,
                        volume: e.volume,
                        available: e.available,
                        guildId: t.guild_id
                    }
                })
            }), e
        }, function(e) {
            return "SOUNDBOARD_SOUNDS" !== e
        }),
        w = new R.default(C.socket, function(e, t) {
            return (e = null == e ? {
                type: "PRESENCE_UPDATES",
                updates: []
            } : e).updates.push(t), e
        }, function(e) {
            return "PRESENCE_UPDATE" !== e
        }),
        k = {};

    function G(e, t) {
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) k[i.value] = {
                preload: function() {
                    return null
                },
                dispatch: t
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
    }

    function B(e, t, n) {
        var r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) k[a.value] = {
                preload: t,
                dispatch: n
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
    }

    function j(e) {
        return k[e]
    }

    function F(e) {
        a.default.dispatch(e).catch(function(t) {
            return C.socket.resetSocketOnDispatchError({
                error: t,
                action: e.type
            })
        })
    }

    function V(e, t, n) {
        var r = n.roles,
            i = n.nick,
            a = n.avatar,
            u = n.avatar_decoration_data,
            s = n.flags,
            l = n.premium_since,
            c = n.pending,
            f = n.joined_at,
            d = n.communication_disabled_until,
            _ = n.unusual_dm_activity_until,
            E = h.default.getMember(e, t.id);
        (!(null != E && E.nick === i && E.avatar === a && o().isEqual(E.roles, r) && o().isEqual(E.avatarDecoration, u)) || E.premiumSince !== l || E.isPending !== c || E.joinedAt !== f || E.communicationDisabledUntil !== d || E.flags !== s || E.unusualDMActivityUntil !== _) && F({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: r,
            nick: i,
            avatar: a,
            avatarDecoration: u,
            premiumSince: l,
            isPending: c,
            joinedAt: f,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: _,
            flags: s
        })
    }

    function H(e) {
        var t = e.member,
            n = e.mentions,
            r = e.author,
            o = e.guild_id;
        null != t && null != o && V(o, r, t), null != n && n.forEach(function(e) {
            if (null != e.member && null != o) {
                var t = e.member;
                delete e.member, V(o, e, t)
            }
        })
    }

    function x(e) {
        return e.map(function(e) {
            return {
                sessionId: e.session_id,
                lastModified: e.last_modified,
                status: e.status,
                activities: e.activities,
                active: !!e.active,
                clientInfo: e.client_info,
                broadcast: e.broadcast
            }
        })
    }

    function Y() {
        C.socket.isSessionEstablished() && T.default.getPendingLobbies().forEach(function(e) {
            C.socket.lobbyConnect(e.id, e.secret)
        })
    }

    function W(e) {
        var t = e.guildId,
            n = e.user,
            r = e.status,
            o = e.activities,
            i = e.clientStatus,
            a = e.broadcast;
        w.add({
            guildId: t,
            user: n,
            status: r,
            clientStatus: i,
            activities: o,
            broadcast: a
        })
    }
    B(["INITIAL_GUILD"], function(e) {
        return "full" === e.data_mode ? null : I.ChannelLoader.loadGuildIds([e.id])
    }, function(e) {
        _.default.initialGuild.measure(function() {
            i.default.Emitter.batched(function() {
                var t = N.hydrateInitialGuild(e, C.socket.identifyStartTime);
                null != S.default.getCurrentUser() && (F({
                    type: "GUILD_CREATE",
                    guild: t
                }), F({
                    type: "VOICE_STATE_UPDATES",
                    voiceStates: t.voice_states.map(function(e) {
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
                }), L.log("Dispatched INITIAL_GUILD ".concat(e.id)))
            })
        })
    }), G(["READY_SUPPLEMENTAL"], function(e) {
        _.default.readySupplemental.measure(function() {
            i.default.Emitter.batched(function() {
                e = _.default.hydrateReadySupplemental.measure(function() {
                    return N.hydrateReadySupplementalPayload(e, C.socket.identifyStartTime)
                });
                var t, n, r = function(e) {
                        return e.map(function(e) {
                            return {
                                user: e.user,
                                status: e.status,
                                clientStatus: e.client_status,
                                activities: e.activities,
                                broadcast: e.broadcast
                            }
                        })
                    },
                    o = e.guilds.filter(function(e) {
                        return !0 !== e.unavailable
                    });
                o.forEach(function(e) {
                    e.presences = r(e.presences || [])
                });
                var i = e.presences ? r(e.presences) : [],
                    a = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(function(e) {
                        return (0, p.createChannelRecordFromServer)(e)
                    }),
                    u = null !== (n = e.game_invites) && void 0 !== n ? n : [];
                _.default.dispatchReadySupplemental.measure(function() {
                    F({
                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                        guilds: o,
                        presences: i,
                        lazyPrivateChannels: a,
                        gameInvites: u
                    })
                });
                var s = [];
                o.forEach(function(e) {
                    e.voice_states.forEach(function(t) {
                        var n;
                        s.push({
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
                }), F({
                    type: "VOICE_STATE_UPDATES",
                    voiceStates: s,
                    initial: !0
                }), C.localVoiceState.update(), C.localLobbyVoiceStates.update({}, !0)
            })
        }), setTimeout(function() {
            return F({
                type: "POST_CONNECTION_OPEN"
            })
        }, 2e3)
    }), B(["READY"], function(e) {
        var t, n = N.preloadReadyPayloadData(),
            r = e.guilds.filter(function(e) {
                var t, n;
                return !e.unavailable && "partial" === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0)
            }).map(function(e) {
                return e.id
            });
        return Promise.all([n, null !== (t = I.ChannelLoader.loadGuildIds(r)) && void 0 !== t ? t : Promise.resolve()]).then(function(e) {
            var t, n;
            return (n = 1, function(e) {
                if (Array.isArray(e)) return e
            }(t = e) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0]
        })
    }, function(e, t, n) {
        if (e.user.bot) {
            F({
                type: "LOGOUT"
            });
            return
        }
        _.default.ready.measure(function() {
            i.default.Emitter.batched(function() {
                var t = (e = _.default.hydrateReady.measure(function() {
                        return N.hydrateReadyPayloadPrioritized(e, C.socket.identifyStartTime, n)
                    })).private_channels.map(function(e) {
                        return (0, p.createChannelRecordFromServer)(e)
                    }),
                    r = e.guilds.filter(function(e) {
                        return !0 === e.unavailable && !0 !== e.geo_restricted
                    }).map(function(e) {
                        return e.id
                    }),
                    o = e.guilds.filter(function(e) {
                        return !0 !== e.unavailable
                    }),
                    i = e.guilds.filter(function(e) {
                        return !0 === e.geo_restricted
                    });
                o.forEach(function(e) {
                    e.presences = []
                });
                var a = null == e.user_settings_proto ? void 0 : (0, E.b64ToPreloadedUserSettingsProto)(e.user_settings_proto);
                _.default.dispatchReady.measure(function() {
                    var n;
                    F({
                        type: "CONNECTION_OPEN",
                        sessionId: e.session_id,
                        authSessionIdHash: e.auth_session_id_hash,
                        user: e.user,
                        users: e.users,
                        guilds: o,
                        initialPrivateChannels: t,
                        unavailableGuilds: r,
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
                        geoRestrictedGuilds: i
                    })
                }), null != e.auth_token && F({
                    type: "UPDATE_TOKEN",
                    token: e.auth_token,
                    userId: e.user.id
                }), C.localPresenceState.update(), C.localVoiceState.update(), C.localLobbyVoiceStates.update(), Y()
            })
        })
    }), G(["RESUMED"], function() {
        C.localPresenceState.forceUpdate(), C.localVoiceState.forceUpdate(), C.localLobbyVoiceStates.forceUpdate(), Y(), F({
            type: "CONNECTION_RESUMED"
        })
    }), G(["TYPING_START"], function(e) {
        null != e.member && V(e.guild_id, e.member.user, e.member), F({
            type: "TYPING_START",
            channelId: e.channel_id,
            userId: e.user_id
        })
    }), G(["ACTIVITY_START"], function(e) {
        F({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity
        })
    }), G(["ACTIVITY_USER_ACTION"], function(e) {
        F({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), B(["MESSAGE_CREATE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        H(e), null != e.author && F({
            type: "MESSAGE_CREATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            message: e,
            optimistic: !1,
            isPushNotification: !1
        })
    }), B(["MESSAGE_UPDATE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        H(e), F({
            type: "MESSAGE_UPDATE",
            guildId: e.guild_id,
            message: e
        })
    }), B(["MESSAGE_DELETE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "MESSAGE_DELETE",
            guildId: e.guild_id,
            id: e.id,
            channelId: e.channel_id
        })
    }), B(["MESSAGE_DELETE_BULK"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "MESSAGE_DELETE_BULK",
            guildId: e.guild_id,
            ids: e.ids,
            channelId: e.channel_id
        })
    }), B(["MESSAGE_ACK"], function(e) {
        return I.ChannelLoader.loadGuildFromChannelId(e.channel_id)
    }, function(e) {
        F({
            type: "MESSAGE_ACK",
            channelId: e.channel_id,
            messageId: e.message_id,
            manual: e.manual,
            newMentionCount: e.mention_count,
            version: e.version
        })
    }), G(["GUILD_FEATURE_ACK"], function(e) {
        F({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), G(["USER_NON_CHANNEL_ACK"], function(e) {
        F({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id
        })
    }), B(["CHANNEL_PINS_ACK"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "CHANNEL_PINS_ACK",
            channelId: e.channel_id,
            timestamp: e.timestamp,
            version: e.version
        })
    }), B(["CHANNEL_PINS_UPDATE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "CHANNEL_PINS_UPDATE",
            channelId: e.channel_id,
            lastPinTimestamp: e.last_pin_timestamp
        })
    }), B(["CHANNEL_CREATE", "CHANNEL_DELETE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e, t) {
        F({
            type: t,
            channel: (0, p.createChannelRecordFromServer)(e)
        })
    }), G(["VOICE_CHANNEL_STATUS_UPDATE"], function(e, t) {
        F({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        })
    }), G(["CHANNEL_STATUSES"], function(e, t) {
        F({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        })
    }), B(["CHANNEL_UPDATE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        M.add(e)
    }), B(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e, t) {
        var n = e.newly_created,
            r = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["newly_created"]);
        F({
            type: t,
            isNewlyCreated: n,
            channel: (0, p.createChannelRecordFromServer)(r)
        })
    }), B(["THREAD_LIST_SYNC"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "THREAD_LIST_SYNC",
            guildId: e.guild_id,
            threads: e.threads.map(function(e) {
                var t = I.default.getChannel(e.parent_id);
                return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, p.createChannelRecordFromServer)(e)
            }),
            mostRecentMessages: e.most_recent_messages,
            members: e.members ? o().map(e.members, d.default) : void 0,
            channelIds: e.channel_ids
        })
    }), G(["THREAD_MEMBER_UPDATE"], function(e) {
        F({
            type: "THREAD_MEMBER_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp
        })
    }), G(["THREAD_MEMBERS_UPDATE"], function(e) {
        var t;
        F({
            type: "THREAD_MEMBERS_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers: null === (t = e.added_members) || void 0 === t ? void 0 : t.map(function(t) {
                return {
                    id: t.id,
                    guildId: e.guild_id,
                    userId: t.user_id,
                    flags: t.flags,
                    joinTimestamp: t.join_timestamp
                }
            }),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview
        })
    }), G(["FORUM_UNREADS"], function(e) {
        !e.permission_denied && F({
            type: "FORUM_UNREADS",
            channelId: e.channel_id,
            threads: e.threads.map(function(e) {
                return {
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count
                }
            })
        })
    }), G(["SOUNDBOARD_SOUNDS"], function(e) {
        U.add(e)
    }), G(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], function(e, t) {
        var n = I.default.getBasicChannel(e.channel_id);
        F({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        })
    }), B(["GUILD_CREATE"], function(e) {
        return "full" === e.data_mode ? null : I.ChannelLoader.loadGuildIds([e.id])
    }, function(e) {
        if (e.unavailable) F({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        });
        else {
            var t = N.hydratePreviouslyUnavailableGuild(e);
            u.default.createGuild(t), F({
                type: "VOICE_STATE_UPDATES",
                voiceStates: t.voice_states.map(function(e) {
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
    }), G(["GUILD_UPDATE"], function(e) {
        F({
            type: "GUILD_UPDATE",
            guild: e
        }), e.unavailable && F({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), G(["GUILD_DELETE"], function(e) {
        F({
            type: "GUILD_DELETE",
            guild: e
        }), e.geo_restricted ? F({
            type: "GUILD_GEO_RESTRICTED",
            guildId: e.id,
            icon: e.icon,
            name: e.name
        }) : e.unavailable && F({
            type: "GUILD_UNAVAILABLE",
            guildId: e.id
        })
    }), G(["GUILD_MEMBERS_CHUNK"], function(e) {
        i.default.Emitter.batched(function() {
            F({
                type: "GUILD_MEMBERS_CHUNK",
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }), null != e.presences && e.presences.forEach(function(t) {
                var n = t.user,
                    r = t.status,
                    o = t.client_status,
                    i = t.activities,
                    a = t.broadcast;
                return W({
                    guildId: e.guild_id,
                    user: n,
                    status: r,
                    activities: i,
                    clientStatus: o,
                    broadcast: a
                })
            }), R.default.flush()
        })
    }), G(["THREAD_MEMBER_LIST_UPDATE"], function(e) {
        i.default.Emitter.batched(function() {
            F({
                type: "THREAD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }), null != e.presences && e.presences.forEach(function(t) {
                var n = t.user,
                    r = t.status,
                    o = t.client_status,
                    i = t.activities,
                    a = t.broadcast;
                return W({
                    guildId: e.guild_id,
                    user: n,
                    status: r,
                    activities: i,
                    clientStatus: o,
                    broadcast: a
                })
            }), R.default.flush()
        })
    }), G(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], function(e, t) {
        F({
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
    }), B(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e, t) {
        F({
            type: t,
            guildId: e.guild_id,
            role: e.role
        })
    }), B(["GUILD_ROLE_DELETE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "GUILD_ROLE_DELETE",
            guildId: e.guild_id,
            roleId: e.role_id,
            version: e.version
        })
    }), G(["GUILD_EMOJIS_UPDATE"], function(e) {
        F({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis
        })
    }), G(["GUILD_STICKERS_UPDATE"], function(e) {
        F({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers
        })
    }), G(["GUILD_INTEGRATIONS_UPDATE"], function(e) {
        F({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id
        })
    }), G(["INTEGRATION_CREATE"], function(e) {
        F({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id
        })
    }), G(["INTEGRATION_DELETE"], function(e) {
        F({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id
        })
    }), G(["USER_UPDATE"], function(e) {
        F({
            type: "CURRENT_USER_UPDATE",
            user: e
        })
    }), G(["USER_SETTINGS_PROTO_UPDATE"], function(e) {
        var t = (0, E.b64ToProtoWithType)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
                parsed: t,
                wire: e.settings.proto,
                type: e.settings.type
            }), Error("UserSettingsProto must not be a string");
            F({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            })
        }
    }), G(["USER_GUILD_SETTINGS_UPDATE"], function(e) {
        F({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e]
        })
    }), G(["USER_CONNECTIONS_UPDATE"], function() {
        F({
            type: "USER_CONNECTIONS_UPDATE"
        })
    }), G(["USER_REQUIRED_ACTION_UPDATE"], function(e) {
        F({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action
        })
    }), G(["USER_NOTE_UPDATE"], function(e) {
        F(D({
            type: "USER_NOTE_UPDATE"
        }, e))
    }), G(["RELATIONSHIP_ADD"], function(e) {
        F({
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
    }), G(["RELATIONSHIP_REMOVE"], function(e) {
        F({
            type: "RELATIONSHIP_REMOVE",
            relationship: e
        })
    }), G(["RELATIONSHIP_UPDATE"], function(e) {
        F({
            type: "RELATIONSHIP_UPDATE",
            relationship: e
        })
    }), G(["PRESENCE_UPDATE"], function(e) {
        W({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            clientStatus: e.client_status,
            broadcast: e.broadcast
        })
    }), G(["PRESENCES_REPLACE"], function(e) {
        F({
            type: "PRESENCES_REPLACE",
            presences: e
        })
    }), G(["SESSIONS_REPLACE"], function(e) {
        F({
            type: "SESSIONS_REPLACE",
            sessions: x(e)
        })
    }), G(["VOICE_STATE_UPDATE"], function(e) {
        var t;
        null != e.member && V(e.guild_id, e.member.user, e.member), F({
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
                oldChannelId: v.default.getUserVoiceChannelId(e.guild_id, e.user_id)
            }]
        })
    }), G(["LOBBY_VOICE_STATE_UPDATE"], function(e) {
        F({
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
    }), G(["VOICE_SERVER_UPDATE"], function(e) {
        F({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        })
    }), G(["LOBBY_VOICE_SERVER_UPDATE"], function(e) {
        F({
            type: "LOBBY_VOICE_SERVER_UPDATE",
            lobbyId: e.lobby_id,
            endpoint: e.endpoint,
            token: e.token
        })
    }), G(["CALL_CREATE"], function(e) {
        F({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            embeddedActivities: e.embedded_activities,
            region: e.region,
            ringing: e.ringing
        });
        var t = e.voice_states;
        null != t && F({
            type: "VOICE_STATE_UPDATES",
            voiceStates: t.map(function(e) {
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
    }), G(["CALL_UPDATE"], function(e) {
        F({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        })
    }), G(["CALL_DELETE"], function(e) {
        F({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable
        })
    }), G(["OAUTH2_TOKEN_REVOKE"], function(e) {
        F({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token
        })
    }), G(["RECENT_MENTION_DELETE"], function(e) {
        F({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id
        })
    }), G(["FRIEND_SUGGESTION_CREATE"], function(e) {
        F({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e
        })
    }), G(["FRIEND_SUGGESTION_DELETE"], function(e) {
        F({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id
        })
    }), G(["WEBHOOKS_UPDATE"], function(e) {
        F({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id
        })
    }), G(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], function(e, t) {
        F({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type
        })
    }), G(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], function(e, t) {
        F({
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
    }), G(["MESSAGE_REACTION_REMOVE_ALL"], function(e) {
        F({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id
        })
    }), G(["MESSAGE_REACTION_REMOVE_EMOJI"], function(e) {
        F({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        })
    }), G(["MESSAGE_REACTION_ADD_MANY"], function(e) {
        F({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        })
    }), G(["PAYMENT_UPDATE"], function(e) {
        F({
            type: "PAYMENT_UPDATE",
            payment: e
        })
    }), G(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], function(e, t) {
        F({
            type: t,
            entitlement: e
        })
    }), G(["USER_PAYMENT_SOURCES_UPDATE"], function() {
        O.default.hasLayers() && (n("950175").fetchPaymentSources(), s.fetchSubscriptionPlansBySKUs(g.default.getFetchedSKUIDs()))
    }), G(["USER_SUBSCRIPTIONS_UPDATE"], function() {
        l.fetchCurrentUser(), O.default.hasLayers() && n("950175").fetchSubscriptions()
    }), G(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], function(e) {
        F({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: m.default.createFromServer(e, A.default.getSubscriptionById(e.subscription_id))
        })
    }), G(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], function(e) {
        F({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: m.default.createFromServer(e, A.default.getSubscriptionById(e.subscription_id))
        })
    }), G(["BILLING_POPUP_BRIDGE_CALLBACK"], function(e) {
        F({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        })
    }), G(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], function(e) {
        F({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id
        })
    }), G(["USER_PAYMENT_CLIENT_ADD"], function(e) {
        (0, b.getPurchaseTokenHash)().then(function(t) {
            var n = e.purchase_token_hash;
            n === t && F({
                type: "USER_PAYMENT_CLIENT_ADD",
                purchaseTokenHash: n,
                expiresAt: e.expires_at
            })
        })
    }), G(["GUILD_MEMBER_LIST_UPDATE"], function(e) {
        i.default.Emitter.batched(function() {
            var t = function(t) {
                if (null != t.member) {
                    var n = t.member;
                    if (V(e.guild_id, n.user, n), null != n.presence) {
                        var r = n.presence;
                        W({
                            guildId: e.guild_id,
                            user: r.user,
                            status: r.status,
                            activities: r.activities,
                            clientStatus: r.client_status,
                            broadcast: r.broadcast
                        })
                    }
                }
            };
            e.ops.forEach(function(e) {
                var n = e.op,
                    r = e.items,
                    o = e.item;
                switch (n) {
                    case "SYNC":
                        r.forEach(t);
                        break;
                    case "UPDATE":
                    case "INSERT":
                        t(o)
                }
            }), R.default.flush(), F({
                type: "GUILD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                id: e.id,
                ops: e.ops,
                groups: e.groups,
                memberCount: e.member_count,
                onlineCount: e.online_count
            })
        })
    }), G(["LOBBY_CREATE"], function(e) {
        F({
            type: "LOBBY_CREATE",
            lobby: e
        }), e.voice_states.forEach(function(t) {
            F({
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
    }), G(["LOBBY_UPDATE"], function(e) {
        F({
            type: "LOBBY_UPDATE",
            lobby: e
        })
    }), G(["LOBBY_DELETE"], function(e) {
        F({
            type: "LOBBY_DELETE",
            lobbyId: e.id,
            reason: e.reason
        })
    }), G(["LOBBY_MEMBER_CONNECT", "LOBBY_MEMBER_UPDATE", "LOBBY_MEMBER_DISCONNECT"], function(e, t) {
        F({
            type: t,
            lobbyId: e.lobby_id,
            member: e.member
        })
    }), G(["LOBBY_MESSAGE"], function(e) {
        F({
            type: "LOBBY_MESSAGE",
            lobbyId: e.lobby_id,
            senderId: e.sender_id,
            data: e.data
        })
    }), G(["GIFT_CODE_UPDATE"], function(e) {
        F({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code
        })
    }), G(["GIFT_CODE_CREATE"], function(e) {
        F({
            type: "GIFT_CODE_CREATE",
            giftCode: e
        })
    }), G(["USER_ACHIEVEMENT_UPDATE"], function(e) {
        F({
            type: "USER_ACHIEVEMENT_UPDATE",
            userAchievement: e
        })
    }), G(["LIBRARY_APPLICATION_UPDATE"], function(e) {
        F({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e
        })
    }), G(["STREAM_CREATE"], function(e) {
        F({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), G(["STREAM_SERVER_UPDATE"], function(e) {
        F({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), G(["STREAM_UPDATE"], function(e) {
        F({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), G(["STREAM_DELETE"], function(e) {
        F({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), G(["GENERIC_PUSH_NOTIFICATION_SENT"], function(e) {
        F({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        })
    }), G(["NOTIFICATION_CENTER_ITEM_CREATE"], function(e) {
        F({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e
        })
    }), G(["NOTIFICATION_CENTER_ITEM_DELETE"], function(e) {
        F({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id
        })
    }), G(["NOTIFICATION_CENTER_ITEMS_ACK"], function(e) {
        F({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1
        })
    }), G(["NOTIFICATION_CENTER_ITEM_COMPLETED"], function(e) {
        F({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum
        })
    }), G(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], function(e, t) {
        F({
            type: t,
            guildId: e.guild_id
        })
    }), G(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], function(e) {
        F({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version
        })
    }), G(["GUILD_JOIN_REQUEST_CREATE"], function(e) {
        F({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), G(["GUILD_JOIN_REQUEST_UPDATE"], function(e) {
        F({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        })
    }), G(["GUILD_JOIN_REQUEST_DELETE"], function(e) {
        F({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        })
    }), G(["INTERACTION_CREATE"], function(e) {
        F({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), G(["INTERACTION_SUCCESS"], function(e) {
        F({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce
        })
    }), G(["INTERACTION_FAILURE"], function(e) {
        F({
            type: "INTERACTION_FAILURE",
            nonce: e.nonce
        })
    }), G(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], function(e) {
        F({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce
        })
    }), G(["INTERACTION_MODAL_CREATE"], function(e) {
        F({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: e.components,
            nonce: e.nonce
        })
    }), G(["INTERACTION_IFRAME_MODAL_CREATE"], function(e) {
        F({
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
    }), G(["STAGE_INSTANCE_CREATE"], function(e) {
        F({
            type: "STAGE_INSTANCE_CREATE",
            instance: e
        })
    }), G(["STAGE_INSTANCE_UPDATE"], function(e) {
        F({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e
        })
    }), G(["STAGE_INSTANCE_DELETE"], function(e) {
        F({
            type: "STAGE_INSTANCE_DELETE",
            instance: e
        })
    }), G(["GUILD_SCHEDULED_EVENT_CREATE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e
        })
    }), G(["GUILD_SCHEDULED_EVENT_UPDATE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e
        })
    }), G(["GUILD_SCHEDULED_EVENT_DELETE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e
        })
    }), G(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e
        })
    }), G(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e
        })
    }), G(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e
        })
    }), G(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id
        })
    }), G(["GUILD_SCHEDULED_EVENT_USER_ADD"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), G(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], function(e) {
        F({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        })
    }), G(["GUILD_DIRECTORY_ENTRY_CREATE"], function(e) {
        F({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), G(["GUILD_DIRECTORY_ENTRY_UPDATE"], function(e) {
        F({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e
        })
    }), G(["GUILD_DIRECTORY_ENTRY_DELETE"], function(e) {
        F({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        })
    }), G(["AUTO_MODERATION_MENTION_RAID_DETECTION"], function(e) {
        F({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        })
    }), G(["VOICE_CHANNEL_EFFECT_SEND"], function(e) {
        F({
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
    }), G(["GUILD_SOUNDBOARD_SOUND_CREATE"], function(e) {
        F({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new y.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), G(["GUILD_SOUNDBOARD_SOUND_UPDATE"], function(e) {
        F({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new y.default(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        })
    }), G(["GUILD_SOUNDBOARD_SOUND_DELETE"], function(e) {
        F({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id
        })
    }), G(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], function(e) {
        F({
            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map(function(t) {
                return {
                    name: t.name,
                    soundId: t.sound_id,
                    emojiName: t.emoji_name,
                    emojiId: t.emoji_id,
                    userId: t.user_id,
                    volume: t.volume,
                    available: t.available,
                    guildId: e.guild_id
                }
            })
        })
    }), B(["EMBEDDED_ACTIVITY_UPDATE"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            embeddedActivity: e.embedded_activity,
            connections: e.connections,
            updateCode: e.update_code
        })
    }), B(["EMBEDDED_ACTIVITY_UPDATE_V2"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        F({
            type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2",
            activitySessionId: e.activity_session_id,
            applicationId: e.application_id,
            channelId: e.channel_id,
            guildId: e.guild_id,
            instanceId: e.instance_id,
            userIds: e.user_ids
        })
    }), G(["AUTH_SESSION_CHANGE"], function(e) {
        F({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash
        })
    }), G(["USER_CONNECTIONS_LINK_CALLBACK"], function(e) {
        F({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        })
    }), G(["DELETED_ENTITY_IDS"], function(e) {
        F(D({
            type: "DELETED_ENTITY_IDS"
        }, e))
    }), G(["CONSOLE_COMMAND_UPDATE"], function(e) {
        F({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error
        })
    }), B(["PASSIVE_UPDATE_V1"], function(e) {
        return I.ChannelLoader.loadGuildIds([e.guild_id])
    }, function(e) {
        var t, n;
        F({
            type: "PASSIVE_UPDATE_V1",
            guildId: e.guild_id,
            members: e.members,
            channels: null === (t = e.channels) || void 0 === t ? void 0 : t.map(function(e) {
                return {
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp
                }
            }),
            voiceStates: null === (n = e.voice_states) || void 0 === n ? void 0 : n.map(function(e) {
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
    }), G(["PRIVATE_CHANNEL_INTEGRATION_CREATE"], function(e) {
        F({
            type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
            integration: e
        })
    }), G(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], function(e) {
        F({
            type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
            integration: e
        })
    }), G(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], function(e) {
        F({
            type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
            channelId: e.channel_id,
            applicationId: e.application_id
        })
    }), G(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], function(e) {
        F({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions
        })
    }), G(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], function(e) {
        F({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        })
    }), G(["SPEED_TEST_CREATE"], function(e) {
        F({
            type: "SPEED_TEST_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        })
    }), G(["SPEED_TEST_SERVER_UPDATE"], function(e) {
        F({
            type: "SPEED_TEST_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        })
    }), G(["SPEED_TEST_UPDATE"], function(e) {
        F({
            type: "SPEED_TEST_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        })
    }), G(["SPEED_TEST_DELETE"], function(e) {
        F({
            type: "SPEED_TEST_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        })
    }), G(["LAST_MESSAGES"], function(e) {
        F({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages
        })
    }), G(["AUTHENTICATOR_UPDATE"], function(e) {
        F({
            type: "AUTHENTICATOR_UPDATE",
            credential: e
        })
    }), G(["AUTHENTICATOR_CREATE"], function(e) {
        F({
            type: "AUTHENTICATOR_CREATE",
            credential: e
        })
    }), G(["AUTHENTICATOR_DELETE"], function(e) {
        F({
            type: "AUTHENTICATOR_DELETE",
            credential: e
        })
    }), G(["NOTIFICATION_SETTINGS_UPDATE"], function(e) {
        F({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: {
                flags: e.flags
            }
        })
    }), G(["GAME_INVITE_CREATE"], function(e) {
        F({
            type: "GAME_INVITE_CREATE",
            gameInvite: e
        })
    }), G(["GAME_INVITE_DELETE"], function(e) {
        F({
            type: "GAME_INVITE_DELETE",
            inviteId: e.invite_id
        })
    }), G(["GAME_INVITE_DELETE_MANY"], function(e) {
        F({
            type: "GAME_INVITE_DELETE_MANY",
            inviteIds: e.invite_ids
        })
    }), G(["CONVERSATION_SUMMARY_UPDATE"], function(e) {
        F(D({
            type: "CONVERSATION_SUMMARY_UPDATE"
        }, e))
    }), G(["PREMIUM_MARKETING_PREVIEW"], function(e) {
        F({
            type: "PREMIUM_MARKETING_PREVIEW",
            properties: e.properties
        })
    }), G(["USER_APPLICATION_UPDATE"], function(e) {
        F({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id
        })
    }), G(["USER_APPLICATION_REMOVE"], function(e) {
        F({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id
        })
    })
}