function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    }), E("222007");
    var t = E("689988"),
        o = E("271938"),
        n = E("42203"),
        r = E("78581"),
        a = E("49111");
    class i extends t.default {
        constructor(...e) {
            super(...e), this.prevConnected = !1, this.tempMutedChannel = null, this.handleRTCConnectionState = e => {
                let {
                    state: _,
                    channelId: E
                } = e, t = _ === a.RTCConnectionStates.RTC_CONNECTED, o = t && !this.prevConnected, i = n.default.getChannel(E), I = null == i ? void 0 : i.getGuildId(), s = this.tempMutedChannel === E;
                o && null != I && (s ? this.tempMutedChannel = null : (0, r.maybePlayCustomJoinSound)(I)), this.prevConnected = t
            }, this.handleMute = e => {
                let {
                    channelId: _
                } = e;
                this.tempMutedChannel = _
            }, this.handleVoiceStateUpdates = e => {
                let {
                    voiceStates: _
                } = e, E = o.default.getId(), t = o.default.getSessionId();
                _.forEach(e => {
                    let {
                        userId: _,
                        channelId: o,
                        sessionId: n
                    } = e;
                    _ === E && n !== t && null != o && (this.tempMutedChannel = o)
                })
            }, this.actions = {
                RTC_CONNECTION_STATE: this.handleRTCConnectionState,
                SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
            }
        }
    }
    var I = new i
}