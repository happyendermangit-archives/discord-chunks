function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPremiumResolution: function() {
            return _
        },
        isPremiumFPS: function() {
            return c
        },
        getResolutionText: function() {
            return m
        },
        getFPSText: function() {
            return h
        },
        getMaxQuality: function() {
            return v
        },
        trackStreamSettingsUpdate: function() {
            return E
        }
    });
    var s = n("305961"),
        i = n("945956"),
        r = n("697218"),
        a = n("599110"),
        o = n("49111"),
        d = n("686298"),
        u = n("646718"),
        l = n("353927"),
        f = n("782340");

    function _(e) {
        if (null == e) return;
        let t = e.maxResolution.type === l.ResolutionTypes.SOURCE ? d.ApplicationStreamResolutions.RESOLUTION_SOURCE : e.maxResolution.height,
            n = (0, d.getApplicationResolution)(t),
            s = (0, d.getApplicationFramerate)(e.maxFrameRate);
        return s !== d.ApplicationStreamFPS.FPS_5 && null == d.ApplicationStreamSettingRequirements.find(e => e.resolution === n && e.fps !== d.ApplicationStreamFPS.FPS_5 && !g(e))
    }

    function c(e) {
        if (null == e) return;
        let t = (0, d.getApplicationFramerate)(e.maxFrameRate);
        return null == d.ApplicationStreamSettingRequirements.find(e => e.fps === t && !g(e))
    }

    function g(e) {
        return null != e.quality || null != e.guildPremiumTier
    }

    function m(e) {
        return e.type === l.ResolutionTypes.SOURCE ? f.default.Messages.SCREENSHARE_SOURCE : f.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
            resolution: e.height
        })
    }

    function h(e) {
        return f.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
            fps: e
        })
    }

    function v(e) {
        return null == e.maxResolution || null == e.maxFrameRate ? null : {
            maxFrameRate: e.maxFrameRate,
            maxResolution: e.maxResolution
        }
    }

    function E(e, t, n) {
        var l, f, _;
        let c = (l = e, f = t, _ = n, d.ApplicationStreamSettingRequirements.find(e => (null == e.preset || e.preset === l) && e.resolution === f && e.fps === _)),
            g = r.default.getCurrentUser(),
            m = i.default.getGuildId(),
            h = null != m ? s.default.getGuild(m) : null;
        a.default.track(o.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
            user_premium_tier: null == g ? void 0 : g.premiumType,
            guild_premium_tier: null == h ? void 0 : h.premiumTier,
            stream_quality_user_premium_tier: (null == c ? void 0 : c.quality) != null ? u.StreamQualitiesToPremiumType[c.quality] : null,
            stream_quality_guild_premium_tier: null == c ? void 0 : c.guildPremiumTier,
            stream_quality_preset: e,
            stream_quality_resolution: t,
            stream_quality_frame_rate: n
        })
    }
}