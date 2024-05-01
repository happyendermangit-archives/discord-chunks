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
        a = n("65154");

    function s(e, t, n) {
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
            super(), s(this, "mediaEngineConnectionId", "WebRTC-".concat(o++)), s(this, "userId", void 0), s(this, "streamUserId", void 0), s(this, "destroyed", !1), s(this, "audioSSRC", 0), s(this, "videoStreamParameters", []), s(this, "connectionState", a.ConnectionStates.CONNECTING), this.userId = e
        }
    }
}