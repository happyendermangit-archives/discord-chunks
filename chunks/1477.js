function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("278074"),
        i = n("63202"),
        a = n("37295"),
        u = n("870331"),
        s = n("839894"),
        l = n("848864"),
        c = n("281767"),
        f = n("868615");
    t.default = function(e) {
        var t = (0, a.useStateFromStores)([s.default], function() {
            return s.default.products
        });
        return (0, r.useCallback)(function(n) {
            var r = n.type,
                a = n.skuId,
                s = t.get(a);
            u.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, o.match)(r).with(i.CollectiblesItemType.AVATAR_DECORATION, function() {
                    return f.AnalyticsPremiumFeatureNames.AVATAR_DECORATION
                }).with(i.CollectiblesItemType.PROFILE_EFFECT, function() {
                    return f.AnalyticsPremiumFeatureNames.PROFILE_EFFECT
                }).otherwise(function() {}),
                feature_tier: (0, l.isPremiumCollectiblesProduct)(s) ? f.AnalyticsPremiumFeatureTiers.FREE : f.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
                feature_selection: null == s ? void 0 : s.name,
                location_stack: e
            })
        }, [t, e])
    }
}