function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
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