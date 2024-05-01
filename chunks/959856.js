function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("773603"), n("411104"), n("47120"), n("600040");
    var i = n("264344"),
        r = n.n(i),
        s = n("259443"),
        a = n("47770"),
        o = n("174498"),
        l = n.n(o),
        u = n("839548"),
        d = n("46973"),
        _ = n("734298"),
        c = n("970838"),
        E = n("68721"),
        I = n("997653"),
        T = n("384136"),
        f = n("740197"),
        S = n("548820"),
        h = n("579237"),
        A = n("582168"),
        m = n("825040"),
        N = n("65154"),
        p = n("436620");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = new s.Logger("MediaEngineWebRTC");
    class C extends a.default {
        destroy() {
            null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null), this.eachConnection(e => e.destroy()), this.emit(d.MediaEngineEvent.Destroy), this.removeAllListeners()
        }
        interact() {
            !this.interacted && (document.createElement("audio").play(), this.interacted = !0), this.eachConnection(e => e.interact())
        }
        static supported() {
            return !__OVERLAY__ && (p.BROWSER_SUPPORTS_VOICE && null != window.AudioContext && null != window.RTCPeerConnection ? (n("250678"), !0) : (R.info("WebRTC is not supported on", r().name, r().version), !1))
        }
        supported() {
            return !0
        }
        supports(e) {
            switch (e) {
                case N.Features.AUDIO_INPUT_DEVICE:
                    return f.CAN_SET_DEVICES;
                case N.Features.AUDIO_OUTPUT_DEVICE:
                    return f.CAN_SET_OUTPUT_DEVICES;
                case N.Features.VIDEO:
                    return p.BROWSER_SUPPORTS_VIDEO;
                case N.Features.DESKTOP_CAPTURE:
                    var t;
                    return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
                case N.Features.VOICE_PROCESSING:
                    return "Chrome" === r().name;
                case N.Features.NATIVE_PING:
                case N.Features.DIAGNOSTICS:
                    return p.BROWSER_SUPPORTS_DIAGNOSTICS;
                case N.Features.DESKTOP_CAPTURE_APPLICATIONS:
                case N.Features.LOOPBACK:
                case N.Features.NOISE_SUPPRESSION:
                case N.Features.AUTOMATIC_GAIN_CONTROL:
                    return "Safari" !== r().name;
                case N.Features.NOISE_CANCELLATION:
                    return l()();
                case N.Features.QOS:
                case N.Features.ATTENUATION:
                case N.Features.AUTOMATIC_VAD:
                case N.Features.LEGACY_AUDIO_SUBSYSTEM:
                case N.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                case N.Features.DEBUG_LOGGING:
                case N.Features.VOICE_PANNING:
                case N.Features.AUTO_ENABLE:
                case N.Features.DESKTOP_CAPTURE_FORMAT:
                case N.Features.VIDEO_HOOK:
                case N.Features.OPEN_H264:
                case N.Features.AEC_DUMP:
                case N.Features.DISABLE_VIDEO:
                case N.Features.CONNECTION_REPLAY:
                case N.Features.SIMULCAST:
                case N.Features.SCREEN_CAPTURE_KIT:
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
                address: r,
                port: s,
                modes: a,
                streamUserId: o,
                streamParameters: l
            } = n, _ = (0, I.makeConnection)(e, t, this.getAudioContext(), l);
            return _.streamUserId = o, _.setOutputVolume(this.outputVolume), _.setSinkId(this.sinkId), _.once(u.BaseConnectionEvent.Destroy, e => this.connections.delete(e)), _.on(u.BaseConnectionEvent.Silence, e => this.emit(d.MediaEngineEvent.Silence, e)), _.on(u.BaseConnectionEvent.DesktopSourceEnd, this.handleDesktopSourceEnd), _.on(u.BaseConnectionEvent.AudioPermission, this.handleAudioPermission), _.on(u.BaseConnectionEvent.VideoPermission, this.handleVideoPermission), this.interacted && _.interact(), e === N.MediaEngineContextTypes.DEFAULT && (_.setAudioSource(this.sourceId), this.enabled && _.input.enableAudioInput()), this.connections.add(_), this.emit(d.MediaEngineEvent.Connection, _), _
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
            await this.getAudioContext().audioWorklet.addModule(S);
            let e = new E.default(this.getAudioContext());
            e.on("permission", this.handleAudioPermission);
            try {
                var t;
                await e.enable(), "Firefox" === r().name && await this.handleDeviceChange(), this.enabled = !0, this.eachConnection(e => e.input.enableAudioInput(), N.MediaEngineContextTypes.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable()
            } finally {
                e.destroy()
            }
        }
        setInputVolume(e) {}
        setOutputVolume(e) {
            this.outputVolume = e, this.connections.forEach(t => t.setOutputVolume(e))
        }
        getAudioInputDevices() {
            return (0, f.getAudioInputDevices)()
        }
        setAudioInputDevice(e) {
            var t, n;
            this.sourceId = e, this.eachConnection(t => t.setAudioSource(e), N.MediaEngineContextTypes.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e)
        }
        getAudioOutputDevices() {
            return (0, f.getAudioOutputDevices)()
        }
        setAudioOutputDevice(e) {
            var t;
            this.sinkId = e, this.connections.forEach(t => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e)
        }
        getVideoInputDevices() {
            return (0, f.getVideoInputDevices)()
        }
        setVideoInputDevice(e) {
            this.eachConnection(t => t.setVideoSource(e), N.MediaEngineContextTypes.DEFAULT)
        }
        getSupportedVideoCodecs(e) {
            e([])
        }
        getCodecCapabilities(e) {
            e("")
        }
        async getDesktopSource(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = await T.default.get(e, t);
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
            return N.AudioSubsystems.STANDARD
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
            e && null == this.loopback ? (this.enable(), this.loopback = new h.default(this.getAudioContext(), this.sourceId, this.sinkId), this.loopback.setNoiseCancellation(t.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), this.loopback = null)
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
            super(), O(this, "Video", m.default), O(this, "Camera", A.default), O(this, "_audioContext", null), O(this, "outputVolume", N.DEFAULT_VOLUME), O(this, "sourceId", N.DEFAULT_DEVICE_ID), O(this, "sinkId", N.DEFAULT_DEVICE_ID), O(this, "enabled", !1), O(this, "connections", new Set), O(this, "interacted", !1), O(this, "loopback", null), O(this, "voiceActivityInput", null), O(this, "pendingDesktopInputs", {}), O(this, "enablePromise", null), O(this, "handleActiveSinksChange", (e, t) => {
                this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
            }), O(this, "handleNewListener", e => {
                switch (e) {
                    case d.MediaEngineEvent.DeviceChange:
                        null != navigator.mediaDevices && null == navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = () => {
                            this.handleDeviceChange()
                        }, this.handleDeviceChange());
                        break;
                    case d.MediaEngineEvent.VoiceActivity:
                        null == this.voiceActivityInput && (this.voiceActivityInput = new E.default(this.getAudioContext()), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable())
                }
            }), O(this, "handleRemoveListener", e => {
                switch (e) {
                    case d.MediaEngineEvent.DeviceChange:
                        var t;
                        (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(d.MediaEngineEvent.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case d.MediaEngineEvent.VoiceActivity:
                        null != this.voiceActivityInput && 0 === this.listenerCount(d.MediaEngineEvent.VoiceActivity) && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null)
                }
            }), O(this, "handleDeviceChange", () => (0, f.getDevices)().then(e => {
                let [t, n, i] = e;
                return this.emit(d.MediaEngineEvent.DeviceChange, t, n, i)
            })), O(this, "handleVoiceActivity", e => {
                this.emit(d.MediaEngineEvent.VoiceActivity, e, 0)
            }), O(this, "handleDesktopSourceEnd", () => {
                this.emit(d.MediaEngineEvent.DesktopSourceEnd)
            }), O(this, "handleAudioPermission", e => {
                this.emit(d.MediaEngineEvent.AudioPermission, e)
            }), O(this, "handleVideoPermission", e => {
                this.emit(d.MediaEngineEvent.VideoPermission, e)
            }), this.on("newListener", this.handleNewListener), this.on("removeListener", this.handleRemoveListener), (0, c.setActiveSinksChangeCallback)(this.handleActiveSinksChange), (0, _.default)(this)
        }
    }
}