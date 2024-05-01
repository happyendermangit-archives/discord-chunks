function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        a = n("570140"),
        s = n("37113"),
        o = n("65154");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = s.ApplicationStreamPresets.PRESET_VIDEO,
        d = s.ApplicationStreamResolutions.RESOLUTION_720,
        _ = s.ApplicationStreamFPS.FPS_30,
        c = !0;
    class E extends(i = r.default.PersistedStore) {
        initialize(e) {
            if (null != e) {
                var t, n;
                u = null !== (t = e.preset) && void 0 !== t ? t : s.ApplicationStreamPresets.PRESET_VIDEO, d = e.resolution, _ = e.fps, c = null === (n = e.soundshareEnabled) || void 0 === n || n
            }
        }
        getState() {
            return {
                preset: u,
                resolution: d,
                fps: _,
                soundshareEnabled: c
            }
        }
    }
    l(E, "displayName", "ApplicationStreamingSettingsStore"), l(E, "persistKey", "ApplicationStreamingSettingStore"), t.default = new E(a.default, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            let {
                settings: t
            } = e;
            if ((null == t ? void 0 : t.context) === o.MediaEngineContextTypes.STREAM) {
                if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
                d = t.qualityOptions.resolution, _ = t.qualityOptions.frameRate
            }
        },
        STREAM_UPDATE_SETTINGS: function(e) {
            let {
                preset: t,
                resolution: n,
                frameRate: i,
                soundshareEnabled: r
            } = e, a = !1;
            return null != t && (u = t, a = !0), null != n && (d = n, a = !0), null != i && (_ = i, a = !0), null != r && (c = r, a = !0), a
        }
    })
}