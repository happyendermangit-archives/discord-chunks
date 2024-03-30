function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-10_dcf_holdout",
        label: "DCF Holdout",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Users will only see DCs that bypass the holdout",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = r
}