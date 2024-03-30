function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserIsRecentGamesExperimentApiEnabled: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
            id: "2024-03_user_recent_games_api",
            kind: "user",
            label: "Recent Games API",
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
                label: "Enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        o = function(e) {
            var t = e.location;
            return r.useExperiment({
                location: t
            }).enabled
        }
}