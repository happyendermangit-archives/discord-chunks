function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
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

    function i(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function a(e) {
        return {
            id: e.payloadType,
            name: e.mimeType.split("/").slice(1)[0]
        }
    }

    function u(e, t, n, u) {
        var s, l, c = {},
            f = {},
            d = [],
            _ = [],
            E = !0,
            p = !1,
            m = void 0;
        try {
            for (var y, I = e.values()[Symbol.iterator](); !(E = (y = I.next()).done); E = !0) {
                var h = y.value;
                switch (h.type) {
                    case "candidate-pair":
                        c[h.id] = h;
                        break;
                    case "codec":
                        f[h.id] = h;
                        break;
                    case "inbound-rtp":
                        d.push(h);
                        break;
                    case "outbound-rtp":
                        _.push(h)
                }
            }
        } catch (e) {
            p = !0, m = e
        } finally {
            try {
                !E && null != I.return && I.return()
            } finally {
                if (p) throw m
            }
        }
        var O = Object.values(c).find(function(e) {
            return "succeeded" === e.state
        });
        if (void 0 === O) return null;
        var T = [],
            S = !0,
            v = !1,
            g = void 0;
        try {
            for (var A, b = _[Symbol.iterator](); !(S = (A = b.next()).done); S = !0) {
                var N = A.value,
                    R = f[N.codecId];
                if (null != R) {
                    var C = {
                        type: N.kind,
                        ssrc: N.ssrc,
                        timestamp: N.timestamp,
                        sinkWant: (0, r.formatSinkWantStat)(n, N.ssrc, "video" === N.kind),
                        sinkWantAsInt: (0, r.formatSinkWantAsInt)(n, N.ssrc),
                        codec: a(R),
                        bytesSent: N.bytesSent,
                        packetsSent: N.packetsSent
                    };
                    if ("audio" === N.kind) T.push(i(o({}, C), {
                        type: "audio"
                    }));
                    else if ("video" === N.kind) {
                        var P, D = null !== N.frameWidth ? {
                            width: N.frameWidth,
                            height: N.frameHeight
                        } : void 0;
                        T.push(i(o({}, C), {
                            framesEncoded: N.framesEncoded,
                            keyFramesEncoded: N.keyFramesEncoded,
                            firCount: N.firCount,
                            nackCount: N.nackCount,
                            pliCount: N.pliCount,
                            bitrateTarget: N.targetBitrate,
                            qpSum: N.qpSum,
                            averageEncodeTime: null == N.framesEncoded || (P = N.totalEncodeTime, null === P || 0 === P) ? void 0 : (1e3 * N.totalEncodeTime / N.framesEncoded).toFixed(1),
                            resolution: D,
                            framesSent: N.framesSent,
                            frameRateInput: N.framesPerSecond,
                            type: "video"
                        }))
                    }
                }
            }
        } catch (e) {
            v = !0, g = e
        } finally {
            try {
                !S && null != b.return && b.return()
            } finally {
                if (v) throw g
            }
        }
        var L = {},
            M = !0,
            U = !1,
            w = void 0;
        try {
            for (var k, G = d[Symbol.iterator](); !(M = (k = G.next()).done); M = !0) {
                var B = k.value,
                    j = f[B.codecId];
                if (null != j) {
                    var F = t(B.ssrc);
                    if (null != F) {
                        var V = {
                            type: B.kind,
                            ssrc: B.ssrc,
                            timestamp: B.timestamp,
                            sinkWant: (0, r.formatSinkWantStat)(n, B.ssrc, "video" === B.kind),
                            sinkWantAsInt: (0, r.formatSinkWantAsInt)(n, B.ssrc),
                            sinkWantLocal: (0, r.formatSinkWantStat)(u, B.ssrc, "video" === B.kind),
                            codec: a(j),
                            bytesReceived: B.bytesReceived,
                            packetsReceived: B.packetsReceived,
                            packetsLost: B.packetsLost
                        };
                        if ("audio" === B.kind) {
                            var H = void 0 !== B.jitterBufferDelay && void 0 !== B.jitterBufferEmittedCount ? Math.round(1e3 * B.jitterBufferDelay / B.jitterBufferEmittedCount) : 0;
                            null == L[F] && (L[F] = []), L[F].push(i(o({}, V), {
                                audioLevel: B.audioLevel,
                                jitter: 1e3 * B.jitter,
                                jitterBuffer: H
                            }))
                        } else if ("video" === B.kind) {
                            null == L[F] && (L[F] = []);
                            var x = null !== B.frameWidth ? {
                                width: B.frameWidth,
                                height: B.frameHeight
                            } : void 0;
                            L[F].push(i(o({}, V), {
                                resolution: x,
                                framesDecoded: B.framesDecoded,
                                keyFramesDecoded: B.keyFramesDecoded,
                                framesDropped: B.framesDropped,
                                framesReceived: B.framesReceived,
                                frameRateDecode: B.framesPerSecond,
                                averageDecodeTime: null == B.framesDecoded || null == B.totalDecodeTime ? void 0 : (1e3 * B.totalDecodeTime / B.framesDecoded).toFixed(1),
                                firCount: B.firCount,
                                nackCount: B.nackCount,
                                pliCount: B.pliCount,
                                qpSum: B.qpSum,
                                decoderImplementationName: "WebRTC"
                            }))
                        }
                    }
                }
            }
        } catch (e) {
            U = !0, w = e
        } finally {
            try {
                !M && null != G.return && G.return()
            } finally {
                if (U) throw w
            }
        }
        var Y = (null !== (s = O.currentRoundTripTime) && void 0 !== s ? s : 0) * 1e3;
        return {
            transport: {
                availableOutgoingBitrate: null !== (l = O.availableOutgoingBitrate) && void 0 !== l ? l : 0,
                bytesReceived: O.bytesReceived,
                bytesSent: O.bytesSent,
                ping: Y
            },
            rtp: {
                inbound: L,
                outbound: T
            }
        }
    }
}