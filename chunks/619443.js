function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("808653");
    var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        a = n("913144"),
        o = n("987317"),
        d = n("605250"),
        u = n("374014"),
        l = n("374363"),
        f = n("271938"),
        _ = n("950104"),
        c = n("42203"),
        g = n("260320"),
        m = n("42887"),
        h = n("945956"),
        v = n("590401"),
        E = n("18494"),
        p = n("101125"),
        y = n("205817"),
        T = n("41642"),
        C = n("518916"),
        I = n("571420"),
        S = n("399010"),
        A = n("49111"),
        D = n("397336");
    let N = window.DiscordNative;
    C.socket.dispatcher.getDispatchHandler = S.default;
    let O = new d.default("ConnectionStore"),
        P = 0,
        b = null,
        V = !0;
    async function R(e) {
        P = Date.now(), b = e.sessionId, C.localPresenceState.handleConnectionOpen();
        let t = {},
            n = E.default.getVoiceChannelId();
        if (null != n) {
            var s, i, r, a, d, u, l, f;
            let e = (null === (d = window) || void 0 === d ? void 0 : null === (a = d.performance) || void 0 === a ? void 0 : null === (r = a.getEntriesByType) || void 0 === r ? void 0 : null === (i = r.call(a, "navigation")) || void 0 === i ? void 0 : null === (s = i[0]) || void 0 === s ? void 0 : s.type) === "reload" || (null === (u = await (null == N ? void 0 : null === (f = N.processUtils) || void 0 === f ? void 0 : null === (l = f.getLastCrash) || void 0 === l ? void 0 : l.call(f))) || void 0 === u ? void 0 : u.rendererCrashReason) != null;
            if (e || !V) {
                let e = c.default.getChannel(n);
                null != e && (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                })
            } else h.default.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null)
        }
        C.localVoiceState.update(t, !0), C.localLobbyVoiceStates.update({}, !0), V = !1
    }

    function k() {
        C.localVoiceState.update()
    }

    function M() {
        return C.localVoiceState.update(), C.localLobbyVoiceStates.update(), !1
    }

    function w() {
        return C.localPresenceState.update(), !1
    }

    function L() {
        return C.localLobbyVoiceStates.update(), !1
    }

    function U(e) {
        C.socket.isSessionEstablished() && C.socket.streamDelete(e)
    }
    class G extends r.default.Store {
        initialize() {
            this.waitFor(f.default, E.default, c.default, _.default, g.default, l.default), this.syncWith([m.default], M), this.syncWith([p.default], w)
        }
        getSocket() {
            return C.socket
        }
        isTryingToConnect() {
            return !C.socket.isClosed()
        }
        isConnected() {
            return C.socket.isSessionEstablished()
        }
        isConnectedOrOverlay() {
            return C.socket.isSessionEstablished() || __OVERLAY__
        }
        lastTimeConnectedChanged() {
            return P
        }
    }
    G.displayName = "GatewayConnectionStore";
    var F = new G(a.default, {
        START_SESSION: function() {
            return C.socket.isClosed() ? (O.verbose("Socket is reconnecting because of starting new session"), C.socket.connect()) : (O.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
        },
        LOGIN_SUCCESS: function() {
            return O.verbose("session refresh dispatched", {
                isEstablished: C.socket.isSessionEstablished()
            }), !!C.socket.isSessionEstablished() && (C.socket.close(), C.socket.connect())
        },
        LOGOUT: function(e) {
            e.isSwitchingAccount && C.localPresenceState.handleAccountSwitch(), O.verbose("Closing socket because of logout"), C.socket.close()
        },
        CLEAR_CACHES: function(e) {
            return e.resetSocket && (C.socket.close(), C.socket.dispatcher.clear(), C.socket.connect()), !1
        },
        CONNECTION_OPEN: e => {
            R(e)
        },
        CONNECTION_CLOSED: function() {
            O.verbose("connection closed dispatched"), P = Date.now()
        },
        RTC_CONNECTION_STATE: function(e) {
            if (e.state !== A.RTCConnectionStates.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? C.socket.streamPing(e.streamKey) : C.socket.voiceServerPing())
        },
        VOICE_CHANNEL_SELECT: function(e) {
            return C.localVoiceState.update({
                guildId: e.guildId,
                channelId: e.channelId
            }), !1
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (f.default.getId() !== t.userId) return e;
                if (t.sessionId === b) C.localVoiceState.setState({
                    guildId: t.guildId,
                    channelId: t.channelId
                });
                else {
                    if (t.guildId !== C.localVoiceState.guildId) return e;
                    C.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                }
                return !0
            }, !1)
        },
        GUILD_DELETE: function(e) {
            e.guild.id === C.localVoiceState.guildId && C.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            t.id === C.localVoiceState.channelId && C.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            t === C.localVoiceState.channelId && C.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        APP_STATE_UPDATE: function(e) {
            return e.state === A.AppStates.ACTIVE && (I.setIsPaused(!1), f.default.isAuthenticated() && C.socket.resetBackoff("App state is active")), !1
        },
        GUILD_MEMBERS_REQUEST: function(e) {
            return C.socket.isSessionEstablished() && ("userIds" in e ? i(e.userIds).chunk(100).forEach(t => {
                C.socket.requestGuildMembers(e.guildIds, {
                    userIds: t,
                    presences: !!e.presences
                })
            }) : C.socket.requestGuildMembers(e.guildIds, {
                query: e.query,
                limit: e.limit,
                presences: !!e.presences
            })), !1
        },
        GUILD_SEARCH_RECENT_MEMBERS: function(e) {
            let {
                guildId: t,
                query: n,
                continuationToken: s
            } = e;
            C.socket.isSessionEstablished() && C.socket.searchRecentMembers(t, {
                query: n,
                continuationToken: s
            })
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
            let {
                subscriptions: t
            } = e;
            return C.socket.isSessionEstablished() && C.socket.updateGuildSubscriptions(t), !1
        },
        CALL_CONNECT: function(e) {
            let {
                channelId: t
            } = e;
            return C.socket.isSessionEstablished() && C.socket.callConnect(t), !1
        },
        CALL_CONNECT_MULTIPLE: function(e) {
            let {
                channelIds: t
            } = e;
            return C.socket.isSessionEstablished() && t.forEach(e => {
                C.socket.callConnect(e)
            }), !1
        },
        LOBBY_CONNECT: function(e) {
            let {
                lobbyId: t,
                lobbySecret: n
            } = e;
            return C.socket.isSessionEstablished() && C.socket.lobbyConnect(t, n), !1
        },
        LOBBY_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e;
            return C.socket.isSessionEstablished() && C.socket.lobbyDisconnect(t), C.localLobbyVoiceStates.update(), !1
        },
        LOBBY_VOICE_CONNECT: L,
        LOBBY_VOICE_DISCONNECT: L,
        RPC_APP_DISCONNECTED: L,
        STREAM_CREATE: k,
        STREAM_START: function(e) {
            let {
                streamType: t,
                guildId: n,
                channelId: s
            } = e;
            if (C.socket.isSessionEstablished()) {
                var i, r;
                let e = null != n ? null === (i = c.default.getChannel(s)) || void 0 === i ? void 0 : i.rtcRegion : null === (r = _.default.getCall(s)) || void 0 === r ? void 0 : r.region;
                C.socket.streamCreate(t, n, s, null != e ? e : v.default.getPreferredRegion())
            }
            return !1
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t,
                allowMultiple: n
            } = e;
            return C.socket.isSessionEstablished() && (n || ! function() {
                let e = function() {
                    return y.default.getAllActiveStreamKeys().find(e => (0, u.decodeStreamKey)(e).ownerId === f.default.getId())
                }();
                y.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => U(e))
            }(), C.socket.streamWatch(t)), !1
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            return U(t), k(), !1
        },
        STREAM_SET_PAUSED: function(e) {
            let {
                streamKey: t,
                paused: n
            } = e;
            C.socket.isSessionEstablished() && C.socket.streamSetPaused(t, n)
        },
        PUSH_NOTIFICATION_CLICK: function() {
            return C.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            var t, n;
            let {
                channelId: s,
                applicationId: i
            } = e, r = null !== (n = null === (t = c.default.getChannel(s)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
            C.socket.embeddedActivityClose(r, s, i)
        },
        REQUEST_FORUM_UNREADS: function(e) {
            let {
                guildId: t,
                channelId: n,
                threads: s
            } = e;
            C.socket.requestForumUnreads(t, n, s)
        },
        REQUEST_SOUNDBOARD_SOUNDS: function(e) {
            let {
                guildIds: t
            } = e;
            C.socket.requestSoundboardSounds(t)
        },
        REMOTE_COMMAND: function(e) {
            let {
                sessionId: t,
                payload: n
            } = e;
            return C.socket.isSessionEstablished() && C.socket.remoteCommand(t, n), !1
        },
        RESET_SOCKET: function(e) {
            C.socket.connectionState !== T.default.WILL_RECONNECT && C.socket.resetSocketOnError(e.args)
        },
        RTC_SPEED_TEST_START_TEST: function() {
            return C.socket.isSessionEstablished() && C.socket.speedTestCreate(v.default.getPreferredRegion()), !1
        },
        RTC_SPEED_TEST_STOP_TEST: function() {
            return C.socket.isSessionEstablished() && C.socket.speedTestDelete(), !1
        },
        CLIPS_SETTINGS_UPDATE: k,
        RUNNING_GAMES_CHANGE: k,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t;
            e.settings.type === D.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && k()
        }
    })
}