function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InputEvent: function() {
            return InputEvent
        },
        default: function() {
            return i
        }
    });
    var InputEvent, InputEvent, i, r = n("595275"),
        s = n("657869"),
        a = n("555013");
    (InputEvent = InputEvent || (InputEvent = {})).Stream = "stream", InputEvent.Video = "video", InputEvent.Mute = "mute", InputEvent.VoiceActivity = "voiceactivity", InputEvent.DesktopSourceEnd = "desktopsourceend", InputEvent.Speaking = "speaking", InputEvent.AudioPermission = "audio-permission", InputEvent.VideoPermission = "video-permission", InputEvent.AddVideoTrack = "add-video-track", i = class extends r.default {
        destroy() {
            this.removeAllListeners(), this.destroyStreams()
        }
        destroyStreams() {
            var e;
            this.audio.destroy(), this.video.destroy(), null === (e = this.desktop) || void 0 === e || e.destroy()
        }
        setDesktop(e) {
            this.destroyStreams(), null == e || e.addListener("desktopsourceend", this.handleDesktopSourceEnd), null == e || e.addListener("speaking", this.handleSpeaking), this.desktop = e, this.mergeStreams()
        }
        reset() {
            var e;
            this.audio.reset(), null === (e = this.desktop) || void 0 === e || e.reset()
        }
        getVideoStream() {
            return null != this.desktop ? this.desktop.stream : this.video.stream
        }
        getVideoStreamId() {
            return null != this.desktop ? this.desktop.getStreamId() : this.video.getStreamId()
        }
        enableAudioInput() {
            this.audio.enable()
        }
        setAudioMode(e, t) {
            this.audio.setMode(e, t)
        }
        setMute(e) {
            this.audio.mute = e, this.emit("mute", e)
        }
        setEchoCancellation(e) {
            this.audio.echoCancellation = e
        }
        setNoiseSuppression(e) {
            this.audio.noiseSuppression = e
        }
        setNoiseCancellation(e) {
            this.audio.noiseCancellation = e
        }
        setAutomaticGainControl(e) {
            this.audio.automaticGainControl = e
        }
        setPTTActive(e) {
            this.audio.setPTTActive(e)
        }
        setAudioSource(e) {
            this.audio.setSource(e)
        }
        setVideoSource(e) {
            this.video.setSource(e)
        }
        mute() {
            return this.audio.mute
        }
        resumeAudio() {
            this.audio.resume()
        }
        getAudioState() {
            return this.audio.state
        }
        hasDesktopSource() {
            return null != this.desktop
        }
        constructor(e) {
            super(), this.video = new a.default, this.desktop = null, this.mergeStreams = () => {
                var e, t, n;
                let i = new MediaStream;
                return null != this.desktop ? (null === (e = this.desktop.stream) || void 0 === e || e.getTracks().forEach(e => i.addTrack(e)), this.desktop.refreshSpeaking()) : (null === (t = this.audio.stream) || void 0 === t || t.getAudioTracks().forEach(e => i.addTrack(e)), null === (n = this.video.stream) || void 0 === n || n.getVideoTracks().forEach(e => i.addTrack(e))), this.stream = i, this.emit("stream", i), this.emit("video", this.getVideoStreamId()), i
            }, this.handleVoiceActivity = e => {
                this.emit("voiceactivity", e)
            }, this.handleDesktopSourceEnd = () => {
                this.emit("desktopsourceend")
            }, this.handleSpeaking = e => {
                this.emit("speaking", e)
            }, this.handleAudioPermission = e => {
                this.emit("audio-permission", e)
            }, this.handleVideoPermission = e => {
                this.emit("video-permission", e)
            }, this.audio = new s.default(e), this.audio.addListener("voiceactivity", this.handleVoiceActivity), this.audio.addListener("speaking", this.handleSpeaking), this.audio.addListener("stream", this.mergeStreams), this.audio.addListener("permission", this.handleAudioPermission), this.video.addListener("stream", this.mergeStreams), this.video.addListener("permission", this.handleVideoPermission), this.video.addListener("add-video-track", e => this.emit("add-video-track", e))
        }
    }
}