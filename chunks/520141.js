function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsMemberVerificationManualApproval: function() {
            return r
        },
        isMemberVerificationManualApproval: function() {
            return a
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
        kind: "guild",
        id: "2021-11_member_verification_manual_approval",
        label: "Member Verification Manual Approval",
        defaultConfig: {
            manualApprovalEnabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable manual approval for membership verification",
            config: {
                manualApprovalEnabled: !0
            }
        }]
    });

    function r(e) {
        s.trackExposure({
            guildId: e,
            location: "bda51f_1"
        });
        let t = s.useExperiment({
            guildId: e,
            location: "bda51f_2"
        }, {
            autoTrackExposure: !1
        });
        return t.manualApprovalEnabled
    }

    function a(e) {
        let t = s.getCurrentConfig({
            guildId: e,
            location: "bda51f_3"
        }, {
            autoTrackExposure: !1
        });
        return t.manualApprovalEnabled
    }
}