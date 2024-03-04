function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("862205"),
        s = n("718517");
    let r = (0, i.createExperiment)({
        kind: "user",
        id: "2023-10_video_hook_stale_frame_timeout",
        label: "Video Hook Stale Frame Timeout",
        defaultConfig: {
            videoHookStaleFrameTimeoutMs: 500
        },
        treatments: [{
            id: 1,
            label: "1 second",
            config: {
                videoHookStaleFrameTimeoutMs: 1 * s.default.Millis.SECOND
            }
        }, {
            id: 2,
            label: "5 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 5 * s.default.Millis.SECOND
            }
        }, {
            id: 3,
            label: "10 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 10 * s.default.Millis.SECOND
            }
        }, {
            id: 4,
            label: "30 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 30 * s.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "60 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 60 * s.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "120 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 120 * s.default.Millis.SECOND
            }
        }]
    });
    var a = {
        getConfig: (e, t, n) => e ? r.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }) : r.definition.defaultConfig
    }
}