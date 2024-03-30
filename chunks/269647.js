function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("314897"),
        d = n("592125"),
        _ = n("131951"),
        c = n("496675"),
        E = n("19780"),
        I = n("979651"),
        T = n("981631");
    let f = !0,
        S = !0;

    function h() {
        let e;
        let t = E.default.getChannelId();
        if (null == t) e = !0;
        else {
            var n;
            let i = d.default.getChannel(t),
                r = I.default.getVoiceState(null == i ? void 0 : i.getGuildId(), u.default.getId());
            e = _.default.getMode() !== T.InputModes.VOICE_ACTIVITY || null == i || i.isPrivate() || i.isGuildStageVoice() || c.default.can(T.Permissions.USE_VAD, i) || null == (n = r) || !!n.suppress || null != n.requestToSpeakTimestamp || !1
        }
        if (f === e) return !1;
        S = e, f = e, l.default.dispatch({
            type: "SET_VAD_PERMISSION",
            hasPermission: f
        })
    }
    class A extends(a = o.default.Store) {
        initialize() {
            this.waitFor(c.default, _.default, E.default, I.default)
        }
        shouldShowWarning() {
            return !S
        }
        canUseVoiceActivity() {
            return f
        }
    }
    s = "PermissionVADStore", (r = "displayName") in(i = A) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new A(l.default, {
        RTC_CONNECTION_STATE: h,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: h,
        AUDIO_SET_MODE: h,
        CHANNEL_UPDATES: h,
        THREAD_UPDATE: h,
        GUILD_ROLE_UPDATE: h,
        GUILD_MEMBER_UPDATE: h,
        IMPERSONATE_UPDATE: h,
        IMPERSONATE_STOP: h,
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.some(e => {
                let {
                    userId: t
                } = e;
                return t === u.default.getId() && h()
            })
        },
        AUDIO_TOGGLE_SELF_MUTE: function() {
            S = f
        },
        PERMISSION_CLEAR_VAD_WARNING: function() {
            S = !0
        }
    })
}