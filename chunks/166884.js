function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2024-04_go_live_simulcast",
        label: "Go Live Simulcast",
        defaultConfig: {
            enableGoLiveSimulcast: !1
        },
        treatments: [{
            id: 1,
            label: "enabled",
            config: {
                enableGoLiveSimulcast: !0
            }
        }]
    })
}