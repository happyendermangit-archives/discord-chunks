function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("808653");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("987317"),
        l = n("605250"),
        u = n("374014"),
        d = n("374363"),
        c = n("271938"),
        f = n("950104"),
        _ = n("42203"),
        E = n("260320"),
        h = n("42887"),
        g = n("945956"),
        m = n("590401"),
        p = n("18494"),
        S = n("101125"),
        v = n("205817"),
        T = n("41642"),
        I = n("518916"),
        C = n("571420"),
        A = n("399010"),
        y = n("49111"),
        N = n("397336");
    let R = window.DiscordNative;
    I.socket.dispatcher.getDispatchHandler = A.default;
    let O = new l.default("ConnectionStore"),
        D = 0,
        P = null,
        L = !0;
    async function M(e) {
        D = Date.now(), P = e.sessionId, I.localPresenceState.handleConnectionOpen();
        let t = {},
            n = p.default.getVoiceChannelId();
        if (null != n) {
            var i, s, r, a, l, u, d, c;
            let e = (null === (l = window) || void 0 === l ? void 0 : null === (a = l.performance) || void 0 === a ? void 0 : null === (r = a.getEntriesByType) || void 0 === r ? void 0 : null === (s = r.call(a, "navigation")) || void 0 === s ? void 0 : null === (i = s[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (u = await (null == R ? void 0 : null === (c = R.processUtils) || void 0 === c ? void 0 : null === (d = c.getLastCrash) || void 0 === d ? void 0 : d.call(c))) || void 0 === u ? void 0 : u.rendererCrashReason) != null;
            if (e || !L) {
                let e = _.default.getChannel(n);
                null != e && (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                })
            } else g.default.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null)
        }
        I.localVoiceState.update(t, !0), I.localLobbyVoiceStates.update({}, !0), L = !1
    }

    function b() {
        I.localVoiceState.update()
    }

    function U() {
        return I.localVoiceState.update(), I.localLobbyVoiceStates.update(), !1
    }

    function w() {
        return I.localPresenceState.update(), !1
    }

    function k() {
        return I.localLobbyVoiceStates.update(), !1
    }

    function V(e) {
        I.socket.isSessionEstablished() && I.socket.streamDelete(e)
    }
    class G extends r.default.Store {
        initialize() {
            this.waitFor(c.default, p.default, _.default, f.default, E.default, d.default), this.syncWith([h.default], U), this.syncWith([S.default], w)
        }
        getSocket() {
            return I.socket
        }
        isTryingToConnect() {
            return !I.socket.isClosed()
        }
        isConnected() {
            return I.socket.isSessionEstablished()
        }
        isConnectedOrOverlay() {
            return I.socket.isSessionEstablished() || __OVERLAY__
        }
        lastTimeConnectedChanged() {
            return D
        }
    }
    G.displayName = "GatewayConnectionStore";
    var F = new G(a.default, {
        START_SESSION: function() {
            return I.socket.isClosed() ? (O.verbose("Socket is reconnecting because of starting new session"), I.socket.connect()) : (O.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
        },
        LOGIN_SUCCESS: function() {
            return O.verbose("session refresh dispatched", {
                isEstablished: I.socket.isSessionEstablished()
            }), !!I.socket.isSessionEstablished() && (I.socket.close(), I.socket.connect())
        },
        LOGOUT: function(e) {
            e.isSwitchingAccount && I.localPresenceState.handleAccountSwitch(), O.verbose("Closing socket because of logout"), I.socket.close()
        },
        CLEAR_CACHES: function(e) {
            return e.resetSocket && (I.socket.close(), I.socket.dispatcher.clear(), I.socket.connect()), !1
        },
        CONNECTION_OPEN: e => {
            M(e)
        },
        CONNECTION_CLOSED: function() {
            O.verbose("connection closed dispatched"), D = Date.now()
        },
        RTC_CONNECTION_STATE: function(e) {
            if (e.state !== y.RTCConnectionStates.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? I.socket.streamPing(e.streamKey) : I.socket.voiceServerPing())
        },
        VOICE_CHANNEL_SELECT: function(e) {
            return I.localVoiceState.update({
                guildId: e.guildId,
                channelId: e.channelId
            }), !1
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (c.default.getId() !== t.userId) return e;
                if (t.sessionId === P) I.localVoiceState.setState({
                    guildId: t.guildId,
                    channelId: t.channelId
                });
                else {
                    if (t.guildId !== I.localVoiceState.guildId) return e;
                    I.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                }
                return !0
            }, !1)
        },
        GUILD_DELETE: function(e) {
            e.guild.id === I.localVoiceState.guildId && I.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            t.id === I.localVoiceState.channelId && I.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            t === I.localVoiceState.channelId && I.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        APP_STATE_UPDATE: function(e) {
            return e.state === y.AppStates.ACTIVE && (C.setIsPaused(!1), c.default.isAuthenticated() && I.socket.resetBackoff("App state is active")), !1
        },
        GUILD_MEMBERS_REQUEST: function(e) {
            return I.socket.isSessionEstablished() && ("userIds" in e ? s(e.userIds).chunk(100).forEach(t => {
                I.socket.requestGuildMembers(e.guildIds, {
                    userIds: t,
                    presences: !!e.presences
                })
            }) : I.socket.requestGuildMembers(e.guildIds, {
                query: e.query,
                limit: e.limit,
                presences: !!e.presences
            })), !1
        },
        GUILD_SEARCH_RECENT_MEMBERS: function(e) {
            let {
                guildId: t,
                query: n,
                continuationToken: i
            } = e;
            I.socket.isSessionEstablished() && I.socket.searchRecentMembers(t, {
                query: n,
                continuationToken: i
            })
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
            let {
                subscriptions: t
            } = e;
            return I.socket.isSessionEstablished() && I.socket.updateGuildSubscriptions(t), !1
        },
        CALL_CONNECT: function(e) {
            let {
                channelId: t
            } = e;
            return I.socket.isSessionEstablished() && I.socket.callConnect(t), !1
        },
        CALL_CONNECT_MULTIPLE: function(e) {
            let {
                channelIds: t
            } = e;
            return I.socket.isSessionEstablished() && t.forEach(e => {
                I.socket.callConnect(e)
            }), !1
        },
        LOBBY_CONNECT: function(e) {
            let {
                lobbyId: t,
                lobbySecret: n
            } = e;
            return I.socket.isSessionEstablished() && I.socket.lobbyConnect(t, n), !1
        },
        LOBBY_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e;
            return I.socket.isSessionEstablished() && I.socket.lobbyDisconnect(t), I.localLobbyVoiceStates.update(), !1
        },
        LOBBY_VOICE_CONNECT: k,
        LOBBY_VOICE_DISCONNECT: k,
        RPC_APP_DISCONNECTED: k,
        STREAM_CREATE: b,
        STREAM_START: function(e) {
            let {
                streamType: t,
                guildId: n,
                channelId: i
            } = e;
            if (I.socket.isSessionEstablished()) {
                var s, r;
                let e = null != n ? null === (s = _.default.getChannel(i)) || void 0 === s ? void 0 : s.rtcRegion : null === (r = f.default.getCall(i)) || void 0 === r ? void 0 : r.region;
                I.socket.streamCreate(t, n, i, null != e ? e : m.default.getPreferredRegion())
            }
            return !1
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t,
                allowMultiple: n
            } = e;
            return I.socket.isSessionEstablished() && (n || ! function() {
                let e = function() {
                    return v.default.getAllActiveStreamKeys().find(e => (0, u.decodeStreamKey)(e).ownerId === c.default.getId())
                }();
                v.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => V(e))
            }(), I.socket.streamWatch(t)), !1
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            return V(t), b(), !1
        },
        STREAM_SET_PAUSED: function(e) {
            let {
                streamKey: t,
                paused: n
            } = e;
            I.socket.isSessionEstablished() && I.socket.streamSetPaused(t, n)
        },
        PUSH_NOTIFICATION_CLICK: function() {
            return I.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            var t, n;
            let {
                channelId: i,
                applicationId: s
            } = e, r = null !== (n = null === (t = _.default.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
            I.socket.embeddedActivityClose(r, i, s)
        },
        REQUEST_FORUM_UNREADS: function(e) {
            let {
                guildId: t,
                channelId: n,
                threads: i
            } = e;
            I.socket.requestForumUnreads(t, n, i)
        },
        REQUEST_SOUNDBOARD_SOUNDS: function(e) {
            let {
                guildIds: t
            } = e;
            I.socket.requestSoundboardSounds(t)
        },
        REMOTE_COMMAND: function(e) {
            let {
                sessionId: t,
                payload: n
            } = e;
            return I.socket.isSessionEstablished() && I.socket.remoteCommand(t, n), !1
        },
        RESET_SOCKET: function(e) {
            I.socket.connectionState !== T.default.WILL_RECONNECT && I.socket.resetSocketOnError(e.args)
        },
        RTC_SPEED_TEST_START_TEST: function() {
            return I.socket.isSessionEstablished() && I.socket.speedTestCreate(m.default.getPreferredRegion()), !1
        },
        RTC_SPEED_TEST_STOP_TEST: function() {
            return I.socket.isSessionEstablished() && I.socket.speedTestDelete(), !1
        },
        CLIPS_SETTINGS_UPDATE: b,
        RUNNING_GAMES_CHANGE: b,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t;
            e.settings.type === N.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && b()
        }
    })
}