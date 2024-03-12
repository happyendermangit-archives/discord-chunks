function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("854508"), n("222007"), n("70102"), n("424973"), n("808653");
    var i, s = n("773179"),
        r = n.n(s),
        a = n("53379"),
        o = n("811022"),
        l = n("947279"),
        u = n("22546"),
        d = n("685961"),
        c = n("773364"),
        f = n("668906"),
        _ = n("573015"),
        h = n("784063"),
        E = n("539578"),
        g = n("595432"),
        m = n("353927"),
        p = n("149416");
    let S = 0;

    function v(e) {
        return null != e && 0 !== e ? e + 1 : 0
    }
    i = class e extends l.default {
        static create(t, n, i) {
            let s = new e(t, n, !0);
            return s.initialize(i), s
        }
        static createReplay(t, n) {
            let i = new e(t, {
                    userId: "0",
                    channelId: "0",
                    guildId: "0"
                }, !0),
                s = (0, h.getVoiceEngine)();
            i.initializeStreamParameters([{
                type: m.MediaTypes.VIDEO,
                rid: "100",
                ssrc: 0,
                rtxSsrc: 0,
                quality: 100,
                active: !1
            }]);
            let r = s.createReplayConnection("default", (e, n) => {
                let r = null != s.getCodecCapabilities ? s.getCodecCapabilities : s.getSupportedVideoCodecs;
                i.on(c.BaseConnectionEvent.Stats, i.handleStats), i.conn.setOnVideoCallback(i.handleVideo), r(e => {
                    let n = (0, f.getExperimentCodecs)(i.experimentFlags, p.MediaEngineContextTypes.DEFAULT);
                    i.codecs = [{
                        type: "audio",
                        name: p.Codecs.OPUS,
                        priority: 1,
                        payloadType: 120
                    }, ...(0, f.filterVideoCodecs)(e, n).map((e, t) => {
                        let n = 101 + 2 * t;
                        return {
                            type: "video",
                            name: e.name,
                            priority: t + 1,
                            payloadType: n,
                            rtxPayloadType: n + 1,
                            encode: e.encode,
                            decode: e.decode
                        }
                    })], i.setCodecs(p.Codecs.OPUS, p.Codecs.H264, t), i.conn.startReplay()
                })
            }, n);
            return null == r ? null : (i.conn = r, i)
        }
        initialize(e) {
            let t;
            this.logger.info("Creating connection to ".concat(e.address, ":").concat(e.port, " with audio ssrc: ").concat(e.ssrc)), this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.initializeStreamParameters(e.streamParameters), e.streamParameters = this.videoStreamParameters;
            let n = (0, h.getVoiceEngine)(),
                i = null != n.getCodecCapabilities ? n.getCodecCapabilities : n.getSupportedVideoCodecs;
            if (null != n.createOwnStreamConnectionWithOptions) {
                let e = this.context === p.MediaEngineContextTypes.STREAM && this.streamUserId === this.ids.userId;
                r = e ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions
            } else if (null != n.createOwnStreamConnection) {
                let e = this.context === p.MediaEngineContextTypes.STREAM && this.streamUserId === this.ids.userId;
                var s, r, a = e ? n.createOwnStreamConnection : n.createVoiceConnection;
                r = (e, t, n) => a(t.ssrc, this.ids.userId, t.address, t.port, n, t.experiments, t.streamParameters)
            } else r = (e, t, i) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, i, t.experiments, t.streamParameters);
            null === (s = (t = this.conn = r(this.ids.userId, e, (s, r) => {
                if (this.destroyed) return;
                if (null != s && "" !== s) {
                    this.setConnectionState(p.ConnectionStates.NO_ROUTE), this.emit(c.BaseConnectionEvent.Error, s);
                    return
                }
                if (null == r) throw Error("Invalid transport info");
                let {
                    protocol: a,
                    address: o,
                    port: l
                } = r;
                this.logger.info("Connected with local address ".concat(o, ":").concat(l, " and protocol: ").concat(a)), i(i => {
                    let s = (0, f.getExperimentCodecs)(this.experimentFlags, this.context);
                    this.codecs = [{
                        type: "audio",
                        name: p.Codecs.OPUS,
                        priority: 1,
                        payloadType: 120
                    }, ...(0, f.filterVideoCodecs)(i, s).map((e, t) => {
                        let n = 101 + 2 * t;
                        return {
                            type: "video",
                            name: e.name,
                            priority: t + 1,
                            payloadType: n,
                            rtxPayloadType: n + 1,
                            encode: e.encode,
                            decode: e.decode
                        }
                    })], this.logger.info("Video codecs: ".concat(this.codecs.map(e => e.name))), t.getEncryptionModes(i => {
                        var s, r, u, d, f, _, h, E, g, m;
                        this.logger.info("Encryption modes: ".concat(i)), t.setTransportOptions(this.getConnectionTransportOptions()), t.setSelfMute(this.selfMute || this.context === p.MediaEngineContextTypes.STREAM), t.setSelfDeafen(this.selfDeaf), t.setOnSpeakingCallback(this.handleSpeakingNative), null === (s = t.setOnNativeMuteChangedCallback) || void 0 === s || s.call(t, this.handleNativeMuteChanged), null === (r = t.setOnSpeakingWhileMutedCallback) || void 0 === r || r.call(t, this.handleSpeakingWhileMuted), null === (u = t.setPingInterval) || void 0 === u || u.call(t, p.PING_INTERVAL), t.setPingCallback(this.handlePing), null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout), null === (f = t.setOnVideoEncoderFallbackCallback) || void 0 === f || f.call(t, this.handleVideoEncoderFallback), n.setTransportOptions({
                            builtInEchoCancellation: !0,
                            echoCancellation: this.echoCancellation,
                            noiseSuppression: this.noiseSuppression,
                            automaticGainControl: this.automaticGainControl,
                            noiseCancellation: this.noiseCancellation
                        }), n.setNoInputThreshold(-100), n.setNoInputCallback(this.handleNoInput), this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null === (_ = t.setOnFirstFrameCallback) || void 0 === _ || _.call(t, this.handleFirstFrame), null === (h = t.setOnDesktopSourceEnded) || void 0 === h || h.call(t, this.handleDesktopSourceEnded), null === (E = t.setOnSoundshare) || void 0 === E || E.call(t, this.handleSoundshare), null === (g = t.setOnSoundshareEnded) || void 0 === g || g.call(t, this.handleSoundshareEnded), null === (m = t.setOnSoundshareFailed) || void 0 === m || m.call(t, this.handleSoundshareFailed)), this.setConnectionState(p.ConnectionStates.CONNECTED), this.emit(c.BaseConnectionEvent.Connected, a, {
                            address: o,
                            port: l,
                            mode: this.chooseEncryptionMode(e.modes, i),
                            codecs: this.codecs
                        }), this.on(c.BaseConnectionEvent.Stats, this.handleStats);
                        let S = this.getUserOptions();
                        for (let e of (S.forEach(e => {
                                var t, n;
                                return this.logger.info("Creating user: ".concat(e.id, " with audio SSRC: ").concat(e.ssrc, " and video SSRCs: ").concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(",")) && void 0 !== n ? n : 0))
                            }), t.mergeUsers(S), this.emit(c.BaseConnectionEvent.RemoteStreamsReady, S.length), Object.keys(this.localSpeakingFlags))) e !== this.ids.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e])
                    })
                })
            })).setDesktopSourceStatusCallback) || void 0 === s || s.call(t, e => {
                if ("videohook_start" === e.type) this.emit(c.BaseConnectionEvent.VideoHookStart);
                else if ("videohook_stop" === e.type) this.emit(c.BaseConnectionEvent.VideoHookStop);
                else if ("videohook_initialize" === e.type) this.emit(c.BaseConnectionEvent.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
                else if ("screenshare_finish" === e.type) {
                    var t;
                    this.emit(c.BaseConnectionEvent.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames)
                } else "video_state" === e.type ? this.emit(c.BaseConnectionEvent.VideoState, e.state) : e.type.startsWith("soundshare_") && this.emit(c.BaseConnectionEvent.SoundshareTrace, e)
            }), this.on("newListener", this.handleNewListenerNative)
        }
        destroy() {
            this.conn.destroy(), r(this.localSpeakingFlags).keys().reject(e => e === this.ids.userId).forEach(e => this.emit(c.BaseConnectionEvent.Speaking, e, p.SpeakingFlags.NONE, this.remoteAudioSSRCs[e])), this.setConnectionState(p.ConnectionStates.DISCONNECTED), super.destroy()
        }
        setCodecs(e, t, n) {
            this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1)
        }
        getStats() {
            return this.connectionState === p.ConnectionStates.DISCONNECTED ? Promise.resolve(null) : (0, a.timeout)(new Promise(e => {
                if (null != this.conn.getFilteredStats) this.conn.getFilteredStats(m.StatsFilter.ALL, t => e((0, E.default)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                else if (null != this.conn.getStats) this.conn.getStats(t => e((0, E.default)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                else {
                    let t = (0, h.getVoiceEngine)();
                    t.getStats(t => e((0, E.default)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)))
                }
            }), u.STATS_INTERVAL).catch(e => {
                if (!(e instanceof a.TimeoutError)) throw e
            })
        }
        createUser(e, t, n) {
            if (0 === t) {
                this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
                return
            }
            let i = this.remoteAudioSSRCs[e],
                s = this.remoteVideoSSRCs[e];
            s = void 0 !== s ? [...s].sort() : [], n = void 0 === n ? null != s ? s : [] : [...n].sort();
            let a = i !== t,
                o = !r.isEqual(s, n);
            if (this.remoteAudioSSRCs[e] = t, this.remoteVideoSSRCs[e] = null != n ? n : [], this.ids.userId !== e && (a || o)) {
                let i = void 0 !== n && n.length > 0 ? n[0] : 0,
                    s = {
                        id: e,
                        ssrc: t,
                        videoSsrc: i,
                        videoSsrcs: n,
                        rtxSsrc: v(i),
                        mute: this.getLocalMute(e),
                        volume: this.getLocalVolume(e)
                    };
                if (this.connectionState === p.ConnectionStates.CONNECTED) {
                    var l;
                    this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (l = null == n ? void 0 : n.join(",")) && void 0 !== l ? l : 0)), this.conn.mergeUsers([s])
                }
                let r = this.localPans[e];
                null != r && this.setLocalPan(e, r.left, r.right);
                let a = this.localSpeakingFlags[e];
                null != a && a !== p.SpeakingFlags.NONE && this.setSpeakingFlags(e, a)
            }
        }
        destroyUser(e) {
            null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e])
        }
        setSelfMute(e) {
            this.selfMute = e, this.conn.setSelfMute(e), this.emit(c.BaseConnectionEvent.Mute, e)
        }
        setSelfDeaf(e) {
            this.selfDeaf = e, this.conn.setSelfDeafen(e)
        }
        setNativeMute(e) {
            if (this.context === p.MediaEngineContextTypes.DEFAULT) {
                var t, n;
                null === (t = (n = (0, h.getVoiceEngine)()).setNativeMuteState) || void 0 === t || t.call(n, e)
            }
        }
        setSoundshareSource(e, t) {
            if (this.soundshareId === e && this.soundshareSentSpeakingEvent || this.context !== p.MediaEngineContextTypes.STREAM) return;
            this.soundshareId = e, this.soundshareSentSpeakingEvent = !1;
            let n = e;
            null === n && (n = 0), this.conn.setTransportOptions({
                soundsharePid: n,
                soundshareEventDriven: !0,
                soundshareLoopback: t
            })
        }
        setLocalMute(e, t) {
            this.localMutes[e] = t, this.conn.setLocalMute(e, t), this.emit(c.BaseConnectionEvent.LocalMute, e, t)
        }
        fastUdpReconnect() {
            null != this.conn.fastUdpReconnect && (this.numFastUdpReconnects += 1, this.conn.fastUdpReconnect())
        }
        getNumFastUdpReconnects() {
            return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null
        }
        setLocalVideoDisabled(e, t) {
            this.disabledLocalVideos[e] = t, this.emit(c.BaseConnectionEvent.LocalVideoDisabled, e, t)
        }
        setMinimumJitterBufferLevel(e) {
            this.minimumJitterBufferLevel = e
        }
        setPostponeDecodeLevel(e) {
            this.postponeDecodeLevel = e
        }
        setClipRecordUser(e, t, n) {
            !this.destroyed && this.conn.setClipRecordUser(e, (this.context === p.MediaEngineContextTypes.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video"), n)
        }
        setClipsKeyFrameInterval(e) {
            this.context === p.MediaEngineContextTypes.STREAM && (this.clipsKeyFrameInterval = e, this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            }))
        }
        setViewerSideClip(e) {
            this.context === p.MediaEngineContextTypes.STREAM && this.conn.setTransportOptions({
                enableViewerSideClip: e
            })
        }
        setQualityDecoupling(e) {
            this.context === p.MediaEngineContextTypes.STREAM && this.conn.setTransportOptions({
                enableQualityDecoupling: e
            })
        }
        getLocalVolume(e) {
            var t;
            let n = this.localVolumes[e];
            return null == n && (n = this.context === p.MediaEngineContextTypes.DEFAULT ? p.DEFAULT_VOLUME : p.DEFAULT_STREAM_VOLUME), (null != (t = n) ? t : p.DEFAULT_VOLUME) / p.DEFAULT_VOLUME
        }
        setLocalVolume(e, t) {
            this.localVolumes[e] = t;
            try {
                this.conn.setLocalVolume(e, this.getLocalVolume(e))
            } catch {
                this.logger.warn("Failed to set volume for user: ".concat(e, ": ").concat(t))
            }
        }
        setLocalPan(e, t, n) {
            this.localPans[e] = {
                left: t,
                right: n
            }, this.conn.setLocalPan(e, t, n)
        }
        isAttenuating() {
            return this.attenuationFactor < 1
        }
        setAttenuation(e, t, n) {
            this.attenuationFactor = (100 - e) / 100, this.attenuateWhileSpeakingSelf = t, this.attenuateWhileSpeakingOthers = n, this.conn.setTransportOptions(this.getAttenuationOptions())
        }
        setCanHavePriority(e, t) {
            var n, i;
            null === (n = (i = this.conn).setRemoteUserCanHavePriority) || void 0 === n || n.call(i, e, t)
        }
        setBitRate(e) {
            this.setVoiceBitRate(e)
        }
        setVoiceBitRate(e) {
            if (this.voiceBitrate === e) return;
            this.voiceBitrate = e;
            let t = this.voiceBitrate;
            this.soundshareActive && (t = Math.max(p.DEFAULT_SOUNDSHARE_VOICE_BITRATE, t)), this.conn.setTransportOptions({
                encodingVoiceBitRate: t
            })
        }
        setCameraBitRate(e, t, n) {
            null != n || null != t ? this.videoQualityManager.setQuality({
                bitrateMin: null != n && n > 0 ? n : t,
                bitrateMax: t
            }) : this.videoQualityManager.setQuality({}), !this.hasDesktopSource() && this.conn.setTransportOptions({
                encodingVideoBitRate: e,
                encodingVideoMinBitRate: n,
                encodingVideoMaxBitRate: t
            })
        }
        setEchoCancellation(e) {
            this.echoCancellation = e, (0, h.getVoiceEngine)().setTransportOptions({
                echoCancellation: this.echoCancellation
            })
        }
        setNoiseSuppression(e) {
            this.noiseSuppression = e, (0, h.getVoiceEngine)().setTransportOptions({
                noiseSuppression: this.noiseSuppression
            })
        }
        setAutomaticGainControl(e) {
            this.automaticGainControl = e, (0, h.getVoiceEngine)().setTransportOptions({
                automaticGainControl: this.automaticGainControl
            })
        }
        setNoiseCancellation(e) {
            this.noiseCancellation = e, (0, h.getVoiceEngine)().setTransportOptions({
                noiseCancellation: this.noiseCancellation
            })
        }
        setExperimentalEncoders(e) {
            this.experimentalEncoders = e, this.conn.setTransportOptions({
                experimentalEncoders: this.experimentalEncoders
            })
        }
        setHardwareH264(e) {
            this.hardwareH264 = e, this.conn.setTransportOptions({
                hardwareH264: this.hardwareH264
            })
        }
        setQoS(e) {
            this.qos = e, this.conn.setTransportOptions({
                qos: this.qos
            })
        }
        setInputMode(e, t) {
            switch (this.inputMode = e, e) {
                case p.InputModes.PUSH_TO_TALK:
                    this.pttReleaseDelay = t.pttReleaseDelay;
                    break;
                case p.InputModes.VOICE_ACTIVITY:
                    this.vadThreshold = t.vadThreshold, this.vadAutoThreshold = t.vadAutoThreshold, this.vadUseKrisp = t.vadUseKrisp, this.vadLeading = t.vadLeading, this.vadTrailing = t.vadTrailing;
                    break;
                default:
                    throw Error("Unknown Input Mode: ".concat(e))
            }
            this.conn.setTransportOptions({
                inputMode: p.NATIVE_MODE_VALUES[this.inputMode],
                inputModeOptions: this.createInputModeOptions()
            })
        }
        setSilenceThreshold(e) {
            (0, h.getVoiceEngine)().setNoInputThreshold(e)
        }
        setForceAudioInput(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t ? this.forceAudioPriority = e : this.forceAudioNormal = e, this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority)
        }
        setSpeakingFlags(e, t) {
            null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & p.SpeakingFlags.VOICE) === p.SpeakingFlags.VOICE), this.handleSpeakingFlags(e, t)
        }
        clearAllSpeaking() {}
        setEncryption(e, t) {
            this.logger.info("Selected encryption mode: ".concat(e)), this.conn.setTransportOptions({
                encryptionSettings: {
                    mode: e,
                    secretKey: t
                }
            })
        }
        setReconnectInterval(e) {
            this.reconnectInterval = e, this.conn.setTransportOptions({
                reconnectInterval: this.reconnectInterval
            })
        }
        setKeyframeInterval(e) {
            this.keyframeInterval = e, this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            })
        }
        setVideoQualityMeasurement(e) {
            this.videoQualityMeasurement = e, this.conn.setTransportOptions({
                videoQualityMeasurement: this.videoQualityMeasurement
            })
        }
        setVideoEncoderExperiments(e) {
            this.videoEncoderExperiments = e, this.conn.setTransportOptions({
                videoEncoderExperiments: this.videoEncoderExperiments
            })
        }
        setVideoBroadcast(e) {
            this.selfVideo !== e && (this.selfVideo = e, this.applyVideoTransportOptions())
        }
        setGoLiveSource(e) {
            let {
                resolution: t,
                frameRate: n
            } = e.quality, i = t <= 480 ? t / 3 * 4 : t / 9 * 16, s = null;
            if (null != e.desktopDescription ? s = e.desktopDescription.id : null != e.cameraDescription && (s = "".concat(e.cameraDescription.videoDeviceGuid, ":").concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === s) {
                this.setDesktopEncodingOptions(i, t, n);
                return
            }
            if (this.goLiveSourceIdentifier = s, null != this.conn.setDesktopSource) {
                if (null != e.desktopDescription) {
                    let {
                        id: t,
                        soundshareId: n,
                        useLoopback: i,
                        useVideoHook: s,
                        useGraphicsCapture: r,
                        useQuartzCapturer: a,
                        allowScreenCaptureKit: o,
                        videoHookStaleFrameTimeoutMs: l,
                        graphicsCaptureStaleFrameTimeoutMs: u,
                        hdrCaptureMode: d
                    } = e.desktopDescription;
                    this.setSoundshareSource(n, i);
                    let [c, f] = null != t ? t.split(":") : ["", ""];
                    null != t ? this.logger.info("capturing desktop (type: ".concat(c, ", handle: ").concat(f, ", use-video-hook: ").concat(s.toString(), ", use-graphics-capture: ").concat(null == r ? void 0 : r.toString(), ").")) : this.logger.info("capturing desktop (type: <stop>)."), null != this.conn.setDesktopSourceWithOptions ? null != t ? this.conn.setDesktopSourceWithOptions({
                        type: c,
                        sourceId: f,
                        useVideoHook: s,
                        useGraphicsCapture: r,
                        useQuartzCapturer: a,
                        allowScreenCaptureKit: o,
                        videoHookStaleFrameTimeoutMs: l,
                        graphicsCaptureStaleFrameTimeoutMs: u,
                        hdrCaptureMode: d
                    }) : this.conn.clearDesktopSource() : this.conn.setDesktopSource("wumpus-".concat(f), s, c)
                } else if (null != e.cameraDescription) {
                    let {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = e.cameraDescription;
                    this.conn.setGoLiveDevices({
                        videoInputDeviceId: t,
                        audioInputDeviceId: n
                    })
                }
                this.setDesktopEncodingOptions(i, t, n)
            }
        }
        clearGoLiveDevices() {
            null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices()
        }
        clearDesktopSource() {
            null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), this.goLiveSourceIdentifier = null, null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource("", !1, "")
        }
        setDesktopSourceStatusCallback(e) {
            var t, n;
            null === (t = (n = this.conn).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, e)
        }
        hasDesktopSource() {
            return null != this.goLiveSourceIdentifier
        }
        setDesktopEncodingOptions(e, t, n) {
            if (this.destroyed) return;
            let i = 0 === t && n >= 10 || t > 720 || n > 30 ? m.DESKTOP_BITRATE_ENHANCED : m.DESKTOP_BITRATE,
                s = {
                    width: e,
                    height: t,
                    framerate: n
                },
                r = this.videoQualityManager.getQuality();
            (!d.VideoQuality.equals(s, r.capture) || r.bitrateMax !== i) && (this.videoQualityManager.setQuality({
                capture: s,
                bitrateMax: i
            }), this.videoStreamParameters.length > 0 && (this.videoStreamParameters[0].maxResolution = {
                type: 0 === e && 0 === t ? p.ResolutionTypes.SOURCE : p.ResolutionTypes.FIXED,
                width: e,
                height: t
            }, this.videoStreamParameters[0].maxFrameRate = n, this.videoStreamParameters[0].maxBitrate = i), this.emit(c.BaseConnectionEvent.Video, this.ids.userId, null, this.audioSSRC, this.videoStreamParameters[0].ssrc, v(this.videoStreamParameters[0].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints))
        }
        setSDP(e) {}
        setRemoteVideoSinkWants(e) {
            this.remoteVideoSinkWants = e, this.updateVideoQuality(m.MEDIA_SINK_WANTS_PROPERTIES)
        }
        setLocalVideoSinkWants(e) {
            let t = this.localVideoSinkWants;
            for (let [a, o] of Object.entries(this.remoteVideoSSRCs)) {
                var n, i, s, r;
                let l = 0,
                    u = 0;
                for (let n of o) l += null == t ? void 0 : t[n], u += null == e ? void 0 : e[n];
                0 === l && 0 !== u && (null === (n = (i = this.conn).setDisableLocalVideo) || void 0 === n || n.call(i, a, !1)), 0 !== l && 0 === u && (null === (s = (r = this.conn).setDisableLocalVideo) || void 0 === s || s.call(r, a, !0))
            }
            this.localVideoSinkWants = e
        }
        startSamplesPlayback(e, t, n) {
            if (e.numberOfChannels > 2) {
                n(1, "Too many channels");
                return
            }
            for (var i = [], s = 0; s < e.numberOfChannels; s++) {
                var r = e.getChannelData(s);
                i.push(r)
            }
            try {
                this.conn.startSamplesPlayback({
                    sampleRate: e.sampleRate,
                    volume: t
                }, i, n)
            } catch (t) {
                this.conn.startSamplesPlayback(e.sampleRate, i, n)
            }
        }
        stopSamplesPlayback() {
            this.conn.stopSamplesPlayback()
        }
        startSamplesLocalPlayback(e, t, n, i) {
            if (t.numberOfChannels > 2) {
                i(1, "Too many channels");
                return
            }
            for (var s = [], r = 0; r < t.numberOfChannels; r++) {
                var a = t.getChannelData(r);
                s.push(a)
            }
            this.conn.startSamplesLocalPlayback(e, {
                sampleRate: t.sampleRate,
                volume: n
            }, s, i)
        }
        stopAllSamplesLocalPlayback() {
            this.conn.stopAllSamplesLocalPlayback()
        }
        stopSamplesLocalPlayback(e) {
            this.conn.stopSamplesLocalPlayback(e)
        }
        setBandwidthEstimationExperiments(e) {
            this.conn.setTransportOptions({
                bandwidthEstimationExperiments: e
            })
        }
        updateVideoQualityCore(e, t) {
            this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e)
        }
        setStreamParameters(e) {
            return new Promise((t, n) => {
                for (let t of this.videoStreamParameters) {
                    let i = e.findIndex(e => e.rid === t.rid);
                    if (-1 === i) {
                        n(Error("Invalid rid"));
                        return
                    }
                    let s = [];
                    !r.isEqual(this.videoStreamParameters[i], e[i]) && (this.videoStreamParameters[i] = {
                        ...e[i]
                    }, s.push({
                        ...e[i]
                    })), this.conn.setTransportOptions({
                        streamParameters: s
                    })
                }
                t()
            })
        }
        applyVideoTransportOptions() {
            if (!this.videoSupported) return;
            let e = !1;
            if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
                var t;
                e = (null === (t = this.videoStreamParameters[0].maxResolution) || void 0 === t ? void 0 : t.type) === p.ResolutionTypes.SOURCE
            }
            this.conn.setTransportOptions(this.applyQualityConstraints({
                encodingVideoDegradationPreference: this.hasDesktopSource() ? e ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference : this.videoDegradationPreference
            }).constraints), this.conn.setVideoBroadcast(this.selfVideo)
        }
        chooseEncryptionMode(e, t) {
            for (let n of t)
                for (let t of e)
                    if (n === t) return n;
            return "xsalsa20_poly1305"
        }
        getUserOptions() {
            return Object.keys(this.remoteAudioSSRCs).map(e => {
                let t = void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
                return {
                    id: e,
                    ssrc: this.remoteAudioSSRCs[e],
                    videoSsrc: t,
                    videoSsrcs: this.remoteVideoSSRCs[e],
                    rtxSsrc: v(t),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e)
                }
            })
        }
        createInputModeOptions() {
            switch (this.inputMode) {
                case p.InputModes.VOICE_ACTIVITY:
                    return {
                        vadThreshold: this.vadThreshold, vadAutoThreshold: this.vadAutoThreshold ? _.VADAggressiveness.VERY_AGGRESSIVE : _.VADAggressiveness.DISABLED, vadUseKrisp: this.vadUseKrisp, vadLeading: this.vadLeading, vadTrailing: this.vadTrailing
                    };
                case p.InputModes.PUSH_TO_TALK:
                    return {
                        pttReleaseDelay: this.pttReleaseDelay
                    };
                default:
                    throw Error("Unknown Input Mode: ".concat(this.inputMode))
            }
        }
        getAttenuationOptions() {
            return {
                attenuation: this.isAttenuating(),
                attenuationFactor: this.attenuationFactor,
                attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
                attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers
            }
        }
        getCodecParams(e, t) {
            if (e !== p.Codecs.H264) return {};
            if (t) return {
                "level-asymmetry-allowed": "1",
                "packetization-mode": "1",
                "profile-level-id": "42e034",
                "hardware-h264": this.hardwareH264 && this.useElectronVideo && g.default.useDirectVideo ? "1" : "0"
            };
            {
                let e = "android" === (0, h.getVoiceEngine)().platform ? "42e01f" : "4d0033";
                return {
                    "level-asymmetry-allowed": "1",
                    "packetization-mode": "1",
                    "profile-level-id": e,
                    "hardware-h264": this.hardwareH264 && this.useElectronVideo && g.default.useDirectVideo ? "1" : "0"
                }
            }
        }
        getCodecOptions(e, t, n) {
            var i, s, r, a;
            let o;
            o = this.codecs.find(t => t.name === e);
            let l = {
                    type: null !== (i = null == o ? void 0 : o.payloadType) && void 0 !== i ? i : 0,
                    name: e,
                    freq: 48e3,
                    pacsize: 960,
                    channels: 1,
                    rate: 64e3
                },
                u = [{
                    type: null !== (s = null == o ? void 0 : o.payloadType) && void 0 !== s ? s : 0,
                    name: e,
                    freq: 48e3,
                    channels: 2,
                    params: {
                        stereo: "1"
                    }
                }];
            n === p.MediaEngineContextTypes.STREAM && (l.channels = 2);
            let d = [],
                c = {
                    name: "",
                    type: 0,
                    rtxType: 0,
                    params: {}
                };
            for (o of this.codecs) {
                if (o.name === e) continue;
                let n = {
                    name: (0, f.codecNameToPayloadName)(o.name),
                    type: null !== (r = null == o ? void 0 : o.payloadType) && void 0 !== r ? r : 0,
                    rtxType: null !== (a = null == o ? void 0 : o.rtxPayloadType) && void 0 !== a ? a : 0,
                    params: this.getCodecParams(o.name, !0)
                };
                d.push(n), o.name === t && (c = {
                    ...n,
                    params: this.getCodecParams(o.name, !1)
                }, this.experimentFlags.has(m.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL) && (c.params["fixed-rate-presentation-timestamps"] = "1"))
            }
            return {
                videoEncoder: c,
                videoDecoders: d,
                audioEncoder: l,
                audioDecoders: u
            }
        }
        getKeyFrameInterval() {
            return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval)
        }
        getConnectionTransportOptions() {
            let e = {
                selfMute: this.selfMute,
                inputMode: p.NATIVE_MODE_VALUES[this.inputMode],
                inputModeOptions: this.createInputModeOptions(),
                minimumJitterBufferLevel: this.minimumJitterBufferLevel,
                postponeDecodeLevel: this.postponeDecodeLevel,
                ...this.getAttenuationOptions(),
                fec: !0,
                packetLossRate: .3,
                qos: this.qos,
                prioritySpeakerDucking: p.DEFAULT_PRIORITY_SPEAKER_DUCKING,
                encodingVoiceBitRate: this.voiceBitrate,
                callBitRate: p.DEFAULT_CALL_BITRATE,
                callMinBitRate: p.DEFAULT_CALL_MIN_BITRATE,
                callMaxBitRate: p.DEFAULT_CALL_MAX_BITRATE,
                encodingVideoDegradationPreference: this.videoDegradationPreference,
                experimentalEncoders: this.experimentalEncoders,
                hardwareH264: this.hardwareH264,
                reconnectInterval: this.reconnectInterval,
                userChannelIds: this.ids
            };
            return (0, h.supportsFeature)(p.NativeFeatures.VIDEO_EFFECTS) && this.context === p.MediaEngineContextTypes.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(m.ExperimentFlags.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(m.ExperimentFlags.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(m.ExperimentFlags.SKIP_ENCODE) && (e.skipEncode = !0), e
        }
        setStream(e) {
            throw Error("Method not implemented.")
        }
        getUserIdBySsrc(e) {}
        setRtcLogEphemeralKey(e) {
            this.conn.setTransportOptions({
                userChannelIds: this.ids,
                rtcLogEphemeralKey: e
            })
        }
        setRtcLogMarker(e) {
            null != this.conn.setRtcLogMarker && this.conn.setRtcLogMarker(e)
        }
        prepareSecureFramesTransition(e, t, n) {
            var i, s;
            null === (i = (s = this.conn).prepareSecureFramesTransition) || void 0 === i || i.call(s, e, t, n)
        }
        prepareSecureFramesEpoch(e, t, n) {
            var i, s;
            null === (i = (s = this.conn).prepareSecureFramesEpoch) || void 0 === i || i.call(s, e, t, n)
        }
        executeSecureFramesTransition(e) {
            var t, n;
            null === (t = (n = this.conn).executeSecureFramesTransition) || void 0 === t || t.call(n, e)
        }
        getMLSKeyPackage(e) {
            var t, n;
            null === (t = (n = this.conn).getMLSKeyPackage) || void 0 === t || t.call(n, e)
        }
        updateMLSExternalSender(e) {
            var t, n;
            null === (t = (n = this.conn).updateMLSExternalSender) || void 0 === t || t.call(n, e)
        }
        processMLSProposals(e, t) {
            var n, i;
            null === (n = (i = this.conn).processMLSProposals) || void 0 === n || n.call(i, e, t)
        }
        prepareMLSCommitTransition(e, t, n) {
            var i, s;
            null === (i = (s = this.conn).prepareMLSCommitTransition) || void 0 === i || i.call(s, e, t, n)
        }
        processMLSWelcome(e, t, n) {
            var i, s;
            null === (i = (s = this.conn).processMLSWelcome) || void 0 === i || i.call(s, e, t, n)
        }
        constructor(e, t, n) {
            super(e, t), this.mediaEngineConnectionId = "Native-".concat(S++), this.selfMute = !1, this.selfVideo = !1, this.forceAudioNormal = !1, this.forceAudioPriority = !1, this.codecs = [], this.videoEncoderFallbackPending = !1, this.desktopDegradationPreference = (0, h.getVoiceEngine)().DegradationPreference.MAINTAIN_FRAMERATE, this.sourceDesktopDegradationPreference = (0, h.getVoiceEngine)().DegradationPreference.DISABLED, this.videoDegradationPreference = (0, h.getVoiceEngine)().DegradationPreference.BALANCED, this.localPans = {}, this.remoteAudioSSRCs = {}, this.remoteVideoSSRCs = {}, this.inputMode = p.InputModes.VOICE_ACTIVITY, this.vadThreshold = -40, this.vadAutoThreshold = !0, this.vadUseKrisp = !0, this.vadLeading = 5, this.vadTrailing = 25, this.pttReleaseDelay = 20, this.soundshareActive = !1, this.soundshareId = null, this.soundshareSentSpeakingEvent = !1, this.echoCancellation = !0, this.noiseSuppression = !0, this.automaticGainControl = !0, this.noiseCancellation = !1, this.experimentalEncoders = !1, this.hardwareH264 = !0, this.attenuationFactor = .5, this.attenuateWhileSpeakingSelf = !1, this.attenuateWhileSpeakingOthers = !0, this.qos = !0, this.minimumJitterBufferLevel = 0, this.postponeDecodeLevel = 100, this.reconnectInterval = 6e4, this.keyframeInterval = 0, this.clipsKeyFrameInterval = 0, this.videoQualityMeasurement = "", this.videoEncoderExperiments = "", this.numFastUdpReconnects = 0, this.handleSpeakingNative = (e, t) => {
                let n = p.SpeakingFlags.NONE;
                n = "boolean" == typeof t ? t ? p.SpeakingFlags.VOICE : p.SpeakingFlags.NONE : t, this.handleSpeakingFlags(e, n)
            }, this.handleNativeMuteChanged = e => {
                this.emit(c.BaseConnectionEvent.NativeMuteChanged, e)
            }, this.handleSpeakingFlags = (e, t) => {
                this.localSpeakingFlags[e] = t;
                let n = e === this.ids.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
                this.emit(c.BaseConnectionEvent.Speaking, e, t, n), (t & p.SpeakingFlags.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(c.BaseConnectionEvent.SoundshareSpeaking), this.soundshareSentSpeakingEvent = !0)
            }, this.handleSpeakingWhileMuted = () => {
                this.emit(c.BaseConnectionEvent.SpeakingWhileMuted)
            }, this.handlePing = (e, t, n) => {
                this.emit(c.BaseConnectionEvent.Ping, e)
            }, this.handlePingTimeout = (e, t, n, i) => {
                this.emit(c.BaseConnectionEvent.PingTimeout, n, i > 0 ? i : 4e3)
            }, this.handleVideoEncoderFallback = e => {
                !this.videoEncoderFallbackPending && (this.logger.info("Falling back from current video encoder:" + e), this.codecs = this.codecs.map(t => ((e === t.name || "AV1" === t.name && "AV1X" === e) && (t.encode = !1), t)).filter(e => !("video" === e.type && !1 === e.encode && !1 === e.decode)), this.emit(c.BaseConnectionEvent.VideoEncoderFallback, this.codecs), this.videoEncoderFallbackPending = !0)
            }, this.handleVideo = (e, t, n, i) => {
                let s = r.cloneDeep(this.videoStreamParameters);
                e === this.ids.userId ? null != i && Array.isArray(i) && i.length > 0 ? i.forEach(e => {
                    s.forEach((t, n) => {
                        t.rid === e.rid && (s[n] = {
                            ...t,
                            ssrc: e.ssrc,
                            rtxSsrc: e.rtxSsrc,
                            active: e.active
                        })
                    })
                }) : t > 0 ? (s[0].active = !0, s[0].ssrc = t, s[0].rtxSsrc = v(t)) : s[0].active = !1 : t > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? !this.remoteVideoSSRCs[e].includes(t) && (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : this.remoteVideoSSRCs[e] = [t]), this.videoStreamParameters = s, this.emit(c.BaseConnectionEvent.Video, e, null != n && "" !== n ? n : null, e === this.ids.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, v(t), this.videoStreamParameters)
            }, this.handleFirstFrame = (e, t, n) => {
                this.emit(c.BaseConnectionEvent.FirstFrame, e, t, n)
            }, this.handleNoInput = e => {
                this.emit(c.BaseConnectionEvent.Silence, !e)
            }, this.handleDesktopSourceEnded = () => {
                this.emit(c.BaseConnectionEvent.DesktopSourceEnd)
            }, this.handleSoundshare = e => {
                e && (this.soundshareActive = !0, this.conn.setTransportOptions({
                    encodingVoiceBitRate: Math.max(p.DEFAULT_SOUNDSHARE_VOICE_BITRATE, this.voiceBitrate)
                }), this.emit(c.BaseConnectionEvent.SoundshareAttached))
            }, this.handleSoundshareFailed = (e, t, n) => {
                this.emit(c.BaseConnectionEvent.SoundshareFailed, {
                    failureCode: e,
                    failureReason: t,
                    willRetry: n
                })
            }, this.handleSoundshareEnded = () => {
                this.soundshareActive = !1, !this.destroyed && this.conn.setTransportOptions({
                    encodingVoiceBitRate: this.voiceBitrate
                })
            }, this.handleNewListenerNative = e => {
                if (e === c.BaseConnectionEvent.ConnectionStateChange) this.emit(e, this.connectionState)
            }, this.handleStats = e => {
                if (this.connectionState === p.ConnectionStates.DISCONNECTED) {
                    this.off(c.BaseConnectionEvent.Stats, this.handleStats);
                    return
                }
                if (null != e) {
                    if (null != this.stats) {
                        let t = r.reduce(e.rtp.outbound, (e, t) => {
                                var n, i;
                                return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0, e
                            }, {
                                lost: 0,
                                sent: 0
                            }),
                            n = r.reduce(this.stats.rtp.outbound, (e, t) => {
                                var n, i;
                                return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0, e
                            }, {
                                lost: 0,
                                sent: 0
                            }),
                            i = t.sent - n.sent,
                            s = t.lost - n.lost;
                        if (0 === i) this.emit(c.BaseConnectionEvent.OutboundLossRate, 0);
                        else if (i > 0 && s >= 0) {
                            let e = r.clamp(s / (i + s), 0, 1);
                            this.emit(c.BaseConnectionEvent.OutboundLossRate, 100 * e)
                        }
                        let a = e.rtp.outbound.filter(e => "audio" === e.type)[0],
                            o = this.stats.rtp.outbound.filter(e => "audio" === e.type)[0];
                        if (null != a && null != o && null != a.framesCaptured && null != o.framesCaptured) {
                            let e = a.framesCaptured - o.framesCaptured;
                            if (this.noiseCancellation && e > 50 && null != a.noiseCancellerProcessTime && null != o.noiseCancellerProcessTime) {
                                let t = a.noiseCancellerProcessTime - o.noiseCancellerProcessTime;
                                t / e > 8 ? this.emit(c.BaseConnectionEvent.NoiseCancellationError, p.NoiseCancellerError.CPU_OVERUSE) : 0 === t && this.emit(c.BaseConnectionEvent.NoiseCancellationError, p.NoiseCancellerError.FAILED)
                            }
                            if (this.inputMode === p.InputModes.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > 50 && null != a.voiceActivityDetectorProcessTime && null != o.voiceActivityDetectorProcessTime) {
                                let t = a.voiceActivityDetectorProcessTime - o.voiceActivityDetectorProcessTime;
                                t / e > 4 && this.emit(c.BaseConnectionEvent.VoiceActivityDetectorError, p.NoiseCancellerError.VAD_CPU_OVERUSE)
                            }
                        }
                    }
                    this.stats = e
                }
            }, this.logger = new o.default("Connection(".concat(e, ")")), this.videoSupported = n
        }
    }
}