function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CodecTypes: function() {
            return i
        },
        Encoders: function() {
            return s
        },
        VideoStoppedReasons: function() {
            return a
        },
        parseEncoder: function() {
            return T
        },
        RawVideoStats: function() {
            return I
        },
        InboundStats: function() {
            return A
        },
        OutboundStats: function() {
            return C
        }
    }), n("222007"), n("424973");
    var i, s, r, a, o, l, u, d, c = n("398183"),
        _ = n("226445"),
        f = n("966649");
    let E = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
        h = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        g = [720, 480, 360],
        m = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "keyframes", "passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts"];
    (o = i || (i = {})).H264 = "H264", o.H265 = "H265", o.VP8 = "VP8", o.VP9 = "VP9", o.AV1 = "AV1", o.UNKNOWN = "UNKNOWN", (l = s || (s = {})).NVIDIA_CUDA = "nvidia_cuda", l.NVIDIA_DIRECT_3D = "nvidia_direct_3d", l.OPENH264 = "openh264", l.VIDEOTOOLBOX = "videotoolbox", l.AMD_DIRECT_3D = "amd_direct_3d", l.INTEL = "intel", l.INTEL_DIRECT_3D = "intel_direct_3d", l.VP8_LIBVPX = "vp8_libvpx", l.UNCATEGORIZED = "uncategorized", l.UNKNOWN = "unknown", (u = r || (r = {})).NVIDIA_DIRECT_3D = "nvidia_direct_3d", u.OPENH264 = "openh264", u.VIDEOTOOLBOX = "videotoolbox", u.AMD_DIRECT_3D = "amd_direct_3d", u.INTEL = "intel", u.INTEL_DIRECT_3D = "intel_direct_3d", u.VP8_LIBVPX = "vp8_libvpx", u.UNCATEGORIZED = "uncategorized", u.UNKNOWN = "unknown";
    let p = Object.freeze({
            "nvidia: cuda": "nvidia_cuda",
            "nvidia: direct3d": "nvidia_direct_3d",
            "amd: direct3d": "amd_direct_3d",
            "intel: direct3d": "intel_direct_3d",
            intel: "intel",
            VideoToolbox: "videotoolbox",
            OpenH264: "openh264",
            libvpx: "vp8_libvpx"
        }),
        S = Object.freeze({
            "nvidia: direct3d": "nvidia_direct_3d",
            "amd: direct3d": "amd_direct_3d",
            "intel: direct3d": "intel_direct_3d",
            intel: "intel",
            VideoToolbox: "videotoolbox",
            OpenH264: "openh264",
            libvpx: "vp8_libvpx"
        });

    function T(e) {
        if (null == e) return "unknown";
        for (let t of Object.keys(p))
            if (e.includes(t)) return p[t];
        return "uncategorized"
    }(d = a || (a = {}))[d.None = 0] = "None", d[d.ClientSideDisableVideo = 1] = "ClientSideDisableVideo", d[d.SenderStopped = 2] = "SenderStopped";

    function v(e) {
        if (null == e) return "UNKNOWN";
        if ("H264" === (e = e.toUpperCase())) return "H264";
        if ("H265" === e) return "H265";
        if ("VP8" === e) return "VP8";
        else if ("VP9" === e) return "VP9";
        else if ("AV1" === e || "AV1X" === e) return "AV1";
        else return "UNKNOWN"
    }
    class I {
        static parseInboundStats(e, t) {
            var n, i, s, r, a, o, l;
            let u = new I;
            return null == e ? u : (u.bytes = e.bytesReceived, u.framesCodec = e.framesDecoded, u.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null, u.framesNetwork = e.framesReceived, u.packets = e.packetsReceived, u.packetsLost = e.packetsLost, u.framesDropped = e.framesDropped, u.resolution = null != e.resolution ? e.resolution.height : 0, u.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0, u.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0, u.timestamp = t, u.nackCount = e.nackCount, u.pliCount = e.pliCount, u.decoder = function(e) {
                if (null == e) return "unknown";
                for (let t of Object.keys(S))
                    if (e.includes(t)) return S[t];
                return "uncategorized"
            }(e.decoderImplementationName), u.codecType = v(e.codec.name), u.qpSum = 0, u.freezeCount = e.freezeCount, u.pauseCount = e.pauseCount, u.totalFreezesDuration = e.totalFreezesDuration, u.totalPausesDuration = e.totalPausesDuration, u.totalFramesDuration = e.totalFramesDuration, u.keyframes = null !== (i = e.keyFramesDecoded) && void 0 !== i ? i : null, u.passthroughCount = null !== (s = e.passthroughCount) && void 0 !== s ? s : 0, u.cryptorSuccessCount = null !== (r = e.decryptSuccessCount) && void 0 !== r ? r : 0, u.cryptorFailureCount = null !== (a = e.decryptFailureCount) && void 0 !== a ? a : 0, u.cryptorDuration = null !== (o = e.decryptDuration) && void 0 !== o ? o : 0, u.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0, u)
        }
        static parseOutboundStats(e, t) {
            var n, i, s, r, a, o, l, u, d, c, _, f, E, h, g;
            let m = new I;
            return null == e ? m : {
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
                encoder: T(e.encoderImplementationName),
                decoder: null,
                codecType: v(e.codec.name),
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                qpSum: e.qpSum,
                freezeCount: 0,
                pauseCount: 0,
                totalFreezesDuration: 0,
                totalPausesDuration: 0,
                totalFramesDuration: 0,
                outboundSinkWant: null !== (s = e.sinkWantAsInt) && void 0 !== s ? s : null,
                vmafScore: null !== (r = e.encoderQualityVmaf) && void 0 !== r ? r : null,
                psnrDb: null !== (a = e.encoderQualityPsnr) && void 0 !== a ? a : null,
                keyframes: null !== (o = e.keyFramesEncoded) && void 0 !== o ? o : null,
                framesDroppedRateLimiter: null !== (l = e.framesDroppedRateLimiter) && void 0 !== l ? l : null,
                framesDroppedEncoderQueue: null !== (u = e.framesDroppedEncoderQueue) && void 0 !== u ? u : null,
                framesDroppedCongestionWindow: null !== (d = e.framesDroppedCongestionWindow) && void 0 !== d ? d : null,
                passthroughCount: null !== (c = e.passthroughCount) && void 0 !== c ? c : 0,
                cryptorSuccessCount: null !== (_ = e.encryptSuccessCount) && void 0 !== _ ? _ : 0,
                cryptorFailureCount: null !== (f = e.encryptFailureCount) && void 0 !== f ? f : 0,
                cryptorDuration: null !== (E = e.encryptDuration) && void 0 !== E ? E : 0,
                cryptorAttempts: null !== (h = e.encryptAttempts) && void 0 !== h ? h : 0,
                cryptorMaxAttempts: null !== (g = e.encryptMaxAttempts) && void 0 !== g ? g : 0
            }
        }
        constructor() {
            this.bytes = 0, this.framesCodec = 0, this.framesCodecError = null, this.framesNetwork = 0, this.resolution = 0, this.minorResolution = 0, this.majorResolution = 0, this.timestamp = 0, this.packets = 0, this.packetsLost = 0, this.framesDropped = 0, this.nackCount = 0, this.pliCount = 0, this.encoder = null, this.decoder = null, this.codecType = null, this.qpSum = 0, this.freezeCount = 0, this.pauseCount = 0, this.totalFreezesDuration = 0, this.totalPausesDuration = 0, this.totalFramesDuration = 0, this.vmafScore = null, this.psnrDb = null, this.outboundSinkWant = null, this.keyframes = null, this.framesDroppedRateLimiter = null, this.framesDroppedEncoderQueue = null, this.framesDroppedCongestionWindow = null, this.passthroughCount = 0, this.cryptorSuccessCount = 0, this.cryptorFailureCount = 0, this.cryptorDuration = 0, this.cryptorAttempts = 0, this.cryptorMaxAttempts = 0
        }
    }
    class A {
        get isVideoStopped() {
            return 0 !== this.videoStoppedReason
        }
        get videoStoppedDuration() {
            return this.videoStoppedWatch.elapsed()
        }
        collectAggregationStats(e, t) {
            for (let i of m) {
                var n;
                let s = e[i];
                if (null === s) continue;
                let r = null !== (n = t[i]) && void 0 !== n ? n : 0;
                r > s ? this.aggregatedProperties[i] += s : this.aggregatedProperties[i] += s - r
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
                framesCodec: s,
                timestamp: r,
                resolution: a,
                minorResolution: o,
                majorResolution: l,
                encoder: u,
                decoder: d,
                codecType: c
            } = t, {
                timestamp: _
            } = n, f = (r - _) / 1e3;
            if (this.intervalTotal += f, this.resolutionTotal += a * f, this.minorResolutionTotal += o * f, this.majorResolutionTotal += l * f, this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts), null != u && null != c && "encoderBuckets" in this && (this.encoderBuckets[u] += f, this.codecBuckets[c] += f, null != t.codecType && "UNKNOWN" !== t.codecType && (this.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && (this.vmafScoreNum += 1, this.vmafScoreSum += e.vmafScore, this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && (this.psnrDbNum += 1, this.psnrDbSum += e.psnrDb, this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && (this.outboundSinkWantNum += 1, this.outboundSinkWantSum += e.outboundSinkWant)), null != d && null != c && "decoderBuckets" in this && (this.decoderBuckets[d] += f, this.codecBuckets[c] += f, null != t.codecType && "UNKNOWN" !== t.codecType && (this.decoderCodec = t.codecType)), this.statsWindow.length < 6) return;
            let {
                bytes: m,
                framesCodec: p,
                timestamp: S
            } = this.statsWindow[this.statsWindow.length - 3];
            g.forEach(e => {
                a <= e && (this.resolutionBuckets[e] += f)
            });
            let T = (r - S) / 1e3,
                v = (i - m) * 8 / T,
                I = (s - p) / T;
            E.forEach(e => {
                v <= e && (this.bitrateBuckets[e] += f)
            }), h.forEach(e => {
                I <= e && (this.fpsBuckets[e] += f)
            }), this.resolutionHistogram.addSample(a), this.bitrateHistogram.addSample(v), this.fpsHistogram.addSample(I), this.statsWindow.shift()
        }
        addSystemResources() {
            this.systemResources.takeSample()
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
            }, this.statsWindow = [], this.fpsHistogram = new _.Histogram, this.bitrateHistogram = new _.Histogram, this.resolutionHistogram = new _.Histogram, this.systemResources = new f.default, this.decoderCodec = "UNKNOWN", this.aggregatedProperties = {
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
            }, this.aggregationDuration = 0, this.bitrateBuckets = {}, this.fpsBuckets = {}, this.resolutionBuckets = {}, this.resolutionTotal = 0, this.minorResolutionTotal = 0, this.majorResolutionTotal = 0, this.intervalTotal = 0, this.cryptorMaxAttempts = 0, this.videoStoppedReason = 0, this.startTime = e.now(), this.videoStoppedWatch = new c.StopWatch(e), E.forEach(e => {
                this.bitrateBuckets[e] = 0
            }), h.forEach(e => {
                this.fpsBuckets[e] = 0
            }), g.forEach(e => {
                this.resolutionBuckets[e] = 0
            })
        }
    }
    class C extends A {
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
            }, this.encoderCodec = "UNKNOWN", this.targetFrames = 0, this.targetBytesMax = 0, this.targetBytesNetwork = 0, this.targetBitrateHistogram = new _.Histogram, this.averageEncodeTime = 0, this.vmafScoreSum = 0, this.vmafScoreNum = 0, this.vmafHistogram = new _.Histogram, this.psnrDbSum = 0, this.psnrDbNum = 0, this.psnrHistogram = new _.Histogram, this.outboundSinkWantSum = 0, this.outboundSinkWantNum = 0, this.framesDroppedRateLimiter = null, this.framesDroppedEncoderQueue = null, this.framesDroppedCongestionWindow = null
        }
    }
}