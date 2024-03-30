function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083"),
        r = n("70956");
    let s = (0, i.createExperiment)({
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
                videoHookStaleFrameTimeoutMs: 1 * r.default.Millis.SECOND
            }
        }, {
            id: 2,
            label: "5 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 5 * r.default.Millis.SECOND
            }
        }, {
            id: 3,
            label: "10 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 10 * r.default.Millis.SECOND
            }
        }, {
            id: 4,
            label: "30 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 30 * r.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "60 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 60 * r.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "120 seconds",
            config: {
                videoHookStaleFrameTimeoutMs: 120 * r.default.Millis.SECOND
            }
        }]
    });
    t.default = {
        getConfig: (e, t, n) => e ? s.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }) : s.definition.defaultConfig
    }
}