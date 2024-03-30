function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("898511"),
        o = n("208454"),
        i = n("622753"),
        a = n("830721"),
        u = n("461621"),
        s = n("449229"),
        l = n("230413"),
        c = n("844615"),
        f = n("868615");

    function d(e) {
        var t = e.autoTrackExposure,
            n = e.experiment,
            d = e.location,
            _ = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getCurrentUser()
            }),
            E = (0, c.usePremiumTrialOffer)(),
            p = null != E,
            m = null != _ && (0, a.isPremium)(_);
        (0, u.useMaybeFetchPremiumLikelihood)(n);
        var y = n.useExperiment({
                location: null != d ? d : "1"
            }, {
                autoTrackExposure: !m && !p && t
            }),
            I = y.enabled,
            h = y.useExpectedValue,
            O = y.useLikelihood,
            T = (0, r.useStateFromStoresObject)([s.default], function() {
                var e = s.default.getState();
                return {
                    fetched: e.fetched,
                    premiumLikelihood: e.premiumLikelihood
                }
            }),
            S = T.premiumLikelihood,
            v = T.fetched,
            g = (0, r.useStateFromStores)([i.default], function() {
                return i.default.isLoadedForSKUs([f.PremiumSubscriptionSKUs.TIER_0, f.PremiumSubscriptionSKUs.TIER_2])
            }),
            A = !m && I && !p && (h ? !v || !g : !v),
            b = f.PremiumTypes.TIER_2;
        if (p) {
            var N = E.subscription_trial;
            (null == N ? void 0 : N.sku_id) === f.PremiumSubscriptionSKUs.TIER_0 ? b = f.PremiumTypes.TIER_0 : (null == N ? void 0 : N.sku_id) === f.PremiumSubscriptionSKUs.TIER_2 && (b = f.PremiumTypes.TIER_2)
        } else if (!m && !A && I) {
            if (h) {
                var R = (0, a.getPrice)(f.SubscriptionPlans.PREMIUM_MONTH_TIER_0).amount,
                    C = (0, a.getPrice)(f.SubscriptionPlans.PREMIUM_MONTH_TIER_2).amount;
                b = (0, l.getHigherExpectedValue)(S, R, C)
            } else O && (b = (0, l.getHighestLikelihood)(S))
        }
        return {
            isLoading: A,
            suggestedPremiumType: b
        }
    }
}