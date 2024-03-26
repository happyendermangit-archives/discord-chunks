function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePomeloDebounceDelay: function() {
            return r
        }
    });
    var s = n("862205");
    let a = (0, s.createExperiment)({
            kind: "user",
            label: "Pomelo Debounce Delay",
            id: "2023-03_pomelo_debounce_delay",
            defaultConfig: {
                delay: 600
            },
            treatments: [{
                id: 1,
                label: "600ms",
                config: {
                    delay: 600
                }
            }, {
                id: 2,
                label: "700ms",
                config: {
                    delay: 700
                }
            }, {
                id: 3,
                label: "800ms",
                config: {
                    delay: 800
                }
            }, {
                id: 4,
                label: "900ms",
                config: {
                    delay: 900
                }
            }, {
                id: 5,
                label: "1000ms",
                config: {
                    delay: 1e3
                }
            }]
        }),
        r = () => a.useExperiment({
            location: "52560d_1"
        }, {
            autoTrackExposure: !1
        }).delay
}