function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQuestLogger: function() {
            return l
        }
    });
    var i = n("259443"),
        r = n("818083"),
        s = n("231338");
    let a = (0, r.createExperiment)({
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
        o = e => {
            let {
                location: t,
                autoTrackExposure: n = !1
            } = e;
            return a.getCurrentConfig({
                location: t
            }, {
                autoTrackExposure: n
            }).enabled
        };

    function l(e) {
        let {
            quest: t,
            location: n
        } = e, r = o({
            location: n
        }), a = null == t ? void 0 : t.config.messages.questName, l = "QuestLogger ".concat(n).concat(null != a ? " (".concat(a, ")") : "", ")"), u = new i.Logger(l);
        return {
            log: r ? u.log : s.NOOP,
            warn: r ? u.warn : s.NOOP,
            error: r ? u.error : s.NOOP,
            info: r ? u.info : s.NOOP,
            verbose: r ? u.verbose : s.NOOP,
            trace: r ? u.trace : s.NOOP
        }
    }
}