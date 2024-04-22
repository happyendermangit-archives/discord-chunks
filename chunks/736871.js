function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-04_hd_streaming_parent",
        label: "HD Streaming Parent",
        defaultConfig: {
            inPerksDemosExperiment: !1,
            inCallExperienceExperiment: !1
        },
        treatments: [{
            id: 1,
            label: "In Experiment 1",
            config: {
                inPerksDemosExperiment: !0,
                inCallExperienceExperiment: !1
            }
        }, {
            id: 2,
            label: "In Experiment 2",
            config: {
                inPerksDemosExperiment: !1,
                inCallExperienceExperiment: !0
            }
        }]
    });
    t.default = i
}