function(e, t, n) {
    "use strict";
    var i, r;
    n.r(t), n.d(t, {
        WebRTCStatsCalculator: function() {
            return s
        }
    }), n("222007");
    class s {
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
            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                s = e[t.ssrc];
            return null == s && (s = new o(n, i, r), e[t.ssrc] = s), s
        }
        getInboundBytesRecevierCalculator(e) {
            return s.getCalculatorOrCreate(this.inboundVideoBitrate, e, "bytesReceived", "timestamp", 3)
        }
        getInboundFrameDecodeRateCalculator(e) {
            return s.getCalculatorOrCreate(this.inboundDecodeFps, e, "framesDecoded", "timestamp", 5)
        }
        getOutboundBytesSentCalculator(e) {
            return s.getCalculatorOrCreate(this.outboundVideoBitrate, e, "bytesSent", "timestamp", 3)
        }
        getOutboundEncodeRateCalculator(e) {
            return s.getCalculatorOrCreate(this.outboundEncodeFps, e, "framesEncoded", "timestamp", 5)
        }
        constructor() {
            this.inboundVideoBitrate = {}, this.inboundDecodeFps = {}, this.outboundVideoBitrate = {}, this.outboundEncodeFps = {}
        }
    }(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.MILLISECONDS_FROM_SECONDS = 1] = "MILLISECONDS_FROM_SECONDS", r[r.BYTES_TO_BITS = 2] = "BYTES_TO_BITS", r[r.ROUND = 4] = "ROUND";
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
                r = e[this.accumulativeMetricKey];
            if ("number" != typeof i || "number" != typeof r) return;
            let s = t[this.samplesMetricKey],
                a = e[this.samplesMetricKey];
            if ("number" != typeof s || "number" != typeof a) return;
            let o = (r - i) / (a - s) * this.multiplier;
            return this.round ? Math.round(o) : o
        }
        constructor(e, t, n = 0) {
            for (let o in this.accumulativeMetricKey = e, this.samplesMetricKey = t, this.multiplier = 1, this.round = !1, i) {
                var r, s;
                let e = Number(o);
                !isNaN(e) && (n & e) != 0 && o in a && (this.multiplier *= null !== (s = null === (r = a[o]) || void 0 === r ? void 0 : r.multiplier) && void 0 !== s ? s : 1)
            }
            this.round = (4 & n) != 0
        }
    }
}