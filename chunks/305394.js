function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        otpSkusExperiment: function() {
            return r
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-01_otp_skus",
        label: "OTP SKUs",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable OTP SKUs",
            config: {
                enabled: !0
            }
        }]
    })
}