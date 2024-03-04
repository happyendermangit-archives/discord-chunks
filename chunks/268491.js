function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("686298"),
        a = n("353927");
    let o = r.ApplicationStreamPresets.PRESET_VIDEO,
        l = r.ApplicationStreamResolutions.RESOLUTION_720,
        u = r.ApplicationStreamFPS.FPS_30,
        d = !0;
    class c extends i.default.PersistedStore {
        initialize(e) {
            if (null != e) {
                var t, n;
                o = null !== (t = e.preset) && void 0 !== t ? t : r.ApplicationStreamPresets.PRESET_VIDEO, l = e.resolution, u = e.fps, d = null === (n = e.soundshareEnabled) || void 0 === n || n
            }
        }
        getState() {
            return {
                preset: o,
                resolution: l,
                fps: u,
                soundshareEnabled: d
            }
        }
    }
    c.displayName = "ApplicationStreamingSettingsStore", c.persistKey = "ApplicationStreamingSettingStore";
    var f = new c(s.default, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            let {
                settings: t
            } = e;
            if ((null == t ? void 0 : t.context) === a.MediaEngineContextTypes.STREAM) {
                if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
                l = t.qualityOptions.resolution, u = t.qualityOptions.frameRate
            }
        },
        STREAM_UPDATE_SETTINGS: function(e) {
            let {
                preset: t,
                resolution: n,
                frameRate: i,
                soundshareEnabled: s
            } = e, r = !1;
            return null != t && (o = t, r = !0), null != n && (l = n, r = !0), null != i && (u = i, r = !0), null != s && (d = s, r = !0), r
        }
    })
}