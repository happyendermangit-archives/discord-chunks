function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("836560"),
        o = n("188129"),
        i = n("681751");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var _ = new o.Logger("PeerConnection"),
        E = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(p, e);
            var t, n, r, o, a, E = (t = p, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : u(e)
            });

            function p(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, p), l(u(t = E.call(this)), "bitrate", void 0), l(u(t), "pc", void 0), l(u(t), "stream", null), l(u(t), "senders", []), l(u(t), "negotiating", !1), l(u(t), "_negotiationNeeded", !1), l(u(t), "handlePeerConnectionStateChange", function() {
                    var e = t.peerConnectionState;
                    _.info("peerConnectionState =>", e), "connecting" === e ? "connected" === t.iceConnectionState ? t.emit(e) : t.emit(t.iceConnectionState) : t.emit(e)
                }), l(u(t), "handleIceConnectionStateChange", function() {
                    var e = t.iceConnectionState;
                    _.info("iceConnectionState =>", e), "completed" === e && (e = "connected"), t.emit(e)
                }), l(u(t), "handleSignalingStateChange", function() {
                    _.info("signalingState => ".concat(t.signalingState, ", negotiation needed: ").concat(t._negotiationNeeded.toString())), "stable" === t.signalingState && (t.negotiating = !1, t._negotiationNeeded && t.negotiationNeeded())
                }), l(u(t), "handleIceGatheringStateChange", function() {
                    _.info("iceGatheringState =>", t.iceGatheringState)
                }), l(u(t), "handleTrack", function(e) {
                    t.emitTrack(e.streams[0].id, e.track)
                }), t.bitrate = e;
                var t, n = t.pc = new RTCPeerConnection({
                    sdpSemantics: "plan-b"
                });
                return i.BROWSER_SUPPORTS_CONNECTION_STATE ? (n.onconnectionstatechange = t.handlePeerConnectionStateChange, n.oniceconnectionstatechange = t.handlePeerConnectionStateChange) : n.oniceconnectionstatechange = t.handleIceConnectionStateChange, n.onsignalingstatechange = t.handleSignalingStateChange, n.onicegatheringstatechange = t.handleIceGatheringStateChange, n.ontrack = t.handleTrack.bind(u(t)), _.info("Constructed RTCPeerConnection"), t
            }
            return r = p, o = [{
                key: "setBitRate",
                value: function(e) {
                    this.bitrate !== e && (this.bitrate = e, this.negotiationNeeded())
                }
            }, {
                key: "close",
                value: function() {
                    _.info("Close RTCPeerConnection"), "closed" !== this.signalingState && this.pc.close(), this.removeAllListeners()
                }
            }, {
                key: "peerConnectionState",
                get: function() {
                    return this.pc.connectionState
                }
            }, {
                key: "iceGatheringState",
                get: function() {
                    return this.pc.iceGatheringState
                }
            }, {
                key: "iceConnectionState",
                get: function() {
                    return this.pc.iceConnectionState
                }
            }, {
                key: "signalingState",
                get: function() {
                    return this.pc.signalingState
                }
            }, {
                key: "connected",
                get: function() {
                    return null != this.pc && /connected|completed/.test(this.pc.iceConnectionState)
                }
            }, {
                key: "setStream",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = this.pc,
                        r = "closed" === this.iceConnectionState,
                        o = !1;
                    null != this.stream && !r && (this.senders.forEach(function(e) {
                        return n.removeTrack(e)
                    }), o = !0), this.stream = e, this.senders = [], null != e && !r && (this.senders = d(e.getAudioTracks().map(function(t) {
                        return n.addTrack(t, e)
                    })).concat(d(e.getVideoTracks().map(function(t) {
                        return n.addTrack(t, e)
                    }))), o = !0), o && !t && this.negotiationNeeded()
                }
            }, {
                key: "createOffer",
                value: function() {
                    var e = this,
                        t = this.pc;
                    return t.createOffer(this.makeOfferAnswerOptions()).then(function(n) {
                        return t.setLocalDescription(e.mungeLocalDescription(n))
                    }).then(function() {
                        var n = t.localDescription;
                        if (null == n) throw Error("localDescription is null");
                        return e.emit("offer", n), n
                    }).catch(function(n) {
                        if ("have-remote-offer" === t.signalingState) return _.error(n), e.createOffer();
                        throw n
                    })
                }
            }, {
                key: "createAnswer",
                value: function() {
                    var e = this,
                        t = this.pc;
                    return t.createAnswer(this.makeOfferAnswerOptions()).then(function(n) {
                        return t.setLocalDescription(e.mungeLocalDescription(n))
                    }).then(function() {
                        var n = t.localDescription;
                        if (null == n) throw Error("localDescription is null");
                        return e.emit("answer", n), n
                    }).catch(function(e) {
                        throw _.warn("PeerConnection#createAnswer: Attempted to set local description in state: ".concat(t.signalingState)), e
                    })
                }
            }, {
                key: "negotiationNeeded",
                value: function() {
                    if (this.negotiating) {
                        this._negotiationNeeded = !0;
                        return
                    }
                    this.negotiating = !0, this._negotiationNeeded = !1, this.createOffer()
                }
            }, {
                key: "setRemoteDescription",
                value: function(e) {
                    return this.pc.setRemoteDescription(e)
                }
            }, {
                key: "getStats",
                value: function() {
                    return this.pc.getStats()
                }
            }, {
                key: "makeOfferAnswerOptions",
                value: function() {
                    return {
                        offerToReceiveAudio: !0,
                        offerToReceiveVideo: i.BROWSER_SUPPORTS_VIDEO,
                        iceRestart: !1
                    }
                }
            }, {
                key: "mungeLocalDescription",
                value: function(e) {
                    for (var t = e.sdp.split("\n"), n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (/^a=mid:/.test(r)) {
                            null != this.bitrate && t.splice(n + 1, 0, "b=AS:".concat(Math.floor(this.bitrate / 1e3)));
                            break
                        }
                    }
                    return e.sdp = t.join("\n"), e
                }
            }, {
                key: "emitTrack",
                value: function(e, t) {
                    var n = this;
                    !/^default/.test(t.id) && (t.onended = function() {
                        n.emit("removetrack", e, t)
                    }, this.emit("addtrack", e, t))
                }
            }], s(r.prototype, o), a && s(r, a), p
        }(r.EventEmitter)
}