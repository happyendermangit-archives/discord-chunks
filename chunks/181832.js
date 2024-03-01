function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCallBannerBackgroundExperiment: function() {
            return s
        }
    });
    var a = n("862205");
    let r = (0, a.createExperiment)({
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

    function s(e, t) {
        return r.useExperiment({
            location: t
        }, {
            autoTrackExposure: e
        })
    }
}