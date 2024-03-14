function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("424973"), n("70102"), n("222007");
    var i, s, r = n("383536"),
        a = n.n(r),
        o = n("811022"),
        l = n("773364"),
        u = n("566106"),
        d = n("62684"),
        c = n("588446"),
        f = n("353927"),
        _ = n("53452");
    let E = null === (i = a.name) || void 0 === i ? void 0 : i.toLowerCase().includes("firefox");

    function h(e, t) {
        e.sender.replaceTrack(t), e.direction = null != t ? "sendrecv" : "recvonly"
    }
    s = class extends u.default {
        destroy() {
            super.destroy(), "closed" !== this.signalingState && this.pc.close()
        }
        setCodecs(e, t, n) {
            var i, s, r;
            let a;
            (this.audioCodec !== e || this.videoCodec !== t) && (a = this.codecs.find(t => t.name === e), this.audioCodec = e, this.audioPayloadType = null !== (i = null == a ? void 0 : a.payloadType) && void 0 !== i ? i : 0, a = this.codecs.find(e => e.name === t), this.videoCodec = t, this.videoPayloadType = null !== (s = null == a ? void 0 : a.payloadType) && void 0 !== s ? s : 0, this.rtxPayloadType = null !== (r = null == a ? void 0 : a.rtxPayloadType) && void 0 !== r ? r : 0, this.logger.info("Renegotiating: Codecs changed"), this.handleNegotiationNeeded())
        }
        setStream(e) {
            let t = "closed" === this.iceConnectionState;
            null != e && !t && (h(this.audioTransceiver, e.getAudioTracks()[0]), this.videoSupported && h(this.videoTransceiver, e.getVideoTracks()[0])), this.logger.info("Renegotiating: Streams changed"), this.handleNegotiationNeeded()
        }
        createUser(e, t, n) {
            var i;
            if (0 === t) {
                this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
                return
            }
            this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (i = null == n ? void 0 : n.join(",")) && void 0 !== i ? i : 0));
            let s = !1,
                r = this.users.get(e);
            if (null == r && (r = {}), r.audioSSRC !== t) {
                r.audioSSRC = t, s = !0, this.unassignedStreams.audio.push({
                    cname: e,
                    ssrc: t
                });
                let n = this.inactiveTransceivers.audio.length,
                    i = this.unassignedStreams.audio.length;
                this.addTransceivers("audio", "recvonly", 10 + i - n)
            }
            if (this.videoSupported && void 0 !== n && (!E || void 0 === r.videoSSRC)) {
                let t = null != n && n.length > 0 ? n[0] : 0;
                if (t > 0) {
                    if (r.videoSSRC !== t) {
                        r.videoSSRC = t, s = !0, this.unassignedStreams.video.push({
                            cname: e,
                            ssrc: t
                        });
                        let n = this.inactiveTransceivers.video.length,
                            i = this.unassignedStreams.video.length;
                        this.addTransceivers("video", "recvonly", 10 + i - n)
                    }
                } else null != r.videoSSRC && (r.videoSSRC = void 0, s = !0)
            }
            if (s) {
                this.users.set(e, r), t > 0 && this.userIdsBySsrc.set(t, e);
                let i = null != n && n.length > 0 ? n[0] : 0;
                i > 0 && this.userIdsBySsrc.set(i, e), this.logger.info("Renegotiating: User joined"), this.handleNegotiationNeeded()
            }
        }
        destroyUser(e) {
            let t = this.users.get(e);
            if (null != t) {
                let {
                    audioSSRC: n,
                    videoSSRC: i
                } = t;
                this.users.delete(e), null != n && this.userIdsBySsrc.delete(n), null != i && this.userIdsBySsrc.delete(i), this.logger.info("Renegotiating: User left"), this.handleNegotiationNeeded()
            }
        }
        setBitRate(e) {
            this.voiceBitrate !== e && (super.setBitRate(e), this.setAudioEncoderParameters([{
                parameter: u.EncoderParameter.AUDIO_BITRATE,
                value: e
            }]))
        }
        setSDP(e) {
            if (!(0, c.validateSdp)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
            this.sdp = e, this.setRemoteAnswer()
        }
        get peerConnectionState() {
            return this.pc.connectionState
        }
        get iceGatheringState() {
            return this.pc.iceGatheringState
        }
        get iceConnectionState() {
            return this.pc.iceConnectionState
        }
        get signalingState() {
            return this.pc.signalingState
        }
        get connected() {
            return "connected" === this.pc.iceConnectionState
        }
        setTransceiverEncodingParameters(e, t) {
            if (null == e || 0 === t.length) return;
            let n = e.sender,
                i = n.getParameters();
            if (null == i.encodings) return;
            let s = !1;
            for (let e of i.encodings)
                for (let {
                        propertyName: n,
                        value: i
                    }
                    of t) e[n] !== i && (this.logger.info("UnifiedConnection.setTransceiverEncodingParameters: ".concat(n, ": from '").concat(e[n], "' to '").concat(i, "'")), s = !0, e[n] = i);
            if (!s) return;
            let r = e => {
                this.logger.error('UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "'.concat(e, '" (').concat(JSON.stringify(t), ')"'))
            };
            n.setParameters(i).then(() => {}, e => r(e)).catch(e => r(e))
        }
        setAudioEncoderParameters(e) {
            let t = {
                    [u.EncoderParameter.AUDIO_BITRATE]: "maxBitrate"
                },
                n = [];
            for (let {
                    parameter: i,
                    value: s
                }
                of e) {
                let e = t[i];
                if (null == e) {
                    this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(i, '"'));
                    return
                }
                n.push({
                    propertyName: e,
                    value: s
                })
            }
            this.setTransceiverEncodingParameters(this.audioTransceiver, n)
        }
        setVideoEncoderParameters(e) {
            let t = {
                    [u.EncoderParameter.VIDEO_BITRATE]: "maxBitrate",
                    [u.EncoderParameter.VIDEO_RESOLUTION_SCALE]: "scaleResolutionDownBy",
                    [u.EncoderParameter.VIDEO_FRAMERATE]: "maxFramerate"
                },
                n = [];
            for (let {
                    parameter: i,
                    value: s
                }
                of e) {
                let e = t[i];
                if (null == e) {
                    this.logger.info('UnifiedConnection.setEncoderParameter: Unable to set parameter "'.concat(i, '"'));
                    return
                }
                n.push({
                    propertyName: e,
                    value: s
                })
            }
            this.setTransceiverEncodingParameters(this.videoTransceiver, n)
        }
        getRawStats() {
            return this.pc.getStats()
        }
        makeOfferAnswerOptions() {
            return {
                iceRestart: !1
            }
        }
        parseLocalDescription() {
            let e = this.pc.localDescription;
            if (null == e) throw Error("localDescription is null");
            let t = e.sdp,
                {
                    outboundStreams: n,
                    codecs: i,
                    audioSSRC: s,
                    videoSSRC: r,
                    rtxSSRC: a
                } = (0, c.extractSDP)(t);
            return this.outboundStreams = n, this.codecs = i, this.extensions = (0, c.getExtensions)(t), this.audioSSRC = s, this.videoReady = r > 0 && a > 0, (this.videoStreamParameters[0].ssrc !== r || this.videoStreamParameters[0].rtxSsrc !== a || this.videoReady) && (this.videoStreamParameters[0].ssrc = 0 === r ? this.videoStreamParameters[0].ssrc : r, this.videoStreamParameters[0].rtxSsrc = 0 === a ? this.videoStreamParameters[0].rtxSsrc : a, this.videoStreamParameters[0].active = this.videoReady, this.emit(l.BaseConnectionEvent.Video, this.ids.userId, this.input.getVideoStreamId(), this.audioSSRC, r, a, this.videoStreamParameters)), t
        }
        addTransceivers(e, t, n, i) {
            let s = this.pc,
                r = s.getTransceivers().length;
            for (let a = r; a < r + n; a++) "video" === e && null != i ? s.addTransceiver(e, {
                direction: t,
                streams: [i]
            }) : s.addTransceiver(e, {
                direction: t
            }), this.inactiveTransceivers[e].push(a.toString())
        }
        buildSSRCsFromOutboundStreams() {
            let e = this.outboundStreams.map(e => {
                let {
                    mid: t,
                    type: n,
                    direction: i
                } = e;
                t = String(t);
                let s = this.assignedStreams.get(t);
                if (null != s) {
                    let e = this.users.get(s.cname),
                        i = "audio" === n ? null == e ? void 0 : e.audioSSRC : null == e ? void 0 : e.videoSSRC;
                    s.ssrc !== i && (s = void 0, this.assignedStreams.delete(t))
                }
                let r = this.unassignedStreams[n],
                    a = this.inactiveTransceivers[n],
                    o = a.indexOf(t);
                return null == s && r.length > 0 && -1 !== o && (s = r.pop(), a.splice(o, 1), this.assignedStreams.set(t, s)), null == s && (s = {
                    ssrc: -1,
                    cname: ""
                }), {
                    ssrc: s.ssrc,
                    cname: s.cname,
                    type: n,
                    direction: (0, c.getDirection)(i),
                    mid: t
                }
            });
            return e
        }
        generateSDPAnswer() {
            var e, t;
            let n = this.audioCodec,
                i = this.audioPayloadType,
                s = this.videoCodec,
                r = this.videoPayloadType,
                a = this.videoSupported && (null === (t = this.videoTransceiver) || void 0 === t ? void 0 : null === (e = t.sender) || void 0 === e ? void 0 : e.track) != null,
                o = this.rtxPayloadType,
                l = this.sdp;
            if (null == n || null == i || null == s || null == r || null == o || null == l) throw Error("Invalid payload: audioCodec: ".concat(n, ", audioPayloadType: ").concat(null == i ? "null" : i, ", videoCodec: ").concat(s, ", videoCodecPayloadType: ").concat(null == r ? "null" : r, ", rtxPayloadType: ").concat(null == o ? "null" : o, ", sdp: ").concat(null == l ? "null" : l));
            let u = this.buildSSRCsFromOutboundStreams();
            return (0, c.generateUnifiedSessionDescription)({
                type: "answer",
                baseSDP: l,
                audioCodec: n,
                audioPayloadType: i,
                audioBitRate: this.voiceBitrate,
                videoCodec: s,
                videoPayloadType: r,
                videoBitRate: 2500,
                sendingVideo: a,
                rtxPayloadType: o,
                ssrcs: u,
                extensions: this.extensions
            })
        }
        async setRemoteAnswer() {
            let e = this.pc,
                t = this.generateSDPAnswer();
            await e.setRemoteDescription(t), (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) && (this.negotiationNeeded = !0, this.logger.info("Renegotiating: Streams left unassigned after negotiation - renegotiate")), this.negotiating = !1, this.negotiationNeeded && this.handleNegotiationNeeded()
        }
        setConnected() {
            this.input.reset(), this.setConnectionState(f.ConnectionStates.CONNECTED), this.on(l.BaseConnectionEvent.Stats, this.handleStats), this.input.on(d.InputEvent.VoiceActivity, this.handleVoiceActivity)
        }
        async handleNegotiationNeeded() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!e && (this.negotiating || null == this.sdp)) {
                this.negotiationNeeded = !0;
                return
            }
            this.negotiating = !0, this.negotiationNeeded = !1;
            let t = this.pc,
                n = await t.createOffer(this.makeOfferAnswerOptions());
            await t.setLocalDescription(n);
            let i = this.parseLocalDescription();
            null == this.sdp ? this.emit(l.BaseConnectionEvent.Connected, "webrtc", (0, c.truncateSDP)(i)) : this.setRemoteAnswer()
        }
        constructor(e, t, n, i) {
            super(e, t, n, i), this.sdp = null, this.negotiating = !1, this.negotiationNeeded = !1, this.users = new Map, this.userIdsBySsrc = new Map, this.assignedStreams = new Map, this.unassignedStreams = {
                audio: [],
                video: []
            }, this.inactiveTransceivers = {
                audio: [],
                video: []
            }, this.outboundStreams = [], this.trackUserIds = {}, this.audioCodec = null, this.audioPayloadType = null, this.videoCodec = null, this.videoPayloadType = null, this.rtxPayloadType = null, this.extensions = [], this.codecs = [], this.getUserIdBySsrc = e => this.userIdsBySsrc.get(e), this.handlePeerConnectionStateChange = () => {
                let e = this.peerConnectionState;
                switch (this.logger.info("peerConnectionState =>", e), e) {
                    case "connected":
                        this.setConnected();
                        break;
                    case "connecting":
                        "connected" === this.iceConnectionState ? this.setConnectionState(f.ConnectionStates.DTLS_CONNECTING) : this.setConnectionState(f.ConnectionStates.ICE_CHECKING);
                        break;
                    case "failed":
                        this.setConnectionState(f.ConnectionStates.NO_ROUTE);
                        break;
                    case "disconnected":
                    case "closed":
                        this.setConnectionState(f.ConnectionStates.DISCONNECTED)
                }
            }, this.handleIceConnectionStateChange = () => {
                let e = this.iceConnectionState;
                switch (this.logger.info("iceConnectionState =>", e), e) {
                    case "connected":
                        this.setConnected();
                        break;
                    case "checking":
                        this.setConnectionState(f.ConnectionStates.ICE_CHECKING);
                        break;
                    case "failed":
                        this.setConnectionState(f.ConnectionStates.NO_ROUTE);
                        break;
                    case "disconnected":
                    case "closed":
                        this.setConnectionState(f.ConnectionStates.DISCONNECTED)
                }
            }, this.handleSignalingStateChange = () => {
                let e = this.signalingState;
                this.logger.info("signalingState => ".concat(e))
            }, this.handleIceGatheringStateChange = () => {
                this.logger.info("iceGatheringState =>", this.iceGatheringState)
            }, this.handleTrack = e => {
                let t = e.streams[0].id,
                    n = e.track;
                if (!/^default/.test(n.id)) {
                    var i, s, r, a;
                    let [e, o] = t.split("-");
                    this.trackUserIds[n.id] = e;
                    let l = this.users.get(e);
                    if ((null == l ? void 0 : null === (s = l.videoSSRC) || void 0 === s ? void 0 : null === (i = s.toString) || void 0 === i ? void 0 : i.call(s)) !== o && (null == l ? void 0 : null === (a = l.audioSSRC) || void 0 === a ? void 0 : null === (r = a.toString) || void 0 === r ? void 0 : r.call(a)) !== o) {
                        this.logger.info("Got stale ssrc ".concat(o, " for ").concat(n.kind, " track, user ID ").concat(e));
                        return
                    }
                    this.createOutput(e, n), n.onunmute = () => this.createOutput(e, n), n.onmute = () => {
                        var t;
                        (null === (t = this.users.get(e)) || void 0 === t ? void 0 : t.videoSSRC) == null && this.destroyOutput(e, n)
                    }
                }
            }, this.logger = new o.default("UnifiedConnection(".concat(e, ")")), this.videoSupported = _.BROWSER_SUPPORTS_VIDEO;
            let s = this.pc = new RTCPeerConnection({
                bundlePolicy: "max-bundle",
                sdpSemantics: "unified-plan"
            });
            _.BROWSER_SUPPORTS_CONNECTION_STATE ? (s.onconnectionstatechange = this.handlePeerConnectionStateChange, s.oniceconnectionstatechange = this.handlePeerConnectionStateChange) : s.oniceconnectionstatechange = this.handleIceConnectionStateChange, s.onsignalingstatechange = this.handleSignalingStateChange, s.onicegatheringstatechange = this.handleIceGatheringStateChange, s.ontrack = this.handleTrack, s.addTransceiver("audio", {
                direction: "recvonly",
                sendEncodings: [{
                    maxBitrate: this.voiceBitrate
                }]
            }), this.audioTransceiver = s.getTransceivers()[0], this.videoSupported && (this.addTransceivers("video", "recvonly", 1, this.input.getVideoStream()), this.videoTransceiver = s.getTransceivers()[1]), this.addTransceivers("audio", "recvonly", 10), this.videoSupported && this.addTransceivers("video", "recvonly", 10), this.setStream(this.input.stream), this.logger.info("Renegotiating: Initial negotiation"), this.handleNegotiationNeeded(!0)
        }
    }
}