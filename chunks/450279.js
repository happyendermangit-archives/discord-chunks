function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120"), n("653041");
    var i = n("878604");

    function r(e) {
        return {
            id: e.payloadType,
            name: e.mimeType.split("/").slice(1)[0]
        }
    }

    function a(e, t, n, a) {
        var s, o, l;
        let u = {},
            d = {},
            _ = [],
            c = [];
        for (let t of e.values()) switch (t.type) {
            case "candidate-pair":
                u[t.id] = t;
                break;
            case "codec":
                d[t.id] = t;
                break;
            case "inbound-rtp":
                _.push(t);
                break;
            case "outbound-rtp":
                c.push(t)
        }
        let E = Object.values(u).find(e => "succeeded" === e.state);
        if (void 0 === E) return null;
        let I = [];
        for (let e of c) {
            let t = d[e.codecId];
            if (null == t) continue;
            let a = {
                type: e.kind,
                ssrc: e.ssrc,
                timestamp: e.timestamp,
                sinkWant: (0, i.formatSinkWantStat)(n, e.ssrc, "video" === e.kind),
                sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, e.ssrc),
                codec: r(t),
                bytesSent: e.bytesSent,
                packetsSent: e.packetsSent
            };
            if ("audio" === e.kind) I.push({
                ...a,
                type: "audio"
            });
            else if ("video" === e.kind) {
                ;
                let t = null !== e.frameWidth ? {
                    width: e.frameWidth,
                    height: e.frameHeight
                } : void 0;
                I.push({
                    ...a,
                    framesEncoded: e.framesEncoded,
                    keyFramesEncoded: e.keyFramesEncoded,
                    firCount: e.firCount,
                    nackCount: e.nackCount,
                    pliCount: e.pliCount,
                    bitrateTarget: e.targetBitrate,
                    qpSum: e.qpSum,
                    averageEncodeTime: null == e.framesEncoded || null === (l = e.totalEncodeTime) || 0 === l ? void 0 : (1e3 * e.totalEncodeTime / e.framesEncoded).toFixed(1),
                    resolution: t,
                    framesSent: e.framesSent,
                    frameRateInput: e.framesPerSecond,
                    type: "video"
                })
            }
        }
        let T = {};
        for (let e of _) {
            let s = d[e.codecId];
            if (null == s) continue;
            let o = t(e.ssrc);
            if (null == o) continue;
            let l = {
                type: e.kind,
                ssrc: e.ssrc,
                timestamp: e.timestamp,
                sinkWant: (0, i.formatSinkWantStat)(n, e.ssrc, "video" === e.kind),
                sinkWantAsInt: (0, i.formatSinkWantAsInt)(n, e.ssrc),
                sinkWantLocal: (0, i.formatSinkWantStat)(a, e.ssrc, "video" === e.kind),
                codec: r(s),
                bytesReceived: e.bytesReceived,
                packetsReceived: e.packetsReceived,
                packetsLost: e.packetsLost
            };
            if ("audio" === e.kind) {
                let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round(1e3 * e.jitterBufferDelay / e.jitterBufferEmittedCount) : 0;
                null == T[o] && (T[o] = []), T[o].push({
                    ...l,
                    audioLevel: e.audioLevel,
                    jitter: 1e3 * e.jitter,
                    jitterBuffer: t
                })
            } else if ("video" === e.kind) {
                null == T[o] && (T[o] = []);
                let t = null !== e.frameWidth ? {
                    width: e.frameWidth,
                    height: e.frameHeight
                } : void 0;
                T[o].push({
                    ...l,
                    resolution: t,
                    framesDecoded: e.framesDecoded,
                    keyFramesDecoded: e.keyFramesDecoded,
                    framesDropped: e.framesDropped,
                    framesReceived: e.framesReceived,
                    frameRateDecode: e.framesPerSecond,
                    averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? void 0 : (1e3 * e.totalDecodeTime / e.framesDecoded).toFixed(1),
                    firCount: e.firCount,
                    nackCount: e.nackCount,
                    pliCount: e.pliCount,
                    qpSum: e.qpSum,
                    decoderImplementationName: "WebRTC"
                })
            }
        }
        let f = (null !== (s = E.currentRoundTripTime) && void 0 !== s ? s : 0) * 1e3;
        return {
            transport: {
                availableOutgoingBitrate: null !== (o = E.availableOutgoingBitrate) && void 0 !== o ? o : 0,
                bytesReceived: E.bytesReceived,
                bytesSent: E.bytesSent,
                ping: f
            },
            rtp: {
                inbound: T,
                outbound: I
            }
        }
    }
}