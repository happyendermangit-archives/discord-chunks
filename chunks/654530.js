function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForQuestsClientMonitoring: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
            id: "2024-03_quests_client_monitoring",
            kind: "user",
            label: "Quests client monitoring experiment",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 0,
                label: "disabled",
                config: {
                    enabled: !1
                }
            }, {
                id: 1,
                label: "enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        o = function(e) {
            return r.getCurrentConfig({
                location: e
            }, {
                autoTrackExposure: !1
            }).enabled
        }
}