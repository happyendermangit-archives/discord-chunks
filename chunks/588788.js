function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return u
        }
    }), E("222007");
    var t = E("862337"),
        o = E("689988"),
        n = E("575365"),
        r = E("161454"),
        a = E("42203"),
        i = E("42887"),
        I = E("945956"),
        s = E("101125"),
        T = E("280168"),
        S = E("316133"),
        N = E("718517"),
        O = E("716241"),
        A = E("49111");
    let R = 1 * N.default.Millis.MINUTE;
    class l extends o.default {
        _initialize() {
            __OVERLAY__ ? this.stores = new Map : (this.stores = new Map().set(T.default, () => this._handleSpeakingStoreChanged()).set(I.default, () => this._handleRTCConnectionStoreChanged()), this._reset())
        }
        _reset() {
            this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, null != this._reportInterval && (this._reportInterval.stop(), this._reportInterval = null)
        }
        _trackStartSpeaking() {
            if (this._currentUserSpeaking) {
                let e = I.default.getChannelId(),
                    _ = I.default.getGuildId(),
                    E = a.default.getChannel(e),
                    t = null == E ? void 0 : E.isBroadcastChannel();
                (0, O.trackWithMetadata)(A.AnalyticEvents.START_SPEAKING, {
                    mode: i.default.getMode(),
                    priority: T.default.isCurrentUserPrioritySpeaking(),
                    channel: e,
                    server: _,
                    channel_id: e,
                    guild_id: _,
                    is_broadcast: t,
                    rtc_connection_id: I.default.getRTCConnectionId(),
                    media_session_id: I.default.getMediaSessionId(),
                    voice_state_count: S.default.countVoiceStatesForChannel(this._voiceChannelId),
                    ...this.getGameMetadata(),
                    ...I.default.getPacketStats()
                })
            }
        }
        _trackStartListening() {
            if (i.default.isDeaf() || !this._anyoneElseSpeaking) return;
            let e = I.default.getChannelId(),
                _ = I.default.getGuildId(),
                E = a.default.getChannel(e),
                t = null == E ? void 0 : E.isBroadcastChannel();
            (0, O.trackWithMetadata)(A.AnalyticEvents.START_LISTENING, {
                mute: i.default.isMute(),
                anyone_priority: T.default.isAnyonePrioritySpeaking(),
                channel: e,
                server: _,
                channel_id: e,
                guild_id: _,
                is_broadcast: t,
                rtc_connection_id: I.default.getRTCConnectionId(),
                media_session_id: I.default.getMediaSessionId(),
                voice_state_count: S.default.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata()
            })
        }
        _terminate() {
            this._reset(), T.default.removeChangeListener(this._handleSpeakingStoreChanged), I.default.removeChangeListener(this._handleRTCConnectionStoreChanged)
        }
        getGameMetadata() {
            let e = s.default.findActivity(e => e.type === A.ActivityTypes.PLAYING),
                _ = r.default.getCurrentGameForAnalytics();
            return {
                game_platform: (0, n.default)(e),
                game_name: null != e ? e.name : null,
                game_exe_name: null != _ ? _.exeName : null,
                game_id: null != e ? e.application_id : null
            }
        }
        constructor(...e) {
            super(...e), this._currentUserSpeaking = !1, this._anyoneElseSpeaking = !1, this._handleRTCConnectionStoreChanged = () => {
                let e = I.default.getChannelId();
                if (this._voiceChannelId !== e) {
                    if (this._voiceChannelId = e, null == e) {
                        this._reset();
                        return
                    }
                    null == this._reportInterval && (this._reportInterval = new t.Interval, this._reportInterval.start(R, () => {
                        this._trackStartSpeaking(), this._trackStartListening()
                    }))
                }
            }, this._handleSpeakingStoreChanged = () => {
                let e = T.default.isCurrentUserSpeaking();
                this._currentUserSpeaking !== e && (this._currentUserSpeaking = e, this._trackStartSpeaking());
                let _ = T.default.isAnyoneElseSpeaking();
                this._anyoneElseSpeaking !== _ && (this._anyoneElseSpeaking = _, this._trackStartListening())
            }
        }
    }
    var u = new l
}