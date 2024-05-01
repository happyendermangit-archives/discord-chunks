function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestBarExperiment: function() {
            return _
        },
        QuestBarExperimentVariants: function() {
            return r
        },
        getIsEligibleForQuests: function() {
            return o
        },
        isQuestPreviewToolEnabled: function() {
            return d
        },
        useIsEligibleForQuests: function() {
            return l
        }
    });
    var i, r, a = n("818083");
    let s = (0, a.createExperiment)({
            id: "2023-12_quests",
            kind: "user",
            label: "Quests",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    enabled: !1
                }
            }, {
                id: 1,
                label: "Quests enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        o = e => {
            let {
                location: t
            } = e;
            return s.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            }).enabled
        },
        l = e => {
            let {
                location: t
            } = e;
            return s.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            }).enabled
        },
        u = (0, a.createExperiment)({
            id: "2024-04_quest_preview_tool",
            kind: "user",
            label: "Quest Preview Tool",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Preview tool enabled",
                config: {
                    enabled: !0
                }
            }]
        });

    function d(e) {
        let {
            location: t
        } = e;
        return u.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !1
        }).enabled
    }(i = r || (r = {}))[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2";
    let _ = (0, a.createExperiment)({
        id: "2024-05_quest_bar",
        kind: "user",
        label: "Quest Bar",
        defaultConfig: {
            primaryVariant: 0,
            progressVariant: 0
        },
        treatments: [{
            id: 1,
            label: "Quest Bar V2 with V1 Progress",
            config: {
                primaryVariant: 1,
                progressVariant: 0
            }
        }, {
            id: 2,
            label: "Quest Bar V2",
            config: {
                primaryVariant: 1,
                progressVariant: 1
            }
        }]
    })
}