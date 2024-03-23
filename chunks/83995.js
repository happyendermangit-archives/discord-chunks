function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CreateGuildPollsExperiment: function() {
            return s
        },
        CreateGDMPollsExperiment: function() {
            return r
        },
        CreatePollsCoachmarkExperiment: function() {
            return a
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-09_guild_polls",
            label: "Create Guild Polls",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables creation of polls within a guild",
                config: {
                    enabled: !0
                }
            }]
        }),
        r = (0, i.createExperiment)({
            kind: "user",
            id: "2024-01_create_gdm_polls",
            label: "Create GDM Polls",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables creation of polls within a GDM",
                config: {
                    enabled: !0
                }
            }]
        }),
        a = (0, i.createExperiment)({
            kind: "guild",
            id: "2024-03_polls_coachmark",
            label: "Show coachmark for poll creation entry point",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Can show coachmark for poll creation entry point",
                config: {
                    enabled: !0
                }
            }]
        })
}