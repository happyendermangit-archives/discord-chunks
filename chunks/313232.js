function(e, t, n) {
    "use strict";
    var i, r;

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        WebRTCStatsCalculator: function() {
            return a
        }
    }), n("47120");
    class a {
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
                s = e[t.ssrc];
            return null == s && (s = new l(n, i, r), e[t.ssrc] = s), s
        }
        getInboundBytesRecevierCalculator(e) {
            return a.getCalculatorOrCreate(this.inboundVideoBitrate, e, "bytesReceived", "timestamp", 3)
        }
        getInboundFrameDecodeRateCalculator(e) {
            return a.getCalculatorOrCreate(this.inboundDecodeFps, e, "framesDecoded", "timestamp", 5)
        }
        getOutboundBytesSentCalculator(e) {
            return a.getCalculatorOrCreate(this.outboundVideoBitrate, e, "bytesSent", "timestamp", 3)
        }
        getOutboundEncodeRateCalculator(e) {
            return a.getCalculatorOrCreate(this.outboundEncodeFps, e, "framesEncoded", "timestamp", 5)
        }
        constructor() {
            s(this, "inboundVideoBitrate", {}), s(this, "inboundDecodeFps", {}), s(this, "outboundVideoBitrate", {}), s(this, "outboundEncodeFps", {})
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
            let s = t[this.samplesMetricKey],
                a = e[this.samplesMetricKey];
            if ("number" != typeof s || "number" != typeof a) return;
            let o = (r - i) / (a - s) * this.multiplier;
            return this.round ? Math.round(o) : o
        }
        constructor(e, t, n = 0) {
            for (let l in s(this, "accumulativeMetricKey", void 0), s(this, "samplesMetricKey", void 0), s(this, "previous", void 0), s(this, "multiplier", void 0), s(this, "round", void 0), this.accumulativeMetricKey = e, this.samplesMetricKey = t, this.multiplier = 1, this.round = !1, i) {
                var r, a;
                let e = Number(l);
                !isNaN(e) && (n & e) != 0 && l in o && (this.multiplier *= null !== (a = null === (r = o[l]) || void 0 === r ? void 0 : r.multiplier) && void 0 !== a ? a : 1)
            }
            this.round = (4 & n) != 0
        }
    }
}