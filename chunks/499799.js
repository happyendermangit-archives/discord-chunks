function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isStaffTeenSafetyAssistAgeBypass: function() {
            return i
        },
        useStaffTeenSafetyAssistAgeBypass: function() {
            return _
        }
    });
    var a = n("862205");
    let l = (0, a.createExperiment)({
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

    function i(e) {
        let {
            enabled: t
        } = l.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        return t
    }

    function _(e) {
        return l.useExperiment({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled
    }
}