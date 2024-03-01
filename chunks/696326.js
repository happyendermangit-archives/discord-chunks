function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var s = n("862205");
    let i = (0, s.createExperiment)({
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
    var r = i
}