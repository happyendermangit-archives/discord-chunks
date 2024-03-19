function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useUserIsRecentGamesExperimentEnabled: function() {
            return a
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
            id: "2024-03_user_recent_games",
            kind: "user",
            label: "Recent Games",
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
                location: t,
                autoTrackExposure: n
            } = e, i = l.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            });
            return i.enabled
        }
}