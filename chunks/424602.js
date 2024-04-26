function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppLauncherDesktopExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
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
    })
}