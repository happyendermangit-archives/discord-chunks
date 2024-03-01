function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
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