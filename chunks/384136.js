function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("411104");
    var i = n("836560"),
        r = n("376398");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class a extends i.EventEmitter {
        static async get(e, t) {
            var n;
            let i = {
                ...e,
                frameRate: 30
            };
            if ((null === (n = navigator.mediaDevices) || void 0 === n ? void 0 : n.getDisplayMedia) != null) return new a(await navigator.mediaDevices.getDisplayMedia({
                audio: t,
                video: i
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
            super(), s(this, "id", void 0), s(this, "stream", void 0), s(this, "streamId", void 0), e.getVideoTracks().forEach(e => {
                e.onended = () => {
                    this.emit("desktopsourceend")
                }
            }), this.id = e.getVideoTracks()[0].label, this.stream = e, this.streamId = (0, r.registerVideoStream)(e)
        }
    }
}