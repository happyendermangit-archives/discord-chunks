function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForQuests: function() {
            return s
        },
        useIsEligibleForQuests: function() {
            return r
        }
    });
    var i = n("619935"),
        l = n("862205");
    let a = (0, l.createExperiment)({
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
        s = e => {
            let {
                location: t
            } = e, n = a.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            }), l = i.default.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !l.paymentsBlocked
        },
        r = e => {
            let {
                location: t
            } = e, n = a.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            }), l = i.default.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !l.paymentsBlocked
        }
}