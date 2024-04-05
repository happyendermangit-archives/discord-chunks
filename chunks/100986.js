function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("594190"),
        r = n("592125"),
        s = n("19780"),
        a = n("944486"),
        o = n("626135"),
        l = n("710111"),
        u = n("981631"),
        d = n("474936");

    function _(e, t, n, _) {
        var c, E, I;
        let T = r.default.getChannel(a.default.getVoiceChannelId()),
            f = null == T ? void 0 : T.getGuildId(),
            S = s.default.getMediaSessionId(),
            A = s.default.getRTCConnectionId(),
            h = null === (c = i.default.getCurrentGameForAnalytics()) || void 0 === c ? void 0 : c.name,
            m = f !== n.guildId && n.guildId !== l.DEFAULT_SOUND_GUILD_ID;
        let N = (E = n, I = m, E.guildId === l.DEFAULT_SOUND_GUILD_ID ? "default" : I ? "custom-external" : "custom");
        o.default.track(u.AnalyticEvents.PREMIUM_FEATURE_USAGE, {
            feature_name: d.AnalyticsPremiumFeatureNames.SOUNDBOARD_PLAY,
            feature_tier: m ? d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD : d.AnalyticsPremiumFeatureTiers.FREE,
            guild_id: f,
            location_stack: e,
            rtc_connection_id: A,
            media_session_id: S,
            in_overlay: t,
            application_name: h,
            emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
            feature_selection: N,
            feature_selection_id: n.soundId,
            sound_type: _,
            is_broadcast: null != T && T.isBroadcastChannel()
        })
    }
}