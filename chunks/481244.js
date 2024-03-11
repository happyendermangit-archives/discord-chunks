function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getIsEligibleForActivityQuest: function() {
            return n
        }
    });
    var t = E("862205");
    let o = (0, t.createExperiment)({
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
        n = e => {
            let {
                location: _,
                autoTrackExposure: E
            } = e, t = o.getCurrentConfig({
                location: _
            }, {
                autoTrackExposure: E
            });
            return t.enabled
        }
}