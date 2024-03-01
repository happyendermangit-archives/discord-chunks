function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        MultiAccountMobileNotificationsExperiment: function() {
            return o
        }
    });
    var t = E("862205");
    (0, t.createExperiment)({
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
    let o = (0, t.createExperiment)({
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