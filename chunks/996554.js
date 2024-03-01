function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppLauncherDesktopExperiment: function() {
            return i
        },
        AppLauncherOnboardingExperiment: function() {
            return r
        }
    });
    var s = n("862205");
    let i = (0, s.createExperiment)({
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
        r = (0, s.createExperiment)({
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