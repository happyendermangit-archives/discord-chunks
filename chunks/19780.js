function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("411104"), n("724458");
    var a, s, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("437263"),
        c = n("764976"),
        E = n("646047"),
        I = n("258609"),
        T = n("338336"),
        f = n("314897"),
        S = n("938475"),
        h = n("981631"),
        A = n("65154");
    let m = null,
        N = null,
        p = null,
        O = null,
        R = !1,
        C = !1;

    function g(e, t) {
        if (null == r) throw Error("Creating RTCConnection without session.");
        let i = f.default.getId(),
            a = new(n("861687")).default({
                userId: i,
                sessionId: r,
                guildId: e,
                channelId: t
            });
        return a.on(_.RTCConnectionEvent.State, (e, t, n) => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_STATE",
                state: e,
                ...t,
                ...n
            }))
        }), a.on(_.RTCConnectionEvent.Video, (e, t, n, i, r) => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_VIDEO",
                guildId: e,
                channelId: t,
                userId: n,
                streamId: i,
                rtcServerId: r,
                context: A.MediaEngineContextTypes.DEFAULT
            }))
        }), a.on(_.RTCConnectionEvent.Ping, (e, t) => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_PING",
                pings: e,
                quality: t
            }))
        }), a.on(_.RTCConnectionEvent.OutboundLossRate, e => {
            d.default.wait(() => d.default.dispatch({
                type: "RTC_CONNECTION_LOSS_RATE",
                lossRate: e
            }))
        }), a.on(_.RTCConnectionEvent.Speaking, (e, t) => {
            null == p || p.setSpeaking(e, t)
        }), a.on(_.RTCConnectionEvent.Flags, (e, t) => {
            d.default.wait(() => {
                d.default.dispatch({
                    type: "RTC_CONNECTION_FLAGS",
                    flags: t,
                    userId: e,
                    guildId: a.guildId,
                    channelId: a.channelId,
                    context: a.context
                })
            })
        }), a.on(_.RTCConnectionEvent.Platform, (e, t, n) => {
            d.default.wait(() => {
                d.default.dispatch({
                    type: "RTC_CONNECTION_PLATFORM",
                    platform: t,
                    userId: e,
                    channelId: n
                })
            })
        }), p = new c.default(f.default.getId(), t), O = null, R = !1, C = !1, a
    }

    function L() {
        if (null == i) return !1;
        O = i.getDuration(), i.destroy(), i = null, p = null
    }

    function v() {
        m = null
    }

    function D(e) {
        let {
            channel: t
        } = e;
        if (null == i || i.channelId !== t.id) return !1;
        L()
    }

    function M() {
        return !0
    }
    class y extends(a = u.default.Store) {
        initialize() {
            this.waitFor(S.default), (0, T.setVideoToggleAnalyticsParams)(this.getRTCConnectionId, this.getMediaSessionId)
        }
        getRTCConnection() {
            return i
        }
        getState() {
            return null != i ? i.state : h.RTCConnectionStates.DISCONNECTED
        }
        isConnected() {
            return this.getState() === h.RTCConnectionStates.RTC_CONNECTED
        }
        isDisconnected() {
            return this.getState() === h.RTCConnectionStates.DISCONNECTED
        }
        getRemoteDisconnectVoiceChannelId() {
            return m
        }
        getLastSessionVoiceChannelId() {
            return N
        }
        setLastSessionVoiceChannelId(e) {
            N = e
        }
        getGuildId() {
            return null == i ? void 0 : i.guildId
        }
        getChannelId() {
            return null == i ? void 0 : i.channelId
        }
        getHostname() {
            return null != i ? i.hostname : ""
        }
        getQuality() {
            return null != i ? i.quality : h.RTCConnectionQuality.UNKNOWN
        }
        getPings() {
            return null != i ? i.getPings() : []
        }
        getAveragePing() {
            return null != i ? null == i ? void 0 : i.getAveragePing() : 0
        }
        getLastPing() {
            return null == i ? void 0 : i.getLastPing()
        }
        getOutboundLossRate() {
            return null == i ? void 0 : i.getOutboundLossRate()
        }
        getMediaSessionId() {
            return null == i ? void 0 : i.getMediaSessionId()
        }
        getRTCConnectionId() {
            return null == i ? void 0 : i.getRTCConnectionId()
        }
        getDuration() {
            var e;
            return null !== (e = null == i ? void 0 : i.getDuration()) && void 0 !== e ? e : O
        }
        getPacketStats() {
            return null == i ? void 0 : i.getPacketStats()
        }
        getVoiceStateStats() {
            return null == p ? void 0 : p.getStats()
        }
        getWasEverMultiParticipant() {
            return R
        }
        getWasEverRtcConnected() {
            return C
        }
    }
    l = "RTCConnectionStore", (o = "displayName") in(s = y) ? Object.defineProperty(s, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[o] = l;
    let P = new y(d.default, __OVERLAY__ ? {} : {
        CONNECTION_OPEN: function(e) {
            return r = e.sessionId, m = null, N = null, L(), !1
        },
        CONNECTION_CLOSED: function() {
            r = null, m = null, N = null, L()
        },
        RTC_CONNECTION_STATE: function(e) {
            return e.state === h.RTCConnectionStates.RTC_CONNECTED && (C = !0), !0
        },
        RTC_CONNECTION_PING: M,
        RTC_CONNECTION_LOSS_RATE: M,
        RTC_CONNECTION_UPDATE_ID: function(e) {
            return e.connection === i
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n, a, s;
                if (null == p || p.updateVoiceStates(t.userId, t.channelId), R = R || (null !== (n = null == p ? void 0 : p.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1, f.default.getId() !== t.userId) return !1;
                if (null != i) t.sessionId === r ? null != t.guildId && t.guildId === i.guildId || null == t.guildId && t.channelId === i.channelId ? null == t.channelId ? L() : i.channelId = t.channelId : (t.guildId !== i.guildId && null == t.channelId || L(), null != t.channelId && (m = null, N = null, i = g(t.guildId, t.channelId), R = (null !== (a = null == p ? void 0 : p.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1)) : t.guildId === i.guildId && (!(null != I.default.getAwaitingRemoteSessionInfo() && null != I.default.getRemoteSessionId()) && (m = i.channelId), L());
                else {
                    if (t.sessionId !== r || null == t.channelId) return e;
                    m = null, N = null, i = g(t.guildId, t.channelId), R = (null !== (s = null == p ? void 0 : p.getStats().max_voice_state_count) && void 0 !== s ? s : 0) > 1
                }
                return !0
            }, !1)
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == i || null != t && i.channelId === t) return !1;
            L()
        },
        VOICE_SERVER_UPDATE: function(e) {
            if (null == i || null != e.guildId && e.guildId !== i.guildId || null != e.channelId && e.channelId !== i.channelId) return !1;
            i.connect(e.endpoint, e.token)
        },
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: v,
        REMOTE_SESSION_CONNECT: v,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: function() {
            N = null
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            if (null == i || i.guildId !== t.id) return !1;
            L()
        },
        CHANNEL_DELETE: D,
        THREAD_DELETE: D,
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            if (null == i || i.channelId !== t) return !1;
            L()
        },
        APP_STATE_UPDATE: function(e) {
            if (null != i) {
                let t = e.state === h.AppStates.BACKGROUND,
                    n = E.default.isEnabled();
                i.setAppBackgrounded(t, n)
            }
            return e.state === h.AppStates.ACTIVE && null != i && i.resetBackoff("App state is active"), !1
        }
    });
    Promise.resolve().then(n.bind(n, "626135")).then(e => {
        let {
            addExtraAnalyticsDecorator: t
        } = e;
        t(e => {
            e.client_rtc_state = P.getState()
        })
    }), t.default = P
}