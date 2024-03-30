function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForExplicitMediaRedaction: function() {
            return a
        },
        useIsEligibleForExplicitMediaRedaction: function() {
            return u
        }
    });
    var r = n("94498"),
        o = (0, r.createExperiment)({
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
        i = (0, r.createExperiment)({
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
        var e = o.getCurrentConfig({
                location: "686da2_1"
            }, {
                autoTrackExposure: !0
            }).enabled,
            t = i.getCurrentConfig({
                location: "686da2_1"
            }, {
                autoTrackExposure: !0
            }).enabled;
        return e || t
    }

    function u() {
        var e = o.useExperiment({
                location: "686da2_2"
            }, {
                autoTrackExposure: !0
            }).enabled,
            t = i.useExperiment({
                location: "686da2_2"
            }, {
                autoTrackExposure: !0
            }).enabled;
        return e || t
    }
}