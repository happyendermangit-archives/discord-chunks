function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("854508"), n("222007"), n("70102"), n("424973");
    var i, s = n("555123"),
        r = n.n(s),
        a = n("464675"),
        o = n.n(a),
        l = n("782720"),
        u = n.n(l),
        d = n("10429"),
        c = n.n(d),
        _ = n("53379"),
        f = n("811022"),
        E = n("947279"),
        h = n("22546"),
        g = n("685961"),
        m = n("773364"),
        p = n("668906"),
        S = n("573015"),
        T = n("784063"),
        v = n("539578"),
        I = n("595432"),
        A = n("353927"),
        C = n("149416");
    let y = 0;

    function N(e) {
        return null != e && 0 !== e ? e + 1 : 0
    }
    i = class e extends E.default {
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
                s = (0, T.getVoiceEngine)();
            i.initializeStreamParameters([{
                type: A.MediaTypes.VIDEO,
                rid: "100",
                ssrc: 0,
                rtxSsrc: 0,
                quality: 100,
                active: !1
            }]);
            let r = s.createReplayConnection("default", (e, n) => {
                let r = null != s.getCodecCapabilities ? s.getCodecCapabilities : s.getSupportedVideoCodecs;
                i.on(m.BaseConnectionEvent.Stats, i.handleStats), i.conn.setOnVideoCallback(i.handleVideo), r(e => {
                    let n = (0, p.getExperimentCodecs)(i.experimentFlags, C.MediaEngineContextTypes.DEFAULT);
                    i.codecs = [{
                        type: "audio",
                        name: C.Codecs.OPUS,
                        priority: 1,
                        payloadType: 120
                    }, ...(0, p.filterVideoCodecs)(e, n).map((e, t) => {
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
                    })], i.setCodecs(C.Codecs.OPUS, C.Codecs.H264, t), i.conn.startReplay()
                })
            }, n);
            return null == r ? null : (i.conn = r, i)
        }
        initialize(e) {
            let t;
            this.logger.info("Creating connection to ".concat(e.address, ":").concat(e.port, " with audio ssrc: ").concat(e.ssrc)), this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.initializeStreamParameters(e.streamParameters), e.streamParameters = this.videoStreamParameters;
            let n = (0, T.getVoiceEngine)(),
                i = null != n.getCodecCapabilities ? n.getCodecCapabilities : n.getSupportedVideoCodecs;
            if (null != n.createOwnStreamConnectionWithOptions) {
                let e = this.context === C.MediaEngineContextTypes.STREAM && this.streamUserId === this.ids.userId;
                r = e ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions
            } else if (null != n.createOwnStreamConnection) {
                let e = this.context === C.MediaEngineContextTypes.STREAM && this.streamUserId === this.ids.userId;
                var s, r, a = e ? n.createOwnStreamConnection : n.createVoiceConnection;
                r = (e, t, n) => a(t.ssrc, this.ids.userId, t.address, t.port, n, t.experiments, t.streamParameters)
            } else r = (e, t, i) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, i, t.experiments, t.streamParameters);
            null === (s = (t = this.conn = r(this.ids.userId, e, (s, r) => {
                if (this.destroyed) return;
                if (null != s && "" !== s) {
                    this.setConnectionState(C.ConnectionStates.NO_ROUTE), this.emit(m.BaseConnectionEvent.Error, s);
                    return
                }
                if (null == r) throw Error("Invalid transport info");
                let {
                    protocol: a,
                    address: o,
                    port: l
                } = r;
                this.logger.info("Connected with local address ".concat(o, ":").concat(l, " and protocol: ").concat(a)), i(i => {
                    let s = (0, p.getExperimentCodecs)(this.experimentFlags, this.context);
                    this.codecs = [{
                        type: "audio",
                        name: C.Codecs.OPUS,
                        priority: 1,
                        payloadType: 120
                    }, ...(0, p.filterVideoCodecs)(i, s).map((e, t) => {
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
                        var s, r, u, d, c, _, f, E, h, g;
                        this.logger.info("Encryption modes: ".concat(i)), t.setTransportOptions(this.getConnectionTransportOptions()), t.setSelfMute(this.selfMute || this.context === C.MediaEngineContextTypes.STREAM), t.setSelfDeafen(this.selfDeaf), t.setOnSpeakingCallback(this.handleSpeakingNative), null === (s = t.setOnNativeMuteToggleCallback) || void 0 === s || s.call(t, this.handleNativeMuteToggled), null === (r = t.setOnSpeakingWhileMutedCallback) || void 0 === r || r.call(t, this.handleSpeakingWhileMuted), null === (u = t.setPingInterval) || void 0 === u || u.call(t, C.PING_INTERVAL), t.setPingCallback(this.handlePing), null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout), null === (c = t.setOnVideoEncoderFallbackCallback) || void 0 === c || c.call(t, this.handleVideoEncoderFallback), n.setTransportOptions({
                            builtInEchoCancellation: !0,
                            echoCancellation: this.echoCancellation,
                            noiseSuppression: this.noiseSuppression,
                            automaticGainControl: this.automaticGainControl,
                            noiseCancellation: this.noiseCancellation
                        }), n.setNoInputThreshold(-100), n.setNoInputCallback(this.handleNoInput), this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null === (_ = t.setOnFirstFrameCallback) || void 0 === _ || _.call(t, this.handleFirstFrame), null === (f = t.setOnDesktopSourceEnded) || void 0 === f || f.call(t, this.handleDesktopSourceEnded), null === (E = t.setOnSoundshare) || void 0 === E || E.call(t, this.handleSoundshare), null === (h = t.setOnSoundshareEnded) || void 0 === h || h.call(t, this.handleSoundshareEnded), null === (g = t.setOnSoundshareFailed) || void 0 === g || g.call(t, this.handleSoundshareFailed)), this.setConnectionState(C.ConnectionStates.CONNECTED), this.emit(m.BaseConnectionEvent.Connected, a, {
                            address: o,
                            port: l,
                            mode: this.chooseEncryptionMode(e.modes, i),
                            codecs: this.codecs
                        }), this.on(m.BaseConnectionEvent.Stats, this.handleStats);
                        let p = this.getUserOptions();
                        for (let e of (p.forEach(e => {
                                var t, n;
                                return this.logger.info("Creating user: ".concat(e.id, " with audio SSRC: ").concat(e.ssrc, " and video SSRCs: ").concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(",")) && void 0 !== n ? n : 0))
                            }), t.mergeUsers(p), this.emit(m.BaseConnectionEvent.RemoteStreamsReady, p.length), Object.keys(this.localSpeakingFlags))) e !== this.ids.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e])
                    })
                })
            })).setDesktopSourceStatusCallback) || void 0 === s || s.call(t, e => {
                if ("videohook_start" === e.type) this.emit(m.BaseConnectionEvent.VideoHookStart);
                else if ("videohook_stop" === e.type) this.emit(m.BaseConnectionEvent.VideoHookStop);
                else if ("videohook_initialize" === e.type) this.emit(m.BaseConnectionEvent.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
                else if ("screenshare_finish" === e.type) {
                    var t;
                    this.emit(m.BaseConnectionEvent.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames)
                } else "video_state" === e.type ? this.emit(m.BaseConnectionEvent.VideoState, e.state) : e.type.startsWith("soundshare_") && this.emit(m.BaseConnectionEvent.SoundshareTrace, e)
            }), this.on("newListener", this.handleNewListenerNative)
        }
        destroy() {
            this.conn.destroy(), Object.keys(this.localSpeakingFlags).filter(e => e !== this.ids.userId).forEach(e => this.emit(m.BaseConnectionEvent.Speaking, e, C.SpeakingFlags.NONE, this.remoteAudioSSRCs[e])), this.setConnectionState(C.ConnectionStates.DISCONNECTED), super.destroy()
        }
        setCodecs(e, t, n) {
            this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1)
        }
        getStats() {
            return this.connectionState === C.ConnectionStates.DISCONNECTED ? Promise.resolve(null) : (0, _.timeout)(new Promise(e => {
                if (null != this.conn.getFilteredStats) this.conn.getFilteredStats(A.StatsFilter.ALL, t => e((0, v.default)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                else if (null != this.conn.getStats) this.conn.getStats(t => e((0, v.default)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                else {
                    let t = (0, T.getVoiceEngine)();
                    t.getStats(t => e((0, v.default)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)))
                }
            }), h.STATS_INTERVAL).catch(e => {
                if (!(e instanceof _.TimeoutError)) throw e
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
            let r = i !== t,
                a = !u(s, n);
            if (this.remoteAudioSSRCs[e] = t, this.remoteVideoSSRCs[e] = null != n ? n : [], this.ids.userId !== e && (r || a)) {
                let i = void 0 !== n && n.length > 0 ? n[0] : 0,
                    s = {
                        id: e,
                        ssrc: t,
                        videoSsrc: i,
                        videoSsrcs: n,
                        rtxSsrc: N(i),
                        mute: this.getLocalMute(e),
                        volume: this.getLocalVolume(e)
                    };
                if (this.connectionState === C.ConnectionStates.CONNECTED) {
                    var o;
                    this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (o = null == n ? void 0 : n.join(",")) && void 0 !== o ? o : 0)), this.conn.mergeUsers([s])
                }
                let r = this.localPans[e];
                null != r && this.setLocalPan(e, r.left, r.right);
                let a = this.localSpeakingFlags[e];
                null != a && a !== C.SpeakingFlags.NONE && this.setSpeakingFlags(e, a)
            }
        }
        destroyUser(e) {
            null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e])
        }
        setSelfMute(e) {
            this.selfMute = e, this.conn.setSelfMute(e), this.emit(m.BaseConnectionEvent.Mute, e)
        }
        setSelfDeaf(e) {
            this.selfDeaf = e, this.conn.setSelfDeafen(e)
        }
        setSoundshareSource(e, t) {
            if (this.soundshareId === e && this.soundshareSentSpeakingEvent || this.context !== C.MediaEngineContextTypes.STREAM) return;
            this.soundshareId = e, this.soundshareSentSpeakingEvent = !1;
            let n = e;
            null === n && (n = 0), this.conn.setTransportOptions({
                soundsharePid: n,
                soundshareEventDriven: !0,
                soundshareLoopback: t
            })
        }
        setLocalMute(e, t) {
            this.localMutes[e] = t, this.conn.setLocalMute(e, t), this.emit(m.BaseConnectionEvent.LocalMute, e, t)
        }
        fastUdpReconnect() {
            null != this.conn.fastUdpReconnect && (this.numFastUdpReconnects += 1, this.conn.fastUdpReconnect())
        }
        getNumFastUdpReconnects() {
            return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null
        }
        wasRemoteDisconnected() {
            var e, t;
            null === (e = (t = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(t)
        }
        setLocalVideoDisabled(e, t) {
            this.disabledLocalVideos[e] = t, this.emit(m.BaseConnectionEvent.LocalVideoDisabled, e, t)
        }
        setMinimumJitterBufferLevel(e) {
            this.minimumJitterBufferLevel = e
        }
        setPostponeDecodeLevel(e) {
            this.postponeDecodeLevel = e
        }
        setClipRecordUser(e, t, n) {
            !this.destroyed && this.conn.setClipRecordUser(e, (this.context === C.MediaEngineContextTypes.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video"), n)
        }
        setClipsKeyFrameInterval(e) {
            this.context === C.MediaEngineContextTypes.STREAM && (this.clipsKeyFrameInterval = e, this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            }))
        }
        setViewerSideClip(e) {
            this.context === C.MediaEngineContextTypes.STREAM && this.conn.setTransportOptions({
                enableViewerSideClip: e
            })
        }
        setQualityDecoupling(e) {
            this.context === C.MediaEngineContextTypes.STREAM && this.conn.setTransportOptions({
                enableQualityDecoupling: e
            })
        }
        getLocalVolume(e) {
            var t;
            let n = this.localVolumes[e];
            return null == n && (n = this.context === C.MediaEngineContextTypes.DEFAULT ? C.DEFAULT_VOLUME : C.DEFAULT_STREAM_VOLUME), (null != (t = n) ? t : C.DEFAULT_VOLUME) / C.DEFAULT_VOLUME
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
            this.soundshareActive && (t = Math.max(C.DEFAULT_SOUNDSHARE_VOICE_BITRATE, t)), this.conn.setTransportOptions({
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
            this.echoCancellation = e, (0, T.getVoiceEngine)().setTransportOptions({
                echoCancellation: this.echoCancellation
            })
        }
        setNoiseSuppression(e) {
            this.noiseSuppression = e, (0, T.getVoiceEngine)().setTransportOptions({
                noiseSuppression: this.noiseSuppression
            })
        }
        setAutomaticGainControl(e) {
            this.automaticGainControl = e, (0, T.getVoiceEngine)().setTransportOptions({
                automaticGainControl: this.automaticGainControl
            })
        }
        setNoiseCancellation(e) {
            this.noiseCancellation = e, (0, T.getVoiceEngine)().setTransportOptions({
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
                case C.InputModes.PUSH_TO_TALK:
                    this.pttReleaseDelay = t.pttReleaseDelay;
                    break;
                case C.InputModes.VOICE_ACTIVITY:
                    this.vadThreshold = t.vadThreshold, this.vadAutoThreshold = t.vadAutoThreshold, this.vadUseKrisp = t.vadUseKrisp, this.vadLeading = t.vadLeading, this.vadTrailing = t.vadTrailing;
                    break;
                default:
                    throw Error("Unknown Input Mode: ".concat(e))
            }
            this.conn.setTransportOptions({
                inputMode: C.NATIVE_MODE_VALUES[this.inputMode],
                inputModeOptions: this.createInputModeOptions()
            })
        }
        setSilenceThreshold(e) {
            (0, T.getVoiceEngine)().setNoInputThreshold(e)
        }
        setForceAudioInput(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t ? this.forceAudioPriority = e : this.forceAudioNormal = e, this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority)
        }
        setSpeakingFlags(e, t) {
            null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & C.SpeakingFlags.VOICE) === C.SpeakingFlags.VOICE), this.handleSpeakingFlags(e, t)
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
                    let [c, _] = null != t ? t.split(":") : ["", ""];
                    null != t ? this.logger.info("capturing desktop (type: ".concat(c, ", handle: ").concat(_, ", use-video-hook: ").concat(s.toString(), ", use-graphics-capture: ").concat(null == r ? void 0 : r.toString(), ").")) : this.logger.info("capturing desktop (type: <stop>)."), null != this.conn.setDesktopSourceWithOptions ? null != t ? this.conn.setDesktopSourceWithOptions({
                        type: c,
                        sourceId: _,
                        useVideoHook: s,
                        useGraphicsCapture: r,
                        useQuartzCapturer: a,
                        allowScreenCaptureKit: o,
                        videoHookStaleFrameTimeoutMs: l,
                        graphicsCaptureStaleFrameTimeoutMs: u,
                        hdrCaptureMode: d
                    }) : this.conn.clearDesktopSource() : this.conn.setDesktopSource("wumpus-".concat(_), s, c)
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
            let i = 0 === t && n >= 10 || t > 720 || n > 30 ? A.DESKTOP_BITRATE_ENHANCED : A.DESKTOP_BITRATE,
                s = {
                    width: e,
                    height: t,
                    framerate: n
                },
                r = this.videoQualityManager.getQuality();
            (!g.VideoQuality.equals(s, r.capture) || r.bitrateMax !== i) && (this.videoQualityManager.setQuality({
                capture: s,
                bitrateMax: i
            }), this.videoStreamParameters.length > 0 && (this.videoStreamParameters[0].maxResolution = {
                type: 0 === e && 0 === t ? C.ResolutionTypes.SOURCE : C.ResolutionTypes.FIXED,
                width: e,
                height: t
            }, this.videoStreamParameters[0].maxFrameRate = n, this.videoStreamParameters[0].maxBitrate = i), this.emit(m.BaseConnectionEvent.Video, this.ids.userId, null, this.audioSSRC, this.videoStreamParameters[0].ssrc, N(this.videoStreamParameters[0].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints))
        }
        setSDP(e) {}
        setRemoteVideoSinkWants(e) {
            this.remoteVideoSinkWants = e, this.updateVideoQuality(A.MEDIA_SINK_WANTS_PROPERTIES)
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
                    !u(this.videoStreamParameters[i], e[i]) && (this.videoStreamParameters[i] = {
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
                e = (null === (t = this.videoStreamParameters[0].maxResolution) || void 0 === t ? void 0 : t.type) === C.ResolutionTypes.SOURCE
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
                    rtxSsrc: N(t),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e)
                }
            })
        }
        createInputModeOptions() {
            switch (this.inputMode) {
                case C.InputModes.VOICE_ACTIVITY:
                    return {
                        vadThreshold: this.vadThreshold, vadAutoThreshold: this.vadAutoThreshold ? S.VADAggressiveness.VERY_AGGRESSIVE : S.VADAggressiveness.DISABLED, vadUseKrisp: this.vadUseKrisp, vadLeading: this.vadLeading, vadTrailing: this.vadTrailing
                    };
                case C.InputModes.PUSH_TO_TALK:
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
            if (e !== C.Codecs.H264) return {};
            if (t) return {
                "level-asymmetry-allowed": "1",
                "packetization-mode": "1",
                "profile-level-id": "42e034",
                "hardware-h264": this.hardwareH264 && this.useElectronVideo && I.default.useDirectVideo ? "1" : "0"
            };
            {
                let e = "android" === (0, T.getVoiceEngine)().platform ? "42e01f" : "4d0033";
                return {
                    "level-asymmetry-allowed": "1",
                    "packetization-mode": "1",
                    "profile-level-id": e,
                    "hardware-h264": this.hardwareH264 && this.useElectronVideo && I.default.useDirectVideo ? "1" : "0"
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
            n === C.MediaEngineContextTypes.STREAM && (l.channels = 2);
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
                    name: (0, p.codecNameToPayloadName)(o.name),
                    type: null !== (r = null == o ? void 0 : o.payloadType) && void 0 !== r ? r : 0,
                    rtxType: null !== (a = null == o ? void 0 : o.rtxPayloadType) && void 0 !== a ? a : 0,
                    params: this.getCodecParams(o.name, !0)
                };
                d.push(n), o.name === t && (c = {
                    ...n,
                    params: this.getCodecParams(o.name, !1)
                }, this.experimentFlags.has(A.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL) && (c.params["fixed-rate-presentation-timestamps"] = "1"))
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
                inputMode: C.NATIVE_MODE_VALUES[this.inputMode],
                inputModeOptions: this.createInputModeOptions(),
                minimumJitterBufferLevel: this.minimumJitterBufferLevel,
                postponeDecodeLevel: this.postponeDecodeLevel,
                ...this.getAttenuationOptions(),
                fec: !0,
                packetLossRate: .3,
                qos: this.qos,
                prioritySpeakerDucking: C.DEFAULT_PRIORITY_SPEAKER_DUCKING,
                encodingVoiceBitRate: this.voiceBitrate,
                callBitRate: C.DEFAULT_CALL_BITRATE,
                callMinBitRate: C.DEFAULT_CALL_MIN_BITRATE,
                callMaxBitRate: C.DEFAULT_CALL_MAX_BITRATE,
                encodingVideoDegradationPreference: this.videoDegradationPreference,
                experimentalEncoders: this.experimentalEncoders,
                hardwareH264: this.hardwareH264,
                reconnectInterval: this.reconnectInterval,
                userChannelIds: this.ids
            };
            return (0, T.supportsFeature)(C.NativeFeatures.VIDEO_EFFECTS) && this.context === C.MediaEngineContextTypes.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(A.ExperimentFlags.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(A.ExperimentFlags.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(A.ExperimentFlags.SKIP_ENCODE) && (e.skipEncode = !0), e
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
            super(e, t), this.mediaEngineConnectionId = "Native-".concat(y++), this.selfMute = !1, this.selfVideo = !1, this.forceAudioNormal = !1, this.forceAudioPriority = !1, this.codecs = [], this.videoEncoderFallbackPending = !1, this.desktopDegradationPreference = (0, T.getVoiceEngine)().DegradationPreference.MAINTAIN_FRAMERATE, this.sourceDesktopDegradationPreference = (0, T.getVoiceEngine)().DegradationPreference.DISABLED, this.videoDegradationPreference = (0, T.getVoiceEngine)().DegradationPreference.BALANCED, this.localPans = {}, this.remoteAudioSSRCs = {}, this.remoteVideoSSRCs = {}, this.inputMode = C.InputModes.VOICE_ACTIVITY, this.vadThreshold = -40, this.vadAutoThreshold = !0, this.vadUseKrisp = !0, this.vadLeading = 5, this.vadTrailing = 25, this.pttReleaseDelay = 20, this.soundshareActive = !1, this.soundshareId = null, this.soundshareSentSpeakingEvent = !1, this.echoCancellation = !0, this.noiseSuppression = !0, this.automaticGainControl = !0, this.noiseCancellation = !1, this.experimentalEncoders = !1, this.hardwareH264 = !0, this.attenuationFactor = .5, this.attenuateWhileSpeakingSelf = !1, this.attenuateWhileSpeakingOthers = !0, this.qos = !0, this.minimumJitterBufferLevel = 0, this.postponeDecodeLevel = 100, this.reconnectInterval = 6e4, this.keyframeInterval = 0, this.clipsKeyFrameInterval = 0, this.videoQualityMeasurement = "", this.videoEncoderExperiments = "", this.numFastUdpReconnects = 0, this.handleSpeakingNative = (e, t) => {
                let n = C.SpeakingFlags.NONE;
                n = "boolean" == typeof t ? t ? C.SpeakingFlags.VOICE : C.SpeakingFlags.NONE : t, this.handleSpeakingFlags(e, n)
            }, this.handleNativeMuteToggled = () => {
                this.emit(m.BaseConnectionEvent.ToggleMuteFromNative)
            }, this.handleSpeakingFlags = (e, t) => {
                this.localSpeakingFlags[e] = t;
                let n = e === this.ids.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
                this.emit(m.BaseConnectionEvent.Speaking, e, t, n), (t & C.SpeakingFlags.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(m.BaseConnectionEvent.SoundshareSpeaking), this.soundshareSentSpeakingEvent = !0)
            }, this.handleSpeakingWhileMuted = () => {
                this.emit(m.BaseConnectionEvent.SpeakingWhileMuted)
            }, this.handlePing = (e, t, n) => {
                this.emit(m.BaseConnectionEvent.Ping, e)
            }, this.handlePingTimeout = (e, t, n, i) => {
                this.emit(m.BaseConnectionEvent.PingTimeout, n, i > 0 ? i : 4e3)
            }, this.handleVideoEncoderFallback = e => {
                !this.videoEncoderFallbackPending && (this.logger.info("Falling back from current video encoder:" + e), this.codecs = this.codecs.map(t => ((e === t.name || "AV1" === t.name && "AV1X" === e) && (t.encode = !1), t)).filter(e => !("video" === e.type && !1 === e.encode && !1 === e.decode)), this.emit(m.BaseConnectionEvent.VideoEncoderFallback, this.codecs), this.videoEncoderFallbackPending = !0)
            }, this.handleVideo = (e, t, n, i) => {
                let s = o(this.videoStreamParameters);
                e === this.ids.userId ? null != i && Array.isArray(i) && i.length > 0 ? i.forEach(e => {
                    s.forEach((t, n) => {
                        t.rid === e.rid && (s[n] = {
                            ...t,
                            ssrc: e.ssrc,
                            rtxSsrc: e.rtxSsrc,
                            active: e.active
                        })
                    })
                }) : t > 0 ? (s[0].active = !0, s[0].ssrc = t, s[0].rtxSsrc = N(t)) : s[0].active = !1 : t > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? !this.remoteVideoSSRCs[e].includes(t) && (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : this.remoteVideoSSRCs[e] = [t]), this.videoStreamParameters = s, this.emit(m.BaseConnectionEvent.Video, e, null != n && "" !== n ? n : null, e === this.ids.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, N(t), this.videoStreamParameters)
            }, this.handleFirstFrame = (e, t, n) => {
                this.emit(m.BaseConnectionEvent.FirstFrame, e, t, n)
            }, this.handleNoInput = e => {
                this.emit(m.BaseConnectionEvent.Silence, !e)
            }, this.handleDesktopSourceEnded = () => {
                this.emit(m.BaseConnectionEvent.DesktopSourceEnd)
            }, this.handleSoundshare = e => {
                e && (this.soundshareActive = !0, this.conn.setTransportOptions({
                    encodingVoiceBitRate: Math.max(C.DEFAULT_SOUNDSHARE_VOICE_BITRATE, this.voiceBitrate)
                }), this.emit(m.BaseConnectionEvent.SoundshareAttached))
            }, this.handleSoundshareFailed = (e, t, n) => {
                this.emit(m.BaseConnectionEvent.SoundshareFailed, {
                    failureCode: e,
                    failureReason: t,
                    willRetry: n
                })
            }, this.handleSoundshareEnded = () => {
                this.soundshareActive = !1, !this.destroyed && this.conn.setTransportOptions({
                    encodingVoiceBitRate: this.voiceBitrate
                })
            }, this.handleNewListenerNative = e => {
                if (e === m.BaseConnectionEvent.ConnectionStateChange) this.emit(e, this.connectionState)
            }, this.handleStats = e => {
                if (this.connectionState === C.ConnectionStates.DISCONNECTED) {
                    this.off(m.BaseConnectionEvent.Stats, this.handleStats);
                    return
                }
                if (null != e) {
                    if (null != this.stats) {
                        let t = c(e.rtp.outbound, (e, t) => {
                                var n, i;
                                return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0, e
                            }, {
                                lost: 0,
                                sent: 0
                            }),
                            n = c(this.stats.rtp.outbound, (e, t) => {
                                var n, i;
                                return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0, e
                            }, {
                                lost: 0,
                                sent: 0
                            }),
                            i = t.sent - n.sent,
                            s = t.lost - n.lost;
                        if (0 === i) this.emit(m.BaseConnectionEvent.OutboundLossRate, 0);
                        else if (i > 0 && s >= 0) {
                            let e = r(s / (i + s), 0, 1);
                            this.emit(m.BaseConnectionEvent.OutboundLossRate, 100 * e)
                        }
                        let a = e.rtp.outbound.filter(e => "audio" === e.type)[0],
                            o = this.stats.rtp.outbound.filter(e => "audio" === e.type)[0];
                        if (null != a && null != o && null != a.framesCaptured && null != o.framesCaptured) {
                            let e = a.framesCaptured - o.framesCaptured;
                            if (this.noiseCancellation && e > 50 && null != a.noiseCancellerProcessTime && null != o.noiseCancellerProcessTime) {
                                let t = a.noiseCancellerProcessTime - o.noiseCancellerProcessTime;
                                t / e > 8 ? this.emit(m.BaseConnectionEvent.NoiseCancellationError, C.NoiseCancellerError.CPU_OVERUSE) : 0 === t && this.emit(m.BaseConnectionEvent.NoiseCancellationError, C.NoiseCancellerError.FAILED)
                            }
                            if (this.inputMode === C.InputModes.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > 50 && null != a.voiceActivityDetectorProcessTime && null != o.voiceActivityDetectorProcessTime) {
                                let t = a.voiceActivityDetectorProcessTime - o.voiceActivityDetectorProcessTime;
                                t / e > 4 && this.emit(m.BaseConnectionEvent.VoiceActivityDetectorError, C.NoiseCancellerError.VAD_CPU_OVERUSE)
                            }
                        }
                    }
                    this.stats = e
                }
            }, this.logger = new f.Logger("Connection(".concat(e, ")")), this.videoSupported = n
        }
    }
}