function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("979651"),
        r = n("938475"),
        s = n("65154");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o {
        updateVoiceStates(e, t) {
            t === this.channelId ? (this.totalParticipants.add(e), this.maxVoiceStateCount = Math.max(r.default.countVoiceStatesForChannel(t), this.maxVoiceStateCount)) : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = s.SpeakingFlags.NONE), e === this.userId && null != t && this.setChannelId(t))
        }
        getStats() {
            return {
                max_voice_state_count: this.maxVoiceStateCount,
                total_voice_state_count: this.totalParticipants.size,
                max_listener_count: this.maxListenerCount,
                total_listener_count: this.totalListeners.size,
                max_speaker_count: this.maxSpeakerCount,
                total_speaker_count: Object.keys(this.totalSpeakers).length
            }
        }
        setSpeaking(e, t) {
            if (t !== s.SpeakingFlags.NONE) {
                let n = i.default.getVoiceStateForChannel(this.channelId, e);
                if (null != n && !n.selfMute && !n.mute) {
                    this.totalSpeakers[e] = t;
                    let n = Object.values(this.totalSpeakers).filter(e => e !== s.SpeakingFlags.NONE).length;
                    this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n)
                }
            } else e in this.totalSpeakers && (this.totalSpeakers[e] = s.SpeakingFlags.NONE);
            if (this.userId === e) {
                if (t === this.speaking) return;
                if (t !== s.SpeakingFlags.NONE) {
                    let e = Object.values(i.default.getVoiceStatesForChannel(this.channelId)).filter(e => !e.selfDeaf && !e.deaf);
                    e.forEach(e => this.totalListeners.add(e.userId)), this.maxListenerCount = Math.max(e.length, this.maxListenerCount)
                }
                this.speaking = t
            }
        }
        setChannelId(e) {
            if (e === this.channelId) return;
            this.channelId = e, this.totalParticipants = new Set([this.userId]);
            let t = Object.keys(i.default.getVoiceStatesForChannel(this.channelId));
            t.forEach(e => this.totalParticipants.add(e)), this.maxVoiceStateCount = t.length, this.speaking = s.SpeakingFlags.NONE, this.maxListenerCount = 0, this.totalListeners = new Set, this.maxSpeakerCount = 0, this.totalSpeakers = {}
        }
        constructor(e, t) {
            a(this, "userId", void 0), a(this, "channelId", void 0), a(this, "maxVoiceStateCount", 1), a(this, "totalParticipants", void 0), a(this, "speaking", s.SpeakingFlags.NONE), a(this, "maxListenerCount", 0), a(this, "totalListeners", void 0), a(this, "maxSpeakerCount", 0), a(this, "totalSpeakers", void 0), this.userId = e, this.setChannelId(t)
        }
    }
}