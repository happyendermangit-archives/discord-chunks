function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RaidAlertExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "guild",
        id: "2022-10_guild_raid_messaging",
        label: "Raid Alerts",
        defaultConfig: {
            enableRaidAlerts: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Reporting Of Raids",
            config: {
                enableRaidAlerts: !0
            }
        }]
    })
}