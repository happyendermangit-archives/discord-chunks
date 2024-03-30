function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OutputEvent: function() {
            return r
        },
        default: function() {
            return c
        }
    });
    var i, r, s = n("259443"),
        a = n("47770"),
        o = n("740197"),
        l = n("376398"),
        u = n("65154");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = new s.Logger("Output");
    (i = r || (r = {})).InteractionRequired = "interactionrequired", i.Speaking = "speaking", i.Video = "video";
    class c extends a.default {
        play() {
            var e;
            null === (e = this.audioElement) || void 0 === e || e.play()
        }
        destroy() {
            var e;
            null === (e = this.audioElement) || void 0 === e || e.pause(), null != this.videoStreamId && (0, l.unregisterVideoStream)(this.videoStreamId), null != this.streamSourceNode && (this.streamSourceNode.disconnect(), this.streamSourceNode = null), null != this.levelNode && (this.levelNode.disconnect(), this.levelNode.port.postMessage("close"), this.levelNode = null), this.setSpeakingFlags(u.SpeakingFlags.NONE), this.removeAllListeners()
        }
        addTrack(e) {
            if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
            if (this.stream.addTrack(e), null == this.audioElement) {
                let e = document.createElement("audio");
                e.srcObject = this.stream;
                let t = e.play();
                null != t && t.catch(() => this.emit("interactionrequired", !0)), this.audioElement = e, this.updateAudioElement()
            }
            if (null == this.levelNode && this.stream.getAudioTracks().length > 0) {
                this.streamSourceNode = this.audioContext.createMediaStreamSource(this.stream);
                try {
                    this.levelNode = new AudioWorkletNode(this.audioContext, "level-processor"), this.levelNode.port.onmessage = e => {
                        this.emit("speaking", e.data)
                    }, null != this.streamSourceNode && this.streamSourceNode.connect(this.levelNode)
                } catch (e) {
                    _.warn("Output#Failed to setup speaking indicator: ".concat(e))
                }
            }
            return "video" === e.kind && (null != this.videoStreamId && (0, l.unregisterVideoStream)(this.videoStreamId), this.stream.getVideoTracks().forEach(t => {
                e !== t && (t.discordIsTearingDown = !0, this.stream.removeTrack(t))
            }), this.videoStreamId = (0, l.registerVideoStream)(this.stream), this.emit("video", this.videoStreamId)), "audio" === e.kind && this.stream.getAudioTracks().forEach(t => {
                e !== t && (t.discordIsTearingDown = !0, this.stream.removeTrack(t))
            }), this.stream.getTracks().length
        }
        removeTrack(e) {
            return this.stream.removeTrack(e), "video" === e.kind && (null != this.videoStreamId && (0, l.unregisterVideoStream)(this.videoStreamId), this.emit("video", null)), this.stream.getTracks().length
        }
        setSinkId(e) {
            this.sinkId = e, this.updateAudioElement()
        }
        get mute() {
            return this._mute
        }
        set mute(e) {
            this._mute = e || !1, this.updateAudioElement()
        }
        get priority() {
            return (this._speakingFlags & u.SpeakingFlags.PRIORITY) === u.SpeakingFlags.PRIORITY
        }
        get volume() {
            return this._volume
        }
        set volume(e) {
            this._volume = Math.max(0, Math.min(Math.round(e), u.DEFAULT_VOLUME)), this.updateAudioElement()
        }
        get speakingFlags() {
            return this._speakingFlags
        }
        setSpeakingFlags(e) {
            this._speakingFlags !== e && (this._speakingFlags = e, this.updateAudioElement())
        }
        updateAudioElement() {
            let e = this.audioElement;
            if (null != e) {
                e.muted = this._mute, e.volume = this._volume / 100;
                let t = this.sinkId;
                null != t && o.CAN_SET_OUTPUT_DEVICES && e.setSinkId(t)
            }
        }
        constructor(e, t) {
            super(), d(this, "id", void 0), d(this, "_speakingFlags", u.SpeakingFlags.NONE), d(this, "_mute", !1), d(this, "_volume", u.DEFAULT_VOLUME), d(this, "sinkId", null), d(this, "audioElement", null), d(this, "stream", new MediaStream), d(this, "videoStreamId", null), d(this, "levelNode", null), d(this, "streamSourceNode", null), d(this, "audioContext", void 0), this.id = e, this.audioContext = t
        }
    }
}