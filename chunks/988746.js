function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("259443"),
        r = n("46973"),
        s = n("65154");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = new i.Logger("ConnectionEventFramerateReducer");
    class l {
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
                    !this.connection.destroyed && (o.info("BaseConnection.userSpeakingChange: Reduced framerate after ".concat(s.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT, " ms.")), this.framerateReductionTimeout = void 0, this.sinkWants.isMuted = !0, this.updateRemoteWantsFramerate())
                }, s.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT)
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
            a(this, "connection", void 0), a(this, "sinkWants", void 0), a(this, "framerateReductionTimeout", void 0), a(this, "handleSpeaking", void 0), a(this, "handleSelfMute", void 0), this.connection = e, this.sinkWants = t, this.handleSpeaking = (e, t) => {
                e === this.connection.ids.userId && this.userSpeakingChange(t === s.SpeakingFlags.NONE)
            }, this.handleSelfMute = e => {
                !this.connection.hasDesktopSource() && (this.destroyFramerateScaleFactorTimers(), this.sinkWants.isMuted = e, this.updateRemoteWantsFramerate())
            }, e.on(r.BaseConnectionEvent.Speaking, this.handleSpeaking), e.on(r.BaseConnectionEvent.Mute, this.handleSelfMute), this.initialize()
        }
    }
}