function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("806927");
    var r = n("264344"),
        o = n.n(r),
        i = n("188129"),
        a = n("259020"),
        u = n("500303"),
        s = n.n(u),
        l = n("409752"),
        c = n("384433"),
        f = n("60937"),
        d = n("278960"),
        _ = n("880803"),
        E = n("840298"),
        p = n("41412"),
        m = n("796426"),
        y = n("778659"),
        I = n("565336"),
        h = n("974584"),
        O = n("555474"),
        T = n("439386"),
        S = n("681751");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    A(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    A(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function P(e, t) {
        return (P = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function D(e, t) {
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
    }
    var L = new i.Logger("MediaEngineWebRTC"),
        M = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && P(e, t)
            }(M, e);
            var t, r, i, a, u, A = (t = M, r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, o, i = C(t);
                if (r) {
                    var a = C(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (n = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : g(e)
            });

            function M() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, M), R(g(e = A.call(this)), "Video", O.default), R(g(e), "Camera", h.default), R(g(e), "_audioContext", null), R(g(e), "outputVolume", T.DEFAULT_VOLUME), R(g(e), "sourceId", T.DEFAULT_DEVICE_ID), R(g(e), "sinkId", T.DEFAULT_DEVICE_ID), R(g(e), "enabled", !1), R(g(e), "connections", new Set), R(g(e), "interacted", !1), R(g(e), "loopback", null), R(g(e), "voiceActivityInput", null), R(g(e), "pendingDesktopInputs", {}), R(g(e), "enablePromise", null), R(g(e), "handleActiveSinksChange", function(t, n) {
                    e.connections.forEach(function(e) {
                        return e.setHasActiveVideoOutputSink(t, n)
                    })
                }), R(g(e), "handleNewListener", function(t) {
                    switch (t) {
                        case c.MediaEngineEvent.DeviceChange:
                            null != navigator.mediaDevices && null == navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = function() {
                                e.handleDeviceChange()
                            }, e.handleDeviceChange());
                            break;
                        case c.MediaEngineEvent.VoiceActivity:
                            null == e.voiceActivityInput && (e.voiceActivityInput = new _.default(e.getAudioContext()), e.voiceActivityInput.setSource(e.sourceId), e.voiceActivityInput.on("voiceactivity", e.handleVoiceActivity), e.enabled && e.voiceActivityInput.enable())
                    }
                }), R(g(e), "handleRemoveListener", function(t) {
                    switch (t) {
                        case c.MediaEngineEvent.DeviceChange:
                            var n;
                            (null === (n = navigator.mediaDevices) || void 0 === n ? void 0 : n.ondevicechange) != null && 0 === e.listenerCount(c.MediaEngineEvent.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
                            break;
                        case c.MediaEngineEvent.VoiceActivity:
                            null != e.voiceActivityInput && 0 === e.listenerCount(c.MediaEngineEvent.VoiceActivity) && (e.voiceActivityInput.destroy(), e.voiceActivityInput = null)
                    }
                }), R(g(e), "handleDeviceChange", function() {
                    return (0, m.getDevices)().then(function(t) {
                        var n, r, o = (r = 3, function(e) {
                                if (Array.isArray(e)) return e
                            }(n = t) || function(e, t) {
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
                            }(n, r) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return v(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                                }
                            }(n, r) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            i = o[0],
                            a = o[1],
                            u = o[2];
                        return e.emit(c.MediaEngineEvent.DeviceChange, i, a, u)
                    })
                }), R(g(e), "handleVoiceActivity", function(t) {
                    e.emit(c.MediaEngineEvent.VoiceActivity, t, 0)
                }), R(g(e), "handleDesktopSourceEnd", function() {
                    e.emit(c.MediaEngineEvent.DesktopSourceEnd)
                }), R(g(e), "handleAudioPermission", function(t) {
                    e.emit(c.MediaEngineEvent.AudioPermission, t)
                }), R(g(e), "handleVideoPermission", function(t) {
                    e.emit(c.MediaEngineEvent.VideoPermission, t)
                }), e.on("newListener", e.handleNewListener), e.on("removeListener", e.handleRemoveListener), (0, d.setActiveSinksChangeCallback)(e.handleActiveSinksChange), (0, f.default)(g(e)), e
            }
            return i = M, a = [{
                key: "destroy",
                value: function() {
                    null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null), this.eachConnection(function(e) {
                        return e.destroy()
                    }), this.emit(c.MediaEngineEvent.Destroy), this.removeAllListeners()
                }
            }, {
                key: "interact",
                value: function() {
                    !this.interacted && (document.createElement("audio").play(), this.interacted = !0), this.eachConnection(function(e) {
                        return e.interact()
                    })
                }
            }, {
                key: "supported",
                value: function() {
                    return !0
                }
            }, {
                key: "supports",
                value: function(e) {
                    switch (e) {
                        case T.Features.AUDIO_INPUT_DEVICE:
                            return m.CAN_SET_DEVICES;
                        case T.Features.AUDIO_OUTPUT_DEVICE:
                            return m.CAN_SET_OUTPUT_DEVICES;
                        case T.Features.VIDEO:
                            return S.BROWSER_SUPPORTS_VIDEO;
                        case T.Features.DESKTOP_CAPTURE:
                            var t;
                            return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
                        case T.Features.VOICE_PROCESSING:
                            return "Chrome" === o().name;
                        case T.Features.NATIVE_PING:
                        case T.Features.DIAGNOSTICS:
                            return S.BROWSER_SUPPORTS_DIAGNOSTICS;
                        case T.Features.DESKTOP_CAPTURE_APPLICATIONS:
                        case T.Features.LOOPBACK:
                        case T.Features.NOISE_SUPPRESSION:
                        case T.Features.AUTOMATIC_GAIN_CONTROL:
                            return "Safari" !== o().name;
                        case T.Features.NOISE_CANCELLATION:
                            return s()();
                        case T.Features.QOS:
                        case T.Features.ATTENUATION:
                        case T.Features.AUTOMATIC_VAD:
                        case T.Features.LEGACY_AUDIO_SUBSYSTEM:
                        case T.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                        case T.Features.DEBUG_LOGGING:
                        case T.Features.VOICE_PANNING:
                        case T.Features.AUTO_ENABLE:
                        case T.Features.DESKTOP_CAPTURE_FORMAT:
                        case T.Features.VIDEO_HOOK:
                        case T.Features.OPEN_H264:
                        case T.Features.AEC_DUMP:
                        case T.Features.DISABLE_VIDEO:
                        case T.Features.CONNECTION_REPLAY:
                        case T.Features.SIMULCAST:
                        case T.Features.SCREEN_CAPTURE_KIT:
                        default:
                            return !1
                    }
                }
            }, {
                key: "getAudioContext",
                value: function() {
                    return null == this._audioContext && (this._audioContext = new AudioContext), this._audioContext
                }
            }, {
                key: "connect",
                value: function(e, t, n) {
                    var r = this;
                    n.ssrc, n.address, n.port, n.modes;
                    var o = n.streamUserId,
                        i = n.streamParameters,
                        a = (0, E.makeConnection)(e, t, this.getAudioContext(), i);
                    return a.streamUserId = o, a.setOutputVolume(this.outputVolume), a.setSinkId(this.sinkId), a.once(l.BaseConnectionEvent.Destroy, function(e) {
                        return r.connections.delete(e)
                    }), a.on(l.BaseConnectionEvent.Silence, function(e) {
                        return r.emit(c.MediaEngineEvent.Silence, e)
                    }), a.on(l.BaseConnectionEvent.DesktopSourceEnd, this.handleDesktopSourceEnd), a.on(l.BaseConnectionEvent.AudioPermission, this.handleAudioPermission), a.on(l.BaseConnectionEvent.VideoPermission, this.handleVideoPermission), this.interacted && a.interact(), e === T.MediaEngineContextTypes.DEFAULT && (a.setAudioSource(this.sourceId), this.enabled && a.input.enableAudioInput()), this.connections.add(a), this.emit(c.MediaEngineEvent.Connection, a), a
                }
            }, {
                key: "findConnection",
                value: function(e) {
                    return Array.from(this.connections).find(function(t) {
                        return null == e || t.context === e
                    })
                }
            }, {
                key: "eachConnection",
                value: function(e, t) {
                    this.connections.forEach(function(n) {
                        (null == t || n.context === t) && e(n)
                    })
                }
            }, {
                key: "enable",
                value: function() {
                    var e = this;
                    return null == this.enablePromise && (this.enablePromise = this._enable().finally(function() {
                        e.enablePromise = null
                    })), this.enablePromise
                }
            }, {
                key: "_enable",
                value: function() {
                    var e = this;
                    return b(function() {
                        var t, n;
                        return D(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (e.enabled) return [2];
                                    return [4, e.getAudioContext().audioWorklet.addModule(y)];
                                case 1:
                                    r.sent(), (t = new _.default(e.getAudioContext())).on("permission", e.handleAudioPermission), r.label = 2;
                                case 2:
                                    return r.trys.push([2, , 6, 7]), [4, t.enable()];
                                case 3:
                                    if (r.sent(), "Firefox" !== o().name) return [3, 5];
                                    return [4, e.handleDeviceChange()];
                                case 4:
                                    r.sent(), r.label = 5;
                                case 5:
                                    return e.enabled = !0, e.eachConnection(function(e) {
                                        return e.input.enableAudioInput()
                                    }, T.MediaEngineContextTypes.DEFAULT), null === (n = e.voiceActivityInput) || void 0 === n || n.enable(), [3, 7];
                                case 6:
                                    return t.destroy(), [7];
                                case 7:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "setInputVolume",
                value: function(e) {}
            }, {
                key: "setOutputVolume",
                value: function(e) {
                    this.outputVolume = e, this.connections.forEach(function(t) {
                        return t.setOutputVolume(e)
                    })
                }
            }, {
                key: "getAudioInputDevices",
                value: function() {
                    return (0, m.getAudioInputDevices)()
                }
            }, {
                key: "setAudioInputDevice",
                value: function(e) {
                    var t, n;
                    this.sourceId = e, this.eachConnection(function(t) {
                        return t.setAudioSource(e)
                    }, T.MediaEngineContextTypes.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e)
                }
            }, {
                key: "getAudioOutputDevices",
                value: function() {
                    return (0, m.getAudioOutputDevices)()
                }
            }, {
                key: "setAudioOutputDevice",
                value: function(e) {
                    var t;
                    this.sinkId = e, this.connections.forEach(function(t) {
                        return t.setSinkId(e)
                    }), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e)
                }
            }, {
                key: "getVideoInputDevices",
                value: function() {
                    return (0, m.getVideoInputDevices)()
                }
            }, {
                key: "setVideoInputDevice",
                value: function(e) {
                    this.eachConnection(function(t) {
                        return t.setVideoSource(e)
                    }, T.MediaEngineContextTypes.DEFAULT)
                }
            }, {
                key: "getSupportedVideoCodecs",
                value: function(e) {
                    e([])
                }
            }, {
                key: "getCodecCapabilities",
                value: function(e) {
                    e("")
                }
            }, {
                key: "getDesktopSource",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = this;
                    return b(function() {
                        var r;
                        return D(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, p.default.get(e, t)];
                                case 1:
                                    return r = o.sent(), n.pendingDesktopInputs[r.id] = r, [2, r.id]
                            }
                        })
                    })()
                }
            }, {
                key: "getDesktopSources",
                value: function() {
                    return Promise.reject(Error("NO_STREAM"))
                }
            }, {
                key: "getScreenPreviews",
                value: function(e, t) {
                    return Promise.reject(Error("UNSUPPORTED"))
                }
            }, {
                key: "getWindowPreviews",
                value: function(e, t) {
                    return Promise.reject(Error("UNSUPPORTED"))
                }
            }, {
                key: "setClipBufferLength",
                value: function(e) {}
            }, {
                key: "saveClip",
                value: function(e, t) {
                    return Promise.reject(Error("UNSUPPORTED"))
                }
            }, {
                key: "saveClipForUser",
                value: function(e, t, n) {
                    return Promise.reject(Error("UNSUPPORTED"))
                }
            }, {
                key: "updateClipMetadata",
                value: function(e, t) {
                    return Promise.reject(Error("UNSUPPORTED"))
                }
            }, {
                key: "exportClip",
                value: function(e, t) {
                    return Promise.reject(Error("UNSUPPORTED"))
                }
            }, {
                key: "setGoLiveSource",
                value: function(e, t) {
                    if (null == e) this.eachConnection(function(e) {
                        return e.setDesktopInput(null)
                    }, t);
                    else if (null != e.desktopDescription && null != this.findConnection(t)) {
                        var n = this.pendingDesktopInputs[e.desktopDescription.id];
                        delete this.pendingDesktopInputs[e.desktopDescription.id], null != n && this.eachConnection(function(e) {
                            return e.setDesktopInput(n)
                        }, t)
                    }
                }
            }, {
                key: "setClipsSource",
                value: function(e) {}
            }, {
                key: "setClipsQualitySettings",
                value: function(e, t, n) {
                    return !1
                }
            }, {
                key: "setSoundshareSource",
                value: function(e, t, n) {}
            }, {
                key: "setAudioSubsystem",
                value: function(e) {}
            }, {
                key: "getAudioSubsystem",
                value: function() {
                    return T.AudioSubsystems.STANDARD
                }
            }, {
                key: "getAudioLayer",
                value: function() {
                    return ""
                }
            }, {
                key: "getDebugLogging",
                value: function() {
                    return !1
                }
            }, {
                key: "setDebugLogging",
                value: function(e) {}
            }, {
                key: "writeAudioDebugState",
                value: function() {
                    return Promise.reject(Error("Audio debug state is not supported."))
                }
            }, {
                key: "setExperimentalAdm",
                value: function(e) {}
            }, {
                key: "setLoopback",
                value: function(e, t) {
                    e && null == this.loopback ? (this.enable(), this.loopback = new I.default(this.getAudioContext(), this.sourceId, this.sinkId), this.loopback.setNoiseCancellation(t.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), this.loopback = null)
                }
            }, {
                key: "getLoopback",
                value: function() {
                    return null != this.loopback
                }
            }, {
                key: "setH264Enabled",
                value: function(e) {}
            }, {
                key: "setAv1Enabled",
                value: function(e) {}
            }, {
                key: "setH265Enabled",
                value: function(e) {}
            }, {
                key: "getCodecSurvey",
                value: function() {
                    return Promise.reject(Error("getCodecSurvey is not implemented on MediaEngine of browsers."))
                }
            }, {
                key: "startAecDump",
                value: function() {}
            }, {
                key: "stopAecDump",
                value: function() {}
            }, {
                key: "setAecDump",
                value: function(e) {}
            }, {
                key: "createReplayConnection",
                value: function(e, t) {
                    throw Error("Connection replay is not supported.")
                }
            }, {
                key: "setUseDirectVideo",
                value: function(e) {}
            }, {
                key: "setMaxSyncDelayOverride",
                value: function(e) {}
            }, {
                key: "rankRtcRegions",
                value: function(e) {
                    return Promise.reject(Error("RTC region latency test is not supported."))
                }
            }, {
                key: "applyMediaFilterSettings",
                value: function(e) {
                    return Promise.resolve()
                }
            }, {
                key: "startLocalAudioRecording",
                value: function() {
                    return Promise.reject(Error("startLocalAudioRecording is not supported."))
                }
            }, {
                key: "stopLocalAudioRecording",
                value: function(e) {}
            }, {
                key: "speedTester",
                value: function(e, t) {
                    throw Error("speedTester is not supported.")
                }
            }, {
                key: "setHasFullbandPerformance",
                value: function(e) {}
            }, {
                key: "getSupportedSecureFramesProtocolVersion",
                value: function() {
                    return 0
                }
            }, {
                key: "getSupportedBandwidthEstimationExperiments",
                value: function(e) {
                    e([])
                }
            }], u = [{
                key: "supported",
                value: function() {
                    return !__OVERLAY__ && (S.BROWSER_SUPPORTS_VOICE && null != window.AudioContext && null != window.RTCPeerConnection ? (n("250678"), !0) : (L.info("WebRTC is not supported on", o().name, o().version), !1))
                }
            }], a && N(i.prototype, a), u && N(i, u), M
        }(a.default)
}