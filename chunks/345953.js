function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("51407"),
        a = n("524437"),
        o = n("433517"),
        l = n("147913"),
        u = n("254238"),
        d = n("258609"),
        _ = n("763296"),
        c = n("314897"),
        E = n("131951"),
        I = n("709054"),
        T = n("815016"),
        f = n("725380"),
        S = n("340332"),
        h = n("675478"),
        A = n("65154");
    let m = e => "AudioContextSettingsMigrated:".concat(e),
        N = e => e === A.MediaEngineContextTypes.STREAM ? s.AudioSettingsDefaultVolumes.STREAM : s.AudioSettingsDefaultVolumes.USER;

    function p() {
        (0, T.shouldReadWriteAudioSettings)() && (o.Storage.get(m(c.default.getId())) || h.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
            let t = !1;
            for (let [n, i] of Object.entries(E.default.getState().settingsByContext)) {
                let r = (0, S.coerceAudioContextForProto)(n);
                if (null == r) continue;
                let s = e[r],
                    a = String(Date.now()),
                    o = {};
                for (let [e, t] of Object.entries(i.localMutes)) o[e] = {
                    muted: t,
                    volume: N(n),
                    modifiedAt: a,
                    soundboardMuted: !1
                };
                for (let [e, t] of Object.entries(i.localVolumes)) o[e] = {
                    muted: !1,
                    modifiedAt: a,
                    ...o[e],
                    volume: (0, S.snapVolumeToDefault)(t, n)
                };
                let l = Object.keys(s).length;
                for (let [e, [n, i]] of Object.entries(o).entries()) {
                    if (300 - l - (e + 1) <= 0) break;
                    null == s[n] && (t = !0, s[n] = i)
                }
            }
            return o.Storage.set(m(c.default.getId()), !0), t
        }, h.UserSettingsDelay.AUTOMATED))
    }
    let O = r().debounce(() => {
            C()
        }, 2e3),
        R = r().debounce(u.remoteAudioSettingsUpdate, 500, {
            maxWait: 500
        });

    function C() {
        h.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
            let t = !1;
            return (0, f.drainPendingAudioSettings)((n, i, r) => {
                let s = function(e, t, n, i) {
                    var r, s, o, l, u;
                    let d = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        _ = (0, S.coerceAudioContextForProto)(n);
                    if (null == _) return !1;
                    let c = e[_];
                    if (c[t] = null !== (r = c[t]) && void 0 !== r ? r : (s = n, a.AudioContextSetting.create({
                            muted: !1,
                            volume: N(s)
                        })), i(c[t]), c[t].modifiedAt = String(Date.now()), d) {
                        ;
                        o = c, l = t, u = n, o[l].volume !== N(u) || o[l].muted || o[l].soundboardMuted || delete o[l]
                    }
                    return ! function(e) {
                        let t = I.default.entries(e),
                            n = t.length;
                        if (n <= 300) return;
                        let i = t.sort((e, t) => {
                                let [n, {
                                    modifiedAt: i
                                }] = e, [r, {
                                    modifiedAt: s
                                }] = t;
                                return Number(i) - Number(s)
                            }),
                            r = n - 300;
                        for (let t = 0; t < r; t++) {
                            let [n] = i[t];
                            delete e[n]
                        }
                    }(c), !0
                }(e, i, n, e => {
                    Object.assign(e, r)
                });
                t = t || s
            }), t
        }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function g(e) {
        var t, n, i;
        let {
            context: r,
            userId: s,
            volume: a
        } = e;
        if (s === c.default.getId() || !(0, T.shouldReadWriteAudioSettings)()) return;
        let o = d.default.getRemoteSessionId();
        null != o && R(o, s, r, {
            muted: E.default.isLocalMute(s, r),
            volume: a
        }), t = r, n = s, i = a, (0, f.updatePendingSettings)(t, n, {
            volume: i
        }), O()
    }

    function L(e) {
        let {
            context: t,
            userId: n
        } = e;
        if (n !== c.default.getId()) {
            if ((0, T.shouldReadWriteAudioSettings)()) {
                var i, r, s;
                i = t, r = n, s = E.default.isLocalMute(n, t), (0, f.updatePendingSettings)(i, r, {
                    muted: s
                }), O.cancel(), C()
            }
        }
    }

    function v(e) {
        let {
            context: t,
            userId: n
        } = e;
        if (n !== c.default.getId()) {
            if ((0, T.shouldReadWriteAudioSettings)()) {
                var i, r, s;
                i = t, r = n, s = _.default.isLocalSoundboardMuted(n), (0, f.updatePendingSettings)(i, r, {
                    soundboardMuted: s
                }), O.cancel(), C()
            }
        }
    }
    class D extends l.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: p,
                AUDIO_SET_LOCAL_VOLUME: g,
                AUDIO_TOGGLE_LOCAL_MUTE: L,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: v
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new D
}