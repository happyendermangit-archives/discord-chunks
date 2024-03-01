function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2023-12_nv_relaxed_rate_control",
        label: "Alternative rate control proposal for Nvidia encoder",
        defaultConfig: {
            nvMediumVbvSizeMs: 0
        },
        treatments: [{
            id: 1,
            label: "250 ms",
            config: {
                nvMediumVbvSizeMs: 250
            }
        }, {
            id: 2,
            label: "500 ms",
            config: {
                nvMediumVbvSizeMs: 500
            }
        }, {
            id: 3,
            label: "1000 ms",
            config: {
                nvMediumVbvSizeMs: 1e3
            }
        }]
    })
}