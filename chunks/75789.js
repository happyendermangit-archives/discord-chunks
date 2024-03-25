function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
        kind: "guild",
        id: "2024-03_ait_guild_entry_point",
        label: "Activities in Text Guild Experiment w/ new Entry Point",
        defaultConfig: {
            entryPointEnabled: !1,
            activitiesInTextEnabled: !1,
            desktopThrobberEnabled: !1,
            showInOmniButtonMenu: !1
        },
        treatments: [{
            id: 1,
            label: "Enable new entry point in Chat Input and App Launcher",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !1,
                desktopThrobberEnabled: !1,
                showInOmniButtonMenu: !1
            }
        }, {
            id: 2,
            label: "Enable new entry point in Chat Input, App Launcher, and Activities In Text",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                desktopThrobberEnabled: !1,
                showInOmniButtonMenu: !0
            }
        }, {
            id: 3,
            label: "Enable new entry point in Chat Input, App Launcher, Activities in Text, and Desktop Throbber",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                desktopThrobberEnabled: !0,
                showInOmniButtonMenu: !0
            }
        }]
    })
}