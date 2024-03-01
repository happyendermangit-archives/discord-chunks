function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, r = n("811022"),
        s = n("773364"),
        a = n("353927");
    let o = new r.default("ConnectionEventFramerateReducer");
    i = class {
        initialize() {
            this.userSpeakingChange(!0)
        }
        userSpeakingChange(e) {
            if (!this.connection.hasDesktopSource()) {
                if (this.destroyFramerateScaleFactorTimers(), !e) {
                    this.sinkWants.isMuted && (this.sinkWants.isMuted = !1, this.updateRemoteWantsFramerate());
                    return
                }
                this.framerateReductionTimeout = setTimeout(() => {
                    !this.connection.destroyed && (o.info("BaseConnection.userSpeakingChange: Reduced framerate after ".concat(a.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT, " ms.")), this.framerateReductionTimeout = void 0, this.sinkWants.isMuted = !0, this.updateRemoteWantsFramerate())
                }, a.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT)
            }
        }
        destroyFramerateScaleFactorTimers() {
            "number" == typeof this.framerateReductionTimeout && (clearTimeout(this.framerateReductionTimeout), this.framerateReductionTimeout = void 0)
        }
        updateRemoteWantsFramerate() {
            this.connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"])
        }
        destroy() {
            this.destroyFramerateScaleFactorTimers()
        }
        constructor(e, t) {
            this.connection = e, this.sinkWants = t, this.handleSpeaking = (e, t) => {
                e === this.connection.ids.userId && this.userSpeakingChange(t === a.SpeakingFlags.NONE)
            }, this.handleSelfMute = e => {
                !this.connection.hasDesktopSource() && (this.destroyFramerateScaleFactorTimers(), this.sinkWants.isMuted = e, this.updateRemoteWantsFramerate())
            }, e.on(s.BaseConnectionEvent.Speaking, this.handleSpeaking), e.on(s.BaseConnectionEvent.Mute, this.handleSelfMute), this.initialize()
        }
    }
}