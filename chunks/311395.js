function(e, t, n) {
    "use strict";
    n.r(t), n("627341");
    var i = n("470079"),
        r = n("278074"),
        a = n("979554"),
        s = n("399606"),
        o = n("626135"),
        l = n("597688"),
        u = n("884697"),
        d = n("981631"),
        _ = n("474936");
    t.default = e => {
        let t = (0, s.useStateFromStores)([l.default], () => l.default.products);
        return (0, i.useCallback)(n => {
            let {
                type: i,
                skuId: s
            } = n, l = t.get(s);
            o.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, r.match)(i).with(a.CollectiblesItemType.AVATAR_DECORATION, () => _.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(a.CollectiblesItemType.PROFILE_EFFECT, () => _.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
                feature_tier: (0, u.isPremiumCollectiblesProduct)(l) ? _.AnalyticsPremiumFeatureTiers.FREE : _.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                feature_selection: null == l ? void 0 : l.name,
                location_stack: e
            })
        }, [t, e])
    }
}