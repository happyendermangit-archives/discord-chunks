function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        experiment: function() {
            return i
        },
        getPomeloEligibility: function() {
            return a
        },
        usePomeloEligibility: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
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
        r = () => {
            let {
                enabled: e
            } = i.useExperiment({
                location: "faf26d_1"
            }, {
                autoTrackExposure: !1
            });
            return e
        },
        a = () => {
            let {
                enabled: e
            } = i.getCurrentConfig({
                location: "faf26d_2"
            }, {
                autoTrackExposure: !1
            });
            return e
        }
}