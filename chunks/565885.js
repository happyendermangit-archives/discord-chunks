function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2024-02_clips_quality_decoupling",
        label: "Clips quality decoupling",
        defaultConfig: {
            allowQualityDecoupling: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Clips quality decoupling",
            config: {
                allowQualityDecoupling: !0
            }
        }]
    })
}