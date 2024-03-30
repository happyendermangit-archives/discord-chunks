function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EncoderParameter: function() {
            return o
        },
        default: function() {
            return A
        }
    });
    var r, o, i = n("874141"),
        a = n.n(i),
        u = n("565925"),
        s = n.n(u),
        l = n("409752"),
        c = n("384433"),
        f = n("995425"),
        d = n("983934"),
        _ = n("508601"),
        E = n("556010"),
        p = n("439386"),
        m = n("681751");

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

    function T(e, t, n) {
        return (T = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = S(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function g(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }(r = o || (o = {}))[r.AUDIO_BITRATE = 0] = "AUDIO_BITRATE", r[r.VIDEO_RESOLUTION_SCALE = 1] = "VIDEO_RESOLUTION_SCALE", r[r.VIDEO_BITRATE = 2] = "VIDEO_BITRATE", r[r.VIDEO_FRAMERATE = 3] = "VIDEO_FRAMERATE";
    var A = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
        }(l, e);
        var t, n, r, o, i, u = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = S(t);
            if (n) {
                var a = S(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === g(r) || "function" == typeof r) ? r : y(e)
        });

        function l(e, t, n, r) {
            var o;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), O(y(o = u.call(this, e, t)), "input", void 0), O(y(o), "silenced", !1), O(y(o), "interacted", !1), O(y(o), "outputVolume", p.DEFAULT_VOLUME), O(y(o), "sinkId", p.DEFAULT_DEVICE_ID), O(y(o), "lastPingTime", 0), O(y(o), "outputs", {}), O(y(o), "webrtcStats", new _.WebRTCStatsCalculator), O(y(o), "silenceThreshold", -100), O(y(o), "canHavePriority", new Set), O(y(o), "prioritySpeakers", new Set), O(y(o), "audioContext", void 0), O(y(o), "setEchoCancellation", function(e) {
                return o.input.setEchoCancellation(e)
            }), O(y(o), "setNoiseSuppression", function(e) {
                return o.input.setNoiseSuppression(e)
            }), O(y(o), "setNoiseCancellation", function(e) {
                return o.input.setNoiseCancellation(e)
            }), O(y(o), "setAutomaticGainControl", function(e) {
                return o.input.setAutomaticGainControl(e)
            }), O(y(o), "setAudioSource", function(e) {
                return o.input.setAudioSource(e)
            }), O(y(o), "setVideoSource", function(e) {
                return o.input.setVideoSource(e)
            }), O(y(o), "setDesktopInput", function(e) {
                return o.input.setDesktop(e)
            }), O(y(o), "setForceAudioInput", function(e) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o.input.setPTTActive(e)
            }), O(y(o), "setSelfMute", function(e) {
                o.input.setMute(e), o.emit(c.BaseConnectionEvent.Mute, e)
            }), O(y(o), "handleAddVideoTrack", function() {
                o.updateVideoQuality()
            }), O(y(o), "handleAudioPermission", function(e) {
                return o.emit(c.BaseConnectionEvent.AudioPermission, e)
            }), O(y(o), "handleVideoPermission", function(e) {
                return o.emit(c.BaseConnectionEvent.VideoPermission, e)
            }), O(y(o), "handleVideo", function(e) {
                var t;
                return o.emit(c.BaseConnectionEvent.Video, o.ids.userId, e, o.audioSSRC, o.videoStreamParameters[0].ssrc, null !== (t = o.videoStreamParameters[0].rtxSsrc) && void 0 !== t ? t : 0, o.videoStreamParameters)
            }), O(y(o), "handleDesktopSourceEnd", function() {
                return o.emit(c.BaseConnectionEvent.DesktopSourceEnd)
            }), O(y(o), "handleStream", function(e) {
                return o.setStream(e)
            }), O(y(o), "handleVoiceActivity", function(e) {
                var t = e <= o.silenceThreshold;
                o.silenced !== t && !o.input.mute() && (o.silenced = t, o.emit(c.BaseConnectionEvent.Silence, t))
            }), O(y(o), "handleNewListener", function(e) {
                switch (e) {
                    case c.BaseConnectionEvent.Video:
                        o.videoReady && setImmediate(function() {
                            return o.handleVideo(o.input.getVideoStreamId())
                        });
                        break;
                    case c.BaseConnectionEvent.ConnectionStateChange:
                        o.emit(e, o.connectionState);
                        break;
                    case c.BaseConnectionEvent.InteractionRequired:
                        !o.interacted && "suspended" === o.input.getAudioState() && setImmediate(function() {
                            return o.emit(e, !0)
                        })
                }
            }), O(y(o), "handleInputSpeaking", function(e) {
                o.emit(c.BaseConnectionEvent.Speaking, o.ids.userId, e ? p.SpeakingFlags.VOICE : p.SpeakingFlags.NONE, o.audioSSRC)
            }), O(y(o), "handleAudioContextStateChange", function() {
                !o.interacted && "running" === o.input.getAudioState() && (o.interact(), o.emit(c.BaseConnectionEvent.InteractionRequired, !1))
            }), O(y(o), "handleStats", function(e) {
                if (o.connectionState === p.ConnectionStates.DISCONNECTED) {
                    o.off(c.BaseConnectionEvent.Stats, o.handleStats);
                    return
                }
                null != e && (o.webrtcStats.update(e), o.stats = e, Date.now() - o.lastPingTime >= p.PING_INTERVAL && (o.emit(c.BaseConnectionEvent.Ping, e.transport.ping), o.lastPingTime = Date.now()))
            }), o.input = new f.default(n), n.addEventListener("statechange", o.handleAudioContextStateChange), o.audioContext = n, o.input.on(f.InputEvent.AudioPermission, o.handleAudioPermission), o.input.on(f.InputEvent.VideoPermission, o.handleVideoPermission), o.input.on(f.InputEvent.Video, o.handleVideo), o.input.on(f.InputEvent.Mute, function(e) {
                return o.emit(c.BaseConnectionEvent.Mute, e)
            }), o.input.on(f.InputEvent.Stream, o.handleStream), o.input.on(f.InputEvent.DesktopSourceEnd, o.handleDesktopSourceEnd), o.input.on(f.InputEvent.Speaking, o.handleInputSpeaking), o.input.on(f.InputEvent.AddVideoTrack, o.handleAddVideoTrack), o.input.on(f.InputEvent.Video, o.handleAddVideoTrack), o.on("newListener", o.handleNewListener), o.initializeStreamParameters(r), o
        }
        return r = l, o = [{
            key: "interact",
            value: function() {
                this.interacted = !0;
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = Object.keys(this.outputs)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value;
                        this.outputs[i].play()
                    }
                } catch (e) {
                    t = !0, n = e
                } finally {
                    try {
                        !e && null != o.return && o.return()
                    } finally {
                        if (t) throw n
                    }
                }
                this.input.resumeAudio()
            }
        }, {
            key: "destroy",
            value: function() {
                T(S(l.prototype), "destroy", this).call(this);
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = Object.keys(this.outputs)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value;
                        this.destroyOutput(i)
                    }
                } catch (e) {
                    t = !0, n = e
                } finally {
                    try {
                        !e && null != o.return && o.return()
                    } finally {
                        if (t) throw n
                    }
                }
                this.input.destroy()
            }
        }, {
            key: "getStats",
            value: function() {
                var e, t = this;
                return (e = function() {
                    var e;
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
                    }(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!m.BROWSER_SUPPORTS_DIAGNOSTICS) return [2, null];
                                return [4, t.getRawStats()];
                            case 1:
                                return e = n.sent(), [2, (0, E.default)(e, t.getUserIdBySsrc, t.remoteVideoSinkWants, t.localVideoSinkWants)]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

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
            key: "setInputMode",
            value: function(e, t) {
                this.input.setAudioMode(e, {
                    delay: t.pttReleaseDelay,
                    threshold: t.vadThreshold
                })
            }
        }, {
            key: "setSelfDeaf",
            value: function(e) {
                this.selfDeaf = e;
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(this.outputs)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        this.outputs[a].mute = e || this.localMutes[a]
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
        }, {
            key: "setLocalMute",
            value: function(e, t) {
                this.localMutes[e] = t, null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t), this.emit(c.BaseConnectionEvent.LocalMute, e, t)
            }
        }, {
            key: "fastUdpReconnect",
            value: function() {}
        }, {
            key: "getNumFastUdpReconnects",
            value: function() {
                return null
            }
        }, {
            key: "wasRemoteDisconnected",
            value: function() {}
        }, {
            key: "setRemoteVideoSinkWants",
            value: function(e) {
                this.remoteVideoSinkWants = e, this.updateVideoQuality(p.MEDIA_SINK_WANTS_PROPERTIES)
            }
        }, {
            key: "setLocalVideoSinkWants",
            value: function(e) {
                this.localVideoSinkWants = e
            }
        }, {
            key: "updateVideoQualityCore",
            value: function(e, t) {
                if (!!this.videoSupported) {
                    var n = this.input.getVideoStream();
                    if (null != n) {
                        if (null != t.capture && null != t.capture.width && null != t.capture.height && null != e.remoteSinkWantsPixelCount && 0 !== e.remoteSinkWantsPixelCount && 0 !== t.capture.height) {
                            var r = t.capture.width / t.capture.height,
                                o = Math.sqrt(e.remoteSinkWantsPixelCount * r),
                                i = t.capture.width / o;
                            f = i < 1 ? void 0 : i
                        }
                        this.logger.info("BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: ".concat(f, ", ") + "encodingVideoWidth: ".concat(e.encodingVideoWidth, ", remoteSinkWantsMaxFramerate: ").concat(e.remoteSinkWantsMaxFramerate, ", ") + "encodingVideoMaxBitRate: ".concat(e.encodingVideoMaxBitRate, ", localWant: ").concat(this.getLocalWant())), this.setVideoEncoderParameters([{
                            parameter: 1,
                            value: f
                        }, {
                            parameter: 2,
                            value: e.encodingVideoMaxBitRate
                        }, {
                            parameter: 3,
                            value: e.remoteSinkWantsMaxFramerate
                        }]);
                        var a = e.encodingVideoWidth,
                            u = e.encodingVideoHeight,
                            s = !0,
                            l = !1,
                            c = void 0;
                        try {
                            for (var f, d, _ = n.getTracks()[Symbol.iterator](); !(s = (d = _.next()).done); s = !0) {
                                var E, p, m = d.value,
                                    y = m.getConstraints(),
                                    I = null === (E = y.width) || void 0 === E ? void 0 : E.max,
                                    h = null === (p = y.height) || void 0 === p ? void 0 : p.max;
                                (I !== a || h !== u) && (this.logger.info("BaseWebRTCConnection.updateVideoQuality: old: ".concat(I, " x ").concat(h, ", new: ").concat(a, " x ").concat(u)), y.width = {
                                    max: a
                                }, y.height = {
                                    max: u
                                }, m.applyConstraints(y))
                            }
                        } catch (e) {
                            l = !0, c = e
                        } finally {
                            try {
                                !s && null != _.return && _.return()
                            } finally {
                                if (l) throw c
                            }
                        }
                    }
                }
            }
        }, {
            key: "setCanHavePriority",
            value: function(e, t) {
                var n = this.canHavePriority.size;
                t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e), this.canHavePriority.size !== n && this.recalculatePrioritySpeakers()
            }
        }, {
            key: "setSpeakingFlags",
            value: function(e, t) {
                null != t && t !== p.SpeakingFlags.NONE ? this.localSpeakingFlags[e] = t : delete this.localSpeakingFlags[e];
                var n = this.outputs[e];
                null != n && n.setSpeakingFlags(t);
                var r = this.wantsPriority.size,
                    o = p.SpeakingFlags.VOICE | p.SpeakingFlags.PRIORITY;
                (t & o) === o ? this.wantsPriority.add(e) : this.wantsPriority.delete(e), this.wantsPriority.size !== r && this.recalculatePrioritySpeakers()
            }
        }, {
            key: "clearAllSpeaking",
            value: function() {
                for (var e in this.localSpeakingFlags) delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(p.SpeakingFlags.NONE)
            }
        }, {
            key: "setOutputVolume",
            value: function(e) {
                this.outputVolume = e;
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(this.outputs)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        this.outputs[a].volume = this.computeLocalVolume(a)
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
        }, {
            key: "setSinkId",
            value: function(e) {
                this.sinkId = e;
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(this.outputs)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        this.outputs[a].setSinkId(e)
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
                                !s()(t.videoStreamParameters[o], e[o]) && (t.videoStreamParameters[o] = function(e) {
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
                                }({}, e[o]))
                            }();
                            if ("object" === g(c)) return c.v
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
            key: "recalculatePrioritySpeakers",
            value: function() {
                var e = this;
                this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter(function(t) {
                    return e.canHavePriority.has(t)
                })), a()(this.outputs, function(t, n) {
                    t.volume = e.computeLocalVolume(n)
                })
            }
        }, {
            key: "setBitRate",
            value: function(e) {
                this.voiceBitrate = e
            }
        }, {
            key: "setLocalVolume",
            value: function(e, t) {
                this.localVolumes[e] = t, null != this.outputs[e] && (this.outputs[e].volume = this.computeLocalVolume(e))
            }
        }, {
            key: "getLocalVolume",
            value: function(e) {
                var t = this.localVolumes[e];
                return null == t && (t = this.context === p.MediaEngineContextTypes.DEFAULT ? p.DEFAULT_VOLUME : p.DEFAULT_STREAM_VOLUME), null != t ? t : p.DEFAULT_VOLUME
            }
        }, {
            key: "computeLocalVolume",
            value: function(e) {
                var t = this.outputVolume * this.getLocalVolume(e) / p.DEFAULT_VOLUME;
                return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * p.DEFAULT_PRIORITY_SPEAKER_DUCKING : t
            }
        }, {
            key: "hasDesktopSource",
            value: function() {
                var e;
                return null === (e = this.input) || void 0 === e ? void 0 : e.hasDesktopSource()
            }
        }, {
            key: "createOutput",
            value: function(e, t) {
                var n, r = this;
                if (t.discordIsTearingDown) {
                    this.logger.info("BaseWebRTCConnection.createOutput: ignoring track being torn down: ".concat(t.id));
                    return
                }
                var o = this.outputs[e];
                null == o && ((o = new d.default(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e], o.volume = this.computeLocalVolume(e), o.on(d.OutputEvent.Speaking, function(t) {
                    return r.emit(c.BaseConnectionEvent.Speaking, e, t, r.audioSSRC)
                }), o.on(d.OutputEvent.Video, function(t) {
                    var n;
                    return r.emitUnsafe(c.BaseConnectionEvent.Video, e, t, r.audioSSRC, r.videoStreamParameters[0].ssrc, null !== (n = r.videoStreamParameters[0].rtxSsrc) && void 0 !== n ? n : 0, r.videoStreamParameters)
                }), o.on(d.OutputEvent.InteractionRequired, function(e) {
                    return r.emit(c.BaseConnectionEvent.InteractionRequired, e)
                }), o.setSpeakingFlags(null !== (n = this.localSpeakingFlags[e]) && void 0 !== n ? n : p.SpeakingFlags.NONE), o.setSinkId(this.sinkId), this.outputs[e] = o), o.addTrack(t)
            }
        }, {
            key: "destroyOutput",
            value: function(e, t) {
                var n = this.outputs[e];
                null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e])
            }
        }, {
            key: "setSilenceThreshold",
            value: function(e) {
                this.silenceThreshold = e
            }
        }, {
            key: "setLocalPan",
            value: function(e, t, n) {}
        }, {
            key: "setExperimentalEncoders",
            value: function(e) {}
        }, {
            key: "setHardwareH264",
            value: function(e) {}
        }, {
            key: "setQoS",
            value: function(e) {}
        }, {
            key: "isAttenuating",
            value: function() {
                return !1
            }
        }, {
            key: "setAttenuation",
            value: function(e, t, n) {}
        }, {
            key: "setEncryption",
            value: function(e, t) {}
        }, {
            key: "setMinimumJitterBufferLevel",
            value: function(e) {}
        }, {
            key: "setPostponeDecodeLevel",
            value: function(e) {}
        }, {
            key: "setReconnectInterval",
            value: function(e) {}
        }, {
            key: "setKeyframeInterval",
            value: function(e) {}
        }, {
            key: "startSamplesPlayback",
            value: function(e, t, n) {}
        }, {
            key: "stopSamplesPlayback",
            value: function() {}
        }, {
            key: "startSamplesLocalPlayback",
            value: function(e, t, n, r) {}
        }, {
            key: "stopSamplesLocalPlayback",
            value: function(e) {}
        }, {
            key: "stopAllSamplesLocalPlayback",
            value: function() {}
        }, {
            key: "setRtcLogEphemeralKey",
            value: function(e) {}
        }, {
            key: "setRtcLogMarker",
            value: function(e) {}
        }, {
            key: "setVideoQualityMeasurement",
            value: function(e) {}
        }, {
            key: "setVideoEncoderExperiments",
            value: function(e) {}
        }, {
            key: "setBandwidthEstimationExperiments",
            value: function(e) {}
        }, {
            key: "prepareSecureFramesTransition",
            value: function(e, t, n) {}
        }, {
            key: "prepareSecureFramesEpoch",
            value: function(e, t, n) {}
        }, {
            key: "executeSecureFramesTransition",
            value: function(e) {}
        }, {
            key: "getMLSKeyPackage",
            value: function(e) {}
        }, {
            key: "updateMLSExternalSender",
            value: function(e) {}
        }, {
            key: "processMLSProposals",
            value: function(e, t) {}
        }, {
            key: "prepareMLSCommitTransition",
            value: function(e, t, n) {}
        }, {
            key: "processMLSWelcome",
            value: function(e, t, n) {}
        }], h(r.prototype, o), i && h(r, i), l
    }(l.default)
}