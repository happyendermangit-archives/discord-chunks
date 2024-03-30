function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("629815"),
        o = n("140817"),
        i = n("786827"),
        a = n("940354"),
        u = n("422003"),
        s = n("935741"),
        l = n("335911"),
        c = n("545072"),
        f = n("894288"),
        d = n("208454");

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var E = function() {
        var e, t = (0, i.getLastUsedVideoBackgroundOption)(d.default.getCurrentUser());
        return {
            video_device_name: null === (e = l.default.getVideoDevices()[l.default.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
            video_hardware_scaling_enabled: l.default.getHardwareH264(),
            video_effect_type: (0, u.getEffectAnalyticsType)(t),
            video_effect_detail: (0, u.getEffectDetailAnalyticsName)(t)
        }
    };

    function p(e, t, n, i) {
        var u = f.default.getVoiceChannelId(),
            l = s.default.getChannel(u);
        if (null == t && null != u && null != l) {
            var d, p, m = (d = l, p = i, _({
                channel_id: d.id,
                channel_type: d.type,
                guild_id: d.getGuildId(),
                rtc_connection_id: c.default.getRTCConnectionId(),
                duration: c.default.getDuration(),
                media_session_id: c.default.getMediaSessionId()
            }, (0, o.getVoiceStateMetadata)(c.default.getGuildId(), c.default.getChannelId(), p)));
            if (e(), a.default.hasUsedBackgroundInCall) {
                var y = _({}, m, E());
                r.default.dispatch({
                    type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                    analyticsData: y
                })
            } else r.default.dispatch({
                type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                analyticsData: m
            })
        } else e()
    }
}