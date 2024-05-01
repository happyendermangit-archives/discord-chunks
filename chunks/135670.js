function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("411104"), n("47120");
    var i = n("47770"),
        r = n("46973"),
        a = n("65154");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e) {
        return null
    }

    function l(e) {
        return null
    }
    class u extends i.default {
        destroy() {
            this.emit(r.MediaEngineEvent.Destroy), this.removeAllListeners()
        }
        interact() {}
        supported() {
            return __OVERLAY__
        }
        supports(e) {
            if (e === a.Features.AUTO_ENABLE) return __OVERLAY__;
            return !1
        }
        connect(e, t, n) {
            throw Error("NOT_IMPLEMENTED")
        }
        eachConnection() {}
        enable() {
            return Promise.resolve()
        }
        setInputVolume(e) {}
        setOutputVolume(e) {}
        getAudioInputDevices() {
            return Promise.resolve([])
        }
        setAudioInputDevice(e) {}
        getAudioOutputDevices() {
            return Promise.resolve([])
        }
        setAudioOutputDevice(e) {}
        getVideoInputDevices() {
            return Promise.resolve([])
        }
        setVideoInputDevice(e) {}
        getSupportedVideoCodecs(e) {
            e([])
        }
        getCodecCapabilities(e) {
            e("")
        }
        getCodecSurvey() {
            return Promise.reject(Error("getCodecSurvey is not implemented for MediaEngineDummy"))
        }
        getAudioSubsystem() {
            return a.AudioSubsystems.STANDARD
        }
        getAudioLayer() {
            return ""
        }
        setGoLiveSource(e, t) {}
        setClipsSource(e) {}
        setClipsQualitySettings(e, t, n) {
            return !1
        }
        setDesktopSource(e) {
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.MediaEngineContextTypes.DEFAULT
        }
        setSoundshareSource(e, t, n) {}
        getDesktopSource() {
            return Promise.reject(Error("NO_STREAM"))
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
        setAudioSubsystem(e) {}
        getDebugLogging() {
            return !1
        }
        setDebugLogging(e) {}
        writeAudioDebugState() {
            return Promise.reject(Error("Audio debug state is not supported."))
        }
        setExperimentalAdm(e) {}
        setLoopback(e, t) {}
        getLoopback() {
            return !1
        }
        setH264Enabled(e) {}
        setAv1Enabled(e) {}
        setH265Enabled(e) {}
        setExperimentFlag(e, t) {}
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
            throw Error("NOT_IMPLEMENTED")
        }
        setHasFullbandPerformance(e) {}
        getSupportedSecureFramesProtocolVersion() {
            return 0
        }
        getSupportedBandwidthEstimationExperiments(e) {
            e([])
        }
        constructor(...e) {
            super(...e), s(this, "Video", o), s(this, "Camera", l)
        }
    }
}