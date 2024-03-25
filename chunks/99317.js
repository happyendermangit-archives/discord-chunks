function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getNavYouBarExperiment: function() {
            return f
        },
        daysSinceYouBarFirstSeen: function() {
            return E
        }
    }), n("884691"), n("233736");
    var i = n("95410"),
        s = n("868493"),
        r = n("133337"),
        a = n("760190"),
        o = n("718517"),
        l = n("21121");
    let u = {
            showYouBar: !1,
            showMessagesButton: !1
        },
        d = !1,
        c = u,
        _ = (0, s.default)({
            kind: "user",
            id: "2024-02_navi_bar",
            label: "Mobile Redesign - Nav Experiment: You Bar",
            defaultConfig: u,
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
        let o = !(0, l.isInMainTabsExperiment)(),
            f = !!o || (null == t ? void 0 : t.disable);
        return a.default.hasLoadedExperiments || f ? (0, r.getMergedExperimentConfigs)(_.existingUsers, _.newUsers, e, {
            ...t,
            disable: f,
            autoTrackExposure: !o && (null === (s = null == t ? void 0 : t.autoTrackExposure) || void 0 === s || s)
        }) : (!d && (c = null !== (n = i.Storage.get("--you-bar-experiment-cached-config")) && void 0 !== n ? n : u, d = !0), c)
    }

    function E() {
        let e = i.Storage.get("--you-bar-experiment-first-seen");
        return null == e ? -1 : Math.floor((Date.now() - e) / o.default.Millis.DAY)
    }
}