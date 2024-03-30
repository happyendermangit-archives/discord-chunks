function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498"),
        o = n("388990"),
        i = (0, r.createExperiment)({
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
                    videoHookStaleFrameTimeoutMs: 1 * o.default.Millis.SECOND
                }
            }, {
                id: 2,
                label: "5 seconds",
                config: {
                    videoHookStaleFrameTimeoutMs: 5 * o.default.Millis.SECOND
                }
            }, {
                id: 3,
                label: "10 seconds",
                config: {
                    videoHookStaleFrameTimeoutMs: 10 * o.default.Millis.SECOND
                }
            }, {
                id: 4,
                label: "30 seconds",
                config: {
                    videoHookStaleFrameTimeoutMs: 30 * o.default.Millis.SECOND
                }
            }, {
                id: 5,
                label: "60 seconds",
                config: {
                    videoHookStaleFrameTimeoutMs: 60 * o.default.Millis.SECOND
                }
            }, {
                id: 5,
                label: "120 seconds",
                config: {
                    videoHookStaleFrameTimeoutMs: 120 * o.default.Millis.SECOND
                }
            }]
        });
    t.default = {
        getConfig: function(e, t, n) {
            return e ? i.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n
            }) : i.definition.defaultConfig
        }
    }
}