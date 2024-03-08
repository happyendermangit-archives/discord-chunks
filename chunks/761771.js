function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForInappropriateConversationWarning: function() {
            return r
        },
        useIsEligibleForInappropriateConversationWarning: function() {
            return s
        }
    });
    var a = n("862205");
    let l = (0, a.createExperiment)({
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
        i = (0, a.createExperiment)({
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

    function r(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e, {
            enabled: a
        } = l.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }), {
            enabled: r
        } = i.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        });
        return a || r
    }

    function s(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e, {
            enabled: a
        } = l.useExperiment({
            location: t
        }, {
            autoTrackExposure: n
        }), {
            enabled: r
        } = i.useExperiment({
            location: t
        }, {
            autoTrackExposure: n
        });
        return a || r
    }
}