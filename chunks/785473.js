function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        otpSkusExperiment: function() {
            return r
        }
    });
    var i = n("862205");
    let r = (0, i.createExperiment)({
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