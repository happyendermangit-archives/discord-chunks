function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
        kind: "user",
        id: "2023-09_decoupled_game_clipping",
        label: "Test decoupled game clipping",
        defaultConfig: {
            enableDecoupledGameClipping: !1
        },
        treatments: [{
            id: 1,
            label: "Decoupled Game Clipping",
            config: {
                enableDecoupledGameClipping: !0
            }
        }]
    })
}