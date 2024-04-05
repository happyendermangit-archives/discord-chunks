function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        daysSinceYouBarFirstSeen: function() {
            return h
        },
        getNavYouBarExperiment: function() {
            return b
        }
    }), a("470079"), a("902704");
    var d = a("433517"),
        n = a("159626"),
        c = a("893638"),
        i = a("828695"),
        o = a("70956"),
        r = a("278147");
    let f = {
            showYouBar: !1,
            showMessagesButton: !1
        },
        s = !1,
        l = f,
        u = (0, n.default)({
            kind: "user",
            id: "2024-02_navi_bar",
            label: "Mobile Redesign - Nav Experiment: You Bar",
            defaultConfig: f,
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

    function b(e, t) {
        var a, n;
        let o = !(0, r.isInMainTabsExperiment)(),
            b = !!o || (null == t ? void 0 : t.disable);
        return i.default.hasLoadedExperiments || b ? (0, c.getMergedExperimentConfigs)(u.existingUsers, u.newUsers, e, {
            ...t,
            disable: b,
            autoTrackExposure: !o && (null === (n = null == t ? void 0 : t.autoTrackExposure) || void 0 === n || n)
        }) : (!s && (l = null !== (a = d.Storage.get("--you-bar-experiment-cached-config")) && void 0 !== a ? a : f, s = !0), l)
    }

    function h() {
        let e = d.Storage.get("--you-bar-experiment-first-seen");
        return null == e ? -1 : Math.floor((Date.now() - e) / o.default.Millis.DAY)
    }
}