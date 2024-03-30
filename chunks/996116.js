function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppLauncherDesktopExperiment: function() {
            return o
        },
        AppLauncherOnboardingExperiment: function() {
            return i
        }
    });
    var r = n("94498"),
        o = (0, r.createExperiment)({
            kind: "user",
            id: "2023-11_app_launcher_desktop",
            label: "App Launcher - Desktop",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable the app launcher feature on desktop",
                config: {
                    enabled: !0
                }
            }]
        }),
        i = (0, r.createExperiment)({
            kind: "user",
            id: "2024-01_app_launcher_onboarding",
            label: "App Launcher - Onboarding",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable onboarding within App Launcher",
                config: {
                    enabled: !0
                }
            }]
        })
}