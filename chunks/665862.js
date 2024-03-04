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
        id: "2023-10_wgc_stale_frame_timeout",
        label: "Windows Graphics Capture Stale Frame Timeout",
        defaultConfig: {
            graphicsCaptureStaleFrameTimeoutMs: 500
        },
        treatments: [{
            id: 1,
            label: "1 second",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 1 * s.default.Millis.SECOND
            }
        }, {
            id: 2,
            label: "5 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 5 * s.default.Millis.SECOND
            }
        }, {
            id: 3,
            label: "10 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 10 * s.default.Millis.SECOND
            }
        }, {
            id: 4,
            label: "30 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 30 * s.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "60 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 60 * s.default.Millis.SECOND
            }
        }, {
            id: 5,
            label: "120 seconds",
            config: {
                graphicsCaptureStaleFrameTimeoutMs: 120 * s.default.Millis.SECOND
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