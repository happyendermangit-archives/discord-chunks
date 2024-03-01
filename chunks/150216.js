function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        appStorefrontExperiment: function() {
            return i
        }
    });
    var l = n("862205");
    let i = (0, l.createExperiment)({
        kind: "user",
        id: "2024-02_app_storefront",
        label: "App Storefront",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable App Storefront",
            config: {
                enabled: !0
            }
        }]
    })
}