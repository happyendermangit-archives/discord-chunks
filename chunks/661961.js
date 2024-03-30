function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("413087"),
        i = n("928064"),
        a = n("839650"),
        u = n("335911"),
        s = n("870331"),
        l = n("423284"),
        c = n("155281"),
        f = n("281767"),
        d = n("439386");

    function _() {
        (0, l.playSound)("mention3")
    }

    function E(e, t, n, r, o) {
        if (t !== n) {
            var i = e[t],
                u = e[n];
            s.default.track(f.AnalyticEvents.MEDIA_DEVICE_CHANGED, {
                device_from_name: a.default.getCertifiedDeviceName(t, null != i ? i.name : ""),
                device_to_name: a.default.getCertifiedDeviceName(n, null != u ? u.name : ""),
                device_type: r,
                device_is_certified: a.default.isCertified(n),
                location: o
            })
        }
    }
    var p = {
            isNotSupported: function() {
                return !1
            },
            enable: function(e) {
                return Promise.resolve(!0)
            },
            trackToggleSelfMute: function(e) {}
        },
        m = (p = n("41882")).enable,
        y = p.isNotSupported,
        I = p.trackToggleSelfMute;
    t.default = {
        enable: m,
        toggleSelfMute: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.context,
                n = void 0 === t ? d.MediaEngineContextTypes.DEFAULT : t,
                o = e.syncRemote,
                i = e.usedKeybind,
                a = e.playSoundEffect;
            return y() ? Promise.resolve() : (I({
                usedKeybind: void 0 !== i && i
            }), u.default.isEnabled()) ? r.default.dispatch({
                type: "AUDIO_TOGGLE_SELF_MUTE",
                context: n,
                syncRemote: void 0 === o || o,
                skipMuteUnmuteSoundEffect: !(void 0 === a || a)
            }) : this.enable(!0)
        },
        setTemporarySelfMute: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                mute: e
            })
        },
        toggleSelfDeaf: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.context,
                n = void 0 === t ? d.MediaEngineContextTypes.DEFAULT : t,
                o = e.syncRemote;
            !y() && r.default.dispatch({
                type: "AUDIO_TOGGLE_SELF_DEAF",
                context: n,
                syncRemote: void 0 === o || o
            })
        },
        toggleLocalMute: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT;
            !y() && r.default.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_MUTE",
                context: t,
                userId: e
            })
        },
        toggleLocalSoundboardMute: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT;
            r.default.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                context: t,
                userId: e
            })
        },
        setDisableLocalVideo: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MediaEngineContextTypes.DEFAULT,
                o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            !y() && r.default.dispatch({
                type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                context: n,
                userId: e,
                videoToggleState: t,
                persist: o,
                isAutomatic: i
            })
        },
        setLocalVolume: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MediaEngineContextTypes.DEFAULT;
            r.default.dispatch({
                type: "AUDIO_SET_LOCAL_VOLUME",
                context: n,
                userId: e,
                volume: (0, o.snapVolumeToDefault)(t, n)
            })
        },
        setLocalPan: function(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.MediaEngineContextTypes.DEFAULT;
            r.default.dispatch({
                type: "AUDIO_SET_LOCAL_PAN",
                context: o,
                userId: e,
                left: t,
                right: n
            })
        },
        setMode: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MediaEngineContextTypes.DEFAULT;
            !y() && r.default.dispatch({
                type: "AUDIO_SET_MODE",
                context: n,
                mode: e,
                options: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({}, u.default.getModeOptions(n), t)
            })
        },
        setInputVolume: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_INPUT_VOLUME",
                volume: e
            })
        },
        setOutputVolume: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_OUTPUT_VOLUME",
                volume: e
            })
        },
        setInputDevice: function(e, t) {
            !y() && (null != t && E(u.default.getInputDevices(), u.default.getInputDeviceId(), e, "Audio Input", t), r.default.dispatch({
                type: "AUDIO_SET_INPUT_DEVICE",
                id: e
            }), _())
        },
        setOutputDevice: function(e, t) {
            !y() && (null != t && E(u.default.getOutputDevices(), u.default.getOutputDeviceId(), e, "Audio Output", t), r.default.dispatch({
                type: "AUDIO_SET_OUTPUT_DEVICE",
                id: e
            }), _())
        },
        setVideoDevice: function(e, t) {
            !y() && (null != t && E(u.default.getVideoDevices(), u.default.getVideoDeviceId(), e, "Video", t), r.default.dispatch({
                type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                id: e
            }))
        },
        setEchoCancellation: function(e, t) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_ECHO_CANCELLATION",
                enabled: e,
                location: t
            })
        },
        setLoopback: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_LOOPBACK",
                enabled: e
            })
        },
        setNoiseSuppression: function(e, t) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_NOISE_SUPPRESSION",
                enabled: e,
                location: t
            })
        },
        setNoiseCancellation: function(e, t) {
            !y() && (r.default.dispatch({
                type: "AUDIO_SET_NOISE_CANCELLATION",
                enabled: e,
                location: t
            }), r.default.dispatch({
                type: "AUDIO_SET_NOISE_SUPPRESSION",
                enabled: !e,
                location: t
            }))
        },
        setAutomaticGainControl: function(e, t) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                enabled: e,
                location: t
            })
        },
        setExperimentalEncoders: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
                enabled: e
            })
        },
        setHardwareH264: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_HARDWARE_H264",
                enabled: e
            })
        },
        setAttenuation: function(e, t, n) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_ATTENUATION",
                attenuation: e,
                attenuateWhileSpeakingSelf: t,
                attenuateWhileSpeakingOthers: n
            })
        },
        setQoS: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_QOS",
                enabled: e
            })
        },
        reset: function() {
            !y() && r.default.dispatch({
                type: "AUDIO_RESET"
            })
        },
        setSilenceWarning: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                enabled: e
            })
        },
        setDebugLogging: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_DEBUG_LOGGING",
                enabled: e
            })
        },
        setVideoHook: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                enabled: e
            })
        },
        setExperimentalSoundshare: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                enabled: e
            })
        },
        setAudioSubsystem: function(e) {
            !y() && r.default.dispatch({
                type: "AUDIO_SET_SUBSYSTEM",
                subsystem: e
            })
        },
        setVideoEnabled: function(e) {
            (0, i.applyInitialVideoBackgroundOption)(), r.default.dispatch({
                type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                enabled: e
            })
        },
        setGoLiveSource: function(e) {
            (null == e ? void 0 : e.qualityOptions) != null && (0, c.trackStreamSettingsUpdate)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), r.default.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: e
            })
        },
        setOpenH264: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_OPEN_H264",
                enabled: e
            })
        },
        setAV1Enabled: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_AV1",
                enabled: e
            })
        },
        setH265Enabled: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_H265",
                enabled: e
            })
        },
        setAecDump: function(e) {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_SET_AEC_DUMP",
                enabled: e
            })
        },
        interact: function() {
            !y() && r.default.dispatch({
                type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                required: !1
            })
        }
    }
}