function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("862205");
    let i = (0, r.createExperiment)({
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
    var a = i
}