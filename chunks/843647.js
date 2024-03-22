function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("446674"),
        i = n("697218"),
        a = n("10514"),
        l = n("719923"),
        s = n("716849"),
        o = n("676572"),
        u = n("942377"),
        c = n("917247"),
        d = n("646718");

    function f(e) {
        let {
            autoTrackExposure: t,
            experiment: n,
            location: f
        } = e, m = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser()), _ = (0, c.usePremiumTrialOffer)(), E = null != _, I = null != m && (0, l.isPremium)(m);
        (0, s.useMaybeFetchPremiumLikelihood)(n);
        let {
            enabled: T,
            useExpectedValue: p,
            useLikelihood: S
        } = n.useExperiment({
            location: null != f ? f : "1"
        }, {
            autoTrackExposure: !I && !E && t
        }), {
            premiumLikelihood: P,
            fetched: R
        } = (0, r.useStateFromStoresObject)([o.default], () => {
            let e = o.default.getState();
            return {
                fetched: e.fetched,
                premiumLikelihood: e.premiumLikelihood
            }
        }), C = (0, r.useStateFromStores)([a.default], () => a.default.isLoadedForSKUs([d.PremiumSubscriptionSKUs.TIER_0, d.PremiumSubscriptionSKUs.TIER_2])), O = !I && T && !E && (p ? !R || !C : !R), g = d.PremiumTypes.TIER_2;
        if (E) {
            let e = _.subscription_trial;
            (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_0 ? g = d.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === d.PremiumSubscriptionSKUs.TIER_2 && (g = d.PremiumTypes.TIER_2)
        } else if (!I && !O && T) {
            if (p) {
                let {
                    amount: e
                } = (0, l.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                    amount: t
                } = (0, l.getPrice)(d.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                g = (0, u.getHigherExpectedValue)(P, e, t)
            } else S && (g = (0, u.getHighestLikelihood)(P))
        }
        return {
            isLoading: O,
            suggestedPremiumType: g
        }
    }
}