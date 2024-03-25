function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useForceMigration: function() {
            return l
        },
        getForceMigration: function() {
            return a
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
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
        l = () => {
            let {
                enabled: e
            } = s.useExperiment({
                location: "force_migration"
            }, {
                autoTrackExposure: !1
            });
            return e
        },
        a = () => {
            let {
                enabled: e
            } = s.getCurrentConfig({
                location: "force_migration"
            }, {
                autoTrackExposure: !1
            });
            return e
        }
}