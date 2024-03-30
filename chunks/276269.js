function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForQuests: function() {
            return i
        },
        useIsEligibleForQuests: function() {
            return a
        }
    });
    var r = n("453367"),
        o = (0, n("94498").createExperiment)({
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
        i = function(e) {
            var t = e.location,
                n = o.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: !1
                }),
                i = r.default.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: !1
                });
            return n.enabled && !i.paymentsBlocked
        },
        a = function(e) {
            var t = e.location,
                n = o.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: !1
                }),
                i = r.default.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: !1
                });
            return n.enabled && !i.paymentsBlocked
        }
}