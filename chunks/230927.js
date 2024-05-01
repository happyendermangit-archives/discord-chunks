function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetAnnualDiscountInvoicePreview: function() {
            return u
        }
    }), n("47120");
    var i = n("442837"),
        r = n("509545"),
        a = n("74538"),
        s = n("374649"),
        o = n("104494"),
        l = n("474936");

    function u(e) {
        var t, n;
        let {
            priceOptions: u,
            preventFetch: d,
            selectedSkuId: _,
            isGift: c = !1,
            planGroup: E,
            activeSubscription: I
        } = e, T = (0, o.usePremiumAnnualDiscountOffer)(), f = (0, i.useStateFromStores)([r.default], () => r.default.get(l.SubscriptionPlans.PREMIUM_YEAR_TIER_2)), S = null == T ? void 0 : null === (t = T.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => l.SubscriptionPlanInfo[e].skuId === _), h = null != I && null != f ? (0, a.getItemsWithUpsertedPlanIdForGroup)(I, f.id, 1, new Set(E)) : null, A = !c && null != T && null != _ && S, [m, N] = (0, s.useSubscriptionInvoicePreview)({
            subscriptionId: null !== (n = null == I ? void 0 : I.id) && void 0 !== n ? n : "null",
            items: h,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: !A || null == I || d
        }), [p, O] = (0, s.useSubscriptionInvoicePreview)({
            items: [{
                planId: l.SubscriptionPlans.PREMIUM_YEAR_TIER_2,
                quantity: 1
            }],
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: u.paymentSourceId,
            currency: u.currency,
            preventFetch: !A || null != I || d
        });
        return null != m ? {
            annualInvoicePreview: m,
            annualInvoicePreviewError: N,
            isEligibleForAnnualDiscount: A
        } : null != p ? {
            annualInvoicePreview: p,
            annualInvoicePreviewError: O,
            isEligibleForAnnualDiscount: A
        } : {
            annualInvoicePreview: null,
            annualInvoicePreviewError: null,
            isEligibleForAnnualDiscount: A
        }
    }
}