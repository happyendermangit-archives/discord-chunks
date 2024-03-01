function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007"), n("70102");
    var i, r, s = n("383536"),
        a = n.n(s),
        o = n("811022"),
        l = n("595275"),
        u = n("773364"),
        c = n("953161"),
        d = n("784343"),
        f = n("446497"),
        E = n("785347"),
        p = n("784063"),
        h = n("710584"),
        _ = n("595432"),
        S = n("149416");

    function m(e) {
        return (null != e ? e : S.DEFAULT_VOLUME) / S.DEFAULT_VOLUME
    }(i = class e extends l.default {
        destroy() {
            this.eachConnection(e => e.destroy()), this.emit(u.MediaEngineEvent.Destroy), this.removeAllListeners()
        }
        interact() {}
        static supported() {
            return (0, p.supported)()
        }
        supported() {
            return !0
        }
        supports(e) {
            var t, n;
            switch (e) {
                case S.Features.LEGACY_AUDIO_SUBSYSTEM:
                    return (0, p.supportsFeature)(S.NativeFeatures.VOICE_LEGACY_SUBSYSTEM);
                case S.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                    return (0, p.supportsFeature)(S.NativeFeatures.VOICE_EXPERIMENTAL_SUBSYSTEM);
                case S.Features.DEBUG_LOGGING:
                    return (0, p.supportsFeature)(S.NativeFeatures.DEBUG_LOGGING);
                case S.Features.SOUNDSHARE:
                    return (0, p.supportsFeature)(S.NativeFeatures.SOUNDSHARE);
                case S.Features.SCREEN_SOUNDSHARE:
                    return (0, p.supportsFeature)(S.NativeFeatures.SCREEN_SOUNDSHARE);
                case S.Features.ELEVATED_HOOK:
                    return (0, p.supportsFeature)(S.NativeFeatures.ELEVATED_HOOK);
                case S.Features.LOOPBACK:
                    return (0, p.supportsFeature)(S.NativeFeatures.LOOPBACK);
                case S.Features.WUMPUS_VIDEO:
                    return (0, p.supportsFeature)(S.NativeFeatures.WUMPUS_VIDEO);
                case S.Features.HYBRID_VIDEO:
                    return (0, p.supportsFeature)(S.NativeFeatures.HYBRID_VIDEO);
                case S.Features.ATTENUATION:
                case S.Features.VIDEO_HOOK:
                    return (null == a ? void 0 : null === (t = a.os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(a.os.family);
                case S.Features.EXPERIMENTAL_SOUNDSHARE:
                    return (0, p.supportsFeature)(S.NativeFeatures.SOUNDSHARE_LOOPBACK);
                case S.Features.OPEN_H264:
                    return (null == a ? void 0 : null === (n = a.os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(a.os.family);
                case S.Features.EXPERIMENTAL_ENCODERS:
                    return (0, p.supportsFeature)(S.NativeFeatures.EXPERIMENTAL_ENCODERS);
                case S.Features.REMOTE_LOCUS_NETWORK_CONTROL:
                    return (0, p.supportsFeature)(S.NativeFeatures.REMOTE_LOCUS_NETWORK_CONTROL);
                case S.Features.SCREEN_PREVIEWS:
                    return (0, p.supportsFeature)(S.NativeFeatures.SCREEN_PREVIEWS);
                case S.Features.CLIPS:
                    return (0, p.supportsFeature)(S.NativeFeatures.CLIPS);
                case S.Features.WINDOW_PREVIEWS:
                    return (0, p.supportsFeature)(S.NativeFeatures.WINDOW_PREVIEWS);
                case S.Features.AUDIO_DEBUG_STATE:
                    return (0, p.supportsFeature)(S.NativeFeatures.AUDIO_DEBUG_STATE);
                case S.Features.CONNECTION_REPLAY:
                    return (0, p.supportsFeature)(S.NativeFeatures.CONNECTION_REPLAY);
                case S.Features.SIMULCAST:
                    return (0, p.supportsFeature)(S.NativeFeatures.SIMULCAST) && (0, p.supportsFeature)(S.NativeFeatures.SIMULCAST_BUGFIX);
                case S.Features.RTC_REGION_RANKING:
                    return (0, p.supportsFeature)(S.NativeFeatures.RTC_REGION_RANKING);
                case S.Features.DIRECT_VIDEO:
                    return (0, p.supportsFeature)(S.NativeFeatures.DIRECT_VIDEO) && null != window.createDiscordStream;
                case S.Features.ELECTRON_VIDEO:
                    return (0, p.supportsFeature)(S.NativeFeatures.ELECTRON_VIDEO);
                case S.Features.MEDIAPIPE:
                    return (0, p.supportsFeature)(S.NativeFeatures.MEDIAPIPE);
                case S.Features.FIXED_KEYFRAME_INTERVAL:
                    return (0, p.supportsFeature)(S.NativeFeatures.FIXED_KEYFRAME_INTERVAL);
                case S.Features.FIRST_FRAME_CALLBACK:
                    return (0, p.supportsFeature)(S.NativeFeatures.FIRST_FRAME_CALLBACK);
                case S.Features.REMOTE_USER_MULTI_STREAM:
                    return (0, p.supportsFeature)(S.NativeFeatures.REMOTE_USER_MULTI_STREAM);
                case S.Features.SPEED_TEST:
                    return (0, p.supportsFeature)(S.NativeFeatures.SPEED_TEST);
                case S.Features.IMAGE_QUALITY_MEASUREMENT:
                    return (0, p.supportsFeature)(S.NativeFeatures.IMAGE_QUALITY_MEASUREMENT);
                case S.Features.AMD_EXPERIMENTAL_RATE_CONTROL:
                    return (0, p.supportsFeature)(S.NativeFeatures.AMD_EXPERIMENTAL_RATE_CONTROL);
                case S.Features.GO_LIVE_HARDWARE:
                    return (0, p.supportsFeature)(S.NativeFeatures.GO_LIVE_HARDWARE);
                case S.Features.SCREEN_CAPTURE_KIT:
                    return (0, p.supportsFeature)(S.NativeFeatures.SCREEN_CAPTURE_KIT);
                case S.Features.CAPTURE_TIMEOUT_EXPERIMENTS:
                    return (0, p.supportsFeature)(S.NativeFeatures.CAPTURE_TIMEOUT_EXPERIMENTS);
                case S.Features.DIAGNOSTICS:
                case S.Features.NATIVE_PING:
                case S.Features.AUTOMATIC_VAD:
                case S.Features.AUDIO_INPUT_DEVICE:
                case S.Features.AUDIO_OUTPUT_DEVICE:
                case S.Features.QOS:
                case S.Features.VOICE_PROCESSING:
                case S.Features.AUTO_ENABLE:
                case S.Features.VIDEO:
                case S.Features.DESKTOP_CAPTURE:
                case S.Features.DESKTOP_CAPTURE_FORMAT:
                case S.Features.DESKTOP_CAPTURE_APPLICATIONS:
                case S.Features.VOICE_PANNING:
                case S.Features.AEC_DUMP:
                case S.Features.DISABLE_VIDEO:
                case S.Features.SAMPLE_PLAYBACK:
                case S.Features.NOISE_SUPPRESSION:
                case S.Features.AUTOMATIC_GAIN_CONTROL:
                    return !0;
                default:
                    return !1
            }
        }
        connect(e, t, n) {
            let i = (0, p.supportsFeature)(S.NativeFeatures.EXPERIMENT_CONFIG);
            !i && (n.experiments = void 0);
            let r = d.default.create(e, t, n);
            return r.on(u.BaseConnectionEvent.Destroy, e => {
                this.connections.delete(e), this.connectionsEmpty() && (0, p.setProcessPriority)(S.ProcessPriority.NORMAL)
            }), r.on(u.BaseConnectionEvent.Connected, () => {
                r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r))
            }), r.on(u.BaseConnectionEvent.Silence, e => {
                this.emit(u.MediaEngineEvent.Silence, e)
            }), this.connections.add(r), (0, p.setProcessPriority)(S.ProcessPriority.HIGH), this.emit(u.MediaEngineEvent.Connection, r), r
        }
        shouldConnectionBroadcastVideo(e) {
            return e.context === S.MediaEngineContextTypes.DEFAULT && this.videoInputDeviceId !== S.DISABLED_DEVICE_ID || e.hasDesktopSource()
        }
        eachConnection(e, t) {
            this.connections.forEach(n => {
                (null == t || n.context === t) && e(n)
            })
        }
        enable() {
            return Promise.resolve()
        }
        setInputVolume(e) {
            (0, p.getVoiceEngine)().setInputVolume(m(e))
        }
        setOutputVolume(e) {
            (0, p.getVoiceEngine)().setOutputVolume(m(e))
        }
        getAudioInputDevices() {
            return (0, f.getAudioInputDevices)()
        }
        setAudioInputDevice(e) {
            (0, p.supportsFeature)(S.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, p.getVoiceEngine)().setInputDevice(e): (0, f.getAudioInputDevices)().then(t => {
                var n;
                let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
                null != i && (0, p.getVoiceEngine)().setInputDevice(i.index)
            })
        }
        getAudioOutputDevices() {
            return (0, f.getAudioOutputDevices)()
        }
        setAudioOutputDevice(e) {
            (0, p.supportsFeature)(S.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, p.getVoiceEngine)().setOutputDevice(e): (0, f.getAudioOutputDevices)().then(t => {
                var n;
                let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
                null != i && (0, p.getVoiceEngine)().setOutputDevice(i.index)
            })
        }
        getVideoInputDevices() {
            return (0, f.getVideoInputDevices)()
        }
        async setVideoInputDevice(e) {
            let t = await this.getVideoInputDevices(),
                n = t.find(t => t.id === e),
                i = null != n ? n.id : S.DISABLED_DEVICE_ID;
            if (i !== this.videoInputDeviceId) {
                if (this.videoInputDeviceId = i, (0, p.supportsFeature)(S.NativeFeatures.SET_VIDEO_DEVICE_BY_ID)) {
                    let e = null != n ? null != n.originalId && "" !== n.originalId ? n.originalId : n.id : S.DISABLED_DEVICE_ID;
                    (0, p.getVoiceEngine)().setVideoInputDevice(e)
                } else(0, p.getVoiceEngine)().setVideoInputDevice(null != n ? n.index : -1);
                this.connections.forEach(e => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)))
            }
        }
        getSupportedVideoCodecs(e) {
            (0, p.getVoiceEngine)().getSupportedVideoCodecs(e)
        }
        getCodecCapabilities(e) {
            (0, p.getVoiceEngine)().getCodecCapabilities(e)
        }
        setGoLiveSource(e, t) {
            if (null == e) {
                this.eachConnection(e => {
                    e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e))
                }, t);
                return
            }
            this.eachConnection(n => {
                (t !== S.MediaEngineContextTypes.STREAM || n.streamUserId === n.ids.userId) && (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)))
            }, t)
        }
        setClipsSource(e) {
            if (null == (0, p.getVoiceEngine)().setClipsSource || null == (0, p.getVoiceEngine)().setOnClipsRecordingEvent || null == (0, p.getVoiceEngine)().applyClipsSettings) return;
            if (null == e) {
                (0, p.getVoiceEngine)().setClipsSource({
                    id: "",
                    soundshareId: 0
                });
                return
            }
            let {
                frameRate: t,
                resolution: n
            } = e.quality, {
                id: i,
                soundshareId: r,
                useLoopback: s,
                useVideoHook: a,
                useGraphicsCapture: o,
                useQuartzCapturer: l,
                allowScreenCaptureKit: c,
                hdrCaptureMode: d
            } = e.desktopDescription;
            (0, p.getVoiceEngine)().setOnClipsRecordingEvent(t => {
                this.logger.info("Clips recording event: ".concat(S.ClipsRecordingEvent[t], " received for stream ").concat(i, " and sound ").concat(r, ".")), t === S.ClipsRecordingEvent.GoLiveEnded ? this.emit(u.MediaEngineEvent.ClipsRecordingRestartNeeded) : t === S.ClipsRecordingEvent.Error ? this.emit(u.MediaEngineEvent.ClipsInitFailure, "Failed to set clips source in media engine", e.applicationName) : (t === S.ClipsRecordingEvent.Ended || t === S.ClipsRecordingEvent.StoppedByGoLive) && this.emit(u.MediaEngineEvent.ClipsRecordingEnded, i, r)
            }), (0, p.getVoiceEngine)().applyClipsSettings({
                useVideoHook: a,
                useGraphicsCapture: o,
                useQuartzCapturer: l,
                allowScreenCaptureKit: c,
                hdrCaptureMode: d,
                soundshareLoopback: s,
                frameRate: t,
                width: n <= 480 ? n / 3 * 4 : n / 9 * 16,
                height: n
            });
            let [f, E] = null != i ? i.split(":") : ["", ""];
            (0, p.getVoiceEngine)().setClipsSource({
                id: E,
                soundshareId: null != r ? r : 0
            })
        }
        setClipsQualitySettings(e, t, n) {
            let i = (0, p.getVoiceEngine)();
            return null != i.applyClipsQualitySettings && (i.applyClipsQualitySettings(e, t, n), !0)
        }
        setSoundshareSource(e, t, n) {
            this.eachConnection(i => {
                (n !== S.MediaEngineContextTypes.STREAM || i.streamUserId === i.ids.userId) && i.setSoundshareSource(e, t)
            }, n)
        }
        getDesktopSource() {
            return Promise.reject(Error("NO_STREAM"))
        }
        getDesktopSources() {
            return new Promise(e => {
                null != (0, p.getVoiceEngine)().getDesktopSources ? (0, p.getVoiceEngine)().getDesktopSources(t => e(t)) : e([])
            })
        }
        getScreenPreviews(e, t) {
            return new Promise(n => {
                null != (0, p.getVoiceEngine)().getScreenPreviews ? (0, p.getVoiceEngine)().getScreenPreviews(e, t, e => {
                    n(e.map((e, t) => ({
                        ...e,
                        name: "Screen " + (t + 1)
                    })))
                }) : n([])
            })
        }
        setClipBufferLength(e) {
            var t, n;
            null === (t = (n = (0, p.getVoiceEngine)()).setClipBufferLength) || void 0 === t || t.call(n, e)
        }
        saveClip(e, t) {
            let n = (0, p.getVoiceEngine)();
            return null == n.setClipBufferLength || null == n.saveClip ? Promise.reject("unsupported") : new Promise((i, r) => {
                n.saveClip(e, t, (e, t, n) => {
                    let r = JSON.parse(n);
                    return i({
                        duration: e,
                        thumbnail: t,
                        clipStats: r
                    })
                }, e => {
                    let t = JSON.parse(e);
                    return r(t)
                })
            })
        }
        saveClipForUser(e, t, n) {
            let i = (0, p.getVoiceEngine)();
            return null == i.saveClipForUser ? Promise.reject("unsupported") : new Promise((r, s) => {
                i.saveClipForUser(e, t, n, (e, t, n) => {
                    let i = JSON.parse(n);
                    return r({
                        duration: e,
                        thumbnail: t,
                        clipStats: i
                    })
                }, e => {
                    let t = JSON.parse(e);
                    return s(t)
                })
            })
        }
        updateClipMetadata(e, t) {
            let n = (0, p.getVoiceEngine)();
            return null == n.updateClipMetadata ? Promise.reject("unsupported") : new Promise((i, r) => {
                n.updateClipMetadata(e, t, i, r)
            })
        }
        exportClip(e, t) {
            let n = (0, p.getVoiceEngine)();
            return null == n.exportClip ? Promise.reject("unsupported") : new Promise((i, r) => {
                n.exportClip(e, t, e => i(new Blob([e])), r)
            })
        }
        getWindowPreviews(e, t) {
            return new Promise(n => {
                null != (0, p.getVoiceEngine)().getWindowPreviews ? (0, p.getVoiceEngine)().getWindowPreviews(e, t, e => {
                    n(e)
                }) : n([])
            })
        }
        setAudioSubsystem(e) {
            null != (0, p.getVoiceEngine)().setAudioSubsystem ? (0, p.getVoiceEngine)().setAudioSubsystem(e) : (0, p.getVoiceEngine)().setUseLegacyAudioDevice(e === S.AudioSubsystems.LEGACY)
        }
        getAudioSubsystem() {
            return this.audioSubsystem
        }
        getAudioLayer() {
            return this.audioLayer
        }
        getDebugLogging() {
            return !!this.supports(S.Features.DEBUG_LOGGING) && (0, p.getVoiceEngine)().getDebugLogging()
        }
        setDebugLogging(e) {
            this.supports(S.Features.DEBUG_LOGGING) && (0, p.getVoiceEngine)().setDebugLogging(e)
        }
        setExperimentalAdm(e) {
            let {
                setExperimentalAdm: t,
                getAudioSubsystem: n
            } = (0, p.getVoiceEngine)();
            null == t || t(e), null == n || n(e => {
                this.audioSubsystem = e
            })
        }
        setLoopback(e, t) {
            null != (0, p.getVoiceEngine)().setLoopback && (0, p.getVoiceEngine)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControl,
                noiseCancellation: t.noiseCancellation
            }), null != (0, p.getVoiceEngine)().setEmitVADLevel2 ? (0, p.getVoiceEngine)().setEmitVADLevel2(e || this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0) : (0, p.getVoiceEngine)().setEmitVADLevel(e || this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0, e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControl,
                noiseCancellation: t.noiseCancellation
            })
        }
        getLoopback() {
            return !1
        }
        setH264Enabled(e) {
            let t = (0, p.getVoiceEngine)();
            t.setTransportOptions({
                h264Enabled: e
            })
        }
        setAv1Enabled(e) {
            let t = (0, p.getVoiceEngine)();
            t.setTransportOptions({
                av1Enabled: e
            })
        }
        setH265Enabled(e) {
            let t = (0, p.getVoiceEngine)();
            t.setTransportOptions({
                h265Enabled: e
            })
        }
        getCodecSurvey() {
            return null != this.codecSurvey ? Promise.resolve(this.codecSurvey) : new Promise((e, t) => {
                let n = (0, p.getVoiceEngine)();
                null != n.getCodecSurvey ? n.getCodecSurvey(t => {
                    this.codecSurvey = t, e(t)
                }) : t(Error("getCodecSurvey is not implemented."))
            })
        }
        writeAudioDebugState() {
            return new Promise((e, t) => {
                let {
                    writeAudioDebugState: n
                } = (0, p.getVoiceEngine)();
                null != n ? (n(), e()) : t(Error("Audio debug state is not supported."))
            })
        }
        startAecDump() {}
        stopAecDump() {}
        setAecDump(e) {
            var t, n;
            null === (t = (n = (0, p.getVoiceEngine)()).setAecDump) || void 0 === t || t.call(n, e)
        }
        rankRtcRegions(e) {
            return new Promise((t, n) => {
                let {
                    rankRtcRegions: i
                } = (0, p.getVoiceEngine)();
                null != i ? i(e, e => t(e)) : n(Error("RTC region latency test is not supported."))
            })
        }
        createReplayConnection(e, t) {
            let n = d.default.createReplay(e, t);
            return null == n ? null : (n.on(u.BaseConnectionEvent.Destroy, e => {
                this.connections.delete(e), this.connectionsEmpty() && (0, p.setProcessPriority)(S.ProcessPriority.NORMAL)
            }), this.connections.add(n), (0, p.setProcessPriority)(S.ProcessPriority.HIGH), this.emit(u.MediaEngineEvent.Connection, n), n)
        }
        setUseDirectVideo(e) {
            _.default.useDirectVideo = e
        }
        setMaxSyncDelayOverride(e) {
            let {
                setMaxSyncDelayOverride: t
            } = (0, p.getVoiceEngine)();
            null != t && t(e)
        }
        applyMediaFilterSettings(e) {
            let {
                applyMediaFilterSettings: t,
                applyMediaFilterSettingsWithCallback: n
            } = (0, p.getVoiceEngine)();
            return null != n ? new Promise((t, i) => {
                n(e, t)
            }) : (null != t && t(e), Promise.resolve())
        }
        startLocalAudioRecording(e) {
            return new Promise((t, n) => {
                let {
                    startLocalAudioRecording: i
                } = (0, p.getVoiceEngine)();
                null != i ? i(e, e => {
                    e ? t() : n(Error("Failed to start local audio recording."))
                }) : n(Error("startLocalAudioRecording is not supported."))
            })
        }
        stopLocalAudioRecording(e) {
            var t, n;
            null === (t = (n = (0, p.getVoiceEngine)()).stopLocalAudioRecording) || void 0 === t || t.call(n, (t, n) => {
                e(t, n)
            }), this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0 && null != (0, p.getVoiceEngine)().setEmitVADLevel2 && (0, p.getVoiceEngine)().setEmitVADLevel2(!0)
        }
        speedTester(e, t) {
            if (!this.supports(S.Features.SPEED_TEST)) throw Error("speedTester is not supported.");
            let n = E.default.create(e, t);
            return n.on(u.BaseSpeedTesterEvent.Destroy, e => {
                this.speedTesters.delete(e), this.connectionsEmpty() && (0, p.setProcessPriority)(S.ProcessPriority.NORMAL)
            }), this.speedTesters.add(n), (0, p.setProcessPriority)(S.ProcessPriority.HIGH), n
        }
        setHasFullbandPerformance(e) {
            null != (0, p.getVoiceEngine)().setHasFullbandPerformance && (0, p.getVoiceEngine)().setHasFullbandPerformance(e)
        }
        getSupportedSecureFramesProtocolVersion() {
            var e;
            return null !== (e = (0, p.getVoiceEngine)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0
        }
        getSupportedBandwidthEstimationExperiments(e) {
            null != (0, p.getVoiceEngine)().getSupportedBandwidthEstimationExperiments && (0, p.getVoiceEngine)().getSupportedBandwidthEstimationExperiments(e)
        }
        watchdogTick() {
            let e = !1;
            (0, p.getVoiceEngine)().pingVoiceThread(() => {
                e = !0, this.consecutiveWatchdogFailures = 0
            }), setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(u.MediaEngineEvent.WatchdogTimeout) : this.watchdogTick()
            }, S.WATCHDOG_TIMEOUT_MS)
        }
        connectionsEmpty() {
            return 0 === this.connections.size && 0 === this.speedTesters.size
        }
        constructor() {
            var t, n;
            super(), t = this, this.Video = _.default, this.Camera = h.default, this.videoInputDeviceId = S.DISABLED_DEVICE_ID, this.connections = new Set, this.speedTesters = new Set, this.lastVoiceActivity = -1, this.audioSubsystem = "standard", this.audioLayer = "", this.deviceChangeGeneration = 0, this.consecutiveWatchdogFailures = 0, this.codecSurvey = null, this.logger = new o.default("MediaEngineNative"), this.handleDeviceChange = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                t.deviceChangeGeneration++, t.emit(u.MediaEngineEvent.DeviceChange, (0, f.sanitizeDevices)(S.DeviceTypes.AUDIO_INPUT, e), (0, f.sanitizeDevices)(S.DeviceTypes.AUDIO_OUTPUT, n), (0, f.sanitizeDevices)(S.DeviceTypes.VIDEO_INPUT, i))
            }, this.handleVolumeChange = (e, t) => {
                this.emit(u.MediaEngineEvent.VolumeChange, e * S.DEFAULT_VOLUME, t * S.DEFAULT_VOLUME)
            }, this.handleVoiceActivity = (e, t) => {
                let n = Date.now();
                this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && (this.lastVoiceActivity = n, this.emit(u.MediaEngineEvent.VoiceActivity, e, t))
            }, this.handleActiveSinksChange = (e, t) => {
                this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
            }, this.handleNewListener = e => {
                switch (e) {
                    case u.MediaEngineEvent.VoiceActivity:
                        null != (0, p.getVoiceEngine)().setEmitVADLevel2 ? (0, p.getVoiceEngine)().setEmitVADLevel2(!0) : (0, p.getVoiceEngine)().setEmitVADLevel(!0, !1, {});
                        break;
                    case u.MediaEngineEvent.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then(e => {
                            let [n, i, r] = e;
                            t === this.deviceChangeGeneration && this.emit(u.MediaEngineEvent.DeviceChange, n, i, r)
                        })
                }
            }, this.handleRemoveListener = e => {
                e === u.MediaEngineEvent.VoiceActivity && (null != (0, p.getVoiceEngine)().setEmitVADLevel2 ? (0, p.getVoiceEngine)().setEmitVADLevel2(this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0) : (0, p.getVoiceEngine)().setEmitVADLevel(this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0, !1, {}))
            }, this.handleVideoInputInitialization = e => {
                this.emit(u.MediaEngineEvent.VideoInputInitialized, e)
            };
            let i = (0, p.getVoiceEngine)();
            if (i.setDeviceChangeCallback(this.handleDeviceChange), i.setVolumeChangeCallback(this.handleVolumeChange), i.setOnVoiceCallback(this.handleVoiceActivity), null === (n = i.setVideoInputInitializationCallback) || void 0 === n || n.call(i, this.handleVideoInputInitialization), i.setTransportOptions({
                    idleJitterBufferFlush: !0,
                    ducking: !1
                }), this.on("removeListener", this.handleRemoveListener), this.on("newListener", this.handleNewListener), null != (0, p.getVoiceEngine)().getAudioSubsystem ? (0, p.getVoiceEngine)().getAudioSubsystem((e, t) => {
                    this.audioSubsystem = e, this.audioLayer = t
                }) : null != (0, p.getVoiceEngine)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, p.getVoiceEngine)().getUseLegacyAudioDevice() ? S.AudioSubsystems.LEGACY : S.AudioSubsystems.STANDARD), null != i.pingVoiceThread && "undefined" != typeof window && "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(), this.getDebugLogging() && !e.installedLogHooks)
                for (let t of (e.installedLogHooks = !0, ["trace", "debug", "info", "warn", "error", "log"])) {
                    let e = console,
                        n = e[t];
                    null != n && (e[t] = function() {
                        n.apply(this, arguments);
                        try {
                            let e = Array.from(arguments).map(e => null != e ? e.toString() : e).filter(e => "string" != typeof e || "\nfont-weight: bold;\ncolor: purple;\n" !== e);
                            (0, p.getVoiceEngine)().consoleLog(t, JSON.stringify(e))
                        } catch (e) {}
                    })
                }
            null != i.setActiveSinksChangeCallback && i.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, c.default)(this)
        }
    }).installedLogHooks = !1, r = i
}