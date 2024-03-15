function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPremiumResolution: function() {
            return f
        },
        isPremiumFPS: function() {
            return _
        },
        getResolutionText: function() {
            return h
        },
        getFPSText: function() {
            return g
        },
        getMaxQuality: function() {
            return m
        },
        trackStreamSettingsUpdate: function() {
            return p
        }
    });
    var i = n("305961"),
        s = n("945956"),
        r = n("697218"),
        a = n("599110"),
        o = n("49111"),
        l = n("686298"),
        u = n("646718"),
        d = n("353927"),
        c = n("782340");

    function f(e) {
        if (null == e) return;
        let t = e.maxResolution.type === d.ResolutionTypes.SOURCE ? l.ApplicationStreamResolutions.RESOLUTION_SOURCE : e.maxResolution.height,
            n = (0, l.getApplicationResolution)(t),
            i = (0, l.getApplicationFramerate)(e.maxFrameRate);
        return i !== l.ApplicationStreamFPS.FPS_5 && null == l.ApplicationStreamSettingRequirements.find(e => e.resolution === n && e.fps !== l.ApplicationStreamFPS.FPS_5 && !E(e))
    }

    function _(e) {
        if (null == e) return;
        let t = (0, l.getApplicationFramerate)(e.maxFrameRate);
        return null == l.ApplicationStreamSettingRequirements.find(e => e.fps === t && !E(e))
    }

    function E(e) {
        return null != e.quality || null != e.guildPremiumTier
    }

    function h(e) {
        return e.type === d.ResolutionTypes.SOURCE ? c.default.Messages.SCREENSHARE_SOURCE : c.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
            resolution: e.height
        })
    }

    function g(e) {
        return c.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
            fps: e
        })
    }

    function m(e) {
        return null == e.maxResolution || null == e.maxFrameRate ? null : {
            maxFrameRate: e.maxFrameRate,
            maxResolution: e.maxResolution
        }
    }

    function p(e, t, n) {
        var d, c, f;
        let _ = (d = e, c = t, f = n, l.ApplicationStreamSettingRequirements.find(e => (null == e.preset || e.preset === d) && e.resolution === c && e.fps === f)),
            E = r.default.getCurrentUser(),
            h = s.default.getGuildId(),
            g = null != h ? i.default.getGuild(h) : null;
        a.default.track(o.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
            user_premium_tier: null == E ? void 0 : E.premiumType,
            guild_premium_tier: null == g ? void 0 : g.premiumTier,
            stream_quality_user_premium_tier: (null == _ ? void 0 : _.quality) != null ? u.StreamQualitiesToPremiumType[_.quality] : null,
            stream_quality_guild_premium_tier: null == _ ? void 0 : _.guildPremiumTier,
            stream_quality_preset: e,
            stream_quality_resolution: t,
            stream_quality_frame_rate: n
        })
    }
}