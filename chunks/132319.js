function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RaidAlertExperiment: function() {
            return i
        },
        ReportRaidExperiment: function() {
            return o
        }
    });
    var r = n("94498"),
        o = (0, r.createExperiment)({
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
        i = (0, r.createExperiment)({
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