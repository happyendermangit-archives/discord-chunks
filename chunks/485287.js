function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowStageMusicMuteButton: function() {
            return m
        },
        useShowStageMusicMuteButton: function() {
            return h
        }
    }), n("47120");
    var i = n("442837"),
        r = n("147913"),
        s = n("592125"),
        a = n("131951"),
        o = n("944486"),
        l = n("979651"),
        u = n("557177"),
        d = n("565799"),
        _ = n("431328"),
        c = n("501655"),
        E = n("427679"),
        I = n("754277");
    let T = e => e / 400,
        f = !1,
        S = (0, u.createSound)("stage_waiting", "stage_waiting", T(a.default.getOutputVolume()));

    function A() {
        let e = o.default.getVoiceChannelId();
        if (null == e) {
            S.stop(), f = !1;
            return
        }
        let t = s.default.getChannel(e);
        if (!(null == t ? void 0 : t.isGuildStageVoice()) || a.default.isSelfDeaf()) {
            S.stop(), f = !1;
            return
        }
        if (I.default.shouldPlay()) {
            S.volume = T(a.default.getOutputVolume()), S.loop(), f = !0;
            return
        }
        if (E.default.isLive(e)) {
            S.stop(), f = !1;
            return
        }
        if (I.default.isMuted()) {
            S.pause(), f = !1;
            return
        }
        let n = null != Object.values(l.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
        n || f ? n && (S.pause(), f = !1) : (S.volume = T(a.default.getOutputVolume()), S.loop(), f = !0)
    }

    function h(e) {
        let t = (0, i.useStateFromStores)([o.default], () => o.default.getVoiceChannelId() === e),
            n = null != (0, _.useStageParticipants)(e, c.StageChannelParticipantNamedIndex.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
            r = (0, i.useStateFromStores)([E.default], () => E.default.getStageInstanceByChannel(e));
        return t && null == r && !n
    }

    function m(e) {
        let t = o.default.getVoiceChannelId() === e,
            n = null != d.default.getMutableParticipants(e, c.StageChannelParticipantNamedIndex.SPEAKER).find(e => !e.voiceState.isVoiceMuted()),
            i = E.default.getStageInstanceByChannel(e);
        return t && null == i && !n
    }
    class N extends r.default {
        handleVoiceChannelSelect(e) {
            let {
                channelId: t
            } = e;
            if (null != t) {
                let e = s.default.getChannel(t);
                (null == e ? void 0 : e.isGuildStageVoice()) ? A(): (S.stop(), f = !1)
            } else S.stop(), f = !1
        }
        handleLogout() {
            S.stop(), f = !1
        }
        handlePlay(e) {
            let {
                play: t
            } = e;
            t ? A() : (S.pause(), f = !1)
        }
        handleMute(e) {
            let {
                muted: t
            } = e;
            t ? (S.pause(), f = !1) : A()
        }
        handleVoiceStateUpdates() {
            A()
        }
        handleSetOutputVolume(e) {
            let {
                volume: t
            } = e;
            S.volume = T(t)
        }
        handleToggleSelfDeaf() {
            A()
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                LOGOUT: this.handleLogout,
                STAGE_MUSIC_MUTE: this.handleMute,
                STAGE_MUSIC_PLAY: this.handlePlay,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new N
}