function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("509545"),
        u = n("74538"),
        d = n("424082"),
        _ = n("104494"),
        c = n("639119"),
        E = n("474936"),
        I = n("689938"),
        T = n("13859");
    t.default = function(e) {
        let {
            subscriptionTier: t,
            interval: n = E.SubscriptionIntervalTypes.MONTH,
            className: r,
            isGift: f = !1,
            variant: S,
            priceOptions: h
        } = e, A = (0, _.usePremiumAnnualDiscountOffer)(), m = (0, c.usePremiumTrialOffer)(), {
            annualDiscountPercentage: N
        } = (0, d.getAnnualDiscountsExperimentConfig)("PremiumManager");
        if (!(0, a.useStateFromStores)([l.default], () => l.default.isLoadedForPremiumSKUs())) return (0, i.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: T.priceSpinner
        });
        let p = l.default.getForSkuAndInterval((0, u.castPremiumSubscriptionAsSkuId)(t), n),
            O = null != p ? (0, u.getFormattedPriceForPlan)(p, h, !1, f) : null,
            R = t !== E.PremiumSubscriptionSKUs.TIER_2 || n !== E.SubscriptionIntervalTypes.YEAR || null != m || f || null == A ? null : N;
        return (0, i.jsx)(o.Heading, {
            color: "always-white",
            variant: null != S ? S : "heading-md/medium",
            className: s()(T.pricePerInterval, r),
            children: null != R ? (0, i.jsx)("div", {
                className: T.annualDiscountString,
                children: I.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                    percent: R,
                    regularPrice: O
                })
            }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("span", {
                    className: T.price,
                    children: O
                }), " / ", (0, u.getIntervalStringAsNoun)(n)]
            })
        })
    }
}