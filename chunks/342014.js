function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SocketEvent: function() {
            return c
        },
        default: function() {
            return k
        }
    });
    var r, o, i, a, u, s, l, c, f = n("512722"),
        d = n.n(f),
        _ = n("235923"),
        E = n("259020"),
        p = n("35523"),
        m = n("306191"),
        y = n("388990"),
        I = n("374550"),
        h = n("439386");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                v(e, t, n[t])
            })
        }
        return e
    }

    function N(e, t) {
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

    function R(e, t) {
        return (R = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function C() {}(r = u || (u = {}))[r.IDENTIFY = 0] = "IDENTIFY", r[r.SELECT_PROTOCOL = 1] = "SELECT_PROTOCOL", r[r.READY = 2] = "READY", r[r.HEARTBEAT = 3] = "HEARTBEAT", r[r.SELECT_PROTOCOL_ACK = 4] = "SELECT_PROTOCOL_ACK", r[r.SPEAKING = 5] = "SPEAKING", r[r.HEARTBEAT_ACK = 6] = "HEARTBEAT_ACK", r[r.RESUME = 7] = "RESUME", r[r.HELLO = 8] = "HELLO", r[r.RESUMED = 9] = "RESUMED", r[r.VIDEO = 12] = "VIDEO", r[r.CLIENT_DISCONNECT = 13] = "CLIENT_DISCONNECT", r[r.SESSION_UPDATE = 14] = "SESSION_UPDATE", r[r.MEDIA_SINK_WANTS = 15] = "MEDIA_SINK_WANTS", r[r.VOICE_BACKEND_VERSION = 16] = "VOICE_BACKEND_VERSION", r[r.CHANNEL_OPTIONS_UPDATE = 17] = "CHANNEL_OPTIONS_UPDATE", r[r.FLAGS = 18] = "FLAGS", r[r.SPEED_TEST = 19] = "SPEED_TEST", r[r.PLATFORM = 20] = "PLATFORM", r[r.SECURE_FRAMES_PREPARE_PROTOCOL_TRANSITION = 21] = "SECURE_FRAMES_PREPARE_PROTOCOL_TRANSITION", r[r.SECURE_FRAMES_EXECUTE_TRANSITION = 22] = "SECURE_FRAMES_EXECUTE_TRANSITION", r[r.SECURE_FRAMES_READY_FOR_TRANSITION = 23] = "SECURE_FRAMES_READY_FOR_TRANSITION", r[r.SECURE_FRAMES_PREPARE_EPOCH = 24] = "SECURE_FRAMES_PREPARE_EPOCH", r[r.MLS_EXTERNAL_SENDER_PACKAGE = 25] = "MLS_EXTERNAL_SENDER_PACKAGE", r[r.MLS_KEY_PACKAGE = 26] = "MLS_KEY_PACKAGE", r[r.MLS_PROPOSALS = 27] = "MLS_PROPOSALS", r[r.MLS_COMMIT_WELCOME = 28] = "MLS_COMMIT_WELCOME", r[r.MLS_PREPARE_COMMIT_TRANSITION = 29] = "MLS_PREPARE_COMMIT_TRANSITION", r[r.MLS_WELCOME = 30] = "MLS_WELCOME", (o = s || (s = {}))[o.AUTHENTICATION_FAILED = 4004] = "AUTHENTICATION_FAILED", o[o.INVALID_SESSION = 4006] = "INVALID_SESSION", o[o.SERVER_NOT_FOUND = 4011] = "SERVER_NOT_FOUND", o[o.SERVER_CRASH = 4015] = "SERVER_CRASH", o[o.CANCELED = 4016] = "CANCELED", o[o.HEARTBEAT_TIMEOUT = 4800] = "HEARTBEAT_TIMEOUT", o[o.UNRESUMABLE = 4801] = "UNRESUMABLE", o[o.RESET_BACKOFF = 4802] = "RESET_BACKOFF", (i = l || (l = {}))[i.DISCONNECTED = 0] = "DISCONNECTED", i[i.CONNECTING = 1] = "CONNECTING", i[i.IDENTIFYING = 2] = "IDENTIFYING", i[i.RESUMING = 3] = "RESUMING", i[i.CONNECTED = 4] = "CONNECTED", i[i.RECONNECTING = 5] = "RECONNECTING";
    var P = 20 * y.default.Millis.SECOND,
        D = 1 * y.default.Millis.MINUTE,
        L = 5 * y.default.Millis.SECOND;

    function M(e) {
        return e.map(function(e) {
            return {
                name: e.name,
                type: e.type,
                priority: 1e3 * e.priority,
                payload_type: e.payloadType,
                rtx_payload_type: e.rtxPayloadType,
                encode: e.encode,
                decode: e.decode
            }
        })
    }

    function U(e) {
        return null == e ? void 0 : e.map(function(e) {
            return {
                type: e.type,
                rid: e.rid,
                ssrc: e.ssrc,
                active: e.active,
                quality: e.quality,
                rtx_ssrc: e.rtxSsrc,
                max_bitrate: e.maxBitrate,
                max_framerate: e.maxFrameRate,
                max_resolution: null != e.maxResolution ? {
                    type: e.maxResolution.type,
                    width: e.maxResolution.width,
                    height: e.maxResolution.height
                } : void 0
            }
        })
    }

    function w(e) {
        var t;
        return null !== (t = null == e ? void 0 : e.map(function(e) {
            return {
                type: function(e) {
                    if ("audio" === e) return h.MediaTypes.AUDIO;
                    if ("test" === e) return h.MediaTypes.TEST;
                    if ("screen" === e) return h.MediaTypes.SCREEN;
                    else return h.MediaTypes.VIDEO
                }(e.type),
                rid: e.rid,
                ssrc: e.ssrc,
                rtxSsrc: e.rtx_ssrc,
                active: e.active,
                quality: e.quality,
                maxBitrate: e.max_bitrate,
                maxFrameRate: e.max_framerate,
                maxResolution: null != e.max_resolution ? {
                    type: e.max_resolution.type,
                    width: e.max_resolution.width,
                    height: e.max_resolution.height
                } : void 0
            }
        })) && void 0 !== t ? t : []
    }(a = c || (c = {})).Connecting = "connecting", a.Connect = "connect", a.Disconnect = "disconnect", a.Resuming = "resuming", a.Ready = "ready", a.Speaking = "speaking", a.Video = "video", a.Ping = "ping", a.ClientDisconnect = "client-disconnect", a.Codecs = "codecs", a.MediaSessionId = "media-session-id", a.MediaSinkWants = "media-sink-wants", a.VoiceBackendVersion = "voice-backend-version", a.KeyframeInterval = "keyframe-interval", a.ChannelOptionsUpdateRtcLog = "channel-options-update-rtc-log", a.ChannelOptionsUpdateSecureFramesProtocol = "update-secure-frames-protocol", a.Flags = "flags", a.Platform = "platform", a.SDP = "sdp", a.Encryption = "encryption", a.SpeedTest = "speed-test", a.BandwidthEstimationExperiment = "bandwidth-estimation-experiment", a.SecureFramesInit = "secure-frames-init", a.SecureFramesPrepareTransition = "secure-frames-prepare-transition", a.SecureFramesExecuteTransition = "secure-frames-execute-transition", a.SecureFramesPrepareEpoch = "secure-frames-prepare-epoch", a.MLSExternalSenderPackage = "mls-external-sender-package", a.MLSProposals = "mls-proposals", a.MLSPrepareCommitTransition = "mls-prepare-commit-transition", a.MLSWelcome = "mls-welcome";
    var k = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && R(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = g(t);
            if (n) {
                var a = g(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : T(e)
        });

        function u(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), v(T(t = a.call(this)), "url", void 0), v(T(t), "logger", new p.default("RTCControlSocket")), v(T(t), "backoff", new _.default(1e3, 5e3)), v(T(t), "webSocket", void 0), v(T(t), "connectionState", void 0), v(T(t), "heartbeatInterval", void 0), v(T(t), "helloTimeout", void 0), v(T(t), "heartbeater", void 0), v(T(t), "lastHeartbeatAckTime", void 0), v(T(t), "expeditedHeartbeatTimeout", void 0), v(T(t), "heartbeatAck", void 0), v(T(t), "heartbeatIntervalModifier", void 0), v(T(t), "connectionStartTime", void 0), v(T(t), "sessionId", void 0), v(T(t), "serverId", void 0), v(T(t), "token", void 0), v(T(t), "resumable", void 0), v(T(t), "serverVersion", 0), t.url = e, t.webSocket = null, t.connectionState = 0, t.helloTimeout = null, t.lastHeartbeatAckTime = null, t.heartbeatInterval = null, t.heartbeater = null, t.heartbeatAck = !0, t.expeditedHeartbeatTimeout = null, t.heartbeatIntervalModifier = 1, t.connectionStartTime = 0, t.sessionId = null, t.serverId = null, t.token = null, t.resumable = !1, t
        }
        return r = u, o = [{
            key: "createWebSocket",
            value: function() {
                var e = this;
                this.logger.info("[CONNECT] ".concat(this.url)), null !== this.webSocket && (this.logger.error("Connect called with already existing websocket"), this.cleanupWebSocket(function(e) {
                    return e.close(4e3)
                })), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(function() {
                    var t = Date.now() - e.connectionStartTime;
                    e.handleClose(!1, 0, "The connection timed out after ".concat(t, " ms - did not receive OP_HELLO in time."))
                }, P);
                var t = this.webSocket = new WebSocket("".concat(this.url, "?v=").concat(7));
                t.binaryType = "arraybuffer", t.onopen = function() {
                    1 === e.connectionState ? e.emit("connect") : 5 === e.connectionState && e.doResumeOrClose(), e.connectionState = 4;
                    var t = Date.now() - e.connectionStartTime;
                    e.logger.info("[CONNECTED] ".concat(e.url, " in ").concat(t, " ms")), e.emit("ping", Math.round(t / 2))
                }, t.onmessage = function(t) {
                    var n = e.parseWebSocketMessage(t),
                        r = n.op,
                        o = n.d;
                    if (m.default.isLoggingGatewayEvents) {
                        if (A(o, Uint8Array)) {
                            var i, a = ((function(e) {
                                if (Array.isArray(e)) return O(e)
                            })(i = o) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                            }(i) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return O(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                                }
                            }(i) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()).map(function(e) {
                                return e.toString(16).padStart(2, "0")
                            }).join("");
                            e.logger.info("~> ".concat(r, ": 0x").concat(a))
                        } else e.logger.info("~> ".concat(r, ": ").concat(JSON.stringify(o)))
                    }
                    switch (r) {
                        case 8:
                            e.clearHelloTimeout(), e.handleHello(o);
                            break;
                        case 2:
                            e.handleReady(o);
                            break;
                        case 9:
                            e.handleResumed(o);
                            break;
                        case 4:
                            o.bandwidth_estimation_experiment && e.emit("bandwidth-estimation-experiment", o.bandwidth_estimation_experiment), e.emit("codecs", o.audio_codec, o.video_codec), o.media_session_id && e.emit("media-session-id", o.media_session_id), o.sdp ? e.emit("sdp", o.sdp) : o.mode && e.emit("encryption", o.mode, o.secret_key), o.keyframe_interval && e.emit("keyframe-interval", o.keyframe_interval), e.emit("secure-frames-init", o.secure_frames_version || 0), e.resumable = !0;
                            break;
                        case 5:
                            var u = o.speaking;
                            "boolean" == typeof u && (u = u ? h.SpeakingFlags.VOICE : h.SpeakingFlags.NONE), e.emit("speaking", o.user_id, o.ssrc, u);
                            break;
                        case 3:
                            e.sendHeartbeat();
                            break;
                        case 6:
                            e.emit("ping", Date.now() - o), e.handleHeartbeatAck(o);
                            break;
                        case 12:
                            e.emit("video", o.user_id, o.audio_ssrc, o.video_ssrc, w(o.streams));
                            break;
                        case 13:
                            e.emit("client-disconnect", o.user_id);
                            break;
                        case 14:
                            (null != o.audio_codec || null != o.video_codec) && e.emit("codecs", o.audio_codec, o.video_codec), null != o.media_session_id && e.emit("media-session-id", o.media_session_id), o.keyframe_interval && e.emit("keyframe-interval", o.keyframe_interval);
                            break;
                        case 15:
                            e.emit("media-sink-wants", o);
                            break;
                        case 16:
                            null != o.voice && null != o.rtc_worker && e.emit("voice-backend-version", o.voice, o.rtc_worker);
                            break;
                        case 17:
                            o.rtc_log_ephemeral_key && e.emit("channel-options-update-rtc-log", o.rtc_log_ephemeral_key);
                            break;
                        case 19:
                            e.emit("speed-test", o.op, o);
                            break;
                        case 18:
                            null != o.flags && null != o.user_id && e.emit("flags", o.user_id, o.flags);
                            break;
                        case 20:
                            null != o.platform && null != o.user_id && e.emit("platform", o.user_id, o.platform);
                            break;
                        case 21:
                            null != o.transition_id && null != o.protocol_version && e.emit("secure-frames-prepare-transition", o.transition_id, o.protocol_version);
                            break;
                        case 22:
                            null != o.transition_id && e.emit("secure-frames-execute-transition", o.transition_id);
                            break;
                        case 24:
                            null != o.epoch && null != o.protocol_version && e.emit("secure-frames-prepare-epoch", o.epoch, o.protocol_version);
                            break;
                        case 25:
                            e.emit("mls-external-sender-package", o);
                            break;
                        case 27:
                            e.emit("mls-proposals", o);
                            break;
                        case 29:
                            var s = new DataView(o.buffer, o.byteOffset, 2).getUint16(0, !1),
                                l = o.slice(2);
                            e.emit("mls-prepare-commit-transition", s, l);
                            break;
                        case 30:
                            var c = new DataView(o.buffer, o.byteOffset, 2).getUint16(0, !1),
                                f = o.slice(2);
                            e.emit("mls-welcome", c, f);
                            break;
                        default:
                            e.logger.info("Unhandled op ".concat(r))
                    }
                }, t.onerror = function() {
                    return e.handleClose(!1, 0, "An error with the websocket occurred")
                }, t.onclose = function(t) {
                    var n = t.wasClean,
                        r = t.code,
                        o = t.reason;
                    return e.handleClose(n, r, o)
                }
            }
        }, {
            key: "send",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this.webSocket;
                if (null != n && n.readyState === WebSocket.OPEN) {
                    var r = JSON.stringify({
                        op: e,
                        d: t
                    });
                    m.default.isLoggingGatewayEvents && this.logger.info("<~ ".concat(r));
                    try {
                        n.send(r)
                    } catch (e) {}
                }
            }
        }, {
            key: "sendBinary",
            value: function(e, t) {
                var n = this.webSocket;
                if (null != n && n.readyState === WebSocket.OPEN) {
                    var r = new Uint8Array(t.byteLength + 1);
                    r[0] = e, r.set(t, 1);
                    try {
                        n.send(r.buffer)
                    } catch (e) {}
                }
            }
        }, {
            key: "ping",
            value: function() {
                this.sendHeartbeat()
            }
        }, {
            key: "doResumeOrClose",
            value: function() {
                var e = Date.now();
                null !== this.serverId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= D) ? (this.doResume(), this.lastHeartbeatAckTime = e) : this.disconnect(!1, 4801, "Cannot resume connection.")
            }
        }, {
            key: "doResume",
            value: function() {
                var e, t;
                this.logger.info("[RESUME] resuming session. serverId=".concat(null !== (e = this.serverId) && void 0 !== e ? e : "", " sessionId=").concat(null !== (t = this.sessionId) && void 0 !== t ? t : "")), this.emit("resuming"), this.connectionState = 3, this.send(7, {
                    token: this.token,
                    session_id: this.sessionId,
                    server_id: this.serverId
                })
            }
        }, {
            key: "handleHello",
            value: function(e) {
                if (this.serverVersion = null !== (t = e.v) && void 0 !== t ? t : 3, this.serverVersion <= 3) {
                    var t, n, r, o = I.isPlatformEmbedded ? .25 : .1;
                    this.heartbeatInterval = e.heartbeat_interval * o
                } else this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier, !I.isPlatformEmbedded && (this.heartbeatInterval = Math.min(L, null !== (n = this.heartbeatInterval) && void 0 !== n ? n : NaN));
                var i = Date.now() - this.connectionStartTime;
                this.logger.info("[HELLO] heartbeat interval: ".concat(null !== (r = this.heartbeatInterval) && void 0 !== r ? r : "??", ", version: ").concat(this.serverVersion, ", took ").concat(i, " ms")), this.startHeartbeater()
            }
        }, {
            key: "handleReady",
            value: function(e) {
                this.backoff.succeed();
                var t = Date.now() - this.connectionStartTime;
                this.logger.info("[READY] took ".concat(t, " ms")), this.serverVersion >= 6 && this.send(16, {}), this.emit("ready", e.ip, e.port, e.modes, e.ssrc, w(e.streams), e.experiments)
            }
        }, {
            key: "handleResumed",
            value: function(e) {
                this.backoff.succeed()
            }
        }, {
            key: "handleClose",
            value: function(e, t, n) {
                var r = this;
                if (this.connectionState = 0, e = e || !1, this.cleanupWebSocket(), 4004 === t || 4015 === t || 4011 === t || 4006 === t) return this.disconnect(e, t, n);
                if (this.backoff.fails > 3) this.logger.warn("[WS CLOSED] Backoff exceed. Resetting."), this.disconnect(e, t, n);
                else {
                    var o = this.backoff.fail(function() {
                        return r.reconnect(e, t, n)
                    });
                    this.logger.warn("[WS CLOSED] (clean: ".concat(e.toString(), ", code: ").concat(t, ", reason: ").concat(n, ") retrying in ").concat((o / 1e3).toFixed(2), " seconds."))
                }
            }
        }, {
            key: "disconnect",
            value: function(e, t, n) {
                this.logger.warn("[DISCONNECT] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.cleanupWebSocket(), this.cleanupState(), this.connectionState = 0, this.emit("disconnect", e, t, n)
            }
        }, {
            key: "reconnect",
            value: function(e, t, n) {
                this.logger.info("[RECONNECT] wasClean=".concat(e.toString(), " code=").concat(t, " reason=").concat(n)), this.cleanupWebSocket(function(e) {
                    return e.close(4e3)
                }), this.connectionState = 5, this.createWebSocket()
            }
        }, {
            key: "cleanupWebSocket",
            value: function(e) {
                this.stopHeartbeater(), this.clearHelloTimeout();
                var t = this.webSocket;
                this.webSocket = null, null != t && (t.onopen = C, t.onmessage = C, t.onerror = C, t.onclose = C, null == e || e(t)), this.backoff.cancel()
            }
        }, {
            key: "cleanupState",
            value: function() {
                this.serverId = null, this.sessionId = null, this.token = null, this.resumable = !1
            }
        }, {
            key: "parseWebSocketMessage",
            value: function(e) {
                if (!A(e.data, ArrayBuffer)) return JSON.parse(e.data);
                var t = new Uint8Array(e.data);
                return {
                    op: t[0],
                    d: t.subarray(1)
                }
            }
        }, {
            key: "clearHelloTimeout",
            value: function() {
                null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
            }
        }, {
            key: "handleHeartbeatAck",
            value: function(e) {
                this.logger.info("Heartbeat ACK received"), this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, this.logger.info("Expedited heartbeat succeeded"))
            }
        }, {
            key: "handleHeartbeatTimeout",
            value: function() {
                var e = this;
                this.cleanupWebSocket(function(e) {
                    return e.close(4e3)
                });
                var t = this.backoff.fail(function() {
                    return e.reconnect(!1, 4800, "Heartbeat timeout.")
                });
                this.logger.warn("[HEARTBEAT ACK TIMEOUT] reconnecting in ".concat((t / 1e3).toFixed(2), " seconds."))
            }
        }, {
            key: "startHeartbeater",
            value: function() {
                var e = this;
                d()(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here."), this.logger.info("Starting heartbeat with interval: ".concat(this.heartbeatInterval)), null !== this.heartbeater && clearInterval(this.heartbeater), this.heartbeatAck = !0, this.heartbeater = setInterval(function() {
                    e.heartbeatAck ? (e.heartbeatAck = !1, e.sendHeartbeat()) : null === e.expeditedHeartbeatTimeout && e.handleHeartbeatTimeout()
                }, this.heartbeatInterval)
            }
        }, {
            key: "sendHeartbeat",
            value: function() {
                this.logger.info("Sending heartbeat"), this.send(3, Date.now())
            }
        }, {
            key: "stopHeartbeater",
            value: function() {
                null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
            }
        }, {
            key: "connect",
            value: function() {
                return 0 !== this.connectionState ? (this.logger.error("Cannot start a new connection, connection state is not disconnected"), !1) : (this.connectionState = 1, this.createWebSocket(), this.emit("connecting"), !0)
            }
        }, {
            key: "identify",
            value: function(e) {
                var t = e.serverId,
                    n = e.userId,
                    r = e.sessionId,
                    o = e.token,
                    i = e.maxSecureFramesVersion,
                    a = e.video,
                    u = e.streamParameters;
                this.serverId = t, this.sessionId = r, this.token = o, this.connectionState = 2, this.send(0, {
                    server_id: t,
                    user_id: n,
                    session_id: r,
                    token: o,
                    max_secure_frames_version: i,
                    video: void 0 !== a && a,
                    streams: U(u)
                })
            }
        }, {
            key: "expeditedHeartbeat",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (null != this.webSocket) this.logger.info("Performing an expedited heartbeat ".concat("" !== n ? "reason: " + n : "")), this.heartbeatAck = !1, this.sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(function() {
                    t.expeditedHeartbeatTimeout = null, !1 === t.heartbeatAck && t.handleHeartbeatTimeout()
                }, e);
                else {
                    if (r) return this.resetBackoff(n);
                    this.logger.info("Expedited heartbeat requested, but is disconnected and a reset was not " + "requested ".concat("" !== n ? "reason: " + n : ""))
                }
                return !1
            }
        }, {
            key: "resetBackoff",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return !!(this.backoff.fails > 0) && null == this.webSocket && (this.logger.info("Connection backoff reset ".concat("" !== e ? "for reason: " + e : "")), this.backoff.succeed(), this.reconnect(!1, 4802, "Reset backoff."), !0)
            }
        }, {
            key: "close",
            value: function() {
                this.logger.info("CLOSE"), this.cleanupWebSocket(function(e) {
                    return e.close(4e3)
                }), this.cleanupState(), this.connectionState = 0, this.emit("disconnect", !0, 1e3, "Force Close")
            }
        }, {
            key: "destroy",
            value: function() {
                this.close()
            }
        }, {
            key: "selectProtocol",
            value: function(e, t, n, r) {
                var o, i = {};
                null == n ? o = null : "sdp" in n && null != n.sdp && "" !== n.sdp ? (o = n.sdp, i = N(b({}, n), {
                    codecs: M(n.codecs),
                    rtc_connection_id: t
                })) : "address" in n && null != n.address && "" !== n.address && n.port && null != n.mode && "" !== n.mode && (o = {
                    address: n.address,
                    port: n.port,
                    mode: n.mode
                }, i = N(b({}, n), {
                    codecs: M(n.codecs),
                    rtc_connection_id: t,
                    experiments: r
                })), this.send(1, b({
                    protocol: e,
                    data: o
                }, i))
            }
        }, {
            key: "updateSession",
            value: function(e) {
                this.send(14, {
                    codecs: M(e.codecs)
                })
            }
        }, {
            key: "speaking",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                this.send(5, {
                    speaking: this.serverVersion <= 3 ? !!e : e,
                    delay: t,
                    ssrc: n
                })
            }
        }, {
            key: "video",
            value: function(e, t, n, r) {
                this.send(12, {
                    audio_ssrc: e,
                    video_ssrc: t,
                    rtx_ssrc: n,
                    streams: U(r)
                })
            }
        }, {
            key: "mediaSinkWants",
            value: function(e) {
                this.serverVersion >= 5 && this.send(15, e)
            }
        }, {
            key: "speedTest",
            value: function(e, t) {
                this.send(19, b({
                    op: e
                }, t))
            }
        }, {
            key: "secureFramesReadyForTransition",
            value: function(e) {
                this.send(23, {
                    transition_id: e
                })
            }
        }, {
            key: "sendMLSKeyPackage",
            value: function(e) {
                this.logger.info("Sending MLS key package"), this.sendBinary(26, new Uint8Array(e))
            }
        }, {
            key: "sendMLSCommitWelcome",
            value: function(e) {
                this.logger.info("Sending MLS commit + welcome message"), this.sendBinary(28, new Uint8Array(e))
            }
        }, {
            key: "setHeartbeatIntervalModifier",
            value: function(e) {
                this.heartbeatIntervalModifier = e
            }
        }], S(r.prototype, o), i && S(r, i), u
    }(E.default)
}