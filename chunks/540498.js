function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isIFrameModalUserEnabled: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-07_iframe_modal",
        label: "iFrame Modal",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable iFrameModal",
            config: {
                enabled: !0
            }
        }]
    });

    function o() {
        return r.getCurrentConfig({
            location: "5c0a70_1"
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}