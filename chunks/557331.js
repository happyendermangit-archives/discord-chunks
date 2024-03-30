function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getForceMigration: function() {
            return i
        },
        useForceMigration: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
            kind: "user",
            id: "2024-01_uu_forced_migration",
            label: "Unique Username Forced Migration UI",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable Forced Migration UI",
                config: {
                    enabled: !0
                }
            }]
        }),
        o = function() {
            return r.useExperiment({
                location: "force_migration"
            }, {
                autoTrackExposure: !1
            }).enabled
        },
        i = function() {
            return r.getCurrentConfig({
                location: "force_migration"
            }, {
                autoTrackExposure: !1
            }).enabled
        }
}