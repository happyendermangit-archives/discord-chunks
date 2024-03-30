function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498"),
        o = n("388990"),
        i = (0, r.createExperiment)({
            kind: "user",
            id: "2023-10_wgc_stale_frame_timeout",
            label: "Windows Graphics Capture Stale Frame Timeout",
            defaultConfig: {
                graphicsCaptureStaleFrameTimeoutMs: 500
            },
            treatments: [{
                id: 1,
                label: "1 second",
                config: {
                    graphicsCaptureStaleFrameTimeoutMs: 1 * o.default.Millis.SECOND
                }
            }, {
                id: 2,
                label: "5 seconds",
                config: {
                    graphicsCaptureStaleFrameTimeoutMs: 5 * o.default.Millis.SECOND
                }
            }, {
                id: 3,
                label: "10 seconds",
                config: {
                    graphicsCaptureStaleFrameTimeoutMs: 10 * o.default.Millis.SECOND
                }
            }, {
                id: 4,
                label: "30 seconds",
                config: {
                    graphicsCaptureStaleFrameTimeoutMs: 30 * o.default.Millis.SECOND
                }
            }, {
                id: 5,
                label: "60 seconds",
                config: {
                    graphicsCaptureStaleFrameTimeoutMs: 60 * o.default.Millis.SECOND
                }
            }, {
                id: 5,
                label: "120 seconds",
                config: {
                    graphicsCaptureStaleFrameTimeoutMs: 120 * o.default.Millis.SECOND
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