function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
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