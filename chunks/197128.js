function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
        kind: "user",
        id: "2021-03_videotoolbox_rate_optimization",
        label: "VideoToolbox Rate Control Optimizations",
        defaultConfig: {
            useExperimentalRateControl: !1
        },
        treatments: [{
            id: 1,
            label: "On",
            config: {
                useExperimentalRateControl: !0
            }
        }]
    })
}