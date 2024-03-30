function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getOnboardingHomeAdminExperiment: function() {
            return u
        },
        getOptionalOnboardingHomeAdminExperiment: function() {
            return l
        },
        useOnboardingHomeAdminExperiment: function() {
            return a
        },
        useOptionalOnboardingHomeAdminExperiment: function() {
            return s
        }
    });
    var r = n("94498"),
        o = (0, r.createExperiment)({
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
        i = (0, r.createExperiment)({
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
        return o.useExperiment({
            guildId: e,
            location: "259c05_1"
        }, {
            autoTrackExposure: !0
        })
    }

    function u(e) {
        return o.getCurrentConfig({
            guildId: e,
            location: "259c05_2"
        })
    }

    function s(e) {
        return i.useExperiment({
            guildId: e,
            location: "259c05_3"
        }, {
            autoTrackExposure: !0
        })
    }

    function l(e) {
        return i.getCurrentConfig({
            guildId: e,
            location: "259c05_4"
        })
    }
    t.default = o
}