function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("724458"), n("47120"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("46973"),
        a = n("379649"),
        o = n("140828"),
        l = n("179654");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class d {
        start() {
            this.connection.on(s.BaseConnectionEvent.Stats, this.sampleStats)
        }
        stop() {
            this.connection.off(s.BaseConnectionEvent.Stats, this.sampleStats)
        }
        getMosStats() {
            let e = r().reduce(this.inboundStats, (e, t) => {
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
        getPacketStats() {
            let e = r().reduce(this.inboundStats, (e, t) => (e.packetsReceived += t.packetsReceived, e.packetsReceivedLost += t.packetsLost, null != e.fecPacketsReceived && (e.fecPacketsReceived += t.fecPacketsReceived), null != e.fecPacketsDiscarded && (e.fecPacketsDiscarded += t.fecPacketsDiscarded), e), {
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
        getBytesStats() {
            let e = r().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0);
            return {
                bytes_sent: this.outboundStats.bytesSent,
                bytes_received: e
            }
        }
        getNetworkStats() {
            return this.networkQuality.getStats()
        }
        getSystemResourceStats() {
            return this.systemResources.getStats()
        }
        getBufferStats() {
            let e = r().reduce(this.inboundStats, (e, t) => ((null == e || null != t.bufferStats.audioJitterBuffer && null != e.audioJitterBuffer && t.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75) && (e = t.bufferStats), e), null);
            return {
                ... function(e) {
                    let t = {};
                    for (let n in e) {
                        let i = e[n];
                        t[n + "_mean"] = null != i ? i.mean : 0, t[n + "_p75"] = null != i ? i.p75 : 0, t[n + "_p95"] = null != i ? i.p95 : 0, t[n + "_p99"] = null != i ? i.p99 : 0, t[n + "_max"] = null != i ? i.max : 0
                    }
                    return t
                }({
                    audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                    audio_jitter_target: null != e ? e.audioJitterTarget : null,
                    audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                    relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                    relative_playout_delay: null != e ? e.relativePlayoutDelay : null
                })
            }
        }
        getFrameOpStats() {
            let e = r().reduce(this.inboundStats, (e, t) => (null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent), null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal), null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged), null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded), null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated), null != t.frameOpStats.preemptiveExpanded && (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded), null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng), e), {
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
        getDurationStats() {
            return {
                duration_listening: this.duration.listening,
                duration_speaking: this.duration.speaking,
                duration_participation: this.duration.participation,
                duration_connected: this.duration.connected
            }
        }
        getTransportStats() {
            return {
                decryption_failures: this.decryptionFailures,
                routing_failures: this.routingFailures
            }
        }
        getE2EEStats() {
            let e = r().reduce(this.inboundStats, (e, t) => {
                var n, i, r, s, a;
                return e.passthroughCount += null !== (n = t.passthroughCount) && void 0 !== n ? n : 0, e.decryptSuccessCount += null !== (i = t.decryptSuccessCount) && void 0 !== i ? i : 0, e.decryptFailureCount += null !== (r = t.decryptFailureCount) && void 0 !== r ? r : 0, e.decryptDuration += null !== (s = t.decryptDuration) && void 0 !== s ? s : 0, e.decryptAttempts += null !== (a = t.decryptAttempts) && void 0 !== a ? a : 0, e
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
        getPeriodicStats() {
            let e = [];
            for (let [T, f] of Object.entries(this.periodicInboundStats)) {
                let {
                    previous: S,
                    current: h,
                    currentTimestampMs: A,
                    previousTimestampMs: m,
                    numRateSamples: N
                } = f;
                if (void 0 !== m && A > m) {
                    var t, n, i, r, s, a, o, l, u, d, _, c, E, I;
                    let p = A - m,
                        O = {
                            userId: T,
                            silent: null !== (n = h.silent) && void 0 !== n ? n : 0 - (null !== (t = S.silent) && void 0 !== t ? t : 0),
                            normal: null !== (r = h.normal) && void 0 !== r ? r : 0 - (null !== (i = S.normal) && void 0 !== i ? i : 0),
                            merged: null !== (a = h.merged) && void 0 !== a ? a : 0 - (null !== (s = S.merged) && void 0 !== s ? s : 0),
                            expanded: null !== (l = h.expanded) && void 0 !== l ? l : 0 - (null !== (o = S.expanded) && void 0 !== o ? o : 0),
                            accelerated: null !== (d = h.accelerated) && void 0 !== d ? d : 0 - (null !== (u = S.accelerated) && void 0 !== u ? u : 0),
                            preemptiveExpanded: null !== (c = h.preemptiveExpanded) && void 0 !== c ? c : 0 - (null !== (_ = S.preemptiveExpanded) && void 0 !== _ ? _ : 0),
                            cng: null !== (I = h.cng) && void 0 !== I ? I : 0 - (null !== (E = S.cng) && void 0 !== E ? E : 0),
                            accelerateRate: f.accelerateRateSum / N,
                            expandRate: f.expandRateSum / N,
                            preemptiveExpandRate: f.preemptiveExpandRateSum / N,
                            speechExpandRate: f.speechExpandRateSum / N,
                            durationMs: p
                        };
                    O.normal + O.merged + O.expanded + O.accelerated + O.preemptiveExpanded > 0 && e.push(O)
                }
                this.periodicInboundStats[T].accelerateRateSum = 0, this.periodicInboundStats[T].expandRateSum = 0, this.periodicInboundStats[T].preemptiveExpandRateSum = 0, this.periodicInboundStats[T].speechExpandRateSum = 0, this.periodicInboundStats[T].numRateSamples = 0, this.periodicInboundStats[T].previous = h, this.periodicInboundStats[T].previousTimestampMs = A
            }
            return e
        }
        calculateMos(e, t) {
            let n = this.calculateR(e, t);
            return n < 0 ? 1 : n > 100 ? 4.5 : 1 + .035 * n + 71e-7 * n * (n - 60) * (100 - n)
        }
        calculateR(e, t) {
            return 93.4 - (.024 * e + (e > 177.3 ? .11 * (e - 177.3) : 0)) - (10 + 122 * t / (t + 10))
        }
        constructor(e) {
            u(this, "connection", void 0), u(this, "inboundStats", void 0), u(this, "outboundStats", void 0), u(this, "networkQuality", void 0), u(this, "systemResources", void 0), u(this, "duration", void 0), u(this, "decryptionFailures", void 0), u(this, "routingFailures", void 0), u(this, "periodicInboundStats", void 0), u(this, "sampleStats", void 0), this.connection = e, this.sampleStats = e => {
                if (null == e) return;
                this.networkQuality.incrementNetworkStats((0, a.now)()), this.systemResources.takeSample(), this.decryptionFailures = e.transport.decryptionFailures, this.routingFailures = e.transport.routingFailures, this.duration.connected++;
                let t = this.outboundStats.packetsSent,
                    n = r().reduce(this.inboundStats, (e, t) => (e.packetsReceived += t.packetsReceived, e), {
                        packetsReceived: 0
                    });
                r().forEach(e.rtp.outbound, e => {
                    if ("audio" === e.type) {
                        var t, n, i, r, s, a, o;
                        this.outboundStats = {
                            packetsSent: e.packetsSent,
                            bytesSent: e.bytesSent,
                            packetsLost: null !== (t = e.packetsLost) && void 0 !== t ? t : 0,
                            passthroughCount: null !== (n = e.passthroughCount) && void 0 !== n ? n : 0,
                            encryptSuccessCount: null !== (i = e.encryptSuccessCount) && void 0 !== i ? i : 0,
                            encryptFailureCount: null !== (r = e.encryptFailureCount) && void 0 !== r ? r : 0,
                            encryptDuration: null !== (s = e.encryptDuration) && void 0 !== s ? s : 0,
                            encryptAttempts: null !== (a = e.encryptAttempts) && void 0 !== a ? a : 0,
                            encryptMaxAttempts: null !== (o = e.encryptMaxAttempts) && void 0 !== o ? o : 0
                        }
                    }
                }), r().forEach(e.rtp.inbound, (t, n) => {
                    r().forEach(t, t => {
                        if ("audio" === t.type) {
                            var i, s, a, o, l, u, d, _, c, E, I, T, f, S, h, A, m;
                            let N = null !== (i = e.transport.ping) && void 0 !== i ? i : 0,
                                p = t.packetsReceived,
                                O = t.packetsLost,
                                R = t.bytesReceived,
                                C = null !== (s = t.fecPacketsReceived) && void 0 !== s ? s : 0,
                                g = null !== (a = t.fecPacketsDiscarded) && void 0 !== a ? a : 0,
                                L = null !== (o = t.jitterBuffer) && void 0 !== o ? o : 0,
                                v = {
                                    audioJitterBuffer: t.audioJitterBuffer,
                                    audioJitterTarget: t.audioJitterTarget,
                                    audioJitterDelay: t.audioJitterDelay,
                                    relativeReceptionDelay: t.relativeReceptionDelay,
                                    relativePlayoutDelay: t.relativePlayoutDelay
                                },
                                D = {
                                    silent: t.opSilence,
                                    normal: t.opNormal,
                                    merged: t.opMerge,
                                    expanded: t.opExpand,
                                    accelerated: t.opAccelerate,
                                    preemptiveExpanded: t.opPreemptiveExpand,
                                    cng: t.opCNG
                                },
                                M = {
                                    passthroughCount: null !== (l = t.passthroughCount) && void 0 !== l ? l : 0,
                                    decryptSuccessCount: null !== (u = t.decryptSuccessCount) && void 0 !== u ? u : 0,
                                    decryptFailureCount: null !== (d = t.decryptFailureCount) && void 0 !== d ? d : 0,
                                    decryptDuration: null !== (_ = t.decryptDuration) && void 0 !== _ ? _ : 0,
                                    decryptAttempts: null !== (c = t.decryptAttempts) && void 0 !== c ? c : 0
                                };
                            if (null != this.inboundStats[n]) {
                                let e = p - this.inboundStats[n].packetsReceived,
                                    i = O - this.inboundStats[n].packetsLost,
                                    s = 0,
                                    a = this.inboundStats[n].mosBuckets;
                                e > 0 && i >= 0 && (s = this.calculateMos(N + L, r().clamp(i / (e + i), 0, 1)), a[Math.floor(s)]++), this.inboundStats[n] = {
                                    packetsReceived: p,
                                    bytesReceived: R,
                                    packetsLost: O,
                                    fecPacketsReceived: C,
                                    fecPacketsDiscarded: g,
                                    mos: s,
                                    mosSum: this.inboundStats[n].mosSum + s,
                                    mosCount: this.inboundStats[n].mosCount + (s > 0 ? 1 : 0),
                                    mosBuckets: a,
                                    bufferStats: v,
                                    frameOpStats: D,
                                    ...M
                                }, this.periodicInboundStats[n] = {
                                    previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                    previous: this.periodicInboundStats[n].previous,
                                    currentTimestampMs: Date.now(),
                                    current: D,
                                    accelerateRateSum: this.periodicInboundStats[n].accelerateRateSum + (null !== (E = t.accelerateRate) && void 0 !== E ? E : 0),
                                    expandRateSum: this.periodicInboundStats[n].expandRateSum + (null !== (I = t.expandRate) && void 0 !== I ? I : 0),
                                    preemptiveExpandRateSum: this.periodicInboundStats[n].preemptiveExpandRateSum + (null !== (T = t.preemptiveExpandRate) && void 0 !== T ? T : 0),
                                    speechExpandRateSum: this.periodicInboundStats[n].speechExpandRateSum + (null !== (f = t.speechExpandRate) && void 0 !== f ? f : 0),
                                    numRateSamples: this.periodicInboundStats[n].numRateSamples + 1
                                }
                            } else this.inboundStats[n] = {
                                packetsReceived: p,
                                bytesReceived: R,
                                packetsLost: O,
                                fecPacketsReceived: C,
                                fecPacketsDiscarded: g,
                                mos: 0,
                                mosSum: 0,
                                mosCount: 0,
                                mosBuckets: [0, 0, 0, 0, 0],
                                bufferStats: v,
                                frameOpStats: D,
                                ...M
                            }, this.periodicInboundStats[n] = {
                                previousTimestampMs: Date.now(),
                                previous: D,
                                currentTimestampMs: Date.now(),
                                current: D,
                                accelerateRateSum: null !== (S = t.accelerateRate) && void 0 !== S ? S : 0,
                                expandRateSum: null !== (h = t.expandRate) && void 0 !== h ? h : 0,
                                preemptiveExpandRateSum: null !== (A = t.preemptiveExpandRate) && void 0 !== A ? A : 0,
                                speechExpandRateSum: null !== (m = t.speechExpandRate) && void 0 !== m ? m : 0,
                                numRateSamples: 1
                            }
                        }
                    })
                });
                let i = !1,
                    s = !1;
                this.outboundStats.packetsSent > t && (i = !0, this.duration.speaking++), r().reduce(this.inboundStats, (e, t) => (e.packetsReceived += t.packetsReceived, e), {
                    packetsReceived: 0
                }).packetsReceived > n.packetsReceived && (s = !0, this.duration.listening++), (i || s) && this.duration.participation++
            }, this.networkQuality = new o.default, this.systemResources = new l.default, this.inboundStats = {}, this.outboundStats = {
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
    }
}