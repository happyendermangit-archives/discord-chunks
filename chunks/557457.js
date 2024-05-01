function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFPSText: function() {
            return f
        },
        getMaxQuality: function() {
            return S
        },
        getResolutionText: function() {
            return T
        },
        isPremiumFPS: function() {
            return E
        },
        isPremiumResolution: function() {
            return c
        },
        trackStreamSettingsUpdate: function() {
            return h
        }
    });
    var i = n("430824"),
        r = n("19780"),
        a = n("594174"),
        s = n("626135"),
        o = n("981631"),
        l = n("37113"),
        u = n("474936"),
        d = n("65154"),
        _ = n("689938");

    function c(e) {
        if (null == e) return;
        let t = e.maxResolution.type === d.ResolutionTypes.SOURCE ? l.ApplicationStreamResolutions.RESOLUTION_SOURCE : e.maxResolution.height,
            n = (0, l.getApplicationResolution)(t);
        return (0, l.getApplicationFramerate)(e.maxFrameRate) !== l.ApplicationStreamFPS.FPS_5 && null == l.ApplicationStreamSettingRequirements.find(e => e.resolution === n && e.fps !== l.ApplicationStreamFPS.FPS_5 && !I(e))
    }

    function E(e) {
        if (null == e) return;
        let t = (0, l.getApplicationFramerate)(e.maxFrameRate);
        return null == l.ApplicationStreamSettingRequirements.find(e => e.fps === t && !I(e))
    }

    function I(e) {
        return null != e.quality || null != e.guildPremiumTier
    }

    function T(e) {
        return e.type === d.ResolutionTypes.SOURCE ? _.default.Messages.SCREENSHARE_SOURCE : _.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
            resolution: e.height
        })
    }

    function f(e) {
        return _.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
            fps: e
        })
    }

    function S(e) {
        return null == e.maxResolution || null == e.maxFrameRate ? null : {
            maxFrameRate: e.maxFrameRate,
            maxResolution: e.maxResolution
        }
    }

    function h(e, t, n) {
        var d, _, c;
        let E = (d = e, _ = t, c = n, l.ApplicationStreamSettingRequirements.find(e => (null == e.preset || e.preset === d) && e.resolution === _ && e.fps === c)),
            I = a.default.getCurrentUser(),
            T = r.default.getGuildId(),
            f = null != T ? i.default.getGuild(T) : null;
        s.default.track(o.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
            user_premium_tier: null == I ? void 0 : I.premiumType,
            guild_premium_tier: null == f ? void 0 : f.premiumTier,
            stream_quality_user_premium_tier: (null == E ? void 0 : E.quality) != null ? u.StreamQualitiesToPremiumType[E.quality] : null,
            stream_quality_guild_premium_tier: null == E ? void 0 : E.guildPremiumTier,
            stream_quality_preset: e,
            stream_quality_resolution: t,
            stream_quality_frame_rate: n
        })
    }
}