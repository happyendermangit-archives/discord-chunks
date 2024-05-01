function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CreateGuildPollsExperiment: function() {
            return r
        },
        CreatePollsGuildCoachmarkExperiment: function() {
            return a
        },
        CreatePollsUserExperiment: function() {
            return s
        }
    });
    var i = n("818083");
    let r = (0, i.createExperiment)({
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
        s = (0, i.createExperiment)({
            kind: "user",
            id: "2024-01_create_gdm_polls",
            label: "Create GDM Polls",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enables creation of polls within a GDM or guild",
                config: {
                    enabled: !0
                }
            }]
        }),
        a = (0, i.createExperiment)({
            kind: "guild",
            id: "2024-03_polls_coachmark",
            label: "Show coachmark for poll creation entry point in guild",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Can show coachmark for poll creation entry point in guild",
                config: {
                    enabled: !0
                }
            }]
        })
}