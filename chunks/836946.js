function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function() {
        var e, t, n;

        function i(e, t, n) {
            var r = this,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .1,
                u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "threshold", void 0), o(this, "currentVolume", 0), o(this, "analyser", void 0), o(this, "interval", void 0), o(this, "fftBins", void 0), o(this, "source", void 0), o(this, "speakingHistory", void 0), o(this, "speakingHistoryIndex", 0), o(this, "speakingCounter", 0), o(this, "silenceThreshold", void 0), o(this, "silentFrames", void 0), o(this, "onProcess", null);
            var s = e.createAnalyser();
            s.fftSize = 512, s.smoothingTimeConstant = a;
            var l = e.createMediaStreamSource(t);
            l.connect(s);
            for (var c = [], f = 0; f < u; f++) c.push(!1);
            var d = window.setInterval(function() {
                var e;
                r.update(), null === (e = r.onProcess) || void 0 === e || e.call(r, r.speaking, r.currentVolume)
            }, 20);
            this.threshold = n, this.analyser = s, this.interval = d, this.fftBins = new Float32Array(s.fftSize), this.source = l, this.speakingHistory = c, this.silenceThreshold = this.speakingHistory.length, this.silentFrames = this.silenceThreshold
        }
        return e = i, t = [{
            key: "stop",
            value: function() {
                this.source.disconnect(), clearInterval(this.interval), this.speakingCounter = 0
            }
        }, {
            key: "speaking",
            get: function() {
                return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold
            }
        }, {
            key: "update",
            value: function() {
                this.currentVolume = function(e, t) {
                    var n = -1 / 0;
                    e.getFloatFrequencyData(t);
                    for (var r = 4; r < t.length; r++) t[r] > n && t[r] < 0 && (n = t[r]);
                    return n
                }(this.analyser, this.fftBins), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
                var e = this.currentVolume > this.threshold;
                this.speakingHistory[this.speakingHistoryIndex] = e, e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? this.silentFrames = 0 : this.silentFrames++
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}