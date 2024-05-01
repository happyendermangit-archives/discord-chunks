function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        makeConnection: function() {
            return h
        }
    });
    var i = n("264344"),
        r = n.n(i),
        s = n("259443"),
        a = n("46973"),
        o = n("912095"),
        l = n("912978"),
        u = n("886848"),
        d = n("236842"),
        _ = n("649318"),
        c = n("199857"),
        E = n("65154"),
        I = n("436620");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return e.split("-")[0]
    }
    class S extends o.default {
        destroy() {
            super.destroy(), this.pc.close()
        }
        setCodecs(e, t, n) {
            var i, r, s;
            let a;
            (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) && (a = this.codecs.find(t => t.name === e), this.fpc.audioCodec = e, this.fpc.audioPayloadType = null !== (i = null == a ? void 0 : a.payloadType) && void 0 !== i ? i : 0, a = this.codecs.find(e => e.name === t), this.fpc.videoCodec = t, this.fpc.videoPayloadType = null !== (r = null == a ? void 0 : a.payloadType) && void 0 !== r ? r : 0, this.fpc.rtxPayloadType = null !== (s = null == a ? void 0 : a.rtxPayloadType) && void 0 !== s ? s : 0, this.pc.negotiationNeeded())
        }
        setStream(e) {
            this.fpc.direction = null != e ? _.Directions.SENDRECV : _.Directions.SENDONLY, this.pc.setStream(null != e ? e : null)
        }
        createUser(e, t, n) {
            var i;
            if (0 === t) {
                this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
                return
            }
            this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (i = null == n ? void 0 : n.join(",")) && void 0 !== i ? i : 0));
            let r = null != n && n.length > 0 ? n[0] : 0;
            this.fpc.addStream(e, t, r)
        }
        destroyUser(e) {
            this.fpc.removeStream(e)
        }
        setBitRate(e) {
            this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e))
        }
        setSDP(e) {
            this.pc.on("offer", () => this.fpc.createAnswer()), this.fpc.sdp = e
        }
        getUserIdBySsrc(e) {}
        getRawStats() {
            return this.pc.getStats()
        }
        setVideoEncoderParameters(e) {}
        constructor(e, t, n, i) {
            super(e, t, n, i), T(this, "pc", void 0), T(this, "fpc", void 0), T(this, "codecs", []), T(this, "logger", void 0), this.logger = new s.Logger("Connection(".concat(e, ")"));
            let r = new l.default;
            r.on("answer", e => this.pc.setRemoteDescription(e).catch(e => this.logger.error("Failed to set remote description (answer): ".concat(e)))), r.on("offer", e => {
                this.pc.setRemoteDescription(e).then(() => this.pc.createAnswer()).then(e => this.fpc.setRemoteDescription(e)).catch(e => this.logger.error("Failed to set remote description (offer): ".concat(e)))
            }), r.direction = null != this.input.stream ? _.Directions.SENDRECV : _.Directions.SENDONLY, this.fpc = r;
            let o = new d.default(this.voiceBitrate);
            o.on("addtrack", (e, t) => this.createOutput(f(e), t)), o.on("removetrack", (e, t) => this.destroyOutput(f(e), t)), o.once("connected", () => {
                this.input.reset(), this.setConnectionState(E.ConnectionStates.CONNECTED), this.on(a.BaseConnectionEvent.Stats, this.handleStats), this.input.on(u.InputEvent.VoiceActivity, this.handleVoiceActivity)
            }), o.on("connecting", () => this.setConnectionState(E.ConnectionStates.DTLS_CONNECTING)), o.on("checking", () => this.setConnectionState(E.ConnectionStates.ICE_CHECKING)), o.on("failed", () => this.setConnectionState(E.ConnectionStates.NO_ROUTE)), o.on("disconnected", () => this.setConnectionState(E.ConnectionStates.DISCONNECTED)), o.on("closed", () => this.setConnectionState(E.ConnectionStates.DISCONNECTED)), o.on("offer", e => {
                let {
                    sdp: t
                } = e, {
                    outboundStreams: n,
                    codecs: i,
                    audioSSRC: s,
                    videoSSRC: o,
                    rtxSSRC: l
                } = (0, _.extractSDP)(t);
                this.codecs = i;
                let u = (0, _.getExtensions)(t);
                r.outboundStreams = n, this.audioSSRC = s, r.extensions = u, (this.videoStreamParameters[0].ssrc !== o || this.videoStreamParameters[0].rtxSsrc !== l || !this.videoReady) && (this.videoStreamParameters[0].ssrc = o, this.videoStreamParameters[0].rtxSsrc = l, this.emit(a.BaseConnectionEvent.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, this.videoStreamParameters[0].ssrc, this.videoStreamParameters[0].rtxSsrc, this.videoStreamParameters), this.videoReady = !0)
            }), o.once("offer", e => {
                let {
                    sdp: t
                } = e;
                this.emit(a.BaseConnectionEvent.Connected, "webrtc", (0, _.truncateSDP)(t))
            }), null != this.input.stream ? o.setStream(this.input.stream) : o.negotiationNeeded(), this.pc = o
        }
    }

    function h(e, t, n, i) {
        let a = "".concat(null != r().name && "" !== r().name ? r().name : "unknown", " ").concat(null != r().version && "" !== r().version ? r().version : "unknown"),
            o = new s.Logger("Connection(".concat(e, ")"));
        return I.BROWSER_SUPPORTS_UNIFIED_PLAN ? (o.info("Using Unified Plan (".concat(a, ")")), new c.default(e, t, n, i)) : (o.info("Using Plan B (".concat(a, ")")), new S(e, t, n, i))
    }
}