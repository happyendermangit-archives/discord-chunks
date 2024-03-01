function(e, t, n) {
    "use strict";
    n.r(t), (0, n("862205").createExperiment)({
        kind: "user",
        id: "2021-09_ios_screenshare_resolution_profiles",
        label: "iOS: Screenshare resolution profiles",
        defaultConfig: {
            profile: 0
        },
        treatments: [{
            id: 1,
            label: "Permanent old resolution",
            config: {
                profile: 1
            }
        }, {
            id: 2,
            label: "Old resolution for 10s",
            config: {
                profile: 2
            }
        }, {
            id: 3,
            label: "Wait 3s after 1st frame capture",
            config: {
                profile: 3
            }
        }, {
            id: 4,
            label: "Wait 3s to capture 1st frame",
            config: {
                profile: 4
            }
        }]
    })
}