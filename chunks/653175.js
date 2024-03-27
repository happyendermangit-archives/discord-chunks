function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("570140"),
        r = n("367907"),
        s = n("932724"),
        a = n("634041"),
        o = n("647177"),
        l = n("592125"),
        u = n("131951"),
        d = n("19780"),
        _ = n("944486"),
        c = n("594174");
    let E = (e, t) => ({
            channel_id: e.id,
            channel_type: e.type,
            guild_id: e.getGuildId(),
            rtc_connection_id: d.default.getRTCConnectionId(),
            duration: d.default.getDuration(),
            media_session_id: d.default.getMediaSessionId(),
            ...(0, r.getVoiceStateMetadata)(d.default.getGuildId(), d.default.getChannelId(), t)
        }),
        I = () => {
            var e;
            let t = (0, s.getLastUsedVideoBackgroundOption)(c.default.getCurrentUser());
            return {
                video_device_name: null === (e = u.default.getVideoDevices()[u.default.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
                video_hardware_scaling_enabled: u.default.getHardwareH264(),
                video_effect_type: (0, o.getEffectAnalyticsType)(t),
                video_effect_detail: (0, o.getEffectDetailAnalyticsName)(t)
            }
        };

    function T(e, t, n, r) {
        let s = _.default.getVoiceChannelId(),
            o = l.default.getChannel(s);
        if (null == t && null != s && null != o) {
            let t = E(o, r);
            if (e(), a.default.hasUsedBackgroundInCall) {
                let e = {
                    ...t,
                    ...I()
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