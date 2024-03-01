function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var s = n("913144"),
        i = n("716241"),
        r = n("659558"),
        a = n("870879"),
        o = n("239448"),
        d = n("42203"),
        u = n("42887"),
        l = n("945956"),
        f = n("18494"),
        _ = n("697218");
    let c = (e, t) => ({
            channel_id: e.id,
            channel_type: e.type,
            guild_id: e.getGuildId(),
            rtc_connection_id: l.default.getRTCConnectionId(),
            duration: l.default.getDuration(),
            media_session_id: l.default.getMediaSessionId(),
            ...(0, i.getVoiceStateMetadata)(l.default.getGuildId(), l.default.getChannelId(), t)
        }),
        g = () => {
            var e;
            let t = (0, r.getLastUsedVideoBackgroundOption)(_.default.getCurrentUser());
            return {
                video_device_name: null === (e = u.default.getVideoDevices()[u.default.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
                video_hardware_scaling_enabled: u.default.getHardwareH264(),
                video_effect_type: (0, o.getEffectAnalyticsType)(t),
                video_effect_detail: (0, o.getEffectDetailAnalyticsName)(t)
            }
        };

    function m(e, t, n, i) {
        let r = f.default.getVoiceChannelId(),
            o = d.default.getChannel(r);
        if (null == t && null != r && null != o) {
            let t = c(o, i);
            if (e(), a.default.hasUsedBackgroundInCall) {
                let e = {
                    ...t,
                    ...g()
                };
                s.default.dispatch({
                    type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                    analyticsData: e
                })
            } else s.default.dispatch({
                type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                analyticsData: t
            })
        } else e()
    }
}