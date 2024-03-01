function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForQuests: function() {
            return a
        },
        useIsEligibleForQuests: function() {
            return u
        }
    });
    var s = n("619935"),
        i = n("862205");
    let r = (0, i.createExperiment)({
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
                location: t,
                autoTrackExposure: n
            } = e, i = r.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n
            }), a = s.default.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n
            });
            return i.enabled && !a.paymentsBlocked
        },
        u = e => {
            let {
                location: t,
                autoTrackExposure: n
            } = e, i = r.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            }), a = s.default.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            });
            return i.enabled && !a.paymentsBlocked
        }
}