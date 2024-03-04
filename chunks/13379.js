function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var i, s = n("44170"),
        r = n("657869"),
        a = n("324304"),
        o = n("353927");
    let l = {
        voiceActivityDetection: !0,
        offerToReceiveAudio: !0,
        offerToReceiveVideo: !1,
        iceRestart: !1
    };
    i = class extends s.EventEmitter {
        stop() {
            for (let e of (this.pc1.close(), this.pc2.close(), this.input.destroy(), Object.keys(this.outputs))) this.destroyOutput(e)
        }
        setAudioSource(e) {
            this.input.setSource(e)
        }
        setAudioSink(e) {
            for (let t of (this.sinkId = e, Object.keys(this.outputs))) this.outputs[t].setSinkId(e)
        }
        setNoiseCancellation(e) {
            this.input.noiseCancellation = e
        }
        createOutput(e, t) {
            let n = this.outputs[e];
            null == n && ((n = new a.default(this.userId, this.audioContext)).mute = !1, n.volume = 100, n.setSpeakingFlags(o.SpeakingFlags.VOICE), n.setSinkId(this.sinkId), this.outputs[e] = n), n.addTrack(t), n.play()
        }
        destroyOutput(e, t) {
            let n = this.outputs[e];
            null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e])
        }
        handshake() {
            let e = e => {
                let t = e.sdp.split("\n");
                for (let e = 0; e < t.length; e++) {
                    let n = t[e];
                    if (/^a=mid:/.test(n)) break
                }
                return e.sdp = t.join("\n"), e
            };
            this.pc1.createOffer(l).then(t => {
                this.pc1.setLocalDescription(e(t)).then(() => {
                    this.pc2.setRemoteDescription(t).then(() => {
                        this.pc2.createAnswer().then(e => {
                            this.pc2.setLocalDescription(e).then(() => {
                                this.pc1.setRemoteDescription(e)
                            })
                        })
                    })
                })
            })
        }
        constructor(e, t, n, i = "") {
            super(), this.senders = [], this.outputs = {}, this.handleStream = () => {
                let e = this.input.getDelayedStream();
                this.senders.forEach(e => this.pc1.removeTrack(e)), this.senders = [...e.getAudioTracks().map(t => this.pc1.addTrack(t, e))], this.handshake()
            }, this.handleTrack = e => {
                e.streams[0].getTracks().forEach(e => {
                    this.createOutput(e.id, e), e.onmute = () => {
                        this.destroyOutput(e.id, e)
                    }
                })
            }, this.userId = i, this.sinkId = n, this.pc1 = new RTCPeerConnection, this.pc1.onicecandidate = e => {
                null != e.candidate && this.pc2.addIceCandidate(e.candidate)
            }, this.pc2 = new RTCPeerConnection, this.pc2.onicecandidate = e => {
                null != e.candidate && this.pc1.addIceCandidate(e.candidate)
            }, this.pc2.ontrack = this.handleTrack, this.input = new r.default(e), this.input.setSource(t), this.input.on("stream", this.handleStream), this.input.enable(), this.audioContext = e
        }
    }
}