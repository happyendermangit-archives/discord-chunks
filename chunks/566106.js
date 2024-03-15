function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EncoderParameter: function() {
            return i
        },
        default: function() {
            return s
        }
    }), n("222007"), n("70102"), n("860677");
    var i, s, r, a = n("910997"),
        o = n.n(a),
        l = n("782720"),
        u = n.n(l),
        d = n("947279"),
        c = n("773364"),
        f = n("62684"),
        _ = n("324304"),
        E = n("849074"),
        h = n("948961"),
        g = n("353927"),
        m = n("53452");
    (r = i || (i = {}))[r.AUDIO_BITRATE = 0] = "AUDIO_BITRATE", r[r.VIDEO_RESOLUTION_SCALE = 1] = "VIDEO_RESOLUTION_SCALE", r[r.VIDEO_BITRATE = 2] = "VIDEO_BITRATE", r[r.VIDEO_FRAMERATE = 3] = "VIDEO_FRAMERATE", s = class extends d.default {
        interact() {
            for (let e of (this.interacted = !0, Object.keys(this.outputs))) this.outputs[e].play();
            this.input.resumeAudio()
        }
        destroy() {
            for (let e of (super.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
            this.input.destroy()
        }
        async getStats() {
            if (!m.BROWSER_SUPPORTS_DIAGNOSTICS) return null;
            let e = await this.getRawStats();
            return (0, h.default)(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants)
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
        setNativeMute(e) {}
        setLocalMute(e, t) {
            this.localMutes[e] = t, null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t), this.emit(c.BaseConnectionEvent.LocalMute, e, t)
        }
        fastUdpReconnect() {}
        getNumFastUdpReconnects() {
            return null
        }
        wasRemoteDisconnected() {}
        setRemoteVideoSinkWants(e) {
            this.remoteVideoSinkWants = e, this.updateVideoQuality(g.MEDIA_SINK_WANTS_PROPERTIES)
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
                    s = Math.sqrt(e.remoteSinkWantsPixelCount * i),
                    r = t.capture.width / s;
                n = r < 1 ? void 0 : r
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
            let s = e.encodingVideoWidth,
                r = e.encodingVideoHeight;
            for (let e of i.getTracks()) {
                var a, o;
                let t = e.getConstraints(),
                    n = null === (a = t.width) || void 0 === a ? void 0 : a.max,
                    i = null === (o = t.height) || void 0 === o ? void 0 : o.max;
                (n !== s || i !== r) && (this.logger.info("BaseWebRTCConnection.updateVideoQuality: old: ".concat(n, " x ").concat(i, ", new: ").concat(s, " x ").concat(r)), t.width = {
                    max: s
                }, t.height = {
                    max: r
                }, e.applyConstraints(t))
            }
        }
        setCanHavePriority(e, t) {
            let n = this.canHavePriority.size;
            t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e), this.canHavePriority.size !== n && this.recalculatePrioritySpeakers()
        }
        setSpeakingFlags(e, t) {
            null != t && t !== g.SpeakingFlags.NONE ? this.localSpeakingFlags[e] = t : delete this.localSpeakingFlags[e];
            let n = this.outputs[e];
            null != n && n.setSpeakingFlags(t);
            let i = this.wantsPriority.size,
                s = g.SpeakingFlags.VOICE | g.SpeakingFlags.PRIORITY;
            (t & s) === s ? this.wantsPriority.add(e) : this.wantsPriority.delete(e), this.wantsPriority.size !== i && this.recalculatePrioritySpeakers()
        }
        clearAllSpeaking() {
            for (let e in this.localSpeakingFlags) delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(g.SpeakingFlags.NONE)
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
                    }!u(this.videoStreamParameters[i], e[i]) && (this.videoStreamParameters[i] = {
                        ...e[i]
                    })
                }
                t()
            })
        }
        recalculatePrioritySpeakers() {
            this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter(e => this.canHavePriority.has(e))), o(this.outputs, (e, t) => {
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
            return null == t && (t = this.context === g.MediaEngineContextTypes.DEFAULT ? g.DEFAULT_VOLUME : g.DEFAULT_STREAM_VOLUME), null != t ? t : g.DEFAULT_VOLUME
        }
        computeLocalVolume(e) {
            let t = this.outputVolume * this.getLocalVolume(e) / g.DEFAULT_VOLUME;
            return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * g.DEFAULT_PRIORITY_SPEAKER_DUCKING : t
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
                (n = new _.default(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e], n.volume = this.computeLocalVolume(e), n.on(_.OutputEvent.Speaking, t => this.emit(c.BaseConnectionEvent.Speaking, e, t, this.audioSSRC)), n.on(_.OutputEvent.Video, t => {
                    var n;
                    return this.emitUnsafe(c.BaseConnectionEvent.Video, e, t, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (n = this.videoStreamParameters[0].rtxSsrc) && void 0 !== n ? n : 0, this.videoStreamParameters)
                }), n.on(_.OutputEvent.InteractionRequired, e => this.emit(c.BaseConnectionEvent.InteractionRequired, e)), n.setSpeakingFlags(null !== (i = this.localSpeakingFlags[e]) && void 0 !== i ? i : g.SpeakingFlags.NONE), n.setSinkId(this.sinkId), this.outputs[e] = n
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
            var s;
            super(e, t), s = this, this.silenced = !1, this.interacted = !1, this.outputVolume = g.DEFAULT_VOLUME, this.sinkId = g.DEFAULT_DEVICE_ID, this.lastPingTime = 0, this.outputs = {}, this.webrtcStats = new E.WebRTCStatsCalculator, this.silenceThreshold = -100, this.canHavePriority = new Set, this.prioritySpeakers = new Set, this.setEchoCancellation = e => this.input.setEchoCancellation(e), this.setNoiseSuppression = e => this.input.setNoiseSuppression(e), this.setNoiseCancellation = e => this.input.setNoiseCancellation(e), this.setAutomaticGainControl = e => this.input.setAutomaticGainControl(e), this.setAudioSource = e => this.input.setAudioSource(e), this.setVideoSource = e => this.input.setVideoSource(e), this.setDesktopInput = e => this.input.setDesktop(e), this.setForceAudioInput = function(e) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s.input.setPTTActive(e)
            }, this.setSelfMute = e => {
                this.input.setMute(e), this.emit(c.BaseConnectionEvent.Mute, e)
            }, this.handleAddVideoTrack = () => {
                this.updateVideoQuality()
            }, this.handleAudioPermission = e => this.emit(c.BaseConnectionEvent.AudioPermission, e), this.handleVideoPermission = e => this.emit(c.BaseConnectionEvent.VideoPermission, e), this.handleVideo = e => {
                var t;
                return this.emit(c.BaseConnectionEvent.Video, this.ids.userId, e, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (t = this.videoStreamParameters[0].rtxSsrc) && void 0 !== t ? t : 0, this.videoStreamParameters)
            }, this.handleDesktopSourceEnd = () => this.emit(c.BaseConnectionEvent.DesktopSourceEnd), this.handleStream = e => this.setStream(e), this.handleVoiceActivity = e => {
                let t = e <= this.silenceThreshold;
                this.silenced !== t && !this.input.mute() && (this.silenced = t, this.emit(c.BaseConnectionEvent.Silence, t))
            }, this.handleNewListener = e => {
                switch (e) {
                    case c.BaseConnectionEvent.Video:
                        this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                        break;
                    case c.BaseConnectionEvent.ConnectionStateChange:
                        this.emit(e, this.connectionState);
                        break;
                    case c.BaseConnectionEvent.InteractionRequired:
                        !this.interacted && "suspended" === this.input.getAudioState() && setImmediate(() => this.emit(e, !0))
                }
            }, this.handleInputSpeaking = e => {
                this.emit(c.BaseConnectionEvent.Speaking, this.ids.userId, e ? g.SpeakingFlags.VOICE : g.SpeakingFlags.NONE, this.audioSSRC)
            }, this.handleAudioContextStateChange = () => {
                !this.interacted && "running" === this.input.getAudioState() && (this.interact(), this.emit(c.BaseConnectionEvent.InteractionRequired, !1))
            }, this.handleStats = e => {
                if (this.connectionState === g.ConnectionStates.DISCONNECTED) {
                    this.off(c.BaseConnectionEvent.Stats, this.handleStats);
                    return
                }
                null != e && (this.webrtcStats.update(e), this.stats = e, Date.now() - this.lastPingTime >= g.PING_INTERVAL && (this.emit(c.BaseConnectionEvent.Ping, e.transport.ping), this.lastPingTime = Date.now()))
            }, this.input = new f.default(n), n.addEventListener("statechange", this.handleAudioContextStateChange), this.audioContext = n, this.input.on(f.InputEvent.AudioPermission, this.handleAudioPermission), this.input.on(f.InputEvent.VideoPermission, this.handleVideoPermission), this.input.on(f.InputEvent.Video, this.handleVideo), this.input.on(f.InputEvent.Mute, e => this.emit(c.BaseConnectionEvent.Mute, e)), this.input.on(f.InputEvent.Stream, this.handleStream), this.input.on(f.InputEvent.DesktopSourceEnd, this.handleDesktopSourceEnd), this.input.on(f.InputEvent.Speaking, this.handleInputSpeaking), this.input.on(f.InputEvent.AddVideoTrack, this.handleAddVideoTrack), this.input.on(f.InputEvent.Video, this.handleAddVideoTrack), this.on("newListener", this.handleNewListener), this.initializeStreamParameters(i)
        }
    }
}