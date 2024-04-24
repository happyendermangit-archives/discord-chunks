function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoQuality: function() {
            return f
        },
        VideoQualityEvent: function() {
            return i
        }
    }), n("47120"), n("653041");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("47770"),
        o = n("46973"),
        l = n("379649"),
        u = n("358085"),
        d = n("709054"),
        _ = n("140828"),
        c = n("255914");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    class T {
        set value(e) {
            e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && (this.total += this.timestampProducer.now() - Number(this.begin), this.begin = null), this.state = e
        }
        get value() {
            return this.state
        }
        totalDuration() {
            return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total
        }
        constructor(e, t) {
            E(this, "timestampProducer", void 0), E(this, "begin", void 0), E(this, "total", void 0), E(this, "state", void 0), this.timestampProducer = t, this.total = 0, this.state = e, this.begin = e ? t.now() : null
        }
    }(i || (i = {})).FpsUpdate = "fps-update";
    class f extends a.default {
        addUserToStatsCollectionPausedSet(e) {
            this.statCollectionPausedUsers.add(e)
        }
        removeUserFromStatsCollectionPausedSet(e) {
            this.statCollectionPausedUsers.delete(e)
        }
        start() {
            this.streamStart = this.timestampProducer.now(), this.connection.on(o.BaseConnectionEvent.Stats, this.sampleStats)
        }
        setOutboundSsrc(e) {
            null == this.outboundStats[e] && (this.outboundStats[e] = new c.OutboundStats(this.timestampProducer))
        }
        getOrCreateInboundStats(e) {
            return null == this.inboundStats[e] && (this.inboundStats[e] = new c.InboundStats(this.timestampProducer)), this.inboundStats[e]
        }
        setInboundUser(e, t) {
            this.getOrCreateInboundStats(e).setVideoStopped(0 === t, c.VideoStoppedReasons.SenderStopped)
        }
        setUserVideoDisabled(e, t) {
            let n = this.getOrCreateInboundStats(e);
            n.setVideoStopped(t, c.VideoStoppedReasons.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now())
        }
        pause() {
            !this.paused.value && this.pausedCount++, s().forEach(this.outboundStats, e => {
                e.statsWindow = []
            }), s().forEach(this.inboundStats, e => {
                e.statsWindow = []
            }), this.updateSendState({
                paused: !0
            })
        }
        resume() {
            this.updateSendState({
                paused: !1
            })
        }
        stop() {
            this.connection.off(o.BaseConnectionEvent.Stats, this.sampleStats), this.streamEnd = this.timestampProducer.now(), this.removeAllListeners()
        }
        getNetworkStats() {
            return this.networkQuality.getStats()
        }
        getEncoderUsageStats() {
            let e = new Map;
            for (let t in this.outboundStats) {
                let n = new Map;
                for (let i of this.outboundStats[t].getCodecsUsed()) {
                    let r = i.toUpperCase();
                    n.set(r, I(this.outboundStats[t].codecBuckets[r])), e.set(parseInt(t), n)
                }
            }
            return e
        }
        getDecoderUsageStats() {
            let e = new Map;
            for (let t in this.inboundStats) {
                let n = new Map;
                for (let i of this.inboundStats[t].getCodecsUsed()) {
                    let r = i.toUpperCase();
                    n.set(r, I(this.inboundStats[t].codecBuckets[r])), e.set(t, n)
                }
            }
            return e
        }
        getCodecUsageStats(e, t) {
            var n, i, r, s, a, o, l, u, d, _;
            let E = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
                I = new Map;
            if ("sender" === e || "streamer" === e) {
                let e = this.getEncoderUsageStats();
                if (e.size > 0) {
                    let t = [...e.keys()].sort()[0];
                    I = e.get(t)
                }
                return {
                    codec_asymmetric_session: E,
                    codec_h264_encode_duration_sec: null !== (n = I.get(c.CodecTypes.H264)) && void 0 !== n ? n : 0,
                    codec_h265_encode_duration_sec: null !== (i = I.get(c.CodecTypes.H265)) && void 0 !== i ? i : 0,
                    codec_vp8_encode_duration_sec: null !== (r = I.get(c.CodecTypes.VP8)) && void 0 !== r ? r : 0,
                    codec_vp9_encode_duration_sec: null !== (s = I.get(c.CodecTypes.VP9)) && void 0 !== s ? s : 0,
                    codec_av1_encode_duration_sec: null !== (a = I.get(c.CodecTypes.AV1)) && void 0 !== a ? a : 0
                }
            } {
                let e = this.getDecoderUsageStats();
                return e.has(t) && (I = e.get(t)), {
                    codec_asymmetric_session: E,
                    codec_h264_decode_duration_sec: null !== (o = I.get(c.CodecTypes.H264)) && void 0 !== o ? o : 0,
                    codec_h265_decode_duration_sec: null !== (l = I.get(c.CodecTypes.H265)) && void 0 !== l ? l : 0,
                    codec_vp8_decode_duration_sec: null !== (u = I.get(c.CodecTypes.VP8)) && void 0 !== u ? u : 0,
                    codec_vp9_decode_duration_sec: null !== (d = I.get(c.CodecTypes.VP9)) && void 0 !== d ? d : 0,
                    codec_av1_decode_duration_sec: null !== (_ = I.get(c.CodecTypes.AV1)) && void 0 !== _ ? _ : 0
                }
            }
        }
        getOutboundStats() {
            let e = [];
            return s().forEach(this.outboundStats, (t, n) => {
                var i, r, s, a;
                let o;
                let l = null === (i = this.connection) || void 0 === i ? void 0 : i.getStreamParameters();
                l.length > 1 && l.forEach(e => {
                    if (parseInt(n) === e.ssrc) {
                        var t;
                        o = null !== (t = e.quality) && void 0 !== t ? t : 50
                    }
                });
                let u = [1, 5, 10, 25, 50, 75],
                    d = t.vmafHistogram.getReport(u),
                    _ = t.psnrHistogram.getReport(u),
                    E = t.targetBitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
                    T = t.aggregationDuration / 1e3;
                e.push({
                    ...this.getStats(t),
                    target_fps: T > 0 ? Math.round((null !== (r = t.targetFrames) && void 0 !== r ? r : 0) / T) : 0,
                    target_bitrate_network: T > 0 ? Math.round((null !== (s = t.targetBytesNetwork) && void 0 !== s ? s : 0) * 8 / T) : 0,
                    target_bitrate_network_percentile1: E.count > 0 ? E.percentiles[1] : null,
                    target_bitrate_network_percentile5: E.count > 0 ? E.percentiles[5] : null,
                    target_bitrate_network_percentile10: E.count > 0 ? E.percentiles[10] : null,
                    target_bitrate_network_percentile25: E.count > 0 ? E.percentiles[25] : null,
                    target_bitrate_network_percentile50: E.count > 0 ? E.percentiles[50] : null,
                    target_bitrate_network_percentile75: E.count > 0 ? E.percentiles[75] : null,
                    target_bitrate_network_percentile99: E.count > 0 ? E.percentiles[99] : null,
                    target_bitrate_max: T > 0 ? Math.round((null !== (a = t.targetBytesMax) && void 0 !== a ? a : 0) * 8 / T) : 0,
                    duration_encoder_nvidia_cuda: I(t.encoderBuckets[c.Encoders.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: I(t.encoderBuckets[c.Encoders.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: I(t.encoderBuckets[c.Encoders.OPENH264]),
                    duration_encoder_videotoolbox: I(t.encoderBuckets[c.Encoders.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: I(t.encoderBuckets[c.Encoders.AMD_DIRECT_3D]),
                    duration_encoder_intel: I(t.encoderBuckets[c.Encoders.INTEL]),
                    duration_encoder_intel_direct3d: I(t.encoderBuckets[c.Encoders.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: I(t.encoderBuckets[c.Encoders.VP8_LIBVPX]),
                    duration_encoder_uncategorized: I(t.encoderBuckets[c.Encoders.UNCATEGORIZED]),
                    duration_encoder_unknown: I(t.encoderBuckets[c.Encoders.UNKNOWN]),
                    quality: o,
                    average_encode_time_ms: t.averageEncodeTime,
                    average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: d.count > 0 ? d.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: d.count > 0 ? d.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: d.count > 0 ? d.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: d.count > 0 ? d.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: d.count > 0 ? d.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: d.count > 0 ? d.percentiles[75] : null,
                    average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                    encoder_psnr_db_percentile1: _.count > 0 ? _.percentiles[1] : null,
                    encoder_psnr_db_percentile5: _.count > 0 ? _.percentiles[5] : null,
                    encoder_psnr_db_percentile10: _.count > 0 ? _.percentiles[10] : null,
                    encoder_psnr_db_percentile25: _.count > 0 ? _.percentiles[25] : null,
                    encoder_psnr_db_percentile50: _.count > 0 ? _.percentiles[50] : null,
                    encoder_psnr_db_percentile75: _.count > 0 ? _.percentiles[75] : null,
                    average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                    frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                    frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                    frames_dropped_congestion_window: t.framesDroppedCongestionWindow
                })
            }), e
        }
        getInboundStats(e) {
            return this.getStats(this.inboundStats[e])
        }
        destroyUser(e) {
            delete this.inboundStats[e]
        }
        getInboundParticipants() {
            return d.default.keys(this.inboundStats)
        }
        updateSendState(e) {
            null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
            let t = this.paused.value || this.zeroReceivers.value,
                n = this.videoStopped.value;
            this.videoStopped.value = t, t !== n && s().forEach(this.outboundStats, e => e.statsWindow = [])
        }
        getStats(e) {
            if (null == e) return;
            let t = Number(this.streamStart),
                n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
                i = Math.max(e.aggregationDuration, 0) / 1e3,
                r = [1, 5, 10, 25, 50, 75],
                s = e.fpsHistogram.getReport(r),
                a = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
                o = e.resolutionHistogram.getReport(r),
                l = e.inboundBitrateEstimateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
                u = e.systemResources.getStats(),
                d = {
                    duration: Math.floor(n / 1e3),
                    duration_aggregation: I(i),
                    duration_stopped_receiving: I(e.videoStoppedDuration.asSeconds()),
                    duration_stream_under_8mbps: I(e.bitrateBuckets[8e6]),
                    duration_stream_under_7mbps: I(e.bitrateBuckets[7e6]),
                    duration_stream_under_6mbps: I(e.bitrateBuckets[6e6]),
                    duration_stream_under_5mbps: I(e.bitrateBuckets[5e6]),
                    duration_stream_under_4mbps: I(e.bitrateBuckets[4e6]),
                    duration_stream_under_3mbps: I(e.bitrateBuckets[3e6]),
                    duration_stream_under_2mbps: I(e.bitrateBuckets[2e6]),
                    duration_stream_under_1_5mbps: I(e.bitrateBuckets[15e5]),
                    duration_stream_under_1mbps: I(e.bitrateBuckets[1e6]),
                    duration_stream_under_0_5mbps: I(e.bitrateBuckets[5e5]),
                    duration_stream_at_0mbps: I(e.bitrateBuckets[0]),
                    duration_fps_under_60: I(e.fpsBuckets[60]),
                    duration_fps_under_55: I(e.fpsBuckets[55]),
                    duration_fps_under_50: I(e.fpsBuckets[50]),
                    duration_fps_under_45: I(e.fpsBuckets[45]),
                    duration_fps_under_40: I(e.fpsBuckets[40]),
                    duration_fps_under_35: I(e.fpsBuckets[35]),
                    duration_fps_under_30: I(e.fpsBuckets[30]),
                    duration_fps_under_25: I(e.fpsBuckets[25]),
                    duration_fps_under_20: I(e.fpsBuckets[20]),
                    duration_fps_under_15: I(e.fpsBuckets[15]),
                    duration_fps_under_10: I(e.fpsBuckets[10]),
                    duration_fps_under_5: I(e.fpsBuckets[5]),
                    duration_fps_at_0: I(e.fpsBuckets[0]),
                    avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                    avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                    avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                    duration_resolution_under_720: I(e.resolutionBuckets[720]),
                    duration_resolution_under_480: I(e.resolutionBuckets[480]),
                    duration_resolution_under_360: I(e.resolutionBuckets[360]),
                    num_pauses: this.pausedCount,
                    duration_paused: I(this.paused.totalDuration() / 1e3),
                    duration_zero_receivers: I(this.zeroReceivers.totalDuration() / 1e3),
                    duration_video_stopped: I(this.videoStopped.totalDuration() / 1e3),
                    fps_percentile1: s.percentiles[1],
                    fps_percentile5: s.percentiles[5],
                    fps_percentile10: s.percentiles[10],
                    fps_percentile25: s.percentiles[25],
                    fps_percentile50: s.percentiles[50],
                    fps_percentile75: s.percentiles[75],
                    bitrate_percentile1: a.percentiles[1],
                    bitrate_percentile5: a.percentiles[5],
                    bitrate_percentile10: a.percentiles[10],
                    bitrate_percentile25: a.percentiles[25],
                    bitrate_percentile50: a.percentiles[50],
                    bitrate_percentile75: a.percentiles[75],
                    bitrate_percentile99: a.percentiles[99],
                    resolution_percentile1: o.percentiles[1],
                    resolution_percentile5: o.percentiles[5],
                    resolution_percentile10: o.percentiles[10],
                    resolution_percentile25: o.percentiles[25],
                    resolution_percentile50: o.percentiles[50],
                    resolution_percentile75: o.percentiles[75],
                    inbound_bitrate_estimate_percentile1: l.percentiles[1],
                    inbound_bitrate_estimate_percentile5: l.percentiles[5],
                    inbound_bitrate_estimate_percentile10: l.percentiles[10],
                    inbound_bitrate_estimate_percentile25: l.percentiles[25],
                    inbound_bitrate_estimate_percentile50: l.percentiles[50],
                    inbound_bitrate_estimate_percentile75: l.percentiles[75],
                    inbound_bitrate_estimate_percentile99: l.percentiles[99],
                    duration_video_effect: I(this.videoEffectDuration.totalDuration() / 1e3),
                    cryptor_max_attempts: e.cryptorMaxAttempts,
                    ...u
                },
                {
                    bytes: _,
                    framesDropped: c,
                    framesCodecError: E,
                    framesCodec: T,
                    framesNetwork: f,
                    packets: S,
                    packetsLost: h,
                    nackCount: A,
                    pliCount: m,
                    qpSum: N,
                    pauseCount: p,
                    freezeCount: O,
                    totalPausesDuration: R,
                    totalFreezesDuration: C,
                    totalFramesDuration: g,
                    keyframes: L,
                    passthroughCount: D,
                    cryptorSuccessCount: v,
                    cryptorFailureCount: M,
                    cryptorDuration: y,
                    cryptorAttempts: P,
                    qualityDecodeErrors: U,
                    qualityDecoderReboots: b,
                    qualityScoreErrors: G,
                    qualityFrameDrops: w,
                    qualitySizeMismatches: k
                } = e.aggregatedProperties;
            return {
                ...d,
                avg_bitrate: i > 0 ? Math.round((null != _ ? _ : 0) * 8 / i) : 0,
                avg_fps: i > 0 ? Math.round((null != T ? T : 0) / i) : 0,
                num_bytes: _,
                num_packets_lost: h,
                num_packets: S,
                num_frames: f,
                num_frames_codec_error: E,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: c,
                num_nacks: A,
                num_plis: m,
                qp_sum: N,
                receiver_pause_count: p,
                receiver_freeze_count: O,
                receiver_total_pauses_duration: R,
                receiver_total_freezes_duration: C,
                receiver_total_frames_duration: g,
                num_keyframes: L,
                cryptor_passthrough_count: D,
                cryptor_success_count: v,
                cryptor_failure_count: M,
                cryptor_duration: y,
                cryptor_attempts: P,
                encoder_quality_decode_errors: U,
                encoder_quality_decoder_reboots: b,
                encoder_quality_score_errors: G,
                encoder_quality_frame_drops: w,
                encoder_quality_size_mismatches: k
            }
        }
        receivedStats(e, t, n) {
            var i, r, a, o;
            let l = t.transport,
                d = (0, u.isWeb)() ? 1 : null !== (r = null === (i = l.receiverReports) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0,
                _ = new Set,
                E = new Set;
            if (this.updateSendState({
                    receivers: d
                }), t.rtp.outbound.filter(e => "video" === e.type).forEach(t => {
                    if (null != t) {
                        var i, r, s, a, o, u, d, E, I;
                        let T = t.ssrc,
                            f = this.outboundStats[T];
                        if (null == f && (console.warn("Unknown outbound video stream with SSRC: ".concat(T)), f = new c.OutboundStats(this.timestampProducer), this.outboundStats[T] = f), null == f.timeToFirstFrame && (t.framesEncoded > 0 || (null !== (i = t.frameRateInput) && void 0 !== i ? i : 0) > 0) && (f.timeToFirstFrame = Math.max(0, e - f.startTime)), !this.videoStopped.value) {
                            f.appendAndIncrementStats(c.RawVideoStats.parseOutboundStats(t, e)), f.encoderCodec !== c.CodecTypes.UNKNOWN && _.add(f.encoderCodec);
                            let i = null === (r = n.find(e => e.ssrc === T)) || void 0 === r ? void 0 : r.maxBitrate;
                            f.appendTargetRates(null === (s = n.find(e => e.ssrc === T)) || void 0 === s ? void 0 : s.maxFrameRate, null !== (o = t.bitrateTarget) && void 0 !== o ? o : Math.min(null !== (a = l.availableOutgoingBitrate) && void 0 !== a ? a : 0, null != i ? i : 0), i), f.averageEncodeTime = null !== (u = t.averageEncodeTime) && void 0 !== u ? u : 0, f.framesDroppedRateLimiter = null !== (d = t.framesDroppedRateLimiter) && void 0 !== d ? d : null, f.framesDroppedEncoderQueue = null !== (E = t.framesDroppedEncoderQueue) && void 0 !== E ? E : null, f.framesDroppedCongestionWindow = null !== (I = t.framesDroppedCongestionWindow) && void 0 !== I ? I : null
                        }
                    }
                }), !this.paused.value && s().forEach(t.rtp.inbound, (t, n) => {
                    let i = t.find(e => "video" === e.type);
                    if (null != i) {
                        let t = this.inboundStats[n];
                        null == t && (console.warn("Unknown inbound video stream for user: ".concat(n)), t = new c.InboundStats(this.timestampProducer), this.inboundStats[n] = t);
                        let r = c.RawVideoStats.parseInboundStats(i, e);
                        !this.statCollectionPausedUsers.has(n) && (t.appendAndIncrementStats(r), t.appendTransportStats(l)), r.packets > 0 && this.emit("fps-update", n, r.framesCodec, r.timestamp), t.decoderCodec !== c.CodecTypes.UNKNOWN && E.add(t.decoderCodec), null == t.timeToFirstFrame && i.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime)
                    }
                }), 0 !== _.size && 0 !== E.size) {
                ;
                if (a = _, o = E, a.size === o.size && Array.from(a).every(e => o.has(e))) this.symmetricCodecUpdates++;
                else this.asymmetricCodecUpdates++
            }
        }
        updateSystemResourceStats() {
            for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
            for (let e in this.inboundStats) this.inboundStats[e].addSystemResources()
        }
        updateVideoEffectStats(e) {
            let t = null == e ? void 0 : e.rtp.outbound.find(e => "video" === e.type);
            this.videoEffectDuration.value = (null == t ? void 0 : t.type) === "video" && null != t.filter
        }
        constructor(e, t = l.TimeStampProducer) {
            super(), E(this, "connection", void 0), E(this, "timestampProducer", void 0), E(this, "networkQuality", void 0), E(this, "paused", void 0), E(this, "pausedCount", void 0), E(this, "zeroReceivers", void 0), E(this, "videoStopped", void 0), E(this, "videoEffectDuration", void 0), E(this, "outboundStats", void 0), E(this, "inboundStats", void 0), E(this, "streamStart", void 0), E(this, "streamEnd", void 0), E(this, "symmetricCodecUpdates", void 0), E(this, "asymmetricCodecUpdates", void 0), E(this, "statCollectionPausedUsers", void 0), E(this, "sampleStats", void 0), this.connection = e, this.timestampProducer = t, this.networkQuality = new _.default, this.pausedCount = 0, this.outboundStats = {}, this.inboundStats = {}, this.symmetricCodecUpdates = 0, this.asymmetricCodecUpdates = 0, this.statCollectionPausedUsers = new Set, this.sampleStats = e => {
                if (null == e) return;
                let t = this.timestampProducer.now();
                if (this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e) return;
                let n = this.connection.getStreamParameters();
                this.receivedStats(t, e, n)
            }, this.paused = new T(!1, t), this.zeroReceivers = new T(!1, t), this.videoStopped = new T(!1, t), this.videoEffectDuration = new T(!1, t)
        }
    }
}