function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NitroTenureRewardCardExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-03_nitro_tenure_reward_card",
        label: "Nitro Tenure Reward Card",
        defaultConfig: {
            enableNitroTenureRewardCard: !1
        },
        treatments: [{
            id: 1,
            label: "Enables the nitro tenure reward card for users",
            config: {
                enableNitroTenureRewardCard: !0
            }
        }]
    })
}