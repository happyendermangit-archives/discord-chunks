function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-09_client_theme_coachmark_reintro",
        label: "Experiment to reintroduce the client themes experiment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "enable the coachmark",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = r
}