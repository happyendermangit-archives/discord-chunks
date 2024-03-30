function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSoundmojiExperiment: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-09_soundmoji",
        label: "Soundmoji",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    });

    function o(e) {
        return r.useExperiment({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}