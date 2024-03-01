function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2023-06_h265_macos",
        label: "Test how h265 works on macos",
        defaultConfig: {
            signalH265SupportMacOS: !1
        },
        treatments: [{
            id: 1,
            label: "Calling with H.265",
            config: {
                signalH265SupportMacOS: !0
            }
        }]
    })
}