function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MultiAccountMobileNotificationsExperiment: function() {
            return o
        }
    });
    var r = n("94498");
    (0, r.createExperiment)({
        kind: "user",
        id: "2022-09_mobile_account_switcher",
        label: "Mobile Account Switcher",
        defaultConfig: {
            isMultiAccountMobileEnabled: !1,
            clearCanUseMultiAccountMobile: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Account Switcher on Mobile",
            config: {
                isMultiAccountMobileEnabled: !0,
                clearCanUseMultiAccountMobile: !1
            }
        }, {
            id: 2,
            label: "Unenroll Account Switcher on Mobile and Clear Local Flag",
            config: {
                isMultiAccountMobileEnabled: !1,
                clearCanUseMultiAccountMobile: !0
            }
        }]
    });
    var o = (0, r.createExperiment)({
        kind: "user",
        id: "2022-11_mobile_account_switcher_notifications",
        label: "Mobile Account Switcher: Notifications",
        defaultConfig: {
            isMultiAccountMobileNotificationsEnabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable notifications for multiple accounts",
            config: {
                isMultiAccountMobileNotificationsEnabled: !0
            }
        }]
    })
}