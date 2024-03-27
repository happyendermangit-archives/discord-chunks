function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
        id: "2023-11_adyen_auth_without_capture",
        label: "Adyen auth without capture rollout",
        kind: "user",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = i
}