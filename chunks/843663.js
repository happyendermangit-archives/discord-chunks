function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        LocalizedPricingPromoManagerExperiment: function() {
            return o
        }
    });
    var t = E("862205");
    let o = (0, t.createExperiment)({
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