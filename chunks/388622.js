function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
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
    t.default = i
}