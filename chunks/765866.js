function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCallBannerBackgroundExperiment: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-10_call_banner_bg",
        label: "Call Banner Background Experiment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                enabled: !0
            }
        }]
    });

    function o(e, t) {
        return r.useExperiment({
            location: t
        }, {
            autoTrackExposure: e
        })
    }
}