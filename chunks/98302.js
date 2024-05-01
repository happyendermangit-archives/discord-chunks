function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("846519"),
        r = n("147913"),
        s = n("603113"),
        a = n("594190"),
        o = n("592125"),
        l = n("131951"),
        u = n("19780"),
        d = n("885110"),
        _ = n("606304"),
        c = n("938475"),
        E = n("70956"),
        I = n("367907"),
        T = n("981631");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = 1 * E.default.Millis.MINUTE;
    class h extends r.default {
        _initialize() {
            __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(_.default, () => this._handleSpeakingStoreChanged()).set(u.default, () => this._handleRTCConnectionStoreChanged()), this._reset())
        }
        _reset() {
            this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
        }
        _trackStartSpeaking() {
            if (this._currentUserSpeaking) {
                let e = u.default.getChannelId(),
                    t = u.default.getGuildId(),
                    n = o.default.getChannel(e),
                    i = null == n ? void 0 : n.isBroadcastChannel();
                (0, I.trackWithMetadata)(T.AnalyticEvents.START_SPEAKING, {
                    mode: l.default.getMode(),
                    priority: _.default.isCurrentUserPrioritySpeaking(),
                    channel: e,
                    server: t,
                    channel_id: e,
                    guild_id: t,
                    is_broadcast: i,
                    rtc_connection_id: u.default.getRTCConnectionId(),
                    media_session_id: u.default.getMediaSessionId(),
                    voice_state_count: c.default.countVoiceStatesForChannel(this._voiceChannelId),
                    ...this.getGameMetadata(),
                    ...u.default.getPacketStats()
                })
            }
        }
        _trackStartListening() {
            if (l.default.isDeaf() || !this._anyoneElseSpeaking) return;
            let e = u.default.getChannelId(),
                t = u.default.getGuildId(),
                n = o.default.getChannel(e),
                i = null == n ? void 0 : n.isBroadcastChannel();
            (0, I.trackWithMetadata)(T.AnalyticEvents.START_LISTENING, {
                mute: l.default.isMute(),
                anyone_priority: _.default.isAnyonePrioritySpeaking(),
                channel: e,
                server: t,
                channel_id: e,
                guild_id: t,
                is_broadcast: i,
                rtc_connection_id: u.default.getRTCConnectionId(),
                media_session_id: u.default.getMediaSessionId(),
                voice_state_count: c.default.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata()
            })
        }
        _terminate() {
            this._reset(), _.default.removeChangeListener(this._handleSpeakingStoreChanged), u.default.removeChangeListener(this._handleRTCConnectionStoreChanged)
        }
        getGameMetadata() {
            let e = d.default.findActivity(e => e.type === T.ActivityTypes.PLAYING),
                t = a.default.getCurrentGameForAnalytics();
            return {
                game_platform: (0, s.default)(e),
                game_name: null != e ? e.name : null,
                game_exe_name: null != t ? t.exeName : null,
                game_id: null != e ? e.application_id : null
            }
        }
        constructor(...e) {
            super(...e), f(this, "_currentUserSpeaking", !1), f(this, "_anyoneElseSpeaking", !1), f(this, "_voiceChannelId", void 0), f(this, "_reportInterval", void 0), f(this, "_handleRTCConnectionStoreChanged", () => {
                let e = u.default.getChannelId();
                if (this._voiceChannelId !== e) {
                    if (this._voiceChannelId = e, null == e) {
                        this._reset();
                        return
                    }
                    null == this._reportInterval && (this._reportInterval = new i.Interval, this._reportInterval.start(S, () => {
                        this._trackStartSpeaking(), this._trackStartListening()
                    }))
                }
            }), f(this, "_handleSpeakingStoreChanged", () => {
                let e = _.default.isCurrentUserSpeaking();
                this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
                let t = _.default.isAnyoneElseSpeaking();
                this._anyoneElseSpeaking !== t && (this._anyoneElseSpeaking = t, this._trackStartListening())
            })
        }
    }
    t.default = new h
}