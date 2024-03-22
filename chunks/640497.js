function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NotificationsExperiment: function() {
            return s
        },
        UnreadsEntryPointExperiment: function() {
            return r
        },
        NewUserUnreadsEntryPointExperiment: function() {
            return a
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
            kind: "user",
            id: "2023-11_totally_benign_and_non_controversial_notification_tweaks",
            label: "Notification Changes",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Use the unfinished, not ready, and totally benign notification tweaks",
                config: {
                    enabled: !0
                }
            }]
        }),
        r = (0, i.createExperiment)({
            kind: "user",
            id: "2024-01_unreads",
            label: "Unreads Experiment (grey-dot mode)",
            defaultConfig: {
                logExposure: !1,
                autoOpen: !1,
                manuallyOpen: !1
            },
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    logExposure: !0,
                    autoOpen: !1,
                    manuallyOpen: !1
                }
            }, {
                id: 1,
                label: "Auto open migration",
                config: {
                    logExposure: !0,
                    autoOpen: !0,
                    manuallyOpen: !1
                }
            }, {
                id: 2,
                label: "Manually open migration",
                config: {
                    logExposure: !1,
                    autoOpen: !1,
                    manuallyOpen: !0
                }
            }]
        }),
        a = (0, i.createExperiment)({
            kind: "user",
            id: "2024-03_unreads_new_users",
            label: "Unreads Experiment (grey-dot mode) (new users)",
            defaultConfig: {
                enabled: !1,
                logExposure: !1
            },
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    enabled: !1,
                    logExposure: !0
                }
            }, {
                id: 1,
                label: "Auto open migration",
                config: {
                    enabled: !0,
                    logExposure: !0
                }
            }]
        })
}