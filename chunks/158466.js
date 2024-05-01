function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("724458"), n("653041");
    var i = n("878604");

    function r(e) {
        return e / 32768
    }

    function a(e) {
        var t, n, i, r, a, s, o, l, u, d, _, c, E, I, T, f, S, h, A, m, N;
        let p = (null !== (d = null == e ? void 0 : e.headerBytes) && void 0 !== d ? d : 0) + (null !== (_ = null == e ? void 0 : e.payloadBytes) && void 0 !== _ ? _ : 0) + (null !== (c = null == e ? void 0 : e.paddingBytes) && void 0 !== c ? c : 0);
        return (null !== (E = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== E ? E : 0) + (null !== (I = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== I ? I : 0) + (null !== (T = null == e ? void 0 : null === (i = e.fec) || void 0 === i ? void 0 : i.paddingBytes) && void 0 !== T ? T : 0) + (null !== (f = null == e ? void 0 : null === (r = e.retransmitted) || void 0 === r ? void 0 : r.headerBytes) && void 0 !== f ? f : 0) + (null !== (S = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.payloadBytes) && void 0 !== S ? S : 0) + (null !== (h = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.paddingBytes) && void 0 !== h ? h : 0) + (null !== (A = null == e ? void 0 : null === (o = e.transmitted) || void 0 === o ? void 0 : o.headerBytes) && void 0 !== A ? A : 0) + (null !== (m = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== m ? m : 0) + (null !== (N = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== N ? N : 0) + p
    }

    function s(e) {
        var t, n, i, r, a, s, o;
        let l = null !== (r = null == e ? void 0 : e.packets) && void 0 !== r ? r : 0;
        return (null !== (a = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== a ? a : 0) + (null !== (s = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== s ? s : 0) + (null !== (o = null == e ? void 0 : null === (i = e.transmitted) || void 0 === i ? void 0 : i.packets) && void 0 !== o ? o : 0) + l
    }

    function o(e) {
        let t = {};
        for (let i in e) {
            var n;
            t[i] = null != (n = e[i]) ? {
                last: Math.round(1e3 * n.last),
                mean: Math.round(1e3 * n.mean),
                p75: Math.round(1e3 * n.p75),
                p95: Math.round(1e3 * n.p95),
                p99: Math.round(1e3 * n.p99),
                max: Math.round(1e3 * n.max)
            } : null
        }
        return t
    }

    function l(e, t) {
        var n, r, o, l, u, d, _, c, E, I, T, f, S, h, A, m, N, p, O, R, C, g, L, v;
        let D = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
        if (null == D) return;
        let M = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0),
            y = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0);
        return {
            type: "video",
            ssrc: D.ssrc,
            sinkWant: (0, i.formatSinkWantStat)(t, D.ssrc, !0),
            sinkWantAsInt: (0, i.formatSinkWantAsInt)(t, D.ssrc),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName
            },
            keyFrameInterval: e.keyFrameInterval,
            bytesSent: M,
            packetsSent: y,
            packetsLost: null !== (S = null === (n = D.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== S ? S : 0,
            fractionLost: null !== (h = null === (r = D.rtcpStats) || void 0 === r ? void 0 : r.fractionLost) && void 0 !== h ? h : 0,
            bitrate: e.mediaBitrate,
            bitrateTarget: e.targetMediaBitrate,
            encoderImplementationName: e.encoderImplementationName,
            encodeUsage: e.encodeUsage,
            averageEncodeTime: e.avgEncodeTime,
            resolution: {
                height: D.height,
                width: D.width
            },
            framesSent: D.frameCounts.keyFrames + D.frameCounts.deltaFrames,
            keyFramesEncoded: D.frameCounts.keyFrames,
            framesEncoded: e.framesEncoded,
            frameRateInput: e.inputFrameRate,
            frameRateEncode: e.encodeFrameRate,
            firCount: null !== (A = null === (o = D.rtcpStats) || void 0 === o ? void 0 : o.firPackets) && void 0 !== A ? A : 0,
            nackCount: null !== (m = null === (l = D.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== m ? m : 0,
            pliCount: null !== (N = null === (u = D.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== N ? N : 0,
            qpSum: e.qpSum,
            bandwidthLimitedResolution: e.bwLimitedResolution,
            framesDroppedRateLimiter: e.framesDroppedRateLimiter,
            framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
            framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
            cpuLimitedResolution: e.cpuLimitedResolution,
            encoderQualityVmaf: null !== (p = null === (d = D.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityVmaf_v061) && void 0 !== p ? p : void 0,
            encoderQualityPsnr: null !== (O = null === (_ = D.encoderQualityStats) || void 0 === _ ? void 0 : _.imageQualityWebrtcPsnrDb) && void 0 !== O ? O : void 0,
            qualityDecodeErrors: null !== (R = null === (c = D.encoderQualityStats) || void 0 === c ? void 0 : c.decodeErrors) && void 0 !== R ? R : void 0,
            qualityDecoderReboots: null !== (C = null === (E = D.encoderQualityStats) || void 0 === E ? void 0 : E.decoderReboots) && void 0 !== C ? C : void 0,
            qualityScoreErrors: null !== (g = null === (I = D.encoderQualityStats) || void 0 === I ? void 0 : I.scoreErrors) && void 0 !== g ? g : void 0,
            qualityFrameDrops: null !== (L = null === (T = D.encoderQualityStats) || void 0 === T ? void 0 : T.frameDrops) && void 0 !== L ? L : void 0,
            qualitySizeMismatches: null !== (v = null === (f = D.encoderQualityStats) || void 0 === f ? void 0 : f.sizeMismatches) && void 0 !== v ? v : void 0,
            filter: e.filter,
            passthroughCount: e.passthroughCount,
            encryptSuccessCount: e.encryptSuccessCount,
            encryptFailureCount: e.encryptFailureCount,
            encryptDuration: e.encryptDuration,
            encryptAttempts: e.encryptAttempts,
            encryptMaxAttempts: e.encryptMaxAttempts
        }
    }

    function u(e, t, n, r) {
        var l, u;
        let d = a(e.rtpStats),
            _ = s(e.rtpStats);
        return {
            type: "video",
            ssrc: e.ssrc,
            sinkWant: (0, i.formatSinkWantStat)(t, e.ssrc, !0),
            sinkWantAsInt: (0, i.formatSinkWantAsInt)(t, e.ssrc),
            sinkWantLocal: (0, i.formatSinkWantStat)(n, e.ssrc, !0),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName
            },
            bytesReceived: d,
            packetsReceived: _,
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
            networkFramesDropped: null !== (u = e.networkFramesDropped) && void 0 !== u ? u : 0,
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
            decryptAttempts: e.decryptAttempts,
            ...null != r ? o({
                videoJitterBuffer: r.videoJitterBuffer,
                videoJitterDelay: r.videoJitterDelay,
                videoJitterTarget: r.videoJitterTarget
            }) : {}
        }
    }

    function d(e, t, n, r) {
        var s, d, _, c, E;
        let I = null,
            T = null,
            f = "string" == typeof t ? JSON.parse(t) : t,
            S = [];
        if (null != f.outbound) {
            let {
                audio: e,
                video: t,
                videos: r
            } = f.outbound;
            if (null != e) T = (null != T ? T : 0) + e.bytesSent, S.push({
                type: "audio",
                ssrc: e.ssrc,
                sinkWant: (0, i.formatSinkWantStat)(n, e.ssrc, !1),
                sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, e.ssrc),
                codec: {
                    id: e.codecPayloadType,
                    name: e.codecName
                },
                bytesSent: e.bytesSent,
                packetsSent: e.packetsSent,
                packetsLost: Math.max(0, e.packetsLost),
                fractionLost: 100 * e.fractionLost,
                audioLevel: e.audioLevel / 32768,
                audioDetected: e.speaking,
                framesCaptured: e.framesCaptured,
                framesRendered: e.framesRendered,
                noiseCancellerFrames: e.noiseCancellerFrames,
                noiseCancellerProcessTime: e.noiseCancellerProcessTime,
                voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
                passthroughCount: e.passthroughCount,
                encryptSuccessCount: e.encryptSuccessCount,
                encryptFailureCount: e.encryptFailureCount,
                encryptDuration: e.encryptDuration,
                encryptAttempts: e.encryptAttempts,
                encryptMaxAttempts: e.encryptMaxAttempts
            });
            if (null != r) r.forEach(e => {
                let t = l(e, n);
                null != t && (T = (null != T ? T : 0) + t.bytesSent, S.push(t))
            });
            else if (null != t) {
                let e = l(t, n);
                null != e && (T = (null != T ? T : 0) + e.bytesSent, S.push(e))
            }
        }
        let h = {};
        null != f.inbound && f.inbound.forEach(e => {
            let {
                id: t,
                audio: s,
                video: l,
                videos: d,
                playout: _
            } = e;
            if (h[t] = [], null != s) I = (null != I ? I : 0) + s.bytesReceived, h[t].push({
                type: "audio",
                ssrc: s.ssrc,
                sinkWant: (0, i.formatSinkWantStat)(n, s.ssrc, !1),
                sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, s.ssrc),
                codec: {
                    id: s.codecPayloadType,
                    name: s.codecName
                },
                bytesReceived: s.bytesReceived,
                packetsReceived: s.packetsReceived,
                packetsLost: s.packetsLost,
                fractionLost: 100 * s.fractionLost,
                fecPacketsReceived: s.fecPacketsReceived,
                fecPacketsDiscarded: s.fecPacketsDiscarded,
                audioLevel: s.audioLevel / 32768,
                audioDetected: s.speaking,
                jitter: s.jitter,
                jitterBuffer: s.jitterBuffer,
                jitterBufferPreferred: s.jitterBufferPreferred,
                decodingCNG: s.decodingCNG,
                decodingMutedOutput: s.decodingMutedOutput,
                decodingNormal: s.decodingNormal,
                decodingPLC: s.decodingPLC,
                decodingPLCCNG: s.decodingPLCCNG,
                accelerateRate: 100 * s.accelerateRate,
                expandRate: 100 * s.expandRate,
                preemptiveExpandRate: 100 * s.preemptiveExpandRate,
                speechExpandRate: 100 * s.speechExpandRate,
                secondaryDecodedRate: 100 * s.secondaryDecodedRate,
                opSilence: s.opSilence,
                opNormal: s.opNormal,
                opMerge: s.opMerge,
                opExpand: s.opExpand,
                opAccelerate: s.opAccelerate,
                opPreemptiveExpand: s.opPreemptiveExpand,
                opCNG: s.opCNG,
                delayEstimate: s.delayEstimate,
                passthroughCount: s.passthroughCount,
                decryptSuccessCount: s.decryptSuccessCount,
                decryptFailureCount: s.decryptFailureCount,
                decryptDuration: s.decryptDuration,
                decryptAttempts: s.decryptAttempts,
                ...null != _ ? o({
                    audioJitterBuffer: _.audioJitterBuffer,
                    audioJitterDelay: _.audioJitterDelay,
                    audioJitterTarget: _.audioJitterTarget,
                    audioPlayoutUnderruns: _.audioPlayoutUnderruns,
                    relativeReceptionDelay: _.relativeReceptionDelay,
                    relativePlayoutDelay: _.relativePlayoutDelay
                }) : {}
            });
            if (null != d) d.forEach(e => {
                let i = u(e, n, r, _);
                if (null != i) {
                    let n = a(e.rtpStats);
                    I = (null != I ? I : 0) + n, h[t].push(i)
                }
            });
            else if (null != l) {
                let e = u(l, n, r, _);
                if (null != e) {
                    let n = a(l.rtpStats);
                    I = (null != I ? I : 0) + n, h[t].push(e)
                }
            }
        });
        let {
            transport: A,
            clips: m
        } = f, N = {};
        null != A && (N.availableOutgoingBitrate = A.sendBandwidth, N.ping = A.rtt, N.decryptionFailures = A.decryptionFailures, null != A.routingFailures && (N.routingFailures = A.routingFailures), N.localAddress = A.localAddress, N.pacerDelay = A.pacerDelay, null != A.receiverReports && (N.receiverReports = A.receiverReports), N.receiverBitrateEstimate = A.receiverBitrateEstimate, N.outboundBitrateEstimate = A.outboundBitrateEstimate, N.inboundBitrateEstimate = null !== (s = A.inboundBitrateEstimate) && void 0 !== s ? s : 0, N.packetsReceived = A.packetsReceived, N.packetsSent = A.packetsSent, null != A.secureFramesProtocolVersion && (N.secureFramesProtocolVersion = A.secureFramesProtocolVersion)), ((null == A ? void 0 : A.bytesReceived) != null || null != I && !Number.isNaN(I)) && (N.bytesReceived = null !== (_ = null !== (d = null == A ? void 0 : A.bytesReceived) && void 0 !== d ? d : I) && void 0 !== _ ? _ : void 0), ((null == A ? void 0 : A.bytesSent) != null || null != T && !Number.isNaN(T)) && (N.bytesSent = null !== (E = null !== (c = null == A ? void 0 : A.bytesSent) && void 0 !== c ? c : T) && void 0 !== E ? E : void 0);
        let {
            screenshare: p,
            camera: O
        } = f;
        return {
            mediaEngineConnectionId: e,
            transport: N,
            screenshare: p,
            camera: null != O ? {
                capturedFramesDropped: O.capturedFramesDropped,
                capturedFramesCount: O.capturedFramesCount,
                capturedFramesMean: O.capturedFramesMean,
                capturedFramesStdev: O.capturedFramesStdev
            } : null,
            clips: m,
            rtp: {
                inbound: h,
                outbound: S
            }
        }
    }
}