function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isUserRecentGamesExperimentEnabled: function() {
            return r
        },
        useUserIsRecentGamesExperimentEnabled: function() {
            return a
        }
    });
    let i = (0, n("818083").createExperiment)({
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
        }, {
            id: 4,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    });

    function r(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e;
        return i.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }).enabled
    }

    function a(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e;
        return i.useExperiment({
            location: t
        }, {
            autoTrackExposure: n
        }).enabled
    }
}