function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("992774"),
        r = n("846027"),
        a = n("227196"),
        s = n("236035"),
        o = n("65154");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = new class e {
        nativeMuteChanged(e, t) {
            let {
                airpodsMuteSupported: n
            } = a.default.getCurrentConfig({
                location: "NativeMuteManager nativeMuteChanged"
            }, {
                autoTrackExposure: !0
            });
            if (!!n) {
                if (e !== o.MediaEngineContextTypes.STREAM) {
                    if (s.default.hasActiveCall()) r.default.setSelfMute(o.MediaEngineContextTypes.DEFAULT, t);
                    else {
                        if (this.nativeUnmuteDebounce) {
                            this.nativeUnmuteDebounce = !1;
                            return
                        }
                        this.needToUnmuteNative = !0, r.default.toggleSelfMute({
                            playSoundEffect: !1
                        })
                    }
                }
            }
        }
        updateNativeMute(e) {
            var t, n;
            let {
                airpodsMuteSupported: r
            } = a.default.getCurrentConfig({
                location: "NativeMuteManager updateNativeMute"
            }, {
                autoTrackExposure: !0
            });
            if (!!r && e !== o.MediaEngineContextTypes.STREAM && !!this.needToUnmuteNative) !s.default.hasActiveCall() && (this.needToUnmuteNative = !1, this.nativeUnmuteDebounce = !0, null === (t = (n = (0, i.getVoiceEngine)()).setNativeMuteState) || void 0 === t || t.call(n, !1))
        }
        constructor() {
            l(this, "nativeUnmuteDebounce", !1), l(this, "needToUnmuteNative", !1)
        }
    }
}