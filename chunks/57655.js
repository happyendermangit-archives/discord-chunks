function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForQuests: function() {
            return a
        },
        isQuestPreviewToolEnabled: function() {
            return u
        },
        useIsEligibleForQuests: function() {
            return o
        }
    });
    var i = n("211242"),
        r = n("818083");
    let s = (0, r.createExperiment)({
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
        a = e => {
            let {
                location: t
            } = e, n = s.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            }), r = i.default.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !r.paymentsBlocked
        },
        o = e => {
            let {
                location: t
            } = e, n = s.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            }), r = i.default.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !r.paymentsBlocked
        },
        l = (0, r.createExperiment)({
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

    function u(e) {
        let {
            location: t
        } = e;
        return l.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !1
        }).enabled
    }
}