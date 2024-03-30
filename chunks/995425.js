function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InputEvent: function() {
            return o
        },
        default: function() {
            return _
        }
    });
    var r, o, i = n("259020"),
        a = n("880803"),
        u = n("545578");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {})).Stream = "stream", r.Video = "video", r.Mute = "mute", r.VoiceActivity = "voiceactivity", r.DesktopSourceEnd = "desktopsourceend", r.Speaking = "speaking", r.AudioPermission = "audio-permission", r.VideoPermission = "video-permission", r.AddVideoTrack = "add-video-track";
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(E, e);
        var t, n, r, o, i, _ = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function E(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), c(s(t = _.call(this)), "audio", void 0), c(s(t), "video", new u.default), c(s(t), "desktop", null), c(s(t), "stream", void 0), c(s(t), "mergeStreams", function() {
                var e, n, r, o = new MediaStream;
                return null != t.desktop ? (null === (e = t.desktop.stream) || void 0 === e || e.getTracks().forEach(function(e) {
                    return o.addTrack(e)
                }), t.desktop.refreshSpeaking()) : (null === (n = t.audio.stream) || void 0 === n || n.getAudioTracks().forEach(function(e) {
                    return o.addTrack(e)
                }), null === (r = t.video.stream) || void 0 === r || r.getVideoTracks().forEach(function(e) {
                    return o.addTrack(e)
                })), t.stream = o, t.emit("stream", o), t.emit("video", t.getVideoStreamId()), o
            }), c(s(t), "handleVoiceActivity", function(e) {
                t.emit("voiceactivity", e)
            }), c(s(t), "handleDesktopSourceEnd", function() {
                t.emit("desktopsourceend")
            }), c(s(t), "handleSpeaking", function(e) {
                t.emit("speaking", e)
            }), c(s(t), "handleAudioPermission", function(e) {
                t.emit("audio-permission", e)
            }), c(s(t), "handleVideoPermission", function(e) {
                t.emit("video-permission", e)
            }), t.audio = new a.default(e), t.audio.addListener("voiceactivity", t.handleVoiceActivity), t.audio.addListener("speaking", t.handleSpeaking), t.audio.addListener("stream", t.mergeStreams), t.audio.addListener("permission", t.handleAudioPermission), t.video.addListener("stream", t.mergeStreams), t.video.addListener("permission", t.handleVideoPermission), t.video.addListener("add-video-track", function(e) {
                return t.emit("add-video-track", e)
            }), t
        }
        return r = E, o = [{
            key: "destroy",
            value: function() {
                this.removeAllListeners(), this.destroyStreams()
            }
        }, {
            key: "destroyStreams",
            value: function() {
                var e;
                this.audio.destroy(), this.video.destroy(), null === (e = this.desktop) || void 0 === e || e.destroy()
            }
        }, {
            key: "setDesktop",
            value: function(e) {
                this.destroyStreams(), null == e || e.addListener("desktopsourceend", this.handleDesktopSourceEnd), null == e || e.addListener("speaking", this.handleSpeaking), this.desktop = e, this.mergeStreams()
            }
        }, {
            key: "reset",
            value: function() {
                var e;
                this.audio.reset(), null === (e = this.desktop) || void 0 === e || e.reset()
            }
        }, {
            key: "getVideoStream",
            value: function() {
                return null != this.desktop ? this.desktop.stream : this.video.stream
            }
        }, {
            key: "getVideoStreamId",
            value: function() {
                return null != this.desktop ? this.desktop.getStreamId() : this.video.getStreamId()
            }
        }, {
            key: "enableAudioInput",
            value: function() {
                this.audio.enable()
            }
        }, {
            key: "setAudioMode",
            value: function(e, t) {
                this.audio.setMode(e, t)
            }
        }, {
            key: "setMute",
            value: function(e) {
                this.audio.mute = e, this.emit("mute", e)
            }
        }, {
            key: "setEchoCancellation",
            value: function(e) {
                this.audio.echoCancellation = e
            }
        }, {
            key: "setNoiseSuppression",
            value: function(e) {
                this.audio.noiseSuppression = e
            }
        }, {
            key: "setNoiseCancellation",
            value: function(e) {
                this.audio.noiseCancellation = e
            }
        }, {
            key: "setAutomaticGainControl",
            value: function(e) {
                this.audio.automaticGainControl = e
            }
        }, {
            key: "setPTTActive",
            value: function(e) {
                this.audio.setPTTActive(e)
            }
        }, {
            key: "setAudioSource",
            value: function(e) {
                this.audio.setSource(e)
            }
        }, {
            key: "setVideoSource",
            value: function(e) {
                this.video.setSource(e)
            }
        }, {
            key: "mute",
            value: function() {
                return this.audio.mute
            }
        }, {
            key: "resumeAudio",
            value: function() {
                this.audio.resume()
            }
        }, {
            key: "getAudioState",
            value: function() {
                return this.audio.state
            }
        }, {
            key: "hasDesktopSource",
            value: function() {
                return null != this.desktop
            }
        }], l(r.prototype, o), i && l(r, i), E
    }(i.default)
}