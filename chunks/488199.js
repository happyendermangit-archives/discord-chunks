function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
        kind: "user",
        id: "2023-10_screencapturekit",
        label: "ScreenCaptureKit",
        defaultConfig: {
            allowScreenCaptureKit: !1
        },
        treatments: [{
            id: 1,
            label: "enabled",
            config: {
                allowScreenCaptureKit: !0
            }
        }]
    })
}