function(e, t, n) {
    "use strict";
    var i, r;

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        WebRTCStatsCalculator: function() {
            return s
        }
    }), n("47120");
    class s {
        update(e) {
            for (let t in e.rtp.inbound)
                for (let n of e.rtp.inbound[t])
                    if ("video" === n.type) {
                        let e = this.getInboundBytesRecevierCalculator(n),
                            t = this.getInboundFrameDecodeRateCalculator(n);
                        n.bitrate = e.calculate(n), n.frameRateDecode = t.calculate(n)
                    } for (let t of e.rtp.outbound)
                if ("video" === t.type) {
                    let e = this.getOutboundBytesSentCalculator(t),
                        n = this.getOutboundEncodeRateCalculator(t);
                    t.bitrate = e.calculate(t), t.frameRateEncode = n.calculate(t)
                }
        }
        static getCalculatorOrCreate(e, t, n, i) {
            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                a = e[t.ssrc];
            return null == a && (a = new l(n, i, r), e[t.ssrc] = a), a
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
            a(this, "inboundVideoBitrate", {}), a(this, "inboundDecodeFps", {}), a(this, "outboundVideoBitrate", {}), a(this, "outboundEncodeFps", {})
        }
    }(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.MILLISECONDS_FROM_SECONDS = 1] = "MILLISECONDS_FROM_SECONDS", r[r.BYTES_TO_BITS = 2] = "BYTES_TO_BITS", r[r.ROUND = 4] = "ROUND";
    let o = {
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
    class l {
        calculate(e) {
            let t = this.previous;
            if (this.previous = e, null == t) return;
            let n = e.timestamp - t.timestamp;
            if (n <= 0 || "number" != typeof n) return;
            let i = t[this.accumulativeMetricKey],
                r = e[this.accumulativeMetricKey];
            if ("number" != typeof i || "number" != typeof r) return;
            let a = t[this.samplesMetricKey],
                s = e[this.samplesMetricKey];
            if ("number" != typeof a || "number" != typeof s) return;
            let o = (r - i) / (s - a) * this.multiplier;
            return this.round ? Math.round(o) : o
        }
        constructor(e, t, n = 0) {
            for (let l in a(this, "accumulativeMetricKey", void 0), a(this, "samplesMetricKey", void 0), a(this, "previous", void 0), a(this, "multiplier", void 0), a(this, "round", void 0), this.accumulativeMetricKey = e, this.samplesMetricKey = t, this.multiplier = 1, this.round = !1, i) {
                var r, s;
                let e = Number(l);
                !isNaN(e) && (n & e) != 0 && l in o && (this.multiplier *= null !== (s = null === (r = o[l]) || void 0 === r ? void 0 : r.multiplier) && void 0 !== s ? s : 1)
            }
            this.round = (4 & n) != 0
        }
    }
}