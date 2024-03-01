function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PlayStationVoiceExperiment: function() {
            return i
        }
    });
    var l = n("862205");
    let i = (0, l.createExperiment)({
        kind: "user",
        id: "2022-08_churro_experiment",
        label: "PS5 Voice Experiment",
        defaultConfig: {
            allowPlayStationStaging: !1
        },
        treatments: [{
            id: 3,
            label: "PS Experiment + upsells + Staging",
            config: {
                allowPlayStationStaging: !0
            }
        }]
    })
}