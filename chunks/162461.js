function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceEnrichmentsExperiment: function() {
            return _
        },
        isEligibleForContentInventoryV1: function() {
            return a
        },
        isEligibleForListenedMediaInventory: function() {
            return d
        }
    });
    var i = n("818083");
    let r = (0, i.createExperiment)({
            kind: "user",
            id: "2024-03_content_inventory_memberlist_and_ranker",
            label: "Enables the memberlist content feed",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Recency",
                config: {
                    enabled: !0
                }
            }, {
                id: 2,
                label: "Heuristic",
                config: {
                    enabled: !0
                }
            }]
        }),
        s = (0, i.createExperiment)({
            kind: "user",
            id: "2024-03_content_inventory_ranker_client_dummy",
            label: "Tracks exposure for which ranker bucket the user is in. This is here to test an exposure bug",
            defaultConfig: {},
            treatments: [{
                id: 1,
                label: "Heuristic",
                config: {}
            }]
        });

    function a(e) {
        l.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }), o.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        let {
            enabled: t
        } = r.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        return t && s.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }), t
    }(0, i.createExperiment)({
        kind: "user",
        id: "2024-03_content_inventory_surface_holdout",
        label: "Content Inventory Surface Holdout",
        defaultConfig: {},
        treatments: []
    });
    let o = (0, i.createExperiment)({
            kind: "user",
            id: "2024-03_holdout_bug_main_wrong_way",
            label: "Holdout Bug Experiment Wrong Way (pls ignore)",
            defaultConfig: {},
            treatments: [{
                id: 1,
                label: "Treament",
                config: {}
            }]
        }),
        l = (0, i.createExperiment)({
            kind: "user",
            id: "2024-03_holdout_bug_main_right_way",
            label: "Holdout Bug Experiment Right Way (pls ignore)",
            defaultConfig: {},
            treatments: [{
                id: 1,
                label: "Treament",
                config: {}
            }]
        }),
        u = (0, i.createExperiment)({
            kind: "user",
            id: "2024-04_content_inventory_listened_media",
            label: "Content Inventory: LISTENED_MEDIA",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Enabled",
                config: {
                    enabled: !0
                }
            }]
        });

    function d(e) {
        let {
            enabled: t
        } = u.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        return t
    }
    let _ = (0, i.createExperiment)({
        kind: "user",
        id: "2024-04_content_inventory_voice_enrichments",
        label: "Experimental enrichments",
        defaultConfig: {
            showBadge: !1,
            showJoinButton: !1
        },
        treatments: [{
            id: 1,
            label: "Treament",
            config: {
                showBadge: !0,
                showJoinButton: !0
            }
        }]
    })
}