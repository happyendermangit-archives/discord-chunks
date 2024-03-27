function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2023-11_nitro_affinities",
        label: "Nitro Affinities",
        defaultConfig: {
            marketingEnabled: !1,
            planSelectionEnabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Nitro Affinities for Marketing Page",
            config: {
                marketingEnabled: !0,
                planSelectionEnabled: !1
            }
        }, {
            id: 2,
            label: "Enable Nitro Affinities for Plan Selection Page",
            config: {
                marketingEnabled: !1,
                planSelectionEnabled: !0
            }
        }, {
            id: 3,
            label: "Enable Nitro Affinities for Both Marketing Page and Plan Selection Page",
            config: {
                marketingEnabled: !0,
                planSelectionEnabled: !0
            }
        }]
    })
}