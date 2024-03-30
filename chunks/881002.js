function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GamingStatsSetupExperiment: function() {
            return r
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "guild",
        id: "2023-09_gaming_stats_setup",
        label: "Gaming stats exposure setup",
        defaultConfig: {
            trackGamingStats: !1
        },
        treatments: [{
            id: 1,
            label: "trigger gaming stats data",
            config: {
                trackGamingStats: !0
            }
        }]
    })
}