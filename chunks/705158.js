function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-03_social_proof_hd_streaming",
        label: "Social proof in HD streaming upsell",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Show social proof in HD streaming upsell",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = r
}