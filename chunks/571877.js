function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseSpeedTesterEvent: function() {
            return r.BaseSpeedTesterEvent
        },
        default: function() {
            return i
        }
    });
    var i, s = n("595275"),
        r = n("372534"),
        a = n("353927");
    let o = 0;
    i = class extends s.default {
        destroy() {
            this.destroyed = !0, this.setConnectionState(a.ConnectionStates.DISCONNECTED), this.emit(r.BaseSpeedTesterEvent.Destroy, this), this.removeAllListeners()
        }
        setConnectionState(e) {
            this.connectionState = e, this.emit(r.BaseSpeedTesterEvent.ConnectionStateChange, this.connectionState)
        }
        initializeStreamParameters(e) {
            this.videoStreamParameters = e.filter(e => e.type === a.MediaTypes.TEST).map(e => {
                var t;
                return {
                    type: e.type,
                    active: e.active,
                    rid: null !== (t = e.rid) && void 0 !== t ? t : "",
                    ssrc: e.ssrc
                }
            })
        }
        constructor(e) {
            super(), this.mediaEngineConnectionId = "WebRTC-".concat(o++), this.destroyed = !1, this.audioSSRC = 0, this.videoStreamParameters = [], this.connectionState = a.ConnectionStates.CONNECTING, this.ids = e
        }
    }
}