function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("340332"),
        a = n("672339"),
        s = n("463395"),
        o = n("131951"),
        l = n("626135"),
        u = n("557177"),
        d = n("557457"),
        _ = n("981631"),
        c = n("65154");

    function E() {
        (0, u.playSound)("mention3")
    }

    function I(e, t, n, i, r) {
        if (t === n) return;
        let a = e[t],
            o = e[n];
        l.default.track(_.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
            device_from_name: s.default.getCertifiedDeviceName(t, null != a ? a.name : ""),
            device_to_name: s.default.getCertifiedDeviceName(n, null != o ? o.name : ""),
            device_type: i,
            device_is_certified: s.default.isCertified(n),
            location: r
        })
    }
    let T = {
            isNotSupported: () => !1,
            enable: e => Promise.resolve(!0),
            trackToggleSelfMute(e) {}
        },
        {
            enable: f,
            isNotSupported: S,
            trackToggleSelfMute: h
        } = T = n("929782");
    t.default = {
        enable: f,
        toggleSelfMute() {
            let {
                context: e = c.MediaEngineContextTypes.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: r = !0
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S() ? Promise.resolve() : (h({
                usedKeybind: n
            }), o.default.isEnabled()) ? i.default.dispatch({
                type: "AUDIO_TOGGLE_SELF_MUTE",
                context: e,
                syncRemote: t,
                skipMuteUnmuteSoundEffect: !r
            }) : this.enable(!0)
        },
        setSelfMute(e, t) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_SELF_MUTE",
                context: e,
                mute: t
            })
        },
        setTemporarySelfMute(e) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                mute: e
            })
        },
        toggleSelfDeaf() {
            let {
                context: e = c.MediaEngineContextTypes.DEFAULT,
                syncRemote: t = !0
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            !S() && i.default.dispatch({
                type: "AUDIO_TOGGLE_SELF_DEAF",
                context: e,
                syncRemote: t
            })
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
            !S() && i.default.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_MUTE",
                context: t,
                userId: e
            })
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
            i.default.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                context: t,
                userId: e
            })
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.MediaEngineContextTypes.DEFAULT,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            !S() && i.default.dispatch({
                type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                context: n,
                userId: e,
                videoToggleState: t,
                persist: r,
                isAutomatic: a
            })
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.MediaEngineContextTypes.DEFAULT;
            i.default.dispatch({
                type: "AUDIO_SET_LOCAL_VOLUME",
                context: n,
                userId: e,
                volume: (0, r.snapVolumeToDefault)(t, n)
            })
        },
        setLocalPan(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.MediaEngineContextTypes.DEFAULT;
            i.default.dispatch({
                type: "AUDIO_SET_LOCAL_PAN",
                context: r,
                userId: e,
                left: t,
                right: n
            })
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.MediaEngineContextTypes.DEFAULT;
            !S() && i.default.dispatch({
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
            !S() && i.default.dispatch({
                type: "AUDIO_SET_INPUT_VOLUME",
                volume: e
            })
        },
        setOutputVolume(e) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_OUTPUT_VOLUME",
                volume: e
            })
        },
        setInputDevice(e, t) {
            if (!S()) {
                if (null != t) {
                    let n = o.default.getInputDevices();
                    I(n, o.default.getInputDeviceId(), e, "Audio Input", t)
                }
                i.default.dispatch({
                    type: "AUDIO_SET_INPUT_DEVICE",
                    id: e
                }), E()
            }
        },
        setOutputDevice(e, t) {
            if (!S()) {
                if (null != t) {
                    let n = o.default.getOutputDevices();
                    I(n, o.default.getOutputDeviceId(), e, "Audio Output", t)
                }
                i.default.dispatch({
                    type: "AUDIO_SET_OUTPUT_DEVICE",
                    id: e
                }), E()
            }
        },
        setVideoDevice(e, t) {
            if (!S()) {
                if (null != t) {
                    let n = o.default.getVideoDevices();
                    I(n, o.default.getVideoDeviceId(), e, "Video", t)
                }
                i.default.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                    id: e
                })
            }
        },
        setEchoCancellation(e, t) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_ECHO_CANCELLATION",
                enabled: e,
                location: t
            })
        },
        setLoopback(e) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_LOOPBACK",
                enabled: e
            })
        },
        setNoiseSuppression(e, t) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_NOISE_SUPPRESSION",
                enabled: e,
                location: t
            })
        },
        setNoiseCancellation(e, t) {
            !S() && (i.default.dispatch({
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
            !S() && i.default.dispatch({
                type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                enabled: e,
                location: t
            })
        },
        setExperimentalEncoders(e) {
            !S() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                enabled: e
            })
        },
        setHardwareH264(e) {
            !S() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                enabled: e
            })
        },
        setAttenuation(e, t, n) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_ATTENUATION",
                attenuation: e,
                attenuateWhileSpeakingSelf: t,
                attenuateWhileSpeakingOthers: n
            })
        },
        setQoS(e) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_QOS",
                enabled: e
            })
        },
        reset() {
            !S() && i.default.dispatch({
                type: "AUDIO_RESET"
            })
        },
        setSilenceWarning(e) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                enabled: e
            })
        },
        setDebugLogging(e) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_DEBUG_LOGGING",
                enabled: e
            })
        },
        setVideoHook(e) {
            !S() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                enabled: e
            })
        },
        setExperimentalSoundshare(e) {
            !S() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                enabled: e
            })
        },
        setAudioSubsystem(e) {
            !S() && i.default.dispatch({
                type: "AUDIO_SET_SUBSYSTEM",
                subsystem: e
            })
        },
        setVideoEnabled(e) {
            (0, a.applyInitialVideoBackgroundOption)(), i.default.dispatch({
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
            !S() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_OPEN_H264",
                enabled: e
            })
        },
        setAecDump(e) {
            !S() && i.default.dispatch({
                type: "MEDIA_ENGINE_SET_AEC_DUMP",
                enabled: e
            })
        },
        interact() {
            !S() && i.default.dispatch({
                type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                required: !1
            })
        }
    }
}