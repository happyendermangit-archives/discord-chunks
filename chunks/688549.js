function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("665863"),
        o = n("473702"),
        i = n("439386");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = function() {
        var e, t, n;

        function s(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u(this, "userId", void 0), u(this, "channelId", void 0), u(this, "maxVoiceStateCount", 1), u(this, "totalParticipants", void 0), u(this, "speaking", i.SpeakingFlags.NONE), u(this, "maxListenerCount", 0), u(this, "totalListeners", void 0), u(this, "maxSpeakerCount", 0), u(this, "totalSpeakers", void 0), this.userId = e, this.setChannelId(t)
        }
        return e = s, t = [{
            key: "updateVoiceStates",
            value: function(e, t) {
                t === this.channelId ? (this.totalParticipants.add(e), this.maxVoiceStateCount = Math.max(o.default.countVoiceStatesForChannel(t), this.maxVoiceStateCount)) : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = i.SpeakingFlags.NONE), e === this.userId && null != t && this.setChannelId(t))
            }
        }, {
            key: "getStats",
            value: function() {
                return {
                    max_voice_state_count: this.maxVoiceStateCount,
                    total_voice_state_count: this.totalParticipants.size,
                    max_listener_count: this.maxListenerCount,
                    total_listener_count: this.totalListeners.size,
                    max_speaker_count: this.maxSpeakerCount,
                    total_speaker_count: Object.keys(this.totalSpeakers).length
                }
            }
        }, {
            key: "setSpeaking",
            value: function(e, t) {
                var n = this;
                if (t !== i.SpeakingFlags.NONE) {
                    var o = r.default.getVoiceStateForChannel(this.channelId, e);
                    if (null != o && !o.selfMute && !o.mute) {
                        this.totalSpeakers[e] = t;
                        var a = Object.values(this.totalSpeakers).filter(function(e) {
                            return e !== i.SpeakingFlags.NONE
                        }).length;
                        this.maxSpeakerCount = Math.max(this.maxSpeakerCount, a)
                    }
                } else e in this.totalSpeakers && (this.totalSpeakers[e] = i.SpeakingFlags.NONE);
                if (this.userId === e) {
                    if (t === this.speaking) return;
                    if (t !== i.SpeakingFlags.NONE) {
                        var u = Object.values(r.default.getVoiceStatesForChannel(this.channelId)).filter(function(e) {
                            return !e.selfDeaf && !e.deaf
                        });
                        u.forEach(function(e) {
                            return n.totalListeners.add(e.userId)
                        }), this.maxListenerCount = Math.max(u.length, this.maxListenerCount)
                    }
                    this.speaking = t
                }
            }
        }, {
            key: "setChannelId",
            value: function(e) {
                var t = this;
                if (e !== this.channelId) {
                    this.channelId = e, this.totalParticipants = new Set([this.userId]);
                    var n = Object.keys(r.default.getVoiceStatesForChannel(this.channelId));
                    n.forEach(function(e) {
                        return t.totalParticipants.add(e)
                    }), this.maxVoiceStateCount = n.length, this.speaking = i.SpeakingFlags.NONE, this.maxListenerCount = 0, this.totalListeners = new Set, this.maxSpeakerCount = 0, this.totalSpeakers = {}
                }
            }
        }], a(e.prototype, t), n && a(e, n), s
    }()
}