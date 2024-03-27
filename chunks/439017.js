function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TrialRedemptionDefaultPlanExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
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