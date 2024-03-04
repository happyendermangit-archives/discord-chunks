function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchVideoFilterAssets: function() {
            return f
        },
        uploadVideoFilterAsset: function() {
            return _
        },
        deleteVideoFilterAsset: function() {
            return h
        },
        saveLastUsedBackgroundOption: function() {
            return E
        },
        applyMediaFilterSettings: function() {
            return g
        },
        startApplyMediaFilterSettings: function() {
            return m
        },
        errorApplyingMediaFilterSettings: function() {
            return p
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("872173"),
        a = n("42887"),
        o = n("697218"),
        l = n("659558"),
        u = n("239448"),
        d = n("284231"),
        c = n("49111");
    async function f() {
        let e = await i.default.get(c.Endpoints.VIDEO_FILTER_ASSETS);
        return s.default.dispatch({
            type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
            assets: e.body
        }), e
    }
    async function _(e, t, n) {
        try {
            let r = await i.default.post({
                url: c.Endpoints.VIDEO_FILTER_ASSETS,
                body: {
                    type: t,
                    asset: e,
                    last_used: null == n ? void 0 : n.toISOString()
                }
            });
            return s.default.dispatch({
                type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
                videoFilterAsset: r.body
            }), r.body
        } catch (e) {
            throw new d.default(e)
        }
    }
    async function h(e) {
        await i.default.delete(c.Endpoints.VIDEO_FILTER_ASSET(e.id));
        let t = (0, l.getLastUsedVideoBackgroundOption)(o.default.getCurrentUser());
        (0, u.isCustomBackgroundOption)(t) && t.id === e.id && E(null), s.default.dispatch({
            type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
            videoFilterAsset: e
        })
    }
    async function E(e) {
        if (await r.PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", t => {
                t.videoBackgroundFilterDesktop = (0, u.getVideoBackgroundProtoFromOption)(e)
            }, r.UserSettingsDelay.FREQUENT_USER_ACTION), (0, u.isCustomBackgroundOption)(e)) {
            let t = await i.default.post(c.Endpoints.VIDEO_FILTER_ASSET_LAST_USED(e.id));
            s.default.dispatch({
                type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
                backgroundOption: t.body
            })
        } else s.default.dispatch({
            type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
            backgroundOption: e
        })
    }

    function g(e) {
        a.default.isSupported() && s.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
            settings: e
        })
    }

    function m() {
        a.default.isSupported() && s.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
        })
    }

    function p() {
        s.default.dispatch({
            type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
        })
    }
}