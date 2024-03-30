function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForInappropriateConversationWarning: function() {
            return a
        },
        useIsEligibleForInappropriateConversationWarning: function() {
            return u
        }
    });
    var r = n("94498"),
        o = (0, r.createExperiment)({
            kind: "user",
            id: "2024-01_inappropriate_conversation_warning",
            label: "Inappropriate Conversation Warning",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable Inappropriate Conversation Warning",
                config: {
                    enabled: !0
                }
            }]
        }),
        i = (0, r.createExperiment)({
            kind: "user",
            id: "2024-01_inappropriate_conversation_warning_staff_bypass",
            label: "Inappropriate Conversation Warning Staff Bypass",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable Inappropriate Conversation Warning Staff Bypass",
                config: {
                    enabled: !0
                }
            }]
        });

    function a(e) {
        var t = e.location,
            n = e.autoTrackExposure,
            r = void 0 !== n && n,
            a = o.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: r
            }).enabled,
            u = i.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: r
            }).enabled;
        return a || u
    }

    function u(e) {
        var t = e.location,
            n = e.autoTrackExposure,
            r = void 0 !== n && n,
            a = o.useExperiment({
                location: t
            }, {
                autoTrackExposure: r
            }).enabled,
            u = i.useExperiment({
                location: t
            }, {
                autoTrackExposure: r
            }).enabled;
        return a || u
    }
}