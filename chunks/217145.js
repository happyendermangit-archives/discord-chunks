function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isIFrameModalUserEnabled: function() {
            return l
        }
    });
    var r = n("862205");
    let i = (0, r.createExperiment)({
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

    function l() {
        return i.getCurrentConfig({
            location: "5c0a70_1"
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}