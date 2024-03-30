function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
    }

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
            return c
        }
    });
    var u, s, l, c = function() {
        function e() {
            r(this, e), a(this, "inboundVideoBitrate", {}), a(this, "inboundDecodeFps", {}), a(this, "outboundVideoBitrate", {}), a(this, "outboundEncodeFps", {})
        }
        return i(e, [{
            key: "update",
            value: function(e) {
                for (var t in e.rtp.inbound) {
                    var n = e.rtp.inbound[t],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            if ("video" === s.type) {
                                var l = this.getInboundBytesRecevierCalculator(s),
                                    c = this.getInboundFrameDecodeRateCalculator(s);
                                s.bitrate = l.calculate(s), s.frameRateDecode = c.calculate(s)
                            }
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
                var f = !0,
                    d = !1,
                    _ = void 0;
                try {
                    for (var E, p = e.rtp.outbound[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) {
                        var m = E.value;
                        if ("video" === m.type) {
                            var y = this.getOutboundBytesSentCalculator(m),
                                I = this.getOutboundEncodeRateCalculator(m);
                            m.bitrate = y.calculate(m), m.frameRateEncode = I.calculate(m)
                        }
                    }
                } catch (e) {
                    d = !0, _ = e
                } finally {
                    try {
                        !f && null != p.return && p.return()
                    } finally {
                        if (d) throw _
                    }
                }
            }
        }, {
            key: "getInboundBytesRecevierCalculator",
            value: function(t) {
                return e.getCalculatorOrCreate(this.inboundVideoBitrate, t, "bytesReceived", "timestamp", 3)
            }
        }, {
            key: "getInboundFrameDecodeRateCalculator",
            value: function(t) {
                return e.getCalculatorOrCreate(this.inboundDecodeFps, t, "framesDecoded", "timestamp", 5)
            }
        }, {
            key: "getOutboundBytesSentCalculator",
            value: function(t) {
                return e.getCalculatorOrCreate(this.outboundVideoBitrate, t, "bytesSent", "timestamp", 3)
            }
        }, {
            key: "getOutboundEncodeRateCalculator",
            value: function(t) {
                return e.getCalculatorOrCreate(this.outboundEncodeFps, t, "framesEncoded", "timestamp", 5)
            }
        }], [{
            key: "getCalculatorOrCreate",
            value: function(e, t, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    i = e[t.ssrc];
                return null == i && (i = new d(n, r, o), e[t.ssrc] = i), i
            }
        }]), e
    }();
    (u = s || (s = {}))[u.NONE = 0] = "NONE", u[u.MILLISECONDS_FROM_SECONDS = 1] = "MILLISECONDS_FROM_SECONDS", u[u.BYTES_TO_BITS = 2] = "BYTES_TO_BITS", u[u.ROUND = 4] = "ROUND";
    var f = (a(l = {}, 0, {
            multiplier: 1
        }), a(l, 1, {
            postfix: "_in_ms",
            multiplier: 1e3
        }), a(l, 2, {
            bitrate: !0,
            postfix: "",
            multiplier: 8
        }), l),
        d = function() {
            function e(t, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                for (var i in r(this, e), a(this, "accumulativeMetricKey", void 0), a(this, "samplesMetricKey", void 0), a(this, "previous", void 0), a(this, "multiplier", void 0), a(this, "round", void 0), this.accumulativeMetricKey = t, this.samplesMetricKey = n, this.multiplier = 1, this.round = !1, s) {
                    var u, l, c = Number(i);
                    !isNaN(c) && (o & c) != 0 && i in f && (this.multiplier *= null !== (l = null === (u = f[i]) || void 0 === u ? void 0 : u.multiplier) && void 0 !== l ? l : 1)
                }
                this.round = (4 & o) != 0
            }
            return i(e, [{
                key: "calculate",
                value: function(e) {
                    var t = this.previous;
                    if (this.previous = e, null == t) return;
                    var n = e.timestamp - t.timestamp;
                    if (n <= 0 || "number" != typeof n) return;
                    var r = t[this.accumulativeMetricKey],
                        o = e[this.accumulativeMetricKey];
                    if ("number" == typeof r && "number" == typeof o) {
                        var i = t[this.samplesMetricKey],
                            a = e[this.samplesMetricKey];
                        if ("number" == typeof i && "number" == typeof a) {
                            var u = (o - r) / (a - i) * this.multiplier;
                            return this.round ? Math.round(u) : u
                        }
                    }
                }
            }]), e
        }()
}