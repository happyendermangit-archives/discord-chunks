function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-03_perks_demo_hd_streaming",
        label: "Perks Demo: HD Streaming",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "With HD Streaming Perk Demo enabled - ML predicted",
            config: {
                enabled: !0
            }
        }, {
            id: 2,
            label: "With HD Streaming Perk Demo enabled - no ML prediction",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = i
}