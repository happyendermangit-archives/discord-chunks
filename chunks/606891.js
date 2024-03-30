function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("384433"),
        a = n("849680"),
        u = n("639356"),
        s = n("791909");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }
    var _ = function() {
        var e, t, n;

        function r(e) {
            var t = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), f(this, "connection", void 0), f(this, "inboundStats", void 0), f(this, "outboundStats", void 0), f(this, "networkQuality", void 0), f(this, "systemResources", void 0), f(this, "duration", void 0), f(this, "decryptionFailures", void 0), f(this, "routingFailures", void 0), f(this, "periodicInboundStats", void 0), f(this, "sampleStats", void 0), this.connection = e, this.sampleStats = function(e) {
                if (null != e) {
                    t.networkQuality.incrementNetworkStats((0, a.now)()), t.systemResources.takeSample(), t.decryptionFailures = e.transport.decryptionFailures, t.routingFailures = e.transport.routingFailures, t.duration.connected++;
                    var n = t.outboundStats.packetsSent,
                        r = o().reduce(t.inboundStats, function(e, t) {
                            return e.packetsReceived += t.packetsReceived, e
                        }, {
                            packetsReceived: 0
                        });
                    o().forEach(e.rtp.outbound, function(e) {
                        if ("audio" === e.type) {
                            var n, r, o, i, a, u, s;
                            t.outboundStats = {
                                packetsSent: e.packetsSent,
                                bytesSent: e.bytesSent,
                                packetsLost: null !== (n = e.packetsLost) && void 0 !== n ? n : 0,
                                passthroughCount: null !== (r = e.passthroughCount) && void 0 !== r ? r : 0,
                                encryptSuccessCount: null !== (o = e.encryptSuccessCount) && void 0 !== o ? o : 0,
                                encryptFailureCount: null !== (i = e.encryptFailureCount) && void 0 !== i ? i : 0,
                                encryptDuration: null !== (a = e.encryptDuration) && void 0 !== a ? a : 0,
                                encryptAttempts: null !== (u = e.encryptAttempts) && void 0 !== u ? u : 0,
                                encryptMaxAttempts: null !== (s = e.encryptMaxAttempts) && void 0 !== s ? s : 0
                            }
                        }
                    }), o().forEach(e.rtp.inbound, function(n, r) {
                        o().forEach(n, function(n) {
                            if ("audio" === n.type) {
                                var i, a, u, s, l = null !== (O = e.transport.ping) && void 0 !== O ? O : 0,
                                    c = n.packetsReceived,
                                    f = n.packetsLost,
                                    _ = n.bytesReceived,
                                    E = null !== (T = n.fecPacketsReceived) && void 0 !== T ? T : 0,
                                    p = null !== (S = n.fecPacketsDiscarded) && void 0 !== S ? S : 0,
                                    m = null !== (v = n.jitterBuffer) && void 0 !== v ? v : 0,
                                    y = {
                                        audioJitterBuffer: n.audioJitterBuffer,
                                        audioJitterTarget: n.audioJitterTarget,
                                        audioJitterDelay: n.audioJitterDelay,
                                        relativeReceptionDelay: n.relativeReceptionDelay,
                                        relativePlayoutDelay: n.relativePlayoutDelay
                                    },
                                    I = {
                                        silent: n.opSilence,
                                        normal: n.opNormal,
                                        merged: n.opMerge,
                                        expanded: n.opExpand,
                                        accelerated: n.opAccelerate,
                                        preemptiveExpanded: n.opPreemptiveExpand,
                                        cng: n.opCNG
                                    },
                                    h = {
                                        passthroughCount: null !== (g = n.passthroughCount) && void 0 !== g ? g : 0,
                                        decryptSuccessCount: null !== (A = n.decryptSuccessCount) && void 0 !== A ? A : 0,
                                        decryptFailureCount: null !== (b = n.decryptFailureCount) && void 0 !== b ? b : 0,
                                        decryptDuration: null !== (N = n.decryptDuration) && void 0 !== N ? N : 0,
                                        decryptAttempts: null !== (R = n.decryptAttempts) && void 0 !== R ? R : 0
                                    };
                                if (null != t.inboundStats[r]) {
                                    var O, T, S, v, g, A, b, N, R, C, P, D, L, M = c - t.inboundStats[r].packetsReceived,
                                        U = f - t.inboundStats[r].packetsLost,
                                        w = 0,
                                        k = t.inboundStats[r].mosBuckets;
                                    M > 0 && U >= 0 && (w = t.calculateMos(l + m, o().clamp(U / (M + U), 0, 1)), k[Math.floor(w)]++), t.inboundStats[r] = d({
                                        packetsReceived: c,
                                        bytesReceived: _,
                                        packetsLost: f,
                                        fecPacketsReceived: E,
                                        fecPacketsDiscarded: p,
                                        mos: w,
                                        mosSum: t.inboundStats[r].mosSum + w,
                                        mosCount: t.inboundStats[r].mosCount + (w > 0 ? 1 : 0),
                                        mosBuckets: k,
                                        bufferStats: y,
                                        frameOpStats: I
                                    }, h), t.periodicInboundStats[r] = {
                                        previousTimestampMs: t.periodicInboundStats[r].previousTimestampMs,
                                        previous: t.periodicInboundStats[r].previous,
                                        currentTimestampMs: Date.now(),
                                        current: I,
                                        accelerateRateSum: t.periodicInboundStats[r].accelerateRateSum + (null !== (C = n.accelerateRate) && void 0 !== C ? C : 0),
                                        expandRateSum: t.periodicInboundStats[r].expandRateSum + (null !== (P = n.expandRate) && void 0 !== P ? P : 0),
                                        preemptiveExpandRateSum: t.periodicInboundStats[r].preemptiveExpandRateSum + (null !== (D = n.preemptiveExpandRate) && void 0 !== D ? D : 0),
                                        speechExpandRateSum: t.periodicInboundStats[r].speechExpandRateSum + (null !== (L = n.speechExpandRate) && void 0 !== L ? L : 0),
                                        numRateSamples: t.periodicInboundStats[r].numRateSamples + 1
                                    }
                                } else t.inboundStats[r] = d({
                                    packetsReceived: c,
                                    bytesReceived: _,
                                    packetsLost: f,
                                    fecPacketsReceived: E,
                                    fecPacketsDiscarded: p,
                                    mos: 0,
                                    mosSum: 0,
                                    mosCount: 0,
                                    mosBuckets: [0, 0, 0, 0, 0],
                                    bufferStats: y,
                                    frameOpStats: I
                                }, h), t.periodicInboundStats[r] = {
                                    previousTimestampMs: Date.now(),
                                    previous: I,
                                    currentTimestampMs: Date.now(),
                                    current: I,
                                    accelerateRateSum: null !== (i = n.accelerateRate) && void 0 !== i ? i : 0,
                                    expandRateSum: null !== (a = n.expandRate) && void 0 !== a ? a : 0,
                                    preemptiveExpandRateSum: null !== (u = n.preemptiveExpandRate) && void 0 !== u ? u : 0,
                                    speechExpandRateSum: null !== (s = n.speechExpandRate) && void 0 !== s ? s : 0,
                                    numRateSamples: 1
                                }
                            }
                        })
                    });
                    var i = !1,
                        u = !1;
                    t.outboundStats.packetsSent > n && (i = !0, t.duration.speaking++), o().reduce(t.inboundStats, function(e, t) {
                        return e.packetsReceived += t.packetsReceived, e
                    }, {
                        packetsReceived: 0
                    }).packetsReceived > r.packetsReceived && (u = !0, t.duration.listening++), (i || u) && t.duration.participation++
                }
            }, this.networkQuality = new u.default, this.systemResources = new s.default, this.inboundStats = {}, this.outboundStats = {
                packetsSent: 0,
                bytesSent: 0,
                packetsLost: 0,
                passthroughCount: 0,
                encryptSuccessCount: 0,
                encryptFailureCount: 0,
                encryptDuration: 0,
                encryptAttempts: 0,
                encryptMaxAttempts: 0
            }, this.duration = {
                listening: 0,
                speaking: 0,
                participation: 0,
                connected: 0
            }, this.periodicInboundStats = {}
        }
        return e = r, t = [{
            key: "start",
            value: function() {
                this.connection.on(i.BaseConnectionEvent.Stats, this.sampleStats)
            }
        }, {
            key: "stop",
            value: function() {
                this.connection.off(i.BaseConnectionEvent.Stats, this.sampleStats)
            }
        }, {
            key: "getMosStats",
            value: function() {
                var e = o().reduce(this.inboundStats, function(e, t) {
                    e.mosSum += t.mosSum, e.mosCount += t.mosCount;
                    for (var n = 0; n < 5; n++) e.mosBuckets[n] += t.mosBuckets[n];
                    return e
                }, {
                    mosSum: 0,
                    mosCount: 0,
                    mosBuckets: [0, 0, 0, 0, 0]
                });
                return {
                    mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
                    mos_1: e.mosBuckets[1],
                    mos_2: e.mosBuckets[2],
                    mos_3: e.mosBuckets[3],
                    mos_4: e.mosBuckets[4]
                }
            }
        }, {
            key: "getPacketStats",
            value: function() {
                var e = o().reduce(this.inboundStats, function(e, t) {
                    return e.packetsReceived += t.packetsReceived, e.packetsReceivedLost += t.packetsLost, null != e.fecPacketsReceived && (e.fecPacketsReceived += t.fecPacketsReceived), null != e.fecPacketsDiscarded && (e.fecPacketsDiscarded += t.fecPacketsDiscarded), e
                }, {
                    packetsReceived: 0,
                    packetsReceivedLost: 0,
                    fecPacketsReceived: 0,
                    fecPacketsDiscarded: 0
                });
                return {
                    packets_sent: this.outboundStats.packetsSent,
                    packets_sent_lost: this.outboundStats.packetsLost,
                    packets_received: e.packetsReceived,
                    packets_received_lost: e.packetsReceivedLost,
                    fec_packets_received: e.fecPacketsReceived,
                    fec_packets_discarded: e.fecPacketsDiscarded
                }
            }
        }, {
            key: "getBytesStats",
            value: function() {
                var e = o().reduce(this.inboundStats, function(e, t) {
                    return e + t.bytesReceived
                }, 0);
                return {
                    bytes_sent: this.outboundStats.bytesSent,
                    bytes_received: e
                }
            }
        }, {
            key: "getNetworkStats",
            value: function() {
                return this.networkQuality.getStats()
            }
        }, {
            key: "getSystemResourceStats",
            value: function() {
                return this.systemResources.getStats()
            }
        }, {
            key: "getBufferStats",
            value: function() {
                var e = o().reduce(this.inboundStats, function(e, t) {
                    return (null == e || null != t.bufferStats.audioJitterBuffer && null != e.audioJitterBuffer && t.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75) && (e = t.bufferStats), e
                }, null);
                return d({}, function(e) {
                    var t = {};
                    for (var n in e) {
                        var r = e[n];
                        t[n + "_mean"] = null != r ? r.mean : 0, t[n + "_p75"] = null != r ? r.p75 : 0, t[n + "_p95"] = null != r ? r.p95 : 0, t[n + "_p99"] = null != r ? r.p99 : 0, t[n + "_max"] = null != r ? r.max : 0
                    }
                    return t
                }({
                    audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                    audio_jitter_target: null != e ? e.audioJitterTarget : null,
                    audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                    relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                    relative_playout_delay: null != e ? e.relativePlayoutDelay : null
                }))
            }
        }, {
            key: "getFrameOpStats",
            value: function() {
                var e = o().reduce(this.inboundStats, function(e, t) {
                    return null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent), null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal), null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged), null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded), null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated), null != t.frameOpStats.preemptiveExpanded && (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded), null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng), e
                }, {
                    silent: 0,
                    normal: 0,
                    merged: 0,
                    expanded: 0,
                    accelerated: 0,
                    preemptiveExpanded: 0,
                    cng: 0
                });
                return {
                    frame_op_silent: e.silent,
                    frame_op_normal: e.normal,
                    frame_op_merged: e.merged,
                    frame_op_expanded: e.expanded,
                    frame_op_accelerated: e.accelerated,
                    frame_op_preemptive_expanded: e.preemptiveExpanded,
                    frame_op_cng: e.cng
                }
            }
        }, {
            key: "getDurationStats",
            value: function() {
                return {
                    duration_listening: this.duration.listening,
                    duration_speaking: this.duration.speaking,
                    duration_participation: this.duration.participation,
                    duration_connected: this.duration.connected
                }
            }
        }, {
            key: "getTransportStats",
            value: function() {
                return {
                    decryption_failures: this.decryptionFailures,
                    routing_failures: this.routingFailures
                }
            }
        }, {
            key: "getE2EEStats",
            value: function() {
                var e = o().reduce(this.inboundStats, function(e, t) {
                    var n, r, o, i, a;
                    return e.passthroughCount += null !== (n = t.passthroughCount) && void 0 !== n ? n : 0, e.decryptSuccessCount += null !== (r = t.decryptSuccessCount) && void 0 !== r ? r : 0, e.decryptFailureCount += null !== (o = t.decryptFailureCount) && void 0 !== o ? o : 0, e.decryptDuration += null !== (i = t.decryptDuration) && void 0 !== i ? i : 0, e.decryptAttempts += null !== (a = t.decryptAttempts) && void 0 !== a ? a : 0, e
                }, {
                    passthroughCount: 0,
                    decryptSuccessCount: 0,
                    decryptFailureCount: 0,
                    decryptDuration: 0,
                    decryptAttempts: 0
                });
                return {
                    decrypt_passthrough_count: e.passthroughCount,
                    decrypt_success_count: e.decryptSuccessCount,
                    decrypt_failure_count: e.decryptFailureCount,
                    decrypt_duration: e.decryptDuration,
                    decrypt_attempts: e.decryptAttempts,
                    encrypt_passthrough_count: this.outboundStats.passthroughCount,
                    encrypt_success_count: this.outboundStats.encryptSuccessCount,
                    encrypt_failure_count: this.outboundStats.encryptFailureCount,
                    encrypt_duration: this.outboundStats.encryptDuration,
                    encrypt_attempts: this.outboundStats.encryptAttempts,
                    encrypt_max_attempts: this.outboundStats.encryptMaxAttempts
                }
            }
        }, {
            key: "getPeriodicStats",
            value: function() {
                var e = [],
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.entries(this.periodicInboundStats)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = (p = o.value, m = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(p) || function(e, t) {
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
                            }(p, m) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return l(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                                }
                            }(p, m) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            u = a[0],
                            s = a[1],
                            c = s.previous,
                            f = s.current,
                            d = s.currentTimestampMs,
                            _ = s.previousTimestampMs,
                            E = s.numRateSamples;
                        if (void 0 !== _ && d > _) {
                            var p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P, D = d - _,
                                L = {
                                    userId: u,
                                    silent: null !== (I = f.silent) && void 0 !== I ? I : 0 - (null !== (y = c.silent) && void 0 !== y ? y : 0),
                                    normal: null !== (O = f.normal) && void 0 !== O ? O : 0 - (null !== (h = c.normal) && void 0 !== h ? h : 0),
                                    merged: null !== (S = f.merged) && void 0 !== S ? S : 0 - (null !== (T = c.merged) && void 0 !== T ? T : 0),
                                    expanded: null !== (g = f.expanded) && void 0 !== g ? g : 0 - (null !== (v = c.expanded) && void 0 !== v ? v : 0),
                                    accelerated: null !== (b = f.accelerated) && void 0 !== b ? b : 0 - (null !== (A = c.accelerated) && void 0 !== A ? A : 0),
                                    preemptiveExpanded: null !== (R = f.preemptiveExpanded) && void 0 !== R ? R : 0 - (null !== (N = c.preemptiveExpanded) && void 0 !== N ? N : 0),
                                    cng: null !== (P = f.cng) && void 0 !== P ? P : 0 - (null !== (C = c.cng) && void 0 !== C ? C : 0),
                                    accelerateRate: s.accelerateRateSum / E,
                                    expandRate: s.expandRateSum / E,
                                    preemptiveExpandRate: s.preemptiveExpandRateSum / E,
                                    speechExpandRate: s.speechExpandRateSum / E,
                                    durationMs: D
                                };
                            L.normal + L.merged + L.expanded + L.accelerated + L.preemptiveExpanded > 0 && e.push(L)
                        }
                        this.periodicInboundStats[u].accelerateRateSum = 0, this.periodicInboundStats[u].expandRateSum = 0, this.periodicInboundStats[u].preemptiveExpandRateSum = 0, this.periodicInboundStats[u].speechExpandRateSum = 0, this.periodicInboundStats[u].numRateSamples = 0, this.periodicInboundStats[u].previous = f, this.periodicInboundStats[u].previousTimestampMs = d
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
        }, {
            key: "calculateMos",
            value: function(e, t) {
                var n = this.calculateR(e, t);
                return n < 0 ? 1 : n > 100 ? 4.5 : 1 + .035 * n + 71e-7 * n * (n - 60) * (100 - n)
            }
        }, {
            key: "calculateR",
            value: function(e, t) {
                return 93.4 - (.024 * e + (e > 177.3 ? .11 * (e - 177.3) : 0)) - (10 + 122 * t / (t + 10))
            }
        }], c(e.prototype, t), n && c(e, n), r
    }()
}