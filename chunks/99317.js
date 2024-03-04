function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getNavYouBarExperiment: function() {
            return f
        }
    }), n("884691"), n("233736");
    var i = n("95410"),
        s = n("868493"),
        r = n("133337"),
        a = n("760190"),
        o = n("21121");
    let l = {
            showYouBar: !1,
            showMessagesButton: !1
        },
        u = !1,
        d = l,
        c = (0, s.default)({
            kind: "user",
            id: "2024-02_navi_bar",
            label: "Mobile Redesign - Nav Experiment: You Bar",
            defaultConfig: l,
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    showYouBar: !1,
                    showMessagesButton: !1
                }
            }, {
                id: 1,
                label: "You Bar (2c)",
                config: {
                    showYouBar: !0,
                    showMessagesButton: !1
                }
            }, {
                id: 2,
                label: "You Bar (2c) with messages button",
                config: {
                    showYouBar: !0,
                    showMessagesButton: !0
                }
            }]
        });

    function f(e, t) {
        var n, s;
        let f = !(0, o.isInMainTabsExperiment)(),
            _ = !!f || (null == t ? void 0 : t.disable);
        return a.default.hasLoadedExperiments || _ ? (0, r.getMergedExperimentConfigs)(c.existingUsers, c.newUsers, e, {
            ...t,
            disable: _,
            autoTrackExposure: !f && (null === (s = null == t ? void 0 : t.autoTrackExposure) || void 0 === s || s)
        }) : (!u && (d = null !== (n = i.default.get("--you-bar-experiment-cached-config")) && void 0 !== n ? n : l, u = !0), d)
    }
}