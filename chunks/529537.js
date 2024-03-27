function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-02_churn_user_discount_offer_experiment",
        label: "Churn User Discount Offer",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 0,
            label: "users receive no discount offer when churning",
            config: {
                enabled: !0
            }
        }, {
            id: 1,
            label: "users receive a 1 month discout offer when churning",
            config: {
                enabled: !0
            }
        }, {
            id: 2,
            label: "users receive a 3 month discount offer when churning",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = i
}