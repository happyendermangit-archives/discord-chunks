function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        getMergedTabsExperiment: function() {
            return u
        }
    }), a("470079"), a("902704");
    var d = a("433517"),
        n = a("159626"),
        i = a("893638"),
        c = a("828695"),
        r = a("278147");
    let o = {
            mergeTabs: !1,
            hideLabels: !1,
            roundedCorners: !1,
            blurTabBar: !1
        },
        f = !1,
        l = o,
        s = (0, n.default)({
            kind: "user",
            id: "2024-04_merged_tabs",
            label: "Mobile Redesign - Merge Tabs Last Stand Experiment",
            defaultConfig: o,
            treatments: [{
                id: 0,
                label: "Control",
                config: {
                    mergeTabs: !1,
                    hideLabels: !1,
                    roundedCorners: !1,
                    blurTabBar: !1
                }
            }, {
                id: 1,
                label: "Merged Tabs, Labels",
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !1,
                    blurTabBar: !1
                }
            }, {
                id: 2,
                label: "Merged Tabs, No Labels",
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !1,
                    blurTabBar: !1
                }
            }, {
                id: 3,
                label: "Merged Tabs, Labels, Rounded Corners",
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !0,
                    blurTabBar: !1
                }
            }, {
                id: 4,
                label: "Merged Tabs, No Labels, Rounded Corners",
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !0,
                    blurTabBar: !1
                }
            }, {
                id: 5,
                label: "Merged Tabs, Labels, Blurred Tab Bar",
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !1,
                    blurTabBar: !0
                }
            }, {
                id: 6,
                label: "Merged Tabs, No Labels, Blurred Tab Bar",
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !1,
                    blurTabBar: !0
                }
            }, {
                id: 7,
                label: "Merged Tabs, Labels, Rounded Corners, Blurred Tab Bar",
                config: {
                    mergeTabs: !0,
                    hideLabels: !1,
                    roundedCorners: !0,
                    blurTabBar: !0
                }
            }, {
                id: 8,
                label: "Merged Tabs, No Labels, Rounded Corners, Blurred Tab Bar",
                config: {
                    mergeTabs: !0,
                    hideLabels: !0,
                    roundedCorners: !0,
                    blurTabBar: !0
                }
            }]
        });

    function u(e, t) {
        var a, n;
        let u = !(0, r.isInMainTabsExperiment)(),
            b = !!u || (null == t ? void 0 : t.disable);
        return c.default.hasLoadedExperiments || b ? (0, i.getMergedExperimentConfigs)(s.existingUsers, s.newUsers, e, {
            ...t,
            disable: b,
            autoTrackExposure: !u && (null === (n = null == t ? void 0 : t.autoTrackExposure) || void 0 === n || n)
        }) : (!f && (l = null !== (a = d.Storage.get("--merged-tabs-experiment-cached-config")) && void 0 !== a ? a : o, f = !0), l)
    }
}