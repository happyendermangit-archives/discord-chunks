function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isStaffTeenSafetyAssistAgeBypass: function() {
            return l
        },
        useStaffTeenSafetyAssistAgeBypass: function() {
            return r
        }
    });
    var a = n("862205");
    let i = (0, a.createExperiment)({
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

    function l(e) {
        let {
            enabled: t
        } = i.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        return t
    }

    function r(e) {
        return i.useExperiment({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}