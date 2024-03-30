function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForQuests: function() {
            return s
        },
        useIsEligibleForQuests: function() {
            return a
        }
    });
    var i = n("211242");
    let r = (0, n("818083").createExperiment)({
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
            } = e, n = r.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            }), s = i.default.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !s.paymentsBlocked
        },
        a = e => {
            let {
                location: t
            } = e, n = r.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            }), s = i.default.useExperiment({
                location: t
            }, {
                autoTrackExposure: !1
            });
            return n.enabled && !s.paymentsBlocked
        }
}