function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("506083"), n("70102"), n("222007"), n("369198");
    var i, s = n("383536"),
        r = n.n(s),
        a = n("811022"),
        o = n("595275"),
        l = n("662697"),
        u = n.n(l),
        d = n("947279"),
        c = n("773364"),
        _ = n("953161"),
        f = n("793722"),
        E = n("657869"),
        h = n("560550"),
        g = n("820127"),
        m = n("861001"),
        p = n("899676"),
        S = n("13379"),
        T = n("238372"),
        v = n("232125"),
        I = n("353927"),
        A = n("53452");
    let C = new a.Logger("MediaEngineWebRTC");
    i = class extends o.default {
        destroy() {
            null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null), this.eachConnection(e => e.destroy()), this.emit(c.MediaEngineEvent.Destroy), this.removeAllListeners()
        }
        interact() {
            !this.interacted && (document.createElement("audio").play(), this.interacted = !0), this.eachConnection(e => e.interact())
        }
        static supported() {
            return !__OVERLAY__ && (A.BROWSER_SUPPORTS_VOICE && null != window.AudioContext && null != window.RTCPeerConnection ? (n("231638"), !0) : (C.info("WebRTC is not supported on", r.name, r.version), !1))
        }
        supported() {
            return !0
        }
        supports(e) {
            switch (e) {
                case I.Features.AUDIO_INPUT_DEVICE:
                    return m.CAN_SET_DEVICES;
                case I.Features.AUDIO_OUTPUT_DEVICE:
                    return m.CAN_SET_OUTPUT_DEVICES;
                case I.Features.VIDEO:
                    return A.BROWSER_SUPPORTS_VIDEO;
                case I.Features.DESKTOP_CAPTURE:
                    var t;
                    return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
                case I.Features.VOICE_PROCESSING:
                    return "Chrome" === r.name;
                case I.Features.NATIVE_PING:
                case I.Features.DIAGNOSTICS:
                    return A.BROWSER_SUPPORTS_DIAGNOSTICS;
                case I.Features.DESKTOP_CAPTURE_APPLICATIONS:
                case I.Features.LOOPBACK:
                case I.Features.NOISE_SUPPRESSION:
                case I.Features.AUTOMATIC_GAIN_CONTROL:
                    return "Safari" !== r.name;
                case I.Features.NOISE_CANCELLATION:
                    return u();
                case I.Features.QOS:
                case I.Features.ATTENUATION:
                case I.Features.AUTOMATIC_VAD:
                case I.Features.LEGACY_AUDIO_SUBSYSTEM:
                case I.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                case I.Features.DEBUG_LOGGING:
                case I.Features.VOICE_PANNING:
                case I.Features.AUTO_ENABLE:
                case I.Features.DESKTOP_CAPTURE_FORMAT:
                case I.Features.VIDEO_HOOK:
                case I.Features.OPEN_H264:
                case I.Features.AEC_DUMP:
                case I.Features.DISABLE_VIDEO:
                case I.Features.CONNECTION_REPLAY:
                case I.Features.SIMULCAST:
                case I.Features.SCREEN_CAPTURE_KIT:
                default:
                    return !1
            }
        }
        getAudioContext() {
            return null == this._audioContext && (this._audioContext = new AudioContext), this._audioContext
        }
        connect(e, t, n) {
            let {
                ssrc: i,
                address: s,
                port: r,
                modes: a,
                streamUserId: o,
                streamParameters: l
            } = n, u = (0, h.makeConnection)(e, t, this.getAudioContext(), l);
            return u.streamUserId = o, u.setOutputVolume(this.outputVolume), u.setSinkId(this.sinkId), u.once(d.BaseConnectionEvent.Destroy, e => this.connections.delete(e)), u.on(d.BaseConnectionEvent.Silence, e => this.emit(c.MediaEngineEvent.Silence, e)), u.on(d.BaseConnectionEvent.DesktopSourceEnd, this.handleDesktopSourceEnd), u.on(d.BaseConnectionEvent.AudioPermission, this.handleAudioPermission), u.on(d.BaseConnectionEvent.VideoPermission, this.handleVideoPermission), this.interacted && u.interact(), e === I.MediaEngineContextTypes.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()), this.connections.add(u), this.emit(c.MediaEngineEvent.Connection, u), u
        }
        findConnection(e) {
            return Array.from(this.connections).find(t => null == e || t.context === e)
        }
        eachConnection(e, t) {
            this.connections.forEach(n => {
                (null == t || n.context === t) && e(n)
            })
        }
        enable() {
            return null == this.enablePromise && (this.enablePromise = this._enable().finally(() => {
                this.enablePromise = null
            })), this.enablePromise
        }
        async _enable() {
            if (this.enabled) return;
            await this.getAudioContext().audioWorklet.addModule(p);
            let e = new E.default(this.getAudioContext());
            e.on("permission", this.handleAudioPermission);
            try {
                var t;
                await e.enable(), "Firefox" === r.name && await this.handleDeviceChange(), this.enabled = !0, this.eachConnection(e => e.input.enableAudioInput(), I.MediaEngineContextTypes.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable()
            } finally {
                e.destroy()
            }
        }
        setInputVolume(e) {}
        setOutputVolume(e) {
            this.outputVolume = e, this.connections.forEach(t => t.setOutputVolume(e))
        }
        getAudioInputDevices() {
            return (0, m.getAudioInputDevices)()
        }
        setAudioInputDevice(e) {
            var t, n;
            this.sourceId = e, this.eachConnection(t => t.setAudioSource(e), I.MediaEngineContextTypes.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e)
        }
        getAudioOutputDevices() {
            return (0, m.getAudioOutputDevices)()
        }
        setAudioOutputDevice(e) {
            var t;
            this.sinkId = e, this.connections.forEach(t => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e)
        }
        getVideoInputDevices() {
            return (0, m.getVideoInputDevices)()
        }
        setVideoInputDevice(e) {
            this.eachConnection(t => t.setVideoSource(e), I.MediaEngineContextTypes.DEFAULT)
        }
        getSupportedVideoCodecs(e) {
            e([])
        }
        getCodecCapabilities(e) {
            e("")
        }
        async getDesktopSource(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = await g.default.get(e, t);
            return this.pendingDesktopInputs[n.id] = n, n.id
        }
        getDesktopSources() {
            return Promise.reject(Error("NO_STREAM"))
        }
        getScreenPreviews(e, t) {
            return Promise.reject(Error("UNSUPPORTED"))
        }
        getWindowPreviews(e, t) {
            return Promise.reject(Error("UNSUPPORTED"))
        }
        setClipBufferLength(e) {}
        saveClip(e, t) {
            return Promise.reject(Error("UNSUPPORTED"))
        }
        saveClipForUser(e, t, n) {
            return Promise.reject(Error("UNSUPPORTED"))
        }
        updateClipMetadata(e, t) {
            return Promise.reject(Error("UNSUPPORTED"))
        }
        exportClip(e, t) {
            return Promise.reject(Error("UNSUPPORTED"))
        }
        setGoLiveSource(e, t) {
            if (null == e) this.eachConnection(e => e.setDesktopInput(null), t);
            else if (null != e.desktopDescription && null != this.findConnection(t)) {
                let n = this.pendingDesktopInputs[e.desktopDescription.id];
                delete this.pendingDesktopInputs[e.desktopDescription.id], null != n && this.eachConnection(e => e.setDesktopInput(n), t)
            }
        }
        setClipsSource(e) {}
        setClipsQualitySettings(e, t, n) {
            return !1
        }
        setSoundshareSource(e, t, n) {}
        setAudioSubsystem(e) {}
        getAudioSubsystem() {
            return I.AudioSubsystems.STANDARD
        }
        getAudioLayer() {
            return ""
        }
        getDebugLogging() {
            return !1
        }
        setDebugLogging(e) {}
        writeAudioDebugState() {
            return Promise.reject(Error("Audio debug state is not supported."))
        }
        setExperimentalAdm(e) {}
        setLoopback(e, t) {
            e && null == this.loopback ? (this.enable(), this.loopback = new S.default(this.getAudioContext(), this.sourceId, this.sinkId), this.loopback.setNoiseCancellation(t.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), this.loopback = null)
        }
        getLoopback() {
            return null != this.loopback
        }
        setH264Enabled(e) {}
        setAv1Enabled(e) {}
        setH265Enabled(e) {}
        getCodecSurvey() {
            return Promise.reject(Error("getCodecSurvey is not implemented on MediaEngine of browsers."))
        }
        startAecDump() {}
        stopAecDump() {}
        setAecDump(e) {}
        createReplayConnection(e, t) {
            throw Error("Connection replay is not supported.")
        }
        setUseDirectVideo(e) {}
        setMaxSyncDelayOverride(e) {}
        rankRtcRegions(e) {
            return Promise.reject(Error("RTC region latency test is not supported."))
        }
        applyMediaFilterSettings(e) {
            return Promise.resolve()
        }
        startLocalAudioRecording() {
            return Promise.reject(Error("startLocalAudioRecording is not supported."))
        }
        stopLocalAudioRecording(e) {}
        speedTester(e, t) {
            throw Error("speedTester is not supported.")
        }
        setHasFullbandPerformance(e) {}
        getSupportedSecureFramesProtocolVersion() {
            return 0
        }
        getSupportedBandwidthEstimationExperiments(e) {
            e([])
        }
        constructor() {
            super(), this.Video = v.default, this.Camera = T.default, this._audioContext = null, this.outputVolume = I.DEFAULT_VOLUME, this.sourceId = I.DEFAULT_DEVICE_ID, this.sinkId = I.DEFAULT_DEVICE_ID, this.enabled = !1, this.connections = new Set, this.interacted = !1, this.loopback = null, this.voiceActivityInput = null, this.pendingDesktopInputs = {}, this.enablePromise = null, this.handleActiveSinksChange = (e, t) => {
                this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
            }, this.handleNewListener = e => {
                switch (e) {
                    case c.MediaEngineEvent.DeviceChange:
                        null != navigator.mediaDevices && null == navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = () => {
                            this.handleDeviceChange()
                        }, this.handleDeviceChange());
                        break;
                    case c.MediaEngineEvent.VoiceActivity:
                        null == this.voiceActivityInput && (this.voiceActivityInput = new E.default(this.getAudioContext()), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable())
                }
            }, this.handleRemoveListener = e => {
                switch (e) {
                    case c.MediaEngineEvent.DeviceChange:
                        var t;
                        (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(c.MediaEngineEvent.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case c.MediaEngineEvent.VoiceActivity:
                        null != this.voiceActivityInput && 0 === this.listenerCount(c.MediaEngineEvent.VoiceActivity) && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null)
                }
            }, this.handleDeviceChange = () => (0, m.getDevices)().then(e => {
                let [t, n, i] = e;
                return this.emit(c.MediaEngineEvent.DeviceChange, t, n, i)
            }), this.handleVoiceActivity = e => {
                this.emit(c.MediaEngineEvent.VoiceActivity, e, 0)
            }, this.handleDesktopSourceEnd = () => {
                this.emit(c.MediaEngineEvent.DesktopSourceEnd)
            }, this.handleAudioPermission = e => {
                this.emit(c.MediaEngineEvent.AudioPermission, e)
            }, this.handleVideoPermission = e => {
                this.emit(c.MediaEngineEvent.VideoPermission, e)
            }, this.on("newListener", this.handleNewListener), this.on("removeListener", this.handleRemoveListener), (0, f.setActiveSinksChangeCallback)(this.handleActiveSinksChange), (0, _.default)(this)
        }
    }
}