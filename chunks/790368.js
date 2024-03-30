function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2023-05_referral_trials_birthday_moment",
        label: "Referral Trials Birthday Moment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Users will see the birthday moment referral trial UX",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = i
}