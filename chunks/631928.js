function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForWebAudioAPI: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-03_web_audio_api_rollout",
        label: "Web Audio API Rollout",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Web Audio API usage",
            config: {
                enabled: !0
            }
        }]
    });

    function o(e) {
        var t = e.location;
        return r.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !1
        }).enabled
    }
}