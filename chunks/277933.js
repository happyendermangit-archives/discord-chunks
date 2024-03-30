function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return eu
        }
    });
    var r, o = n("654861"),
        i = n.n(o),
        a = n("505578"),
        u = n.n(a),
        s = n("729594"),
        l = n("153832"),
        c = n("235923"),
        f = n("259020"),
        d = n("384433"),
        _ = n("849680"),
        E = n("629815"),
        p = n("661961"),
        m = n("669781"),
        y = n("35523"),
        I = n("848312"),
        h = n("532544"),
        O = n("514708"),
        T = n("908895"),
        S = n("548837"),
        v = n("745558"),
        g = n("868190"),
        A = n("7426"),
        b = n("867659"),
        N = n("3754"),
        R = n("14416");
    n("954147");
    var C = n("189343"),
        P = n("935741"),
        D = n("335911"),
        L = n("545072"),
        M = n("881494"),
        U = n("97478"),
        w = n("870331"),
        k = n("637052"),
        G = n("374550"),
        B = n("517727"),
        j = n("682498"),
        F = n("126844"),
        V = n("248467"),
        H = n("342014"),
        x = n("641010"),
        Y = n("12919"),
        W = n("140769"),
        K = n("962585"),
        z = n("842900"),
        X = n("606891"),
        q = n("281767"),
        Q = n("439386");

    function J(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Z(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function $(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ee(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function et(e) {
        return (et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function en(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                ee(e, t, n[t])
            })
        }
        return e
    }

    function er(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function eo(e, t) {
        return (eo = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ei = /^https/.test((r = "https:", "https:")) ? "wss:" : "ws:";

    function ea(e) {
        return e
    }
    var eu = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && eo(e, t)
        }(ea, e);
        var t, n, r, o, a, f = (t = ea, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = et(t);
            if (n) {
                var a = et(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : J(e)
        });

        function ea(e) {
            var t = e.userId,
                n = e.sessionId,
                r = e.guildId,
                o = e.channelId,
                i = e.context,
                a = void 0 === i ? Q.MediaEngineContextTypes.DEFAULT : i,
                u = e.rtcServerId,
                s = e.parentMediaSessionId;
            if (! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, ea), ee(J(d = f.call(this)), "context", void 0), ee(J(d), "userId", void 0), ee(J(d), "sessionId", void 0), ee(J(d), "guildId", void 0), ee(J(d), "parentMediaSessionId", void 0), ee(J(d), "hostname", void 0), ee(J(d), "state", void 0), ee(J(d), "_videoQuality", void 0), ee(J(d), "_soundshareStats", void 0), ee(J(d), "logger", void 0), ee(J(d), "rtcServerId", void 0), ee(J(d), "_channelId", void 0), ee(J(d), "channelIds", void 0), ee(J(d), "_endpoint", void 0), ee(J(d), "port", void 0), ee(J(d), "token", void 0), ee(J(d), "protocol", void 0), ee(J(d), "voiceVersion", void 0), ee(J(d), "rtcWorkerVersion", void 0), ee(J(d), "rtcLogEphemeralKey", void 0), ee(J(d), "_socket", void 0), ee(J(d), "_backoff", void 0), ee(J(d), "_destroyed", void 0), ee(J(d), "_pings", void 0), ee(J(d), "_pingBadCount", void 0), ee(J(d), "_pingTimeouts", void 0), ee(J(d), "_mediaSessionId", void 0), ee(J(d), "_voiceQuality", void 0), ee(J(d), "_voiceQualityPeriodicStatsInterval", void 0), ee(J(d), "_voiceQualityPeriodicStatsSequenceId", void 0), ee(J(d), "_noiseCancellationError", void 0), ee(J(d), "_voiceDuration", void 0), ee(J(d), "_videoHealthManager", void 0), ee(J(d), "_sentVideo", void 0), ee(J(d), "_outboundLossRate", void 0), ee(J(d), "_recordingEnabled", void 0), ee(J(d), "_selectedExperiments", void 0), ee(J(d), "_localMediaSinkWantsManager", void 0), ee(J(d), "_remoteVideoSinkWants", void 0), ee(J(d), "_connection", void 0), ee(J(d), "_createdTime", void 0), ee(J(d), "_connectStartTime", void 0), ee(J(d), "_connectCompletedTime", void 0), ee(J(d), "_rtcConnectionId", void 0), ee(J(d), "_connectCount", void 0), ee(J(d), "_connected", void 0), ee(J(d), "_connecting", void 0), ee(J(d), "_encountered_socket_failure", void 0), ee(J(d), "_inputDetected", void 0), ee(J(d), "_encryptionMode", void 0), ee(J(d), "stateHistory", void 0), ee(J(d), "_supportedBandwidthEstimationExperiments", void 0), ee(J(d), "_bandwidthEstimationExperiment", void 0), ee(J(d), "powerMonitorListener", void 0), ee(J(d), "reconnect", function() {
                    var e = d._socket;
                    null != e && (d._connected && (d._connectStartTime = (0, _.now)()), !d._connecting && (d._trackVoiceConnectionConnecting(), d._connecting = !0, d._encountered_socket_failure = !1), d._connectCount++, e.close(), e.connect())
                }), ee(J(d), "_handleNetworkOnline", function() {
                    d.expeditedHeartbeat(5e3, "network detected online.")
                }), ee(J(d), "_handleNetworkOffline", function() {
                    d.expeditedHeartbeat(15e3, "network detected offline.", !1)
                }), ee(J(d), "_handlePowerResume", function() {
                    d.expeditedHeartbeat(5e3, "power monitor resumed")
                }), ee(J(d), "_handleVoiceQualityPeriodicsStats", function() {
                    if (null != d._voiceQuality) {
                        var e = d._voiceQuality.getPeriodicStats();
                        if (d.shouldReportPeriodicStats(e)) {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                    var a = o.value;
                                    w.default.track(q.AnalyticEvents.VOICE_QUALITY_PERIODIC_STATS, er(en({}, d._getAnalyticsProperties()), {
                                        media_session_id: d.getMediaSessionId(),
                                        sender_user_id: a.userId,
                                        hostname: d.hostname,
                                        frame_op_silent: a.silent,
                                        frame_op_normal: a.normal,
                                        frame_op_merged: a.merged,
                                        frame_op_expanded: a.expanded,
                                        frame_op_accelerated: a.accelerated,
                                        frame_op_preemptive_expanded: a.preemptiveExpanded,
                                        frame_op_cng: a.cng,
                                        accelerate_rate: a.accelerateRate,
                                        expand_rate: a.expandRate,
                                        preemptive_expand_rate: a.preemptiveExpandRate,
                                        speech_expand_rate: a.speechExpandRate,
                                        duration_ms: a.durationMs,
                                        sequence_id: d._voiceQualityPeriodicStatsSequenceId,
                                        input_device: d.getInputDeviceName(),
                                        output_device: d.getOutputDeviceName(),
                                        ping_average: Math.round(d.getAveragePing()),
                                        ping_bad_count: d._pingBadCount,
                                        parent_media_session_id: d.parentMediaSessionId
                                    }))
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && null != i.return && i.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                        d._voiceQualityPeriodicStatsSequenceId++
                    }
                }), ee(J(d), "_trackVoiceConnectionConnecting", function() {
                    var e = P.default.getChannel(d.channelId),
                        t = null != e ? e.type : null;
                    w.default.track(q.AnalyticEvents.VOICE_CONNECTION_CONNECTING, {
                        guild_id: d.guildId,
                        channel_id: d.channelId,
                        rtc_connection_id: d.getRTCConnectionId(),
                        hostname: d.hostname,
                        connect_count: d._connectCount,
                        context: d.context,
                        channel_type: t
                    })
                }), d.context = a, d.logger = new y.default("RTCConnection(".concat(null !== (E = null != u ? u : r) && void 0 !== E ? E : o, ", ").concat(d.context, ")")), d.userId = t, d.sessionId = n, d.guildId = r, d._channelId = o, d.channelIds = new Set([o]), d.rtcServerId = u, d.parentMediaSessionId = s, d._endpoint = null, d.hostname = null, d.port = null, d.token = null, d.voiceVersion = null, d.rtcWorkerVersion = null, d.state = q.RTCConnectionStates.AWAITING_ENDPOINT, d.stateHistory = new V.StateHistory(d.state), d._socket = null, d._backoff = new c.default(1e3, 1e4), d._destroyed = !1, d._pings = [], d._pingBadCount = 0, d._pingTimeouts = [], d._mediaSessionId = null, d._voiceQuality = null, d._voiceQualityPeriodicStatsInterval = null, d._voiceQualityPeriodicStatsSequenceId = 0, d._noiseCancellationError = 0, d._voiceDuration = null, d._videoQuality = null, d._videoHealthManager = null, d._sentVideo = !1, d._outboundLossRate = null, d._createdTime = (0, _.now)(), d._connectStartTime = 0, d._connectCompletedTime = 0, d._rtcConnectionId = (0, l.v4)(), d._connectCount = 0, d._connected = !1, d._connecting = !1, d._encountered_socket_failure = !1, d._inputDetected = !1, d._selectedExperiments = [], a === Q.MediaEngineContextTypes.DEFAULT) {
                var d, E, p, I = D.default.supports(Q.Features.FIRST_FRAME_CALLBACK) && D.default.supports(Q.Features.REMOTE_USER_MULTI_STREAM),
                    h = (null === (p = P.default.getChannel(d.channelId)) || void 0 === p ? void 0 : p.type) === q.ChannelTypes.GUILD_STAGE_VOICE;
                d._localMediaSinkWantsManager = new x.default(t, h, I), d._localMediaSinkWantsManager.on(x.RTCMediaSinkWantsManagerEvent.Update, function(e) {
                    if (d.state === q.RTCConnectionStates.RTC_CONNECTED && null != d._socket) {
                        var t;
                        d.logger.info("Media sink wants: ".concat(JSON.stringify(e))), d._socket.mediaSinkWants(e), null === (t = d._connection) || void 0 === t || t.setLocalVideoSinkWants(e)
                    }
                }), d._localMediaSinkWantsManager.on(x.RTCMediaSinkWantsManagerEvent.UserSSRCUpdate, function(e, t, n) {
                    var r;
                    null === (r = d._connection) || void 0 === r || r.createUser(e, t, n)
                })
            }
            return d._remoteVideoSinkWants = x.DEFAULT_WANTS_FULL, M.default.shouldRecordNextConnection() ? (d._recordingEnabled = !0, m.setShouldRecordNextConnection(!1)) : d._recordingEnabled = !1, d._soundshareStats = new Y.default, k.default.addOnlineCallback(d._handleNetworkOnline), k.default.addOfflineCallback(d._handleNetworkOffline), (0, G.isDesktop)() && (d.powerMonitorListener = B.default.remotePowerMonitor.on("resume", d._handlePowerResume)), d._supportedBandwidthEstimationExperiments = [], d._bandwidthEstimationExperiment = null, D.default.getMediaEngine().getSupportedBandwidthEstimationExperiments(function(e) {
                d._supportedBandwidthEstimationExperiments = e
            }), d
        }
        return r = ea, o = [{
            key: "quality",
            get: function() {
                var e = this.getLastPing();
                if (this.state !== q.RTCConnectionStates.RTC_CONNECTED || void 0 === e) return q.RTCConnectionQuality.UNKNOWN;
                if (e > 500 || null != this._outboundLossRate && this._outboundLossRate > 10) return q.RTCConnectionQuality.BAD;
                if (e > 250 || null != this._outboundLossRate && this._outboundLossRate > 5) return q.RTCConnectionQuality.AVERAGE;
                else return q.RTCConnectionQuality.FINE
            }
        }, {
            key: "endpoint",
            get: function() {
                return this._endpoint
            },
            set: function(e) {
                if (null == e) this._endpoint = null, this.hostname = null;
                else {
                    e = "".concat(ei, "//").concat(e);
                    var t = s.parse(e),
                        n = t.hostname,
                        r = t.port,
                        o = null != r ? parseInt(r) : NaN;
                    null != n && (80 === o || 443 === o) && (e = "".concat(ei, "//").concat(n)), this._endpoint = e + "/", this.hostname = n
                }
            }
        }, {
            key: "connect",
            value: function(e, t) {
                if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
                this._backoff.cancel();
                var n = this.endpoint,
                    r = this.token;
                if (this.endpoint = e, this.token = t, (n !== this.endpoint || r !== t) && (this._cleanupSocket(), this._mediaSessionId = null, null != n && (this._rtcConnectionId = (0, l.v4)(), E.default.dispatch({
                        type: "RTC_CONNECTION_UPDATE_ID",
                        connection: this
                    }))), null == this.endpoint) {
                    this.setState(q.RTCConnectionStates.AWAITING_ENDPOINT);
                    return
                }
                var o = this._socket;
                null != o && this._cleanupSocket(), (o = this._socket = new H.default(this.endpoint)).on(H.SocketEvent.Connecting, this._handleConnecting.bind(this, o)), o.on(H.SocketEvent.Connect, this._handleConnect.bind(this, o)), o.on(H.SocketEvent.Disconnect, this._handleDisconnect.bind(this, o)), o.on(H.SocketEvent.Resuming, this._handleResuming.bind(this, o)), o.on(H.SocketEvent.Ready, this._handleReady.bind(this, o)), o.on(H.SocketEvent.Speaking, this._handleSpeaking.bind(this, o)), o.on(H.SocketEvent.Video, this._handleVideo.bind(this, o)), o.on(H.SocketEvent.Ping, this._handleControlPing.bind(this)), o.on(H.SocketEvent.ClientDisconnect, this._handleClientDisconnect.bind(this)), o.on(H.SocketEvent.Codecs, this._handleCodecs.bind(this)), o.on(H.SocketEvent.MediaSessionId, this._handleMediaSessionId.bind(this)), o.on(H.SocketEvent.MediaSinkWants, this._handleMediaSinkWants.bind(this)), o.on(H.SocketEvent.VoiceBackendVersion, this._handleCodeVersion.bind(this)), o.on(H.SocketEvent.KeyframeInterval, this._handleKeyframeInterval.bind(this)), o.on(H.SocketEvent.ChannelOptionsUpdateRtcLog, this._handleUpdateRtcLog.bind(this)), o.on(H.SocketEvent.Flags, this.handleFlags.bind(this)), o.on(H.SocketEvent.Platform, this.handlePlatform.bind(this)), o.on(H.SocketEvent.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), o.on(H.SocketEvent.SecureFramesInit, this._handleSecureFramesInit.bind(this)), o.on(H.SocketEvent.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), o.on(H.SocketEvent.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), o.on(H.SocketEvent.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), o.on(H.SocketEvent.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), o.on(H.SocketEvent.MLSProposals, this._handleMLSProposals.bind(this, o)), o.on(H.SocketEvent.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), o.on(H.SocketEvent.MLSWelcome, this._handleMLSWelcome.bind(this)), this._connectStartTime = (0, _.now)(), this._connectCount++, this._connecting = !0, null != o && this._socket === o && (this._trackVoiceConnectionConnecting(), this._encountered_socket_failure = !1, o.connect())
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.logger.info("Destroy RTCConnection"), k.default.removeOnlineCallback(this._handleNetworkOnline), k.default.removeOfflineCallback(this._handleNetworkOffline), (0, G.isDesktop)() && (null === (o = this.powerMonitorListener) || void 0 === o || o.call(this)), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, null === (t = this._voiceDuration) || void 0 === t || t.stop(), this._voiceDuration = null, null === (n = this._videoQuality) || void 0 === n || n.stop(), this._videoQuality = null, this._videoHealthManager = null, null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.reset(), null != this._connection) {
                    var e, t, n, r, o, i = this._connection;
                    this._connection = null, i.destroy()
                }
                this.removeAllListeners(), this._destroyed = !0
            }
        }, {
            key: "sendSpeaking",
            value: function(e, t) {
                var n = this._socket;
                if (null != n) {
                    var r = D.default.getPacketDelay();
                    n.speaking(e, r, t)
                }
            }
        }, {
            key: "sendVideo",
            value: function(e, t, n, r) {
                var o = this._socket;
                null != o && (0 !== t && (this._sentVideo = !0), this._sentVideo && o.video(e, t, n, r))
            }
        }, {
            key: "getPings",
            value: function() {
                return this._pings
            }
        }, {
            key: "getAveragePing",
            value: function() {
                var e = this._pings.slice(0, Math.min(this._pings.length, 20));
                return 0 === e.length || null == this._socket ? 0 : e.reduce(function(e, t) {
                    return e + t.value
                }, 0) / e.length
            }
        }, {
            key: "getLastPing",
            value: function() {
                var e;
                return null === (e = this._pings[this._pings.length - 1]) || void 0 === e ? void 0 : e.value
            }
        }, {
            key: "getOutboundLossRate",
            value: function() {
                return this._outboundLossRate
            }
        }, {
            key: "getMediaSessionId",
            value: function() {
                return this._mediaSessionId
            }
        }, {
            key: "getRTCConnectionId",
            value: function() {
                return this._rtcConnectionId
            }
        }, {
            key: "getVoiceVersion",
            value: function() {
                return this.voiceVersion
            }
        }, {
            key: "getRtcWorkerVersion",
            value: function() {
                return this.rtcWorkerVersion
            }
        }, {
            key: "getDuration",
            value: function() {
                var e = this._connectCompletedTime > 0 ? (0, _.now)() - this._connectCompletedTime : 0;
                return e > 0 ? e : 0
            }
        }, {
            key: "getPacketStats",
            value: function() {
                var e;
                return null === (e = this._voiceQuality) || void 0 === e ? void 0 : e.getPacketStats()
            }
        }, {
            key: "getCreatedTime",
            value: function() {
                return this._createdTime
            }
        }, {
            key: "getVideoHealthManager",
            value: function() {
                return this._videoHealthManager
            }
        }, {
            key: "getBandwidthEstimationExperiment",
            value: function() {
                return this._bandwidthEstimationExperiment
            }
        }, {
            key: "pauseStatsCollectionForUser",
            value: function(e, t) {
                var n = this.getOrCreateVideoQuality();
                if (null == n) {
                    this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
                    return
                }
                t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e)
            }
        }, {
            key: "setState",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.stateHistory.update(this.state), this.emit(F.RTCConnectionEvent.State, e, {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context,
                    rtcLogEphemeralKey: this.rtcLogEphemeralKey
                }, t)
            }
        }, {
            key: "expeditedHeartbeat",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = this._socket;
                null != r && r.expeditedHeartbeat(e, t, n) && this._backoff.cancel()
            }
        }, {
            key: "resetBackoff",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = this._socket;
                null != t && t.resetBackoff(e) && this._backoff.cancel()
            }
        }, {
            key: "setAppBackgrounded",
            value: function(e, t) {
                var n;
                null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setAppBackgrounded(e, t)
            }
        }, {
            key: "setSelectedParticipant",
            value: function(e) {
                var t;
                null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setSelectedParticipant(e)
            }
        }, {
            key: "setPipOpen",
            value: function(e) {
                var t;
                null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setPipOpen(e)
            }
        }, {
            key: "setRtcLogMarker",
            value: function(e) {
                var t;
                null === (t = this._connection) || void 0 === t || t.setRtcLogMarker(e)
            }
        }, {
            key: "setClipRecordUser",
            value: function(e, t, n) {
                var r;
                null === (r = this._connection) || void 0 === r || r.setClipRecordUser(e, t, n)
            }
        }, {
            key: "channelId",
            get: function() {
                return this._channelId
            },
            set: function(e) {
                this._channelId = e, this.channelIds.add(e)
            }
        }, {
            key: "trueChannelId",
            get: function() {
                return null != this.rtcServerId ? i()(this.rtcServerId).prev().toString() : this.channelId
            }
        }, {
            key: "_cleanupSocket",
            value: function() {
                var e = this._socket;
                null != e && (e.close(), e.removeAllListeners(), this._socket = null)
            }
        }, {
            key: "_chooseExperiments",
            value: function(e) {
                var t = [];
                if (this._recordingEnabled && t.push("connection_log"), null != this.guildId) {
                    var n = S.default.getCurrentConfig({
                            guildId: this.guildId,
                            location: "handleReady"
                        }, {
                            autoTrackExposure: !0
                        }),
                        r = n.shouldOverrideKrisp,
                        o = n.overrideKrispSetting;
                    r && (o ? t.push("force_krisp_enabled") : t.push("force_krisp_disabled"))
                }
                if (D.default.supports(Q.Features.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"), 0 !== this._supportedBandwidthEstimationExperiments.length) {
                    var i = T.default.getConfig(!0, this._supportedBandwidthEstimationExperiments),
                        a = i.enabled,
                        u = i.fullname;
                    a && t.push(u)
                }
                this._selectedExperiments = t
            }
        }, {
            key: "_handleConnecting",
            value: function(e) {
                null != this.endpoint && this.logger.info("Connecting to RTC server ".concat(this.endpoint, ", rtc-connection-id: ").concat(this.getRTCConnectionId())), this.setState(q.RTCConnectionStates.CONNECTING)
            }
        }, {
            key: "_handleConnect",
            value: function(e) {
                var t, n, r = this.token;
                if (null == r) throw Error("RTCConnection._handleConnect(...): Token is missing.");
                this.logger.info("Connected to RTC server."), e.identify({
                    serverId: null !== (n = null !== (t = this.rtcServerId) && void 0 !== t ? t : this.guildId) && void 0 !== n ? n : this.channelId,
                    userId: this.userId,
                    sessionId: this.sessionId,
                    token: r,
                    maxSecureFramesVersion: D.default.getSupportedSecureFramesProtocolVersion(this.guildId),
                    video: D.default.supports(Q.Features.VIDEO),
                    streamParameters: D.default.getVideoStreamParameters(this.context)
                }), this.setState(q.RTCConnectionStates.AUTHENTICATING)
            }
        }, {
            key: "_handleDisconnect",
            value: function(e, t, n, r) {
                var o = this;
                this.logger.info("Disconnected from RTC server, clean: ".concat(t, ", code: ").concat(n, ", reason: ").concat(r, ", state: ").concat(this.state)), !t && this._connecting && !this._encountered_socket_failure && (w.default.track(q.AnalyticEvents.VOICE_CONNECTION_SOCKET_FAILURE, er(en({}, this._getAnalyticsProperties()), {
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    code: n,
                    reason: r
                })), this._encountered_socket_failure = !0), L.default.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (f = this._connection) || void 0 === f || f.wasRemoteDisconnected());
                var i = "Force Close" !== r;
                if (i) {
                    var a = this._backoff.fail(this.reconnect);
                    this.logger.warn("Disconnect was not clean! reason=".concat(r, ". Reconnecting in ").concat((a / 1e3).toFixed(2), " seconds."))
                }
                if (this.state !== q.RTCConnectionStates.DISCONNECTED) {
                    var u, s, l, c, f, d, _ = this._videoQuality;
                    null != _ && this.context === Q.MediaEngineContextTypes.DEFAULT && (_.stop(), this._sentVideo && _.getOutboundStats().forEach(function(e) {
                        var t;
                        (null !== (t = e.num_frames) && void 0 !== t ? t : 0) > 0 && w.default.track(q.AnalyticEvents.VIDEO_STREAM_ENDED, er(en(er(en({}, o._getAnalyticsProperties()), {
                            media_session_id: o.getMediaSessionId(),
                            sender_user_id: o.userId,
                            reason: r,
                            participant_type: "sender",
                            guild_region: U.default.getRegion(o.hostname),
                            hostname: o.hostname,
                            hardware_enabled: D.default.getHardwareH264()
                        }), e, _.getNetworkStats(), _.getCodecUsageStats("sender", o.userId), o._soundshareStats.getStats()), {
                            device_performance_class: (0, I.getMediaPerformanceClass)()
                        }))
                    }), _.getInboundParticipants().forEach(function(e) {
                        var t, n = _.getInboundStats(e);
                        (null !== (t = null == n ? void 0 : n.num_frames) && void 0 !== t ? t : 0) > 0 && w.default.track(q.AnalyticEvents.VIDEO_STREAM_ENDED, en(er(en({}, o._getAnalyticsProperties()), {
                            media_session_id: o.getMediaSessionId(),
                            sender_user_id: e,
                            reason: r,
                            participant_type: "receiver",
                            guild_region: U.default.getRegion(o.hostname),
                            hostname: o.hostname,
                            hardware_enabled: D.default.getHardwareH264()
                        }), n, _.getNetworkStats(), _.getCodecUsageStats("receiver", e)))
                    }));
                    var E = U.default.shouldIncludePreferredRegion() ? U.default.getPreferredRegion() : null,
                        p = D.default.getSettings(),
                        m = P.default.getChannel(this.channelId);
                    w.default.track(q.AnalyticEvents.VOICE_DISCONNECT, er(en(er(en({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        port: this.port,
                        protocol: this.protocol,
                        reconnect: i,
                        reason: r,
                        duration: this.getDuration()
                    }), null != this._voiceQuality ? this._voiceQuality.getMosStats() : null, null != this._voiceQuality ? this._voiceQuality.getPacketStats() : null, null != this._voiceQuality ? this._voiceQuality.getBytesStats() : null, null != this._voiceQuality ? this._voiceQuality.getBufferStats() : null, null != this._voiceQuality ? this._voiceQuality.getNetworkStats() : null, null != this._voiceQuality ? this._voiceQuality.getSystemResourceStats() : null, null != this._voiceQuality ? this._voiceQuality.getFrameOpStats() : null, null != this._voiceQuality ? this._voiceQuality.getDurationStats() : null, null != this._voiceQuality ? this._voiceQuality.getTransportStats() : null, null != this._voiceQuality ? this._voiceQuality.getE2EEStats() : null, null != this._voiceDuration ? this._voiceDuration.getDurationStats() : null), {
                        media_session_id: this.getMediaSessionId(),
                        channel_bitrate: null != m ? m.bitrate : null,
                        cloudflare_best_region: E,
                        connect_count: this._connectCount,
                        ping_average: Math.round(this.getAveragePing()),
                        ping_bad_count: this._pingBadCount,
                        ping_timeout: this._pingTimeouts.length,
                        input_detected: this._inputDetected,
                        no_input_detected_notice: D.default.getNoInputDetectedNotice(),
                        audio_input_mode: p.mode,
                        automatic_audio_input_sensitivity_enabled: p.modeOptions.autoThreshold,
                        audio_input_sensitivity: p.modeOptions.threshold,
                        echo_cancellation_enabled: p.echoCancellation,
                        noise_suppression_enabled: p.noiseSuppression,
                        noise_cancellation_enabled: p.noiseCancellation,
                        noise_canceller_error: this._noiseCancellationError,
                        automatic_gain_control_enabled: p.automaticGainControl,
                        voice_output_volume: p.outputVolume,
                        encryption_mode: this._encryptionMode,
                        channel_count: this.channelIds.size,
                        input_device: this.getInputDeviceName(),
                        output_device: this.getOutputDeviceName(),
                        device_performance_class: (0, I.getMediaPerformanceClass)(),
                        num_fast_udp_reconnects: null != this._connection ? null === (d = this._connection) || void 0 === d ? void 0 : d.getNumFastUdpReconnects() : null,
                        parent_media_session_id: this.parentMediaSessionId
                    }));
                    var y = this.getMediaSessionId();
                    D.default.getMediaEngine().getCodecSurvey().then(function(e) {
                        var t = JSON.parse(e);
                        if (null == t || null == t.available_video_encoders || null == t.available_video_decoders) throw Error("codec survey is not available");
                        w.default.track(q.AnalyticEvents.VOICE_CODEC_DETECTED, er(en({}, t), {
                            rtc_connection_id: o.getRTCConnectionId(),
                            media_session_id: y
                        }))
                    }).catch(function(e) {
                        o.logger.warn(e)
                    })
                }
                if (this._pingTimeouts = [], this._pings = [], this._connectCompletedTime = 0, this._pingBadCount = 0, this._inputDetected = !1, this._mediaSessionId = null, null === (u = this._voiceQuality) || void 0 === u || u.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, null === (s = this._voiceDuration) || void 0 === s || s.stop(), this._voiceDuration = null, null === (l = this._videoQuality) || void 0 === l || l.stop(), this._videoQuality = null, this._videoHealthManager = null, null === (c = this._localMediaSinkWantsManager) || void 0 === c || c.reset(), null != this._connection) {
                    var h = this._connection;
                    this._connection = null, h.destroy()
                }
                this.setState(q.RTCConnectionStates.DISCONNECTED, {
                    willReconnect: i
                })
            }
        }, {
            key: "_handleResuming",
            value: function(e) {
                var t, n;
                null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking()
            }
        }, {
            key: "_handleReady",
            value: function(e, t, n, r, o, i, a) {
                var u, s = this;
                this.setState(q.RTCConnectionStates.RTC_CONNECTING), this.port = n, null != a && this._chooseExperiments(a), 0 === i.length && i.push({
                    type: Q.MediaTypes.VIDEO,
                    rid: "100",
                    ssrc: o + 1,
                    rtxSsrc: o + 2,
                    quality: 100,
                    active: !1
                });
                var l = D.default.getMediaEngine(),
                    c = l.connect(this.context, {
                        userId: this.userId,
                        channelId: this.trueChannelId,
                        guildId: null !== (u = this.rtcServerId) && void 0 !== u ? u : this.guildId
                    }, en({
                        ssrc: o,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: i,
                        qosEnabled: D.default.getQoS()
                    }, this._getExtraConnectionOptions()));
                if (c.setUseElectronVideo(l.supports(Q.Features.ELECTRON_VIDEO)), D.default.supports(Q.Features.IMAGE_QUALITY_MEASUREMENT)) {
                    var f = N.default.getConfig(!0),
                        E = f.enabled,
                        m = f.measurement,
                        y = R.default.getCurrentConfig({
                            location: "handleReady"
                        }, {
                            autoTrackExposure: !0
                        }).extraOptions;
                    E && c.setVideoQualityMeasurement(m + y)
                }
                var I = ["unk"];
                if (D.default.supports(Q.Features.AMD_EXPERIMENTAL_RATE_CONTROL) && I.push("amdRelaxRc"), this.context === Q.MediaEngineContextTypes.STREAM) {
                    var h = A.default.getCurrentConfig({
                        location: "handleReady"
                    }, {
                        autoTrackExposure: !0
                    }).nvMediumVbvSizeMs;
                    h > 0 && (I.push("nvRelaxRc=" + h), g.default.getCurrentConfig({
                        location: "handleReady"
                    }, {
                        autoTrackExposure: !0
                    }).nvEnableNewPresets && I.push("nvNewPresets")), null != this.guildId && v.default.getCurrentConfig({
                        guildId: this.guildId,
                        location: "handleReady"
                    }, {
                        autoTrackExposure: !0
                    }).enableAdaptiveKeyFrame && I.push("nvencAdaptiveIDR")
                }
                c.setVideoEncoderExperiments(I.join(",")), c.on(d.BaseConnectionEvent.Speaking, function(e, t, n) {
                    s.userId === e && s.sendSpeaking(t, n), s.emit(F.RTCConnectionEvent.Speaking, e, t)
                }), c.on(d.BaseConnectionEvent.ToggleMuteFromNative, function() {
                    O.default.getCurrentConfig({
                        location: "RTCConnection ToggleMuteFromNative"
                    }, {
                        autoTrackExposure: !0
                    }).airpodsMuteSupported && s.context === Q.MediaEngineContextTypes.DEFAULT && p.default.toggleSelfMute({
                        playSoundEffect: !1
                    })
                }), c.on(d.BaseConnectionEvent.Video, function(e, t, n, r, o, i) {
                    s._handleVideoStreamId({
                        userId: e,
                        streamId: t,
                        audioSsrc: n,
                        videoSsrc: null != r ? r : 0,
                        rtxSsrc: o,
                        videoStreamParameters: i
                    }), s.userId === e && (s.sendVideo(null != n ? n : 0, null != r ? r : 0, null != o ? o : 0, i), null == i || i.forEach(function(t) {
                        if (100 === t.quality) s.emit(F.RTCConnectionEvent.VideoSourceQualityChanged, s.guildId, s.channelId, e, t.maxResolution, t.maxFrameRate, s.context)
                    }))
                }), c.on(d.BaseConnectionEvent.FirstFrame, function(e, t, n) {
                    if (null != s._localMediaSinkWantsManager) s._localMediaSinkWantsManager.setFirstFrameReceived(t), s.emit(F.RTCConnectionEvent.Video, s.guildId, s.channelId, e, n, s.rtcServerId)
                }), c.on(d.BaseConnectionEvent.Silence, function(e) {
                    s._inputDetected = s._inputDetected || !e
                }), c.on(d.BaseConnectionEvent.Connected, function(r, o) {
                    if (s.logger.info("RTC connected to media server: ".concat(t, ":").concat(n)), e !== s._socket) {
                        s.logger.warn("Socket mismatch, disconnecting");
                        return
                    }
                    switch (s._voiceQuality = new X.default(c), s._voiceQuality.start(), s._voiceQualityPeriodicStatsSequenceId = 0, s._voiceQualityPeriodicStatsInterval = setInterval(s._handleVoiceQualityPeriodicsStats, 3e5), s._noiseCancellationError = 0, s._voiceDuration = new z.default(s.userId, c), s._voiceDuration.start(), s.protocol = r, r) {
                        case "udp":
                            s.logger.info("Sending UDP info to RTC server.", o, s._selectedExperiments), e.once(H.SocketEvent.Encryption, function(e, t) {
                                c === s._connection && (c.setEncryption(e, t), s._encryptionMode = e)
                            }), e.selectProtocol(r, s.getRTCConnectionId(), o, s._selectedExperiments);
                            break;
                        case "webrtc":
                            s.logger.info("Sending local SDP to RTC server."), e.once(H.SocketEvent.SDP, s._handleSDP.bind(s)), e.selectProtocol(r, s.getRTCConnectionId(), o);
                            break;
                        default:
                            s.logger.error("Unable to determine protocol.");
                            return
                    }
                    s._backoff.succeed()
                }), c.on(d.BaseConnectionEvent.VideoEncoderFallback, function(t) {
                    var n = t.filter(function(e) {
                        return "video" === e.type
                    }).map(function(e) {
                        return e.name
                    }).join(",");
                    s.logger.info("The originally selected video encoder is not working, fallback to the other available encoders:" + n), e.updateSession({
                        codecs: t
                    })
                }), c.on(d.BaseConnectionEvent.Error, function(t) {
                    if (e === s._socket) {
                        var n = U.default.shouldIncludePreferredRegion() ? U.default.getPreferredRegion() : null;
                        s.logger.error("Error occurred while connecting to RTC server: ".concat(t)), w.default.track(q.AnalyticEvents.VOICE_CONNECTION_FAILURE, er(en({}, s._getAnalyticsProperties()), {
                            hostname: s.hostname,
                            port: s.port,
                            protocol: s.protocol,
                            error: t,
                            cloudflare_best_region: n,
                            connect_count: s._connectCount
                        }))
                    }
                }), c.on(d.BaseConnectionEvent.ConnectionStateChange, function(t) {
                    if (s.logger.info("RTC media connection state change: ".concat(s.state, " => ").concat(t)), e === s._socket) {
                        var n = s.state;
                        switch (t) {
                            case Q.ConnectionStates.DISCONNECTED:
                                s.setState(q.RTCConnectionStates.RTC_DISCONNECTED);
                                break;
                            case Q.ConnectionStates.CONNECTING:
                                s.setState(q.RTCConnectionStates.RTC_CONNECTING);
                                break;
                            case Q.ConnectionStates.CONNECTED:
                                s.setState(q.RTCConnectionStates.RTC_CONNECTED);
                                break;
                            case Q.ConnectionStates.NO_ROUTE:
                                s.setState(q.RTCConnectionStates.NO_ROUTE);
                                break;
                            case Q.ConnectionStates.ICE_CHECKING:
                                s.setState(q.RTCConnectionStates.ICE_CHECKING);
                                break;
                            case Q.ConnectionStates.DTLS_CONNECTING:
                                s.setState(q.RTCConnectionStates.DTLS_CONNECTING)
                        }
                        if (n === q.RTCConnectionStates.RTC_CONNECTING && s.state === q.RTCConnectionStates.RTC_DISCONNECTED ? s.reconnect() : s.state === q.RTCConnectionStates.NO_ROUTE && s._backoff.fail(s.reconnect), s.state === q.RTCConnectionStates.RTC_CONNECTED) {
                            var r, o = U.default.shouldIncludePreferredRegion() ? U.default.getPreferredRegion() : null;
                            s._connecting && w.default.track(q.AnalyticEvents.VOICE_CONNECTION_SUCCESS, en(er(en({}, s._getAnalyticsProperties()), {
                                hostname: s.hostname,
                                port: s.port,
                                protocol: s.protocol,
                                cloudflare_best_region: o,
                                connect_time: (0, _.now)() - (s._connected ? s._connectStartTime : s._createdTime),
                                connect_count: s._connectCount,
                                audio_subsystem: D.default.getMediaEngine().getAudioSubsystem(),
                                audio_layer: D.default.getMediaEngine().getAudioLayer(),
                                media_session_id: s.getMediaSessionId()
                            }), s.stateHistory.getVoiceConnectionSuccessStats())), null === (r = s._localMediaSinkWantsManager) || void 0 === r || r.setConnection(c), s._connectCompletedTime = (0, _.now)(), s._connected = !0, s._connecting = !1, s._encountered_socket_failure = !1
                        } else n === q.RTCConnectionStates.RTC_CONNECTED && s.stateHistory.reset(s.state)
                    }
                }), c.on(d.BaseConnectionEvent.Ping, this._handlePing.bind(this)), c.on(d.BaseConnectionEvent.PingTimeout, this._handlePingTimeout.bind(this)), c.on(d.BaseConnectionEvent.OutboundLossRate, this._handleOutboundLossRate.bind(this)), c.on(d.BaseConnectionEvent.SoundshareTrace, this._handleSoundshareTrace.bind(this)), c.on(d.BaseConnectionEvent.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)), c.on(d.BaseConnectionEvent.Stats, j.default.create()), c.on(d.BaseConnectionEvent.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)), c.on(d.BaseConnectionEvent.NoiseCancellationError, function(e) {
                    s._noiseCancellationError = e
                }), c.setRemoteVideoSinkWants(this._remoteVideoSinkWants), this._connection = c
            }
        }, {
            key: "_handleSpeaking",
            value: function(e, t, n, r) {
                var o, i = this._connection;
                null != i && this.userId !== t && (r !== Q.SpeakingFlags.NONE && (i.createUser(t, n), E.default.dispatch({
                    type: "RTC_CONNECTION_USER_CREATE",
                    userId: t,
                    context: this.context
                })), null === (o = this._localMediaSinkWantsManager) || void 0 === o || o.setAudioSSRC(t, n))
            }
        }, {
            key: "handleFlags",
            value: function(e, t) {
                this.emit(F.RTCConnectionEvent.Flags, e, t)
            }
        }, {
            key: "handlePlatform",
            value: function(e, t) {
                this.emit(F.RTCConnectionEvent.Platform, e, t, this.channelId)
            }
        }, {
            key: "getOrCreateVideoQuality",
            value: function() {
                var e = this;
                if (null != this._connection && null == this._videoQuality) {
                    this._videoQuality = new K.VideoQuality(this._connection), this._videoQuality.start();
                    var t = b.default.getConfig(!0),
                        n = t.featureEnabled,
                        r = t.windowLength,
                        o = t.allowedPoorFpsRatio,
                        i = t.fpsThreshold,
                        a = t.backoffTimeSec;
                    if (n) {
                        this._videoHealthManager = new W.VideoHealthManager(r, o, i, a), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                        this._videoQuality.on(K.VideoQualityEvent.FpsUpdate, function(t, n, r) {
                            var o, i;
                            (null === (o = e._localMediaSinkWantsManager) || void 0 === o ? void 0 : o.shouldReceiveFromUser(t)) && (null === (i = e._videoHealthManager) || void 0 === i || i.updateFps(t, n, r))
                        })
                    }
                }
                return this._videoQuality
            }
        }, {
            key: "_handleVideoStreamId",
            value: function(e) {
                var t, n = this,
                    r = e.userId,
                    o = e.streamId,
                    i = e.videoSsrc,
                    a = e.videoStreamParameters;
                if (this.emit(F.RTCConnectionEvent.Video, this.guildId, this.channelId, r, o, this.rtcServerId), null != o && null == this.getOrCreateVideoQuality() && this.logger.error("_handleVideoStreamId: Unable to create videoQuality."), null != this._videoQuality && this.userId === r && a.forEach(function(e) {
                        var t, r, o = null !== (t = e.ssrc) && void 0 !== t ? t : 0;
                        o > 0 && !0 === e.active && (null === (r = n._videoQuality) || void 0 === r || r.setOutboundSsrc(o))
                    }), this.userId !== r) {
                    var u, s, l, c = 0 === i && null === o;
                    (!c || c && (null === (u = this._videoQuality) || void 0 === u ? void 0 : u.getInboundParticipants().includes(r))) && (null === (s = this._videoQuality) || void 0 === s || s.setInboundUser(r, i), null === (l = this._videoHealthManager) || void 0 === l || l.createUser(r))
                }
                null != this._connection && this.userId !== r && (null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setStreamId(r, o))
            }
        }, {
            key: "_handleLocalVideoDisabled",
            value: function(e, t) {
                if (this.userId !== e) {
                    var n = this.getOrCreateVideoQuality();
                    if (null == n) {
                        this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
                        return
                    }
                    n.setUserVideoDisabled(e, t)
                }
            }
        }, {
            key: "_handleRemoteStreamsReady",
            value: function(e) {
                var t = (0, _.now)() - this._connectStartTime;
                w.default.track(q.AnalyticEvents.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, er(en({}, this._getAnalyticsProperties()), {
                    number_of_users: e,
                    duration_ms: t
                }))
            }
        }, {
            key: "_handleVideo",
            value: function(e, t, n, r, o) {
                var i = this,
                    a = this._connection;
                if (null != a && this.userId !== t) {
                    if (null != this._localMediaSinkWantsManager) {
                        this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                        var u = o.map(function(e) {
                            return {
                                type: Q.MediaTypes.VIDEO,
                                rid: e.rid,
                                ssrc: e.ssrc,
                                rtxSsrc: e.rtxSsrc,
                                quality: e.quality,
                                active: r > 0
                            }
                        });
                        0 === u.length && u.push({
                            type: Q.MediaTypes.VIDEO,
                            rid: "100",
                            ssrc: r,
                            rtxSsrc: r + 1,
                            quality: 100,
                            active: r > 0
                        }), this._localMediaSinkWantsManager.setVideoSSRCs(t, u)
                    } else a.createUser(t, n, [r]);
                    null == o || o.forEach(function(e) {
                        100 === e.quality && i.emit(F.RTCConnectionEvent.VideoSourceQualityChanged, i.guildId, i.channelId, t, e.maxResolution, e.maxFrameRate, i.context)
                    })
                }
            }
        }, {
            key: "_handleControlPing",
            value: function(e) {
                !D.default.supports(Q.Features.NATIVE_PING) && this._handlePing(e)
            }
        }, {
            key: "_handlePing",
            value: function(e) {
                if (void 0 !== e) {
                    for (this._pings.push({
                            time: Date.now(),
                            value: e
                        }); this._pings.length >= 200;) this._pings.shift();
                    e > 500 && this._pingBadCount++, this.emit(F.RTCConnectionEvent.Ping, this._pings, this.quality)
                }
            }
        }, {
            key: "_handlePingTimeout",
            value: function(e, t) {
                this._pingTimeouts.push(e);
                var n = this._pingTimeouts.length;
                n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t)
            }
        }, {
            key: "_handleOutboundLossRate",
            value: function(e) {
                this._outboundLossRate = e, this.emit(F.RTCConnectionEvent.OutboundLossRate, e)
            }
        }, {
            key: "_handleSoundshareTrace",
            value: function(e) {
                this._soundshareStats.traceEvent(void 0, e)
            }
        }, {
            key: "_getAnalyticsProperties",
            value: function() {
                var e = P.default.getChannel(this.channelId),
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
        }, {
            key: "_handleClientDisconnect",
            value: function(e) {
                var t = this._videoQuality;
                if (null != t && this.context === Q.MediaEngineContextTypes.DEFAULT) {
                    var n, r, o, i = t.getInboundStats(e),
                        a = null !== (r = null == i ? void 0 : i.num_frames) && void 0 !== r ? r : 0;
                    null != i && a > 0 && (w.default.track(q.AnalyticEvents.VIDEO_STREAM_ENDED, en(er(en({}, this._getAnalyticsProperties()), {
                        media_session_id: this.getMediaSessionId(),
                        sender_user_id: e,
                        reason: "User disconnected",
                        participant_type: "receiver",
                        guild_region: U.default.getRegion(this.hostname),
                        hostname: this.hostname,
                        hardware_enabled: D.default.getHardwareH264()
                    }), i, t.getNetworkStats(), t.getCodecUsageStats("receiver", e))), t.destroyUser(e), null === (o = this._videoHealthManager) || void 0 === o || o.deleteUser(e))
                }
                var u = this._connection;
                null != u && u.destroyUser(e), null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.destroyUser(e)
            }
        }, {
            key: "_handleCodecs",
            value: function(e, t) {
                var n = this._connection;
                null != n && null != this.protocol ? n.setCodecs(null != e && "" !== e ? e : Q.Codecs.OPUS, null != t && "" !== t ? t : Q.Codecs.H264, this.context) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
            }
        }, {
            key: "_handleSDP",
            value: function(e) {
                var t = this._connection;
                null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
            }
        }, {
            key: "_handleMediaSessionId",
            value: function(e) {
                var t, n = this;
                return (t = function() {
                    var t;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return n._mediaSessionId = e, n.logger.info("Setting media-session-id: ".concat(e, " for rtc-connection-id: ").concat(n.getRTCConnectionId())), [4, (0, h.default)()];
                            case 1:
                                return t = r.sent(), w.default.track(q.AnalyticEvents.MEDIA_SESSION_JOINED, er(en({}, n._getAnalyticsProperties()), {
                                    media_session_id: n.getMediaSessionId(),
                                    parent_media_session_id: n.parentMediaSessionId,
                                    raw_thermal_state: t
                                })), E.default.dispatch({
                                    type: "MEDIA_SESSION_JOINED",
                                    mediaSessionId: n.getMediaSessionId(),
                                    context: n.context
                                }), [2]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            Z(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            Z(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })()
            }
        }, {
            key: "_handleMediaSinkWants",
            value: function(e) {
                var t = this._connection;
                this.logger.info("Remote media sink wants: ".concat(JSON.stringify(e))), this._remoteVideoSinkWants = e, null == t || t.setRemoteVideoSinkWants(e)
            }
        }, {
            key: "_handleCodeVersion",
            value: function(e, t) {
                this.voiceVersion = e, this.rtcWorkerVersion = t
            }
        }, {
            key: "_handleKeyframeInterval",
            value: function(e) {
                var t = this._connection;
                null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn("Cannot set keyframe interval on connection with protocol:", this.protocol)
            }
        }, {
            key: "_handleUpdateRtcLog",
            value: function(e) {
                var t;
                this.rtcLogEphemeralKey = e, null === (t = this._connection) || void 0 === t || t.setRtcLogEphemeralKey(e)
            }
        }, {
            key: "_handleBandwidthEstimationExperiment",
            value: function(e) {
                this._bandwidthEstimationExperiment = e;
                var t, n = T.default.getMediaEngineExperiments(e);
                null !== n && 0 !== n.length && (null === (t = this._connection) || void 0 === t || t.setBandwidthEstimationExperiments(n))
            }
        }, {
            key: "_trackSecureFrameTransition",
            value: function(e, t) {
                w.default.track(q.AnalyticEvents.SECURE_FRAMES_TRANSITION, er(en({}, this._getAnalyticsProperties()), {
                    media_session_id: this.getMediaSessionId(),
                    parent_media_session_id: this.parentMediaSessionId,
                    sender_user_id: this.userId,
                    transition_id: e,
                    protocol_version: t
                }))
            }
        }, {
            key: "_handleSecureFramesInit",
            value: function(e) {
                var t, n, r = this;
                e > 0 && this.logger.info("Secure frames init with protocol version: ".concat(e)), e >= 100 ? (null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch("1", e, this.trueChannelId), this._sendMLSKeyPackage()) : null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(0, e, function() {
                    var t;
                    e > 0 && r._trackSecureFrameTransition(0, e), null === (t = r._connection) || void 0 === t || t.executeSecureFramesTransition(0)
                })
            }
        }, {
            key: "_handleSecureFramesPrepareTransition",
            value: function(e, t) {
                var n, r = this;
                this.logger.info("Preparing secure frames transition: ".concat(e, ", protocol version: ").concat(t)), null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(e, t, function() {
                    r._maybeSendSecureFramesTransitionReady(e), r._trackSecureFrameTransition(e, t)
                })
            }
        }, {
            key: "_handleSecureFramesPrepareEpoch",
            value: function(e, t) {
                this.logger.info("Preparing secure frames epoch: ".concat(e, ", protocol version: ").concat(t));
                var n, r = e.toString();
                null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(r, t, this.channelId), "1" === r && this._sendMLSKeyPackage()
            }
        }, {
            key: "_sendMLSKeyPackage",
            value: function() {
                var e, t = this;
                null === (e = this._connection) || void 0 === e || e.getMLSKeyPackage(function(e) {
                    var n;
                    t.logger.info("Got MLS key package, sending to RTC server"), null === (n = t._socket) || void 0 === n || n.sendMLSKeyPackage(e)
                })
            }
        }, {
            key: "_maybeSendSecureFramesTransitionReady",
            value: function(e) {
                if (0 !== e) {
                    var t;
                    this.logger.info("Sending secure frames ready for transition ID ".concat(e)), null === (t = this._socket) || void 0 === t || t.secureFramesReadyForTransition(e)
                }
            }
        }, {
            key: "_handleSecureFramesExecuteTransition",
            value: function(e) {
                var t;
                this.logger.info("Executing secure frames transition: ".concat(e)), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(e)
            }
        }, {
            key: "_handleMLSExternalSenderPackage",
            value: function(e) {
                var t;
                this.logger.info("Received MLS external sender package"), null === (t = this._connection) || void 0 === t || t.updateMLSExternalSender(e)
            }
        }, {
            key: "_handleMLSProposals",
            value: function(e, t) {
                var n, r = this;
                this.logger.info("Received MLS proposals"), null === (n = this._connection) || void 0 === n || n.processMLSProposals(t, function(t) {
                    r.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(t)
                })
            }
        }, {
            key: "_handleMLSPrepareCommitTransition",
            value: function(e, t) {
                var n, r = this;
                this.logger.info("Received MLS commit for transition ID ".concat(e)), null === (n = this._connection) || void 0 === n || n.prepareMLSCommitTransition(e, t, function(t, n) {
                    t ? (r._maybeSendSecureFramesTransitionReady(e), r._trackSecureFrameTransition(e, n)) : r.logger.warn("Failed to process MLS commit for transition ID ".concat(e))
                })
            }
        }, {
            key: "_handleMLSWelcome",
            value: function(e, t) {
                var n, r = this;
                this.logger.info("Received MLS welcome for transition ID ".concat(e)), null === (n = this._connection) || void 0 === n || n.processMLSWelcome(e, t, function(t, n) {
                    t && (r._maybeSendSecureFramesTransitionReady(e), r._trackSecureFrameTransition(e, n))
                })
            }
        }, {
            key: "_getExtraConnectionOptions",
            value: function() {
                return {}
            }
        }, {
            key: "shouldReportPeriodicStats",
            value: function(e) {
                if (e.length > 10) return !1;
                var t = C.default.getCurrentConfig({
                        location: "104dee_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = t.enableSendingVoiceStats,
                    r = t.percentageOfCalls;
                if (!n) return !1;
                var o = this.getMediaSessionId();
                return null != o && (!!(u().v3(o) % 100 <= r) || !1)
            }
        }, {
            key: "getInputDeviceName",
            value: function() {
                var e, t = D.default.getInputDeviceId();
                return null === (e = D.default.getInputDevices()[t]) || void 0 === e ? void 0 : e.name
            }
        }, {
            key: "getOutputDeviceName",
            value: function() {
                var e, t = D.default.getOutputDeviceId();
                return null === (e = D.default.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name
            }
        }, {
            key: "getGoLiveSource",
            value: function() {
                return D.default.getGoLiveSource()
            }
        }], $(r.prototype, o), a && $(r, a), ea
    }(f.default)
}