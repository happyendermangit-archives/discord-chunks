function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-07_bogo_marketing_materials_experiment",
        label: "BOGO Marketing Materials",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable BOGO marketing materials",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = r
}