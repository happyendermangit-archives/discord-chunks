function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        shouldShowNitroBadge: function() {
            return r
        }
    });
    let l = (0, i("818083").createExperiment)({
        kind: "user",
        id: "2023-10_social_proofing_message_nitro_badge",
        label: "Social Proofing Message Nitro Badge",
        defaultConfig: {
            enabled: !1,
            hideNitroBadgeWhenRoleBadgePresent: !1
        },
        treatments: [{
            id: 1,
            label: "Prefer BOTH nitro badge AND role icon(s)",
            config: {
                enabled: !0,
                hideNitroBadgeWhenRoleBadgePresent: !1
            }
        }, {
            id: 2,
            label: "Prefer role icon(s) over nitro badge if both are present",
            config: {
                enabled: !0,
                hideNitroBadgeWhenRoleBadgePresent: !0
            }
        }]
    });

    function r(t, e) {
        let i = l.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        return i.enabled && (!i.hideNitroBadgeWhenRoleBadgePresent || i.hideNitroBadgeWhenRoleBadgePresent && !t)
    }
}