function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("161454"),
        l = n("42203"),
        a = n("945956"),
        s = n("18494"),
        r = n("599110"),
        o = n("846325"),
        u = n("49111"),
        d = n("646718");

    function c(e, t, n, c) {
        var f, p, m;
        let h = l.default.getChannel(s.default.getVoiceChannelId()),
            x = null == h ? void 0 : h.getGuildId(),
            E = a.default.getMediaSessionId(),
            y = a.default.getRTCConnectionId(),
            g = null === (f = i.default.getCurrentGameForAnalytics()) || void 0 === f ? void 0 : f.name,
            S = x !== n.guildId && n.guildId !== o.DEFAULT_SOUND_GUILD_ID;
        let C = (p = n, m = S, p.guildId === o.DEFAULT_SOUND_GUILD_ID ? "default" : m ? "custom-external" : "custom");
        r.default.track(u.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
            feature_name: d.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
            feature_tier: S ? d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : d.AnalyticsPremiumFeatureTiers.FREE,
            guild_id: x,
            location_stack: e,
            rtc_connection_id: y,
            media_session_id: E,
            in_overlay: t,
            application_name: g,
            emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
            feature_selection: C,
            feature_selection_id: n.soundId,
            sound_type: c,
            is_broadcast: null != h && h.isBroadcastChannel()
        })
    }
}