function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsEligibleForMembersListQuestEntrypoint: function() {
            return a
        }
    });
    var i = n("818083"),
        r = n("57655");
    let s = (0, i.createExperiment)({
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
        a = e => {
            let {
                location: t,
                autoTrackExposure: n = !1
            } = e, i = (0, r.useIsEligibleForQuests)({
                location: t
            }), {
                enabled: a
            } = s.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            });
            return i && a
        }
}