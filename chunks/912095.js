function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EncoderParameter: function() {
            return i
        },
        default: function() {
            return h
        }
    }), n("47120"), n("411104"), n("177593");
    var i, r, s = n("874141"),
        a = n.n(s),
        o = n("565925"),
        l = n.n(o),
        u = n("839548"),
        d = n("46973"),
        _ = n("886848"),
        c = n("961304"),
        E = n("313232"),
        I = n("450279"),
        T = n("65154"),
        f = n("436620");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = i || (i = {}))[r.AUDIO_BITRATE = 0] = "AUDIO_BITRATE", r[r.VIDEO_RESOLUTION_SCALE = 1] = "VIDEO_RESOLUTION_SCALE", r[r.VIDEO_BITRATE = 2] = "VIDEO_BITRATE", r[r.VIDEO_FRAMERATE = 3] = "VIDEO_FRAMERATE";
    class h extends u.default {
        interact() {
            for (let e of (this.interacted = !0, Object.keys(this.outputs))) this.outputs[e].play();
            this.input.resumeAudio()
        }
        destroy() {
            for (let e of (super.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
            this.input.destroy()
        }
        async getStats() {
            if (!f.BROWSER_SUPPORTS_DIAGNOSTICS) return null;
            let e = await this.getRawStats();
            return (0, I.default)(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants)
        }
        setInputMode(e, t) {
            this.input.setAudioMode(e, {
                delay: t.pttReleaseDelay,
                threshold: t.vadThreshold
            })
        }
        setSelfDeaf(e) {
            for (let t of (this.selfDeaf = e, Object.keys(this.outputs))) this.outputs[t].mute = e || this.localMutes[t]
        }
        setLocalMute(e, t) {
            this.localMutes[e] = t, null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t), this.emit(d.BaseConnectionEvent.LocalMute, e, t)
        }
        fastUdpReconnect() {}
        getNumFastUdpReconnects() {
            return null
        }
        wasRemoteDisconnected() {}
        setRemoteVideoSinkWants(e) {
            this.remoteVideoSinkWants = e, this.updateVideoQuality(T.MEDIA_SINK_WANTS_PROPERTIES)
        }
        setLocalVideoSinkWants(e) {
            this.localVideoSinkWants = e
        }
        updateVideoQualityCore(e, t) {
            let n;
            if (!this.videoSupported) return;
            let i = this.input.getVideoStream();
            if (null == i) return;
            if (null != t.capture && null != t.capture.width && null != t.capture.height && null != e.remoteSinkWantsPixelCount && 0 !== e.remoteSinkWantsPixelCount && 0 !== t.capture.height) {
                let i = t.capture.width / t.capture.height,
                    r = Math.sqrt(e.remoteSinkWantsPixelCount * i),
                    s = t.capture.width / r;
                n = s < 1 ? void 0 : s
            }
            this.logger.info("BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: ".concat(n, ", ") + "encodingVideoWidth: ".concat(e.encodingVideoWidth, ", remoteSinkWantsMaxFramerate: ").concat(e.remoteSinkWantsMaxFramerate, ", ") + "encodingVideoMaxBitRate: ".concat(e.encodingVideoMaxBitRate, ", localWant: ").concat(this.getLocalWant())), this.setVideoEncoderParameters([{
                parameter: 1,
                value: n
            }, {
                parameter: 2,
                value: e.encodingVideoMaxBitRate
            }, {
                parameter: 3,
                value: e.remoteSinkWantsMaxFramerate
            }]);
            let r = e.encodingVideoWidth,
                s = e.encodingVideoHeight;
            for (let e of i.getTracks()) {
                var a, o;
                let t = e.getConstraints(),
                    n = null === (a = t.width) || void 0 === a ? void 0 : a.max,
                    i = null === (o = t.height) || void 0 === o ? void 0 : o.max;
                (n !== r || i !== s) && (this.logger.info("BaseWebRTCConnection.updateVideoQuality: old: ".concat(n, " x ").concat(i, ", new: ").concat(r, " x ").concat(s)), t.width = {
                    max: r
                }, t.height = {
                    max: s
                }, e.applyConstraints(t))
            }
        }
        setCanHavePriority(e, t) {
            let n = this.canHavePriority.size;
            t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e), this.canHavePriority.size !== n && this.recalculatePrioritySpeakers()
        }
        setSpeakingFlags(e, t) {
            null != t && t !== T.SpeakingFlags.NONE ? this.localSpeakingFlags[e] = t : delete this.localSpeakingFlags[e];
            let n = this.outputs[e];
            null != n && n.setSpeakingFlags(t);
            let i = this.wantsPriority.size,
                r = T.SpeakingFlags.VOICE | T.SpeakingFlags.PRIORITY;
            (t & r) === r ? this.wantsPriority.add(e) : this.wantsPriority.delete(e), this.wantsPriority.size !== i && this.recalculatePrioritySpeakers()
        }
        clearAllSpeaking() {
            for (let e in this.localSpeakingFlags) delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(T.SpeakingFlags.NONE)
        }
        setOutputVolume(e) {
            for (let t of (this.outputVolume = e, Object.keys(this.outputs))) this.outputs[t].volume = this.computeLocalVolume(t)
        }
        setSinkId(e) {
            for (let t of (this.sinkId = e, Object.keys(this.outputs))) this.outputs[t].setSinkId(e)
        }
        setStreamParameters(e) {
            return new Promise((t, n) => {
                for (let t of this.videoStreamParameters) {
                    let i = e.findIndex(e => e.rid === t.rid);
                    if (-1 === i) {
                        n(Error("Invalid rid"));
                        return
                    }!l()(this.videoStreamParameters[i], e[i]) && (this.videoStreamParameters[i] = {
                        ...e[i]
                    })
                }
                t()
            })
        }
        recalculatePrioritySpeakers() {
            this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter(e => this.canHavePriority.has(e))), a()(this.outputs, (e, t) => {
                e.volume = this.computeLocalVolume(t)
            })
        }
        setBitRate(e) {
            this.voiceBitrate = e
        }
        setLocalVolume(e, t) {
            this.localVolumes[e] = t, null != this.outputs[e] && (this.outputs[e].volume = this.computeLocalVolume(e))
        }
        getLocalVolume(e) {
            let t = this.localVolumes[e];
            return null == t && (t = this.context === T.MediaEngineContextTypes.DEFAULT ? T.DEFAULT_VOLUME : T.DEFAULT_STREAM_VOLUME), null != t ? t : T.DEFAULT_VOLUME
        }
        computeLocalVolume(e) {
            let t = this.outputVolume * this.getLocalVolume(e) / T.DEFAULT_VOLUME;
            return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * T.DEFAULT_PRIORITY_SPEAKER_DUCKING : t
        }
        hasDesktopSource() {
            var e;
            return null === (e = this.input) || void 0 === e ? void 0 : e.hasDesktopSource()
        }
        createOutput(e, t) {
            if (t.discordIsTearingDown) {
                this.logger.info("BaseWebRTCConnection.createOutput: ignoring track being torn down: ".concat(t.id));
                return
            }
            let n = this.outputs[e];
            if (null == n) {
                var i;
                (n = new c.default(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e], n.volume = this.computeLocalVolume(e), n.on(c.OutputEvent.Speaking, t => this.emit(d.BaseConnectionEvent.Speaking, e, t, this.audioSSRC)), n.on(c.OutputEvent.Video, t => {
                    var n;
                    return this.emitUnsafe(d.BaseConnectionEvent.Video, e, t, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (n = this.videoStreamParameters[0].rtxSsrc) && void 0 !== n ? n : 0, this.videoStreamParameters)
                }), n.on(c.OutputEvent.InteractionRequired, e => this.emit(d.BaseConnectionEvent.InteractionRequired, e)), n.setSpeakingFlags(null !== (i = this.localSpeakingFlags[e]) && void 0 !== i ? i : T.SpeakingFlags.NONE), n.setSinkId(this.sinkId), this.outputs[e] = n
            }
            n.addTrack(t)
        }
        destroyOutput(e, t) {
            let n = this.outputs[e];
            null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e])
        }
        setSilenceThreshold(e) {
            this.silenceThreshold = e
        }
        setLocalPan(e, t, n) {}
        setExperimentalEncoders(e) {}
        setHardwareH264(e) {}
        setQoS(e) {}
        isAttenuating() {
            return !1
        }
        setAttenuation(e, t, n) {}
        setEncryption(e, t) {}
        setMinimumJitterBufferLevel(e) {}
        setPostponeDecodeLevel(e) {}
        setReconnectInterval(e) {}
        setKeyframeInterval(e) {}
        startSamplesPlayback(e, t, n) {}
        stopSamplesPlayback() {}
        startSamplesLocalPlayback(e, t, n, i) {}
        stopSamplesLocalPlayback(e) {}
        stopAllSamplesLocalPlayback() {}
        setRtcLogEphemeralKey(e) {}
        setRtcLogMarker(e) {}
        setVideoQualityMeasurement(e) {}
        setVideoEncoderExperiments(e) {}
        setBandwidthEstimationExperiments(e) {}
        prepareSecureFramesTransition(e, t, n) {}
        prepareSecureFramesEpoch(e, t, n) {}
        executeSecureFramesTransition(e) {}
        getMLSKeyPackage(e) {}
        updateMLSExternalSender(e) {}
        processMLSProposals(e, t) {}
        prepareMLSCommitTransition(e, t, n) {}
        processMLSWelcome(e, t, n) {}
        constructor(e, t, n, i) {
            var r;
            super(e, t), r = this, S(this, "input", void 0), S(this, "silenced", !1), S(this, "interacted", !1), S(this, "outputVolume", T.DEFAULT_VOLUME), S(this, "sinkId", T.DEFAULT_DEVICE_ID), S(this, "lastPingTime", 0), S(this, "outputs", {}), S(this, "webrtcStats", new E.WebRTCStatsCalculator), S(this, "silenceThreshold", -100), S(this, "canHavePriority", new Set), S(this, "prioritySpeakers", new Set), S(this, "audioContext", void 0), S(this, "setEchoCancellation", e => this.input.setEchoCancellation(e)), S(this, "setNoiseSuppression", e => this.input.setNoiseSuppression(e)), S(this, "setNoiseCancellation", e => this.input.setNoiseCancellation(e)), S(this, "setAutomaticGainControl", e => this.input.setAutomaticGainControl(e)), S(this, "setAudioSource", e => this.input.setAudioSource(e)), S(this, "setVideoSource", e => this.input.setVideoSource(e)), S(this, "setDesktopInput", e => this.input.setDesktop(e)), S(this, "setForceAudioInput", function(e) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r.input.setPTTActive(e)
            }), S(this, "setSelfMute", e => {
                this.input.setMute(e), this.emit(d.BaseConnectionEvent.Mute, e)
            }), S(this, "handleAddVideoTrack", () => {
                this.updateVideoQuality()
            }), S(this, "handleAudioPermission", e => this.emit(d.BaseConnectionEvent.AudioPermission, e)), S(this, "handleVideoPermission", e => this.emit(d.BaseConnectionEvent.VideoPermission, e)), S(this, "handleVideo", e => {
                var t;
                return this.emit(d.BaseConnectionEvent.Video, this.ids.userId, e, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (t = this.videoStreamParameters[0].rtxSsrc) && void 0 !== t ? t : 0, this.videoStreamParameters)
            }), S(this, "handleDesktopSourceEnd", () => this.emit(d.BaseConnectionEvent.DesktopSourceEnd)), S(this, "handleStream", e => this.setStream(e)), S(this, "handleVoiceActivity", e => {
                let t = e <= this.silenceThreshold;
                this.silenced !== t && !this.input.mute() && (this.silenced = t, this.emit(d.BaseConnectionEvent.Silence, t))
            }), S(this, "handleNewListener", e => {
                switch (e) {
                    case d.BaseConnectionEvent.Video:
                        this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                        break;
                    case d.BaseConnectionEvent.ConnectionStateChange:
                        this.emit(e, this.connectionState);
                        break;
                    case d.BaseConnectionEvent.InteractionRequired:
                        !this.interacted && "suspended" === this.input.getAudioState() && setImmediate(() => this.emit(e, !0))
                }
            }), S(this, "handleInputSpeaking", e => {
                this.emit(d.BaseConnectionEvent.Speaking, this.ids.userId, e ? T.SpeakingFlags.VOICE : T.SpeakingFlags.NONE, this.audioSSRC)
            }), S(this, "handleAudioContextStateChange", () => {
                !this.interacted && "running" === this.input.getAudioState() && (this.interact(), this.emit(d.BaseConnectionEvent.InteractionRequired, !1))
            }), S(this, "handleStats", e => {
                if (this.connectionState === T.ConnectionStates.DISCONNECTED) {
                    this.off(d.BaseConnectionEvent.Stats, this.handleStats);
                    return
                }
                null != e && (this.webrtcStats.update(e), this.stats = e, Date.now() - this.lastPingTime >= T.PING_INTERVAL && (this.emit(d.BaseConnectionEvent.Ping, e.transport.ping), this.lastPingTime = Date.now()))
            }), this.input = new _.default(n), n.addEventListener("statechange", this.handleAudioContextStateChange), this.audioContext = n, this.input.on(_.InputEvent.AudioPermission, this.handleAudioPermission), this.input.on(_.InputEvent.VideoPermission, this.handleVideoPermission), this.input.on(_.InputEvent.Video, this.handleVideo), this.input.on(_.InputEvent.Mute, e => this.emit(d.BaseConnectionEvent.Mute, e)), this.input.on(_.InputEvent.Stream, this.handleStream), this.input.on(_.InputEvent.DesktopSourceEnd, this.handleDesktopSourceEnd), this.input.on(_.InputEvent.Speaking, this.handleInputSpeaking), this.input.on(_.InputEvent.AddVideoTrack, this.handleAddVideoTrack), this.input.on(_.InputEvent.Video, this.handleAddVideoTrack), this.on("newListener", this.handleNewListener), this.initializeStreamParameters(i)
        }
    }
}