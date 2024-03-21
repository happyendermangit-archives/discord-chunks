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
        _ = null,
        f = !1,
        E = {};

    function h(e) {
        var t;
        let n = u.default.getCurrentUser();
        if (null == n) return !1;
        let i = null != e ? e : (0, d.getVideoBackgroundOptionFromProto)(null === (t = a.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
        return null != l.default.getVoiceChannelId() && o.default.isVideoEnabled() && null != i
    }

    function g() {
        _ !== l.default.getVoiceChannelId() && (f = !1), h() && (f = !0), _ = l.default.getVoiceChannelId()
    }
    class m extends i.default.Store {
        initialize() {
            this.waitFor(a.default, l.default, o.default), this.syncWith([l.default, o.default], g)
        }
        get videoFilterAssets() {
            return E
        }
        get hasBeenApplied() {
            return c
        }
        get hasUsedBackgroundInCall() {
            return f
        }
    }
    m.displayName = "VideoBackgroundStore";
    var p = new m(r.default, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
            let {
                assets: t
            } = e;
            E = t.reduce((e, t) => ({
                ...e,
                [t.id]: t
            }), {})
        },
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
            let {
                videoFilterAsset: t
            } = e;
            E = {
                ...E,
                [t.id]: t
            }
        },
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
            let {
                videoFilterAsset: t
            } = e;
            E = {
                ...E
            }, delete E[t.id]
        },
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
            let {
                backgroundOption: t
            } = e;
            h(t) && (f = !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            s.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in t && (c = !0)
        }
    })
}