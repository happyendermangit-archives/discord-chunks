function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CodecTypes: function() {
            return i
        },
        Encoders: function() {
            return r
        },
        VideoStoppedReasons: function() {
            return a
        },
        parseEncoder: function() {
            return g
        },
        RawVideoStats: function() {
            return C
        },
        InboundStats: function() {
            return v
        },
        OutboundStats: function() {
            return A
        }
    }), n("222007"), n("424973");
    var i, r, s, a, o, l, u, c, d = n("398183"),
        f = n("872507"),
        E = n("226445");
    let p = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
        h = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        _ = [720, 480, 360],
        S = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "keyframes", "passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts"];
    (o = i || (i = {})).H264 = "H264", o.H265 = "H265", o.VP8 = "VP8", o.VP9 = "VP9", o.AV1 = "AV1", o.UNKNOWN = "UNKNOWN", (l = r || (r = {})).NVIDIA_CUDA = "nvidia_cuda", l.NVIDIA_DIRECT_3D = "nvidia_direct_3d", l.OPENH264 = "openh264", l.VIDEOTOOLBOX = "videotoolbox", l.AMD_DIRECT_3D = "amd_direct_3d", l.INTEL = "intel", l.INTEL_DIRECT_3D = "intel_direct_3d", l.VP8_LIBVPX = "vp8_libvpx", l.UNCATEGORIZED = "uncategorized", l.UNKNOWN = "unknown", (u = s || (s = {})).NVIDIA_DIRECT_3D = "nvidia_direct_3d", u.OPENH264 = "openh264", u.VIDEOTOOLBOX = "videotoolbox", u.AMD_DIRECT_3D = "amd_direct_3d", u.INTEL = "intel", u.INTEL_DIRECT_3D = "intel_direct_3d", u.VP8_LIBVPX = "vp8_libvpx", u.UNCATEGORIZED = "uncategorized", u.UNKNOWN = "unknown";
    let m = Object.freeze({
            "nvidia: cuda": "nvidia_cuda",
            "nvidia: direct3d": "nvidia_direct_3d",
            "amd: direct3d": "amd_direct_3d",
            "intel: direct3d": "intel_direct_3d",
            intel: "intel",
            VideoToolbox: "videotoolbox",
            OpenH264: "openh264",
            libvpx: "vp8_libvpx"
        }),
        T = Object.freeze({
            "nvidia: direct3d": "nvidia_direct_3d",
            "amd: direct3d": "amd_direct_3d",
            "intel: direct3d": "intel_direct_3d",
            intel: "intel",
            VideoToolbox: "videotoolbox",
            OpenH264: "openh264",
            libvpx: "vp8_libvpx"
        });

    function g(e) {
        if (null == e) return "unknown";
        for (let t of Object.keys(m))
            if (e.includes(t)) return m[t];
        return "uncategorized"
    }(c = a || (a = {}))[c.None = 0] = "None", c[c.ClientSideDisableVideo = 1] = "ClientSideDisableVideo", c[c.SenderStopped = 2] = "SenderStopped";

    function I(e) {
        if (null == e) return "UNKNOWN";
        if ("H264" === (e = e.toUpperCase())) return "H264";
        if ("H265" === e) return "H265";
        if ("VP8" === e) return "VP8";
        else if ("VP9" === e) return "VP9";
        else if ("AV1" === e || "AV1X" === e) return "AV1";
        else return "UNKNOWN"
    }
    class C {
        static parseInboundStats(e, t) {
            var n, i, r, s, a, o, l;
            let u = new C;
            return null == e ? u : (u.bytes = e.bytesReceived, u.framesCodec = e.framesDecoded, u.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null, u.framesNetwork = e.framesReceived, u.packets = e.packetsReceived, u.packetsLost = e.packetsLost, u.framesDropped = e.framesDropped, u.resolution = null != e.resolution ? e.resolution.height : 0, u.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0, u.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0, u.timestamp = t, u.nackCount = e.nackCount, u.pliCount = e.pliCount, u.decoder = function(e) {
                if (null == e) return "unknown";
                for (let t of Object.keys(T))
                    if (e.includes(t)) return T[t];
                return "uncategorized"
            }(e.decoderImplementationName), u.codecType = I(e.codec.name), u.qpSum = 0, u.freezeCount = e.freezeCount, u.pauseCount = e.pauseCount, u.totalFreezesDuration = e.totalFreezesDuration, u.totalPausesDuration = e.totalPausesDuration, u.totalFramesDuration = e.totalFramesDuration, u.keyframes = null !== (i = e.keyFramesDecoded) && void 0 !== i ? i : null, u.passthroughCount = null !== (r = e.passthroughCount) && void 0 !== r ? r : 0, u.cryptorSuccessCount = null !== (s = e.decryptSuccessCount) && void 0 !== s ? s : 0, u.cryptorFailureCount = null !== (a = e.decryptFailureCount) && void 0 !== a ? a : 0, u.cryptorDuration = null !== (o = e.decryptDuration) && void 0 !== o ? o : 0, u.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0, u)
        }
        static parseOutboundStats(e, t) {
            var n, i, r, s, a, o, l, u, c, d, f, E, p, h, _;
            let S = new C;
            return null == e ? S : {
                bytes: e.bytesSent,
                framesCodec: e.framesEncoded,
                framesCodecError: null,
                framesNetwork: null !== (n = e.framesSent) && void 0 !== n ? n : 0,
                packets: e.packetsSent,
                packetsLost: null !== (i = e.packetsLost) && void 0 !== i ? i : 0,
                framesDropped: 0,
                resolution: null != e.resolution ? e.resolution.height : 0,
                minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                timestamp: t,
                encoder: g(e.encoderImplementationName),
                decoder: null,
                codecType: I(e.codec.name),
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                qpSum: e.qpSum,
                freezeCount: 0,
                pauseCount: 0,
                totalFreezesDuration: 0,
                totalPausesDuration: 0,
                totalFramesDuration: 0,
                outboundSinkWant: null !== (r = e.sinkWantAsInt) && void 0 !== r ? r : null,
                vmafScore: null !== (s = e.encoderQualityVmaf) && void 0 !== s ? s : null,
                psnrDb: null !== (a = e.encoderQualityPsnr) && void 0 !== a ? a : null,
                keyframes: null !== (o = e.keyFramesEncoded) && void 0 !== o ? o : null,
                framesDroppedRateLimiter: null !== (l = e.framesDroppedRateLimiter) && void 0 !== l ? l : null,
                framesDroppedEncoderQueue: null !== (u = e.framesDroppedEncoderQueue) && void 0 !== u ? u : null,
                framesDroppedCongestionWindow: null !== (c = e.framesDroppedCongestionWindow) && void 0 !== c ? c : null,
                passthroughCount: null !== (d = e.passthroughCount) && void 0 !== d ? d : 0,
                cryptorSuccessCount: null !== (f = e.encryptSuccessCount) && void 0 !== f ? f : 0,
                cryptorFailureCount: null !== (E = e.encryptFailureCount) && void 0 !== E ? E : 0,
                cryptorDuration: null !== (p = e.encryptDuration) && void 0 !== p ? p : 0,
                cryptorAttempts: null !== (h = e.encryptAttempts) && void 0 !== h ? h : 0,
                cryptorMaxAttempts: null !== (_ = e.encryptMaxAttempts) && void 0 !== _ ? _ : 0
            }
        }
        constructor() {
            this.bytes = 0, this.framesCodec = 0, this.framesCodecError = null, this.framesNetwork = 0, this.resolution = 0, this.minorResolution = 0, this.majorResolution = 0, this.timestamp = 0, this.packets = 0, this.packetsLost = 0, this.framesDropped = 0, this.nackCount = 0, this.pliCount = 0, this.encoder = null, this.decoder = null, this.codecType = null, this.qpSum = 0, this.freezeCount = 0, this.pauseCount = 0, this.totalFreezesDuration = 0, this.totalPausesDuration = 0, this.totalFramesDuration = 0, this.vmafScore = null, this.psnrDb = null, this.outboundSinkWant = null, this.keyframes = null, this.framesDroppedRateLimiter = null, this.framesDroppedEncoderQueue = null, this.framesDroppedCongestionWindow = null, this.passthroughCount = 0, this.cryptorSuccessCount = 0, this.cryptorFailureCount = 0, this.cryptorDuration = 0, this.cryptorAttempts = 0, this.cryptorMaxAttempts = 0
        }
    }
    class v {
        get isVideoStopped() {
            return 0 !== this.videoStoppedReason
        }
        get videoStoppedDuration() {
            return this.videoStoppedWatch.elapsed()
        }
        collectAggregationStats(e, t) {
            for (let i of S) {
                var n;
                let r = e[i];
                if (null === r) continue;
                let s = null !== (n = t[i]) && void 0 !== n ? n : 0;
                s > r ? this.aggregatedProperties[i] += r : this.aggregatedProperties[i] += r - s
            }
            this.aggregationDuration += e.timestamp - t.timestamp
        }
        setVideoStopped(e, t) {
            if (e) {
                this.videoStoppedReason |= t, this.videoStoppedWatch.start();
                return
            }
            this.videoStoppedReason &= ~t, 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop())
        }
        appendAndIncrementStats(e) {
            if (this.isVideoStopped) return;
            if (this.statsWindow.push(e), this.statsWindow.length < 2) return;
            let t = this.statsWindow[this.statsWindow.length - 1],
                n = this.statsWindow[this.statsWindow.length - 2];
            this.collectAggregationStats(t, n);
            let {
                bytes: i,
                framesCodec: r,
                timestamp: s,
                resolution: a,
                minorResolution: o,
                majorResolution: l,
                encoder: u,
                decoder: c,
                codecType: d
            } = t, {
                timestamp: f
            } = n, E = (s - f) / 1e3;
            if (this.intervalTotal += E, this.resolutionTotal += a * E, this.minorResolutionTotal += o * E, this.majorResolutionTotal += l * E, this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts), null != u && null != d && "encoderBuckets" in this && (this.encoderBuckets[u] += E, this.codecBuckets[d] += E, null != t.codecType && "UNKNOWN" !== t.codecType && (this.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && (this.vmafScoreNum += 1, this.vmafScoreSum += e.vmafScore, this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && (this.psnrDbNum += 1, this.psnrDbSum += e.psnrDb, this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && (this.outboundSinkWantNum += 1, this.outboundSinkWantSum += e.outboundSinkWant)), null != c && null != d && "decoderBuckets" in this && (this.decoderBuckets[c] += E, this.codecBuckets[d] += E, null != t.codecType && "UNKNOWN" !== t.codecType && (this.decoderCodec = t.codecType)), this.statsWindow.length < 6) return;
            let {
                bytes: S,
                framesCodec: m,
                timestamp: T
            } = this.statsWindow[this.statsWindow.length - 3];
            _.forEach(e => {
                a <= e && (this.resolutionBuckets[e] += E)
            });
            let g = (s - T) / 1e3,
                I = (i - S) * 8 / g,
                C = (r - m) / g;
            p.forEach(e => {
                I <= e && (this.bitrateBuckets[e] += E)
            }), h.forEach(e => {
                C <= e && (this.fpsBuckets[e] += E)
            }), this.resolutionHistogram.addSample(a), this.bitrateHistogram.addSample(I), this.fpsHistogram.addSample(C), this.statsWindow.shift()
        }
        addSystemResources() {
            let e = f.default.getCurrentCPUUsagePercent(),
                t = f.default.getCurrentMemoryUsageKB();
            null != e && this.cpuHistogram.addSample(e), null != t && this.memoryHistogram.addSample(t)
        }
        getCodecsUsed() {
            let e = new Set;
            for (let [t, n] of Object.entries(this.codecBuckets)) n > 0 && e.add(t);
            return e
        }
        constructor(e) {
            this.decoderBuckets = {
                nvidia_direct_3d: 0,
                openh264: 0,
                videotoolbox: 0,
                amd_direct_3d: 0,
                intel: 0,
                intel_direct_3d: 0,
                vp8_libvpx: 0,
                uncategorized: 0,
                unknown: 0
            }, this.codecBuckets = {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }, this.statsWindow = [], this.cpuHistogram = new E.Histogram, this.memoryHistogram = new E.Histogram, this.fpsHistogram = new E.Histogram, this.bitrateHistogram = new E.Histogram, this.resolutionHistogram = new E.Histogram, this.decoderCodec = "UNKNOWN", this.aggregatedProperties = {
                framesCodec: 0,
                framesNetwork: 0,
                packets: 0,
                packetsLost: 0,
                framesDropped: 0,
                framesCodecError: 0,
                bytes: 0,
                nackCount: 0,
                pliCount: 0,
                qpSum: 0,
                freezeCount: 0,
                pauseCount: 0,
                totalFreezesDuration: 0,
                totalPausesDuration: 0,
                totalFramesDuration: 0,
                keyframes: 0,
                passthroughCount: 0,
                cryptorSuccessCount: 0,
                cryptorFailureCount: 0,
                cryptorDuration: 0,
                cryptorAttempts: 0
            }, this.aggregationDuration = 0, this.bitrateBuckets = {}, this.fpsBuckets = {}, this.resolutionBuckets = {}, this.resolutionTotal = 0, this.minorResolutionTotal = 0, this.majorResolutionTotal = 0, this.intervalTotal = 0, this.cryptorMaxAttempts = 0, this.videoStoppedReason = 0, this.startTime = e.now(), this.videoStoppedWatch = new d.StopWatch(e), p.forEach(e => {
                this.bitrateBuckets[e] = 0
            }), h.forEach(e => {
                this.fpsBuckets[e] = 0
            }), _.forEach(e => {
                this.resolutionBuckets[e] = 0
            })
        }
    }
    class A extends v {
        appendTargetRates(e, t, n) {
            if (this.statsWindow.length < 2) return;
            e = null != e ? e : 0, t = null != t ? t : 0, n = null != n ? n : 0;
            let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1e3;
            this.targetFrames = this.targetFrames + e * i, this.targetBytesNetwork = this.targetBytesNetwork + t / 8 * i, this.targetBytesMax = this.targetBytesMax + n / 8 * i, this.targetBitrateHistogram.addSample(t)
        }
        constructor(...e) {
            super(...e), this.encoderBuckets = {
                nvidia_cuda: 0,
                nvidia_direct_3d: 0,
                openh264: 0,
                videotoolbox: 0,
                amd_direct_3d: 0,
                intel: 0,
                intel_direct_3d: 0,
                vp8_libvpx: 0,
                uncategorized: 0,
                unknown: 0
            }, this.encoderCodec = "UNKNOWN", this.targetFrames = 0, this.targetBytesMax = 0, this.targetBytesNetwork = 0, this.targetBitrateHistogram = new E.Histogram, this.averageEncodeTime = 0, this.vmafScoreSum = 0, this.vmafScoreNum = 0, this.vmafHistogram = new E.Histogram, this.psnrDbSum = 0, this.psnrDbNum = 0, this.psnrHistogram = new E.Histogram, this.outboundSinkWantSum = 0, this.outboundSinkWantNum = 0, this.framesDroppedRateLimiter = null, this.framesDroppedEncoderQueue = null, this.framesDroppedCongestionWindow = null
        }
    }
}