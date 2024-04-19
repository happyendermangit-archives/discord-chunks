function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCanShowNewGuildTooltip: function() {
            return r
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-04_server_peek",
        label: "Change the guild badge and tooltip",
        defaultConfig: {
            showNewGuildActivityBadge: !1,
            showNewGuildTooltip: !1
        },
        treatments: [{
            id: 1,
            label: "With the current guild badges and new tooltip",
            config: {
                showNewGuildActivityBadge: !1,
                showNewGuildTooltip: !0
            }
        }, {
            id: 2,
            label: "With the new guild badge and new tooltip",
            config: {
                showNewGuildActivityBadge: !0,
                showNewGuildTooltip: !0
            }
        }]
    });

    function r() {
        let {
            showNewGuildTooltip: e
        } = i.useExperiment({
            location: "useCanShowNewGuildTooltip"
        }, {
            autoTrackExposure: !0
        });
        return e
    }
}