function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TrialRedemptionDefaultPlanExperiment: function() {
            return r
        }
    });
    var i = n("862205");
    let r = (0, i.createExperiment)({
        kind: "user",
        id: "2023-03_trial_redemption_default_to_monthly_plan",
        label: "Trial Redemption Default To Monthly Plan",
        defaultConfig: {
            defaultToMonthlyPlan: !1
        },
        treatments: [{
            id: 1,
            label: "Set default plan to monthly plan",
            config: {
                defaultToMonthlyPlan: !0
            }
        }]
    })
}