function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForWebAudioAPI: function() {
            return r
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
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

    function r(e) {
        let {
            location: t
        } = e, {
            enabled: n
        } = s.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !1
        });
        return n
    }
}