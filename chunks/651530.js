function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForExplicitMediaRedaction: function() {
            return a
        },
        useIsEligibleForExplicitMediaRedaction: function() {
            return o
        }
    });
    var i = n("818083");
    let r = (0, i.createExperiment)({
            kind: "user",
            id: "2023-08_explicit_media_redaction",
            label: "Explicit Media Redaction",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable explicit media redaction",
                config: {
                    enabled: !0
                }
            }]
        }),
        s = (0, i.createExperiment)({
            kind: "user",
            id: "2023-08_explicit_media_redaction_teen",
            label: "Explicit Media Redaction for Teens",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable explicit media redaction for teens",
                config: {
                    enabled: !0
                }
            }]
        });

    function a() {
        let {
            enabled: e
        } = r.getCurrentConfig({
            location: "686da2_1"
        }, {
            autoTrackExposure: !0
        }), {
            enabled: t
        } = s.getCurrentConfig({
            location: "686da2_1"
        }, {
            autoTrackExposure: !0
        });
        return e || t
    }

    function o() {
        let {
            enabled: e
        } = r.useExperiment({
            location: "686da2_2"
        }, {
            autoTrackExposure: !0
        }), {
            enabled: t
        } = s.useExperiment({
            location: "686da2_2"
        }, {
            autoTrackExposure: !0
        });
        return e || t
    }
}