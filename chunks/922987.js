function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsEligibleForMembersListQuestEntrypoint: function() {
            return s
        }
    });
    var i = n("862205"),
        l = n("374023");
    let a = (0, i.createExperiment)({
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
        s = e => {
            let {
                location: t,
                autoTrackExposure: n = !1
            } = e, i = (0, l.useIsEligibleForQuests)({
                location: t
            }), {
                enabled: s
            } = a.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            });
            return i && s
        }
}