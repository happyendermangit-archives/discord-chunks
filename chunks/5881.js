function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getIsEligibleForQuestsLogging: function() {
            return u
        },
        useQuestBarLogger: function() {
            return c
        }
    });
    var i = n("470079"),
        r = n("259443"),
        s = n("818083"),
        a = n("46140"),
        o = n("231338");
    let l = (0, s.createExperiment)({
            id: "2024-04_quests_logging",
            kind: "user",
            label: "Quests Logging",
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
                label: "Quest logging enabled",
                config: {
                    enabled: !0
                }
            }]
        }),
        u = e => {
            let {
                location: t,
                autoTrackExposure: n = !1
            } = e;
            return l.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n
            }).enabled
        },
        d = e => {
            let {
                location: t,
                autoTrackExposure: n = !1
            } = e, {
                enabled: i
            } = l.useExperiment({
                location: t
            }, {
                autoTrackExposure: n
            });
            return i
        },
        _ = new r.Logger("QuestBar");

    function c(e) {
        let t = d({
            location: a.QuestsExperimentLocations.QUESTS_BAR
        });
        return i.useEffect(() => {
            t && (_.name = "QuestBar (".concat(e.config.messages.questName, ")"))
        }, [t, e.config.messages.questName]), {
            log: t ? _.log : o.NOOP,
            warn: t ? _.warn : o.NOOP,
            error: t ? _.error : o.NOOP,
            info: t ? _.info : o.NOOP,
            verbose: t ? _.verbose : o.NOOP,
            trace: t ? _.trace : o.NOOP
        }
    }
}