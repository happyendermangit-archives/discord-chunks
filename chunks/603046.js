function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        experiment: function() {
            return r
        },
        getPomeloEligibility: function() {
            return i
        },
        usePomeloEligibility: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
            kind: "user",
            label: "Pomelo",
            id: "2023-03_pomelo",
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
        o = function() {
            return r.useExperiment({
                location: "faf26d_1"
            }, {
                autoTrackExposure: !1
            }).enabled
        },
        i = function() {
            return r.getCurrentConfig({
                location: "faf26d_2"
            }, {
                autoTrackExposure: !1
            }).enabled
        }
}