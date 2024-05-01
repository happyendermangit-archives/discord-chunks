function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQuestLogger: function() {
            return l
        }
    });
    var i = n("259443"),
        r = n("818083"),
        a = n("231338");
    let s = (0, r.createExperiment)({
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
            return s.getCurrentConfig({
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
        }), s = null == t ? void 0 : t.config.messages.questName, l = "QuestLogger ".concat(n).concat(null != s ? " (".concat(s, ")") : "", ")"), u = new i.Logger(l);
        return {
            log: r ? u.log : a.NOOP,
            warn: r ? u.warn : a.NOOP,
            error: r ? u.error : a.NOOP,
            info: r ? u.info : a.NOOP,
            verbose: r ? u.verbose : a.NOOP,
            trace: r ? u.trace : a.NOOP
        }
    }
}