function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isStaffTeenSafetyAssistAgeBypass: function() {
            return o
        },
        useStaffTeenSafetyAssistAgeBypass: function() {
            return i
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-10_staff_teen_safety_assist_age_bypass",
        label: "Staff Teen Safety Assist Age Bypass",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
            config: {
                enabled: !0
            }
        }]
    });

    function o(e) {
        return r.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled
    }

    function i(e) {
        return r.useExperiment({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}