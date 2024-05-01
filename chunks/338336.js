function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        setVideoToggleAnalyticsParams: function() {
            return u
        }
    });
    var s = n("626135"),
        a = n("307320"),
        o = n("981631");

    function l(e, t, n) {
        let {
            featureEnabled: l,
            windowLength: u,
            allowedPoorFpsRatio: d,
            fpsThreshold: _,
            backoffTimeSec: c
        } = a.default.getConfig(!1);
        s.default.track(o.AnalyticEvents.VIDEO_TOGGLED, {
            video_toggle_reason: t,
            toggled_user_id: e,
            rtc_connection_id: null == i ? void 0 : i(),
            media_session_id: null == r ? void 0 : r(),
            video_health_manager_window_length: l ? u : null,
            video_health_manager_poor_fps_ratio: l ? d : null,
            video_health_manager_fps_threshold: l ? _ : null,
            is_video_shown: n,
            video_health_manager_backoff_time_seconds: l ? c : null
        })
    }

    function u(e, t) {
        i = e, r = t
    }
}