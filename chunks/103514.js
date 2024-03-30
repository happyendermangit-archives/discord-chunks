function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var r = n("264344"),
        o = n.n(r),
        i = n("188129"),
        a = n("259020"),
        u = n("384433"),
        s = n("60937"),
        l = n("836491"),
        c = n("551152"),
        f = n("872898"),
        d = n("702016"),
        _ = n("321521"),
        E = n("302937"),
        p = n("912872");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        return (null != e ? e : p.DEFAULT_VOLUME) / p.DEFAULT_VOLUME
    }
    var A = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(b, e);
        var t, n, r, a, m, A = (t = b, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : y(e)
        });

        function b() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, b), O(y(e = A.call(this)), "Video", E.default), O(y(e), "Camera", _.default), O(y(e), "videoInputDeviceId", p.DISABLED_DEVICE_ID), O(y(e), "connections", new Set), O(y(e), "speedTesters", new Set), O(y(e), "lastVoiceActivity", -1), O(y(e), "audioSubsystem", "standard"), O(y(e), "audioLayer", ""), O(y(e), "deviceChangeGeneration", 0), O(y(e), "consecutiveWatchdogFailures", 0), O(y(e), "codecSurvey", null), O(y(e), "logger", new i.Logger("MediaEngineNative")), O(y(e), "handleDeviceChange", function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++, e.emit(u.MediaEngineEvent.DeviceChange, (0, c.sanitizeDevices)(p.DeviceTypes.AUDIO_INPUT, t), (0, c.sanitizeDevices)(p.DeviceTypes.AUDIO_OUTPUT, n), (0, c.sanitizeDevices)(p.DeviceTypes.VIDEO_INPUT, r))
            }), O(y(e), "handleVolumeChange", function(t, n) {
                e.emit(u.MediaEngineEvent.VolumeChange, t * p.DEFAULT_VOLUME, n * p.DEFAULT_VOLUME)
            }), O(y(e), "handleVoiceActivity", function(t, n) {
                var r = Date.now();
                e.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0 && (-1 === e.lastVoiceActivity || Date.now() - e.lastVoiceActivity > 20) && (e.lastVoiceActivity = r, e.emit(u.MediaEngineEvent.VoiceActivity, t, n))
            }), O(y(e), "handleActiveSinksChange", function(t, n) {
                e.connections.forEach(function(e) {
                    return e.setHasActiveVideoOutputSink(t, n)
                })
            }), O(y(e), "handleNewListener", function(t) {
                switch (t) {
                    case u.MediaEngineEvent.VoiceActivity:
                        null != (0, d.getVoiceEngine)().setEmitVADLevel2 ? (0, d.getVoiceEngine)().setEmitVADLevel2(!0) : (0, d.getVoiceEngine)().setEmitVADLevel(!0, !1, {});
                        break;
                    case u.MediaEngineEvent.DeviceChange:
                        var n = e.deviceChangeGeneration;
                        Promise.all([e.getAudioInputDevices(), e.getAudioOutputDevices(), e.getVideoInputDevices()]).then(function(t) {
                            var r = v(t, 3),
                                o = r[0],
                                i = r[1],
                                a = r[2];
                            n === e.deviceChangeGeneration && e.emit(u.MediaEngineEvent.DeviceChange, o, i, a)
                        })
                }
            }), O(y(e), "handleRemoveListener", function(t) {
                t === u.MediaEngineEvent.VoiceActivity && (null != (0, d.getVoiceEngine)().setEmitVADLevel2 ? (0, d.getVoiceEngine)().setEmitVADLevel2(e.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0) : (0, d.getVoiceEngine)().setEmitVADLevel(e.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0, !1, {}))
            }), O(y(e), "handleVideoInputInitialization", function(t) {
                e.emit(u.MediaEngineEvent.VideoInputInitialized, t)
            });
            var e, t, n = (0, d.getVoiceEngine)();
            if (n.setDeviceChangeCallback(e.handleDeviceChange), n.setVolumeChangeCallback(e.handleVolumeChange), n.setOnVoiceCallback(e.handleVoiceActivity), null === (t = n.setVideoInputInitializationCallback) || void 0 === t || t.call(n, e.handleVideoInputInitialization), n.setTransportOptions({
                    idleJitterBufferFlush: !0,
                    ducking: !1
                }), e.on("removeListener", e.handleRemoveListener), e.on("newListener", e.handleNewListener), null != (0, d.getVoiceEngine)().getAudioSubsystem ? (0, d.getVoiceEngine)().getAudioSubsystem(function(t, n) {
                    e.audioSubsystem = t, e.audioLayer = n
                }) : null != (0, d.getVoiceEngine)().getUseLegacyAudioDevice && (e.audioSubsystem = (0, d.getVoiceEngine)().getUseLegacyAudioDevice() ? p.AudioSubsystems.LEGACY : p.AudioSubsystems.STANDARD), null != n.pingVoiceThread && "undefined" != typeof window && "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL && e.watchdogTick(), e.getDebugLogging() && !b.installedLogHooks) {
                b.installedLogHooks = !0;
                for (var r = 0, o = ["trace", "debug", "info", "warn", "error", "log"]; r < o.length; r++) ! function(e, t) {
                    var n = t[e],
                        r = console,
                        o = r[n];
                    null != o && (r[n] = function() {
                        o.apply(this, arguments);
                        try {
                            var e = Array.from(arguments).map(function(e) {
                                return null != e ? e.toString() : e
                            }).filter(function(e) {
                                return "string" != typeof e || "\nfont-weight: bold;\ncolor: purple;\n" !== e
                            });
                            (0, d.getVoiceEngine)().consoleLog(n, JSON.stringify(e))
                        } catch (e) {}
                    })
                }(r, o)
            }
            return null != n.setActiveSinksChangeCallback && n.setActiveSinksChangeCallback(e.handleActiveSinksChange), (0, s.default)(y(e)), e
        }
        return r = b, a = [{
            key: "destroy",
            value: function() {
                this.eachConnection(function(e) {
                    return e.destroy()
                }), this.emit(u.MediaEngineEvent.Destroy), this.removeAllListeners()
            }
        }, {
            key: "interact",
            value: function() {}
        }, {
            key: "supported",
            value: function() {
                return !0
            }
        }, {
            key: "supports",
            value: function(e) {
                var t, n;
                switch (e) {
                    case p.Features.LEGACY_AUDIO_SUBSYSTEM:
                        return (0, d.supportsFeature)(p.NativeFeatures.VOICE_LEGACY_SUBSYSTEM);
                    case p.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                        return (0, d.supportsFeature)(p.NativeFeatures.VOICE_EXPERIMENTAL_SUBSYSTEM);
                    case p.Features.DEBUG_LOGGING:
                        return (0, d.supportsFeature)(p.NativeFeatures.DEBUG_LOGGING);
                    case p.Features.SOUNDSHARE:
                        return (0, d.supportsFeature)(p.NativeFeatures.SOUNDSHARE);
                    case p.Features.SCREEN_SOUNDSHARE:
                        return (0, d.supportsFeature)(p.NativeFeatures.SCREEN_SOUNDSHARE);
                    case p.Features.ELEVATED_HOOK:
                        return (0, d.supportsFeature)(p.NativeFeatures.ELEVATED_HOOK);
                    case p.Features.LOOPBACK:
                        return (0, d.supportsFeature)(p.NativeFeatures.LOOPBACK);
                    case p.Features.WUMPUS_VIDEO:
                        return (0, d.supportsFeature)(p.NativeFeatures.WUMPUS_VIDEO);
                    case p.Features.HYBRID_VIDEO:
                        return (0, d.supportsFeature)(p.NativeFeatures.HYBRID_VIDEO);
                    case p.Features.ATTENUATION:
                    case p.Features.VIDEO_HOOK:
                        return (null === o() || void 0 === o() ? void 0 : null === (t = o().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(o().os.family);
                    case p.Features.EXPERIMENTAL_SOUNDSHARE:
                        return (0, d.supportsFeature)(p.NativeFeatures.SOUNDSHARE_LOOPBACK);
                    case p.Features.OPEN_H264:
                        return (null === o() || void 0 === o() ? void 0 : null === (n = o().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(o().os.family);
                    case p.Features.EXPERIMENTAL_ENCODERS:
                        return (0, d.supportsFeature)(p.NativeFeatures.EXPERIMENTAL_ENCODERS);
                    case p.Features.REMOTE_LOCUS_NETWORK_CONTROL:
                        return (0, d.supportsFeature)(p.NativeFeatures.REMOTE_LOCUS_NETWORK_CONTROL);
                    case p.Features.SCREEN_PREVIEWS:
                        return (0, d.supportsFeature)(p.NativeFeatures.SCREEN_PREVIEWS);
                    case p.Features.CLIPS:
                        return (0, d.supportsFeature)(p.NativeFeatures.CLIPS);
                    case p.Features.WINDOW_PREVIEWS:
                        return (0, d.supportsFeature)(p.NativeFeatures.WINDOW_PREVIEWS);
                    case p.Features.AUDIO_DEBUG_STATE:
                        return (0, d.supportsFeature)(p.NativeFeatures.AUDIO_DEBUG_STATE);
                    case p.Features.CONNECTION_REPLAY:
                        return (0, d.supportsFeature)(p.NativeFeatures.CONNECTION_REPLAY);
                    case p.Features.SIMULCAST:
                        return (0, d.supportsFeature)(p.NativeFeatures.SIMULCAST) && (0, d.supportsFeature)(p.NativeFeatures.SIMULCAST_BUGFIX);
                    case p.Features.RTC_REGION_RANKING:
                        return (0, d.supportsFeature)(p.NativeFeatures.RTC_REGION_RANKING);
                    case p.Features.DIRECT_VIDEO:
                        return (0, d.supportsFeature)(p.NativeFeatures.DIRECT_VIDEO) && null != window.createDiscordStream;
                    case p.Features.ELECTRON_VIDEO:
                        return (0, d.supportsFeature)(p.NativeFeatures.ELECTRON_VIDEO);
                    case p.Features.MEDIAPIPE:
                        return (0, d.supportsFeature)(p.NativeFeatures.MEDIAPIPE);
                    case p.Features.FIXED_KEYFRAME_INTERVAL:
                        return (0, d.supportsFeature)(p.NativeFeatures.FIXED_KEYFRAME_INTERVAL);
                    case p.Features.FIRST_FRAME_CALLBACK:
                        return (0, d.supportsFeature)(p.NativeFeatures.FIRST_FRAME_CALLBACK);
                    case p.Features.REMOTE_USER_MULTI_STREAM:
                        return (0, d.supportsFeature)(p.NativeFeatures.REMOTE_USER_MULTI_STREAM);
                    case p.Features.SPEED_TEST:
                        return (0, d.supportsFeature)(p.NativeFeatures.SPEED_TEST);
                    case p.Features.IMAGE_QUALITY_MEASUREMENT:
                        return (0, d.supportsFeature)(p.NativeFeatures.IMAGE_QUALITY_MEASUREMENT);
                    case p.Features.AMD_EXPERIMENTAL_RATE_CONTROL:
                        return (0, d.supportsFeature)(p.NativeFeatures.AMD_EXPERIMENTAL_RATE_CONTROL);
                    case p.Features.GO_LIVE_HARDWARE:
                        return (0, d.supportsFeature)(p.NativeFeatures.GO_LIVE_HARDWARE);
                    case p.Features.SCREEN_CAPTURE_KIT:
                        return (0, d.supportsFeature)(p.NativeFeatures.SCREEN_CAPTURE_KIT);
                    case p.Features.CAPTURE_TIMEOUT_EXPERIMENTS:
                        return (0, d.supportsFeature)(p.NativeFeatures.CAPTURE_TIMEOUT_EXPERIMENTS);
                    case p.Features.DIAGNOSTICS:
                    case p.Features.NATIVE_PING:
                    case p.Features.AUTOMATIC_VAD:
                    case p.Features.AUDIO_INPUT_DEVICE:
                    case p.Features.AUDIO_OUTPUT_DEVICE:
                    case p.Features.QOS:
                    case p.Features.VOICE_PROCESSING:
                    case p.Features.AUTO_ENABLE:
                    case p.Features.VIDEO:
                    case p.Features.DESKTOP_CAPTURE:
                    case p.Features.DESKTOP_CAPTURE_FORMAT:
                    case p.Features.DESKTOP_CAPTURE_APPLICATIONS:
                    case p.Features.VOICE_PANNING:
                    case p.Features.AEC_DUMP:
                    case p.Features.DISABLE_VIDEO:
                    case p.Features.SAMPLE_PLAYBACK:
                    case p.Features.NOISE_SUPPRESSION:
                    case p.Features.AUTOMATIC_GAIN_CONTROL:
                        return !0;
                    default:
                        return !1
                }
            }
        }, {
            key: "connect",
            value: function(e, t, n) {
                var r = this;
                !(0, d.supportsFeature)(p.NativeFeatures.EXPERIMENT_CONFIG) && (n.experiments = void 0);
                var o = l.default.create(e, t, n);
                return o.on(u.BaseConnectionEvent.Destroy, function(e) {
                    r.connections.delete(e), r.connectionsEmpty() && (0, d.setProcessPriority)(p.ProcessPriority.NORMAL)
                }), o.on(u.BaseConnectionEvent.Connected, function() {
                    o.setVideoBroadcast(r.shouldConnectionBroadcastVideo(o))
                }), o.on(u.BaseConnectionEvent.Silence, function(e) {
                    r.emit(u.MediaEngineEvent.Silence, e)
                }), this.connections.add(o), (0, d.setProcessPriority)(p.ProcessPriority.HIGH), this.emit(u.MediaEngineEvent.Connection, o), o
            }
        }, {
            key: "shouldConnectionBroadcastVideo",
            value: function(e) {
                return e.context === p.MediaEngineContextTypes.DEFAULT && this.videoInputDeviceId !== p.DISABLED_DEVICE_ID || e.hasDesktopSource()
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
                return Promise.resolve()
            }
        }, {
            key: "setInputVolume",
            value: function(e) {
                (0, d.getVoiceEngine)().setInputVolume(g(e))
            }
        }, {
            key: "setOutputVolume",
            value: function(e) {
                (0, d.getVoiceEngine)().setOutputVolume(g(e))
            }
        }, {
            key: "getAudioInputDevices",
            value: function() {
                return (0, c.getAudioInputDevices)()
            }
        }, {
            key: "setAudioInputDevice",
            value: function(e) {
                (0, d.supportsFeature)(p.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, d.getVoiceEngine)().setInputDevice(e): (0, c.getAudioInputDevices)().then(function(t) {
                    var n, r = null !== (n = t.find(function(t) {
                        return t.id === e
                    })) && void 0 !== n ? n : t[0];
                    null != r && (0, d.getVoiceEngine)().setInputDevice(r.index)
                })
            }
        }, {
            key: "getAudioOutputDevices",
            value: function() {
                return (0, c.getAudioOutputDevices)()
            }
        }, {
            key: "setAudioOutputDevice",
            value: function(e) {
                (0, d.supportsFeature)(p.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, d.getVoiceEngine)().setOutputDevice(e): (0, c.getAudioOutputDevices)().then(function(t) {
                    var n, r = null !== (n = t.find(function(t) {
                        return t.id === e
                    })) && void 0 !== n ? n : t[0];
                    null != r && (0, d.getVoiceEngine)().setOutputDevice(r.index)
                })
            }
        }, {
            key: "getVideoInputDevices",
            value: function() {
                return (0, c.getVideoInputDevices)()
            }
        }, {
            key: "setVideoInputDevice",
            value: function(e) {
                var t, n = this;
                return (t = function() {
                    var t, r, o;
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
                    }(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, n.getVideoInputDevices()];
                            case 1:
                                if ((r = null != (t = i.sent().find(function(t) {
                                        return t.id === e
                                    })) ? t.id : p.DISABLED_DEVICE_ID) === n.videoInputDeviceId) return [2];
                                return n.videoInputDeviceId = r, (0, d.supportsFeature)(p.NativeFeatures.SET_VIDEO_DEVICE_BY_ID) ? (o = null != t ? null != t.originalId && "" !== t.originalId ? t.originalId : t.id : p.DISABLED_DEVICE_ID, (0, d.getVoiceEngine)().setVideoInputDevice(o)) : (0, d.getVoiceEngine)().setVideoInputDevice(null != t ? t.index : -1), n.connections.forEach(function(e) {
                                    return e.setVideoBroadcast(n.shouldConnectionBroadcastVideo(e))
                                }), [2]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            I(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            I(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })()
            }
        }, {
            key: "getSupportedVideoCodecs",
            value: function(e) {
                (0, d.getVoiceEngine)().getSupportedVideoCodecs(e)
            }
        }, {
            key: "getCodecCapabilities",
            value: function(e) {
                (0, d.getVoiceEngine)().getCodecCapabilities(e)
            }
        }, {
            key: "setGoLiveSource",
            value: function(e, t) {
                var n = this;
                if (null == e) {
                    this.eachConnection(function(e) {
                        e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(n.shouldConnectionBroadcastVideo(e))
                    }, t);
                    return
                }
                this.eachConnection(function(r) {
                    (t !== p.MediaEngineContextTypes.STREAM || r.streamUserId === r.ids.userId) && (r.setGoLiveSource(e), r.setVideoBroadcast(n.shouldConnectionBroadcastVideo(r)))
                }, t)
            }
        }, {
            key: "setClipsSource",
            value: function(e) {
                var t = this;
                if (null != (0, d.getVoiceEngine)().setClipsSource && null != (0, d.getVoiceEngine)().setOnClipsRecordingEvent && null != (0, d.getVoiceEngine)().applyClipsSettings) {
                    if (null == e) {
                        (0, d.getVoiceEngine)().setClipsSource({
                            id: "",
                            soundshareId: 0
                        });
                        return
                    }
                    var n = e.quality,
                        r = n.frameRate,
                        o = n.resolution,
                        i = e.desktopDescription,
                        a = i.id,
                        s = i.soundshareId,
                        l = i.useLoopback,
                        c = i.useVideoHook,
                        f = i.useGraphicsCapture,
                        _ = i.useQuartzCapturer,
                        E = i.allowScreenCaptureKit,
                        m = i.hdrCaptureMode;
                    (0, d.getVoiceEngine)().setOnClipsRecordingEvent(function(n) {
                        t.logger.info("Clips recording event: ".concat(p.ClipsRecordingEvent[n], " received for stream ").concat(a, " and sound ").concat(s, ".")), n === p.ClipsRecordingEvent.GoLiveEnded ? t.emit(u.MediaEngineEvent.ClipsRecordingRestartNeeded) : n === p.ClipsRecordingEvent.Error ? t.emit(u.MediaEngineEvent.ClipsInitFailure, "Failed to set clips source in media engine", e.applicationName) : (n === p.ClipsRecordingEvent.Ended || n === p.ClipsRecordingEvent.StoppedByGoLive) && t.emit(u.MediaEngineEvent.ClipsRecordingEnded, a, s)
                    }), (0, d.getVoiceEngine)().applyClipsSettings({
                        useVideoHook: c,
                        useGraphicsCapture: f,
                        useQuartzCapturer: _,
                        allowScreenCaptureKit: E,
                        hdrCaptureMode: m,
                        soundshareLoopback: l,
                        frameRate: r,
                        width: o <= 480 ? o / 3 * 4 : o / 9 * 16,
                        height: o
                    });
                    var y = v(null != a ? a.split(":") : ["", ""], 2),
                        I = (y[0], y[1]);
                    (0, d.getVoiceEngine)().setClipsSource({
                        id: I,
                        soundshareId: null != s ? s : 0
                    })
                }
            }
        }, {
            key: "setClipsQualitySettings",
            value: function(e, t, n) {
                var r = (0, d.getVoiceEngine)();
                return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0)
            }
        }, {
            key: "setSoundshareSource",
            value: function(e, t, n) {
                this.eachConnection(function(r) {
                    (n !== p.MediaEngineContextTypes.STREAM || r.streamUserId === r.ids.userId) && r.setSoundshareSource(e, t)
                }, n)
            }
        }, {
            key: "getDesktopSource",
            value: function() {
                return Promise.reject(Error("NO_STREAM"))
            }
        }, {
            key: "getDesktopSources",
            value: function() {
                return new Promise(function(e) {
                    null != (0, d.getVoiceEngine)().getDesktopSources ? (0, d.getVoiceEngine)().getDesktopSources(function(t) {
                        return e(t)
                    }) : e([])
                })
            }
        }, {
            key: "getScreenPreviews",
            value: function(e, t) {
                return new Promise(function(n) {
                    null != (0, d.getVoiceEngine)().getScreenPreviews ? (0, d.getVoiceEngine)().getScreenPreviews(e, t, function(e) {
                        n(e.map(function(e, t) {
                            var n, r;
                            return n = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        O(e, t, n[t])
                                    })
                                }
                                return e
                            }({}, e), r = (r = {
                                name: "Screen " + (t + 1)
                            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(r)).forEach(function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                            }), n
                        }))
                    }) : n([])
                })
            }
        }, {
            key: "setClipBufferLength",
            value: function(e) {
                var t, n;
                null === (t = (n = (0, d.getVoiceEngine)()).setClipBufferLength) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "saveClip",
            value: function(e, t) {
                var n = (0, d.getVoiceEngine)();
                return null == n.setClipBufferLength || null == n.saveClip ? Promise.reject("unsupported") : new Promise(function(r, o) {
                    n.saveClip(e, t, function(e, t, n) {
                        return r({
                            duration: e,
                            clipStats: JSON.parse(n)
                        })
                    }, function(e) {
                        return o(JSON.parse(e))
                    })
                })
            }
        }, {
            key: "saveClipForUser",
            value: function(e, t, n) {
                var r = (0, d.getVoiceEngine)();
                return null == r.saveClipForUser ? Promise.reject("unsupported") : new Promise(function(o, i) {
                    r.saveClipForUser(e, t, n, function(e, t, n) {
                        return o({
                            duration: e,
                            clipStats: JSON.parse(n)
                        })
                    }, function(e) {
                        return i(JSON.parse(e))
                    })
                })
            }
        }, {
            key: "updateClipMetadata",
            value: function(e, t) {
                var n = (0, d.getVoiceEngine)();
                return null == n.updateClipMetadata ? Promise.reject("unsupported") : new Promise(function(r, o) {
                    n.updateClipMetadata(e, t, r, o)
                })
            }
        }, {
            key: "exportClip",
            value: function(e, t) {
                var n = (0, d.getVoiceEngine)();
                return null == n.exportClip ? Promise.reject("unsupported") : new Promise(function(r, o) {
                    n.exportClip(e, t, function(e) {
                        return r(new Blob([e]))
                    }, o)
                })
            }
        }, {
            key: "getWindowPreviews",
            value: function(e, t) {
                return new Promise(function(n) {
                    null != (0, d.getVoiceEngine)().getWindowPreviews ? (0, d.getVoiceEngine)().getWindowPreviews(e, t, function(e) {
                        n(e)
                    }) : n([])
                })
            }
        }, {
            key: "setAudioSubsystem",
            value: function(e) {
                null != (0, d.getVoiceEngine)().setAudioSubsystem ? (0, d.getVoiceEngine)().setAudioSubsystem(e) : (0, d.getVoiceEngine)().setUseLegacyAudioDevice(e === p.AudioSubsystems.LEGACY)
            }
        }, {
            key: "getAudioSubsystem",
            value: function() {
                return this.audioSubsystem
            }
        }, {
            key: "getAudioLayer",
            value: function() {
                return this.audioLayer
            }
        }, {
            key: "getDebugLogging",
            value: function() {
                return !!this.supports(p.Features.DEBUG_LOGGING) && (0, d.getVoiceEngine)().getDebugLogging()
            }
        }, {
            key: "setDebugLogging",
            value: function(e) {
                this.supports(p.Features.DEBUG_LOGGING) && (0, d.getVoiceEngine)().setDebugLogging(e)
            }
        }, {
            key: "setExperimentalAdm",
            value: function(e) {
                var t = this,
                    n = (0, d.getVoiceEngine)(),
                    r = n.setExperimentalAdm,
                    o = n.getAudioSubsystem;
                null == r || r(e), null == o || o(function(e) {
                    t.audioSubsystem = e
                })
            }
        }, {
            key: "setLoopback",
            value: function(e, t) {
                null != (0, d.getVoiceEngine)().setLoopback && (0, d.getVoiceEngine)().setLoopback(e, {
                    echoCancellation: t.echoCancellation,
                    noiseSuppression: t.noiseSuppression,
                    automaticGainControl: t.automaticGainControl,
                    noiseCancellation: t.noiseCancellation
                }), null != (0, d.getVoiceEngine)().setEmitVADLevel2 ? (0, d.getVoiceEngine)().setEmitVADLevel2(e || this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0) : (0, d.getVoiceEngine)().setEmitVADLevel(e || this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0, e, {
                    echoCancellation: t.echoCancellation,
                    noiseSuppression: t.noiseSuppression,
                    automaticGainControl: t.automaticGainControl,
                    noiseCancellation: t.noiseCancellation
                })
            }
        }, {
            key: "getLoopback",
            value: function() {
                return !1
            }
        }, {
            key: "setH264Enabled",
            value: function(e) {
                (0, d.getVoiceEngine)().setTransportOptions({
                    h264Enabled: e
                })
            }
        }, {
            key: "setAv1Enabled",
            value: function(e) {
                (0, d.getVoiceEngine)().setTransportOptions({
                    av1Enabled: e
                })
            }
        }, {
            key: "setH265Enabled",
            value: function(e) {
                (0, d.getVoiceEngine)().setTransportOptions({
                    h265Enabled: e
                })
            }
        }, {
            key: "getCodecSurvey",
            value: function() {
                var e = this;
                return null != this.codecSurvey ? Promise.resolve(this.codecSurvey) : new Promise(function(t, n) {
                    var r = (0, d.getVoiceEngine)();
                    null != r.getCodecSurvey ? r.getCodecSurvey(function(n) {
                        e.codecSurvey = n, t(n)
                    }) : n(Error("getCodecSurvey is not implemented."))
                })
            }
        }, {
            key: "writeAudioDebugState",
            value: function() {
                return new Promise(function(e, t) {
                    var n = (0, d.getVoiceEngine)().writeAudioDebugState;
                    null != n ? (n(), e()) : t(Error("Audio debug state is not supported."))
                })
            }
        }, {
            key: "startAecDump",
            value: function() {}
        }, {
            key: "stopAecDump",
            value: function() {}
        }, {
            key: "setAecDump",
            value: function(e) {
                var t, n;
                null === (t = (n = (0, d.getVoiceEngine)()).setAecDump) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "rankRtcRegions",
            value: function(e) {
                return new Promise(function(t, n) {
                    var r = (0, d.getVoiceEngine)().rankRtcRegions;
                    null != r ? r(e, function(e) {
                        return t(e)
                    }) : n(Error("RTC region latency test is not supported."))
                })
            }
        }, {
            key: "createReplayConnection",
            value: function(e, t) {
                var n = this,
                    r = l.default.createReplay(e, t);
                return null == r ? null : (r.on(u.BaseConnectionEvent.Destroy, function(e) {
                    n.connections.delete(e), n.connectionsEmpty() && (0, d.setProcessPriority)(p.ProcessPriority.NORMAL)
                }), this.connections.add(r), (0, d.setProcessPriority)(p.ProcessPriority.HIGH), this.emit(u.MediaEngineEvent.Connection, r), r)
            }
        }, {
            key: "setUseDirectVideo",
            value: function(e) {
                E.default.useDirectVideo = e
            }
        }, {
            key: "setMaxSyncDelayOverride",
            value: function(e) {
                var t = (0, d.getVoiceEngine)().setMaxSyncDelayOverride;
                null != t && t(e)
            }
        }, {
            key: "applyMediaFilterSettings",
            value: function(e) {
                var t = (0, d.getVoiceEngine)(),
                    n = t.applyMediaFilterSettings,
                    r = t.applyMediaFilterSettingsWithCallback;
                return null != r ? new Promise(function(t, n) {
                    r(e, t)
                }) : (null != n && n(e), Promise.resolve())
            }
        }, {
            key: "startLocalAudioRecording",
            value: function(e) {
                return new Promise(function(t, n) {
                    var r = (0, d.getVoiceEngine)().startLocalAudioRecording;
                    null != r ? r(e, function(e) {
                        e ? t() : n(Error("Failed to start local audio recording."))
                    }) : n(Error("startLocalAudioRecording is not supported."))
                })
            }
        }, {
            key: "stopLocalAudioRecording",
            value: function(e) {
                var t, n;
                null === (t = (n = (0, d.getVoiceEngine)()).stopLocalAudioRecording) || void 0 === t || t.call(n, function(t, n) {
                    e(t, n)
                }), this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0 && null != (0, d.getVoiceEngine)().setEmitVADLevel2 && (0, d.getVoiceEngine)().setEmitVADLevel2(!0)
            }
        }, {
            key: "speedTester",
            value: function(e, t) {
                var n = this;
                if (!this.supports(p.Features.SPEED_TEST)) throw Error("speedTester is not supported.");
                var r = f.default.create(e, t);
                return r.on(u.BaseSpeedTesterEvent.Destroy, function(e) {
                    n.speedTesters.delete(e), n.connectionsEmpty() && (0, d.setProcessPriority)(p.ProcessPriority.NORMAL)
                }), this.speedTesters.add(r), (0, d.setProcessPriority)(p.ProcessPriority.HIGH), r
            }
        }, {
            key: "setHasFullbandPerformance",
            value: function(e) {
                null != (0, d.getVoiceEngine)().setHasFullbandPerformance && (0, d.getVoiceEngine)().setHasFullbandPerformance(e)
            }
        }, {
            key: "getSupportedSecureFramesProtocolVersion",
            value: function() {
                var e;
                return null !== (e = (0, d.getVoiceEngine)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0
            }
        }, {
            key: "getSupportedBandwidthEstimationExperiments",
            value: function(e) {
                null != (0, d.getVoiceEngine)().getSupportedBandwidthEstimationExperiments && (0, d.getVoiceEngine)().getSupportedBandwidthEstimationExperiments(e)
            }
        }, {
            key: "watchdogTick",
            value: function() {
                var e = this,
                    t = !1;
                (0, d.getVoiceEngine)().pingVoiceThread(function() {
                    t = !0, e.consecutiveWatchdogFailures = 0
                }), setTimeout(function() {
                    !t && ++e.consecutiveWatchdogFailures > 1 ? e.emit(u.MediaEngineEvent.WatchdogTimeout) : e.watchdogTick()
                }, p.WATCHDOG_TIMEOUT_MS)
            }
        }, {
            key: "connectionsEmpty",
            value: function() {
                return 0 === this.connections.size && 0 === this.speedTesters.size
            }
        }], m = [{
            key: "supported",
            value: function() {
                return (0, d.supported)()
            }
        }], a && h(r.prototype, a), m && h(r, m), b
    }(a.default);
    O(A, "installedLogHooks", !1)
}