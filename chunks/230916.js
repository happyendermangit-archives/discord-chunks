function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useChurnDiscountedPrice: function() {
            return c
        },
        useDiscountedPrice: function() {
            return _
        }
    }), n("47120");
    var i = n("911969"),
        r = n("583046"),
        a = n("74179"),
        s = n("74538"),
        o = n("937615"),
        l = n("374649"),
        u = n("104494"),
        d = n("474936");
    let _ = e => {
            var t, n, _, c;
            let {
                paymentSourceId: E
            } = (0, a.default)({
                isGift: !1,
                activeSubscription: null
            }), I = (0, s.castPremiumSubscriptionAsSkuId)(d.SubscriptionPlanInfo[e].skuId), {
                priceOptions: T
            } = (0, r.default)({
                activeSubscription: null,
                skuIDs: [I],
                paymentSourceId: E,
                isGift: !1
            }), f = (0, u.usePremiumDiscountOffer)(), [S, h] = (0, l.useSubscriptionInvoicePreview)({
                items: [{
                    planId: e,
                    quantity: 1
                }],
                renewal: !0,
                preventFetch: !(null != f),
                paymentSourceId: E,
                currency: T.currency
            }), A = null == S ? void 0 : null === (c = S.invoiceItems) || void 0 === c ? void 0 : null === (_ = c.find(t => t.subscriptionPlanId === e)) || void 0 === _ ? void 0 : null === (n = _.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === i.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, m = (0, s.getPrice)(e, !1, !1, T);
            return (0, o.formatPrice)(m.amount - (null != A ? A : 0), m.currency)
        },
        c = (e, t, n) => {
            var u, _, c, E;
            let {
                paymentSourceId: I
            } = (0, a.default)({
                isGift: !1,
                activeSubscription: null
            }), T = (0, s.castPremiumSubscriptionAsSkuId)(d.SubscriptionPlanInfo[t].skuId), {
                priceOptions: f
            } = (0, r.default)({
                activeSubscription: null,
                skuIDs: [T],
                paymentSourceId: I,
                isGift: !1
            }), [S, h] = (0, l.useSubscriptionInvoicePreview)({
                subscriptionId: e.id,
                items: [{
                    planId: t,
                    quantity: 1
                }],
                renewal: !0,
                preventFetch: !(null != n),
                paymentSourceId: I,
                currency: f.currency,
                userDiscountOfferId: null == n ? void 0 : n.id
            }), A = null == S ? void 0 : null === (E = S.invoiceItems) || void 0 === E ? void 0 : null === (c = E.find(e => e.subscriptionPlanId === t)) || void 0 === c ? void 0 : null === (_ = c.discounts) || void 0 === _ ? void 0 : null === (u = _.find(e => e.type === i.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === u ? void 0 : u.amount, m = (0, s.getPrice)(t, !1, !1, f);
            return (0, o.formatPrice)(m.amount - (null != A ? A : 0), m.currency)
        }
}