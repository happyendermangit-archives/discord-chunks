function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        NitroTenureRewardCardExperiment: function() {
            return o
        }
    });
    var t = E("862205");
    let o = (0, t.createExperiment)({
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