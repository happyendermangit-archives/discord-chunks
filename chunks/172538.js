function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("913144"),
        s = n("716241"),
        r = n("659558"),
        a = n("870879"),
        o = n("239448"),
        l = n("42203"),
        u = n("42887"),
        d = n("945956"),
        c = n("18494"),
        f = n("697218");
    let _ = (e, t) => ({
            channel_id: e.id,
            channel_type: e.type,
            guild_id: e.getGuildId(),
            rtc_connection_id: d.default.getRTCConnectionId(),
            duration: d.default.getDuration(),
            media_session_id: d.default.getMediaSessionId(),
            ...(0, s.getVoiceStateMetadata)(d.default.getGuildId(), d.default.getChannelId(), t)
        }),
        h = () => {
            var e;
            let t = (0, r.getLastUsedVideoBackgroundOption)(f.default.getCurrentUser());
            return {
                video_device_name: null === (e = u.default.getVideoDevices()[u.default.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
                video_hardware_scaling_enabled: u.default.getHardwareH264(),
                video_effect_type: (0, o.getEffectAnalyticsType)(t),
                video_effect_detail: (0, o.getEffectDetailAnalyticsName)(t)
            }
        };

    function E(e, t, n, s) {
        let r = c.default.getVoiceChannelId(),
            o = l.default.getChannel(r);
        if (null == t && null != r && null != o) {
            let t = _(o, s);
            if (e(), a.default.hasUsedBackgroundInCall) {
                let e = {
                    ...t,
                    ...h()
                };
                i.default.dispatch({
                    type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                    analyticsData: e
                })
            } else i.default.dispatch({
                type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                analyticsData: t
            })
        } else e()
    }
}