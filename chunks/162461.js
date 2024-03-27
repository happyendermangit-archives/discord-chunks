function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForContentInventoryV1: function() {
            return a
        }
    });
    var i = n("818083");
    let r = (0, i.createExperiment)({
            kind: "user",
            id: "2024-02_v1_content_inventory_feed",
            label: "V1 Feed of the content inventory",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Show feed",
                config: {
                    enabled: !0
                }
            }]
        }),
        s = (0, i.createExperiment)({
            kind: "user",
            id: "2024-03_content_inventory_surface_holdout",
            label: "Content Inventory Surface Holdout",
            defaultConfig: {},
            treatments: []
        });

    function a(e) {
        s.getCurrentConfig({
            location: e
        }, {
            autoTrackExposure: !0
        }), l.getCurrentConfig({
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
        return t
    }
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
        })
}