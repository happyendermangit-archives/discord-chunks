function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("70102");
    var i, r = n("44170"),
        s = n("441822");
    i = class e extends r.EventEmitter {
        static async get(t, n) {
            var i;
            let r = {
                ...t,
                frameRate: 30
            };
            if ((null === (i = navigator.mediaDevices) || void 0 === i ? void 0 : i.getDisplayMedia) != null) return new e(await navigator.mediaDevices.getDisplayMedia({
                audio: n,
                video: r
            }));
            throw Error("UNKNOWN")
        }
        destroy() {
            this.removeAllListeners(), (0, s.unregisterVideoStream)(this.streamId), this.stream.getTracks().forEach(e => e.stop())
        }
        reset() {
            this.refreshSpeaking()
        }
        getStreamId() {
            return this.streamId
        }
        refreshSpeaking() {
            this.emit("speaking", this.stream.getAudioTracks().some(e => e.enabled))
        }
        constructor(e) {
            super(), e.getVideoTracks().forEach(e => {
                e.onended = () => {
                    this.emit("desktopsourceend")
                }
            }), this.id = e.getVideoTracks()[0].label, this.stream = e, this.streamId = (0, s.registerVideoStream)(e)
        }
    }
}