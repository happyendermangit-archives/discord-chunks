function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OutputEvent: function() {
            return o
        },
        default: function() {
            return m
        }
    });
    var r, o, i = n("188129"),
        a = n("259020"),
        u = n("796426"),
        s = n("278831"),
        l = n("439386");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = new i.Logger("Output");
    (r = o || (o = {})).InteractionRequired = "interactionrequired", r.Speaking = "speaking", r.Video = "video";
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(m, e);
        var t, n, r, o, i, a = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function m(e, t) {
            var n;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), d(c(n = a.call(this)), "id", void 0), d(c(n), "_speakingFlags", l.SpeakingFlags.NONE), d(c(n), "_mute", !1), d(c(n), "_volume", l.DEFAULT_VOLUME), d(c(n), "sinkId", null), d(c(n), "audioElement", null), d(c(n), "stream", new MediaStream), d(c(n), "videoStreamId", null), d(c(n), "levelNode", null), d(c(n), "streamSourceNode", null), d(c(n), "audioContext", void 0), n.id = e, n.audioContext = t, n
        }
        return r = m, o = [{
            key: "play",
            value: function() {
                var e;
                null === (e = this.audioElement) || void 0 === e || e.play()
            }
        }, {
            key: "destroy",
            value: function() {
                var e;
                null === (e = this.audioElement) || void 0 === e || e.pause(), null != this.videoStreamId && (0, s.unregisterVideoStream)(this.videoStreamId), null != this.streamSourceNode && (this.streamSourceNode.disconnect(), this.streamSourceNode = null), null != this.levelNode && (this.levelNode.disconnect(), this.levelNode.port.postMessage("close"), this.levelNode = null), this.setSpeakingFlags(l.SpeakingFlags.NONE), this.removeAllListeners()
            }
        }, {
            key: "addTrack",
            value: function(e) {
                var t = this;
                if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
                if (this.stream.addTrack(e), null == this.audioElement) {
                    var n = document.createElement("audio");
                    n.srcObject = this.stream;
                    var r = n.play();
                    null != r && r.catch(function() {
                        return t.emit("interactionrequired", !0)
                    }), this.audioElement = n, this.updateAudioElement()
                }
                if (null == this.levelNode && this.stream.getAudioTracks().length > 0) {
                    this.streamSourceNode = this.audioContext.createMediaStreamSource(this.stream);
                    try {
                        this.levelNode = new AudioWorkletNode(this.audioContext, "level-processor"), this.levelNode.port.onmessage = function(e) {
                            t.emit("speaking", e.data)
                        }, null != this.streamSourceNode && this.streamSourceNode.connect(this.levelNode)
                    } catch (e) {
                        p.warn("Output#Failed to setup speaking indicator: ".concat(e))
                    }
                }
                return "video" === e.kind && (null != this.videoStreamId && (0, s.unregisterVideoStream)(this.videoStreamId), this.stream.getVideoTracks().forEach(function(n) {
                    e !== n && (n.discordIsTearingDown = !0, t.stream.removeTrack(n))
                }), this.videoStreamId = (0, s.registerVideoStream)(this.stream), this.emit("video", this.videoStreamId)), "audio" === e.kind && this.stream.getAudioTracks().forEach(function(n) {
                    e !== n && (n.discordIsTearingDown = !0, t.stream.removeTrack(n))
                }), this.stream.getTracks().length
            }
        }, {
            key: "removeTrack",
            value: function(e) {
                return this.stream.removeTrack(e), "video" === e.kind && (null != this.videoStreamId && (0, s.unregisterVideoStream)(this.videoStreamId), this.emit("video", null)), this.stream.getTracks().length
            }
        }, {
            key: "setSinkId",
            value: function(e) {
                this.sinkId = e, this.updateAudioElement()
            }
        }, {
            key: "mute",
            get: function() {
                return this._mute
            },
            set: function(e) {
                this._mute = e || !1, this.updateAudioElement()
            }
        }, {
            key: "priority",
            get: function() {
                return (this._speakingFlags & l.SpeakingFlags.PRIORITY) === l.SpeakingFlags.PRIORITY
            }
        }, {
            key: "volume",
            get: function() {
                return this._volume
            },
            set: function(e) {
                this._volume = Math.max(0, Math.min(Math.round(e), l.DEFAULT_VOLUME)), this.updateAudioElement()
            }
        }, {
            key: "speakingFlags",
            get: function() {
                return this._speakingFlags
            }
        }, {
            key: "setSpeakingFlags",
            value: function(e) {
                this._speakingFlags !== e && (this._speakingFlags = e, this.updateAudioElement())
            }
        }, {
            key: "updateAudioElement",
            value: function() {
                var e = this.audioElement;
                if (null != e) {
                    e.muted = this._mute, e.volume = this._volume / 100;
                    var t = this.sinkId;
                    null != t && u.CAN_SET_OUTPUT_DEVICES && e.setSinkId(t)
                }
            }
        }], f(r.prototype, o), i && f(r, i), m
    }(a.default)
}