function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMergedTabsExperiment: function() {
            return c
        }
    }), n("470079"), n("902704");
    var i = n("433517"),
        r = n("159626"),
        a = n("893638"),
        s = n("828695"),
        o = n("57132");
    let l = {
            mergeTabs: !1,
            hideLabels: !1,
            roundedCorners: !1,
            blurTabBar: !1
        },
        u = !1,
        d = l,
        _ = (0, r.default)({
            kind: "user",
            id: "2024-04_merged_tabs",
            label: "Mobile Redesign - Merge Tabs Last Stand Experiment",
            defaultConfig: l,
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

    function c(e, t) {
        var n, r;
        let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !(0, o.isInMainTabsExperiment)(),
            E = !!c || (null == t ? void 0 : t.disable);
        return s.default.hasLoadedExperiments || E ? (0, a.getMergedExperimentConfigs)(_.existingUsers, _.newUsers, e, {
            ...t,
            disable: E,
            autoTrackExposure: !c && (null === (r = null == t ? void 0 : t.autoTrackExposure) || void 0 === r || r)
        }) : (!u && (d = null !== (n = i.Storage.get("--merged-tabs-experiment-cached-config")) && void 0 !== n ? n : l, u = !0), d)
    }
}