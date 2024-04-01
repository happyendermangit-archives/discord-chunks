function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("442837"),
        r = n("594174"),
        s = n("509545"),
        a = n("74538"),
        o = n("857185"),
        l = n("7252"),
        u = n("926111"),
        d = n("639119"),
        _ = n("474936");

    function c(e) {
        let {
            autoTrackExposure: t,
            experiment: n,
            location: c
        } = e, E = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), I = (0, d.usePremiumTrialOffer)(), T = null != I, f = null != E && (0, a.isPremium)(E);
        (0, o.useMaybeFetchPremiumLikelihood)(n);
        let {
            enabled: S,
            useExpectedValue: h,
            useLikelihood: A
        } = n.useExperiment({
            location: null != c ? c : "1"
        }, {
            autoTrackExposure: !f && !T && t
        }), {
            premiumLikelihood: m,
            fetched: N
        } = (0, i.useStateFromStoresObject)([l.default], () => {
            let e = l.default.getState();
            return {
                fetched: e.fetched,
                premiumLikelihood: e.premiumLikelihood
            }
        }), O = (0, i.useStateFromStores)([s.default], () => s.default.isLoadedForSKUs([_.PremiumSubscriptionSKUs.TIER_0, _.PremiumSubscriptionSKUs.TIER_2])), p = !f && S && !T && (h ? !N || !O : !N), R = _.PremiumTypes.TIER_2;
        if (T) {
            let e = I.subscription_trial;
            (null == e ? void 0 : e.sku_id) === _.PremiumSubscriptionSKUs.TIER_0 ? R = _.PremiumTypes.TIER_0 : (null == e ? void 0 : e.sku_id) === _.PremiumSubscriptionSKUs.TIER_2 && (R = _.PremiumTypes.TIER_2)
        } else if (!f && !p && S) {
            if (h) {
                let {
                    amount: e
                } = (0, a.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_0), {
                    amount: t
                } = (0, a.getPrice)(_.SubscriptionPlans.PREMIUM_MONTH_TIER_2);
                R = (0, u.getHigherExpectedValue)(m, e, t)
            } else A && (R = (0, u.getHighestLikelihood)(m))
        }
        return {
            isLoading: p,
            suggestedPremiumType: R
        }
    }
}