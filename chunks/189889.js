function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LocalizedPricingPromoManagerExperiment: function() {
            return r
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2022-12_localized_pricing_promo_manager",
        label: "Localized Pricing Promo Manager",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Localized Pricing Promo Manager",
            config: {
                enabled: !0
            }
        }]
    })
}