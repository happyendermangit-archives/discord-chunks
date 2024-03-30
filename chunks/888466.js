function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForActivityQuest: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
            id: "2024-03_quests_activity_quest",
            kind: "user",
            label: "Activity Quest",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    enabled: !1
                }
            }, {
                id: 1,
                label: "Activity Quest enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        o = function(e) {
            var t = e.location,
                n = e.autoTrackExposure;
            return r.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n
            }).enabled
        }
}