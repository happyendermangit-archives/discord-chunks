function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFPSText: function() {
            return m
        },
        getMaxQuality: function() {
            return y
        },
        getResolutionText: function() {
            return p
        },
        isPremiumFPS: function() {
            return _
        },
        isPremiumResolution: function() {
            return d
        },
        trackStreamSettingsUpdate: function() {
            return I
        }
    });
    var r = n("306912"),
        o = n("545072"),
        i = n("208454"),
        a = n("870331"),
        u = n("281767"),
        s = n("589280"),
        l = n("868615"),
        c = n("439386"),
        f = n("941504");

    function d(e) {
        if (null != e) {
            var t = e.maxResolution.type === c.ResolutionTypes.SOURCE ? s.ApplicationStreamResolutions.RESOLUTION_SOURCE : e.maxResolution.height,
                n = (0, s.getApplicationResolution)(t);
            return (0, s.getApplicationFramerate)(e.maxFrameRate) !== s.ApplicationStreamFPS.FPS_5 && null == s.ApplicationStreamSettingRequirements.find(function(e) {
                return e.resolution === n && e.fps !== s.ApplicationStreamFPS.FPS_5 && !E(e)
            })
        }
    }

    function _(e) {
        if (null != e) {
            var t = (0, s.getApplicationFramerate)(e.maxFrameRate);
            return null == s.ApplicationStreamSettingRequirements.find(function(e) {
                return e.fps === t && !E(e)
            })
        }
    }

    function E(e) {
        return null != e.quality || null != e.guildPremiumTier
    }

    function p(e) {
        return e.type === c.ResolutionTypes.SOURCE ? f.default.Messages.SCREENSHARE_SOURCE : f.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
            resolution: e.height
        })
    }

    function m(e) {
        return f.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
            fps: e
        })
    }

    function y(e) {
        return null == e.maxResolution || null == e.maxFrameRate ? null : {
            maxFrameRate: e.maxFrameRate,
            maxResolution: e.maxResolution
        }
    }

    function I(e, t, n) {
        var c, f, d, _ = (c = e, f = t, d = n, s.ApplicationStreamSettingRequirements.find(function(e) {
                return (null == e.preset || e.preset === c) && e.resolution === f && e.fps === d
            })),
            E = i.default.getCurrentUser(),
            p = o.default.getGuildId(),
            m = null != p ? r.default.getGuild(p) : null;
        a.default.track(u.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
            user_premium_tier: null == E ? void 0 : E.premiumType,
            guild_premium_tier: null == m ? void 0 : m.premiumTier,
            stream_quality_user_premium_tier: (null == _ ? void 0 : _.quality) != null ? l.StreamQualitiesToPremiumType[_.quality] : null,
            stream_quality_guild_premium_tier: null == _ ? void 0 : _.guildPremiumTier,
            stream_quality_preset: e,
            stream_quality_resolution: t,
            stream_quality_frame_rate: n
        })
    }
}