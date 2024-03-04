function(e, t, n) {
    "use strict";
    var i, s;
    n.r(t), n.d(t, {
        WebRTCStatsCalculator: function() {
            return r
        }
    }), n("222007");
    class r {
        update(e) {
            for (let t in e.rtp.inbound) {
                let n = e.rtp.inbound[t];
                for (let e of n)
                    if ("video" === e.type) {
                        let t = this.getInboundBytesRecevierCalculator(e),
                            n = this.getInboundFrameDecodeRateCalculator(e);
                        e.bitrate = t.calculate(e), e.frameRateDecode = n.calculate(e)
                    }
            }
            for (let t of e.rtp.outbound)
                if ("video" === t.type) {
                    let e = this.getOutboundBytesSentCalculator(t),
                        n = this.getOutboundEncodeRateCalculator(t);
                    t.bitrate = e.calculate(t), t.frameRateEncode = n.calculate(t)
                }
        }
        static getCalculatorOrCreate(e, t, n, i) {
            let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                r = e[t.ssrc];
            return null == r && (r = new o(n, i, s), e[t.ssrc] = r), r
        }
        getInboundBytesRecevierCalculator(e) {
            return r.getCalculatorOrCreate(this.inboundVideoBitrate, e, "bytesReceived", "timestamp", 3)
        }
        getInboundFrameDecodeRateCalculator(e) {
            return r.getCalculatorOrCreate(this.inboundDecodeFps, e, "framesDecoded", "timestamp", 5)
        }
        getOutboundBytesSentCalculator(e) {
            return r.getCalculatorOrCreate(this.outboundVideoBitrate, e, "bytesSent", "timestamp", 3)
        }
        getOutboundEncodeRateCalculator(e) {
            return r.getCalculatorOrCreate(this.outboundEncodeFps, e, "framesEncoded", "timestamp", 5)
        }
        constructor() {
            this.inboundVideoBitrate = {}, this.inboundDecodeFps = {}, this.outboundVideoBitrate = {}, this.outboundEncodeFps = {}
        }
    }(s = i || (i = {}))[s.NONE = 0] = "NONE", s[s.MILLISECONDS_FROM_SECONDS = 1] = "MILLISECONDS_FROM_SECONDS", s[s.BYTES_TO_BITS = 2] = "BYTES_TO_BITS", s[s.ROUND = 4] = "ROUND";
    let a = {
        0: {
            multiplier: 1
        },
        1: {
            postfix: "_in_ms",
            multiplier: 1e3
        },
        2: {
            bitrate: !0,
            postfix: "",
            multiplier: 8
        }
    };
    class o {
        calculate(e) {
            let t = this.previous;
            if (this.previous = e, null == t) return;
            let n = e.timestamp - t.timestamp;
            if (n <= 0 || "number" != typeof n) return;
            let i = t[this.accumulativeMetricKey],
                s = e[this.accumulativeMetricKey];
            if ("number" != typeof i || "number" != typeof s) return;
            let r = t[this.samplesMetricKey],
                a = e[this.samplesMetricKey];
            if ("number" != typeof r || "number" != typeof a) return;
            let o = (s - i) / (a - r) * this.multiplier;
            return this.round ? Math.round(o) : o
        }
        constructor(e, t, n = 0) {
            for (let o in this.accumulativeMetricKey = e, this.samplesMetricKey = t, this.multiplier = 1, this.round = !1, i) {
                var s, r;
                let e = Number(o);
                !isNaN(e) && (n & e) != 0 && o in a && (this.multiplier *= null !== (r = null === (s = a[o]) || void 0 === s ? void 0 : s.multiplier) && void 0 !== r ? r : 1)
            }
            this.round = (4 & n) != 0
        }
    }
}