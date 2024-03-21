function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("913144"),
        s = n("504385"),
        r = n("439141"),
        a = n("533222"),
        o = n("42887"),
        l = n("599110"),
        u = n("709681"),
        d = n("12307"),
        c = n("49111"),
        _ = n("353927");

    function f() {
        (0, u.playSound)("mention3")
    }

    function E(e, t, n, i, s) {
        if (t === n) return;
        let r = e[t],
            o = e[n];
        l.default.track(c.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
            device_from_name: a.default.getCertifiedDeviceName(t, null != r ? r.name : ""),
            device_to_name: a.default.getCertifiedDeviceName(n, null != o ? o.name : ""),
            device_type: i,
            device_is_certified: a.default.isCertified(n),
            location: s
        })
    }
    let h = {
        isNotSupported: () => !1,
        enable: e => Promise.resolve(!0),
        trackToggleSelfMute(e) {}
    };
    h = n("412905");
    let {
        enable: g,
        isNotSupported: m,
        trackToggleSelfMute: p
    } = h;
    var S = {
        enable: g,
        toggleSelfMute() {
            let {
                context: e = _.MediaEngineContextTypes.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: s = !0
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return m() ? Promise.resolve() : (p({
                usedKeybind: n
            }), o.default.isEnabled()) ? i.default.dispatch({
                type: "AUDIO_TOGGLE_SELF_MUTE",
                context: e,
                syncRemote: t,
                skipMuteUnmuteSoundEffect: !s
            }) : this.enable(!0)
        },
        setTemporarySelfMute(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                mute: e
            })
        },
        toggleSelfDeaf() {
            let {
                context: e = _.MediaEngineContextTypes.DEFAULT,
                syncRemote: t = !0
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            !m() && i.default.dispatch({
                type: "AUDIO_TOGGLE_SELF_DEAF",
                context: e,
                syncRemote: t
            })
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT;
            !m() && i.default.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_MUTE",
                context: t,
                userId: e
            })
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.MediaEngineContextTypes.DEFAULT;
            i.default.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                context: t,
                userId: e
            })
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MediaEngineContextTypes.DEFAULT,
                s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            !m() && i.default.dispatch({
                type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                context: n,
                userId: e,
                videoToggleState: t,
                persist: s,
                isAutomatic: r
            })
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MediaEngineContextTypes.DEFAULT;
            i.default.dispatch({
                type: "AUDIO_SET_LOCAL_VOLUME",
                context: n,
                userId: e,
                volume: (0, s.snapVolumeToDefault)(t, n)
            })
        },
        setLocalPan(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.MediaEngineContextTypes.DEFAULT;
            i.default.dispatch({
                type: "AUDIO_SET_LOCAL_PAN",
                context: s,
                userId: e,
                left: t,
                right: n
            })
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MediaEngineContextTypes.DEFAULT;
            !m() && i.default.dispatch({
                type: "AUDIO_SET_MODE",
                context: n,
                mode: e,
                options: {
                    ...o.default.getModeOptions(n),
                    ...t
                }
            })
        },
        setInputVolume(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_INPUT_VOLUME",
                volume: e
            })
        },
        setOutputVolume(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_OUTPUT_VOLUME",
                volume: e
            })
        },
        setInputDevice(e, t) {
            if (!m()) {
                if (null != t) {
                    let n = o.default.getInputDevices(),
                        i = o.default.getInputDeviceId();
                    E(n, i, e, "Audio Input", t)
                }
                i.default.dispatch({
                    type: "AUDIO_SET_INPUT_DEVICE",
                    id: e
                }), f()
            }
        },
        setOutputDevice(e, t) {
            if (!m()) {
                if (null != t) {
                    let n = o.default.getOutputDevices(),
                        i = o.default.getOutputDeviceId();
                    E(n, i, e, "Audio Output", t)
                }
                i.default.dispatch({
                    type: "AUDIO_SET_OUTPUT_DEVICE",
                    id: e
                }), f()
            }
        },
        setVideoDevice(e, t) {
            if (!m()) {
                if (null != t) {
                    let n = o.default.getVideoDevices(),
                        i = o.default.getVideoDeviceId();
                    E(n, i, e, "Video", t)
                }
                i.default.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                    id: e
                })
            }
        },
        setEchoCancellation(e, t) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_ECHO_CANCELLATION",
                enabled: e,
                location: t
            })
        },
        setLoopback(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_LOOPBACK",
                enabled: e
            })
        },
        setNoiseSuppression(e, t) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_NOISE_SUPPRESSION",
                enabled: e,
                location: t
            })
        },
        setNoiseCancellation(e, t) {
            !m() && (i.default.dispatch({
                type: "AUDIO_SET_NOISE_CANCELLATION",
                enabled: e,
                location: t
            }), i.default.dispatch({
                type: "AUDIO_SET_NOISE_SUPPRESSION",
                enabled: !e,
                location: t
            }))
        },
        setAutomaticGainControl(e, t) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                enabled: e,
                location: t
            })
        },
        setExperimentalEncoders(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                enabled: e
            })
        },
        setHardwareH264(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                enabled: e
            })
        },
        setAttenuation(e, t, n) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_ATTENUATION",
                attenuation: e,
                attenuateWhileSpeakingSelf: t,
                attenuateWhileSpeakingOthers: n
            })
        },
        setQoS(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_QOS",
                enabled: e
            })
        },
        reset() {
            !m() && i.default.dispatch({
                type: "AUDIO_RESET"
            })
        },
        setSilenceWarning(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                enabled: e
            })
        },
        setDebugLogging(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_DEBUG_LOGGING",
                enabled: e
            })
        },
        setVideoHook(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                enabled: e
            })
        },
        setExperimentalSoundshare(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                enabled: e
            })
        },
        setAudioSubsystem(e) {
            !m() && i.default.dispatch({
                type: "AUDIO_SET_SUBSYSTEM",
                subsystem: e
            })
        },
        setVideoEnabled(e) {
            (0, r.applyInitialVideoBackgroundOption)(), i.default.dispatch({
                type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                enabled: e
            })
        },
        setGoLiveSource(e) {
            (null == e ? void 0 : e.qualityOptions) != null && (0, d.trackStreamSettingsUpdate)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), i.default.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: e
            })
        },
        setOpenH264(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_OPEN_H264",
                enabled: e
            })
        },
        setAV1Enabled(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_AV1",
                enabled: e
            })
        },
        setH265Enabled(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_H265",
                enabled: e
            })
        },
        setAecDump(e) {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_AEC_DUMP",
                enabled: e
            })
        },
        interact() {
            !m() && i.default.dispatch({
                type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                required: !1
            })
        }
    }
}