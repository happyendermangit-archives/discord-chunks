function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("188129"),
        o = n("384433"),
        i = n("439386");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = new r.Logger("ConnectionEventFramerateReducer"),
        l = function() {
            var e, t, n;

            function r(e, t) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), u(this, "connection", void 0), u(this, "sinkWants", void 0), u(this, "framerateReductionTimeout", void 0), u(this, "handleSpeaking", void 0), u(this, "handleSelfMute", void 0), this.connection = e, this.sinkWants = t, this.handleSpeaking = function(e, t) {
                    e === n.connection.ids.userId && n.userSpeakingChange(t === i.SpeakingFlags.NONE)
                }, this.handleSelfMute = function(e) {
                    !n.connection.hasDesktopSource() && (n.destroyFramerateScaleFactorTimers(), n.sinkWants.isMuted = e, n.updateRemoteWantsFramerate())
                }, e.on(o.BaseConnectionEvent.Speaking, this.handleSpeaking), e.on(o.BaseConnectionEvent.Mute, this.handleSelfMute), this.initialize()
            }
            return e = r, t = [{
                key: "initialize",
                value: function() {
                    this.userSpeakingChange(!0)
                }
            }, {
                key: "userSpeakingChange",
                value: function(e) {
                    var t = this;
                    if (!this.connection.hasDesktopSource()) {
                        if (this.destroyFramerateScaleFactorTimers(), !e) {
                            this.sinkWants.isMuted && (this.sinkWants.isMuted = !1, this.updateRemoteWantsFramerate());
                            return
                        }
                        this.framerateReductionTimeout = setTimeout(function() {
                            !t.connection.destroyed && (s.info("BaseConnection.userSpeakingChange: Reduced framerate after ".concat(i.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT, " ms.")), t.framerateReductionTimeout = void 0, t.sinkWants.isMuted = !0, t.updateRemoteWantsFramerate())
                        }, i.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT)
                    }
                }
            }, {
                key: "destroyFramerateScaleFactorTimers",
                value: function() {
                    "number" == typeof this.framerateReductionTimeout && (clearTimeout(this.framerateReductionTimeout), this.framerateReductionTimeout = void 0)
                }
            }, {
                key: "updateRemoteWantsFramerate",
                value: function() {
                    this.connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"])
                }
            }, {
                key: "destroy",
                value: function() {
                    this.destroyFramerateScaleFactorTimers()
                }
            }], a(e.prototype, t), n && a(e, n), r
        }()
}