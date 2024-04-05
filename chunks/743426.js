function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("47120"), n("411104");
    var i = n("264344"),
        r = n.n(i),
        s = n("259443"),
        a = n("47770"),
        o = n("46973"),
        l = n("734298"),
        u = n("997545"),
        d = n("501950"),
        _ = n("801334"),
        c = n("992774"),
        E = n("656795"),
        I = n("650886"),
        T = n("149396");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        return (null != e ? e : T.DEFAULT_VOLUME) / T.DEFAULT_VOLUME
    }
    class A extends a.default {
        destroy() {
            this.eachConnection(e => e.destroy()), this.emit(o.MediaEngineEvent.Destroy), this.removeAllListeners()
        }
        interact() {}
        static supported() {
            return (0, c.supported)()
        }
        supported() {
            return !0
        }
        supports(e) {
            var t, n;
            switch (e) {
                case T.Features.LEGACY_AUDIO_SUBSYSTEM:
                    return (0, c.supportsFeature)(T.NativeFeatures.VOICE_LEGACY_SUBSYSTEM);
                case T.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                    return (0, c.supportsFeature)(T.NativeFeatures.VOICE_EXPERIMENTAL_SUBSYSTEM);
                case T.Features.DEBUG_LOGGING:
                    return (0, c.supportsFeature)(T.NativeFeatures.DEBUG_LOGGING);
                case T.Features.SOUNDSHARE:
                    return (0, c.supportsFeature)(T.NativeFeatures.SOUNDSHARE);
                case T.Features.SCREEN_SOUNDSHARE:
                    return (0, c.supportsFeature)(T.NativeFeatures.SCREEN_SOUNDSHARE);
                case T.Features.ELEVATED_HOOK:
                    return (0, c.supportsFeature)(T.NativeFeatures.ELEVATED_HOOK);
                case T.Features.LOOPBACK:
                    return (0, c.supportsFeature)(T.NativeFeatures.LOOPBACK);
                case T.Features.WUMPUS_VIDEO:
                    return (0, c.supportsFeature)(T.NativeFeatures.WUMPUS_VIDEO);
                case T.Features.HYBRID_VIDEO:
                    return (0, c.supportsFeature)(T.NativeFeatures.HYBRID_VIDEO);
                case T.Features.ATTENUATION:
                case T.Features.VIDEO_HOOK:
                    return (null === r() || void 0 === r() ? void 0 : null === (t = r().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(r().os.family);
                case T.Features.EXPERIMENTAL_SOUNDSHARE:
                    return (0, c.supportsFeature)(T.NativeFeatures.SOUNDSHARE_LOOPBACK);
                case T.Features.OPEN_H264:
                    return (null === r() || void 0 === r() ? void 0 : null === (n = r().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(r().os.family);
                case T.Features.EXPERIMENTAL_ENCODERS:
                    return (0, c.supportsFeature)(T.NativeFeatures.EXPERIMENTAL_ENCODERS);
                case T.Features.REMOTE_LOCUS_NETWORK_CONTROL:
                    return (0, c.supportsFeature)(T.NativeFeatures.REMOTE_LOCUS_NETWORK_CONTROL);
                case T.Features.SCREEN_PREVIEWS:
                    return (0, c.supportsFeature)(T.NativeFeatures.SCREEN_PREVIEWS);
                case T.Features.CLIPS:
                    return (0, c.supportsFeature)(T.NativeFeatures.CLIPS);
                case T.Features.WINDOW_PREVIEWS:
                    return (0, c.supportsFeature)(T.NativeFeatures.WINDOW_PREVIEWS);
                case T.Features.AUDIO_DEBUG_STATE:
                    return (0, c.supportsFeature)(T.NativeFeatures.AUDIO_DEBUG_STATE);
                case T.Features.CONNECTION_REPLAY:
                    return (0, c.supportsFeature)(T.NativeFeatures.CONNECTION_REPLAY);
                case T.Features.SIMULCAST:
                    return (0, c.supportsFeature)(T.NativeFeatures.SIMULCAST) && (0, c.supportsFeature)(T.NativeFeatures.SIMULCAST_BUGFIX);
                case T.Features.RTC_REGION_RANKING:
                    return (0, c.supportsFeature)(T.NativeFeatures.RTC_REGION_RANKING);
                case T.Features.DIRECT_VIDEO:
                    return (0, c.supportsFeature)(T.NativeFeatures.DIRECT_VIDEO) && null != window.createDiscordStream;
                case T.Features.ELECTRON_VIDEO:
                    return (0, c.supportsFeature)(T.NativeFeatures.ELECTRON_VIDEO);
                case T.Features.MEDIAPIPE:
                    return (0, c.supportsFeature)(T.NativeFeatures.MEDIAPIPE);
                case T.Features.FIXED_KEYFRAME_INTERVAL:
                    return (0, c.supportsFeature)(T.NativeFeatures.FIXED_KEYFRAME_INTERVAL);
                case T.Features.FIRST_FRAME_CALLBACK:
                    return (0, c.supportsFeature)(T.NativeFeatures.FIRST_FRAME_CALLBACK);
                case T.Features.REMOTE_USER_MULTI_STREAM:
                    return (0, c.supportsFeature)(T.NativeFeatures.REMOTE_USER_MULTI_STREAM);
                case T.Features.SPEED_TEST:
                    return (0, c.supportsFeature)(T.NativeFeatures.SPEED_TEST);
                case T.Features.IMAGE_QUALITY_MEASUREMENT:
                    return (0, c.supportsFeature)(T.NativeFeatures.IMAGE_QUALITY_MEASUREMENT);
                case T.Features.AMD_EXPERIMENTAL_RATE_CONTROL:
                    return (0, c.supportsFeature)(T.NativeFeatures.AMD_EXPERIMENTAL_RATE_CONTROL);
                case T.Features.GO_LIVE_HARDWARE:
                    return (0, c.supportsFeature)(T.NativeFeatures.GO_LIVE_HARDWARE);
                case T.Features.SCREEN_CAPTURE_KIT:
                    return (0, c.supportsFeature)(T.NativeFeatures.SCREEN_CAPTURE_KIT);
                case T.Features.CAPTURE_TIMEOUT_EXPERIMENTS:
                    return (0, c.supportsFeature)(T.NativeFeatures.CAPTURE_TIMEOUT_EXPERIMENTS);
                case T.Features.DIAGNOSTICS:
                case T.Features.NATIVE_PING:
                case T.Features.AUTOMATIC_VAD:
                case T.Features.AUDIO_INPUT_DEVICE:
                case T.Features.AUDIO_OUTPUT_DEVICE:
                case T.Features.QOS:
                case T.Features.VOICE_PROCESSING:
                case T.Features.AUTO_ENABLE:
                case T.Features.VIDEO:
                case T.Features.DESKTOP_CAPTURE:
                case T.Features.DESKTOP_CAPTURE_FORMAT:
                case T.Features.DESKTOP_CAPTURE_APPLICATIONS:
                case T.Features.VOICE_PANNING:
                case T.Features.AEC_DUMP:
                case T.Features.DISABLE_VIDEO:
                case T.Features.SAMPLE_PLAYBACK:
                case T.Features.NOISE_SUPPRESSION:
                case T.Features.AUTOMATIC_GAIN_CONTROL:
                    return !0;
                default:
                    return !1
            }
        }
        connect(e, t, n) {
            !(0, c.supportsFeature)(T.NativeFeatures.EXPERIMENT_CONFIG) && (n.experiments = void 0);
            let i = u.default.create(e, t, n);
            return i.on(o.BaseConnectionEvent.Destroy, e => {
                this.connections.delete(e), this.connectionsEmpty() && (0, c.setProcessPriority)(T.ProcessPriority.NORMAL)
            }), i.on(o.BaseConnectionEvent.Connected, () => {
                i.setVideoBroadcast(this.shouldConnectionBroadcastVideo(i))
            }), i.on(o.BaseConnectionEvent.Silence, e => {
                this.emit(o.MediaEngineEvent.Silence, e)
            }), this.connections.add(i), (0, c.setProcessPriority)(T.ProcessPriority.HIGH), this.emit(o.MediaEngineEvent.Connection, i), i
        }
        shouldConnectionBroadcastVideo(e) {
            return e.context === T.MediaEngineContextTypes.DEFAULT && this.videoInputDeviceId !== T.DISABLED_DEVICE_ID || e.hasDesktopSource()
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
            (0, c.getVoiceEngine)().setInputVolume(S(e))
        }
        setOutputVolume(e) {
            (0, c.getVoiceEngine)().setOutputVolume(S(e))
        }
        getAudioInputDevices() {
            return (0, d.getAudioInputDevices)()
        }
        setAudioInputDevice(e) {
            (0, c.supportsFeature)(T.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, c.getVoiceEngine)().setInputDevice(e): (0, d.getAudioInputDevices)().then(t => {
                var n;
                let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
                null != i && (0, c.getVoiceEngine)().setInputDevice(i.index)
            })
        }
        getAudioOutputDevices() {
            return (0, d.getAudioOutputDevices)()
        }
        setAudioOutputDevice(e) {
            (0, c.supportsFeature)(T.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, c.getVoiceEngine)().setOutputDevice(e): (0, d.getAudioOutputDevices)().then(t => {
                var n;
                let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
                null != i && (0, c.getVoiceEngine)().setOutputDevice(i.index)
            })
        }
        getVideoInputDevices() {
            return (0, d.getVideoInputDevices)()
        }
        async setVideoInputDevice(e) {
            let t = (await this.getVideoInputDevices()).find(t => t.id === e),
                n = null != t ? t.id : T.DISABLED_DEVICE_ID;
            if (n !== this.videoInputDeviceId) {
                if (this.videoInputDeviceId = n, (0, c.supportsFeature)(T.NativeFeatures.SET_VIDEO_DEVICE_BY_ID)) {
                    let e = null != t ? null != t.originalId && "" !== t.originalId ? t.originalId : t.id : T.DISABLED_DEVICE_ID;
                    (0, c.getVoiceEngine)().setVideoInputDevice(e)
                } else(0, c.getVoiceEngine)().setVideoInputDevice(null != t ? t.index : -1);
                this.connections.forEach(e => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)))
            }
        }
        getSupportedVideoCodecs(e) {
            (0, c.getVoiceEngine)().getSupportedVideoCodecs(e)
        }
        getCodecCapabilities(e) {
            (0, c.getVoiceEngine)().getCodecCapabilities(e)
        }
        setGoLiveSource(e, t) {
            if (null == e) {
                this.eachConnection(e => {
                    e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e))
                }, t);
                return
            }
            this.eachConnection(n => {
                (t !== T.MediaEngineContextTypes.STREAM || n.streamUserId === n.userId) && (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)))
            }, t)
        }
        setClipsSource(e) {
            if (null == (0, c.getVoiceEngine)().setClipsSource || null == (0, c.getVoiceEngine)().setOnClipsRecordingEvent || null == (0, c.getVoiceEngine)().applyClipsSettings) return;
            if (null == e) {
                (0, c.getVoiceEngine)().setClipsSource({
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
                useGraphicsCapture: l,
                useQuartzCapturer: u,
                allowScreenCaptureKit: d,
                hdrCaptureMode: _
            } = e.desktopDescription;
            (0, c.getVoiceEngine)().setOnClipsRecordingEvent(t => {
                this.logger.info("Clips recording event: ".concat(T.ClipsRecordingEvent[t], " received for stream ").concat(i, " and sound ").concat(r, ".")), t === T.ClipsRecordingEvent.GoLiveEnded ? this.emit(o.MediaEngineEvent.ClipsRecordingRestartNeeded) : t === T.ClipsRecordingEvent.Error ? this.emit(o.MediaEngineEvent.ClipsInitFailure, "Failed to set clips source in media engine", e.applicationName) : (t === T.ClipsRecordingEvent.Ended || t === T.ClipsRecordingEvent.StoppedByGoLive) && this.emit(o.MediaEngineEvent.ClipsRecordingEnded, i, r)
            }), (0, c.getVoiceEngine)().applyClipsSettings({
                useVideoHook: a,
                useGraphicsCapture: l,
                useQuartzCapturer: u,
                allowScreenCaptureKit: d,
                hdrCaptureMode: _,
                soundshareLoopback: s,
                frameRate: t,
                width: n <= 480 ? n / 3 * 4 : n / 9 * 16,
                height: n
            });
            let [E, I] = null != i ? i.split(":") : ["", ""];
            (0, c.getVoiceEngine)().setClipsSource({
                id: I,
                soundshareId: null != r ? r : 0
            })
        }
        setClipsQualitySettings(e, t, n) {
            let i = (0, c.getVoiceEngine)();
            return null != i.applyClipsQualitySettings && (i.applyClipsQualitySettings(e, t, n), !0)
        }
        setSoundshareSource(e, t, n) {
            this.eachConnection(i => {
                (n !== T.MediaEngineContextTypes.STREAM || i.streamUserId === i.userId) && i.setSoundshareSource(e, t)
            }, n)
        }
        getDesktopSource() {
            return Promise.reject(Error("NO_STREAM"))
        }
        getDesktopSources() {
            return new Promise(e => {
                null != (0, c.getVoiceEngine)().getDesktopSources ? (0, c.getVoiceEngine)().getDesktopSources(t => e(t)) : e([])
            })
        }
        getScreenPreviews(e, t) {
            return new Promise(n => {
                null != (0, c.getVoiceEngine)().getScreenPreviews ? (0, c.getVoiceEngine)().getScreenPreviews(e, t, e => {
                    n(e.map((e, t) => ({
                        ...e,
                        name: "Screen " + (t + 1)
                    })))
                }) : n([])
            })
        }
        setClipBufferLength(e) {
            var t, n;
            null === (t = (n = (0, c.getVoiceEngine)()).setClipBufferLength) || void 0 === t || t.call(n, e)
        }
        saveClip(e, t) {
            let n = (0, c.getVoiceEngine)();
            return null == n.setClipBufferLength || null == n.saveClip ? Promise.reject("unsupported") : new Promise((i, r) => {
                n.saveClip(e, t, (e, t, n) => i({
                    duration: e,
                    clipStats: JSON.parse(n)
                }), e => r(JSON.parse(e)))
            })
        }
        saveClipForUser(e, t, n) {
            let i = (0, c.getVoiceEngine)();
            return null == i.saveClipForUser ? Promise.reject("unsupported") : new Promise((r, s) => {
                i.saveClipForUser(e, t, n, (e, t, n) => r({
                    duration: e,
                    clipStats: JSON.parse(n)
                }), e => s(JSON.parse(e)))
            })
        }
        updateClipMetadata(e, t) {
            let n = (0, c.getVoiceEngine)();
            return null == n.updateClipMetadata ? Promise.reject("unsupported") : new Promise((i, r) => {
                n.updateClipMetadata(e, t, i, r)
            })
        }
        exportClip(e, t) {
            let n = (0, c.getVoiceEngine)();
            return null == n.exportClip ? Promise.reject("unsupported") : new Promise((i, r) => {
                n.exportClip(e, t, e => i(new Blob([e])), r)
            })
        }
        getWindowPreviews(e, t) {
            return new Promise(n => {
                null != (0, c.getVoiceEngine)().getWindowPreviews ? (0, c.getVoiceEngine)().getWindowPreviews(e, t, e => {
                    n(e)
                }) : n([])
            })
        }
        setAudioSubsystem(e) {
            null != (0, c.getVoiceEngine)().setAudioSubsystem ? (0, c.getVoiceEngine)().setAudioSubsystem(e) : (0, c.getVoiceEngine)().setUseLegacyAudioDevice(e === T.AudioSubsystems.LEGACY)
        }
        getAudioSubsystem() {
            return this.audioSubsystem
        }
        getAudioLayer() {
            return this.audioLayer
        }
        getDebugLogging() {
            return !!this.supports(T.Features.DEBUG_LOGGING) && (0, c.getVoiceEngine)().getDebugLogging()
        }
        setDebugLogging(e) {
            this.supports(T.Features.DEBUG_LOGGING) && (0, c.getVoiceEngine)().setDebugLogging(e)
        }
        setExperimentalAdm(e) {
            let {
                setExperimentalAdm: t,
                getAudioSubsystem: n
            } = (0, c.getVoiceEngine)();
            null == t || t(e), null == n || n(e => {
                this.audioSubsystem = e
            })
        }
        setLoopback(e, t) {
            null != (0, c.getVoiceEngine)().setLoopback && (0, c.getVoiceEngine)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControl,
                noiseCancellation: t.noiseCancellation
            }), null != (0, c.getVoiceEngine)().setEmitVADLevel2 ? (0, c.getVoiceEngine)().setEmitVADLevel2(e || this.listenerCount(o.MediaEngineEvent.VoiceActivity) > 0) : (0, c.getVoiceEngine)().setEmitVADLevel(e || this.listenerCount(o.MediaEngineEvent.VoiceActivity) > 0, e, {
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
            (0, c.getVoiceEngine)().setTransportOptions({
                h264Enabled: e
            })
        }
        setAv1Enabled(e) {
            (0, c.getVoiceEngine)().setTransportOptions({
                av1Enabled: e
            })
        }
        setH265Enabled(e) {
            (0, c.getVoiceEngine)().setTransportOptions({
                h265Enabled: e
            })
        }
        getCodecSurvey() {
            return null != this.codecSurvey ? Promise.resolve(this.codecSurvey) : new Promise((e, t) => {
                let n = (0, c.getVoiceEngine)();
                null != n.getCodecSurvey ? n.getCodecSurvey(t => {
                    this.codecSurvey = t, e(t)
                }) : t(Error("getCodecSurvey is not implemented."))
            })
        }
        writeAudioDebugState() {
            return new Promise((e, t) => {
                let {
                    writeAudioDebugState: n
                } = (0, c.getVoiceEngine)();
                null != n ? (n(), e()) : t(Error("Audio debug state is not supported."))
            })
        }
        startAecDump() {}
        stopAecDump() {}
        setAecDump(e) {
            var t, n;
            null === (t = (n = (0, c.getVoiceEngine)()).setAecDump) || void 0 === t || t.call(n, e)
        }
        rankRtcRegions(e) {
            return new Promise((t, n) => {
                let {
                    rankRtcRegions: i
                } = (0, c.getVoiceEngine)();
                null != i ? i(e, e => t(e)) : n(Error("RTC region latency test is not supported."))
            })
        }
        createReplayConnection(e, t) {
            let n = u.default.createReplay(e, t);
            return null == n ? null : (n.on(o.BaseConnectionEvent.Destroy, e => {
                this.connections.delete(e), this.connectionsEmpty() && (0, c.setProcessPriority)(T.ProcessPriority.NORMAL)
            }), this.connections.add(n), (0, c.setProcessPriority)(T.ProcessPriority.HIGH), this.emit(o.MediaEngineEvent.Connection, n), n)
        }
        setUseDirectVideo(e) {
            I.default.useDirectVideo = e
        }
        setMaxSyncDelayOverride(e) {
            let {
                setMaxSyncDelayOverride: t
            } = (0, c.getVoiceEngine)();
            null != t && t(e)
        }
        applyMediaFilterSettings(e) {
            let {
                applyMediaFilterSettings: t,
                applyMediaFilterSettingsWithCallback: n
            } = (0, c.getVoiceEngine)();
            return null != n ? new Promise((t, i) => {
                n(e, t)
            }) : (null != t && t(e), Promise.resolve())
        }
        startLocalAudioRecording(e) {
            return new Promise((t, n) => {
                let {
                    startLocalAudioRecording: i
                } = (0, c.getVoiceEngine)();
                null != i ? i(e, e => {
                    e ? t() : n(Error("Failed to start local audio recording."))
                }) : n(Error("startLocalAudioRecording is not supported."))
            })
        }
        stopLocalAudioRecording(e) {
            var t, n;
            null === (t = (n = (0, c.getVoiceEngine)()).stopLocalAudioRecording) || void 0 === t || t.call(n, (t, n) => {
                e(t, n)
            }), this.listenerCount(o.MediaEngineEvent.VoiceActivity) > 0 && null != (0, c.getVoiceEngine)().setEmitVADLevel2 && (0, c.getVoiceEngine)().setEmitVADLevel2(!0)
        }
        speedTester(e, t) {
            if (!this.supports(T.Features.SPEED_TEST)) throw Error("speedTester is not supported.");
            let n = _.default.create(e, t);
            return n.on(o.BaseSpeedTesterEvent.Destroy, e => {
                this.speedTesters.delete(e), this.connectionsEmpty() && (0, c.setProcessPriority)(T.ProcessPriority.NORMAL)
            }), this.speedTesters.add(n), (0, c.setProcessPriority)(T.ProcessPriority.HIGH), n
        }
        setHasFullbandPerformance(e) {
            null != (0, c.getVoiceEngine)().setHasFullbandPerformance && (0, c.getVoiceEngine)().setHasFullbandPerformance(e)
        }
        getSupportedSecureFramesProtocolVersion() {
            var e;
            return null !== (e = (0, c.getVoiceEngine)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0
        }
        getSupportedBandwidthEstimationExperiments(e) {
            null != (0, c.getVoiceEngine)().getSupportedBandwidthEstimationExperiments && (0, c.getVoiceEngine)().getSupportedBandwidthEstimationExperiments(e)
        }
        watchdogTick() {
            let e = !1;
            (0, c.getVoiceEngine)().pingVoiceThread(() => {
                e = !0, this.consecutiveWatchdogFailures = 0
            }), setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(o.MediaEngineEvent.WatchdogTimeout) : this.watchdogTick()
            }, T.WATCHDOG_TIMEOUT_MS)
        }
        connectionsEmpty() {
            return 0 === this.connections.size && 0 === this.speedTesters.size
        }
        constructor() {
            var e, t;
            super(), e = this, f(this, "Video", I.default), f(this, "Camera", E.default), f(this, "videoInputDeviceId", T.DISABLED_DEVICE_ID), f(this, "connections", new Set), f(this, "speedTesters", new Set), f(this, "lastVoiceActivity", -1), f(this, "audioSubsystem", "standard"), f(this, "audioLayer", ""), f(this, "deviceChangeGeneration", 0), f(this, "consecutiveWatchdogFailures", 0), f(this, "codecSurvey", null), f(this, "logger", new s.Logger("MediaEngineNative")), f(this, "handleDeviceChange", function() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++, e.emit(o.MediaEngineEvent.DeviceChange, (0, d.sanitizeDevices)(T.DeviceTypes.AUDIO_INPUT, t), (0, d.sanitizeDevices)(T.DeviceTypes.AUDIO_OUTPUT, n), (0, d.sanitizeDevices)(T.DeviceTypes.VIDEO_INPUT, i))
            }), f(this, "handleVolumeChange", (e, t) => {
                this.emit(o.MediaEngineEvent.VolumeChange, e * T.DEFAULT_VOLUME, t * T.DEFAULT_VOLUME)
            }), f(this, "handleVoiceActivity", (e, t) => {
                let n = Date.now();
                this.listenerCount(o.MediaEngineEvent.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && (this.lastVoiceActivity = n, this.emit(o.MediaEngineEvent.VoiceActivity, e, t))
            }), f(this, "handleActiveSinksChange", (e, t) => {
                this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
            }), f(this, "handleNewListener", e => {
                switch (e) {
                    case o.MediaEngineEvent.VoiceActivity:
                        null != (0, c.getVoiceEngine)().setEmitVADLevel2 ? (0, c.getVoiceEngine)().setEmitVADLevel2(!0) : (0, c.getVoiceEngine)().setEmitVADLevel(!0, !1, {});
                        break;
                    case o.MediaEngineEvent.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then(e => {
                            let [n, i, r] = e;
                            t === this.deviceChangeGeneration && this.emit(o.MediaEngineEvent.DeviceChange, n, i, r)
                        })
                }
            }), f(this, "handleRemoveListener", e => {
                e === o.MediaEngineEvent.VoiceActivity && (null != (0, c.getVoiceEngine)().setEmitVADLevel2 ? (0, c.getVoiceEngine)().setEmitVADLevel2(this.listenerCount(o.MediaEngineEvent.VoiceActivity) > 0) : (0, c.getVoiceEngine)().setEmitVADLevel(this.listenerCount(o.MediaEngineEvent.VoiceActivity) > 0, !1, {}))
            }), f(this, "handleVideoInputInitialization", e => {
                this.emit(o.MediaEngineEvent.VideoInputInitialized, e)
            });
            let n = (0, c.getVoiceEngine)();
            if (n.setDeviceChangeCallback(this.handleDeviceChange), n.setVolumeChangeCallback(this.handleVolumeChange), n.setOnVoiceCallback(this.handleVoiceActivity), null === (t = n.setVideoInputInitializationCallback) || void 0 === t || t.call(n, this.handleVideoInputInitialization), n.setTransportOptions({
                    idleJitterBufferFlush: !0,
                    ducking: !1
                }), this.on("removeListener", this.handleRemoveListener), this.on("newListener", this.handleNewListener), null != (0, c.getVoiceEngine)().getAudioSubsystem ? (0, c.getVoiceEngine)().getAudioSubsystem((e, t) => {
                    this.audioSubsystem = e, this.audioLayer = t
                }) : null != (0, c.getVoiceEngine)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, c.getVoiceEngine)().getUseLegacyAudioDevice() ? T.AudioSubsystems.LEGACY : T.AudioSubsystems.STANDARD), null != n.pingVoiceThread && "undefined" != typeof window && "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(), this.getDebugLogging() && !A.installedLogHooks)
                for (let e of (A.installedLogHooks = !0, ["trace", "debug", "info", "warn", "error", "log"])) {
                    let t = console,
                        n = t[e];
                    null != n && (t[e] = function() {
                        n.apply(this, arguments);
                        try {
                            let t = Array.from(arguments).map(e => null != e ? e.toString() : e).filter(e => "string" != typeof e || "\nfont-weight: bold;\ncolor: purple;\n" !== e);
                            (0, c.getVoiceEngine)().consoleLog(e, JSON.stringify(t))
                        } catch (e) {}
                    })
                }
            null != n.setActiveSinksChangeCallback && n.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, l.default)(this)
        }
    }
    f(A, "installedLogHooks", !1)
}