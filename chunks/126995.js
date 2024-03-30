function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var r, o = n("264344"),
        i = n.n(o),
        a = n("188129"),
        u = n("384433"),
        s = n("354943"),
        l = n("995425"),
        c = n("461723"),
        f = n("439386"),
        d = n("681751");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e, t, n) {
        return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = O(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function S(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var v = null === (r = i().name) || void 0 === r ? void 0 : r.toLowerCase().includes("firefox");

    function g(e, t) {
        e.sender.replaceTrack(t), e.direction = null != t ? "sendrecv" : "recvonly"
    }
    var A = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t)
        }(A, e);
        var t, n, r, o, i, p = (t = A, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = O(t);
            if (n) {
                var a = O(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : E(e)
        });

        function A(e, t, n, r) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, A), I(E(o = p.call(this, e, t, n, r)), "pc", void 0), I(E(o), "sdp", null), I(E(o), "negotiating", !1), I(E(o), "negotiationNeeded", !1), I(E(o), "audioTransceiver", void 0), I(E(o), "videoTransceiver", void 0), I(E(o), "users", new Map), I(E(o), "userIdsBySsrc", new Map), I(E(o), "assignedStreams", new Map), I(E(o), "unassignedStreams", {
                audio: [],
                video: []
            }), I(E(o), "inactiveTransceivers", {
                audio: [],
                video: []
            }), I(E(o), "outboundStreams", []), I(E(o), "trackUserIds", {}), I(E(o), "audioCodec", null), I(E(o), "audioPayloadType", null), I(E(o), "videoCodec", null), I(E(o), "videoPayloadType", null), I(E(o), "rtxPayloadType", null), I(E(o), "extensions", []), I(E(o), "codecs", []), I(E(o), "logger", void 0), I(E(o), "getUserIdBySsrc", function(e) {
                return o.userIdsBySsrc.get(e)
            }), I(E(o), "handlePeerConnectionStateChange", function() {
                var e = o.peerConnectionState;
                switch (o.logger.info("peerConnectionState =>", e), e) {
                    case "connected":
                        o.setConnected();
                        break;
                    case "connecting":
                        "connected" === o.iceConnectionState ? o.setConnectionState(f.ConnectionStates.DTLS_CONNECTING) : o.setConnectionState(f.ConnectionStates.ICE_CHECKING);
                        break;
                    case "failed":
                        o.setConnectionState(f.ConnectionStates.NO_ROUTE);
                        break;
                    case "disconnected":
                    case "closed":
                        o.setConnectionState(f.ConnectionStates.DISCONNECTED)
                }
            }), I(E(o), "handleIceConnectionStateChange", function() {
                var e = o.iceConnectionState;
                switch (o.logger.info("iceConnectionState =>", e), e) {
                    case "connected":
                        o.setConnected();
                        break;
                    case "checking":
                        o.setConnectionState(f.ConnectionStates.ICE_CHECKING);
                        break;
                    case "failed":
                        o.setConnectionState(f.ConnectionStates.NO_ROUTE);
                        break;
                    case "disconnected":
                    case "closed":
                        o.setConnectionState(f.ConnectionStates.DISCONNECTED)
                }
            }), I(E(o), "handleSignalingStateChange", function() {
                var e = o.signalingState;
                o.logger.info("signalingState => ".concat(e))
            }), I(E(o), "handleIceGatheringStateChange", function() {
                o.logger.info("iceGatheringState =>", o.iceGatheringState)
            }), I(E(o), "handleTrack", function(e) {
                var t = e.streams[0].id,
                    n = e.track;
                if (!/^default/.test(n.id)) {
                    var r, i, a, u, s, l, c = (r = t.split("-"), i = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(r) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(r, i) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return _(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                            }
                        }(r, i) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        f = c[0],
                        d = c[1];
                    o.trackUserIds[n.id] = f;
                    var E = o.users.get(f);
                    if ((null == E ? void 0 : null === (u = E.videoSSRC) || void 0 === u ? void 0 : null === (a = u.toString) || void 0 === a ? void 0 : a.call(u)) !== d && (null == E ? void 0 : null === (l = E.audioSSRC) || void 0 === l ? void 0 : null === (s = l.toString) || void 0 === s ? void 0 : s.call(l)) !== d) {
                        o.logger.info("Got stale ssrc ".concat(d, " for ").concat(n.kind, " track, user ID ").concat(f));
                        return
                    }
                    o.createOutput(f, n), n.onunmute = function() {
                        return o.createOutput(f, n)
                    }, n.onmute = function() {
                        var e;
                        (null === (e = o.users.get(f)) || void 0 === e ? void 0 : e.videoSSRC) == null && o.destroyOutput(f, n)
                    }
                }
            }), o.logger = new a.Logger("UnifiedConnection(".concat(e, ")")), o.videoSupported = d.BROWSER_SUPPORTS_VIDEO;
            var o, i = o.pc = new RTCPeerConnection({
                bundlePolicy: "max-bundle",
                sdpSemantics: "unified-plan"
            });
            return d.BROWSER_SUPPORTS_CONNECTION_STATE ? (i.onconnectionstatechange = o.handlePeerConnectionStateChange, i.oniceconnectionstatechange = o.handlePeerConnectionStateChange) : i.oniceconnectionstatechange = o.handleIceConnectionStateChange, i.onsignalingstatechange = o.handleSignalingStateChange, i.onicegatheringstatechange = o.handleIceGatheringStateChange, i.ontrack = o.handleTrack, i.addTransceiver("audio", {
                direction: "recvonly",
                sendEncodings: [{
                    maxBitrate: o.voiceBitrate
                }]
            }), o.audioTransceiver = i.getTransceivers()[0], o.videoSupported && (o.addTransceivers("video", "recvonly", 1, o.input.getVideoStream()), o.videoTransceiver = i.getTransceivers()[1]), o.addTransceivers("audio", "recvonly", 10), o.videoSupported && o.addTransceivers("video", "recvonly", 10), o.setStream(o.input.stream), o.logger.info("Renegotiating: Initial negotiation"), o.handleNegotiationNeeded(!0), o
        }
        return r = A, o = [{
            key: "destroy",
            value: function() {
                h(O(A.prototype), "destroy", this).call(this), "closed" !== this.signalingState && this.pc.close()
            }
        }, {
            key: "setCodecs",
            value: function(e, t, n) {
                var r, o, i, a;
                (this.audioCodec !== e || this.videoCodec !== t) && (r = this.codecs.find(function(t) {
                    return t.name === e
                }), this.audioCodec = e, this.audioPayloadType = null !== (o = null == r ? void 0 : r.payloadType) && void 0 !== o ? o : 0, r = this.codecs.find(function(e) {
                    return e.name === t
                }), this.videoCodec = t, this.videoPayloadType = null !== (i = null == r ? void 0 : r.payloadType) && void 0 !== i ? i : 0, this.rtxPayloadType = null !== (a = null == r ? void 0 : r.rtxPayloadType) && void 0 !== a ? a : 0, this.logger.info("Renegotiating: Codecs changed"), this.handleNegotiationNeeded())
            }
        }, {
            key: "setStream",
            value: function(e) {
                var t = "closed" === this.iceConnectionState;
                null != e && !t && (g(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && g(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info("Renegotiating: Streams changed"), this.handleNegotiationNeeded()
            }
        }, {
            key: "createUser",
            value: function(e, t, n) {
                if (0 === t) {
                    this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
                    return
                }
                this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (r = null == n ? void 0 : n.join(",")) && void 0 !== r ? r : 0));
                var r, o = !1,
                    i = this.users.get(e);
                if (null == i && (i = {}), i.audioSSRC !== t) {
                    i.audioSSRC = t, o = !0, this.unassignedStreams.audio.push({
                        cname: e,
                        ssrc: t
                    });
                    var a = this.inactiveTransceivers.audio.length,
                        u = this.unassignedStreams.audio.length;
                    this.addTransceivers("audio", "recvonly", 10 + u - a)
                }
                if (this.videoSupported && void 0 !== n && (!v || void 0 === i.videoSSRC)) {
                    var s = null != n && n.length > 0 ? n[0] : 0;
                    if (s > 0) {
                        if (i.videoSSRC !== s) {
                            i.videoSSRC = s, o = !0, this.unassignedStreams.video.push({
                                cname: e,
                                ssrc: s
                            });
                            var l = this.inactiveTransceivers.video.length,
                                c = this.unassignedStreams.video.length;
                            this.addTransceivers("video", "recvonly", 10 + c - l)
                        }
                    } else null != i.videoSSRC && (i.videoSSRC = void 0, o = !0)
                }
                if (o) {
                    this.users.set(e, i), t > 0 && this.userIdsBySsrc.set(t, e);
                    var f = null != n && n.length > 0 ? n[0] : 0;
                    f > 0 && this.userIdsBySsrc.set(f, e), this.logger.info("Renegotiating: User joined"), this.handleNegotiationNeeded()
                }
            }
        }, {
            key: "destroyUser",
            value: function(e) {
                var t = this.users.get(e);
                if (null != t) {
                    var n = t.audioSSRC,
                        r = t.videoSSRC;
                    this.users.delete(e), null != n && this.userIdsBySsrc.delete(n), null != r && this.userIdsBySsrc.delete(r), this.logger.info("Renegotiating: User left"), this.handleNegotiationNeeded()
                }
            }
        }, {
            key: "setBitRate",
            value: function(e) {
                this.voiceBitrate !== e && (h(O(A.prototype), "setBitRate", this).call(this, e), this.setAudioEncoderParameters([{
                    parameter: s.EncoderParameter.AUDIO_BITRATE,
                    value: e
                }]))
            }
        }, {
            key: "setSDP",
            value: function(e) {
                if (!(0, c.validateSdp)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
                this.sdp = e, this.setRemoteAnswer()
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
                return "connected" === this.pc.iceConnectionState
            }
        }, {
            key: "setTransceiverEncodingParameters",
            value: function(e, t) {
                var n = this;
                if (null == e || 0 === t.length) return;
                var r = e.sender,
                    o = r.getParameters();
                if (null != o.encodings) {
                    var i = !1,
                        a = !0,
                        u = !1,
                        s = void 0;
                    try {
                        for (var l, c = o.encodings[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                            var f = l.value,
                                d = !0,
                                _ = !1,
                                E = void 0;
                            try {
                                for (var p, m = t[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                                    var y = p.value,
                                        I = y.propertyName,
                                        h = y.value;
                                    f[I] !== h && (this.logger.info("UnifiedConnection.setTransceiverEncodingParameters: ".concat(I, ": from '").concat(f[I], "' to '").concat(h, "'")), i = !0, f[I] = h)
                                }
                            } catch (e) {
                                _ = !0, E = e
                            } finally {
                                try {
                                    !d && null != m.return && m.return()
                                } finally {
                                    if (_) throw E
                                }
                            }
                        }
                    } catch (e) {
                        u = !0, s = e
                    } finally {
                        try {
                            !a && null != c.return && c.return()
                        } finally {
                            if (u) throw s
                        }
                    }
                    if (i) {
                        var O = function(e) {
                            n.logger.error('UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'.concat(e, '" (').concat(JSON.stringify(t), ')"'))
                        };
                        r.setParameters(o).then(function() {}, function(e) {
                            return O(e)
                        }).catch(function(e) {
                            return O(e)
                        })
                    }
                }
            }
        }, {
            key: "setAudioEncoderParameters",
            value: function(e) {
                var t = I({}, s.EncoderParameter.AUDIO_BITRATE, "maxBitrate"),
                    n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var l = a.value,
                            c = l.parameter,
                            f = l.value,
                            d = t[c];
                        if (null == d) {
                            this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(c, '"'));
                            return
                        }
                        n.push({
                            propertyName: d,
                            value: f
                        })
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
                this.setTransceiverEncodingParameters(this.audioTransceiver, n)
            }
        }, {
            key: "setVideoEncoderParameters",
            value: function(e) {
                var t = (I(a = {}, s.EncoderParameter.VIDEO_BITRATE, "maxBitrate"), I(a, s.EncoderParameter.VIDEO_RESOLUTION_SCALE, "scaleResolutionDownBy"), I(a, s.EncoderParameter.VIDEO_FRAMERATE, "maxFramerate"), a),
                    n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u, l = e[Symbol.iterator](); !(r = (u = l.next()).done); r = !0) {
                        var c = u.value,
                            f = c.parameter,
                            d = c.value,
                            _ = t[f];
                        if (null == _) {
                            this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(f, '"'));
                            return
                        }
                        n.push({
                            propertyName: _,
                            value: d
                        })
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && null != l.return && l.return()
                    } finally {
                        if (o) throw i
                    }
                }
                this.setTransceiverEncodingParameters(this.videoTransceiver, n)
            }
        }, {
            key: "getRawStats",
            value: function() {
                return this.pc.getStats()
            }
        }, {
            key: "makeOfferAnswerOptions",
            value: function() {
                return {
                    iceRestart: !1
                }
            }
        }, {
            key: "parseLocalDescription",
            value: function() {
                var e = this.pc.localDescription;
                if (null == e) throw Error("localDescription is null");
                var t = e.sdp,
                    n = (0, c.extractSDP)(t),
                    r = n.outboundStreams,
                    o = n.codecs,
                    i = n.audioSSRC,
                    a = n.videoSSRC,
                    s = n.rtxSSRC;
                return this.outboundStreams = r, this.codecs = o, this.extensions = (0, c.getExtensions)(t), this.audioSSRC = i, this.videoReady = a > 0 && s > 0, (this.videoStreamParameters[0].ssrc !== a || this.videoStreamParameters[0].rtxSsrc !== s || this.videoReady) && (this.videoStreamParameters[0].ssrc = 0 === a ? this.videoStreamParameters[0].ssrc : a, this.videoStreamParameters[0].rtxSsrc = 0 === s ? this.videoStreamParameters[0].rtxSsrc : s, this.videoStreamParameters[0].active = this.videoReady, this.emit(u.BaseConnectionEvent.Video, this.ids.userId, this.input.getVideoStreamId(), this.audioSSRC, a, s, this.videoStreamParameters)), t
            }
        }, {
            key: "addTransceivers",
            value: function(e, t, n, r) {
                for (var o = this.pc, i = o.getTransceivers().length, a = i; a < i + n; a++) "video" === e && null != r ? o.addTransceiver(e, {
                    direction: t,
                    streams: [r]
                }) : o.addTransceiver(e, {
                    direction: t
                }), this.inactiveTransceivers[e].push(a.toString())
            }
        }, {
            key: "buildSSRCsFromOutboundStreams",
            value: function() {
                var e = this;
                return this.outboundStreams.map(function(t) {
                    var n = t.mid,
                        r = t.type,
                        o = t.direction;
                    n = String(n);
                    var i = e.assignedStreams.get(n);
                    if (null != i) {
                        var a = e.users.get(i.cname),
                            u = "audio" === r ? null == a ? void 0 : a.audioSSRC : null == a ? void 0 : a.videoSSRC;
                        i.ssrc !== u && (i = void 0, e.assignedStreams.delete(n))
                    }
                    var s = e.unassignedStreams[r],
                        l = e.inactiveTransceivers[r],
                        f = l.indexOf(n);
                    return null == i && s.length > 0 && -1 !== f && (i = s.pop(), l.splice(f, 1), e.assignedStreams.set(n, i)), null == i && (i = {
                        ssrc: -1,
                        cname: ""
                    }), {
                        ssrc: i.ssrc,
                        cname: i.cname,
                        type: r,
                        direction: (0, c.getDirection)(o),
                        mid: n
                    }
                })
            }
        }, {
            key: "generateSDPAnswer",
            value: function() {
                var e, t, n = this.audioCodec,
                    r = this.audioPayloadType,
                    o = this.videoCodec,
                    i = this.videoPayloadType,
                    a = this.videoSupported && (null === (t = this.videoTransceiver) || void 0 === t ? void 0 : null === (e = t.sender) || void 0 === e ? void 0 : e.track) != null,
                    u = this.rtxPayloadType,
                    s = this.sdp;
                if (null == n || null == r || null == o || null == i || null == u || null == s) throw Error("Invalid payload: audioCodec: ".concat(n, ", audioPayloadType: ").concat(null == r ? "null" : r, ", videoCodec: ").concat(o, ", videoCodecPayloadType: ").concat(null == i ? "null" : i, ", rtxPayloadType: ").concat(null == u ? "null" : u, ", sdp: ").concat(null == s ? "null" : s));
                var l = this.buildSSRCsFromOutboundStreams();
                return (0, c.generateUnifiedSessionDescription)({
                    type: "answer",
                    baseSDP: s,
                    audioCodec: n,
                    audioPayloadType: r,
                    audioBitRate: this.voiceBitrate,
                    videoCodec: o,
                    videoPayloadType: i,
                    videoBitRate: 2500,
                    sendingVideo: a,
                    rtxPayloadType: u,
                    ssrcs: l,
                    extensions: this.extensions
                })
            }
        }, {
            key: "setRemoteAnswer",
            value: function() {
                var e = this;
                return m(function() {
                    var t, n;
                    return S(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t = e.pc, n = e.generateSDPAnswer(), [4, t.setRemoteDescription(n)];
                            case 1:
                                return r.sent(), (e.unassignedStreams.audio.length > 0 || e.unassignedStreams.video.length > 0) && (e.negotiationNeeded = !0, e.logger.info("Renegotiating: Streams left unassigned after negotiation - renegotiate")), e.negotiating = !1, e.negotiationNeeded && e.handleNegotiationNeeded(), [2]
                        }
                    })
                })()
            }
        }, {
            key: "setConnected",
            value: function() {
                this.input.reset(), this.setConnectionState(f.ConnectionStates.CONNECTED), this.on(u.BaseConnectionEvent.Stats, this.handleStats), this.input.on(l.InputEvent.VoiceActivity, this.handleVoiceActivity)
            }
        }, {
            key: "handleNegotiationNeeded",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = this;
                return m(function() {
                    var n, r, o;
                    return S(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!e && (t.negotiating || null == t.sdp)) return t.negotiationNeeded = !0, [2];
                                return t.negotiating = !0, t.negotiationNeeded = !1, [4, (n = t.pc).createOffer(t.makeOfferAnswerOptions())];
                            case 1:
                                return r = i.sent(), [4, n.setLocalDescription(r)];
                            case 2:
                                return i.sent(), o = t.parseLocalDescription(), null == t.sdp ? t.emit(u.BaseConnectionEvent.Connected, "webrtc", (0, c.truncateSDP)(o)) : t.setRemoteAnswer(), [2]
                        }
                    })
                })()
            }
        }], y(r.prototype, o), i && y(r, i), A
    }(s.default)
}