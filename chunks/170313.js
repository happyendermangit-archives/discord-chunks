function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return f
        }
    }), r("794252");
    var a = r("884691"),
        l = r("506838"),
        n = r("265586"),
        i = r("65597"),
        u = r("599110"),
        o = r("853987"),
        s = r("491232"),
        c = r("49111"),
        d = r("646718"),
        f = e => {
            let t = (0, i.default)([o.default], () => o.default.products);
            return (0, a.useCallback)(r => {
                let {
                    type: a,
                    skuId: i
                } = r, o = t.get(i);
                u.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: (0, l.match)(a).with(n.CollectiblesItemType.AVATAR_DECORATION, () => d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(n.CollectiblesItemType.PROFILE_EFFECT, () => d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                    feature_tier: (0, s.isPremiumCollectiblesProduct)(o) ? d.AnalyticsPremiumFeatureTiers.FREE : d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                    feature_selection: null == o ? void 0 : o.name,
                    location_stack: e
                })
            }, [t, e])
        }
}