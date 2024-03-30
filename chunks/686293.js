function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "guild",
        id: "2023-03_onboarding_upsell_lifecycle",
        label: "Onboarding Upsell Lifecycle",
        defaultConfig: {
            showLifecycleUpsells: !1
        },
        treatments: [{
            id: 1,
            label: "Show new lifecycle upsells",
            config: {
                showLifecycleUpsells: !0
            }
        }]
    });
    t.default = r
}