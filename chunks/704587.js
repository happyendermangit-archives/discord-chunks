function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForDmSettingsUpsell: function() {
            return a
        },
        isInStaffBypassForDmSettingsUpsell: function() {
            return o
        }
    });
    var i = n("818083");
    let r = (0, i.createExperiment)({
            kind: "user",
            id: "2024-04_dm_settings_upsell",
            label: "DM Settings Upsell",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable DM Settings Upsell",
                config: {
                    enabled: !0
                }
            }]
        }),
        s = (0, i.createExperiment)({
            kind: "user",
            id: "2024-04_dm_settings_upsell_staff_bypass",
            label: "DM Settings Upsell Staff Bypass",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enable DM Settings Upsell Staff Bypass to ignore cooldown",
                config: {
                    enabled: !0
                }
            }]
        });

    function a(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e;
        return r.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }).enabled
    }

    function o(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e;
        return s.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }).enabled
    }
}