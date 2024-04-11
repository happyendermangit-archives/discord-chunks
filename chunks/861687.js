function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return et
        }
    }), n("411104"), n("724458"), n("653041"), n("47120");
    var i, r = n("654861"),
        s = n.n(r),
        a = n("505578"),
        o = n.n(a),
        l = n("729594"),
        u = n("153832"),
        d = n("261470"),
        _ = n("47770"),
        c = n("46973"),
        E = n("379649"),
        I = n("570140"),
        T = n("846027"),
        f = n("304680"),
        S = n("44744"),
        A = n("710845"),
        h = n("811660"),
        m = n("42352"),
        N = n("227196"),
        O = n("926951"),
        p = n("868616"),
        R = n("848886"),
        C = n("583215"),
        g = n("576574"),
        L = n("307320"),
        D = n("420363"),
        v = n("794269");
    n("527702");
    var M = n("214890"),
        y = n("592125"),
        P = n("131951"),
        U = n("19780"),
        b = n("226961"),
        G = n("936349"),
        w = n("626135"),
        k = n("931619"),
        B = n("358085"),
        V = n("579806"),
        F = n("859401"),
        x = n("437263"),
        H = n("423343"),
        Y = n("685756"),
        j = n("655306"),
        W = n("583794"),
        K = n("824096"),
        z = n("53114"),
        X = n("174532"),
        Q = n("895066"),
        q = n("981631"),
        J = n("65154");

    function Z(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let $ = /^https/.test((i = "https:", "https:")) ? "wss:" : "ws:";

    function ee(e) {
        return e
    }
    class et extends _.default {
        get quality() {
            let e = this.getLastPing();
            if (this.state !== q.RTCConnectionStates.RTC_CONNECTED || void 0 === e) return q.RTCConnectionQuality.UNKNOWN;
            if (e > 500 || null != this._outboundLossRate && this._outboundLossRate > 10) return q.RTCConnectionQuality.BAD;
            if (e > 250 || null != this._outboundLossRate && this._outboundLossRate > 5) return q.RTCConnectionQuality.AVERAGE;
            else return q.RTCConnectionQuality.FINE
        }
        get endpoint() {
            return this._endpoint
        }
        set endpoint(e) {
            if (null == e) this._endpoint = null, this.hostname = null;
            else {
                e = "".concat($, "//").concat(e);
                let {
                    hostname: t,
                    port: n
                } = l.parse(e), i = null != n ? parseInt(n) : NaN;
                null != t && (80 === i || 443 === i) && (e = "".concat($, "//").concat(t)), this._endpoint = e + "/", this.hostname = t
            }
        }
        connect(e, t) {
            if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
            this._backoff.cancel();
            let {
                endpoint: n,
                token: i
            } = this;
            if (this.endpoint = e, this.token = t, (n !== this.endpoint || i !== t) && (this._cleanupSocket(), this._mediaSessionId = null, null != n && (this._rtcConnectionId = (0, u.v4)(), I.default.dispatch({
                    type: "RTC_CONNECTION_UPDATE_ID",
                    connection: this
                }))), null == this.endpoint) {
                this.setState(q.RTCConnectionStates.AWAITING_ENDPOINT);
                return
            }
            let r = this._socket;
            null != r && this._cleanupSocket(), (r = this._socket = new Y.default(this.endpoint)).on(Y.SocketEvent.Connecting, this._handleConnecting.bind(this, r)), r.on(Y.SocketEvent.Connect, this._handleConnect.bind(this, r)), r.on(Y.SocketEvent.Disconnect, this._handleDisconnect.bind(this, r)), r.on(Y.SocketEvent.Resuming, this._handleResuming.bind(this, r)), r.on(Y.SocketEvent.Ready, this._handleReady.bind(this, r)), r.on(Y.SocketEvent.Speaking, this._handleSpeaking.bind(this, r)), r.on(Y.SocketEvent.Video, this._handleVideo.bind(this, r)), r.on(Y.SocketEvent.Ping, this._handleControlPing.bind(this)), r.on(Y.SocketEvent.ClientDisconnect, this._handleClientDisconnect.bind(this)), r.on(Y.SocketEvent.Codecs, this._handleCodecs.bind(this)), r.on(Y.SocketEvent.MediaSessionId, this._handleMediaSessionId.bind(this)), r.on(Y.SocketEvent.MediaSinkWants, this._handleMediaSinkWants.bind(this)), r.on(Y.SocketEvent.VoiceBackendVersion, this._handleCodeVersion.bind(this)), r.on(Y.SocketEvent.KeyframeInterval, this._handleKeyframeInterval.bind(this)), r.on(Y.SocketEvent.Flags, this.handleFlags.bind(this)), r.on(Y.SocketEvent.Platform, this.handlePlatform.bind(this)), r.on(Y.SocketEvent.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), r.on(Y.SocketEvent.SecureFramesInit, this._handleSecureFramesInit.bind(this)), r.on(Y.SocketEvent.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), r.on(Y.SocketEvent.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), r.on(Y.SocketEvent.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), r.on(Y.SocketEvent.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), r.on(Y.SocketEvent.MLSProposals, this._handleMLSProposals.bind(this, r)), r.on(Y.SocketEvent.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), r.on(Y.SocketEvent.MLSWelcome, this._handleMLSWelcome.bind(this)), this._connectStartTime = (0, E.now)(), this._connectCount++, this._connecting = !0, null != r && this._socket === r && (this._trackVoiceConnectionConnecting(), this._encountered_socket_failure = !1, r.connect())
        }
        destroy() {
            var e, t, n, i, r;
            if (this.logger.info("Destroy RTCConnection"), k.default.removeOnlineCallback(this._handleNetworkOnline), k.default.removeOfflineCallback(this._handleNetworkOffline), (0, B.isDesktop)() && (null === (r = this.powerMonitorListener) || void 0 === r || r.call(this)), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, null === (t = this._voiceDuration) || void 0 === t || t.stop(), this._voiceDuration = null, null === (n = this._videoQuality) || void 0 === n || n.stop(), this._videoQuality = null, this._videoHealthManager = null, null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.reset(), null != this._connection) {
                let e = this._connection;
                this._connection = null, e.destroy()
            }
            this.removeAllListeners(), this._destroyed = !0
        }
        sendSpeaking(e, t) {
            let n = this._socket;
            if (null != n) {
                let i = P.default.getPacketDelay();
                n.speaking(e, i, t)
            }
        }
        sendVideo(e, t, n, i) {
            let r = this._socket;
            null != r && (0 !== t && (this._sentVideo = !0), this._sentVideo && r.video(e, t, n, i))
        }
        getPings() {
            return this._pings
        }
        getAveragePing() {
            let e = this._pings.slice(0, Math.min(this._pings.length, 20));
            return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length
        }
        getLastPing() {
            var e;
            return null === (e = this._pings[this._pings.length - 1]) || void 0 === e ? void 0 : e.value
        }
        getOutboundLossRate() {
            return this._outboundLossRate
        }
        getMediaSessionId() {
            return this._mediaSessionId
        }
        getRTCConnectionId() {
            return this._rtcConnectionId
        }
        getVoiceVersion() {
            return this.voiceVersion
        }
        getRtcWorkerVersion() {
            return this.rtcWorkerVersion
        }
        getDuration() {
            let e = this._connectCompletedTime > 0 ? (0, E.now)() - this._connectCompletedTime : 0;
            return e > 0 ? e : 0
        }
        getPacketStats() {
            var e;
            return null === (e = this._voiceQuality) || void 0 === e ? void 0 : e.getPacketStats()
        }
        getCreatedTime() {
            return this._createdTime
        }
        getVideoHealthManager() {
            return this._videoHealthManager
        }
        getBandwidthEstimationExperiment() {
            return this._bandwidthEstimationExperiment
        }
        pauseStatsCollectionForUser(e, t) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) {
                this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
                return
            }
            t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e)
        }
        setState(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.stateHistory.update(this.state), this.emit(x.RTCConnectionEvent.State, e, {
                hostname: this.hostname,
                channelId: this.trueChannelId,
                context: this.context
            }, t)
        }
        expeditedHeartbeat(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = this._socket;
            null != i && i.expeditedHeartbeat(e, t, n) && this._backoff.cancel()
        }
        resetBackoff() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = this._socket;
            null != t && t.resetBackoff(e) && this._backoff.cancel()
        }
        setAppBackgrounded(e, t) {
            var n;
            null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setAppBackgrounded(e, t)
        }
        setSelectedParticipant(e) {
            var t;
            null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setSelectedParticipant(e)
        }
        setPipOpen(e) {
            var t;
            null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setPipOpen(e)
        }
        setClipRecordUser(e, t, n) {
            var i;
            null === (i = this._connection) || void 0 === i || i.setClipRecordUser(e, t, n)
        }
        set channelId(e) {
            this._channelId = e, this.channelIds.add(e)
        }
        get channelId() {
            return this._channelId
        }
        get trueChannelId() {
            return null != this.rtcServerId ? s()(this.rtcServerId).prev().toString() : this.channelId
        }
        _cleanupSocket() {
            let e = this._socket;
            null != e && (e.close(), e.removeAllListeners(), this._socket = null)
        }
        _chooseExperiments(e) {
            let t = [];
            if (this._recordingEnabled && t.push("connection_log"), null != this.guildId) {
                let {
                    shouldOverrideKrisp: e,
                    overrideKrispSetting: n
                } = p.default.getCurrentConfig({
                    guildId: this.guildId,
                    location: "handleReady"
                }, {
                    autoTrackExposure: !0
                });
                e && (n ? t.push("force_krisp_enabled") : t.push("force_krisp_disabled"))
            }
            if (P.default.supports(J.Features.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"), 0 !== this._supportedBandwidthEstimationExperiments.length) {
                let {
                    enabled: e,
                    fullname: n
                } = O.default.getConfig(!0, this._supportedBandwidthEstimationExperiments);
                e && t.push(n)
            }
            this._selectedExperiments = t
        }
        _handleConnecting(e) {
            null != this.endpoint && this.logger.info("Connecting to RTC server ".concat(this.endpoint, ", rtc-connection-id: ").concat(this.getRTCConnectionId())), this.setState(q.RTCConnectionStates.CONNECTING)
        }
        _handleConnect(e) {
            var t, n;
            let i = this.token;
            if (null == i) throw Error("RTCConnection._handleConnect(...): Token is missing.");
            this.logger.info("Connected to RTC server."), e.identify({
                serverId: null !== (n = null !== (t = this.rtcServerId) && void 0 !== t ? t : this.guildId) && void 0 !== n ? n : this.channelId,
                userId: this.userId,
                sessionId: this.sessionId,
                token: i,
                maxSecureFramesVersion: P.default.getSupportedSecureFramesProtocolVersion(this.guildId),
                video: P.default.supports(J.Features.VIDEO),
                streamParameters: P.default.getVideoStreamParameters(this.context)
            }), this.setState(q.RTCConnectionStates.AUTHENTICATING)
        }
        _handleDisconnect(e, t, n, i) {
            var r, s, a, o, l, u;
            this.logger.info("Disconnected from RTC server, clean: ".concat(t, ", code: ").concat(n, ", reason: ").concat(i, ", state: ").concat(this.state)), !t && this._connecting && !this._encountered_socket_failure && (w.default.track(q.AnalyticEvents.VOICE_CONNECTION_SOCKET_FAILURE, {
                ...this._getAnalyticsProperties(),
                hostname: this.hostname,
                connect_count: this._connectCount,
                code: n,
                reason: i
            }), this._encountered_socket_failure = !0), U.default.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (l = this._connection) || void 0 === l || l.wasRemoteDisconnected());
            let d = "Force Close" !== i;
            if (d) {
                let e = this._backoff.fail(this.reconnect);
                this.logger.warn("Disconnect was not clean! reason=".concat(i, ". Reconnecting in ").concat((e / 1e3).toFixed(2), " seconds."))
            }
            if (this.state !== q.RTCConnectionStates.DISCONNECTED) {
                let e = this._videoQuality;
                null != e && this.context === J.MediaEngineContextTypes.DEFAULT && (e.stop(), this._sentVideo && e.getOutboundStats().forEach(t => {
                    var n;
                    (null !== (n = t.num_frames) && void 0 !== n ? n : 0) > 0 && w.default.track(q.AnalyticEvents.VIDEO_STREAM_ENDED, {
                        ...this._getAnalyticsProperties(),
                        media_session_id: this.getMediaSessionId(),
                        sender_user_id: this.userId,
                        reason: i,
                        participant_type: "sender",
                        guild_region: G.default.getRegion(this.hostname),
                        hostname: this.hostname,
                        hardware_enabled: P.default.getHardwareH264(),
                        ...t,
                        ...e.getNetworkStats(),
                        ...e.getCodecUsageStats("sender", this.userId),
                        ...this._soundshareStats.getStats(),
                        device_performance_class: (0, h.getMediaPerformanceClass)()
                    })
                }), e.getInboundParticipants().forEach(t => {
                    var n;
                    let r = e.getInboundStats(t);
                    (null !== (n = null == r ? void 0 : r.num_frames) && void 0 !== n ? n : 0) > 0 && w.default.track(q.AnalyticEvents.VIDEO_STREAM_ENDED, {
                        ...this._getAnalyticsProperties(),
                        media_session_id: this.getMediaSessionId(),
                        sender_user_id: t,
                        reason: i,
                        participant_type: "receiver",
                        guild_region: G.default.getRegion(this.hostname),
                        hostname: this.hostname,
                        hardware_enabled: P.default.getHardwareH264(),
                        ...r,
                        ...e.getNetworkStats(),
                        ...e.getCodecUsageStats("receiver", t)
                    })
                }));
                let t = G.default.shouldIncludePreferredRegion() ? G.default.getPreferredRegion() : null,
                    n = P.default.getSettings(),
                    r = y.default.getChannel(this.channelId);
                w.default.track(q.AnalyticEvents.VOICE_DISCONNECT, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    port: this.port,
                    protocol: this.protocol,
                    reconnect: d,
                    reason: i,
                    duration: this.getDuration(),
                    ...null != this._voiceQuality ? this._voiceQuality.getMosStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getPacketStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getBytesStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getBufferStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getNetworkStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getSystemResourceStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getFrameOpStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getDurationStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getTransportStats() : null,
                    ...null != this._voiceQuality ? this._voiceQuality.getE2EEStats() : null,
                    ...null != this._voiceDuration ? this._voiceDuration.getDurationStats() : null,
                    media_session_id: this.getMediaSessionId(),
                    channel_bitrate: null != r ? r.bitrate : null,
                    cloudflare_best_region: t,
                    connect_count: this._connectCount,
                    ping_average: Math.round(this.getAveragePing()),
                    ping_bad_count: this._pingBadCount,
                    ping_timeout: this._pingTimeouts.length,
                    input_detected: this._inputDetected,
                    no_input_detected_notice: P.default.getNoInputDetectedNotice(),
                    audio_input_mode: n.mode,
                    automatic_audio_input_sensitivity_enabled: n.modeOptions.autoThreshold,
                    audio_input_sensitivity: n.modeOptions.threshold,
                    echo_cancellation_enabled: n.echoCancellation,
                    noise_suppression_enabled: n.noiseSuppression,
                    noise_cancellation_enabled: n.noiseCancellation,
                    noise_canceller_error: this._noiseCancellationError,
                    automatic_gain_control_enabled: n.automaticGainControl,
                    voice_output_volume: n.outputVolume,
                    encryption_mode: this._encryptionMode,
                    channel_count: this.channelIds.size,
                    input_device: this.getInputDeviceName(),
                    output_device: this.getOutputDeviceName(),
                    device_performance_class: (0, h.getMediaPerformanceClass)(),
                    num_fast_udp_reconnects: null != this._connection ? null === (u = this._connection) || void 0 === u ? void 0 : u.getNumFastUdpReconnects() : null,
                    parent_media_session_id: this.parentMediaSessionId
                });
                let s = this.getMediaSessionId();
                P.default.getMediaEngine().getCodecSurvey().then(e => {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_encoders || null == t.available_video_decoders) throw Error("codec survey is not available");
                    w.default.track(q.AnalyticEvents.VOICE_CODEC_DETECTED, {
                        ...t,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: s
                    })
                }).catch(e => {
                    this.logger.warn(e)
                })
            }
            if (this._pingTimeouts = [], this._pings = [], this._connectCompletedTime = 0, this._pingBadCount = 0, this._inputDetected = !1, this._mediaSessionId = null, null === (r = this._voiceQuality) || void 0 === r || r.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, null === (s = this._voiceDuration) || void 0 === s || s.stop(), this._voiceDuration = null, null === (a = this._videoQuality) || void 0 === a || a.stop(), this._videoQuality = null, this._videoHealthManager = null, null === (o = this._localMediaSinkWantsManager) || void 0 === o || o.reset(), null != this._connection) {
                let e = this._connection;
                this._connection = null, e.destroy()
            }
            this.setState(q.RTCConnectionStates.DISCONNECTED, {
                willReconnect: d
            })
        }
        _handleResuming(e) {
            var t, n;
            null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking()
        }
        _handleReady(e, t, n, i, r, s, a) {
            this.setState(q.RTCConnectionStates.RTC_CONNECTING), this.port = n, null != a && this._chooseExperiments(a), 0 === s.length && s.push({
                type: J.MediaTypes.VIDEO,
                rid: "100",
                ssrc: r + 1,
                rtxSsrc: r + 2,
                quality: 100,
                active: !1
            });
            let o = P.default.getMediaEngine(),
                l = o.connect(this.context, this.userId, {
                    ssrc: r,
                    address: t,
                    port: n,
                    modes: i,
                    experiments: this._selectedExperiments,
                    streamParameters: s,
                    qosEnabled: P.default.getQoS(),
                    ...this._getExtraConnectionOptions()
                });
            if (l.setUseElectronVideo(o.supports(J.Features.ELECTRON_VIDEO)), P.default.supports(J.Features.IMAGE_QUALITY_MEASUREMENT)) {
                let {
                    enabled: e,
                    measurement: t
                } = D.default.getConfig(!0), {
                    extraOptions: n
                } = v.default.getCurrentConfig({
                    location: "handleReady"
                }, {
                    autoTrackExposure: !0
                });
                e && l.setVideoQualityMeasurement(t + n)
            }
            let u = ["unk"];
            if (P.default.supports(J.Features.AMD_EXPERIMENTAL_RATE_CONTROL) && u.push("amdRelaxRc"), this.context === J.MediaEngineContextTypes.STREAM) {
                let {
                    nvMediumVbvSizeMs: e
                } = g.default.getCurrentConfig({
                    location: "handleReady"
                }, {
                    autoTrackExposure: !0
                });
                if (e > 0) {
                    u.push("nvRelaxRc=" + e);
                    let {
                        nvEnableNewPresets: t
                    } = C.default.getCurrentConfig({
                        location: "handleReady"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && u.push("nvNewPresets")
                }
                if (null != this.guildId) {
                    let {
                        enableAdaptiveKeyFrame: e
                    } = R.default.getCurrentConfig({
                        guildId: this.guildId,
                        location: "handleReady"
                    }, {
                        autoTrackExposure: !0
                    });
                    e && u.push("nvencAdaptiveIDR")
                }
            }
            l.setVideoEncoderExperiments(u.join(",")), l.on(c.BaseConnectionEvent.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(x.RTCConnectionEvent.Speaking, e, t)
            }), l.on(c.BaseConnectionEvent.ToggleMuteFromNative, () => {
                let {
                    airpodsMuteSupported: e
                } = N.default.getCurrentConfig({
                    location: "RTCConnection ToggleMuteFromNative"
                }, {
                    autoTrackExposure: !0
                });
                e && this.context === J.MediaEngineContextTypes.DEFAULT && T.default.toggleSelfMute({
                    playSoundEffect: !1
                })
            }), l.on(c.BaseConnectionEvent.NativeMuteChanged, e => {
                S.default.nativeMuteChanged(this.context, e)
            }), l.on(c.BaseConnectionEvent.Video, (e, t, n, i, r, s) => {
                this._handleVideoStreamId({
                    userId: e,
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: null != i ? i : 0,
                    rtxSsrc: r,
                    videoStreamParameters: s
                }), this.userId === e && (this.sendVideo(null != n ? n : 0, null != i ? i : 0, null != r ? r : 0, s), null == s || s.forEach(t => {
                    if (100 === t.quality) this.emit(x.RTCConnectionEvent.VideoSourceQualityChanged, this.guildId, this.channelId, e, t.maxResolution, t.maxFrameRate, this.context)
                }))
            }), l.on(c.BaseConnectionEvent.FirstFrame, (e, t, n) => {
                if (null != this._localMediaSinkWantsManager) this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(x.RTCConnectionEvent.Video, this.guildId, this.channelId, e, n, this.rtcServerId)
            }), l.on(c.BaseConnectionEvent.Silence, e => {
                this._inputDetected = this._inputDetected || !e
            }), l.on(c.BaseConnectionEvent.Connected, (i, r) => {
                if (this.logger.info("RTC connected to media server: ".concat(t, ":").concat(n)), e !== this._socket) {
                    this.logger.warn("Socket mismatch, disconnecting");
                    return
                }
                switch (this._voiceQuality = new Q.default(l), this._voiceQuality.start(), this._voiceQualityPeriodicStatsSequenceId = 0, this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 3e5), this._noiseCancellationError = 0, this._voiceDuration = new X.default(this.userId, l), this._voiceDuration.start(), this.protocol = i, i) {
                    case "udp":
                        this.logger.info("Sending UDP info to RTC server.", r, this._selectedExperiments), e.once(Y.SocketEvent.Encryption, (e, t) => {
                            l === this._connection && (l.setEncryption(e, t), this._encryptionMode = e)
                        }), e.selectProtocol(i, this.getRTCConnectionId(), r, this._selectedExperiments);
                        break;
                    case "webrtc":
                        this.logger.info("Sending local SDP to RTC server."), e.once(Y.SocketEvent.SDP, this._handleSDP.bind(this)), e.selectProtocol(i, this.getRTCConnectionId(), r);
                        break;
                    default:
                        this.logger.error("Unable to determine protocol.");
                        return
                }
                this._backoff.succeed()
            }), l.on(c.BaseConnectionEvent.VideoEncoderFallback, t => {
                let n = t.filter(e => "video" === e.type).map(e => e.name).join(",");
                this.logger.info("The originally selected video encoder is not working, fallback to the other available encoders:" + n), e.updateSession({
                    codecs: t
                })
            }), l.on(c.BaseConnectionEvent.Error, t => {
                if (e !== this._socket) return;
                let n = G.default.shouldIncludePreferredRegion() ? G.default.getPreferredRegion() : null;
                this.logger.error("Error occurred while connecting to RTC server: ".concat(t)), w.default.track(q.AnalyticEvents.VOICE_CONNECTION_FAILURE, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    port: this.port,
                    protocol: this.protocol,
                    error: t,
                    cloudflare_best_region: n,
                    connect_count: this._connectCount
                })
            }), l.on(c.BaseConnectionEvent.ConnectionStateChange, t => {
                if (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(t)), e !== this._socket) return;
                let n = this.state;
                switch (t) {
                    case J.ConnectionStates.DISCONNECTED:
                        this.setState(q.RTCConnectionStates.RTC_DISCONNECTED);
                        break;
                    case J.ConnectionStates.CONNECTING:
                        this.setState(q.RTCConnectionStates.RTC_CONNECTING);
                        break;
                    case J.ConnectionStates.CONNECTED:
                        this.setState(q.RTCConnectionStates.RTC_CONNECTED);
                        break;
                    case J.ConnectionStates.NO_ROUTE:
                        this.setState(q.RTCConnectionStates.NO_ROUTE);
                        break;
                    case J.ConnectionStates.ICE_CHECKING:
                        this.setState(q.RTCConnectionStates.ICE_CHECKING);
                        break;
                    case J.ConnectionStates.DTLS_CONNECTING:
                        this.setState(q.RTCConnectionStates.DTLS_CONNECTING)
                }
                if (n === q.RTCConnectionStates.RTC_CONNECTING && this.state === q.RTCConnectionStates.RTC_DISCONNECTED ? this.reconnect() : this.state === q.RTCConnectionStates.NO_ROUTE && this._backoff.fail(this.reconnect), this.state === q.RTCConnectionStates.RTC_CONNECTED) {
                    var i;
                    let e = G.default.shouldIncludePreferredRegion() ? G.default.getPreferredRegion() : null;
                    this._connecting && w.default.track(q.AnalyticEvents.VOICE_CONNECTION_SUCCESS, {
                        ...this._getAnalyticsProperties(),
                        hostname: this.hostname,
                        port: this.port,
                        protocol: this.protocol,
                        cloudflare_best_region: e,
                        connect_time: (0, E.now)() - (this._connected ? this._connectStartTime : this._createdTime),
                        connect_count: this._connectCount,
                        audio_subsystem: P.default.getMediaEngine().getAudioSubsystem(),
                        audio_layer: P.default.getMediaEngine().getAudioLayer(),
                        media_session_id: this.getMediaSessionId(),
                        ...this.stateHistory.getVoiceConnectionSuccessStats()
                    }), null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setConnection(l), this._connectCompletedTime = (0, E.now)(), this._connected = !0, this._connecting = !1, this._encountered_socket_failure = !1
                } else n === q.RTCConnectionStates.RTC_CONNECTED && this.stateHistory.reset(this.state)
            }), l.on(c.BaseConnectionEvent.Ping, this._handlePing.bind(this)), l.on(c.BaseConnectionEvent.PingTimeout, this._handlePingTimeout.bind(this)), l.on(c.BaseConnectionEvent.OutboundLossRate, this._handleOutboundLossRate.bind(this)), l.on(c.BaseConnectionEvent.SoundshareTrace, this._handleSoundshareTrace.bind(this)), l.on(c.BaseConnectionEvent.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)), l.on(c.BaseConnectionEvent.Stats, F.default.create()), l.on(c.BaseConnectionEvent.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)), l.on(c.BaseConnectionEvent.NoiseCancellationError, e => {
                this._noiseCancellationError = e
            }), l.setRemoteVideoSinkWants(this._remoteVideoSinkWants), this._connection = l
        }
        _handleSpeaking(e, t, n, i) {
            let r = this._connection;
            if (null != r && this.userId !== t) {
                var s;
                i !== J.SpeakingFlags.NONE && (r.createUser(t, n), I.default.dispatch({
                    type: "RTC_CONNECTION_USER_CREATE",
                    userId: t,
                    context: this.context
                })), null === (s = this._localMediaSinkWantsManager) || void 0 === s || s.setAudioSSRC(t, n)
            }
        }
        handleFlags(e, t) {
            this.emit(x.RTCConnectionEvent.Flags, e, t)
        }
        handlePlatform(e, t) {
            this.emit(x.RTCConnectionEvent.Platform, e, t, this.channelId)
        }
        getOrCreateVideoQuality() {
            if (null != this._connection && null == this._videoQuality) {
                this._videoQuality = new z.VideoQuality(this._connection), this._videoQuality.start();
                let {
                    featureEnabled: e,
                    windowLength: t,
                    allowedPoorFpsRatio: n,
                    fpsThreshold: i,
                    backoffTimeSec: r
                } = L.default.getConfig(!0);
                if (e) {
                    this._videoHealthManager = new K.VideoHealthManager(t, n, i, r), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                    this._videoQuality.on(z.VideoQualityEvent.FpsUpdate, (e, t, n) => {
                        var i, r;
                        (null === (i = this._localMediaSinkWantsManager) || void 0 === i ? void 0 : i.shouldReceiveFromUser(e)) && (null === (r = this._videoHealthManager) || void 0 === r || r.updateFps(e, t, n))
                    })
                }
            }
            return this._videoQuality
        }
        _handleVideoStreamId(e) {
            var t, n, i, r;
            let {
                userId: s,
                streamId: a,
                videoSsrc: o,
                videoStreamParameters: l
            } = e;
            if (this.emit(x.RTCConnectionEvent.Video, this.guildId, this.channelId, s, a, this.rtcServerId), null != a && null == this.getOrCreateVideoQuality() && this.logger.error("_handleVideoStreamId: Unable to create videoQuality."), null != this._videoQuality && this.userId === s && l.forEach(e => {
                    var t, n;
                    let i = null !== (t = e.ssrc) && void 0 !== t ? t : 0;
                    i > 0 && !0 === e.active && (null === (n = this._videoQuality) || void 0 === n || n.setOutboundSsrc(i))
                }), this.userId !== s) {
                let e = 0 === o && null === a;
                (!e || e && (null === (t = this._videoQuality) || void 0 === t ? void 0 : t.getInboundParticipants().includes(s))) && (null === (n = this._videoQuality) || void 0 === n || n.setInboundUser(s, o), null === (i = this._videoHealthManager) || void 0 === i || i.createUser(s))
            }
            null != this._connection && this.userId !== s && (null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setStreamId(s, a))
        }
        _handleLocalVideoDisabled(e, t) {
            if (this.userId !== e) {
                let n = this.getOrCreateVideoQuality();
                if (null == n) {
                    this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
                    return
                }
                n.setUserVideoDisabled(e, t)
            }
        }
        _handleRemoteStreamsReady(e) {
            let t = (0, E.now)() - this._connectStartTime;
            w.default.track(q.AnalyticEvents.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
                ...this._getAnalyticsProperties(),
                number_of_users: e,
                duration_ms: t
            })
        }
        _handleVideo(e, t, n, i, r) {
            let s = this._connection;
            if (null != s && this.userId !== t) {
                if (null != this._localMediaSinkWantsManager) {
                    this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                    let e = r.map(e => ({
                        type: J.MediaTypes.VIDEO,
                        rid: e.rid,
                        ssrc: e.ssrc,
                        rtxSsrc: e.rtxSsrc,
                        quality: e.quality,
                        active: i > 0
                    }));
                    0 === e.length && e.push({
                        type: J.MediaTypes.VIDEO,
                        rid: "100",
                        ssrc: i,
                        rtxSsrc: i + 1,
                        quality: 100,
                        active: i > 0
                    }), this._localMediaSinkWantsManager.setVideoSSRCs(t, e)
                } else s.createUser(t, n, [i]);
                null == r || r.forEach(e => {
                    100 === e.quality && this.emit(x.RTCConnectionEvent.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context)
                })
            }
        }
        _handleControlPing(e) {
            !P.default.supports(J.Features.NATIVE_PING) && this._handlePing(e)
        }
        _handlePing(e) {
            if (void 0 !== e) {
                for (this._pings.push({
                        time: Date.now(),
                        value: e
                    }); this._pings.length >= 200;) this._pings.shift();
                e > 500 && this._pingBadCount++, this.emit(x.RTCConnectionEvent.Ping, this._pings, this.quality)
            }
        }
        _handlePingTimeout(e, t) {
            this._pingTimeouts.push(e);
            let n = this._pingTimeouts.length;
            n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t)
        }
        _handleOutboundLossRate(e) {
            this._outboundLossRate = e, this.emit(x.RTCConnectionEvent.OutboundLossRate, e)
        }
        _handleSoundshareTrace(e) {
            this._soundshareStats.traceEvent(void 0, e)
        }
        _getAnalyticsProperties() {
            let e = y.default.getChannel(this.channelId),
                t = null != e ? e.type : null;
            return {
                guild_id: this.guildId,
                channel_id: this.channelId,
                channel_type: t,
                rtc_connection_id: this.getRTCConnectionId(),
                context: this.context,
                voice_backend_version: this.voiceVersion,
                rtc_worker_backend_version: this.rtcWorkerVersion
            }
        }
        _handleClientDisconnect(e) {
            var t, n, i;
            let r = this._videoQuality;
            if (null != r && this.context === J.MediaEngineContextTypes.DEFAULT) {
                let t = r.getInboundStats(e),
                    s = null !== (n = null == t ? void 0 : t.num_frames) && void 0 !== n ? n : 0;
                null != t && s > 0 && (w.default.track(q.AnalyticEvents.VIDEO_STREAM_ENDED, {
                    ...this._getAnalyticsProperties(),
                    media_session_id: this.getMediaSessionId(),
                    sender_user_id: e,
                    reason: "User disconnected",
                    participant_type: "receiver",
                    guild_region: G.default.getRegion(this.hostname),
                    hostname: this.hostname,
                    hardware_enabled: P.default.getHardwareH264(),
                    ...t,
                    ...r.getNetworkStats(),
                    ...r.getCodecUsageStats("receiver", e)
                }), r.destroyUser(e), null === (i = this._videoHealthManager) || void 0 === i || i.deleteUser(e))
            }
            let s = this._connection;
            null != s && s.destroyUser(e), null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.destroyUser(e)
        }
        _handleCodecs(e, t) {
            let n = this._connection;
            null != n && null != this.protocol ? n.setCodecs(null != e && "" !== e ? e : J.Codecs.OPUS, null != t && "" !== t ? t : J.Codecs.H264, this.context) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
        }
        _handleSDP(e) {
            let t = this._connection;
            null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
        }
        async _handleMediaSessionId(e) {
            this._mediaSessionId = e, this.logger.info("Setting media-session-id: ".concat(e, " for rtc-connection-id: ").concat(this.getRTCConnectionId()));
            let t = await (0, m.default)();
            w.default.track(q.AnalyticEvents.MEDIA_SESSION_JOINED, {
                ...this._getAnalyticsProperties(),
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                raw_thermal_state: t
            }), I.default.dispatch({
                type: "MEDIA_SESSION_JOINED",
                mediaSessionId: this.getMediaSessionId(),
                context: this.context
            })
        }
        _handleMediaSinkWants(e) {
            let t = this._connection;
            this.logger.info("Remote media sink wants: ".concat(JSON.stringify(e))), this._remoteVideoSinkWants = e, null == t || t.setRemoteVideoSinkWants(e)
        }
        _handleCodeVersion(e, t) {
            this.voiceVersion = e, this.rtcWorkerVersion = t
        }
        _handleKeyframeInterval(e) {
            let t = this._connection;
            null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn("Cannot set keyframe interval on connection with protocol:", this.protocol)
        }
        _handleBandwidthEstimationExperiment(e) {
            this._bandwidthEstimationExperiment = e;
            let t = O.default.getMediaEngineExperiments(e);
            if (null !== t && 0 !== t.length) {
                var n;
                null === (n = this._connection) || void 0 === n || n.setBandwidthEstimationExperiments(t)
            }
        }
        _trackSecureFrameTransition(e, t) {
            w.default.track(q.AnalyticEvents.SECURE_FRAMES_TRANSITION, {
                ...this._getAnalyticsProperties(),
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: this.userId,
                transition_id: e,
                protocol_version: t
            })
        }
        _handleSecureFramesInit(e) {
            var t, n;
            e > 0 && this.logger.info("Secure frames init with protocol version: ".concat(e)), e >= 100 ? (null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch("1", e, this.trueChannelId), this._sendMLSKeyPackage()) : null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(0, e, () => {
                var t;
                e > 0 && this._trackSecureFrameTransition(0, e), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(0)
            })
        }
        _handleSecureFramesPrepareTransition(e, t) {
            var n;
            this.logger.info("Preparing secure frames transition: ".concat(e, ", protocol version: ").concat(t)), null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(e, t, () => {
                this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, t)
            })
        }
        _handleSecureFramesPrepareEpoch(e, t) {
            var n;
            this.logger.info("Preparing secure frames epoch: ".concat(e, ", protocol version: ").concat(t));
            let i = e.toString();
            null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(i, t, this.channelId), "1" === i && this._sendMLSKeyPackage()
        }
        _sendMLSKeyPackage() {
            var e;
            null === (e = this._connection) || void 0 === e || e.getMLSKeyPackage(e => {
                var t;
                this.logger.info("Got MLS key package, sending to RTC server"), null === (t = this._socket) || void 0 === t || t.sendMLSKeyPackage(e)
            })
        }
        _maybeSendSecureFramesTransitionReady(e) {
            if (0 !== e) {
                var t;
                this.logger.info("Sending secure frames ready for transition ID ".concat(e)), null === (t = this._socket) || void 0 === t || t.secureFramesReadyForTransition(e)
            }
        }
        _handleSecureFramesExecuteTransition(e) {
            var t;
            this.logger.info("Executing secure frames transition: ".concat(e)), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(e)
        }
        _handleMLSExternalSenderPackage(e) {
            var t;
            this.logger.info("Received MLS external sender package"), null === (t = this._connection) || void 0 === t || t.updateMLSExternalSender(e)
        }
        _handleMLSProposals(e, t) {
            var n;
            this.logger.info("Received MLS proposals"), null === (n = this._connection) || void 0 === n || n.processMLSProposals(t, t => {
                this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(t)
            })
        }
        _handleMLSPrepareCommitTransition(e, t) {
            var n;
            this.logger.info("Received MLS commit for transition ID ".concat(e)), null === (n = this._connection) || void 0 === n || n.prepareMLSCommitTransition(e, t, (t, n) => {
                t ? (this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n)) : this.logger.warn("Failed to process MLS commit for transition ID ".concat(e))
            })
        }
        _handleMLSWelcome(e, t) {
            var n;
            this.logger.info("Received MLS welcome for transition ID ".concat(e)), null === (n = this._connection) || void 0 === n || n.processMLSWelcome(e, t, (t, n) => {
                t && (this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n))
            })
        }
        _getExtraConnectionOptions() {
            return {}
        }
        shouldReportPeriodicStats(e) {
            if (e.length > 10) return !1;
            let {
                enableSendingVoiceStats: t,
                percentageOfCalls: n
            } = M.default.getCurrentConfig({
                location: "104dee_3"
            }, {
                autoTrackExposure: !1
            });
            if (!t) return !1;
            let i = this.getMediaSessionId();
            return null != i && (!!(o().v3(i) % 100 <= n) || !1)
        }
        getInputDeviceName() {
            var e;
            let t = P.default.getInputDeviceId();
            return null === (e = P.default.getInputDevices()[t]) || void 0 === e ? void 0 : e.name
        }
        getOutputDeviceName() {
            var e;
            let t = P.default.getOutputDeviceId();
            return null === (e = P.default.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name
        }
        getGoLiveSource() {
            return P.default.getGoLiveSource()
        }
        constructor({
            userId: e,
            sessionId: t,
            guildId: n,
            channelId: i,
            context: r = J.MediaEngineContextTypes.DEFAULT,
            rtcServerId: s,
            parentMediaSessionId: a
        }) {
            var o, l;
            if (super(), Z(this, "context", void 0), Z(this, "userId", void 0), Z(this, "sessionId", void 0), Z(this, "guildId", void 0), Z(this, "parentMediaSessionId", void 0), Z(this, "hostname", void 0), Z(this, "state", void 0), Z(this, "_videoQuality", void 0), Z(this, "_soundshareStats", void 0), Z(this, "logger", void 0), Z(this, "rtcServerId", void 0), Z(this, "_channelId", void 0), Z(this, "channelIds", void 0), Z(this, "_endpoint", void 0), Z(this, "port", void 0), Z(this, "token", void 0), Z(this, "protocol", void 0), Z(this, "voiceVersion", void 0), Z(this, "rtcWorkerVersion", void 0), Z(this, "_socket", void 0), Z(this, "_backoff", void 0), Z(this, "_destroyed", void 0), Z(this, "_pings", void 0), Z(this, "_pingBadCount", void 0), Z(this, "_pingTimeouts", void 0), Z(this, "_mediaSessionId", void 0), Z(this, "_voiceQuality", void 0), Z(this, "_voiceQualityPeriodicStatsInterval", void 0), Z(this, "_voiceQualityPeriodicStatsSequenceId", void 0), Z(this, "_noiseCancellationError", void 0), Z(this, "_voiceDuration", void 0), Z(this, "_videoHealthManager", void 0), Z(this, "_sentVideo", void 0), Z(this, "_outboundLossRate", void 0), Z(this, "_recordingEnabled", void 0), Z(this, "_selectedExperiments", void 0), Z(this, "_localMediaSinkWantsManager", void 0), Z(this, "_remoteVideoSinkWants", void 0), Z(this, "_connection", void 0), Z(this, "_createdTime", void 0), Z(this, "_connectStartTime", void 0), Z(this, "_connectCompletedTime", void 0), Z(this, "_rtcConnectionId", void 0), Z(this, "_connectCount", void 0), Z(this, "_connected", void 0), Z(this, "_connecting", void 0), Z(this, "_encountered_socket_failure", void 0), Z(this, "_inputDetected", void 0), Z(this, "_encryptionMode", void 0), Z(this, "stateHistory", void 0), Z(this, "_supportedBandwidthEstimationExperiments", void 0), Z(this, "_bandwidthEstimationExperiment", void 0), Z(this, "powerMonitorListener", void 0), Z(this, "reconnect", () => {
                    let e = this._socket;
                    null != e && (this._connected && (this._connectStartTime = (0, E.now)()), !this._connecting && (this._trackVoiceConnectionConnecting(), this._connecting = !0, this._encountered_socket_failure = !1), this._connectCount++, e.close(), e.connect())
                }), Z(this, "_handleNetworkOnline", () => {
                    this.expeditedHeartbeat(5e3, "network detected online.")
                }), Z(this, "_handleNetworkOffline", () => {
                    this.expeditedHeartbeat(15e3, "network detected offline.", !1)
                }), Z(this, "_handlePowerResume", () => {
                    this.expeditedHeartbeat(5e3, "power monitor resumed")
                }), Z(this, "_handleVoiceQualityPeriodicsStats", () => {
                    if (null != this._voiceQuality) {
                        let e = this._voiceQuality.getPeriodicStats();
                        if (this.shouldReportPeriodicStats(e))
                            for (let t of e) w.default.track(q.AnalyticEvents.VOICE_QUALITY_PERIODIC_STATS, {
                                ...this._getAnalyticsProperties(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: t.userId,
                                hostname: this.hostname,
                                frame_op_silent: t.silent,
                                frame_op_normal: t.normal,
                                frame_op_merged: t.merged,
                                frame_op_expanded: t.expanded,
                                frame_op_accelerated: t.accelerated,
                                frame_op_preemptive_expanded: t.preemptiveExpanded,
                                frame_op_cng: t.cng,
                                accelerate_rate: t.accelerateRate,
                                expand_rate: t.expandRate,
                                preemptive_expand_rate: t.preemptiveExpandRate,
                                speech_expand_rate: t.speechExpandRate,
                                duration_ms: t.durationMs,
                                sequence_id: this._voiceQualityPeriodicStatsSequenceId,
                                input_device: this.getInputDeviceName(),
                                output_device: this.getOutputDeviceName(),
                                ping_average: Math.round(this.getAveragePing()),
                                ping_bad_count: this._pingBadCount,
                                parent_media_session_id: this.parentMediaSessionId
                            });
                        this._voiceQualityPeriodicStatsSequenceId++
                    }
                }), Z(this, "_trackVoiceConnectionConnecting", () => {
                    let e = y.default.getChannel(this.channelId),
                        t = null != e ? e.type : null;
                    w.default.track(q.AnalyticEvents.VOICE_CONNECTION_CONNECTING, {
                        guild_id: this.guildId,
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        context: this.context,
                        channel_type: t
                    })
                }), this.context = r, this.logger = new A.default("RTCConnection(".concat(null !== (o = null != s ? s : n) && void 0 !== o ? o : i, ", ").concat(this.context, ")")), this.userId = e, this.sessionId = t, this.guildId = n, this._channelId = i, this.channelIds = new Set([i]), this.rtcServerId = s, this.parentMediaSessionId = a, this._endpoint = null, this.hostname = null, this.port = null, this.token = null, this.voiceVersion = null, this.rtcWorkerVersion = null, this.state = q.RTCConnectionStates.AWAITING_ENDPOINT, this.stateHistory = new H.StateHistory(this.state), this._socket = null, this._backoff = new d.default(1e3, 1e4), this._destroyed = !1, this._pings = [], this._pingBadCount = 0, this._pingTimeouts = [], this._mediaSessionId = null, this._voiceQuality = null, this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, this._voiceDuration = null, this._videoQuality = null, this._videoHealthManager = null, this._sentVideo = !1, this._outboundLossRate = null, this._createdTime = (0, E.now)(), this._connectStartTime = 0, this._connectCompletedTime = 0, this._rtcConnectionId = (0, u.v4)(), this._connectCount = 0, this._connected = !1, this._connecting = !1, this._encountered_socket_failure = !1, this._inputDetected = !1, this._selectedExperiments = [], r === J.MediaEngineContextTypes.DEFAULT) {
                let t = P.default.supports(J.Features.FIRST_FRAME_CALLBACK) && P.default.supports(J.Features.REMOTE_USER_MULTI_STREAM),
                    n = (null === (l = y.default.getChannel(this.channelId)) || void 0 === l ? void 0 : l.type) === q.ChannelTypes.GUILD_STAGE_VOICE;
                this._localMediaSinkWantsManager = new j.default(e, n, t), this._localMediaSinkWantsManager.on(j.RTCMediaSinkWantsManagerEvent.Update, e => {
                    if (this.state === q.RTCConnectionStates.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info("Media sink wants: ".concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e)
                    }
                }), this._localMediaSinkWantsManager.on(j.RTCMediaSinkWantsManagerEvent.UserSSRCUpdate, (e, t, n) => {
                    var i;
                    null === (i = this._connection) || void 0 === i || i.createUser(e, t, n)
                })
            }
            this._remoteVideoSinkWants = j.DEFAULT_WANTS_FULL, b.default.shouldRecordNextConnection() ? (this._recordingEnabled = !0, f.setShouldRecordNextConnection(!1)) : this._recordingEnabled = !1, this._soundshareStats = new W.default, k.default.addOnlineCallback(this._handleNetworkOnline), k.default.addOfflineCallback(this._handleNetworkOffline), (0, B.isDesktop)() && (this.powerMonitorListener = V.default.remotePowerMonitor.on("resume", this._handlePowerResume)), this._supportedBandwidthEstimationExperiments = [], this._bandwidthEstimationExperiment = null, P.default.getMediaEngine().getSupportedBandwidthEstimationExperiments(e => {
                this._supportedBandwidthEstimationExperiments = e
            })
        }
    }
}