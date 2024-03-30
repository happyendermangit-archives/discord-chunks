function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VIDEO_QUALITY_MODES_TO_OVERWRITES: function() {
            return c
        },
        VideoQuality: function() {
            return d
        },
        VideoQualityManager: function() {
            return _
        }
    });
    var r, o = n("457908"),
        i = n("439386");

    function a(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = Object.freeze((l(r = {}, i.VideoQualityMode.AUTO, {}), l(r, i.VideoQualityMode.FULL, {
            encode: {
                width: 1280,
                height: 720
            }
        }), r)),
        f = function e(t) {
            if (a(this, e), l(this, "capture", void 0), l(this, "encode", void 0), l(this, "bitrateMin", void 0), l(this, "bitrateMax", void 0), l(this, "bitrateTarget", void 0), l(this, "localWant", void 0), null == t.capture && null == t.encode) throw Error("Invalid arguments.");
            this.capture = null == t.capture ? void 0 : new d(t.capture), this.encode = null == t.encode ? void 0 : new d(t.encode), this.bitrateMin = t.bitrateMin, this.bitrateMax = t.bitrateMax, this.bitrateTarget = t.bitrateTarget, this.localWant = t.localWant
        },
        d = function() {
            function e(t) {
                a(this, e), l(this, "width", void 0), l(this, "height", void 0), l(this, "framerate", void 0), l(this, "pixelCount", void 0), this.width = t.width, this.height = t.height, this.framerate = t.framerate, this.pixelCount = t.width * t.height
            }
            return s(e, null, [{
                key: "equals",
                value: function(e, t) {
                    return null == e && null == t || null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate
                }
            }, {
                key: "extend",
                value: function(e, t) {
                    var n, r, o;
                    return null == e ? t : null == t ? e : {
                        width: null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width,
                        height: null !== (r = null == t ? void 0 : t.height) && void 0 !== r ? r : null == e ? void 0 : e.height,
                        framerate: null !== (o = null == t ? void 0 : t.framerate) && void 0 !== o ? o : null == e ? void 0 : e.framerate
                    }
                }
            }]), e
        }(),
        _ = function() {
            function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.defaultVideoQualityOptions;
                a(this, e), l(this, "contextType", void 0), l(this, "connection", void 0), l(this, "options", void 0), l(this, "isMuted", void 0), l(this, "qualityOverwrite", void 0), l(this, "isStreamContext", void 0), l(this, "ladder", void 0), this.contextType = t, this.connection = n, this.options = r, this.isMuted = !1, this.qualityOverwrite = {}, this.isStreamContext = this.contextType === i.MediaEngineContextTypes.STREAM, this.ladder = new o.MediaSinkWantsLadder(r)
            }
            return s(e, [{
                key: "getQuality",
                value: function(e) {
                    var t, n, r, o = this.isStreamContext ? this.getDesktopQuality() : this.getVideoQuality(this.connection.getLocalWant(e));
                    return new f({
                        encode: d.extend(o.encode, this.qualityOverwrite.encode),
                        capture: d.extend(o.capture, this.qualityOverwrite.capture),
                        bitrateMin: null !== (t = this.qualityOverwrite.bitrateMin) && void 0 !== t ? t : o.bitrateMin,
                        bitrateMax: null !== (n = this.qualityOverwrite.bitrateMax) && void 0 !== n ? n : o.bitrateMax,
                        bitrateTarget: null !== (r = this.qualityOverwrite.bitrateTarget) && void 0 !== r ? r : o.bitrateTarget,
                        localWant: o.localWant
                    })
                }
            }, {
                key: "applyQualityConstraints",
                value: function(e, t) {
                    var n = this.getQuality(t);
                    return null != n.capture && (e.encodingVideoWidth = n.capture.width, e.encodingVideoHeight = n.capture.height, e.encodingVideoFrameRate = n.capture.framerate), null != n.encode && (e.remoteSinkWantsMaxFramerate = n.encode.framerate, e.remoteSinkWantsPixelCount = n.encode.pixelCount), null != n.bitrateTarget ? e.encodingVideoBitRate = n.bitrateTarget : e.encodingVideoBitRate = n.bitrateMax, e.encodingVideoMinBitRate = n.bitrateMin, e.encodingVideoMaxBitRate = n.bitrateMax, null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)), {
                        quality: n,
                        constraints: e
                    }
                }
            }, {
                key: "setQuality",
                value: function(e) {
                    this.qualityOverwrite.capture = e.capture, this.qualityOverwrite.encode = e.encode, this.qualityOverwrite.bitrateMin = e.bitrateMin, this.qualityOverwrite.bitrateMax = e.bitrateMax, this.qualityOverwrite.bitrateTarget = e.bitrateTarget
                }
            }, {
                key: "getVideoQuality",
                value: function(e) {
                    var t, n, r = this.ladder.getResolution(e),
                        o = this.options.videoBitrate.min * r.budgetPortion,
                        i = this.options.videoBitrate.max * r.budgetPortion,
                        a = this.isMuted ? r.mutedFramerate : r.framerate;
                    return new f({
                        encode: (t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    l(e, t, n[t])
                                })
                            }
                            return e
                        }({}, r), n = (n = {
                            framerate: a
                        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }), t),
                        capture: {
                            width: this.options.videoCapture.width,
                            height: this.options.videoCapture.height,
                            framerate: this.options.videoCapture.framerate
                        },
                        bitrateMin: o,
                        bitrateMax: Math.max(i, this.options.videoBitrateFloor),
                        localWant: e
                    })
                }
            }, {
                key: "getDesktopQuality",
                value: function() {
                    return new f({
                        capture: {
                            width: 1280,
                            height: 720,
                            framerate: i.VIDEO_QUALITY_FRAMERATE
                        },
                        bitrateMin: this.options.desktopBitrate.min,
                        bitrateMax: this.options.desktopBitrate.max,
                        bitrateTarget: this.options.desktopBitrate.target
                    })
                }
            }]), e
        }()
}