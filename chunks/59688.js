function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCanShowNewGuildTooltip: function() {
            return r
        },
        useCanShowNewGuildTooltipActivityEmptyState: function() {
            return a
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2024-04_server_peek",
        label: "Change the guild tooltip",
        defaultConfig: {
            showNewGuildTooltip: !1,
            showNewGuildTooltipActivityEmptyState: !1
        },
        treatments: [{
            id: 1,
            label: "With the new tooltip and without the activity empty state",
            config: {
                showNewGuildTooltip: !0,
                showNewGuildTooltipActivityEmptyState: !1
            }
        }, {
            id: 2,
            label: "With the new tooltip and activity empty state",
            config: {
                showNewGuildTooltip: !0,
                showNewGuildTooltipActivityEmptyState: !0
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

    function a() {
        let {
            showNewGuildTooltipActivityEmptyState: e
        } = i.useExperiment({
            location: "useCanShowNewGuildTooltipActivityEmptyState"
        }, {
            autoTrackExposure: !0
        });
        return e
    }
}