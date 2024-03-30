function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsEligibleForMembersListQuestEntrypoint: function() {
            return a
        }
    });
    var r = n("94498"),
        o = n("276269"),
        i = (0, r.createExperiment)({
            id: "2024-03_quests_members_list_entrypoint",
            kind: "user",
            label: "Quests Members List Entrypoint",
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
                label: "Quests Members List Entrypoint enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        a = function(e) {
            var t = e.location,
                n = e.autoTrackExposure,
                r = (0, o.useIsEligibleForQuests)({
                    location: t
                }),
                a = i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: void 0 !== n && n
                }).enabled;
            return r && a
        }
}