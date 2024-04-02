function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VIDEO_QUALITY_MODES_TO_OVERWRITES: function() {
            return a
        },
        VideoQuality: function() {
            return l
        },
        VideoQualityManager: function() {
            return u
        }
    }), n("411104");
    var i = n("966146"),
        r = n("65154");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let a = Object.freeze({
        [r.VideoQualityMode.AUTO]: {},
        [r.VideoQualityMode.FULL]: {
            encode: {
                width: 1280,
                height: 720
            }
        }
    });
    class o {
        constructor(e) {
            if (s(this, "capture", void 0), s(this, "encode", void 0), s(this, "bitrateMin", void 0), s(this, "bitrateMax", void 0), s(this, "bitrateTarget", void 0), s(this, "localWant", void 0), null == e.capture && null == e.encode) throw Error("Invalid arguments.");
            this.capture = null == e.capture ? void 0 : new l(e.capture), this.encode = null == e.encode ? void 0 : new l(e.encode), this.bitrateMin = e.bitrateMin, this.bitrateMax = e.bitrateMax, this.bitrateTarget = e.bitrateTarget, this.localWant = e.localWant
        }
    }
    class l {
        static equals(e, t) {
            return null == e && null == t || null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate
        }
        static extend(e, t) {
            var n, i, r;
            return null == e ? t : null == t ? e : {
                width: null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width,
                height: null !== (i = null == t ? void 0 : t.height) && void 0 !== i ? i : null == e ? void 0 : e.height,
                framerate: null !== (r = null == t ? void 0 : t.framerate) && void 0 !== r ? r : null == e ? void 0 : e.framerate
            }
        }
        constructor(e) {
            s(this, "width", void 0), s(this, "height", void 0), s(this, "framerate", void 0), s(this, "pixelCount", void 0), this.width = e.width, this.height = e.height, this.framerate = e.framerate, this.pixelCount = e.width * e.height
        }
    }
    class u {
        getQuality(e) {
            var t, n, i;
            let r = this.isStreamContext ? this.getDesktopQuality() : this.getVideoQuality(this.connection.getLocalWant(e));
            return new o({
                encode: l.extend(r.encode, this.qualityOverwrite.encode),
                capture: l.extend(r.capture, this.qualityOverwrite.capture),
                bitrateMin: null !== (t = this.qualityOverwrite.bitrateMin) && void 0 !== t ? t : r.bitrateMin,
                bitrateMax: null !== (n = this.qualityOverwrite.bitrateMax) && void 0 !== n ? n : r.bitrateMax,
                bitrateTarget: null !== (i = this.qualityOverwrite.bitrateTarget) && void 0 !== i ? i : r.bitrateTarget,
                localWant: r.localWant
            })
        }
        applyQualityConstraints(e, t) {
            let n = this.getQuality(t);
            return null != n.capture && (e.encodingVideoWidth = n.capture.width, e.encodingVideoHeight = n.capture.height, e.encodingVideoFrameRate = n.capture.framerate, e.captureVideoFrameRate = n.capture.framerate), null != n.encode && (e.remoteSinkWantsMaxFramerate = n.encode.framerate, e.remoteSinkWantsPixelCount = n.encode.pixelCount), null != n.bitrateTarget ? e.encodingVideoBitRate = n.bitrateTarget : e.encodingVideoBitRate = n.bitrateMax, e.encodingVideoMinBitRate = n.bitrateMin, e.encodingVideoMaxBitRate = n.bitrateMax, null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)), {
                quality: n,
                constraints: e
            }
        }
        setQuality(e) {
            this.qualityOverwrite.capture = e.capture, this.qualityOverwrite.encode = e.encode, this.qualityOverwrite.bitrateMin = e.bitrateMin, this.qualityOverwrite.bitrateMax = e.bitrateMax, this.qualityOverwrite.bitrateTarget = e.bitrateTarget
        }
        getVideoQuality(e) {
            let t = this.ladder.getResolution(e),
                n = this.options.videoBitrate.min * t.budgetPortion,
                i = this.options.videoBitrate.max * t.budgetPortion,
                r = this.isMuted ? t.mutedFramerate : t.framerate;
            return new o({
                encode: {
                    ...t,
                    framerate: r
                },
                capture: {
                    width: this.options.videoCapture.width,
                    height: this.options.videoCapture.height,
                    framerate: this.options.videoCapture.framerate
                },
                bitrateMin: n,
                bitrateMax: Math.max(i, this.options.videoBitrateFloor),
                localWant: e
            })
        }
        getDesktopQuality() {
            return new o({
                capture: {
                    width: 1280,
                    height: 720,
                    framerate: r.VIDEO_QUALITY_FRAMERATE
                },
                bitrateMin: this.options.desktopBitrate.min,
                bitrateMax: this.options.desktopBitrate.max,
                bitrateTarget: this.options.desktopBitrate.target
            })
        }
        constructor(e, t, n = r.defaultVideoQualityOptions) {
            s(this, "contextType", void 0), s(this, "connection", void 0), s(this, "options", void 0), s(this, "isMuted", void 0), s(this, "qualityOverwrite", void 0), s(this, "isStreamContext", void 0), s(this, "ladder", void 0), this.contextType = e, this.connection = t, this.options = n, this.isMuted = !1, this.qualityOverwrite = {}, this.isStreamContext = this.contextType === r.MediaEngineContextTypes.STREAM, this.ladder = new i.MediaSinkWantsLadder(n)
        }
    }
}