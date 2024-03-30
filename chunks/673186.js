function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("654370"),
        o = n("935741"),
        i = n("545072"),
        a = n("894288"),
        u = n("870331"),
        s = n("571336"),
        l = n("281767"),
        c = n("868615");

    function f(e, t, n, f) {
        var d, _, E, p = o.default.getChannel(a.default.getVoiceChannelId()),
            m = null == p ? void 0 : p.getGuildId(),
            y = i.default.getMediaSessionId(),
            I = i.default.getRTCConnectionId(),
            h = null === (E = r.default.getCurrentGameForAnalytics()) || void 0 === E ? void 0 : E.name,
            O = m !== n.guildId && n.guildId !== s.DEFAULT_SOUND_GUILD_ID;
        var T = (d = n, _ = O, d.guildId === s.DEFAULT_SOUND_GUILD_ID ? "default" : _ ? "custom-external" : "custom");
        u.default.track(l.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
            feature_name: c.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
            feature_tier: O ? c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : c.AnalyticsPremiumFeatureTiers.FREE,
            guild_id: m,
            location_stack: e,
            rtc_connection_id: I,
            media_session_id: y,
            in_overlay: t,
            application_name: h,
            emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
            feature_selection: T,
            feature_selection_id: n.soundId,
            sound_type: f,
            is_broadcast: null != p && p.isBroadcastChannel()
        })
    }
}