function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("442837"),
        o = n("481060"),
        l = n("911969"),
        u = n("509545"),
        d = n("78839"),
        _ = n("74538"),
        c = n("937615"),
        E = n("104494"),
        I = n("639119"),
        T = n("230927"),
        f = n("474936"),
        S = n("689938"),
        h = n("618551");
    t.default = function(e) {
        var t, n, r, A;
        let {
            subscriptionTier: m,
            interval: N = f.SubscriptionIntervalTypes.MONTH,
            className: p,
            isGift: O = !1,
            variant: R,
            priceOptions: C
        } = e, g = (0, E.usePremiumAnnualDiscountOffer)(), L = (0, I.usePremiumTrialOffer)(), v = (0, s.useStateFromStores)([u.default], () => u.default.isLoadedForPremiumSKUs()), D = (0, s.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription()), {
            annualInvoicePreview: M
        } = (0, T.useGetAnnualDiscountInvoicePreview)({
            priceOptions: null != C ? C : {
                currency: "null"
            },
            preventFetch: null == g || null == C || null != L || m !== f.PremiumSubscriptionSKUs.TIER_2 || N !== f.SubscriptionIntervalTypes.YEAR,
            selectedSkuId: f.PremiumSubscriptionSKUs.TIER_2,
            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
            activeSubscription: D
        }), y = null == M ? void 0 : null === (A = M.invoiceItems) || void 0 === A ? void 0 : null === (r = A.find(e => e.subscriptionPlanId === f.SubscriptionPlans.PREMIUM_YEAR_TIER_2)) || void 0 === r ? void 0 : null === (n = r.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === l.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
        if (!v) return (0, i.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: h.priceSpinner
        });
        let P = u.default.getForSkuAndInterval((0, _.castPremiumSubscriptionAsSkuId)(m), N),
            U = null != y ? (0, _.getPrice)(f.SubscriptionPlans.PREMIUM_YEAR_TIER_2, !1, O, C) : null,
            b = null != P ? (0, _.getFormattedPriceForPlan)(P, C, !1, O) : null;
        return (0, i.jsx)(o.Heading, {
            color: "always-white",
            variant: null != R ? R : "heading-md/medium",
            className: a()(h.pricePerInterval, p),
            children: null != U && null != y ? (0, i.jsxs)("div", {
                className: h.annualDiscountString,
                children: [S.default.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE.format({
                    discountedPrice: (0, c.formatPrice)(U.amount - y, U.currency)
                }), S.default.Messages.BILLING_ANNUAL_DISCOUNT_TIER_CARD_YEARLY_PRICE_SUBTEXT.format({
                    regularPrice: b
                })]
            }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("span", {
                    className: h.price,
                    children: b
                }), " / ", (0, _.getIntervalStringAsNoun)(N)]
            })
        })
    }
}