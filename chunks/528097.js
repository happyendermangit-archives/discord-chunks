function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        daysSinceYouBarFirstSeen: function() {
            return I
        },
        getNavYouBarExperiment: function() {
            return E
        }
    }), n("470079"), n("902704");
    var i = n("433517"),
        r = n("159626"),
        s = n("893638"),
        a = n("828695"),
        o = n("70956"),
        l = n("57132");
    let u = {
            showYouBar: !1,
            showMessagesButton: !1
        },
        d = !1,
        _ = u,
        c = (0, r.default)({
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

    function E(e, t) {
        var n, r;
        let o = !(0, l.isInMainTabsExperiment)(),
            E = !!o || (null == t ? void 0 : t.disable);
        return a.default.hasLoadedExperiments || E ? (0, s.getMergedExperimentConfigs)(c.existingUsers, c.newUsers, e, {
            ...t,
            disable: E,
            autoTrackExposure: !o && (null === (r = null == t ? void 0 : t.autoTrackExposure) || void 0 === r || r)
        }) : (!d && (_ = null !== (n = i.Storage.get("--you-bar-experiment-cached-config")) && void 0 !== n ? n : u, d = !0), _)
    }

    function I() {
        let e = i.Storage.get("--you-bar-experiment-first-seen");
        return null == e ? -1 : Math.floor((Date.now() - e) / o.default.Millis.DAY)
    }
}