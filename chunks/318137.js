function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForNewAdultDefaults: function() {
            return r
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
        kind: "user",
        id: "2024-03_explicit_content_adult_defaults",
        label: "Explicit Media Redaction New Setting Defaults",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable new explicit media redaction settings defaults for new adults",
            config: {
                enabled: !0
            }
        }]
    });

    function r(e) {
        return s.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}