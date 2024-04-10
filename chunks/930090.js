function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AmazonMusicConnectionExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-04_rollout_for_vic",
        label: "Amazon Music Connection",
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
    })
}