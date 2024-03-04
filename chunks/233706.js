function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOnboardingHomeAdminExperiment: function() {
            return a
        },
        getOnboardingHomeAdminExperiment: function() {
            return o
        },
        useOptionalOnboardingHomeAdminExperiment: function() {
            return l
        },
        getOptionalOnboardingHomeAdminExperiment: function() {
            return u
        },
        default: function() {
            return d
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-02_onboarding_home_admin",
            label: "[ADMIN] Home as a community onboarding surface",
            defaultConfig: {
                homeSettingsEnabled: !1
            },
            treatments: [{
                id: 1,
                label: "Show the Onboarding Version of Home in Admin Settings",
                config: {
                    homeSettingsEnabled: !0
                }
            }]
        }),
        r = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-05_optional_onboarding_home_admin",
            label: "[ADMIN] Make server guide optional",
            defaultConfig: {
                serverGuideOptional: !1
            },
            treatments: [{
                id: 1,
                label: "Optional",
                config: {
                    serverGuideOptional: !0
                }
            }]
        });

    function a(e) {
        return s.useExperiment({
            guildId: e,
            location: "259c05_1"
        }, {
            autoTrackExposure: !0
        })
    }

    function o(e) {
        return s.getCurrentConfig({
            guildId: e,
            location: "259c05_2"
        })
    }

    function l(e) {
        return r.useExperiment({
            guildId: e,
            location: "259c05_3"
        }, {
            autoTrackExposure: !0
        })
    }

    function u(e) {
        return r.getCurrentConfig({
            guildId: e,
            location: "259c05_4"
        })
    }
    var d = s
}