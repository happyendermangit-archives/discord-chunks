function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("808653"), n("424973");
    var i = n("823302");

    function s(e) {
        return e / 32768
    }

    function r(e) {
        var t, n, i, s, r, a, o, l, u, d, c, f, _, E, h, g, m, p, S, v, T;
        let I = (null !== (d = null == e ? void 0 : e.headerBytes) && void 0 !== d ? d : 0) + (null !== (c = null == e ? void 0 : e.payloadBytes) && void 0 !== c ? c : 0) + (null !== (f = null == e ? void 0 : e.paddingBytes) && void 0 !== f ? f : 0),
            C = (null !== (_ = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== _ ? _ : 0) + (null !== (E = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== E ? E : 0) + (null !== (h = null == e ? void 0 : null === (i = e.fec) || void 0 === i ? void 0 : i.paddingBytes) && void 0 !== h ? h : 0) + (null !== (g = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.headerBytes) && void 0 !== g ? g : 0) + (null !== (m = null == e ? void 0 : null === (r = e.retransmitted) || void 0 === r ? void 0 : r.payloadBytes) && void 0 !== m ? m : 0) + (null !== (p = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.paddingBytes) && void 0 !== p ? p : 0) + (null !== (S = null == e ? void 0 : null === (o = e.transmitted) || void 0 === o ? void 0 : o.headerBytes) && void 0 !== S ? S : 0) + (null !== (v = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== v ? v : 0) + (null !== (T = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== T ? T : 0);
        return C + I
    }

    function a(e) {
        var t, n, i, s, r, a, o;
        let l = null !== (s = null == e ? void 0 : e.packets) && void 0 !== s ? s : 0,
            u = (null !== (r = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== r ? r : 0) + (null !== (a = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== a ? a : 0) + (null !== (o = null == e ? void 0 : null === (i = e.transmitted) || void 0 === i ? void 0 : i.packets) && void 0 !== o ? o : 0);
        return u + l
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
        var n, s, o, l, u, d, c, f, _, E, h, g, m, p;
        let S = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
        if (null == S) return;
        let v = e.substreams.reduce((e, t) => e + r(t.rtpStats), 0),
            T = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0);
        return {
            type: "video",
            ssrc: S.ssrc,
            sinkWant: (0, i.formatSinkWantStat)(t, S.ssrc, !0),
            sinkWantAsInt: (0, i.formatSinkWantAsInt)(t, S.ssrc),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName
            },
            keyFrameInterval: e.keyFrameInterval,
            bytesSent: v,
            packetsSent: T,
            packetsLost: null !== (f = null === (n = S.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== f ? f : 0,
            fractionLost: null !== (_ = null === (s = S.rtcpStats) || void 0 === s ? void 0 : s.fractionLost) && void 0 !== _ ? _ : 0,
            bitrate: e.mediaBitrate,
            bitrateTarget: e.targetMediaBitrate,
            encoderImplementationName: e.encoderImplementationName,
            encodeUsage: e.encodeUsage,
            averageEncodeTime: e.avgEncodeTime,
            resolution: {
                height: S.height,
                width: S.width
            },
            framesSent: S.frameCounts.keyFrames + S.frameCounts.deltaFrames,
            keyFramesEncoded: S.frameCounts.keyFrames,
            framesEncoded: e.framesEncoded,
            frameRateInput: e.inputFrameRate,
            frameRateEncode: e.encodeFrameRate,
            firCount: null !== (E = null === (o = S.rtcpStats) || void 0 === o ? void 0 : o.firPackets) && void 0 !== E ? E : 0,
            nackCount: null !== (h = null === (l = S.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== h ? h : 0,
            pliCount: null !== (g = null === (u = S.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== g ? g : 0,
            qpSum: e.qpSum,
            bandwidthLimitedResolution: e.bwLimitedResolution,
            framesDroppedRateLimiter: e.framesDroppedRateLimiter,
            framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
            framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
            cpuLimitedResolution: e.cpuLimitedResolution,
            encoderQualityVmaf: null !== (m = null === (d = S.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityVmaf_v061) && void 0 !== m ? m : void 0,
            encoderQualityPsnr: null !== (p = null === (c = S.encoderQualityStats) || void 0 === c ? void 0 : c.imageQualityWebrtcPsnrDb) && void 0 !== p ? p : void 0,
            filter: e.filter,
            passthroughCount: e.passthroughCount,
            encryptSuccessCount: e.encryptSuccessCount,
            encryptFailureCount: e.encryptFailureCount,
            encryptDuration: e.encryptDuration,
            encryptAttempts: e.encryptAttempts,
            encryptMaxAttempts: e.encryptMaxAttempts
        }
    }

    function u(e, t, n, s) {
        var l, u;
        let d = r(e.rtpStats),
            c = a(e.rtpStats);
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
            packetsReceived: c,
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
            ...null != s ? o({
                videoJitterBuffer: s.videoJitterBuffer,
                videoJitterDelay: s.videoJitterDelay,
                videoJitterTarget: s.videoJitterTarget
            }) : {}
        }
    }

    function d(e, t, n, s) {
        var a, d, c, f, _;
        let E = null,
            h = null,
            g = "string" == typeof t ? JSON.parse(t) : t,
            m = [];
        if (null != g.outbound) {
            let {
                audio: e,
                video: t,
                videos: s
            } = g.outbound;
            if (null != e) h = (null != h ? h : 0) + e.bytesSent, m.push({
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
                noiseCancellerProcessTime: e.noiseCancellerProcessTime,
                voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
                passthroughCount: e.passthroughCount,
                encryptSuccessCount: e.encryptSuccessCount,
                encryptFailureCount: e.encryptFailureCount,
                encryptDuration: e.encryptDuration,
                encryptAttempts: e.encryptAttempts,
                encryptMaxAttempts: e.encryptMaxAttempts
            });
            if (null != s) s.forEach(e => {
                let t = l(e, n);
                null != t && (h = (null != h ? h : 0) + t.bytesSent, m.push(t))
            });
            else if (null != t) {
                let e = l(t, n);
                null != e && (h = (null != h ? h : 0) + e.bytesSent, m.push(e))
            }
        }
        let p = {};
        null != g.inbound && g.inbound.forEach(e => {
            let {
                id: t,
                audio: a,
                video: l,
                videos: d,
                playout: c
            } = e;
            if (p[t] = [], null != a) E = (null != E ? E : 0) + a.bytesReceived, p[t].push({
                type: "audio",
                ssrc: a.ssrc,
                sinkWant: (0, i.formatSinkWantStat)(n, a.ssrc, !1),
                sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, a.ssrc),
                codec: {
                    id: a.codecPayloadType,
                    name: a.codecName
                },
                bytesReceived: a.bytesReceived,
                packetsReceived: a.packetsReceived,
                packetsLost: a.packetsLost,
                fractionLost: 100 * a.fractionLost,
                fecPacketsReceived: a.fecPacketsReceived,
                fecPacketsDiscarded: a.fecPacketsDiscarded,
                audioLevel: a.audioLevel / 32768,
                audioDetected: a.speaking,
                jitter: a.jitter,
                jitterBuffer: a.jitterBuffer,
                jitterBufferPreferred: a.jitterBufferPreferred,
                decodingCNG: a.decodingCNG,
                decodingMutedOutput: a.decodingMutedOutput,
                decodingNormal: a.decodingNormal,
                decodingPLC: a.decodingPLC,
                decodingPLCCNG: a.decodingPLCCNG,
                accelerateRate: 100 * a.accelerateRate,
                expandRate: 100 * a.expandRate,
                preemptiveExpandRate: 100 * a.preemptiveExpandRate,
                speechExpandRate: 100 * a.speechExpandRate,
                secondaryDecodedRate: 100 * a.secondaryDecodedRate,
                opSilence: a.opSilence,
                opNormal: a.opNormal,
                opMerge: a.opMerge,
                opExpand: a.opExpand,
                opAccelerate: a.opAccelerate,
                opPreemptiveExpand: a.opPreemptiveExpand,
                opCNG: a.opCNG,
                delayEstimate: a.delayEstimate,
                passthroughCount: a.passthroughCount,
                decryptSuccessCount: a.decryptSuccessCount,
                decryptFailureCount: a.decryptFailureCount,
                decryptDuration: a.decryptDuration,
                decryptAttempts: a.decryptAttempts,
                ...null != c ? o({
                    audioJitterBuffer: c.audioJitterBuffer,
                    audioJitterDelay: c.audioJitterDelay,
                    audioJitterTarget: c.audioJitterTarget,
                    audioPlayoutUnderruns: c.audioPlayoutUnderruns,
                    relativeReceptionDelay: c.relativeReceptionDelay,
                    relativePlayoutDelay: c.relativePlayoutDelay
                }) : {}
            });
            if (null != d) d.forEach(e => {
                let i = u(e, n, s, c);
                if (null != i) {
                    let n = r(e.rtpStats);
                    E = (null != E ? E : 0) + n, p[t].push(i)
                }
            });
            else if (null != l) {
                let e = u(l, n, s, c);
                if (null != e) {
                    let n = r(l.rtpStats);
                    E = (null != E ? E : 0) + n, p[t].push(e)
                }
            }
        });
        let {
            transport: S,
            clips: v
        } = g, T = {};
        null != S && (T.availableOutgoingBitrate = S.sendBandwidth, T.ping = S.rtt, T.decryptionFailures = S.decryptionFailures, null != S.routingFailures && (T.routingFailures = S.routingFailures), T.localAddress = S.localAddress, T.pacerDelay = S.pacerDelay, null != S.receiverReports && (T.receiverReports = S.receiverReports), T.receiverBitrateEstimate = S.receiverBitrateEstimate, T.outboundBitrateEstimate = S.outboundBitrateEstimate, T.inboundBitrateEstimate = null !== (a = S.inboundBitrateEstimate) && void 0 !== a ? a : 0, T.packetsReceived = S.packetsReceived, T.packetsSent = S.packetsSent, null != S.secureFramesProtocolVersion && (T.secureFramesProtocolVersion = S.secureFramesProtocolVersion)), ((null == S ? void 0 : S.bytesReceived) != null || null != E && !Number.isNaN(E)) && (T.bytesReceived = null !== (c = null !== (d = null == S ? void 0 : S.bytesReceived) && void 0 !== d ? d : E) && void 0 !== c ? c : void 0), ((null == S ? void 0 : S.bytesSent) != null || null != h && !Number.isNaN(h)) && (T.bytesSent = null !== (_ = null !== (f = null == S ? void 0 : S.bytesSent) && void 0 !== f ? f : h) && void 0 !== _ ? _ : void 0);
        let {
            screenshare: I,
            camera: C
        } = g, A = null != C ? {
            capturedFramesDropped: C.capturedFramesDropped,
            capturedFramesCount: C.capturedFramesCount,
            capturedFramesMean: C.capturedFramesMean,
            capturedFramesStdev: C.capturedFramesStdev
        } : null;
        return {
            mediaEngineConnectionId: e,
            transport: T,
            screenshare: I,
            camera: A,
            clips: v,
            rtp: {
                inbound: p,
                outbound: m
            }
        }
    }
}