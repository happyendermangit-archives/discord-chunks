function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserIsRecentGamesExperimentApiEnabled: function() {
            return a
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
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
        a = e => {
            let {
                location: t
            } = e, n = l.useExperiment({
                location: t
            });
            return n.enabled
        }
}