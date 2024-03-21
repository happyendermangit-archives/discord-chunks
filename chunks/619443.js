function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
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
        _ = n("950104"),
        f = n("42203"),
        E = n("260320"),
        h = n("42887"),
        g = n("945956"),
        m = n("590401"),
        p = n("18494"),
        S = n("101125"),
        T = n("205817"),
        v = n("773336"),
        I = n("41642"),
        A = n("518916"),
        C = n("571420"),
        y = n("399010"),
        N = n("49111"),
        R = n("397336");
    let O = window.DiscordNative;
    A.socket.dispatcher.getDispatchHandler = y.default;
    let D = new l.default("ConnectionStore"),
        P = 0,
        L = null,
        M = !0,
        b = null;
    async function U(e) {
        P = Date.now(), L = e.sessionId, A.localPresenceState.handleConnectionOpen();
        let t = {},
            n = p.default.getVoiceChannelId();
        if (null != n) {
            var i, s, r, a, l, u, d, c;
            let e = (null === (l = window) || void 0 === l ? void 0 : null === (a = l.performance) || void 0 === a ? void 0 : null === (r = a.getEntriesByType) || void 0 === r ? void 0 : null === (s = r.call(a, "navigation")) || void 0 === s ? void 0 : null === (i = s[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (u = await (null == O ? void 0 : null === (c = O.processUtils) || void 0 === c ? void 0 : null === (d = c.getLastCrash) || void 0 === d ? void 0 : d.call(c))) || void 0 === u ? void 0 : u.rendererCrashReason) != null;
            if (e || !M) {
                let e = f.default.getChannel(n);
                null != e && (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                })
            } else g.default.setLastSessionVoiceChannelId(null != n ? n : null), o.default.selectVoiceChannel(null)
        }
        A.localVoiceState.update(t, !0), A.localLobbyVoiceStates.update({}, !0), M = !1
    }

    function w() {
        A.localVoiceState.update()
    }

    function k() {
        return A.localVoiceState.update(), A.localLobbyVoiceStates.update(), !1
    }

    function V() {
        return A.localPresenceState.update(), !1
    }

    function G() {
        return A.localLobbyVoiceStates.update(), !1
    }

    function F(e) {
        A.socket.isSessionEstablished() && A.socket.streamDelete(e)
    }
    class x extends r.default.Store {
        initialize() {
            this.waitFor(c.default, p.default, f.default, _.default, E.default, d.default), this.syncWith([h.default], k), this.syncWith([S.default], V)
        }
        getSocket() {
            return A.socket
        }
        isTryingToConnect() {
            return !A.socket.isClosed()
        }
        isConnected() {
            return A.socket.isSessionEstablished()
        }
        isConnectedOrOverlay() {
            return A.socket.isSessionEstablished() || __OVERLAY__
        }
        lastTimeConnectedChanged() {
            return P
        }
    }
    x.displayName = "GatewayConnectionStore";
    var B = new x(a.default, {
        START_SESSION: function() {
            return A.socket.isClosed() ? (D.verbose("Socket is reconnecting because of starting new session"), A.socket.connect()) : (D.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
        },
        LOGIN_SUCCESS: function() {
            return D.verbose("session refresh dispatched", {
                isEstablished: A.socket.isSessionEstablished()
            }), !!A.socket.isSessionEstablished() && (A.socket.close(), A.socket.connect())
        },
        LOGOUT: function(e) {
            e.isSwitchingAccount && A.localPresenceState.handleAccountSwitch(), D.verbose("Closing socket because of logout"), A.socket.close()
        },
        CLEAR_CACHES: function(e) {
            return e.resetSocket && (A.socket.close(), A.socket.dispatcher.clear(), A.socket.connect()), !1
        },
        CONNECTION_OPEN: e => {
            U(e)
        },
        CONNECTION_CLOSED: function() {
            D.verbose("connection closed dispatched"), P = Date.now()
        },
        RTC_CONNECTION_STATE: function(e) {
            if (e.state !== N.RTCConnectionStates.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? A.socket.streamPing(e.streamKey) : A.socket.voiceServerPing())
        },
        VOICE_CHANNEL_SELECT: function(e) {
            return A.localVoiceState.update({
                guildId: e.guildId,
                channelId: e.channelId
            }), (0, v.isIOS)() && null == e.channelId && b === N.AppStates.BACKGROUND && A.socket.close(!0), !1
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (c.default.getId() !== t.userId) return e;
                if (t.sessionId === L) A.localVoiceState.setState({
                    guildId: t.guildId,
                    channelId: t.channelId
                });
                else {
                    if (t.guildId !== A.localVoiceState.guildId) return e;
                    A.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                }
                return !0
            }, !1)
        },
        GUILD_DELETE: function(e) {
            e.guild.id === A.localVoiceState.guildId && A.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            t.id === A.localVoiceState.channelId && A.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            t === A.localVoiceState.channelId && A.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        APP_STATE_UPDATE: function(e) {
            return (0, v.isIOS)() ? (c.default.isAuthenticated() && (b === N.AppStates.INACTIVE && e.state === N.AppStates.BACKGROUND && null == A.localVoiceState.channelId ? A.socket.close(!0) : b === N.AppStates.BACKGROUND && e.state === N.AppStates.ACTIVE && (C.setIsPaused(!1), A.socket.connect())), b = e.state) : e.state === N.AppStates.ACTIVE && (C.setIsPaused(!1), c.default.isAuthenticated() && A.socket.resetBackoff("App state is active")), !1
        },
        GUILD_MEMBERS_REQUEST: function(e) {
            return A.socket.isSessionEstablished() && ("userIds" in e ? s(e.userIds).chunk(100).forEach(t => {
                A.socket.requestGuildMembers(e.guildIds, {
                    userIds: t,
                    presences: !!e.presences
                })
            }) : A.socket.requestGuildMembers(e.guildIds, {
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
            A.socket.isSessionEstablished() && A.socket.searchRecentMembers(t, {
                query: n,
                continuationToken: i
            })
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
            let {
                subscriptions: t
            } = e;
            return A.socket.isSessionEstablished() && A.socket.updateGuildSubscriptions(t), !1
        },
        CALL_CONNECT: function(e) {
            let {
                channelId: t
            } = e;
            return A.socket.isSessionEstablished() && A.socket.callConnect(t), !1
        },
        CALL_CONNECT_MULTIPLE: function(e) {
            let {
                channelIds: t
            } = e;
            return A.socket.isSessionEstablished() && t.forEach(e => {
                A.socket.callConnect(e)
            }), !1
        },
        LOBBY_CONNECT: function(e) {
            let {
                lobbyId: t,
                lobbySecret: n
            } = e;
            return A.socket.isSessionEstablished() && A.socket.lobbyConnect(t, n), !1
        },
        LOBBY_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e;
            return A.socket.isSessionEstablished() && A.socket.lobbyDisconnect(t), A.localLobbyVoiceStates.update(), !1
        },
        LOBBY_VOICE_CONNECT: G,
        LOBBY_VOICE_DISCONNECT: G,
        RPC_APP_DISCONNECTED: G,
        STREAM_CREATE: w,
        STREAM_START: function(e) {
            let {
                streamType: t,
                guildId: n,
                channelId: i
            } = e;
            if (A.socket.isSessionEstablished()) {
                var s, r;
                let e = null != n ? null === (s = f.default.getChannel(i)) || void 0 === s ? void 0 : s.rtcRegion : null === (r = _.default.getCall(i)) || void 0 === r ? void 0 : r.region;
                A.socket.streamCreate(t, n, i, null != e ? e : m.default.getPreferredRegion())
            }
            return !1
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t,
                allowMultiple: n
            } = e;
            return A.socket.isSessionEstablished() && (n || ! function() {
                let e = function() {
                    return T.default.getAllActiveStreamKeys().find(e => (0, u.decodeStreamKey)(e).ownerId === c.default.getId())
                }();
                T.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => F(e))
            }(), A.socket.streamWatch(t)), !1
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            return F(t), w(), !1
        },
        STREAM_SET_PAUSED: function(e) {
            let {
                streamKey: t,
                paused: n
            } = e;
            A.socket.isSessionEstablished() && A.socket.streamSetPaused(t, n)
        },
        PUSH_NOTIFICATION_CLICK: function() {
            return A.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            var t, n;
            let {
                channelId: i,
                applicationId: s
            } = e, r = null !== (n = null === (t = f.default.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
            A.socket.embeddedActivityClose(r, i, s)
        },
        REQUEST_FORUM_UNREADS: function(e) {
            let {
                guildId: t,
                channelId: n,
                threads: i
            } = e;
            A.socket.requestForumUnreads(t, n, i)
        },
        REQUEST_SOUNDBOARD_SOUNDS: function(e) {
            let {
                guildIds: t
            } = e;
            A.socket.requestSoundboardSounds(t)
        },
        REMOTE_COMMAND: function(e) {
            let {
                sessionId: t,
                payload: n
            } = e;
            return A.socket.isSessionEstablished() && A.socket.remoteCommand(t, n), !1
        },
        RESET_SOCKET: function(e) {
            A.socket.connectionState !== I.default.WILL_RECONNECT && A.socket.resetSocketOnError(e.args)
        },
        RTC_SPEED_TEST_START_TEST: function() {
            return A.socket.isSessionEstablished() && A.socket.speedTestCreate(m.default.getPreferredRegion()), !1
        },
        RTC_SPEED_TEST_STOP_TEST: function() {
            return A.socket.isSessionEstablished() && A.socket.speedTestDelete(), !1
        },
        CLIPS_SETTINGS_UPDATE: w,
        RUNNING_GAMES_CHANGE: w,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t;
            e.settings.type === R.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && w()
        }
    })
}