function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        makeConnection: function() {
            return m
        }
    });
    var i, s = n("383536"),
        r = n.n(s),
        a = n("811022"),
        o = n("773364"),
        l = n("566106"),
        u = n("8479"),
        d = n("62684"),
        c = n("760014"),
        f = n("588446"),
        _ = n("779791"),
        E = n("353927"),
        h = n("53452");

    function g(e) {
        return e.split("-")[0]
    }

    function m(e, t, n, s) {
        let o = "".concat(null != r.name && "" !== r.name ? r.name : "unknown", " ").concat(null != r.version && "" !== r.version ? r.version : "unknown"),
            l = new a.default("Connection(".concat(e, ")"));
        return h.BROWSER_SUPPORTS_UNIFIED_PLAN ? (l.info("Using Unified Plan (".concat(o, ")")), new _.default(e, t, n, s)) : (l.info("Using Plan B (".concat(o, ")")), new i(e, t, n, s))
    }
    i = class extends l.default {
        destroy() {
            super.destroy(), this.pc.close()
        }
        setCodecs(e, t, n) {
            var i, s, r;
            let a;
            (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) && (a = this.codecs.find(t => t.name === e), this.fpc.audioCodec = e, this.fpc.audioPayloadType = null !== (i = null == a ? void 0 : a.payloadType) && void 0 !== i ? i : 0, a = this.codecs.find(e => e.name === t), this.fpc.videoCodec = t, this.fpc.videoPayloadType = null !== (s = null == a ? void 0 : a.payloadType) && void 0 !== s ? s : 0, this.fpc.rtxPayloadType = null !== (r = null == a ? void 0 : a.rtxPayloadType) && void 0 !== r ? r : 0, this.pc.negotiationNeeded())
        }
        setStream(e) {
            this.fpc.direction = null != e ? f.Directions.SENDRECV : f.Directions.SENDONLY, this.pc.setStream(null != e ? e : null)
        }
        createUser(e, t, n) {
            var i;
            if (0 === t) {
                this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
                return
            }
            this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (i = null == n ? void 0 : n.join(",")) && void 0 !== i ? i : 0));
            let s = null != n && n.length > 0 ? n[0] : 0;
            this.fpc.addStream(e, t, s)
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
            super(e, t, n, i), this.codecs = [], this.logger = new a.default("Connection(".concat(e, ")"));
            let s = new u.default;
            s.on("answer", e => this.pc.setRemoteDescription(e).catch(e => this.logger.error("Failed to set remote description (answer): ".concat(e)))), s.on("offer", e => {
                this.pc.setRemoteDescription(e).then(() => this.pc.createAnswer()).then(e => this.fpc.setRemoteDescription(e)).catch(e => this.logger.error("Failed to set remote description (offer): ".concat(e)))
            }), s.direction = null != this.input.stream ? f.Directions.SENDRECV : f.Directions.SENDONLY, this.fpc = s;
            let r = new c.default(this.voiceBitrate);
            r.on("addtrack", (e, t) => this.createOutput(g(e), t)), r.on("removetrack", (e, t) => this.destroyOutput(g(e), t)), r.once("connected", () => {
                this.input.reset(), this.setConnectionState(E.ConnectionStates.CONNECTED), this.on(o.BaseConnectionEvent.Stats, this.handleStats), this.input.on(d.InputEvent.VoiceActivity, this.handleVoiceActivity)
            }), r.on("connecting", () => this.setConnectionState(E.ConnectionStates.DTLS_CONNECTING)), r.on("checking", () => this.setConnectionState(E.ConnectionStates.ICE_CHECKING)), r.on("failed", () => this.setConnectionState(E.ConnectionStates.NO_ROUTE)), r.on("disconnected", () => this.setConnectionState(E.ConnectionStates.DISCONNECTED)), r.on("closed", () => this.setConnectionState(E.ConnectionStates.DISCONNECTED)), r.on("offer", e => {
                let {
                    sdp: t
                } = e, {
                    outboundStreams: n,
                    codecs: i,
                    audioSSRC: r,
                    videoSSRC: a,
                    rtxSSRC: l
                } = (0, f.extractSDP)(t);
                this.codecs = i;
                let u = (0, f.getExtensions)(t);
                s.outboundStreams = n, this.audioSSRC = r, s.extensions = u, (this.videoStreamParameters[0].ssrc !== a || this.videoStreamParameters[0].rtxSsrc !== l || !this.videoReady) && (this.videoStreamParameters[0].ssrc = a, this.videoStreamParameters[0].rtxSsrc = l, this.emit(o.BaseConnectionEvent.Video, this.ids.userId, this.input.getVideoStreamId(), this.audioSSRC, this.videoStreamParameters[0].ssrc, this.videoStreamParameters[0].rtxSsrc, this.videoStreamParameters), this.videoReady = !0)
            }), r.once("offer", e => {
                let {
                    sdp: t
                } = e;
                this.emit(o.BaseConnectionEvent.Connected, "webrtc", (0, f.truncateSDP)(t))
            }), null != this.input.stream ? r.setStream(this.input.stream) : r.negotiationNeeded(), this.pc = r
        }
    }
}