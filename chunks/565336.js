function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("836560"),
        o = n("880803"),
        i = n("983934"),
        a = n("439386");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

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
    }
    var _ = {
            voiceActivityDetection: !0,
            offerToReceiveAudio: !0,
            offerToReceiveVideo: !1,
            iceRestart: !1
        },
        E = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(y, e);
            var t, n, r, E, p, m = (t = y, n = function() {
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

            function y(e, t, n) {
                var r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, y), c(s(r = m.call(this)), "userId", void 0), c(s(r), "sinkId", void 0), c(s(r), "input", void 0), c(s(r), "pc1", void 0), c(s(r), "pc2", void 0), c(s(r), "senders", []), c(s(r), "outputs", {}), c(s(r), "audioContext", void 0), c(s(r), "handleStream", function() {
                    var e, t = r.input.getDelayedStream();
                    r.senders.forEach(function(e) {
                        return r.pc1.removeTrack(e)
                    }), r.senders = function(e) {
                        if (Array.isArray(e)) return u(e)
                    }(e = t.getAudioTracks().map(function(e) {
                        return r.pc1.addTrack(e, t)
                    })) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }
                    }(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(), r.handshake()
                }), c(s(r), "handleTrack", function(e) {
                    e.streams[0].getTracks().forEach(function(e) {
                        r.createOutput(e.id, e), e.onmute = function() {
                            r.destroyOutput(e.id, e)
                        }
                    })
                }), r.userId = i, r.sinkId = n, r.pc1 = new RTCPeerConnection, r.pc1.onicecandidate = function(e) {
                    null != e.candidate && r.pc2.addIceCandidate(e.candidate)
                }, r.pc2 = new RTCPeerConnection, r.pc2.onicecandidate = function(e) {
                    null != e.candidate && r.pc1.addIceCandidate(e.candidate)
                }, r.pc2.ontrack = r.handleTrack, r.input = new o.default(e), r.input.setSource(t), r.input.on("stream", r.handleStream), r.input.enable(), r.audioContext = e, r
            }
            return r = y, E = [{
                key: "stop",
                value: function() {
                    this.pc1.close(), this.pc2.close(), this.input.destroy();
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, o = Object.keys(this.outputs)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                            var i = r.value;
                            this.destroyOutput(i)
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && null != o.return && o.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                }
            }, {
                key: "setAudioSource",
                value: function(e) {
                    this.input.setSource(e)
                }
            }, {
                key: "setAudioSink",
                value: function(e) {
                    this.sinkId = e;
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Object.keys(this.outputs)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value;
                            this.outputs[a].setSinkId(e)
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "setNoiseCancellation",
                value: function(e) {
                    this.input.noiseCancellation = e
                }
            }, {
                key: "createOutput",
                value: function(e, t) {
                    var n = this.outputs[e];
                    null == n && ((n = new i.default(this.userId, this.audioContext)).mute = !1, n.volume = 100, n.setSpeakingFlags(a.SpeakingFlags.VOICE), n.setSinkId(this.sinkId), this.outputs[e] = n), n.addTrack(t), n.play()
                }
            }, {
                key: "destroyOutput",
                value: function(e, t) {
                    var n = this.outputs[e];
                    null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e])
                }
            }, {
                key: "handshake",
                value: function() {
                    var e = this,
                        t = function(e) {
                            for (var t = e.sdp.split("\n"), n = 0; n < t.length; n++) {
                                var r = t[n];
                                if (/^a=mid:/.test(r)) break
                            }
                            return e.sdp = t.join("\n"), e
                        };
                    this.pc1.createOffer(_).then(function(n) {
                        e.pc1.setLocalDescription(t(n)).then(function() {
                            e.pc2.setRemoteDescription(n).then(function() {
                                e.pc2.createAnswer().then(function(t) {
                                    e.pc2.setLocalDescription(t).then(function() {
                                        e.pc1.setRemoteDescription(t)
                                    })
                                })
                            })
                        })
                    })
                }
            }], l(r.prototype, E), p && l(r, p), y
        }(r.EventEmitter)
}