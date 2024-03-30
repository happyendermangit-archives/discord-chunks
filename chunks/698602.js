function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isOOPExperimentEnabled: function() {
            return o
        }
    });
    var r = (0, n("886138").default)({
        kind: "user",
        id: "2023-08_overlay3_out_of_process_enablement",
        label: "Overlay3 - Out of Process Enablement",
        defaultConfig: {
            useGlobalOverlay: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                useGlobalOverlay: !0
            }
        }]
    });

    function o() {
        var e = r.getCurrentConfig({
            location: "isOOPExperimentEnabled"
        }, {
            autoTrackExposure: !0
        });
        return null != e && e.useGlobalOverlay
    }
}