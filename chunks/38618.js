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
        A = n("131951"),
        h = n("19780"),
        m = n("936349"),
        N = n("944486"),
        O = n("885110"),
        p = n("959457"),
        R = n("358085"),
        C = n("138859"),
        g = n("955132"),
        L = n("645436"),
        D = n("344651"),
        v = n("981631"),
        M = n("526761");
    let y = window.DiscordNative;
    g.socket.dispatcher.getDispatchHandler = D.default;
    let P = new c.default("ConnectionStore"),
        U = 0,
        b = null,
        G = !0,
        w = null;
    async function k(e) {
        U = Date.now(), b = e.sessionId, g.localPresenceState.handleConnectionOpen();
        let t = {},
            n = N.default.getVoiceChannelId();
        if (null != n) {
            var i, r, s, a, o, l, u, d;
            if ((null === (o = window) || void 0 === o ? void 0 : null === (a = o.performance) || void 0 === a ? void 0 : null === (s = a.getEntriesByType) || void 0 === s ? void 0 : null === (r = s.call(a, "navigation")) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.type) === "reload" || (null === (l = await (null == y ? void 0 : null === (d = y.processUtils) || void 0 === d ? void 0 : null === (u = d.getLastCrash) || void 0 === u ? void 0 : u.call(d))) || void 0 === l ? void 0 : l.rendererCrashReason) != null || !G) {
                let e = S.default.getChannel(n);
                null != e && (t = {
                    guildId: e.getGuildId(),
                    channelId: n
                })
            } else h.default.setLastSessionVoiceChannelId(null != n ? n : null), _.default.selectVoiceChannel(null)
        }
        g.localVoiceState.update(t, !0), G = !1
    }

    function B() {
        g.localVoiceState.update()
    }

    function V() {
        return g.localVoiceState.update(), !1
    }

    function F() {
        return g.localPresenceState.update(), !1
    }

    function x(e) {
        g.socket.isSessionEstablished() && g.socket.streamDelete(e)
    }
    class H extends(i = u.default.Store) {
        initialize() {
            this.waitFor(T.default, N.default, S.default, f.default, I.default), this.syncWith([A.default], V), this.syncWith([O.default], F)
        }
        getSocket() {
            return g.socket
        }
        isTryingToConnect() {
            return !g.socket.isClosed()
        }
        isConnected() {
            return g.socket.isSessionEstablished()
        }
        isConnectedOrOverlay() {
            return g.socket.isSessionEstablished() || __OVERLAY__
        }
        lastTimeConnectedChanged() {
            return U
        }
    }
    a = "GatewayConnectionStore", (s = "displayName") in(r = H) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new H(d.default, {
        START_SESSION: function() {
            return g.socket.isClosed() ? (P.verbose("Socket is reconnecting because of starting new session"), g.socket.connect()) : (P.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
        },
        LOGIN_SUCCESS: function() {
            return P.verbose("session refresh dispatched", {
                isEstablished: g.socket.isSessionEstablished()
            }), !!g.socket.isSessionEstablished() && (g.socket.close(), g.socket.connect())
        },
        LOGOUT: function(e) {
            e.isSwitchingAccount && g.localPresenceState.handleAccountSwitch(), P.verbose("Closing socket because of logout"), g.socket.close()
        },
        CLEAR_CACHES: function(e) {
            return e.resetSocket && (g.socket.close(), g.socket.dispatcher.clear(), g.socket.connect()), !1
        },
        CONNECTION_OPEN: e => {
            k(e)
        },
        CONNECTION_CLOSED: function() {
            P.verbose("connection closed dispatched"), U = Date.now()
        },
        RTC_CONNECTION_STATE: function(e) {
            if (e.state !== v.RTCConnectionStates.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? g.socket.streamPing(e.streamKey) : g.socket.voiceServerPing())
        },
        VOICE_CHANNEL_SELECT: function(e) {
            return g.localVoiceState.update({
                guildId: e.guildId,
                channelId: e.channelId
            }), (0, R.isIOS)() && null == e.channelId && w === v.AppStates.BACKGROUND && g.socket.close(!0), !1
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (T.default.getId() !== t.userId) return e;
                if (t.sessionId === b) g.localVoiceState.setState({
                    guildId: t.guildId,
                    channelId: t.channelId
                });
                else {
                    if (t.guildId !== g.localVoiceState.guildId) return e;
                    g.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                }
                return !0
            }, !1)
        },
        GUILD_DELETE: function(e) {
            e.guild.id === g.localVoiceState.guildId && g.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            t.id === g.localVoiceState.channelId && g.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            t === g.localVoiceState.channelId && g.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        APP_STATE_UPDATE: function(e) {
            return (0, R.isIOS)() ? (T.default.isAuthenticated() && (w === v.AppStates.INACTIVE && e.state === v.AppStates.BACKGROUND && null == g.localVoiceState.channelId ? g.socket.close(!0) : w === v.AppStates.BACKGROUND && e.state === v.AppStates.ACTIVE && (L.setIsPaused(!1), g.socket.connect())), w = e.state) : e.state === v.AppStates.ACTIVE && (L.setIsPaused(!1), T.default.isAuthenticated() && g.socket.resetBackoff("App state is active")), !1
        },
        GUILD_MEMBERS_REQUEST: function(e) {
            return g.socket.isSessionEstablished() && ("userIds" in e ? l()(e.userIds).chunk(100).forEach(t => {
                g.socket.requestGuildMembers(e.guildIds, {
                    userIds: t,
                    presences: !!e.presences
                })
            }) : g.socket.requestGuildMembers(e.guildIds, {
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
            g.socket.isSessionEstablished() && g.socket.searchRecentMembers(t, {
                query: n,
                continuationToken: i
            })
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
            let {
                subscriptions: t
            } = e;
            return g.socket.isSessionEstablished() && g.socket.updateGuildSubscriptions(t), !1
        },
        CALL_CONNECT: function(e) {
            let {
                channelId: t
            } = e;
            return g.socket.isSessionEstablished() && g.socket.callConnect(t), !1
        },
        CALL_CONNECT_MULTIPLE: function(e) {
            let {
                channelIds: t
            } = e;
            return g.socket.isSessionEstablished() && t.forEach(e => {
                g.socket.callConnect(e)
            }), !1
        },
        STREAM_CREATE: B,
        STREAM_START: function(e) {
            let {
                streamType: t,
                guildId: n,
                channelId: i
            } = e;
            if (g.socket.isSessionEstablished()) {
                var r, s;
                let e = null != n ? null === (r = S.default.getChannel(i)) || void 0 === r ? void 0 : r.rtcRegion : null === (s = f.default.getCall(i)) || void 0 === s ? void 0 : s.region;
                g.socket.streamCreate(t, n, i, null != e ? e : m.default.getPreferredRegion())
            }
            return !1
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t,
                allowMultiple: n
            } = e;
            return g.socket.isSessionEstablished() && (n || ! function() {
                let e = function() {
                    return p.default.getAllActiveStreamKeys().find(e => (0, E.decodeStreamKey)(e).ownerId === T.default.getId())
                }();
                p.default.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => x(e))
            }(), g.socket.streamWatch(t)), !1
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            return x(t), B(), !1
        },
        STREAM_SET_PAUSED: function(e) {
            let {
                streamKey: t,
                paused: n
            } = e;
            g.socket.isSessionEstablished() && g.socket.streamSetPaused(t, n)
        },
        PUSH_NOTIFICATION_CLICK: function() {
            return g.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            var t, n;
            let {
                channelId: i,
                applicationId: r
            } = e, s = null !== (n = null === (t = S.default.getChannel(i)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
            g.socket.embeddedActivityClose(s, i, r)
        },
        REQUEST_FORUM_UNREADS: function(e) {
            let {
                guildId: t,
                channelId: n,
                threads: i
            } = e;
            g.socket.requestForumUnreads(t, n, i)
        },
        REQUEST_SOUNDBOARD_SOUNDS: function(e) {
            let {
                guildIds: t
            } = e;
            g.socket.requestSoundboardSounds(t)
        },
        REMOTE_COMMAND: function(e) {
            let {
                sessionId: t,
                payload: n
            } = e;
            return g.socket.isSessionEstablished() && g.socket.remoteCommand(t, n), !1
        },
        RESET_SOCKET: function(e) {
            g.socket.connectionState !== C.default.WILL_RECONNECT && g.socket.resetSocketOnError(e.args)
        },
        RTC_SPEED_TEST_START_TEST: function() {
            return g.socket.isSessionEstablished() && g.socket.speedTestCreate(m.default.getPreferredRegion()), !1
        },
        RTC_SPEED_TEST_STOP_TEST: function() {
            return g.socket.isSessionEstablished() && g.socket.speedTestDelete(), !1
        },
        CLIPS_SETTINGS_UPDATE: B,
        RUNNING_GAMES_CHANGE: B,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t;
            e.settings.type === M.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && B()
        }
    })
}