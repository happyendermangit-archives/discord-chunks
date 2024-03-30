function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForContentInventoryV1: function() {
            return a
        }
    });
    var r = n("94498"),
        o = (0, r.createExperiment)({
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
        i = (0, r.createExperiment)({
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
        s.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }), u.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        });
        var t = o.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }).enabled;
        return t && i.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }), t
    }(0, r.createExperiment)({
        kind: "user",
        id: "2024-03_content_inventory_surface_holdout",
        label: "Content Inventory Surface Holdout",
        defaultConfig: {},
        treatments: []
    });
    var u = (0, r.createExperiment)({
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
        s = (0, r.createExperiment)({
            kind: "user",
            id: "2024-03_holdout_bug_main_right_way",
            label: "Holdout Bug Experiment Right Way (pls ignore)",
            defaultConfig: {},
            treatments: [{
                id: 1,
                label: "Treament",
                config: {}
            }]
        })
}