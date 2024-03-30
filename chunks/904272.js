function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083"),
        r = n("70956");
    let s = (0, i.createExperiment)({
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
                graphicsCaptureStaleFrameTimeoutMs: 1 * r.default.Millis.SECOND
            }
        }, {
            id: 2,
            label: "5 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 5 * r.default.Millis.SECOND
            }
        }, {
            id: 3,
            label: "10 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 10 * r.default.Millis.SECOND
            }
        }, {
            id: 4,
            label: "30 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 30 * r.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "60 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 60 * r.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "120 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 120 * r.default.Millis.SECOND
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