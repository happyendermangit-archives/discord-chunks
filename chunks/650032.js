function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferralProgramRecipient: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-03_referral_program_recipient",
        label: "Referral Program Recipient Experience",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    })
}