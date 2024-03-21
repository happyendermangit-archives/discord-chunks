function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isInPomeloSuggestionsExperiment: function() {
            return l
        }
    });
    var s = n("862205");
    let a = (0, s.createExperiment)({
            kind: "user",
            label: "Pomelo Suggestions",
            id: "2023-04_pomelo_suggestions",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        l = () => a.getCurrentConfig({
            location: "1907ae_1"
        }, {
            autoTrackExposure: !1
        }).enabled
}