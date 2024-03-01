function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReportRaidExperiment: function() {
            return i
        },
        RaidAlertExperiment: function() {
            return r
        }
    });
    var l = n("862205");
    let i = (0, l.createExperiment)({
            kind: "guild",
            id: "2022-07_report_raids",
            label: "Report Raids",
            defaultConfig: {
                enableRaidReporting: !1
            },
            treatments: [{
                id: 1,
                label: "Enable Reporting Of Raids",
                config: {
                    enableRaidReporting: !0
                }
            }]
        }),
        r = (0, l.createExperiment)({
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