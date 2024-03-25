function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useShowStageMusicMuteButton: function() {
            return g
        },
        shouldShowStageMusicMuteButton: function() {
            return _
        },
        default: function() {
            return v
        }
    }), n("222007");
    var a = n("446674"),
        r = n("689988"),
        s = n("42203"),
        l = n("42887"),
        i = n("18494"),
        u = n("800762"),
        o = n("709681"),
        d = n("488464"),
        c = n("567469"),
        f = n("998716"),
        h = n("834052"),
        E = n("274438");
    let p = e => e / 400,
        C = !1,
        m = (0, o.createSound)("stage_waiting", "stage_waiting", p(l.default.getOutputVolume()));

    function S() {
        let e = i.default.getVoiceChannelId();
        if (null == e) {
            m.stop(), C = !1;
            return
        }
        let t = s.default.getChannel(e);
        if (!(null == t ? void 0 : t.isGuildStageVoice())) {
            m.stop(), C = !1;
            return
        }
        let n = l.default.isSelfDeaf();
        if (n) {
            m.stop(), C = !1;
            return
        }
        let a = E.default.shouldPlay();
        if (a) {
            m.volume = p(l.default.getOutputVolume()), m.loop(), C = !0;
            return
        }
        let r = h.default.isLive(e);
        if (r) {
            m.stop(), C = !1;
            return
        }
        let o = E.default.isMuted();
        if (o) {
            m.pause(), C = !1;
            return
        }
        let d = null != Object.values(u.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
        d || C ? d && (m.pause(), C = !1) : (m.volume = p(l.default.getOutputVolume()), m.loop(), C = !0)
    }

    function g(e) {
        let t = (0, a.useStateFromStores)([i.default], () => i.default.getVoiceChannelId() === e),
            n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
            r = null != n.find(e => !e.voiceState.isVoiceMuted()),
            s = (0, a.useStateFromStores)([h.default], () => h.default.getStageInstanceByChannel(e));
        return t && null == s && !r
    }

    function _(e) {
        let t = i.default.getVoiceChannelId() === e,
            n = d.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
            a = null != n.find(e => !e.voiceState.isVoiceMuted()),
            r = h.default.getStageInstanceByChannel(e);
        return t && null == r && !a
    }
    class T extends r.default {
        handleVoiceChannelSelect(e) {
            let {
                channelId: t
            } = e;
            if (null != t) {
                let e = s.default.getChannel(t);
                (null == e ? void 0 : e.isGuildStageVoice()) ? S(): (m.stop(), C = !1)
            } else m.stop(), C = !1
        }
        handleLogout() {
            m.stop(), C = !1
        }
        handlePlay(e) {
            let {
                play: t
            } = e;
            t ? S() : (m.pause(), C = !1)
        }
        handleMute(e) {
            let {
                muted: t
            } = e;
            t ? (m.pause(), C = !1) : S()
        }
        handleVoiceStateUpdates() {
            S()
        }
        handleSetOutputVolume(e) {
            let {
                volume: t
            } = e;
            m.volume = p(t)
        }
        handleToggleSelfDeaf() {
            S()
        }
        constructor(...e) {
            super(...e), this.actions = {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                LOGOUT: this.handleLogout,
                STAGE_MUSIC_MUTE: this.handleMute,
                STAGE_MUSIC_PLAY: this.handlePlay,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
            }
        }
    }
    var v = new T
}