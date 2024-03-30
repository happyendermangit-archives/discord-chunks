function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        },
        setVideoToggleAnalyticsParams: function() {
            return l
        }
    });
    var r, o, i = n("870331"),
        a = n("867659"),
        u = n("281767");

    function s(e, t, n) {
        var s = a.default.getConfig(!1),
            l = s.featureEnabled,
            c = s.windowLength,
            f = s.allowedPoorFpsRatio,
            d = s.fpsThreshold,
            _ = s.backoffTimeSec;
        i.default.track(u.AnalyticEvents.VIDEO_TOGGLED, {
            video_toggle_reason: t,
            toggled_user_id: e,
            rtc_connection_id: null == r ? void 0 : r(),
            media_session_id: null == o ? void 0 : o(),
            video_health_manager_window_length: l ? c : null,
            video_health_manager_poor_fps_ratio: l ? f : null,
            video_health_manager_fps_threshold: l ? d : null,
            is_video_shown: n,
            video_health_manager_backoff_time_seconds: l ? _ : null
        })
    }

    function l(e, t) {
        r = e, o = t
    }
}