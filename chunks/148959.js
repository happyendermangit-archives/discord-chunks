function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GoLiveQualityManagerEvent: function() {
            return i
        },
        default: function() {
            return l
        }
    }), n("653041"), n("47120");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("47770");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(i || (i = {})).RequestedSSRCsUpdate = "requested-ssrcs-update";
    class l extends a.default {
        setUserID(e) {
            this.userId = e
        }
        updateAudioAndVideoStreamInfo(e, t) {
            this.audioSSRC = e, this.videoStreams = t, this.update()
        }
        setGoLiveStreamFocused(e) {
            this.focused = e, this.update()
        }
        update() {
            if (null != this.userId) {
                let e = [];
                if (this.focused) {
                    let t = s().maxBy(this.videoStreams, e => e.quality);
                    null != t && e.push(t.ssrc)
                } else {
                    let t = s().minBy(this.videoStreams, e => e.quality);
                    null != t && e.push(t.ssrc)
                }
                this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, e)
            }
        }
        constructor(...e) {
            super(...e), o(this, "userId", void 0), o(this, "videoStreams", []), o(this, "audioSSRC", 0), o(this, "focused", !1)
        }
    }
}