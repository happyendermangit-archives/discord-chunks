function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
        kind: "user",
        id: "2024-03_airpods_mute_support",
        label: "Support for muting/unmuting via AirPods",
        defaultConfig: {
            airpodsMuteSupported: !1
        },
        treatments: [{
            id: 1,
            label: "AirPods mute enabled",
            config: {
                airpodsMuteSupported: !0
            }
        }]
    })
}