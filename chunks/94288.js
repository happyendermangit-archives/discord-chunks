function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CodecTypes: function() {
            return u
        },
        Encoders: function() {
            return s
        },
        InboundStats: function() {
            return D
        },
        OutboundStats: function() {
            return L
        },
        RawVideoStats: function() {
            return P
        },
        VideoStoppedReasons: function() {
            return c
        },
        parseEncoder: function() {
            return R
        }
    });
    var r, o, i, a, u, s, l, c, f = n("849680"),
        d = n("891440"),
        _ = n("791909");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t && y(e.prototype, t), n && y(e, n), e
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
        v = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        g = [720, 480, 360],
        A = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "keyframes", "passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts"];
    (r = u || (u = {})).H264 = "H264", r.H265 = "H265", r.VP8 = "VP8", r.VP9 = "VP9", r.AV1 = "AV1", r.UNKNOWN = "UNKNOWN", (o = s || (s = {})).NVIDIA_CUDA = "nvidia_cuda", o.NVIDIA_DIRECT_3D = "nvidia_direct_3d", o.OPENH264 = "openh264", o.VIDEOTOOLBOX = "videotoolbox", o.AMD_DIRECT_3D = "amd_direct_3d", o.INTEL = "intel", o.INTEL_DIRECT_3D = "intel_direct_3d", o.VP8_LIBVPX = "vp8_libvpx", o.UNCATEGORIZED = "uncategorized", o.UNKNOWN = "unknown", (i = l || (l = {})).NVIDIA_DIRECT_3D = "nvidia_direct_3d", i.OPENH264 = "openh264", i.VIDEOTOOLBOX = "videotoolbox", i.AMD_DIRECT_3D = "amd_direct_3d", i.INTEL = "intel", i.INTEL_DIRECT_3D = "intel_direct_3d", i.VP8_LIBVPX = "vp8_libvpx", i.UNCATEGORIZED = "uncategorized", i.UNKNOWN = "unknown";
    var b = Object.freeze({
            "nvidia: cuda": "nvidia_cuda",
            "nvidia: direct3d": "nvidia_direct_3d",
            "amd: direct3d": "amd_direct_3d",
            "intel: direct3d": "intel_direct_3d",
            intel: "intel",
            VideoToolbox: "videotoolbox",
            OpenH264: "openh264",
            libvpx: "vp8_libvpx"
        }),
        N = Object.freeze({
            "nvidia: direct3d": "nvidia_direct_3d",
            "amd: direct3d": "amd_direct_3d",
            "intel: direct3d": "intel_direct_3d",
            intel: "intel",
            VideoToolbox: "videotoolbox",
            OpenH264: "openh264",
            libvpx: "vp8_libvpx"
        });

    function R(e) {
        if (null == e) return "unknown";
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = Object.keys(b)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                if (e.includes(a)) return b[a]
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
        return "uncategorized"
    }(a = c || (c = {}))[a.None = 0] = "None", a[a.ClientSideDisableVideo = 1] = "ClientSideDisableVideo", a[a.SenderStopped = 2] = "SenderStopped";

    function C(e) {
        if (null == e) return "UNKNOWN";
        if ("H264" === (e = e.toUpperCase())) return "H264";
        if ("H265" === e) return "H265";
        if ("VP8" === e) return "VP8";
        else if ("VP9" === e) return "VP9";
        else if ("AV1" === e || "AV1X" === e) return "AV1";
        else return "UNKNOWN"
    }
    var P = function() {
            function e() {
                m(this, e), h(this, "bytes", 0), h(this, "framesCodec", 0), h(this, "framesCodecError", null), h(this, "framesNetwork", 0), h(this, "resolution", 0), h(this, "minorResolution", 0), h(this, "majorResolution", 0), h(this, "timestamp", 0), h(this, "packets", 0), h(this, "packetsLost", 0), h(this, "framesDropped", 0), h(this, "nackCount", 0), h(this, "pliCount", 0), h(this, "encoder", null), h(this, "decoder", null), h(this, "codecType", null), h(this, "qpSum", 0), h(this, "freezeCount", 0), h(this, "pauseCount", 0), h(this, "totalFreezesDuration", 0), h(this, "totalPausesDuration", 0), h(this, "totalFramesDuration", 0), h(this, "vmafScore", null), h(this, "psnrDb", null), h(this, "outboundSinkWant", null), h(this, "keyframes", null), h(this, "framesDroppedRateLimiter", null), h(this, "framesDroppedEncoderQueue", null), h(this, "framesDroppedCongestionWindow", null), h(this, "passthroughCount", 0), h(this, "cryptorSuccessCount", 0), h(this, "cryptorFailureCount", 0), h(this, "cryptorDuration", 0), h(this, "cryptorAttempts", 0), h(this, "cryptorMaxAttempts", 0)
            }
            return I(e, null, [{
                key: "parseInboundStats",
                value: function(t, n) {
                    var r, o, i, a, u, s, l, c = new e;
                    return null == t ? c : (c.bytes = t.bytesReceived, c.framesCodec = t.framesDecoded, c.framesCodecError = null !== (r = t.framesDecodeErrors) && void 0 !== r ? r : null, c.framesNetwork = t.framesReceived, c.packets = t.packetsReceived, c.packetsLost = t.packetsLost, c.framesDropped = t.framesDropped, c.resolution = null != t.resolution ? t.resolution.height : 0, c.minorResolution = null != t.resolution ? Math.min(t.resolution.height, t.resolution.width) : 0, c.majorResolution = null != t.resolution ? Math.max(t.resolution.height, t.resolution.width) : 0, c.timestamp = n, c.nackCount = t.nackCount, c.pliCount = t.pliCount, c.decoder = function(e) {
                        if (null == e) return "unknown";
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, i = Object.keys(N)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                var a = o.value;
                                if (e.includes(a)) return N[a]
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
                        return "uncategorized"
                    }(t.decoderImplementationName), c.codecType = C(t.codec.name), c.qpSum = 0, c.freezeCount = t.freezeCount, c.pauseCount = t.pauseCount, c.totalFreezesDuration = t.totalFreezesDuration, c.totalPausesDuration = t.totalPausesDuration, c.totalFramesDuration = t.totalFramesDuration, c.keyframes = null !== (o = t.keyFramesDecoded) && void 0 !== o ? o : null, c.passthroughCount = null !== (i = t.passthroughCount) && void 0 !== i ? i : 0, c.cryptorSuccessCount = null !== (a = t.decryptSuccessCount) && void 0 !== a ? a : 0, c.cryptorFailureCount = null !== (u = t.decryptFailureCount) && void 0 !== u ? u : 0, c.cryptorDuration = null !== (s = t.decryptDuration) && void 0 !== s ? s : 0, c.cryptorAttempts = null !== (l = t.decryptAttempts) && void 0 !== l ? l : 0, c)
                }
            }, {
                key: "parseOutboundStats",
                value: function(t, n) {
                    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I = new e;
                    return null == t ? I : {
                        bytes: t.bytesSent,
                        framesCodec: t.framesEncoded,
                        framesCodecError: null,
                        framesNetwork: null !== (r = t.framesSent) && void 0 !== r ? r : 0,
                        packets: t.packetsSent,
                        packetsLost: null !== (o = t.packetsLost) && void 0 !== o ? o : 0,
                        framesDropped: 0,
                        resolution: null != t.resolution ? t.resolution.height : 0,
                        minorResolution: null != t.resolution ? Math.min(t.resolution.height, t.resolution.width) : 0,
                        majorResolution: null != t.resolution ? Math.max(t.resolution.height, t.resolution.width) : 0,
                        timestamp: n,
                        encoder: R(t.encoderImplementationName),
                        decoder: null,
                        codecType: C(t.codec.name),
                        nackCount: t.nackCount,
                        pliCount: t.pliCount,
                        qpSum: t.qpSum,
                        freezeCount: 0,
                        pauseCount: 0,
                        totalFreezesDuration: 0,
                        totalPausesDuration: 0,
                        totalFramesDuration: 0,
                        outboundSinkWant: null !== (i = t.sinkWantAsInt) && void 0 !== i ? i : null,
                        vmafScore: null !== (a = t.encoderQualityVmaf) && void 0 !== a ? a : null,
                        psnrDb: null !== (u = t.encoderQualityPsnr) && void 0 !== u ? u : null,
                        keyframes: null !== (s = t.keyFramesEncoded) && void 0 !== s ? s : null,
                        framesDroppedRateLimiter: null !== (l = t.framesDroppedRateLimiter) && void 0 !== l ? l : null,
                        framesDroppedEncoderQueue: null !== (c = t.framesDroppedEncoderQueue) && void 0 !== c ? c : null,
                        framesDroppedCongestionWindow: null !== (f = t.framesDroppedCongestionWindow) && void 0 !== f ? f : null,
                        passthroughCount: null !== (d = t.passthroughCount) && void 0 !== d ? d : 0,
                        cryptorSuccessCount: null !== (_ = t.encryptSuccessCount) && void 0 !== _ ? _ : 0,
                        cryptorFailureCount: null !== (E = t.encryptFailureCount) && void 0 !== E ? E : 0,
                        cryptorDuration: null !== (p = t.encryptDuration) && void 0 !== p ? p : 0,
                        cryptorAttempts: null !== (m = t.encryptAttempts) && void 0 !== m ? m : 0,
                        cryptorMaxAttempts: null !== (y = t.encryptMaxAttempts) && void 0 !== y ? y : 0
                    }
                }
            }]), e
        }(),
        D = function() {
            function e(t) {
                var n = this;
                m(this, e), h(this, "decoderBuckets", {
                    nvidia_direct_3d: 0,
                    openh264: 0,
                    videotoolbox: 0,
                    amd_direct_3d: 0,
                    intel: 0,
                    intel_direct_3d: 0,
                    vp8_libvpx: 0,
                    uncategorized: 0,
                    unknown: 0
                }), h(this, "codecBuckets", {
                    H264: 0,
                    H265: 0,
                    VP8: 0,
                    VP9: 0,
                    AV1: 0,
                    UNKNOWN: 0
                }), h(this, "statsWindow", []), h(this, "fpsHistogram", new d.Histogram), h(this, "bitrateHistogram", new d.Histogram), h(this, "resolutionHistogram", new d.Histogram), h(this, "systemResources", new _.default), h(this, "decoderCodec", "UNKNOWN"), h(this, "startTime", void 0), h(this, "timeToFirstFrame", void 0), h(this, "aggregatedProperties", {
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
                }), h(this, "aggregationDuration", 0), h(this, "bitrateBuckets", {}), h(this, "fpsBuckets", {}), h(this, "resolutionBuckets", {}), h(this, "resolutionTotal", 0), h(this, "minorResolutionTotal", 0), h(this, "majorResolutionTotal", 0), h(this, "intervalTotal", 0), h(this, "cryptorMaxAttempts", 0), h(this, "videoStoppedWatch", void 0), h(this, "videoStoppedReason", 0), this.startTime = t.now(), this.videoStoppedWatch = new f.StopWatch(t), S.forEach(function(e) {
                    n.bitrateBuckets[e] = 0
                }), v.forEach(function(e) {
                    n.fpsBuckets[e] = 0
                }), g.forEach(function(e) {
                    n.resolutionBuckets[e] = 0
                })
            }
            return I(e, [{
                key: "isVideoStopped",
                get: function() {
                    return 0 !== this.videoStoppedReason
                }
            }, {
                key: "videoStoppedDuration",
                get: function() {
                    return this.videoStoppedWatch.elapsed()
                }
            }, {
                key: "collectAggregationStats",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = A[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u, s = i.value,
                                l = e[s];
                            if (null !== l) {
                                var c = null !== (u = t[s]) && void 0 !== u ? u : 0;
                                c > l ? this.aggregatedProperties[s] += l : this.aggregatedProperties[s] += l - c
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
                    this.aggregationDuration += e.timestamp - t.timestamp
                }
            }, {
                key: "setVideoStopped",
                value: function(e, t) {
                    if (e) {
                        this.videoStoppedReason |= t, this.videoStoppedWatch.start();
                        return
                    }
                    this.videoStoppedReason &= ~t, 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop())
                }
            }, {
                key: "appendAndIncrementStats",
                value: function(e) {
                    var t = this;
                    if (this.isVideoStopped) return;
                    if (this.statsWindow.push(e), !(this.statsWindow.length < 2)) {
                        var n = this.statsWindow[this.statsWindow.length - 1],
                            r = this.statsWindow[this.statsWindow.length - 2];
                        this.collectAggregationStats(n, r);
                        var o = n.bytes,
                            i = n.framesCodec,
                            a = n.timestamp,
                            u = n.resolution,
                            s = n.minorResolution,
                            l = n.majorResolution,
                            c = n.encoder,
                            f = n.decoder,
                            d = n.codecType,
                            _ = (a - r.timestamp) / 1e3;
                        if (this.intervalTotal += _, this.resolutionTotal += u * _, this.minorResolutionTotal += s * _, this.majorResolutionTotal += l * _, this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, n.cryptorMaxAttempts), null != c && null != d && "encoderBuckets" in this && (this.encoderBuckets[c] += _, this.codecBuckets[d] += _, null != n.codecType && "UNKNOWN" !== n.codecType && (this.encoderCodec = n.codecType), null != e.vmafScore && e.vmafScore >= 0 && (this.vmafScoreNum += 1, this.vmafScoreSum += e.vmafScore, this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && (this.psnrDbNum += 1, this.psnrDbSum += e.psnrDb, this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && (this.outboundSinkWantNum += 1, this.outboundSinkWantSum += e.outboundSinkWant)), null != f && null != d && "decoderBuckets" in this && (this.decoderBuckets[f] += _, this.codecBuckets[d] += _, null != n.codecType && "UNKNOWN" !== n.codecType && (this.decoderCodec = n.codecType)), !(this.statsWindow.length < 6)) {
                            var E = this.statsWindow[this.statsWindow.length - 3],
                                p = E.bytes,
                                m = E.framesCodec,
                                y = E.timestamp;
                            g.forEach(function(e) {
                                u <= e && (t.resolutionBuckets[e] += _)
                            });
                            var I = (a - y) / 1e3,
                                h = (o - p) * 8 / I,
                                O = (i - m) / I;
                            S.forEach(function(e) {
                                h <= e && (t.bitrateBuckets[e] += _)
                            }), v.forEach(function(e) {
                                O <= e && (t.fpsBuckets[e] += _)
                            }), this.resolutionHistogram.addSample(u), this.bitrateHistogram.addSample(h), this.fpsHistogram.addSample(O), this.statsWindow.shift()
                        }
                    }
                }
            }, {
                key: "addSystemResources",
                value: function() {
                    this.systemResources.takeSample()
                }
            }, {
                key: "getCodecsUsed",
                value: function() {
                    var e = new Set,
                        t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Object.entries(this.codecBuckets)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a, u, s = (a = o.value, u = 2, function(e) {
                                    if (Array.isArray(e)) return e
                                }(a) || function(e, t) {
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
                                }(a, u) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return E(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                                    }
                                }(a, u) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                l = s[0];
                            s[1] > 0 && e.add(l)
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
                    return e
                }
            }]), e
        }(),
        L = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
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
                var e, r, o, i = O(t);
                if (n) {
                    var a = O(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : p(e)
            });

            function o() {
                var e;
                return m(this, o), e = r.apply(this, arguments), h(p(e), "encoderBuckets", {
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
                }), h(p(e), "encoderCodec", "UNKNOWN"), h(p(e), "targetFrames", 0), h(p(e), "targetBytesMax", 0), h(p(e), "targetBytesNetwork", 0), h(p(e), "targetBitrateHistogram", new d.Histogram), h(p(e), "averageEncodeTime", 0), h(p(e), "vmafScoreSum", 0), h(p(e), "vmafScoreNum", 0), h(p(e), "vmafHistogram", new d.Histogram), h(p(e), "psnrDbSum", 0), h(p(e), "psnrDbNum", 0), h(p(e), "psnrHistogram", new d.Histogram), h(p(e), "outboundSinkWantSum", 0), h(p(e), "outboundSinkWantNum", 0), h(p(e), "framesDroppedRateLimiter", null), h(p(e), "framesDroppedEncoderQueue", null), h(p(e), "framesDroppedCongestionWindow", null), e
            }
            return I(o, [{
                key: "appendTargetRates",
                value: function(e, t, n) {
                    if (!(this.statsWindow.length < 2)) {
                        e = null != e ? e : 0, t = null != t ? t : 0, n = null != n ? n : 0;
                        var r = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1e3;
                        this.targetFrames = this.targetFrames + e * r, this.targetBytesNetwork = this.targetBytesNetwork + t / 8 * r, this.targetBytesMax = this.targetBytesMax + n / 8 * r, this.targetBitrateHistogram.addSample(t)
                    }
                }
            }]), o
        }(D)
}