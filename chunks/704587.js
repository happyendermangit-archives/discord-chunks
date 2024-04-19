function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DmSettingsUpsellExperiment: function() {
            return i
        },
        isEligibleForDmSettingsUpsell: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-04_dm_settings_upsell",
        label: "DM Settings Upsell",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable DM Settings Upsell (with upsell threshold at 2 rejected MRs)",
            config: {
                enabled: !0
            }
        }, {
            id: 2,
            label: "Enable DM Settings Upsell (with upsell threshold at 3 rejected MRs)",
            config: {
                enabled: !0
            }
        }]
    });

    function r(e) {
        let {
            location: t,
            autoTrackExposure: n = !1
        } = e;
        return i.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: n
        }).enabled
    }
}