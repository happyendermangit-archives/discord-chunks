function(e, t, n) {
    "use strict";
    n.r(t), n("724458");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("287734"),
        c = n("710845"),
        E = n("569545"),
        I = n("581883"),
        T = n("314897"),
        f = n("523746"),
        S = n("592125"),
        A = n("157305"),
        h = n("131951"),
        m = n("19780"),
        N = n("936349"),
        O = n("944486"),
        p = n("885110"),
        R = n("959457"),
        C = n("358085"),
        g = n("138859"),
        L = n("955132"),
        D = n("645436"),
        v = n("344651"),
        M = n("981631"),
        y = n("526761");
    let P = window.DiscordNative;
    L.socket.dispatcher.getDispatchHandler = v.default;
    let U = new c.default("ConnectionStore"),
        b = 0,
        G = null,
        w = !0,
        B = null;
    async function k(e) {
        b = Date.now(), G = e.sessionId, L.localPresenceState.handleConnectionOpen();
        let t = {},
            n = O.default.getVoiceChannelId();
        if (null != n) {
            var i, r, s, a, o, l, u, d;
            if ((null === (o = window) || void 0 === o ? void 0 : null === (a = o.performance) || void 0 === a ? void 0 : null === (s = a.getEntriesByType) || void 0 === s ? void 0 : null === (r = s.call(a, "navigation")) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (l = await (null == P ? void 0 : null === (d = P.processUtils) || void 0 === d ? void 0 : null === (u = d.getLastCrash) || void 0 === u ? void 0 : u.call(d))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !w) {
                let e = S.default.getChannel(n);
                null != e && (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                })
            } else m.default.setLastSessionVoiceChannelId(null != n ? n : null), _.default.selectVoiceChannel(null)
        }
        L.localVoiceState.update(t, !0), L.localLobbyVoiceStates.update({}, !0), w = !1
    }

    function V() {
        L.localVoiceState.update()
    }

    function F() {
        return L.localVoiceState.update(), L.localLobbyVoiceStates.update(), !1
    }

    function x() {
        return L.localPresenceState.update(), !1
    }

    function H() {
        return L.localLobbyVoiceStates.update(), !1
    }

    function Y(e) {
        L.socket.isSessionEstablished() && L.socket.streamDelete(e)
    }
    class j extends(i = u.default.Store) {
        initialize() {
            this.waitFor(T.default, O.default, S.default, f.default, A.default, I.default), this.syncWith([h.default], F), this.syncWith([p.default], x)
        }
        getSocket() {
            return L.socket
        }
        isTryingToConnect() {
            return !L.socket.isClosed()
        }
        isConnected() {
            return L.socket.isSessionEstablished()
        }
        isConnectedOrOverlay() {
            return L.socket.isSessionEstablished() || __OVERLAY__
        }
        lastTimeConnectedChanged() {
            return b
        }
    }
    a = "GatewayConnectionStore", (s = "displayName") in(r = j) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new j(d.default, {
        START_SESSION: function() {
            return L.socket.isClosed() ? (U.verbose("Socket is reconnecting because of starting new session"), L.socket.connect()) : (U.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
        },
        LOGIN_SUCCESS: function() {
            return U.verbose("session refresh dispatched", {
                isEstablished: L.socket.isSessionEstablished()
            }), !!L.socket.isSessionEstablished() && (L.socket.close(), L.socket.connect())
        },
        LOGOUT: function(e) {
            e.isSwitchingAccount && L.localPresenceState.handleAccountSwitch(), U.verbose("Closing socket because of logout"), L.socket.close()
        },
        CLEAR_CACHES: function(e) {
            return e.resetSocket && (L.socket.close(), L.socket.dispatcher.clear(), L.socket.connect()), !1
        },
        CONNECTION_OPEN: e => {
            k(e)
        },
        CONNECTION_CLOSED: function() {
            U.verbose("connection closed dispatched"), b = Date.now()
        },
        RTC_CONNECTION_STATE: function(e) {
            if (e.state !== M.RTCConnectionStates.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? L.socket.streamPing(e.streamKey) : L.socket.voiceServerPing())
        },
        VOICE_CHANNEL_SELECT: function(e) {
            return L.localVoiceState.update({
                guildId: e.guildId,
                channelId: e.channelId
            }), (0, C.isIOS)() && null == e.channelId && B === M.AppStates.BACKGROUND && L.socket.close(!0), !1
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (T.default.getId() !== t.userId) return e;
                if (t.sessionId === G) L.localVoiceState.setState({
                    guildId: t.guildId,
                    channelId: t.channelId
                });
                else {
                    if (t.guildId !== L.localVoiceState.guildId) return e;
                    L.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                }
                return !0
            }, !1)
        },
        GUILD_DELETE: function(e) {
            e.guild.id === L.localVoiceState.guildId && L.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            t.id === L.localVoiceState.channelId && L.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            t === L.localVoiceState.channelId && L.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        APP_STATE_UPDATE: function(e) {
            return (0, C.isIOS)() ? (T.default.isAuthenticated() && (B === M.AppStates.INACTIVE && e.state === M.AppStates.BACKGROUND && null == L.localVoiceState.channelId ? L.socket.close(!0) : B === M.AppStates.BACKGROUND && e.state === M.AppStates.ACTIVE && (D.setIsPaused(!1), L.socket.connect())), B = e.state) : e.state === M.AppStates.ACTIVE && (D.setIsPaused(!1), T.default.isAuthenticated() && L.socket.resetBackoff("App state is active")), !1
        },
        GUILD_MEMBERS_REQUEST: function(e) {
            return L.socket.isSessionEstablished() && ("userIds" in e ? l()(e.userIds).chunk(100).forEach(t => {
                L.socket.requestGuildMembers(e.guildIds, {
                    userIds: t,
                    presences: !!e.presences
                })
            }) : L.socket.requestGuildMembers(e.guildIds, {
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
            L.socket.isSessionEstablished() && L.socket.searchRecentMembers(t, {
                query: n,
                continuationToken: i
            })
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
            let {
                subscriptions: t
            } = e;
            return L.socket.isSessionEstablished() && L.socket.updateGuildSubscriptions(t), !1
        },
        CALL_CONNECT: function(e) {
            let {
                channelId: t
            } = e;
            return L.socket.isSessionEstablished() && L.socket.callConnect(t), !1
        },
        CALL_CONNECT_MULTIPLE: function(e) {
            let {
                channelIds: t
            } = e;
            return L.socket.isSessionEstablished() && t.forEach(e => {
                L.socket.callConnect(e)
            }), !1
        },
        LOBBY_CONNECT: function(e) {
            let {
                lobbyId: t,
                lobbySecret: n
            } = e;
            return L.socket.isSessionEstablished() && L.socket.lobbyConnect(t, n), !1
        },
        LOBBY_DISCONNECT: function(e) {
            let {
                lobbyId: t
            } = e;
            return L.socket.isSessionEstablished() && L.socket.lobbyDisconnect(t), L.localLobbyVoiceStates.update(), !1
        },
        LOBBY_VOICE_CONNECT: H,
        LOBBY_VOICE_DISCONNECT: H,
        RPC_APP_DISCONNECTED: H,
        STREAM_CREATE: V,
        STREAM_START: function(e) {
            let {
                streamType: t,
                guildId: n,
                channelId: i
            } = e;
            if (L.socket.isSessionEstablished()) {
                var r, s;
                let e = null != n ? null === (r = S.default.getChannel(i)) || void 0 === r ? void 0 : r.rtcRegion : null === (s = f.default.getCall(i)) || void 0 === s ? void 0 : s.region;
                L.socket.streamCreate(t, n, i, null != e ? e : N.default.getPreferredRegion())
            }
            return !1
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t,
                allowMultiple: n
            } = e;
            return L.socket.isSessionEstablished() && (n || ! function() {
                let e = function() {
                    return R.default.getAllActiveStreamKeys().find(e => (0, E.decodeStreamKey)(e).ownerId === T.default.getId())
                }();
                R.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => Y(e))
            }(), L.socket.streamWatch(t)), !1
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            return Y(t), V(), !1
        },
        STREAM_SET_PAUSED: function(e) {
            let {
                streamKey: t,
                paused: n
            } = e;
            L.socket.isSessionEstablished() && L.socket.streamSetPaused(t, n)
        },
        PUSH_NOTIFICATION_CLICK: function() {
            return L.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            var t, n;
            let {
                channelId: i,
                applicationId: r
            } = e, s = null !== (n = null === (t = S.default.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
            L.socket.embeddedActivityClose(s, i, r)
        },
        REQUEST_FORUM_UNREADS: function(e) {
            let {
                guildId: t,
                channelId: n,
                threads: i
            } = e;
            L.socket.requestForumUnreads(t, n, i)
        },
        REQUEST_SOUNDBOARD_SOUNDS: function(e) {
            let {
                guildIds: t
            } = e;
            L.socket.requestSoundboardSounds(t)
        },
        REMOTE_COMMAND: function(e) {
            let {
                sessionId: t,
                payload: n
            } = e;
            return L.socket.isSessionEstablished() && L.socket.remoteCommand(t, n), !1
        },
        RESET_SOCKET: function(e) {
            L.socket.connectionState !== g.default.WILL_RECONNECT && L.socket.resetSocketOnError(e.args)
        },
        RTC_SPEED_TEST_START_TEST: function() {
            return L.socket.isSessionEstablished() && L.socket.speedTestCreate(N.default.getPreferredRegion()), !1
        },
        RTC_SPEED_TEST_STOP_TEST: function() {
            return L.socket.isSessionEstablished() && L.socket.speedTestDelete(), !1
        },
        CLIPS_SETTINGS_UPDATE: V,
        RUNNING_GAMES_CHANGE: V,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t;
            e.settings.type === y.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && V()
        }
    })
}