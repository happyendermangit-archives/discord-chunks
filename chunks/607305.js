function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
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