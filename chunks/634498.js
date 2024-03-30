function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
        kind: "user",
        id: "2022-11_rtx40xx_gpu_screenshare_with_av1",
        label: "Test how AV1 works on windows with RTX40xx GPUs for screenshare",
        defaultConfig: {
            signalAV1Support: !1
        },
        treatments: [{
            id: 1,
            label: "Screenshare with AV1",
            config: {
                signalAV1Support: !0
            }
        }]
    })
}