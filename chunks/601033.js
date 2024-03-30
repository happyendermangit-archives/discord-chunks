function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("259020"),
        o = n("384433"),
        i = n("439386");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function f(e) {
        return null
    }

    function d(e) {
        return null
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(m, e);
        var t, n, r, _, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var u = l(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function m() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), e = p.apply(this, arguments), s(a(e), "Video", f), s(a(e), "Camera", d), e
        }
        return r = m, _ = [{
            key: "destroy",
            value: function() {
                this.emit(o.MediaEngineEvent.Destroy), this.removeAllListeners()
            }
        }, {
            key: "interact",
            value: function() {}
        }, {
            key: "supported",
            value: function() {
                return __OVERLAY__
            }
        }, {
            key: "supports",
            value: function(e) {
                if (e === i.Features.AUTO_ENABLE) return __OVERLAY__;
                return !1
            }
        }, {
            key: "connect",
            value: function(e, t, n) {
                throw Error("NOT_IMPLEMENTED")
            }
        }, {
            key: "eachConnection",
            value: function() {}
        }, {
            key: "enable",
            value: function() {
                return Promise.resolve()
            }
        }, {
            key: "setInputVolume",
            value: function(e) {}
        }, {
            key: "setOutputVolume",
            value: function(e) {}
        }, {
            key: "getAudioInputDevices",
            value: function() {
                return Promise.resolve([])
            }
        }, {
            key: "setAudioInputDevice",
            value: function(e) {}
        }, {
            key: "getAudioOutputDevices",
            value: function() {
                return Promise.resolve([])
            }
        }, {
            key: "setAudioOutputDevice",
            value: function(e) {}
        }, {
            key: "getVideoInputDevices",
            value: function() {
                return Promise.resolve([])
            }
        }, {
            key: "setVideoInputDevice",
            value: function(e) {}
        }, {
            key: "getSupportedVideoCodecs",
            value: function(e) {
                e([])
            }
        }, {
            key: "getCodecCapabilities",
            value: function(e) {
                e("")
            }
        }, {
            key: "getCodecSurvey",
            value: function() {
                return Promise.reject(Error("getCodecSurvey is not implemented for MediaEngineDummy"))
            }
        }, {
            key: "getAudioSubsystem",
            value: function() {
                return i.AudioSubsystems.STANDARD
            }
        }, {
            key: "getAudioLayer",
            value: function() {
                return ""
            }
        }, {
            key: "setGoLiveSource",
            value: function(e, t) {}
        }, {
            key: "setClipsSource",
            value: function(e) {}
        }, {
            key: "setClipsQualitySettings",
            value: function(e, t, n) {
                return !1
            }
        }, {
            key: "setDesktopSource",
            value: function(e) {
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.MediaEngineContextTypes.DEFAULT
            }
        }, {
            key: "setSoundshareSource",
            value: function(e, t, n) {}
        }, {
            key: "getDesktopSource",
            value: function() {
                return Promise.reject(Error("NO_STREAM"))
            }
        }, {
            key: "getDesktopSources",
            value: function() {
                return Promise.reject(Error("NO_STREAM"))
            }
        }, {
            key: "getScreenPreviews",
            value: function(e, t) {
                return Promise.reject(Error("UNSUPPORTED"))
            }
        }, {
            key: "getWindowPreviews",
            value: function(e, t) {
                return Promise.reject(Error("UNSUPPORTED"))
            }
        }, {
            key: "setClipBufferLength",
            value: function(e) {}
        }, {
            key: "saveClip",
            value: function(e, t) {
                return Promise.reject(Error("UNSUPPORTED"))
            }
        }, {
            key: "saveClipForUser",
            value: function(e, t, n) {
                return Promise.reject(Error("UNSUPPORTED"))
            }
        }, {
            key: "updateClipMetadata",
            value: function(e, t) {
                return Promise.reject(Error("UNSUPPORTED"))
            }
        }, {
            key: "exportClip",
            value: function(e, t) {
                return Promise.reject(Error("UNSUPPORTED"))
            }
        }, {
            key: "setAudioSubsystem",
            value: function(e) {}
        }, {
            key: "getDebugLogging",
            value: function() {
                return !1
            }
        }, {
            key: "setDebugLogging",
            value: function(e) {}
        }, {
            key: "writeAudioDebugState",
            value: function() {
                return Promise.reject(Error("Audio debug state is not supported."))
            }
        }, {
            key: "setExperimentalAdm",
            value: function(e) {}
        }, {
            key: "setLoopback",
            value: function(e, t) {}
        }, {
            key: "getLoopback",
            value: function() {
                return !1
            }
        }, {
            key: "setH264Enabled",
            value: function(e) {}
        }, {
            key: "setAv1Enabled",
            value: function(e) {}
        }, {
            key: "setH265Enabled",
            value: function(e) {}
        }, {
            key: "setExperimentFlag",
            value: function(e, t) {}
        }, {
            key: "startAecDump",
            value: function() {}
        }, {
            key: "stopAecDump",
            value: function() {}
        }, {
            key: "setAecDump",
            value: function(e) {}
        }, {
            key: "createReplayConnection",
            value: function(e, t) {
                throw Error("Connection replay is not supported.")
            }
        }, {
            key: "setUseDirectVideo",
            value: function(e) {}
        }, {
            key: "setMaxSyncDelayOverride",
            value: function(e) {}
        }, {
            key: "rankRtcRegions",
            value: function(e) {
                return Promise.reject(Error("RTC region latency test is not supported."))
            }
        }, {
            key: "applyMediaFilterSettings",
            value: function(e) {
                return Promise.resolve()
            }
        }, {
            key: "startLocalAudioRecording",
            value: function() {
                return Promise.reject(Error("startLocalAudioRecording is not supported."))
            }
        }, {
            key: "stopLocalAudioRecording",
            value: function(e) {}
        }, {
            key: "speedTester",
            value: function(e, t) {
                throw Error("NOT_IMPLEMENTED")
            }
        }, {
            key: "setHasFullbandPerformance",
            value: function(e) {}
        }, {
            key: "getSupportedSecureFramesProtocolVersion",
            value: function() {
                return 0
            }
        }, {
            key: "getSupportedBandwidthEstimationExperiments",
            value: function(e) {
                e([])
            }
        }], u(r.prototype, _), E && u(r, E), m
    }(r.default)
}