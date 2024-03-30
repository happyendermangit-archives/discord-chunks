function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2021-02_quartz_video_source",
        label: "Quartz Video Source",
        defaultConfig: {
            useQuartzCapturer: !1,
            allowScreenCaptureKit: !1
        },
        treatments: [{
            id: 1,
            label: "gotta go fast",
            config: {
                useQuartzCapturer: !0,
                allowScreenCaptureKit: !1
            }
        }, {
            id: 2,
            label: "2fast 2furious",
            config: {
                useQuartzCapturer: !0,
                allowScreenCaptureKit: !0
            }
        }]
    })
}