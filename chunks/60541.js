function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseSpeedTesterEvent: function() {
            return r.BaseSpeedTesterEvent
        },
        default: function() {
            return l
        }
    });
    var i = n("47770"),
        r = n("11934"),
        s = n("65154");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = 0;
    class l extends i.default {
        destroy() {
            this.destroyed = !0, this.setConnectionState(s.ConnectionStates.DISCONNECTED), this.emit(r.BaseSpeedTesterEvent.Destroy, this), this.removeAllListeners()
        }
        setConnectionState(e) {
            this.connectionState = e, this.emit(r.BaseSpeedTesterEvent.ConnectionStateChange, this.connectionState)
        }
        initializeStreamParameters(e) {
            this.videoStreamParameters = e.filter(e => e.type === s.MediaTypes.TEST).map(e => {
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
            super(), a(this, "mediaEngineConnectionId", "WebRTC-".concat(o++)), a(this, "userId", void 0), a(this, "streamUserId", void 0), a(this, "destroyed", !1), a(this, "audioSSRC", 0), a(this, "videoStreamParameters", []), a(this, "connectionState", s.ConnectionStates.CONNECTING), this.userId = e
        }
    }
}