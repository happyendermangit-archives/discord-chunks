function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        useIsUnauthenticatedReportFormEnabled: function() {
            return a
        }
    });
    let n = (0, s("818083").createExperiment)({
        kind: "user",
        id: "2023-09_iar_dsa_webform",
        label: "Safety Experience Unauthenticated Report Form",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "EU user",
            config: {
                enabled: !0
            }
        }, {
            id: 2,
            label: "DSA E2E testing user",
            config: {
                enabled: !0
            }
        }]
    });

    function a(e) {
        return n.useExperiment({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}