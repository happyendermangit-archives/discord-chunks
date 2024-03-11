function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPomeloAttempt: function() {
            return r
        }
    });
    var s = n("862205");
    let a = (0, s.createExperiment)({
            kind: "user",
            label: "Pomelo Attempt",
            id: "2023-04_pomelo_attempt",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        r = () => a.getCurrentConfig({
            location: "c22166_1"
        }, {
            autoTrackExposure: !1
        }).enabled
}