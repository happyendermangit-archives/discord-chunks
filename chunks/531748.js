function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VideoQualityEvent: function() {
            return i
        },
        VideoQuality: function() {
            return E
        }
    }), n("222007"), n("424973");
    var i, s = n("917351"),
        r = n.n(s),
        a = n("595275"),
        o = n("773364"),
        l = n("398183"),
        u = n("773336"),
        d = n("299039"),
        c = n("497407"),
        f = n("44642");

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    class h {
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
            this.timestampProducer = t, this.total = 0, this.state = e, this.begin = e ? t.now() : null
        }
    }(i || (i = {})).FpsUpdate = "fps-update";
    class E extends a.default {
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
            null == this.outboundStats[e] && (this.outboundStats[e] = new f.OutboundStats(this.timestampProducer))
        }
        getOrCreateInboundStats(e) {
            return null == this.inboundStats[e] && (this.inboundStats[e] = new f.InboundStats(this.timestampProducer)), this.inboundStats[e]
        }
        setInboundUser(e, t) {
            let n = this.getOrCreateInboundStats(e);
            n.setVideoStopped(0 === t, f.VideoStoppedReasons.SenderStopped)
        }
        setUserVideoDisabled(e, t) {
            let n = this.getOrCreateInboundStats(e);
            n.setVideoStopped(t, f.VideoStoppedReasons.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now())
        }
        pause() {
            !this.paused.value && this.pausedCount++, r.forEach(this.outboundStats, e => {
                e.statsWindow = []
            }), r.forEach(this.inboundStats, e => {
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
                    let s = i.toUpperCase();
                    n.set(s, _(this.outboundStats[t].codecBuckets[s])), e.set(parseInt(t), n)
                }
            }
            return e
        }
        getDecoderUsageStats() {
            let e = new Map;
            for (let t in this.inboundStats) {
                let n = new Map;
                for (let i of this.inboundStats[t].getCodecsUsed()) {
                    let s = i.toUpperCase();
                    n.set(s, _(this.inboundStats[t].codecBuckets[s])), e.set(t, n)
                }
            }
            return e
        }
        getCodecUsageStats(e, t) {
            var n, i, s, r, a, o, l, u, d, c;
            let _ = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
                h = new Map;
            if ("sender" === e || "streamer" === e) {
                let e = this.getEncoderUsageStats();
                if (e.size > 0) {
                    let t = [...e.keys()].sort()[0];
                    h = e.get(t)
                }
                return {
                    codec_asymmetric_session: _,
                    codec_h264_encode_duration_sec: null !== (n = h.get(f.CodecTypes.H264)) && void 0 !== n ? n : 0,
                    codec_h265_encode_duration_sec: null !== (i = h.get(f.CodecTypes.H265)) && void 0 !== i ? i : 0,
                    codec_vp8_encode_duration_sec: null !== (s = h.get(f.CodecTypes.VP8)) && void 0 !== s ? s : 0,
                    codec_vp9_encode_duration_sec: null !== (r = h.get(f.CodecTypes.VP9)) && void 0 !== r ? r : 0,
                    codec_av1_encode_duration_sec: null !== (a = h.get(f.CodecTypes.AV1)) && void 0 !== a ? a : 0
                }
            } {
                let e = this.getDecoderUsageStats();
                return e.has(t) && (h = e.get(t)), {
                    codec_asymmetric_session: _,
                    codec_h264_decode_duration_sec: null !== (o = h.get(f.CodecTypes.H264)) && void 0 !== o ? o : 0,
                    codec_h265_decode_duration_sec: null !== (l = h.get(f.CodecTypes.H265)) && void 0 !== l ? l : 0,
                    codec_vp8_decode_duration_sec: null !== (u = h.get(f.CodecTypes.VP8)) && void 0 !== u ? u : 0,
                    codec_vp9_decode_duration_sec: null !== (d = h.get(f.CodecTypes.VP9)) && void 0 !== d ? d : 0,
                    codec_av1_decode_duration_sec: null !== (c = h.get(f.CodecTypes.AV1)) && void 0 !== c ? c : 0
                }
            }
        }
        getOutboundStats() {
            let e = [];
            return r.forEach(this.outboundStats, (t, n) => {
                var i, s, r, a;
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
                    c = t.psnrHistogram.getReport(u),
                    h = t.targetBitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
                    E = t.aggregationDuration / 1e3;
                e.push({
                    ...this.getStats(t),
                    target_fps: E > 0 ? Math.round((null !== (s = t.targetFrames) && void 0 !== s ? s : 0) / E) : 0,
                    target_bitrate_network: E > 0 ? Math.round((null !== (r = t.targetBytesNetwork) && void 0 !== r ? r : 0) * 8 / E) : 0,
                    target_bitrate_network_percentile1: h.count > 0 ? h.percentiles[1] : null,
                    target_bitrate_network_percentile5: h.count > 0 ? h.percentiles[5] : null,
                    target_bitrate_network_percentile10: h.count > 0 ? h.percentiles[10] : null,
                    target_bitrate_network_percentile25: h.count > 0 ? h.percentiles[25] : null,
                    target_bitrate_network_percentile50: h.count > 0 ? h.percentiles[50] : null,
                    target_bitrate_network_percentile75: h.count > 0 ? h.percentiles[75] : null,
                    target_bitrate_network_percentile99: h.count > 0 ? h.percentiles[99] : null,
                    target_bitrate_max: E > 0 ? Math.round((null !== (a = t.targetBytesMax) && void 0 !== a ? a : 0) * 8 / E) : 0,
                    duration_encoder_nvidia_cuda: _(t.encoderBuckets[f.Encoders.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: _(t.encoderBuckets[f.Encoders.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: _(t.encoderBuckets[f.Encoders.OPENH264]),
                    duration_encoder_videotoolbox: _(t.encoderBuckets[f.Encoders.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: _(t.encoderBuckets[f.Encoders.AMD_DIRECT_3D]),
                    duration_encoder_intel: _(t.encoderBuckets[f.Encoders.INTEL]),
                    duration_encoder_intel_direct3d: _(t.encoderBuckets[f.Encoders.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: _(t.encoderBuckets[f.Encoders.VP8_LIBVPX]),
                    duration_encoder_uncategorized: _(t.encoderBuckets[f.Encoders.UNCATEGORIZED]),
                    duration_encoder_unknown: _(t.encoderBuckets[f.Encoders.UNKNOWN]),
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
                    encoder_psnr_db_percentile1: c.count > 0 ? c.percentiles[1] : null,
                    encoder_psnr_db_percentile5: c.count > 0 ? c.percentiles[5] : null,
                    encoder_psnr_db_percentile10: c.count > 0 ? c.percentiles[10] : null,
                    encoder_psnr_db_percentile25: c.count > 0 ? c.percentiles[25] : null,
                    encoder_psnr_db_percentile50: c.count > 0 ? c.percentiles[50] : null,
                    encoder_psnr_db_percentile75: c.count > 0 ? c.percentiles[75] : null,
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
            this.videoStopped.value = t, t !== n && r.forEach(this.outboundStats, e => e.statsWindow = [])
        }
        getStats(e) {
            if (null == e) return;
            let t = Number(this.streamStart),
                n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
                i = Math.max(e.aggregationDuration, 0),
                s = i / 1e3,
                r = [1, 5, 10, 25, 50, 75],
                a = e.cpuHistogram.getReport(),
                o = e.memoryHistogram.getReport(),
                l = e.fpsHistogram.getReport(r),
                u = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
                d = e.resolutionHistogram.getReport(r),
                c = {
                    duration: Math.floor(n / 1e3),
                    duration_aggregation: _(s),
                    duration_stopped_receiving: _(e.videoStoppedDuration.asSeconds()),
                    duration_stream_under_8mbps: _(e.bitrateBuckets[8e6]),
                    duration_stream_under_7mbps: _(e.bitrateBuckets[7e6]),
                    duration_stream_under_6mbps: _(e.bitrateBuckets[6e6]),
                    duration_stream_under_5mbps: _(e.bitrateBuckets[5e6]),
                    duration_stream_under_4mbps: _(e.bitrateBuckets[4e6]),
                    duration_stream_under_3mbps: _(e.bitrateBuckets[3e6]),
                    duration_stream_under_2mbps: _(e.bitrateBuckets[2e6]),
                    duration_stream_under_1_5mbps: _(e.bitrateBuckets[15e5]),
                    duration_stream_under_1mbps: _(e.bitrateBuckets[1e6]),
                    duration_stream_under_0_5mbps: _(e.bitrateBuckets[5e5]),
                    duration_stream_at_0mbps: _(e.bitrateBuckets[0]),
                    duration_fps_under_60: _(e.fpsBuckets[60]),
                    duration_fps_under_55: _(e.fpsBuckets[55]),
                    duration_fps_under_50: _(e.fpsBuckets[50]),
                    duration_fps_under_45: _(e.fpsBuckets[45]),
                    duration_fps_under_40: _(e.fpsBuckets[40]),
                    duration_fps_under_35: _(e.fpsBuckets[35]),
                    duration_fps_under_30: _(e.fpsBuckets[30]),
                    duration_fps_under_25: _(e.fpsBuckets[25]),
                    duration_fps_under_20: _(e.fpsBuckets[20]),
                    duration_fps_under_15: _(e.fpsBuckets[15]),
                    duration_fps_under_10: _(e.fpsBuckets[10]),
                    duration_fps_under_5: _(e.fpsBuckets[5]),
                    duration_fps_at_0: _(e.fpsBuckets[0]),
                    avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                    avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                    avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                    duration_resolution_under_720: _(e.resolutionBuckets[720]),
                    duration_resolution_under_480: _(e.resolutionBuckets[480]),
                    duration_resolution_under_360: _(e.resolutionBuckets[360]),
                    num_pauses: this.pausedCount,
                    duration_paused: _(this.paused.totalDuration() / 1e3),
                    duration_zero_receivers: _(this.zeroReceivers.totalDuration() / 1e3),
                    duration_video_stopped: _(this.videoStopped.totalDuration() / 1e3),
                    client_performance_cpu_percentile25: a.percentiles[25],
                    client_performance_cpu_percentile50: a.percentiles[50],
                    client_performance_cpu_percentile75: a.percentiles[75],
                    client_performance_cpu_percentile90: a.percentiles[90],
                    client_performance_cpu_percentile95: a.percentiles[95],
                    client_performance_memory_percentile25: o.percentiles[25],
                    client_performance_memory_percentile50: o.percentiles[50],
                    client_performance_memory_percentile75: o.percentiles[75],
                    client_performance_memory_percentile90: o.percentiles[90],
                    client_performance_memory_percentile95: o.percentiles[95],
                    client_performance_memory_min: o.min,
                    client_performance_memory_max: o.max,
                    fps_percentile1: l.percentiles[1],
                    fps_percentile5: l.percentiles[5],
                    fps_percentile10: l.percentiles[10],
                    fps_percentile25: l.percentiles[25],
                    fps_percentile50: l.percentiles[50],
                    fps_percentile75: l.percentiles[75],
                    bitrate_percentile1: u.percentiles[1],
                    bitrate_percentile5: u.percentiles[5],
                    bitrate_percentile10: u.percentiles[10],
                    bitrate_percentile25: u.percentiles[25],
                    bitrate_percentile50: u.percentiles[50],
                    bitrate_percentile75: u.percentiles[75],
                    bitrate_percentile99: u.percentiles[99],
                    resolution_percentile1: d.percentiles[1],
                    resolution_percentile5: d.percentiles[5],
                    resolution_percentile10: d.percentiles[10],
                    resolution_percentile25: d.percentiles[25],
                    resolution_percentile50: d.percentiles[50],
                    resolution_percentile75: d.percentiles[75],
                    duration_video_effect: _(this.videoEffectDuration.totalDuration() / 1e3),
                    cryptor_max_attempts: e.cryptorMaxAttempts
                },
                {
                    bytes: f,
                    framesDropped: h,
                    framesCodecError: E,
                    framesCodec: g,
                    framesNetwork: m,
                    packets: p,
                    packetsLost: S,
                    nackCount: v,
                    pliCount: T,
                    qpSum: I,
                    pauseCount: C,
                    freezeCount: A,
                    totalPausesDuration: y,
                    totalFreezesDuration: N,
                    totalFramesDuration: R,
                    keyframes: O,
                    passthroughCount: D,
                    cryptorSuccessCount: P,
                    cryptorFailureCount: M,
                    cryptorDuration: L,
                    cryptorAttempts: b
                } = e.aggregatedProperties;
            return {
                ...c,
                avg_bitrate: s > 0 ? Math.round((null != f ? f : 0) * 8 / s) : 0,
                avg_fps: s > 0 ? Math.round((null != g ? g : 0) / s) : 0,
                num_bytes: f,
                num_packets_lost: S,
                num_packets: p,
                num_frames: m,
                num_frames_codec_error: E,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: h,
                num_nacks: v,
                num_plis: T,
                qp_sum: I,
                receiver_pause_count: C,
                receiver_freeze_count: A,
                receiver_total_pauses_duration: y,
                receiver_total_freezes_duration: N,
                receiver_total_frames_duration: R,
                num_keyframes: O,
                cryptor_passthrough_count: D,
                cryptor_success_count: P,
                cryptor_failure_count: M,
                cryptor_duration: L,
                cryptor_attempts: b
            }
        }
        receivedStats(e, t, n) {
            var i, s, a, o;
            let l = t.transport,
                d = (0, u.isWeb)() ? 1 : null !== (s = null === (i = l.receiverReports) || void 0 === i ? void 0 : i.length) && void 0 !== s ? s : 0,
                c = new Set,
                _ = new Set;
            if (this.updateSendState({
                    receivers: d
                }), t.rtp.outbound.filter(e => "video" === e.type).forEach(t => {
                    if (null != t) {
                        var i, s, r, a, o, u, d, _, h;
                        let E = t.ssrc,
                            g = this.outboundStats[E];
                        if (null == g && (console.warn("Unknown outbound video stream with SSRC: ".concat(E)), g = new f.OutboundStats(this.timestampProducer), this.outboundStats[E] = g), null == g.timeToFirstFrame && (t.framesEncoded > 0 || (null !== (i = t.frameRateInput) && void 0 !== i ? i : 0) > 0) && (g.timeToFirstFrame = Math.max(0, e - g.startTime)), !this.videoStopped.value) {
                            g.appendAndIncrementStats(f.RawVideoStats.parseOutboundStats(t, e)), g.encoderCodec !== f.CodecTypes.UNKNOWN && c.add(g.encoderCodec);
                            let i = null === (s = n.find(e => e.ssrc === E)) || void 0 === s ? void 0 : s.maxBitrate;
                            g.appendTargetRates(null === (r = n.find(e => e.ssrc === E)) || void 0 === r ? void 0 : r.maxFrameRate, null !== (o = t.bitrateTarget) && void 0 !== o ? o : Math.min(null !== (a = l.availableOutgoingBitrate) && void 0 !== a ? a : 0, null != i ? i : 0), i), g.averageEncodeTime = null !== (u = t.averageEncodeTime) && void 0 !== u ? u : 0, g.framesDroppedRateLimiter = null !== (d = t.framesDroppedRateLimiter) && void 0 !== d ? d : null, g.framesDroppedEncoderQueue = null !== (_ = t.framesDroppedEncoderQueue) && void 0 !== _ ? _ : null, g.framesDroppedCongestionWindow = null !== (h = t.framesDroppedCongestionWindow) && void 0 !== h ? h : null
                        }
                    }
                }), !this.paused.value && r.forEach(t.rtp.inbound, (t, n) => {
                    let i = t.find(e => "video" === e.type);
                    if (null != i) {
                        let t = this.inboundStats[n];
                        null == t && (console.warn("Unknown inbound video stream for user: ".concat(n)), t = new f.InboundStats(this.timestampProducer), this.inboundStats[n] = t);
                        let s = f.RawVideoStats.parseInboundStats(i, e);
                        !this.statCollectionPausedUsers.has(n) && t.appendAndIncrementStats(s), s.packets > 0 && this.emit("fps-update", n, s.framesCodec, s.timestamp), t.decoderCodec !== f.CodecTypes.UNKNOWN && _.add(t.decoderCodec), null == t.timeToFirstFrame && i.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime)
                    }
                }), 0 !== c.size && 0 !== _.size) {
                ;
                if (a = c, o = _, a.size === o.size && Array.from(a).every(e => o.has(e))) this.symmetricCodecUpdates++;
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
            super(), this.connection = e, this.timestampProducer = t, this.networkQuality = new c.default, this.pausedCount = 0, this.outboundStats = {}, this.inboundStats = {}, this.symmetricCodecUpdates = 0, this.asymmetricCodecUpdates = 0, this.statCollectionPausedUsers = new Set, this.sampleStats = e => {
                if (null == e) return;
                let t = this.timestampProducer.now();
                if (this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e) return;
                let n = this.connection.getStreamParameters();
                this.receivedStats(t, e, n)
            }, this.paused = new h(!1, t), this.zeroReceivers = new h(!1, t), this.videoStopped = new h(!1, t), this.videoEffectDuration = new h(!1, t)
        }
    }
}