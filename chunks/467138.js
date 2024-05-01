function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isMemberVerificationManualApproval: function() {
            return a
        },
        useIsMemberVerificationManualApproval: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
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
        return i.trackExposure({
            guildId: e,
            location: "bda51f_1"
        }), i.useExperiment({
            guildId: e,
            location: "bda51f_2"
        }, {
            autoTrackExposure: !1
        }).manualApprovalEnabled
    }

    function a(e) {
        return i.getCurrentConfig({
            guildId: e,
            location: "bda51f_3"
        }, {
            autoTrackExposure: !1
        }).manualApprovalEnabled
    }
}