function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RaidAlertExperiment: function() {
            return s
        },
        ReportRaidExperiment: function() {
            return r
        }
    });
    var i = n("818083");
    let r = (0, i.createExperiment)({
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
        s = (0, i.createExperiment)({
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