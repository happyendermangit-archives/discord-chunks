function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("687757");

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function i(e) {
        return e / 32768
    }

    function a(e) {
        var t, n, r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O, T, S = (null !== (c = null == e ? void 0 : e.headerBytes) && void 0 !== c ? c : 0) + (null !== (f = null == e ? void 0 : e.payloadBytes) && void 0 !== f ? f : 0) + (null !== (d = null == e ? void 0 : e.paddingBytes) && void 0 !== d ? d : 0);
        return (null !== (_ = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== _ ? _ : 0) + (null !== (E = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== E ? E : 0) + (null !== (p = null == e ? void 0 : null === (r = e.fec) || void 0 === r ? void 0 : r.paddingBytes) && void 0 !== p ? p : 0) + (null !== (m = null == e ? void 0 : null === (o = e.retransmitted) || void 0 === o ? void 0 : o.headerBytes) && void 0 !== m ? m : 0) + (null !== (y = null == e ? void 0 : null === (i = e.retransmitted) || void 0 === i ? void 0 : i.payloadBytes) && void 0 !== y ? y : 0) + (null !== (I = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.paddingBytes) && void 0 !== I ? I : 0) + (null !== (h = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.headerBytes) && void 0 !== h ? h : 0) + (null !== (O = null == e ? void 0 : null === (s = e.transmitted) || void 0 === s ? void 0 : s.payloadBytes) && void 0 !== O ? O : 0) + (null !== (T = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.paddingBytes) && void 0 !== T ? T : 0) + S
    }

    function u(e) {
        var t, n, r, o, i, a, u, s = null !== (o = null == e ? void 0 : e.packets) && void 0 !== o ? o : 0;
        return (null !== (i = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== i ? i : 0) + (null !== (a = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== a ? a : 0) + (null !== (u = null == e ? void 0 : null === (r = e.transmitted) || void 0 === r ? void 0 : r.packets) && void 0 !== u ? u : 0) + s
    }

    function s(e) {
        var t, n = {};
        for (var r in e) {
            ;
            n[r] = null != (t = e[r]) ? {
                last: Math.round(1e3 * t.last),
                mean: Math.round(1e3 * t.mean),
                p75: Math.round(1e3 * t.p75),
                p95: Math.round(1e3 * t.p95),
                p99: Math.round(1e3 * t.p99),
                max: Math.round(1e3 * t.max)
            } : null
        }
        return n
    }

    function l(e, t) {
        var n, o, i, s, l, c, f, d, _, E, p, m, y, I, h = e.substreams.find(function(e) {
            return !e.isRTX && !e.isFlexFEC
        });
        if (null != h) {
            var O = e.substreams.reduce(function(e, t) {
                    return e + a(t.rtpStats)
                }, 0),
                T = e.substreams.reduce(function(e, t) {
                    return e + u(t.rtpStats)
                }, 0);
            return {
                type: "video",
                ssrc: h.ssrc,
                sinkWant: (0, r.formatSinkWantStat)(t, h.ssrc, !0),
                sinkWantAsInt: (0, r.formatSinkWantAsInt)(t, h.ssrc),
                codec: {
                    id: e.codecPayloadType,
                    name: e.codecName
                },
                keyFrameInterval: e.keyFrameInterval,
                bytesSent: O,
                packetsSent: T,
                packetsLost: null !== (d = null === (n = h.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== d ? d : 0,
                fractionLost: null !== (_ = null === (o = h.rtcpStats) || void 0 === o ? void 0 : o.fractionLost) && void 0 !== _ ? _ : 0,
                bitrate: e.mediaBitrate,
                bitrateTarget: e.targetMediaBitrate,
                encoderImplementationName: e.encoderImplementationName,
                encodeUsage: e.encodeUsage,
                averageEncodeTime: e.avgEncodeTime,
                resolution: {
                    height: h.height,
                    width: h.width
                },
                framesSent: h.frameCounts.keyFrames + h.frameCounts.deltaFrames,
                keyFramesEncoded: h.frameCounts.keyFrames,
                framesEncoded: e.framesEncoded,
                frameRateInput: e.inputFrameRate,
                frameRateEncode: e.encodeFrameRate,
                firCount: null !== (E = null === (i = h.rtcpStats) || void 0 === i ? void 0 : i.firPackets) && void 0 !== E ? E : 0,
                nackCount: null !== (p = null === (s = h.rtcpStats) || void 0 === s ? void 0 : s.nackPackets) && void 0 !== p ? p : 0,
                pliCount: null !== (m = null === (l = h.rtcpStats) || void 0 === l ? void 0 : l.pliPackets) && void 0 !== m ? m : 0,
                qpSum: e.qpSum,
                bandwidthLimitedResolution: e.bwLimitedResolution,
                framesDroppedRateLimiter: e.framesDroppedRateLimiter,
                framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
                framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
                cpuLimitedResolution: e.cpuLimitedResolution,
                encoderQualityVmaf: null !== (y = null === (c = h.encoderQualityStats) || void 0 === c ? void 0 : c.imageQualityVmaf_v061) && void 0 !== y ? y : void 0,
                encoderQualityPsnr: null !== (I = null === (f = h.encoderQualityStats) || void 0 === f ? void 0 : f.imageQualityWebrtcPsnrDb) && void 0 !== I ? I : void 0,
                filter: e.filter,
                passthroughCount: e.passthroughCount,
                encryptSuccessCount: e.encryptSuccessCount,
                encryptFailureCount: e.encryptFailureCount,
                encryptDuration: e.encryptDuration,
                encryptAttempts: e.encryptAttempts,
                encryptMaxAttempts: e.encryptMaxAttempts
            }
        }
    }

    function c(e, t, n, i) {
        var l, c, f = a(e.rtpStats),
            d = u(e.rtpStats);
        return o({
            type: "video",
            ssrc: e.ssrc,
            sinkWant: (0, r.formatSinkWantStat)(t, e.ssrc, !0),
            sinkWantAsInt: (0, r.formatSinkWantAsInt)(t, e.ssrc),
            sinkWantLocal: (0, r.formatSinkWantStat)(n, e.ssrc, !0),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName
            },
            bytesReceived: f,
            packetsReceived: d,
            packetsLost: null !== (l = e.rtpStats.packetsLost) && void 0 !== l ? l : e.rtcpStats.packetsLost,
            fractionLost: e.rtcpStats.fractionLost,
            bitrate: e.totalBitrate,
            jitterBuffer: e.jitterBuffer,
            currentDelay: e.currentDelay,
            targetDelay: e.targetDelay,
            minPlayoutDelay: e.minPlayoutDelay,
            renderDelay: e.renderDelay,
            averageDecodeTime: e.decode,
            resolution: {
                height: e.height,
                width: e.width
            },
            decoderImplementationName: e.decoderImplementationName,
            framesDecoded: e.framesDecoded,
            framesDropped: e.framesDropped,
            framesDecodeErrors: e.framesDecodeErrors,
            framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
            networkFramesDropped: null !== (c = e.networkFramesDropped) && void 0 !== c ? c : 0,
            keyFramesDecoded: e.frameCounts.keyFrames,
            frameRateDecode: e.decodeFrameRate,
            frameRateNetwork: e.networkFrameRate,
            frameRateRender: e.renderFrameRate,
            firCount: e.rtcpStats.firPackets,
            nackCount: e.rtcpStats.nackPackets,
            pliCount: e.rtcpStats.pliPackets,
            qpSum: e.qpSum,
            freezeCount: e.freezeCount,
            pauseCount: e.pauseCount,
            totalFreezesDuration: e.totalFreezesDuration,
            totalPausesDuration: e.totalPausesDuration,
            totalFramesDuration: e.totalFramesDuration,
            sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
            passthroughCount: e.passthroughCount,
            decryptSuccessCount: e.decryptSuccessCount,
            decryptFailureCount: e.decryptFailureCount,
            decryptDuration: e.decryptDuration,
            decryptAttempts: e.decryptAttempts
        }, null != i ? s({
            videoJitterBuffer: i.videoJitterBuffer,
            videoJitterDelay: i.videoJitterDelay,
            videoJitterTarget: i.videoJitterTarget
        }) : {})
    }

    function f(e, t, n, i) {
        var u, f, d, _, E, p = null,
            m = null,
            y = "string" == typeof t ? JSON.parse(t) : t,
            I = [];
        if (null != y.outbound) {
            var h = y.outbound,
                O = h.audio,
                T = h.video,
                S = h.videos;
            if (null != O) m = (null != m ? m : 0) + O.bytesSent, I.push({
                type: "audio",
                ssrc: O.ssrc,
                sinkWant: (0, r.formatSinkWantStat)(n, O.ssrc, !1),
                sinkWantAsInt: (0, r.formatSinkWantAsInt)(n, O.ssrc),
                codec: {
                    id: O.codecPayloadType,
                    name: O.codecName
                },
                bytesSent: O.bytesSent,
                packetsSent: O.packetsSent,
                packetsLost: Math.max(0, O.packetsLost),
                fractionLost: 100 * O.fractionLost,
                audioLevel: O.audioLevel / 32768,
                audioDetected: O.speaking,
                framesCaptured: O.framesCaptured,
                framesRendered: O.framesRendered,
                noiseCancellerProcessTime: O.noiseCancellerProcessTime,
                voiceActivityDetectorProcessTime: O.voiceActivityDetectorProcessTime,
                passthroughCount: O.passthroughCount,
                encryptSuccessCount: O.encryptSuccessCount,
                encryptFailureCount: O.encryptFailureCount,
                encryptDuration: O.encryptDuration,
                encryptAttempts: O.encryptAttempts,
                encryptMaxAttempts: O.encryptMaxAttempts
            });
            if (null != S) S.forEach(function(e) {
                var t = l(e, n);
                null != t && (m = (null != m ? m : 0) + t.bytesSent, I.push(t))
            });
            else if (null != T) {
                var v = l(T, n);
                null != v && (m = (null != m ? m : 0) + v.bytesSent, I.push(v))
            }
        }
        var g = {};
        null != y.inbound && y.inbound.forEach(function(e) {
            var t = e.id,
                u = e.audio,
                l = e.video,
                f = e.videos,
                d = e.playout;
            if (g[t] = [], null != u) p = (null != p ? p : 0) + u.bytesReceived, g[t].push(o({
                type: "audio",
                ssrc: u.ssrc,
                sinkWant: (0, r.formatSinkWantStat)(n, u.ssrc, !1),
                sinkWantAsInt: (0, r.formatSinkWantAsInt)(n, u.ssrc),
                codec: {
                    id: u.codecPayloadType,
                    name: u.codecName
                },
                bytesReceived: u.bytesReceived,
                packetsReceived: u.packetsReceived,
                packetsLost: u.packetsLost,
                fractionLost: 100 * u.fractionLost,
                fecPacketsReceived: u.fecPacketsReceived,
                fecPacketsDiscarded: u.fecPacketsDiscarded,
                audioLevel: u.audioLevel / 32768,
                audioDetected: u.speaking,
                jitter: u.jitter,
                jitterBuffer: u.jitterBuffer,
                jitterBufferPreferred: u.jitterBufferPreferred,
                decodingCNG: u.decodingCNG,
                decodingMutedOutput: u.decodingMutedOutput,
                decodingNormal: u.decodingNormal,
                decodingPLC: u.decodingPLC,
                decodingPLCCNG: u.decodingPLCCNG,
                accelerateRate: 100 * u.accelerateRate,
                expandRate: 100 * u.expandRate,
                preemptiveExpandRate: 100 * u.preemptiveExpandRate,
                speechExpandRate: 100 * u.speechExpandRate,
                secondaryDecodedRate: 100 * u.secondaryDecodedRate,
                opSilence: u.opSilence,
                opNormal: u.opNormal,
                opMerge: u.opMerge,
                opExpand: u.opExpand,
                opAccelerate: u.opAccelerate,
                opPreemptiveExpand: u.opPreemptiveExpand,
                opCNG: u.opCNG,
                delayEstimate: u.delayEstimate,
                passthroughCount: u.passthroughCount,
                decryptSuccessCount: u.decryptSuccessCount,
                decryptFailureCount: u.decryptFailureCount,
                decryptDuration: u.decryptDuration,
                decryptAttempts: u.decryptAttempts
            }, null != d ? s({
                audioJitterBuffer: d.audioJitterBuffer,
                audioJitterDelay: d.audioJitterDelay,
                audioJitterTarget: d.audioJitterTarget,
                audioPlayoutUnderruns: d.audioPlayoutUnderruns,
                relativeReceptionDelay: d.relativeReceptionDelay,
                relativePlayoutDelay: d.relativePlayoutDelay
            }) : {}));
            if (null != f) f.forEach(function(e) {
                var r = c(e, n, i, d);
                if (null != r) {
                    var o = a(e.rtpStats);
                    p = (null != p ? p : 0) + o, g[t].push(r)
                }
            });
            else if (null != l) {
                var _ = c(l, n, i, d);
                if (null != _) {
                    var E = a(l.rtpStats);
                    p = (null != p ? p : 0) + E, g[t].push(_)
                }
            }
        });
        var A = y.transport,
            b = y.clips,
            N = {};
        null != A && (N.availableOutgoingBitrate = A.sendBandwidth, N.ping = A.rtt, N.decryptionFailures = A.decryptionFailures, null != A.routingFailures && (N.routingFailures = A.routingFailures), N.localAddress = A.localAddress, N.pacerDelay = A.pacerDelay, null != A.receiverReports && (N.receiverReports = A.receiverReports), N.receiverBitrateEstimate = A.receiverBitrateEstimate, N.outboundBitrateEstimate = A.outboundBitrateEstimate, N.inboundBitrateEstimate = null !== (u = A.inboundBitrateEstimate) && void 0 !== u ? u : 0, N.packetsReceived = A.packetsReceived, N.packetsSent = A.packetsSent, null != A.secureFramesProtocolVersion && (N.secureFramesProtocolVersion = A.secureFramesProtocolVersion)), ((null == A ? void 0 : A.bytesReceived) != null || null != p && !Number.isNaN(p)) && (N.bytesReceived = null !== (d = null !== (f = null == A ? void 0 : A.bytesReceived) && void 0 !== f ? f : p) && void 0 !== d ? d : void 0), ((null == A ? void 0 : A.bytesSent) != null || null != m && !Number.isNaN(m)) && (N.bytesSent = null !== (E = null !== (_ = null == A ? void 0 : A.bytesSent) && void 0 !== _ ? _ : m) && void 0 !== E ? E : void 0);
        var R = y.screenshare,
            C = y.camera;
        return {
            mediaEngineConnectionId: e,
            transport: N,
            screenshare: R,
            camera: null != C ? {
                capturedFramesDropped: C.capturedFramesDropped,
                capturedFramesCount: C.capturedFramesCount,
                capturedFramesMean: C.capturedFramesMean,
                capturedFramesStdev: C.capturedFramesStdev
            } : null,
            clips: b,
            rtp: {
                inbound: g,
                outbound: I
            }
        }
    }
}