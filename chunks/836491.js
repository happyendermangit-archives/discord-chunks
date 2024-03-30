function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    });
    var r = n("595182"),
        o = n.n(r),
        i = n("117806"),
        a = n.n(i),
        u = n("565925"),
        s = n.n(u),
        l = n("971793"),
        c = n.n(l),
        f = n("420994"),
        d = n("188129"),
        _ = n("409752"),
        E = n("160718"),
        p = n("919468"),
        m = n("384433"),
        y = n("573889"),
        I = n("684994"),
        h = n("702016"),
        O = n("810604"),
        T = n("302937"),
        S = n("439386"),
        v = n("912872");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function R(e, t, n) {
        return (R = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = C(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                N(e, t, n[t])
            })
        }
        return e
    }

    function D(e, t) {
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

    function L(e, t) {
        return (L = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function M(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || k(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function U(e) {
        return function(e) {
            if (Array.isArray(e)) return g(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || k(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function w(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }

    function k(e, t) {
        if (e) {
            if ("string" == typeof e) return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
        }
    }
    var G = 0;

    function B(e) {
        return null != e && 0 !== e ? e + 1 : 0
    }
    var j = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && L(e, t)
        }(_, e);
        var t, n, r, i, u, l = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = C(t);
            if (n) {
                var a = C(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === w(r) || "function" == typeof r) ? r : A(e)
        });

        function _(e, t, n) {
            var r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), N(A(r = l.call(this, e, t)), "mediaEngineConnectionId", "Native-".concat(G++)), N(A(r), "goLiveSourceIdentifier", void 0), N(A(r), "selfMute", !1), N(A(r), "selfVideo", !1), N(A(r), "forceAudioNormal", !1), N(A(r), "forceAudioPriority", !1), N(A(r), "codecs", []), N(A(r), "videoEncoderFallbackPending", !1), N(A(r), "desktopDegradationPreference", (0, h.getVoiceEngine)().DegradationPreference.MAINTAIN_FRAMERATE), N(A(r), "sourceDesktopDegradationPreference", (0, h.getVoiceEngine)().DegradationPreference.DISABLED), N(A(r), "videoDegradationPreference", (0, h.getVoiceEngine)().DegradationPreference.BALANCED), N(A(r), "localPans", {}), N(A(r), "remoteAudioSSRCs", {}), N(A(r), "remoteVideoSSRCs", {}), N(A(r), "inputMode", v.InputModes.VOICE_ACTIVITY), N(A(r), "vadThreshold", -40), N(A(r), "vadAutoThreshold", !0), N(A(r), "vadUseKrisp", !0), N(A(r), "vadLeading", 5), N(A(r), "vadTrailing", 25), N(A(r), "pttReleaseDelay", 20), N(A(r), "soundshareActive", !1), N(A(r), "soundshareId", null), N(A(r), "soundshareSentSpeakingEvent", !1), N(A(r), "echoCancellation", !0), N(A(r), "noiseSuppression", !0), N(A(r), "automaticGainControl", !0), N(A(r), "noiseCancellation", !1), N(A(r), "experimentalEncoders", !1), N(A(r), "hardwareH264", !0), N(A(r), "attenuationFactor", .5), N(A(r), "attenuateWhileSpeakingSelf", !1), N(A(r), "attenuateWhileSpeakingOthers", !0), N(A(r), "qos", !0), N(A(r), "conn", void 0), N(A(r), "minimumJitterBufferLevel", 0), N(A(r), "postponeDecodeLevel", 100), N(A(r), "reconnectInterval", 6e4), N(A(r), "keyframeInterval", 0), N(A(r), "clipsKeyFrameInterval", 0), N(A(r), "videoQualityMeasurement", ""), N(A(r), "videoEncoderExperiments", ""), N(A(r), "numFastUdpReconnects", 0), N(A(r), "logger", void 0), N(A(r), "handleSpeakingNative", function(e, t) {
                var n = v.SpeakingFlags.NONE;
                n = "boolean" == typeof t ? t ? v.SpeakingFlags.VOICE : v.SpeakingFlags.NONE : t, r.handleSpeakingFlags(e, n)
            }), N(A(r), "handleNativeMuteToggled", function() {
                r.emit(m.BaseConnectionEvent.ToggleMuteFromNative)
            }), N(A(r), "handleSpeakingFlags", function(e, t) {
                r.localSpeakingFlags[e] = t;
                var n = e === r.ids.userId ? r.audioSSRC : r.remoteAudioSSRCs[e];
                r.emit(m.BaseConnectionEvent.Speaking, e, t, n), (t & v.SpeakingFlags.SOUNDSHARE) != 0 && !1 === r.soundshareSentSpeakingEvent && (r.emit(m.BaseConnectionEvent.SoundshareSpeaking), r.soundshareSentSpeakingEvent = !0)
            }), N(A(r), "handleSpeakingWhileMuted", function() {
                r.emit(m.BaseConnectionEvent.SpeakingWhileMuted)
            }), N(A(r), "handlePing", function(e, t, n) {
                r.emit(m.BaseConnectionEvent.Ping, e)
            }), N(A(r), "handlePingTimeout", function(e, t, n, o) {
                r.emit(m.BaseConnectionEvent.PingTimeout, n, o > 0 ? o : 4e3)
            }), N(A(r), "handleVideoEncoderFallback", function(e) {
                !r.videoEncoderFallbackPending && (r.logger.info("Falling back from current video encoder:" + e), r.codecs = r.codecs.map(function(t) {
                    return (e === t.name || "AV1" === t.name && "AV1X" === e) && (t.encode = !1), t
                }).filter(function(e) {
                    return !("video" === e.type && !1 === e.encode && !1 === e.decode)
                }), r.emit(m.BaseConnectionEvent.VideoEncoderFallback, r.codecs), r.videoEncoderFallbackPending = !0)
            }), N(A(r), "handleVideo", function(e, t, n, o) {
                var i = a()(r.videoStreamParameters);
                e === r.ids.userId ? null != o && Array.isArray(o) && o.length > 0 ? o.forEach(function(e) {
                    i.forEach(function(t, n) {
                        t.rid === e.rid && (i[n] = D(P({}, t), {
                            ssrc: e.ssrc,
                            rtxSsrc: e.rtxSsrc,
                            active: e.active
                        }))
                    })
                }) : t > 0 ? (i[0].active = !0, i[0].ssrc = t, i[0].rtxSsrc = B(t)) : i[0].active = !1 : t > 0 && (void 0 !== r.remoteVideoSSRCs[e] ? !r.remoteVideoSSRCs[e].includes(t) && (r.remoteVideoSSRCs[e] = U(r.remoteVideoSSRCs[e]).concat([t])) : r.remoteVideoSSRCs[e] = [t]), r.videoStreamParameters = i, r.emit(m.BaseConnectionEvent.Video, e, null != n && "" !== n ? n : null, e === r.ids.userId ? r.audioSSRC : r.remoteAudioSSRCs[e], t, B(t), r.videoStreamParameters)
            }), N(A(r), "handleFirstFrame", function(e, t, n) {
                r.emit(m.BaseConnectionEvent.FirstFrame, e, t, n)
            }), N(A(r), "handleNoInput", function(e) {
                r.emit(m.BaseConnectionEvent.Silence, !e)
            }), N(A(r), "handleDesktopSourceEnded", function() {
                r.emit(m.BaseConnectionEvent.DesktopSourceEnd)
            }), N(A(r), "handleSoundshare", function(e) {
                e && (r.soundshareActive = !0, r.conn.setTransportOptions({
                    encodingVoiceBitRate: Math.max(v.DEFAULT_SOUNDSHARE_VOICE_BITRATE, r.voiceBitrate)
                }), r.emit(m.BaseConnectionEvent.SoundshareAttached))
            }), N(A(r), "handleSoundshareFailed", function(e, t, n) {
                r.emit(m.BaseConnectionEvent.SoundshareFailed, {
                    failureCode: e,
                    failureReason: t,
                    willRetry: n
                })
            }), N(A(r), "handleSoundshareEnded", function() {
                r.soundshareActive = !1, !r.destroyed && r.conn.setTransportOptions({
                    encodingVoiceBitRate: r.voiceBitrate
                })
            }), N(A(r), "handleNewListenerNative", function(e) {
                if (e === m.BaseConnectionEvent.ConnectionStateChange) r.emit(e, r.connectionState)
            }), N(A(r), "handleStats", function(e) {
                if (r.connectionState === v.ConnectionStates.DISCONNECTED) {
                    r.off(m.BaseConnectionEvent.Stats, r.handleStats);
                    return
                }
                if (null != e) {
                    if (null != r.stats) {
                        var t = c()(e.rtp.outbound, function(e, t) {
                                var n, r;
                                return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0, e
                            }, {
                                lost: 0,
                                sent: 0
                            }),
                            n = c()(r.stats.rtp.outbound, function(e, t) {
                                var n, r;
                                return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0, e
                            }, {
                                lost: 0,
                                sent: 0
                            }),
                            i = t.sent - n.sent,
                            a = t.lost - n.lost;
                        if (0 === i) r.emit(m.BaseConnectionEvent.OutboundLossRate, 0);
                        else if (i > 0 && a >= 0) {
                            var u = o()(a / (i + a), 0, 1);
                            r.emit(m.BaseConnectionEvent.OutboundLossRate, 100 * u)
                        }
                        var s = e.rtp.outbound.filter(function(e) {
                                return "audio" === e.type
                            })[0],
                            l = r.stats.rtp.outbound.filter(function(e) {
                                return "audio" === e.type
                            })[0];
                        if (null != s && null != l && null != s.framesCaptured && null != l.framesCaptured) {
                            var f = s.framesCaptured - l.framesCaptured;
                            if (r.noiseCancellation && f > 50 && null != s.noiseCancellerProcessTime && null != l.noiseCancellerProcessTime) {
                                var d = s.noiseCancellerProcessTime - l.noiseCancellerProcessTime;
                                d / f > 8 ? r.emit(m.BaseConnectionEvent.NoiseCancellationError, v.NoiseCancellerError.CPU_OVERUSE) : 0 === d && r.emit(m.BaseConnectionEvent.NoiseCancellationError, v.NoiseCancellerError.FAILED)
                            }
                            r.inputMode === v.InputModes.VOICE_ACTIVITY && r.vadAutoThreshold && r.vadUseKrisp && f > 50 && null != s.voiceActivityDetectorProcessTime && null != l.voiceActivityDetectorProcessTime && (s.voiceActivityDetectorProcessTime - l.voiceActivityDetectorProcessTime) / f > 4 && r.emit(m.BaseConnectionEvent.VoiceActivityDetectorError, v.NoiseCancellerError.VAD_CPU_OVERUSE)
                        }
                    }
                    r.stats = e
                }
            }), r.logger = new d.Logger("Connection(".concat(e, ")")), r.videoSupported = n, r
        }
        return r = _, i = [{
            key: "initialize",
            value: function(e) {
                var t, n, r, o = this;
                this.logger.info("Creating connection to ".concat(e.address, ":").concat(e.port, " with audio ssrc: ").concat(e.ssrc)), this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.initializeStreamParameters(e.streamParameters), e.streamParameters = [{
                    type: S.MediaTypes.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: "",
                    maxBitrate: 64e3,
                    soundshare: this.context === v.MediaEngineContextTypes.STREAM
                }].concat(U(this.videoStreamParameters));
                var i = (0, h.getVoiceEngine)(),
                    a = null != i.getCodecCapabilities ? i.getCodecCapabilities : i.getSupportedVideoCodecs;
                if (null != i.createOwnStreamConnectionWithOptions) r = this.context === v.MediaEngineContextTypes.STREAM && this.streamUserId === this.ids.userId ? i.createOwnStreamConnectionWithOptions : i.createVoiceConnectionWithOptions;
                else if (null != i.createOwnStreamConnection) {
                    var u = this.context === v.MediaEngineContextTypes.STREAM && this.streamUserId === this.ids.userId ? i.createOwnStreamConnection : i.createVoiceConnection;
                    r = function(e, t, n) {
                        return u(t.ssrc, o.ids.userId, t.address, t.port, n, t.experiments, t.streamParameters)
                    }
                } else r = function(e, t, n) {
                    return new i.VoiceConnection(t.ssrc, e, t.address, t.port, n, t.experiments, t.streamParameters)
                };
                null === (t = (n = this.conn = r(this.ids.userId, e, function(t, r) {
                    if (!o.destroyed) {
                        if (null != t && "" !== t) {
                            o.setConnectionState(v.ConnectionStates.NO_ROUTE), o.emit(m.BaseConnectionEvent.Error, t);
                            return
                        }
                        if (null == r) throw Error("Invalid transport info");
                        var u = r.protocol,
                            s = r.address,
                            l = r.port;
                        o.logger.info("Connected with local address ".concat(s, ":").concat(l, " and protocol: ").concat(u)), a(function(t) {
                            var r = (0, y.getExperimentCodecs)(o.experimentFlags, o.context);
                            o.codecs = [{
                                type: "audio",
                                name: v.Codecs.OPUS,
                                priority: 1,
                                payloadType: 120
                            }].concat(U((0, y.filterVideoCodecs)(t, r).map(function(e, t) {
                                var n = 101 + 2 * t;
                                return {
                                    type: "video",
                                    name: e.name,
                                    priority: t + 1,
                                    payloadType: n,
                                    rtxPayloadType: n + 1,
                                    encode: e.encode,
                                    decode: e.decode
                                }
                            }))), o.logger.info("Video codecs: ".concat(o.codecs.map(function(e) {
                                return e.name
                            }))), n.getEncryptionModes(function(t) {
                                o.logger.info("Encryption modes: ".concat(t)), n.setTransportOptions(o.getConnectionTransportOptions()), n.setSelfMute(o.selfMute || o.context === v.MediaEngineContextTypes.STREAM), n.setSelfDeafen(o.selfDeaf), n.setOnSpeakingCallback(o.handleSpeakingNative), null === (d = n.setOnNativeMuteToggleCallback) || void 0 === d || d.call(n, o.handleNativeMuteToggled), null === (_ = n.setOnSpeakingWhileMutedCallback) || void 0 === _ || _.call(n, o.handleSpeakingWhileMuted), null === (E = n.setPingInterval) || void 0 === E || E.call(n, v.PING_INTERVAL), n.setPingCallback(o.handlePing), null === (p = n.setPingTimeoutCallback) || void 0 === p || p.call(n, o.handlePingTimeout), null === (y = n.setOnVideoEncoderFallbackCallback) || void 0 === y || y.call(n, o.handleVideoEncoderFallback), i.setTransportOptions({
                                    builtInEchoCancellation: !0,
                                    echoCancellation: o.echoCancellation,
                                    noiseSuppression: o.noiseSuppression,
                                    automaticGainControl: o.automaticGainControl,
                                    noiseCancellation: o.noiseCancellation
                                }), i.setNoInputThreshold(-100), i.setNoInputCallback(o.handleNoInput), o.videoSupported && (n.setOnVideoCallback(o.handleVideo), null === (I = n.setOnFirstFrameCallback) || void 0 === I || I.call(n, o.handleFirstFrame), null === (h = n.setOnDesktopSourceEnded) || void 0 === h || h.call(n, o.handleDesktopSourceEnded), null === (O = n.setOnSoundshare) || void 0 === O || O.call(n, o.handleSoundshare), null === (T = n.setOnSoundshareEnded) || void 0 === T || T.call(n, o.handleSoundshareEnded), null === (S = n.setOnSoundshareFailed) || void 0 === S || S.call(n, o.handleSoundshareFailed)), o.setConnectionState(v.ConnectionStates.CONNECTED), o.emit(m.BaseConnectionEvent.Connected, u, {
                                    address: s,
                                    port: l,
                                    mode: o.chooseEncryptionMode(e.modes, t),
                                    codecs: o.codecs
                                }), o.on(m.BaseConnectionEvent.Stats, o.handleStats);
                                var r = o.getUserOptions();
                                r.forEach(function(e) {
                                    var t, n;
                                    return o.logger.info("Creating user: ".concat(e.id, " with audio SSRC: ").concat(e.ssrc, " and video SSRCs: ").concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(",")) && void 0 !== n ? n : 0))
                                }), n.mergeUsers(r), o.emit(m.BaseConnectionEvent.RemoteStreamsReady, r.length);
                                var a = !0,
                                    c = !1,
                                    f = void 0;
                                try {
                                    for (var d, _, E, p, y, I, h, O, T, S, g, A = Object.keys(o.localSpeakingFlags)[Symbol.iterator](); !(a = (g = A.next()).done); a = !0) {
                                        var b = g.value;
                                        b !== o.ids.userId && o.setSpeakingFlags(b, o.localSpeakingFlags[b])
                                    }
                                } catch (e) {
                                    c = !0, f = e
                                } finally {
                                    try {
                                        !a && null != A.return && A.return()
                                    } finally {
                                        if (c) throw f
                                    }
                                }
                            })
                        })
                    }
                })).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, function(e) {
                    if ("videohook_start" === e.type) o.emit(m.BaseConnectionEvent.VideoHookStart);
                    else if ("videohook_stop" === e.type) o.emit(m.BaseConnectionEvent.VideoHookStop);
                    else if ("videohook_initialize" === e.type) o.emit(m.BaseConnectionEvent.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
                    else if ("screenshare_finish" === e.type) {
                        var t;
                        o.emit(m.BaseConnectionEvent.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames)
                    } else "video_state" === e.type ? o.emit(m.BaseConnectionEvent.VideoState, e.state) : e.type.startsWith("soundshare_") && o.emit(m.BaseConnectionEvent.SoundshareTrace, e)
                }), this.on("newListener", this.handleNewListenerNative)
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                this.conn.destroy(), Object.keys(this.localSpeakingFlags).filter(function(t) {
                    return t !== e.ids.userId
                }).forEach(function(t) {
                    return e.emit(m.BaseConnectionEvent.Speaking, t, v.SpeakingFlags.NONE, e.remoteAudioSSRCs[t])
                }), this.setConnectionState(v.ConnectionStates.DISCONNECTED), R(C(_.prototype), "destroy", this).call(this)
            }
        }, {
            key: "setCodecs",
            value: function(e, t, n) {
                this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1)
            }
        }, {
            key: "getStats",
            value: function() {
                var e = this;
                return this.connectionState === v.ConnectionStates.DISCONNECTED ? Promise.resolve(null) : (0, f.timeout)(new Promise(function(t) {
                    null != e.conn.getFilteredStats ? e.conn.getFilteredStats(S.StatsFilter.ALL, function(n) {
                        return t((0, O.default)(e.mediaEngineConnectionId, n, e.remoteVideoSinkWants, e.localVideoSinkWants))
                    }) : null != e.conn.getStats ? e.conn.getStats(function(n) {
                        return t((0, O.default)(e.mediaEngineConnectionId, n, e.remoteVideoSinkWants, e.localVideoSinkWants))
                    }) : (0, h.getVoiceEngine)().getStats(function(n) {
                        return t((0, O.default)(e.mediaEngineConnectionId, n, e.remoteVideoSinkWants, e.localVideoSinkWants))
                    })
                }), E.STATS_INTERVAL).catch(function(e) {
                    var t, n;
                    if (t = e, null != (n = f.TimeoutError) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !n[Symbol.hasInstance](t) : !(t instanceof n)) throw e
                })
            }
        }, {
            key: "createUser",
            value: function(e, t, n) {
                if (0 === t) {
                    this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
                    return
                }
                var r = this.remoteAudioSSRCs[e],
                    o = this.remoteVideoSSRCs[e];
                o = void 0 !== o ? U(o).sort() : [], n = void 0 === n ? null != o ? o : [] : U(n).sort();
                var i = r !== t,
                    a = !s()(o, n);
                if (this.remoteAudioSSRCs[e] = t, this.remoteVideoSSRCs[e] = null != n ? n : [], this.ids.userId !== e && (i || a)) {
                    var u, l = void 0 !== n && n.length > 0 ? n[0] : 0,
                        c = {
                            id: e,
                            ssrc: t,
                            videoSsrc: l,
                            videoSsrcs: n,
                            rtxSsrc: B(l),
                            mute: this.getLocalMute(e),
                            volume: this.getLocalVolume(e)
                        };
                    this.connectionState === v.ConnectionStates.CONNECTED && (this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (u = null == n ? void 0 : n.join(",")) && void 0 !== u ? u : 0)), this.conn.mergeUsers([c]));
                    var f = this.localPans[e];
                    null != f && this.setLocalPan(e, f.left, f.right);
                    var d = this.localSpeakingFlags[e];
                    null != d && d !== v.SpeakingFlags.NONE && this.setSpeakingFlags(e, d)
                }
            }
        }, {
            key: "destroyUser",
            value: function(e) {
                null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e])
            }
        }, {
            key: "setSelfMute",
            value: function(e) {
                this.selfMute = e, this.conn.setSelfMute(e), this.emit(m.BaseConnectionEvent.Mute, e)
            }
        }, {
            key: "setSelfDeaf",
            value: function(e) {
                this.selfDeaf = e, this.conn.setSelfDeafen(e)
            }
        }, {
            key: "setSoundshareSource",
            value: function(e, t) {
                if ((this.soundshareId !== e || !this.soundshareSentSpeakingEvent) && this.context === v.MediaEngineContextTypes.STREAM) {
                    this.soundshareId = e, this.soundshareSentSpeakingEvent = !1;
                    var n = e;
                    null === n && (n = 0), this.conn.setTransportOptions({
                        soundsharePid: n,
                        soundshareEventDriven: !0,
                        soundshareLoopback: t
                    })
                }
            }
        }, {
            key: "setLocalMute",
            value: function(e, t) {
                this.localMutes[e] = t, this.conn.setLocalMute(e, t), this.emit(m.BaseConnectionEvent.LocalMute, e, t)
            }
        }, {
            key: "fastUdpReconnect",
            value: function() {
                null != this.conn.fastUdpReconnect && (this.numFastUdpReconnects += 1, this.conn.fastUdpReconnect())
            }
        }, {
            key: "getNumFastUdpReconnects",
            value: function() {
                return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null
            }
        }, {
            key: "wasRemoteDisconnected",
            value: function() {
                var e, t;
                null === (e = (t = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(t)
            }
        }, {
            key: "setLocalVideoDisabled",
            value: function(e, t) {
                this.disabledLocalVideos[e] = t, this.emit(m.BaseConnectionEvent.LocalVideoDisabled, e, t)
            }
        }, {
            key: "setMinimumJitterBufferLevel",
            value: function(e) {
                this.minimumJitterBufferLevel = e
            }
        }, {
            key: "setPostponeDecodeLevel",
            value: function(e) {
                this.postponeDecodeLevel = e
            }
        }, {
            key: "setClipRecordUser",
            value: function(e, t, n) {
                !this.destroyed && this.conn.setClipRecordUser(e, (this.context === v.MediaEngineContextTypes.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video"), n)
            }
        }, {
            key: "setClipsKeyFrameInterval",
            value: function(e) {
                this.context === v.MediaEngineContextTypes.STREAM && (this.clipsKeyFrameInterval = e, this.conn.setTransportOptions({
                    keyframeInterval: this.getKeyFrameInterval(),
                    alwaysSendVideo: this.keyframeInterval > 0
                }))
            }
        }, {
            key: "setViewerSideClip",
            value: function(e) {
                this.context === v.MediaEngineContextTypes.STREAM && this.conn.setTransportOptions({
                    enableViewerSideClip: e
                })
            }
        }, {
            key: "setQualityDecoupling",
            value: function(e) {
                this.context === v.MediaEngineContextTypes.STREAM && this.conn.setTransportOptions({
                    enableQualityDecoupling: e
                })
            }
        }, {
            key: "getLocalVolume",
            value: function(e) {
                var t, n = this.localVolumes[e];
                return null == n && (n = this.context === v.MediaEngineContextTypes.DEFAULT ? v.DEFAULT_VOLUME : v.DEFAULT_STREAM_VOLUME), (null != (t = n) ? t : v.DEFAULT_VOLUME) / v.DEFAULT_VOLUME
            }
        }, {
            key: "setLocalVolume",
            value: function(e, t) {
                this.localVolumes[e] = t;
                try {
                    this.conn.setLocalVolume(e, this.getLocalVolume(e))
                } catch (n) {
                    this.logger.warn("Failed to set volume for user: ".concat(e, ": ").concat(t))
                }
            }
        }, {
            key: "setLocalPan",
            value: function(e, t, n) {
                this.localPans[e] = {
                    left: t,
                    right: n
                }, this.conn.setLocalPan(e, t, n)
            }
        }, {
            key: "isAttenuating",
            value: function() {
                return this.attenuationFactor < 1
            }
        }, {
            key: "setAttenuation",
            value: function(e, t, n) {
                this.attenuationFactor = (100 - e) / 100, this.attenuateWhileSpeakingSelf = t, this.attenuateWhileSpeakingOthers = n, this.conn.setTransportOptions(this.getAttenuationOptions())
            }
        }, {
            key: "setCanHavePriority",
            value: function(e, t) {
                var n, r;
                null === (n = (r = this.conn).setRemoteUserCanHavePriority) || void 0 === n || n.call(r, e, t)
            }
        }, {
            key: "setBitRate",
            value: function(e) {
                this.setVoiceBitRate(e)
            }
        }, {
            key: "setVoiceBitRate",
            value: function(e) {
                if (this.voiceBitrate !== e) {
                    this.voiceBitrate = e;
                    var t = this.voiceBitrate;
                    this.soundshareActive && (t = Math.max(v.DEFAULT_SOUNDSHARE_VOICE_BITRATE, t)), this.conn.setTransportOptions({
                        encodingVoiceBitRate: t
                    })
                }
            }
        }, {
            key: "setCameraBitRate",
            value: function(e, t, n) {
                null != n || null != t ? this.videoQualityManager.setQuality({
                    bitrateMin: null != n && n > 0 ? n : t,
                    bitrateMax: t
                }) : this.videoQualityManager.setQuality({}), !this.hasDesktopSource() && this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t
                })
            }
        }, {
            key: "setEchoCancellation",
            value: function(e) {
                this.echoCancellation = e, (0, h.getVoiceEngine)().setTransportOptions({
                    echoCancellation: this.echoCancellation
                })
            }
        }, {
            key: "setNoiseSuppression",
            value: function(e) {
                this.noiseSuppression = e, (0, h.getVoiceEngine)().setTransportOptions({
                    noiseSuppression: this.noiseSuppression
                })
            }
        }, {
            key: "setAutomaticGainControl",
            value: function(e) {
                this.automaticGainControl = e, (0, h.getVoiceEngine)().setTransportOptions({
                    automaticGainControl: this.automaticGainControl
                })
            }
        }, {
            key: "setNoiseCancellation",
            value: function(e) {
                this.noiseCancellation = e, (0, h.getVoiceEngine)().setTransportOptions({
                    noiseCancellation: this.noiseCancellation
                })
            }
        }, {
            key: "setExperimentalEncoders",
            value: function(e) {
                this.experimentalEncoders = e, this.conn.setTransportOptions({
                    experimentalEncoders: this.experimentalEncoders
                })
            }
        }, {
            key: "setHardwareH264",
            value: function(e) {
                this.hardwareH264 = e, this.conn.setTransportOptions({
                    hardwareH264: this.hardwareH264
                })
            }
        }, {
            key: "setQoS",
            value: function(e) {
                this.qos = e, this.conn.setTransportOptions({
                    qos: this.qos
                })
            }
        }, {
            key: "setInputMode",
            value: function(e, t) {
                switch (this.inputMode = e, e) {
                    case v.InputModes.PUSH_TO_TALK:
                        this.pttReleaseDelay = t.pttReleaseDelay;
                        break;
                    case v.InputModes.VOICE_ACTIVITY:
                        this.vadThreshold = t.vadThreshold, this.vadAutoThreshold = t.vadAutoThreshold, this.vadUseKrisp = t.vadUseKrisp, this.vadLeading = t.vadLeading, this.vadTrailing = t.vadTrailing;
                        break;
                    default:
                        throw Error("Unknown Input Mode: ".concat(e))
                }
                this.conn.setTransportOptions({
                    inputMode: v.NATIVE_MODE_VALUES[this.inputMode],
                    inputModeOptions: this.createInputModeOptions()
                })
            }
        }, {
            key: "setSilenceThreshold",
            value: function(e) {
                (0, h.getVoiceEngine)().setNoInputThreshold(e)
            }
        }, {
            key: "setForceAudioInput",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                t ? this.forceAudioPriority = e : this.forceAudioNormal = e, this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority)
            }
        }, {
            key: "setSpeakingFlags",
            value: function(e, t) {
                null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & v.SpeakingFlags.VOICE) === v.SpeakingFlags.VOICE), this.handleSpeakingFlags(e, t)
            }
        }, {
            key: "clearAllSpeaking",
            value: function() {}
        }, {
            key: "setEncryption",
            value: function(e, t) {
                this.logger.info("Selected encryption mode: ".concat(e)), this.conn.setTransportOptions({
                    encryptionSettings: {
                        mode: e,
                        secretKey: t
                    }
                })
            }
        }, {
            key: "setReconnectInterval",
            value: function(e) {
                this.reconnectInterval = e, this.conn.setTransportOptions({
                    reconnectInterval: this.reconnectInterval
                })
            }
        }, {
            key: "setKeyframeInterval",
            value: function(e) {
                this.keyframeInterval = e, this.conn.setTransportOptions({
                    keyframeInterval: this.getKeyFrameInterval(),
                    alwaysSendVideo: this.keyframeInterval > 0
                })
            }
        }, {
            key: "setVideoQualityMeasurement",
            value: function(e) {
                this.videoQualityMeasurement = e, this.conn.setTransportOptions({
                    videoQualityMeasurement: this.videoQualityMeasurement
                })
            }
        }, {
            key: "setVideoEncoderExperiments",
            value: function(e) {
                this.videoEncoderExperiments = e, this.conn.setTransportOptions({
                    videoEncoderExperiments: this.videoEncoderExperiments
                })
            }
        }, {
            key: "setVideoBroadcast",
            value: function(e) {
                this.selfVideo !== e && (this.selfVideo = e, this.applyVideoTransportOptions())
            }
        }, {
            key: "setGoLiveSource",
            value: function(e) {
                var t = e.quality,
                    n = t.resolution,
                    r = t.frameRate,
                    o = n <= 480 ? n / 3 * 4 : n / 9 * 16;
                (0 === n || n > 1080) && this.handleVideoEncoderFallback("H265");
                var i = null;
                if (null != e.desktopDescription ? i = e.desktopDescription.id : null != e.cameraDescription && (i = "".concat(e.cameraDescription.videoDeviceGuid, ":").concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === i) {
                    this.setDesktopEncodingOptions(o, n, r);
                    return
                }
                if (this.goLiveSourceIdentifier = i, null != this.conn.setDesktopSource) {
                    if (null != e.desktopDescription) {
                        var a = e.desktopDescription,
                            u = a.id,
                            s = a.soundshareId,
                            l = a.useLoopback,
                            c = a.useVideoHook,
                            f = a.useGraphicsCapture,
                            d = a.useQuartzCapturer,
                            _ = a.allowScreenCaptureKit,
                            E = a.videoHookStaleFrameTimeoutMs,
                            p = a.graphicsCaptureStaleFrameTimeoutMs,
                            m = a.hdrCaptureMode;
                        this.setSoundshareSource(s, l);
                        var y = M(null != u ? u.split(":") : ["", ""], 2),
                            I = y[0],
                            h = y[1];
                        null != u ? this.logger.info("capturing desktop (type: ".concat(I, ", handle: ").concat(h, ", use-video-hook: ").concat(c.toString(), ", use-graphics-capture: ").concat(null == f ? void 0 : f.toString(), ").")) : this.logger.info("capturing desktop (type: <stop>)."), null != this.conn.setDesktopSourceWithOptions ? null != u ? this.conn.setDesktopSourceWithOptions({
                            type: I,
                            sourceId: h,
                            useVideoHook: c,
                            useGraphicsCapture: f,
                            useQuartzCapturer: d,
                            allowScreenCaptureKit: _,
                            videoHookStaleFrameTimeoutMs: E,
                            graphicsCaptureStaleFrameTimeoutMs: p,
                            hdrCaptureMode: m
                        }) : this.conn.clearDesktopSource() : this.conn.setDesktopSource("wumpus-".concat(h), c, I)
                    } else if (null != e.cameraDescription) {
                        var O = e.cameraDescription,
                            T = O.videoDeviceGuid,
                            S = O.audioDeviceGuid;
                        this.conn.setGoLiveDevices({
                            videoInputDeviceId: T,
                            audioInputDeviceId: S
                        })
                    }
                    this.setDesktopEncodingOptions(o, n, r)
                }
            }
        }, {
            key: "clearGoLiveDevices",
            value: function() {
                null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices()
            }
        }, {
            key: "clearDesktopSource",
            value: function() {
                null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), this.goLiveSourceIdentifier = null, null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource("", !1, "")
            }
        }, {
            key: "setDesktopSourceStatusCallback",
            value: function(e) {
                var t, n;
                null === (t = (n = this.conn).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "hasDesktopSource",
            value: function() {
                return null != this.goLiveSourceIdentifier
            }
        }, {
            key: "setDesktopEncodingOptions",
            value: function(e, t, n) {
                if (!this.destroyed) {
                    var r = 0 === t && n >= 10 || t > 720 || n > 30 ? S.DESKTOP_BITRATE_ENHANCED : S.DESKTOP_BITRATE,
                        o = {
                            width: e,
                            height: t,
                            framerate: n
                        },
                        i = this.videoQualityManager.getQuality();
                    (!p.VideoQuality.equals(o, i.capture) || i.bitrateMax !== r) && (this.videoQualityManager.setQuality({
                        capture: o,
                        bitrateMax: r
                    }), this.videoStreamParameters.length > 0 && (this.videoStreamParameters[0].maxResolution = {
                        type: 0 === e && 0 === t ? v.ResolutionTypes.SOURCE : v.ResolutionTypes.FIXED,
                        width: e,
                        height: t
                    }, this.videoStreamParameters[0].maxFrameRate = n, this.videoStreamParameters[0].maxBitrate = r), this.emit(m.BaseConnectionEvent.Video, this.ids.userId, null, this.audioSSRC, this.videoStreamParameters[0].ssrc, B(this.videoStreamParameters[0].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints))
                }
            }
        }, {
            key: "setSDP",
            value: function(e) {}
        }, {
            key: "setRemoteVideoSinkWants",
            value: function(e) {
                this.remoteVideoSinkWants = e, this.updateVideoQuality(S.MEDIA_SINK_WANTS_PROPERTIES)
            }
        }, {
            key: "setLocalVideoSinkWants",
            value: function(e) {
                var t = this.localVideoSinkWants,
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = Object.entries(this.remoteVideoSSRCs)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u, s, l, c, f = M(i.value, 2),
                            d = f[0],
                            _ = f[1],
                            E = 0,
                            p = 0,
                            m = !0,
                            y = !1,
                            I = void 0;
                        try {
                            for (var h, O = _[Symbol.iterator](); !(m = (h = O.next()).done); m = !0) {
                                var T = h.value;
                                E += null == t ? void 0 : t[T], p += null == e ? void 0 : e[T]
                            }
                        } catch (e) {
                            y = !0, I = e
                        } finally {
                            try {
                                !m && null != O.return && O.return()
                            } finally {
                                if (y) throw I
                            }
                        }
                        0 === E && 0 !== p && (null === (u = (s = this.conn).setDisableLocalVideo) || void 0 === u || u.call(s, d, !1)), 0 !== E && 0 === p && (null === (l = (c = this.conn).setDisableLocalVideo) || void 0 === l || l.call(c, d, !0))
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                this.localVideoSinkWants = e
            }
        }, {
            key: "startSamplesPlayback",
            value: function(e, t, n) {
                if (e.numberOfChannels > 2) {
                    n(1, "Too many channels");
                    return
                }
                for (var r = [], o = 0; o < e.numberOfChannels; o++) {
                    var i = e.getChannelData(o);
                    r.push(i)
                }
                try {
                    this.conn.startSamplesPlayback({
                        sampleRate: e.sampleRate,
                        volume: t
                    }, r, n)
                } catch (t) {
                    this.conn.startSamplesPlayback(e.sampleRate, r, n)
                }
            }
        }, {
            key: "stopSamplesPlayback",
            value: function() {
                this.conn.stopSamplesPlayback()
            }
        }, {
            key: "startSamplesLocalPlayback",
            value: function(e, t, n, r) {
                if (t.numberOfChannels > 2) {
                    r(1, "Too many channels");
                    return
                }
                for (var o = [], i = 0; i < t.numberOfChannels; i++) {
                    var a = t.getChannelData(i);
                    o.push(a)
                }
                this.conn.startSamplesLocalPlayback(e, {
                    sampleRate: t.sampleRate,
                    volume: n
                }, o, r)
            }
        }, {
            key: "stopAllSamplesLocalPlayback",
            value: function() {
                this.conn.stopAllSamplesLocalPlayback()
            }
        }, {
            key: "stopSamplesLocalPlayback",
            value: function(e) {
                this.conn.stopSamplesLocalPlayback(e)
            }
        }, {
            key: "setBandwidthEstimationExperiments",
            value: function(e) {
                this.conn.setTransportOptions({
                    bandwidthEstimationExperiments: e
                })
            }
        }, {
            key: "updateVideoQualityCore",
            value: function(e, t) {
                this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e)
            }
        }, {
            key: "setStreamParameters",
            value: function(e) {
                var t = this;
                return new Promise(function(n, r) {
                    var o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, l = t.videoStreamParameters[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                            var c = function() {
                                var n = u.value,
                                    o = e.findIndex(function(e) {
                                        return e.rid === n.rid
                                    });
                                if (-1 === o) return r(Error("Invalid rid")), {
                                    v: void 0
                                };
                                var i = [];
                                !s()(t.videoStreamParameters[o], e[o]) && (t.videoStreamParameters[o] = P({}, e[o]), i.push(P({}, e[o]))), t.conn.setTransportOptions({
                                    streamParameters: i
                                })
                            }();
                            if ("object" === w(c)) return c.v
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !o && null != l.return && l.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    n()
                })
            }
        }, {
            key: "applyVideoTransportOptions",
            value: function() {
                if (this.videoSupported) {
                    var e, t = !1;
                    this.hasDesktopSource() && this.videoStreamParameters.length > 0 && (t = (null === (e = this.videoStreamParameters[0].maxResolution) || void 0 === e ? void 0 : e.type) === v.ResolutionTypes.SOURCE), this.conn.setTransportOptions(this.applyQualityConstraints({
                        encodingVideoDegradationPreference: this.hasDesktopSource() ? t ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference : this.videoDegradationPreference
                    }).constraints), this.conn.setVideoBroadcast(this.selfVideo)
                }
            }
        }, {
            key: "chooseEncryptionMode",
            value: function(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value,
                            s = !0,
                            l = !1,
                            c = void 0;
                        try {
                            for (var f, d = e[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                                var _ = f.value;
                                if (u === _) return u
                            }
                        } catch (e) {
                            l = !0, c = e
                        } finally {
                            try {
                                !s && null != d.return && d.return()
                            } finally {
                                if (l) throw c
                            }
                        }
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return "xsalsa20_poly1305"
            }
        }, {
            key: "getUserOptions",
            value: function() {
                var e = this;
                return Object.keys(this.remoteAudioSSRCs).map(function(t) {
                    var n = void 0 !== e.remoteVideoSSRCs[t] && e.remoteVideoSSRCs[t].length > 0 ? e.remoteVideoSSRCs[t][0] : 0;
                    return {
                        id: t,
                        ssrc: e.remoteAudioSSRCs[t],
                        videoSsrc: n,
                        videoSsrcs: e.remoteVideoSSRCs[t],
                        rtxSsrc: B(n),
                        mute: e.getLocalMute(t),
                        volume: e.getLocalVolume(t)
                    }
                })
            }
        }, {
            key: "createInputModeOptions",
            value: function() {
                switch (this.inputMode) {
                    case v.InputModes.VOICE_ACTIVITY:
                        return {
                            vadThreshold: this.vadThreshold, vadAutoThreshold: this.vadAutoThreshold ? I.VADAggressiveness.VERY_AGGRESSIVE : I.VADAggressiveness.DISABLED, vadUseKrisp: this.vadUseKrisp, vadLeading: this.vadLeading, vadTrailing: this.vadTrailing
                        };
                    case v.InputModes.PUSH_TO_TALK:
                        return {
                            pttReleaseDelay: this.pttReleaseDelay
                        };
                    default:
                        throw Error("Unknown Input Mode: ".concat(this.inputMode))
                }
            }
        }, {
            key: "getAttenuationOptions",
            value: function() {
                return {
                    attenuation: this.isAttenuating(),
                    attenuationFactor: this.attenuationFactor,
                    attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
                    attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers
                }
            }
        }, {
            key: "getCodecParams",
            value: function(e, t) {
                return e !== v.Codecs.H264 ? {} : t ? {
                    "level-asymmetry-allowed": "1",
                    "packetization-mode": "1",
                    "profile-level-id": "42e034",
                    "hardware-h264": this.hardwareH264 && this.useElectronVideo && T.default.useDirectVideo ? "1" : "0"
                } : {
                    "level-asymmetry-allowed": "1",
                    "packetization-mode": "1",
                    "profile-level-id": "android" === (0, h.getVoiceEngine)().platform ? "42e01f" : "4d0033",
                    "hardware-h264": this.hardwareH264 && this.useElectronVideo && T.default.useDirectVideo ? "1" : "0"
                }
            }
        }, {
            key: "getCodecOptions",
            value: function(e, t, n) {
                var r = {
                        type: null !== (f = null == (c = this.codecs.find(function(t) {
                            return t.name === e
                        })) ? void 0 : c.payloadType) && void 0 !== f ? f : 0,
                        name: e,
                        freq: 48e3,
                        pacsize: 960,
                        channels: 1,
                        rate: 64e3
                    },
                    o = [{
                        type: null !== (d = null == c ? void 0 : c.payloadType) && void 0 !== d ? d : 0,
                        name: e,
                        freq: 48e3,
                        channels: 2,
                        params: {
                            stereo: "1"
                        }
                    }];
                n === v.MediaEngineContextTypes.STREAM && (r.channels = 2);
                var i = [],
                    a = {
                        name: "",
                        type: 0,
                        rtxType: 0,
                        params: {}
                    },
                    u = !0,
                    s = !1,
                    l = void 0;
                try {
                    for (var c, f, d, _, E = this.codecs[Symbol.iterator](); !(u = (_ = E.next()).done); u = !0)
                        if ((c = _.value).name !== e) {
                            var p, m, I = {
                                name: (0, y.codecNameToPayloadName)(c.name),
                                type: null !== (p = null == c ? void 0 : c.payloadType) && void 0 !== p ? p : 0,
                                rtxType: null !== (m = null == c ? void 0 : c.rtxPayloadType) && void 0 !== m ? m : 0,
                                params: this.getCodecParams(c.name, !0)
                            };
                            i.push(I), c.name === t && (a = D(P({}, I), {
                                params: this.getCodecParams(c.name, !1)
                            }), this.experimentFlags.has(S.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL) && (a.params["fixed-rate-presentation-timestamps"] = "1"))
                        }
                } catch (e) {
                    s = !0, l = e
                } finally {
                    try {
                        !u && null != E.return && E.return()
                    } finally {
                        if (s) throw l
                    }
                }
                return {
                    videoEncoder: a,
                    videoDecoders: i,
                    audioEncoder: r,
                    audioDecoders: o
                }
            }
        }, {
            key: "getKeyFrameInterval",
            value: function() {
                return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval)
            }
        }, {
            key: "getConnectionTransportOptions",
            value: function() {
                var e = D(P({
                    selfMute: this.selfMute,
                    inputMode: v.NATIVE_MODE_VALUES[this.inputMode],
                    inputModeOptions: this.createInputModeOptions(),
                    minimumJitterBufferLevel: this.minimumJitterBufferLevel,
                    postponeDecodeLevel: this.postponeDecodeLevel
                }, this.getAttenuationOptions()), {
                    fec: !0,
                    packetLossRate: .3,
                    qos: this.qos,
                    prioritySpeakerDucking: v.DEFAULT_PRIORITY_SPEAKER_DUCKING,
                    encodingVoiceBitRate: this.voiceBitrate,
                    callBitRate: v.DEFAULT_CALL_BITRATE,
                    callMinBitRate: v.DEFAULT_CALL_MIN_BITRATE,
                    callMaxBitRate: v.DEFAULT_CALL_MAX_BITRATE,
                    encodingVideoDegradationPreference: this.videoDegradationPreference,
                    experimentalEncoders: this.experimentalEncoders,
                    hardwareH264: this.hardwareH264,
                    reconnectInterval: this.reconnectInterval,
                    userChannelIds: this.ids
                });
                return (0, h.supportsFeature)(v.NativeFeatures.VIDEO_EFFECTS) && this.context === v.MediaEngineContextTypes.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(S.ExperimentFlags.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(S.ExperimentFlags.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(S.ExperimentFlags.SKIP_ENCODE) && (e.skipEncode = !0), e
            }
        }, {
            key: "setStream",
            value: function(e) {
                throw Error("Method not implemented.")
            }
        }, {
            key: "getUserIdBySsrc",
            value: function(e) {}
        }, {
            key: "setRtcLogEphemeralKey",
            value: function(e) {
                this.conn.setTransportOptions({
                    userChannelIds: this.ids,
                    rtcLogEphemeralKey: e
                })
            }
        }, {
            key: "setRtcLogMarker",
            value: function(e) {
                null != this.conn.setRtcLogMarker && this.conn.setRtcLogMarker(e)
            }
        }, {
            key: "prepareSecureFramesTransition",
            value: function(e, t, n) {
                var r, o;
                null === (r = (o = this.conn).prepareSecureFramesTransition) || void 0 === r || r.call(o, e, t, n)
            }
        }, {
            key: "prepareSecureFramesEpoch",
            value: function(e, t, n) {
                var r, o;
                null === (r = (o = this.conn).prepareSecureFramesEpoch) || void 0 === r || r.call(o, e, t, n)
            }
        }, {
            key: "executeSecureFramesTransition",
            value: function(e) {
                var t, n;
                null === (t = (n = this.conn).executeSecureFramesTransition) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "getMLSKeyPackage",
            value: function(e) {
                var t, n;
                null === (t = (n = this.conn).getMLSKeyPackage) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "updateMLSExternalSender",
            value: function(e) {
                var t, n;
                null === (t = (n = this.conn).updateMLSExternalSender) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "processMLSProposals",
            value: function(e, t) {
                var n, r;
                null === (n = (r = this.conn).processMLSProposals) || void 0 === n || n.call(r, e, t)
            }
        }, {
            key: "prepareMLSCommitTransition",
            value: function(e, t, n) {
                var r, o;
                null === (r = (o = this.conn).prepareMLSCommitTransition) || void 0 === r || r.call(o, e, t, n)
            }
        }, {
            key: "processMLSWelcome",
            value: function(e, t, n) {
                var r, o;
                null === (r = (o = this.conn).processMLSWelcome) || void 0 === r || r.call(o, e, t, n)
            }
        }], u = [{
            key: "create",
            value: function(e, t, n) {
                var r = new _(e, t, !0);
                return r.initialize(n), r
            }
        }, {
            key: "createReplay",
            value: function(e, t) {
                var n = new _(e, {
                        userId: "0",
                        channelId: "0",
                        guildId: "0"
                    }, !0),
                    r = (0, h.getVoiceEngine)();
                n.initializeStreamParameters([{
                    type: S.MediaTypes.VIDEO,
                    rid: "100",
                    ssrc: 0,
                    rtxSsrc: 0,
                    quality: 100,
                    active: !1
                }]);
                var o = r.createReplayConnection("default", function(t, o) {
                    var i = null != r.getCodecCapabilities ? r.getCodecCapabilities : r.getSupportedVideoCodecs;
                    n.on(m.BaseConnectionEvent.Stats, n.handleStats), n.conn.setOnVideoCallback(n.handleVideo), i(function(t) {
                        var r = (0, y.getExperimentCodecs)(n.experimentFlags, v.MediaEngineContextTypes.DEFAULT);
                        n.codecs = [{
                            type: "audio",
                            name: v.Codecs.OPUS,
                            priority: 1,
                            payloadType: 120
                        }].concat(U((0, y.filterVideoCodecs)(t, r).map(function(e, t) {
                            var n = 101 + 2 * t;
                            return {
                                type: "video",
                                name: e.name,
                                priority: t + 1,
                                payloadType: n,
                                rtxPayloadType: n + 1,
                                encode: e.encode,
                                decode: e.decode
                            }
                        }))), n.setCodecs(v.Codecs.OPUS, v.Codecs.H264, e), n.conn.startReplay()
                    })
                }, t);
                return null == o ? null : (n.conn = o, n)
            }
        }], i && b(r.prototype, i), u && b(r, u), _
    }(_.default)
}