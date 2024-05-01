function(e, t, n) {
    "use strict";
    n.r(t), n("724458");
    var i, r, s, a, o = n("442837"),
        l = n("46973"),
        u = n("570140"),
        d = n("581883"),
        _ = n("131951"),
        c = n("944486"),
        E = n("594174"),
        I = n("647177");
    let T = !1,
        f = null,
        S = !1,
        h = {};

    function A(e) {
        var t;
        let n = E.default.getCurrentUser();
        if (null == n) return !1;
        let i = null != e ? e : (0, I.getVideoBackgroundOptionFromProto)(null === (t = d.default.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
        return null != c.default.getVoiceChannelId() && _.default.isVideoEnabled() && null != i
    }

    function m() {
        f !== c.default.getVoiceChannelId() && (S = !1), A() && (S = !0), f = c.default.getVoiceChannelId()
    }
    class N extends(i = o.default.Store) {
        initialize() {
            this.waitFor(d.default, c.default, _.default), this.syncWith([c.default, _.default], m)
        }
        get videoFilterAssets() {
            return h
        }
        get hasBeenApplied() {
            return T
        }
        get hasUsedBackgroundInCall() {
            return S
        }
    }
    a = "VideoBackgroundStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new N(u.default, {
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
            A(t) && (S = !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            l.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in t && (T = !0)
        }
    })
}