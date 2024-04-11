function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-04_april_marketing_moment_incentive_experiment",
        label: "2024 April Marketing Moment Incentive",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Eligible for incentive",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = i
}