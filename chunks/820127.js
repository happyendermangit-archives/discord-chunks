function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("70102");
    var i, s = n("44170"),
        r = n("441822");
    i = class e extends s.EventEmitter {
        static async get(t, n) {
            var i;
            let s = {
                ...t,
                frameRate: 30
            };
            if ((null === (i = navigator.mediaDevices) || void 0 === i ? void 0 : i.getDisplayMedia) != null) return new e(await navigator.mediaDevices.getDisplayMedia({
                audio: n,
                video: s
            }));
            throw Error("UNKNOWN")
        }
        destroy() {
            this.removeAllListeners(), (0, r.unregisterVideoStream)(this.streamId), this.stream.getTracks().forEach(e => e.stop())
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
            }), this.id = e.getVideoTracks()[0].label, this.stream = e, this.streamId = (0, r.registerVideoStream)(e)
        }
    }
}