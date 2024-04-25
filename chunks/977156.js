function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestBarExperiment: function() {
            return c
        },
        QuestBarExperimentVariants: function() {
            return r
        },
        getIsEligibleForQuests: function() {
            return l
        },
        isQuestPreviewToolEnabled: function() {
            return _
        },
        useIsEligibleForQuests: function() {
            return u
        }
    });
    var i, r, s = n("211242"),
        a = n("818083");
    let o = (0, a.createExperiment)({
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
        l = e => {
            let {
                location: t
            } = e, n = o.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            }), i = s.default.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !i.paymentsBlocked
        },
        u = e => {
            let {
                location: t
            } = e, n = o.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            }), i = s.default.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !i.paymentsBlocked
        },
        d = (0, a.createExperiment)({
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

    function _(e) {
        let {
            location: t
        } = e;
        return d.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !1
        }).enabled
    }(i = r || (r = {}))[i.V1 = 0] = "V1", i[i.V2 = 1] = "V2";
    let c = (0, a.createExperiment)({
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