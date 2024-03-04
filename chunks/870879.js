function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("808653");
    var i = n("446674"),
        s = n("773364"),
        r = n("913144"),
        a = n("374363"),
        o = n("42887"),
        l = n("18494"),
        u = n("697218"),
        d = n("239448");
    let c = !1,
        f = null,
        _ = !1,
        h = {};

    function E(e) {
        var t;
        let n = u.default.getCurrentUser();
        if (null == n) return !1;
        let i = null != e ? e : (0, d.getVideoBackgroundOptionFromProto)(null === (t = a.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
        return null != l.default.getVoiceChannelId() && o.default.isVideoEnabled() && null != i
    }

    function g() {
        f !== l.default.getVoiceChannelId() && (_ = !1), E() && (_ = !0), f = l.default.getVoiceChannelId()
    }
    class m extends i.default.Store {
        initialize() {
            this.waitFor(a.default, l.default, o.default), this.syncWith([l.default, o.default], g)
        }
        get videoFilterAssets() {
            return h
        }
        get hasBeenApplied() {
            return c
        }
        get hasUsedBackgroundInCall() {
            return _
        }
    }
    m.displayName = "VideoBackgroundStore";
    var p = new m(r.default, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
            let {
                assets: t
            } = e;
            h = t.reduce((e, t) => ({
                ...e,
                [t.id]: t
            }), {})
        },
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
            let {
                videoFilterAsset: t
            } = e;
            h = {
                ...h,
                [t.id]: t
            }
        },
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
            let {
                videoFilterAsset: t
            } = e;
            h = {
                ...h
            }, delete h[t.id]
        },
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
            let {
                backgroundOption: t
            } = e;
            E(t) && (_ = !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            s.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in t && (c = !0)
        }
    })
}