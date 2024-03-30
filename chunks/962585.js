function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoQuality: function() {
            return A
        },
        VideoQualityEvent: function() {
            return r
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("259020"),
        u = n("384433"),
        s = n("849680"),
        l = n("374550"),
        c = n("523018"),
        f = n("639356"),
        d = n("94288");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t && m(e.prototype, t), n && m(e, n), e
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                I(e, t, n[t])
            })
        }
        return e
    }

    function T(e, t) {
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

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    var g = function() {
        function e(t, n) {
            p(this, e), I(this, "timestampProducer", void 0), I(this, "begin", void 0), I(this, "total", void 0), I(this, "state", void 0), this.timestampProducer = n, this.total = 0, this.state = t, this.begin = t ? n.now() : null
        }
        return y(e, [{
            key: "value",
            get: function() {
                return this.state
            },
            set: function(e) {
                e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && (this.total += this.timestampProducer.now() - Number(this.begin), this.begin = null), this.state = e
            }
        }, {
            key: "totalDuration",
            value: function() {
                return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total
            }
        }]), e
    }();
    (r || (r = {})).FpsUpdate = "fps-update";
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
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : E(e)
        });

        function o(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.TimeStampProducer;
            return p(this, o), I(E(t = r.call(this)), "connection", void 0), I(E(t), "timestampProducer", void 0), I(E(t), "networkQuality", void 0), I(E(t), "paused", void 0), I(E(t), "pausedCount", void 0), I(E(t), "zeroReceivers", void 0), I(E(t), "videoStopped", void 0), I(E(t), "videoEffectDuration", void 0), I(E(t), "outboundStats", void 0), I(E(t), "inboundStats", void 0), I(E(t), "streamStart", void 0), I(E(t), "streamEnd", void 0), I(E(t), "symmetricCodecUpdates", void 0), I(E(t), "asymmetricCodecUpdates", void 0), I(E(t), "statCollectionPausedUsers", void 0), I(E(t), "sampleStats", void 0), t.connection = e, t.timestampProducer = n, t.networkQuality = new f.default, t.pausedCount = 0, t.outboundStats = {}, t.inboundStats = {}, t.symmetricCodecUpdates = 0, t.asymmetricCodecUpdates = 0, t.statCollectionPausedUsers = new Set, t.sampleStats = function(e) {
                if (null != e) {
                    var n = t.timestampProducer.now();
                    if (t.networkQuality.incrementNetworkStats(n), t.updateSystemResourceStats(), t.updateVideoEffectStats(e), null != e) {
                        var r = t.connection.getStreamParameters();
                        t.receivedStats(n, e, r)
                    }
                }
            }, t.paused = new g(!1, n), t.zeroReceivers = new g(!1, n), t.videoStopped = new g(!1, n), t.videoEffectDuration = new g(!1, n), t
        }
        return y(o, [{
            key: "addUserToStatsCollectionPausedSet",
            value: function(e) {
                this.statCollectionPausedUsers.add(e)
            }
        }, {
            key: "removeUserFromStatsCollectionPausedSet",
            value: function(e) {
                this.statCollectionPausedUsers.delete(e)
            }
        }, {
            key: "start",
            value: function() {
                this.streamStart = this.timestampProducer.now(), this.connection.on(u.BaseConnectionEvent.Stats, this.sampleStats)
            }
        }, {
            key: "setOutboundSsrc",
            value: function(e) {
                null == this.outboundStats[e] && (this.outboundStats[e] = new d.OutboundStats(this.timestampProducer))
            }
        }, {
            key: "getOrCreateInboundStats",
            value: function(e) {
                return null == this.inboundStats[e] && (this.inboundStats[e] = new d.InboundStats(this.timestampProducer)), this.inboundStats[e]
            }
        }, {
            key: "setInboundUser",
            value: function(e, t) {
                this.getOrCreateInboundStats(e).setVideoStopped(0 === t, d.VideoStoppedReasons.SenderStopped)
            }
        }, {
            key: "setUserVideoDisabled",
            value: function(e, t) {
                var n = this.getOrCreateInboundStats(e);
                n.setVideoStopped(t, d.VideoStoppedReasons.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now())
            }
        }, {
            key: "pause",
            value: function() {
                !this.paused.value && this.pausedCount++, i().forEach(this.outboundStats, function(e) {
                    e.statsWindow = []
                }), i().forEach(this.inboundStats, function(e) {
                    e.statsWindow = []
                }), this.updateSendState({
                    paused: !0
                })
            }
        }, {
            key: "resume",
            value: function() {
                this.updateSendState({
                    paused: !1
                })
            }
        }, {
            key: "stop",
            value: function() {
                this.connection.off(u.BaseConnectionEvent.Stats, this.sampleStats), this.streamEnd = this.timestampProducer.now(), this.removeAllListeners()
            }
        }, {
            key: "getNetworkStats",
            value: function() {
                return this.networkQuality.getStats()
            }
        }, {
            key: "getEncoderUsageStats",
            value: function() {
                var e = new Map;
                for (var t in this.outboundStats) {
                    var n = new Map,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = this.outboundStats[t].getCodecsUsed()[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value.toUpperCase();
                            n.set(s, v(this.outboundStats[t].codecBuckets[s])), e.set(parseInt(t), n)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
                return e
            }
        }, {
            key: "getDecoderUsageStats",
            value: function() {
                var e = new Map;
                for (var t in this.inboundStats) {
                    var n = new Map,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = this.inboundStats[t].getCodecsUsed()[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value.toUpperCase();
                            n.set(s, v(this.inboundStats[t].codecBuckets[s])), e.set(t, n)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
                return e
            }
        }, {
            key: "getCodecUsageStats",
            value: function(e, t) {
                var n = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
                    r = new Map;
                if ("sender" === e || "streamer" === e) {
                    var o, i, a, u, s, l = this.getEncoderUsageStats();
                    if (l.size > 0) {
                        var c, f = ((function(e) {
                            if (Array.isArray(e)) return _(e)
                        })(c = l.keys()) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(c) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return _(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                            }
                        }(c) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()).sort()[0];
                        r = l.get(f)
                    }
                    return {
                        codec_asymmetric_session: n,
                        codec_h264_encode_duration_sec: null !== (o = r.get(d.CodecTypes.H264)) && void 0 !== o ? o : 0,
                        codec_h265_encode_duration_sec: null !== (i = r.get(d.CodecTypes.H265)) && void 0 !== i ? i : 0,
                        codec_vp8_encode_duration_sec: null !== (a = r.get(d.CodecTypes.VP8)) && void 0 !== a ? a : 0,
                        codec_vp9_encode_duration_sec: null !== (u = r.get(d.CodecTypes.VP9)) && void 0 !== u ? u : 0,
                        codec_av1_encode_duration_sec: null !== (s = r.get(d.CodecTypes.AV1)) && void 0 !== s ? s : 0
                    }
                }
                var E, p, m, y, I, h = this.getDecoderUsageStats();
                return h.has(t) && (r = h.get(t)), {
                    codec_asymmetric_session: n,
                    codec_h264_decode_duration_sec: null !== (E = r.get(d.CodecTypes.H264)) && void 0 !== E ? E : 0,
                    codec_h265_decode_duration_sec: null !== (p = r.get(d.CodecTypes.H265)) && void 0 !== p ? p : 0,
                    codec_vp8_decode_duration_sec: null !== (m = r.get(d.CodecTypes.VP8)) && void 0 !== m ? m : 0,
                    codec_vp9_decode_duration_sec: null !== (y = r.get(d.CodecTypes.VP9)) && void 0 !== y ? y : 0,
                    codec_av1_decode_duration_sec: null !== (I = r.get(d.CodecTypes.AV1)) && void 0 !== I ? I : 0
                }
            }
        }, {
            key: "getOutboundStats",
            value: function() {
                var e = this,
                    t = [];
                return i().forEach(this.outboundStats, function(n, r) {
                    var o, i, a, u, s, l = null === (o = e.connection) || void 0 === o ? void 0 : o.getStreamParameters();
                    l.length > 1 && l.forEach(function(e) {
                        if (parseInt(r) === e.ssrc) {
                            var t;
                            i = null !== (t = e.quality) && void 0 !== t ? t : 50
                        }
                    });
                    var c = [1, 5, 10, 25, 50, 75],
                        f = n.vmafHistogram.getReport(c),
                        _ = n.psnrHistogram.getReport(c),
                        E = n.targetBitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
                        p = n.aggregationDuration / 1e3;
                    t.push(T(O({}, e.getStats(n)), {
                        target_fps: p > 0 ? Math.round((null !== (a = n.targetFrames) && void 0 !== a ? a : 0) / p) : 0,
                        target_bitrate_network: p > 0 ? Math.round((null !== (u = n.targetBytesNetwork) && void 0 !== u ? u : 0) * 8 / p) : 0,
                        target_bitrate_network_percentile1: E.count > 0 ? E.percentiles[1] : null,
                        target_bitrate_network_percentile5: E.count > 0 ? E.percentiles[5] : null,
                        target_bitrate_network_percentile10: E.count > 0 ? E.percentiles[10] : null,
                        target_bitrate_network_percentile25: E.count > 0 ? E.percentiles[25] : null,
                        target_bitrate_network_percentile50: E.count > 0 ? E.percentiles[50] : null,
                        target_bitrate_network_percentile75: E.count > 0 ? E.percentiles[75] : null,
                        target_bitrate_network_percentile99: E.count > 0 ? E.percentiles[99] : null,
                        target_bitrate_max: p > 0 ? Math.round((null !== (s = n.targetBytesMax) && void 0 !== s ? s : 0) * 8 / p) : 0,
                        duration_encoder_nvidia_cuda: v(n.encoderBuckets[d.Encoders.NVIDIA_CUDA]),
                        duration_encoder_nvidia_direct3d: v(n.encoderBuckets[d.Encoders.NVIDIA_DIRECT_3D]),
                        duration_encoder_openh264: v(n.encoderBuckets[d.Encoders.OPENH264]),
                        duration_encoder_videotoolbox: v(n.encoderBuckets[d.Encoders.VIDEOTOOLBOX]),
                        duration_encoder_amd_direct3d: v(n.encoderBuckets[d.Encoders.AMD_DIRECT_3D]),
                        duration_encoder_intel: v(n.encoderBuckets[d.Encoders.INTEL]),
                        duration_encoder_intel_direct3d: v(n.encoderBuckets[d.Encoders.INTEL_DIRECT_3D]),
                        duration_encoder_vp8_libvpx: v(n.encoderBuckets[d.Encoders.VP8_LIBVPX]),
                        duration_encoder_uncategorized: v(n.encoderBuckets[d.Encoders.UNCATEGORIZED]),
                        duration_encoder_unknown: v(n.encoderBuckets[d.Encoders.UNKNOWN]),
                        quality: i,
                        average_encode_time_ms: n.averageEncodeTime,
                        average_encoder_vmaf_score: n.vmafScoreNum > 0 ? n.vmafScoreSum / n.vmafScoreNum : null,
                        encoder_vmaf_score_percentile1: f.count > 0 ? f.percentiles[1] : null,
                        encoder_vmaf_score_percentile5: f.count > 0 ? f.percentiles[5] : null,
                        encoder_vmaf_score_percentile10: f.count > 0 ? f.percentiles[10] : null,
                        encoder_vmaf_score_percentile25: f.count > 0 ? f.percentiles[25] : null,
                        encoder_vmaf_score_percentile50: f.count > 0 ? f.percentiles[50] : null,
                        encoder_vmaf_score_percentile75: f.count > 0 ? f.percentiles[75] : null,
                        average_encoder_psnr_db: n.psnrDbNum > 0 ? n.psnrDbSum / n.psnrDbNum : null,
                        encoder_psnr_db_percentile1: _.count > 0 ? _.percentiles[1] : null,
                        encoder_psnr_db_percentile5: _.count > 0 ? _.percentiles[5] : null,
                        encoder_psnr_db_percentile10: _.count > 0 ? _.percentiles[10] : null,
                        encoder_psnr_db_percentile25: _.count > 0 ? _.percentiles[25] : null,
                        encoder_psnr_db_percentile50: _.count > 0 ? _.percentiles[50] : null,
                        encoder_psnr_db_percentile75: _.count > 0 ? _.percentiles[75] : null,
                        average_outbound_want: n.outboundSinkWantNum > 0 ? n.outboundSinkWantSum / n.outboundSinkWantNum : null,
                        frames_dropped_rate_limiter: n.framesDroppedRateLimiter,
                        frames_dropped_encoder_queue: n.framesDroppedEncoderQueue,
                        frames_dropped_congestion_window: n.framesDroppedCongestionWindow
                    }))
                }), t
            }
        }, {
            key: "getInboundStats",
            value: function(e) {
                return this.getStats(this.inboundStats[e])
            }
        }, {
            key: "destroyUser",
            value: function(e) {
                delete this.inboundStats[e]
            }
        }, {
            key: "getInboundParticipants",
            value: function() {
                return c.default.keys(this.inboundStats)
            }
        }, {
            key: "updateSendState",
            value: function(e) {
                null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
                var t = this.paused.value || this.zeroReceivers.value,
                    n = this.videoStopped.value;
                this.videoStopped.value = t, t !== n && i().forEach(this.outboundStats, function(e) {
                    return e.statsWindow = []
                })
            }
        }, {
            key: "getStats",
            value: function(e) {
                if (null != e) {
                    var t = Number(this.streamStart),
                        n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
                        r = Math.max(e.aggregationDuration, 0) / 1e3,
                        o = [1, 5, 10, 25, 50, 75],
                        i = e.fpsHistogram.getReport(o),
                        a = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
                        u = e.resolutionHistogram.getReport(o),
                        s = e.systemResources.getStats(),
                        l = O({
                            duration: Math.floor(n / 1e3),
                            duration_aggregation: v(r),
                            duration_stopped_receiving: v(e.videoStoppedDuration.asSeconds()),
                            duration_stream_under_8mbps: v(e.bitrateBuckets[8e6]),
                            duration_stream_under_7mbps: v(e.bitrateBuckets[7e6]),
                            duration_stream_under_6mbps: v(e.bitrateBuckets[6e6]),
                            duration_stream_under_5mbps: v(e.bitrateBuckets[5e6]),
                            duration_stream_under_4mbps: v(e.bitrateBuckets[4e6]),
                            duration_stream_under_3mbps: v(e.bitrateBuckets[3e6]),
                            duration_stream_under_2mbps: v(e.bitrateBuckets[2e6]),
                            duration_stream_under_1_5mbps: v(e.bitrateBuckets[15e5]),
                            duration_stream_under_1mbps: v(e.bitrateBuckets[1e6]),
                            duration_stream_under_0_5mbps: v(e.bitrateBuckets[5e5]),
                            duration_stream_at_0mbps: v(e.bitrateBuckets[0]),
                            duration_fps_under_60: v(e.fpsBuckets[60]),
                            duration_fps_under_55: v(e.fpsBuckets[55]),
                            duration_fps_under_50: v(e.fpsBuckets[50]),
                            duration_fps_under_45: v(e.fpsBuckets[45]),
                            duration_fps_under_40: v(e.fpsBuckets[40]),
                            duration_fps_under_35: v(e.fpsBuckets[35]),
                            duration_fps_under_30: v(e.fpsBuckets[30]),
                            duration_fps_under_25: v(e.fpsBuckets[25]),
                            duration_fps_under_20: v(e.fpsBuckets[20]),
                            duration_fps_under_15: v(e.fpsBuckets[15]),
                            duration_fps_under_10: v(e.fpsBuckets[10]),
                            duration_fps_under_5: v(e.fpsBuckets[5]),
                            duration_fps_at_0: v(e.fpsBuckets[0]),
                            avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                            avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                            avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                            duration_resolution_under_720: v(e.resolutionBuckets[720]),
                            duration_resolution_under_480: v(e.resolutionBuckets[480]),
                            duration_resolution_under_360: v(e.resolutionBuckets[360]),
                            num_pauses: this.pausedCount,
                            duration_paused: v(this.paused.totalDuration() / 1e3),
                            duration_zero_receivers: v(this.zeroReceivers.totalDuration() / 1e3),
                            duration_video_stopped: v(this.videoStopped.totalDuration() / 1e3),
                            fps_percentile1: i.percentiles[1],
                            fps_percentile5: i.percentiles[5],
                            fps_percentile10: i.percentiles[10],
                            fps_percentile25: i.percentiles[25],
                            fps_percentile50: i.percentiles[50],
                            fps_percentile75: i.percentiles[75],
                            bitrate_percentile1: a.percentiles[1],
                            bitrate_percentile5: a.percentiles[5],
                            bitrate_percentile10: a.percentiles[10],
                            bitrate_percentile25: a.percentiles[25],
                            bitrate_percentile50: a.percentiles[50],
                            bitrate_percentile75: a.percentiles[75],
                            bitrate_percentile99: a.percentiles[99],
                            resolution_percentile1: u.percentiles[1],
                            resolution_percentile5: u.percentiles[5],
                            resolution_percentile10: u.percentiles[10],
                            resolution_percentile25: u.percentiles[25],
                            resolution_percentile50: u.percentiles[50],
                            resolution_percentile75: u.percentiles[75],
                            duration_video_effect: v(this.videoEffectDuration.totalDuration() / 1e3),
                            cryptor_max_attempts: e.cryptorMaxAttempts
                        }, s),
                        c = e.aggregatedProperties,
                        f = c.bytes,
                        d = c.framesDropped,
                        _ = c.framesCodecError,
                        E = c.framesCodec,
                        p = c.framesNetwork,
                        m = c.packets,
                        y = c.packetsLost,
                        I = c.nackCount,
                        h = c.pliCount,
                        S = c.qpSum,
                        g = c.pauseCount,
                        A = c.freezeCount,
                        b = c.totalPausesDuration,
                        N = c.totalFreezesDuration,
                        R = c.totalFramesDuration,
                        C = c.keyframes,
                        P = c.passthroughCount,
                        D = c.cryptorSuccessCount,
                        L = c.cryptorFailureCount,
                        M = c.cryptorDuration,
                        U = c.cryptorAttempts;
                    return T(O({}, l), {
                        avg_bitrate: r > 0 ? Math.round((null != f ? f : 0) * 8 / r) : 0,
                        avg_fps: r > 0 ? Math.round((null != E ? E : 0) / r) : 0,
                        num_bytes: f,
                        num_packets_lost: y,
                        num_packets: m,
                        num_frames: p,
                        num_frames_codec_error: _,
                        time_to_first_frame_ms: e.timeToFirstFrame,
                        num_frames_dropped: d,
                        num_nacks: I,
                        num_plis: h,
                        qp_sum: S,
                        receiver_pause_count: g,
                        receiver_freeze_count: A,
                        receiver_total_pauses_duration: b,
                        receiver_total_freezes_duration: N,
                        receiver_total_frames_duration: R,
                        num_keyframes: C,
                        cryptor_passthrough_count: P,
                        cryptor_success_count: D,
                        cryptor_failure_count: L,
                        cryptor_duration: M,
                        cryptor_attempts: U
                    })
                }
            }
        }, {
            key: "receivedStats",
            value: function(e, t, n) {
                var r, o, a, u, s = this,
                    c = t.transport,
                    f = (0, l.isWeb)() ? 1 : null !== (u = null === (a = c.receiverReports) || void 0 === a ? void 0 : a.length) && void 0 !== u ? u : 0,
                    _ = new Set,
                    E = new Set;
                if (this.updateSendState({
                        receivers: f
                    }), t.rtp.outbound.filter(function(e) {
                        return "video" === e.type
                    }).forEach(function(t) {
                        if (null != t) {
                            var r = t.ssrc,
                                o = s.outboundStats[r];
                            if (null == o && (console.warn("Unknown outbound video stream with SSRC: ".concat(r)), o = new d.OutboundStats(s.timestampProducer), s.outboundStats[r] = o), null == o.timeToFirstFrame && (t.framesEncoded > 0 || (null !== (i = t.frameRateInput) && void 0 !== i ? i : 0) > 0) && (o.timeToFirstFrame = Math.max(0, e - o.startTime)), !s.videoStopped.value) {
                                o.appendAndIncrementStats(d.RawVideoStats.parseOutboundStats(t, e)), o.encoderCodec !== d.CodecTypes.UNKNOWN && _.add(o.encoderCodec);
                                var i, a, u, l, f, E, p, m, y, I = null === (a = n.find(function(e) {
                                    return e.ssrc === r
                                })) || void 0 === a ? void 0 : a.maxBitrate;
                                o.appendTargetRates(null === (u = n.find(function(e) {
                                    return e.ssrc === r
                                })) || void 0 === u ? void 0 : u.maxFrameRate, null !== (f = t.bitrateTarget) && void 0 !== f ? f : Math.min(null !== (l = c.availableOutgoingBitrate) && void 0 !== l ? l : 0, null != I ? I : 0), I), o.averageEncodeTime = null !== (E = t.averageEncodeTime) && void 0 !== E ? E : 0, o.framesDroppedRateLimiter = null !== (p = t.framesDroppedRateLimiter) && void 0 !== p ? p : null, o.framesDroppedEncoderQueue = null !== (m = t.framesDroppedEncoderQueue) && void 0 !== m ? m : null, o.framesDroppedCongestionWindow = null !== (y = t.framesDroppedCongestionWindow) && void 0 !== y ? y : null
                            }
                        }
                    }), !this.paused.value && i().forEach(t.rtp.inbound, function(t, n) {
                        var r = t.find(function(e) {
                            return "video" === e.type
                        });
                        if (null != r) {
                            var o = s.inboundStats[n];
                            null == o && (console.warn("Unknown inbound video stream for user: ".concat(n)), o = new d.InboundStats(s.timestampProducer), s.inboundStats[n] = o);
                            var i = d.RawVideoStats.parseInboundStats(r, e);
                            !s.statCollectionPausedUsers.has(n) && o.appendAndIncrementStats(i), i.packets > 0 && s.emit("fps-update", n, i.framesCodec, i.timestamp), o.decoderCodec !== d.CodecTypes.UNKNOWN && E.add(o.decoderCodec), null == o.timeToFirstFrame && r.framesDecoded > 0 && (o.timeToFirstFrame = e - o.startTime)
                        }
                    }), 0 !== _.size && 0 !== E.size) {
                    ;
                    if (r = _, o = E, r.size === o.size && Array.from(r).every(function(e) {
                            return o.has(e)
                        })) this.symmetricCodecUpdates++;
                    else this.asymmetricCodecUpdates++
                }
            }
        }, {
            key: "updateSystemResourceStats",
            value: function() {
                for (var e in this.outboundStats) this.outboundStats[e].addSystemResources();
                for (var t in this.inboundStats) this.inboundStats[t].addSystemResources()
            }
        }, {
            key: "updateVideoEffectStats",
            value: function(e) {
                var t = null == e ? void 0 : e.rtp.outbound.find(function(e) {
                    return "video" === e.type
                });
                this.videoEffectDuration.value = (null == t ? void 0 : t.type) === "video" && null != t.filter
            }
        }]), o
    }(a.default)
}