function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyMediaFilterSettings: function() {
            return f
        },
        deleteVideoFilterAsset: function() {
            return I
        },
        errorApplyingMediaFilterSettings: function() {
            return h
        },
        fetchVideoFilterAssets: function() {
            return c
        },
        saveLastUsedBackgroundOption: function() {
            return T
        },
        startApplyMediaFilterSettings: function() {
            return S
        },
        uploadVideoFilterAsset: function() {
            return E
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("675478"),
        a = n("131951"),
        o = n("594174"),
        l = n("932724"),
        u = n("647177"),
        d = n("901757"),
        _ = n("981631");
    async function c() {
        let e = await i.HTTP.get(_.Endpoints.VIDEO_FILTER_ASSETS);
        return r.default.dispatch({
            type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
            assets: e.body
        }), e
    }
    async function E(e, t, n) {
        try {
            let s = await i.HTTP.post({
                url: _.Endpoints.VIDEO_FILTER_ASSETS,
                body: {
                    type: t,
                    asset: e,
                    last_used: null == n ? void 0 : n.toISOString()
                }
            });
            return r.default.dispatch({
                type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
                videoFilterAsset: s.body
            }), s.body
        } catch (e) {
            throw new d.default(e)
        }
    }
    async function I(e) {
        await i.HTTP.del(_.Endpoints.VIDEO_FILTER_ASSET(e.id));
        let t = (0, l.getLastUsedVideoBackgroundOption)(o.default.getCurrentUser());
        (0, u.isCustomBackgroundOption)(t) && t.id === e.id && T(null), r.default.dispatch({
            type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
            videoFilterAsset: e
        })
    }
    async function T(e) {
        if (await s.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", t => {
                t.videoBackgroundFilterDesktop = (0, u.getVideoBackgroundProtoFromOption)(e)
            }, s.UserSettingsDelay.FREQUENT_USER_ACTION), (0, u.isCustomBackgroundOption)(e)) {
            let t = await i.HTTP.post(_.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(e.id));
            r.default.dispatch({
                type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                backgroundOption: t.body
            })
        } else r.default.dispatch({
            type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
            backgroundOption: e
        })
    }

    function f(e) {
        a.default.isSupported() && r.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
            settings: e
        })
    }

    function S() {
        a.default.isSupported() && r.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
        })
    }

    function h() {
        r.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
        })
    }
}