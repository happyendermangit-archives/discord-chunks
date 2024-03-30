function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clickstreamExperimentEnabled: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-03_clickstream_analytics",
        label: "Clickstream Analytics",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Clickstream Analytics",
            config: {
                enabled: !0
            }
        }]
    });

    function o() {
        return r.getCurrentConfig({
            location: "clickstream"
        }).enabled
    }
}