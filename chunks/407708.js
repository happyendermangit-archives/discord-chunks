function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clickstreamExperimentEnabled: function() {
            return r
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
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

    function r() {
        let {
            enabled: e
        } = s.getCurrentConfig({
            location: "clickstream"
        });
        return e
    }
}