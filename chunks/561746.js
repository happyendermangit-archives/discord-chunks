function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
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
    t.default = i
}