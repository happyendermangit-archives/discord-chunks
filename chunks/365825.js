function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPomeloAttempt: function() {
            return i
        }
    });
    var r = (0, n("94498").createExperiment)({
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
        i = function() {
            return r.getCurrentConfig({
                location: "c22166_1"
            }, {
                autoTrackExposure: !1
            }).enabled
        }
}