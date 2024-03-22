function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDiscountedPrice: function() {
            return d
        },
        useChurnDiscountedPrice: function() {
            return f
        }
    }), n("222007");
    var r = n("798609"),
        i = n("854381"),
        a = n("986681"),
        l = n("719923"),
        s = n("153160"),
        o = n("809071"),
        u = n("154889"),
        c = n("646718");
    let d = e => {
            var t, n, d, f;
            let {
                paymentSourceId: m
            } = (0, a.default)({
                isGift: !1,
                activeSubscription: null
            }), _ = (0, l.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[e].skuId), {
                priceOptions: E
            } = (0, i.default)({
                activeSubscription: null,
                skuIDs: [_],
                paymentSourceId: m,
                isGift: !1
            }), I = (0, u.usePremiumDiscountOffer)(), [T, p] = (0, o.useSubscriptionInvoicePreview)({
                items: [{
                    planId: e,
                    quantity: 1
                }],
                renewal: !0,
                preventFetch: !(null != I),
                paymentSourceId: m,
                currency: E.currency
            }), S = null == T ? void 0 : null === (f = T.invoiceItems) || void 0 === f ? void 0 : null === (d = f.find(t => t.subscriptionPlanId === e)) || void 0 === d ? void 0 : null === (n = d.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, P = (0, l.getPrice)(e, !1, !1, E);
            return (0, s.formatPrice)(P.amount - (null != S ? S : 0), P.currency)
        },
        f = (e, t, n) => {
            var u, d, f, m;
            let {
                paymentSourceId: _
            } = (0, a.default)({
                isGift: !1,
                activeSubscription: null
            }), E = (0, l.castPremiumSubscriptionAsSkuId)(c.SubscriptionPlanInfo[t].skuId), {
                priceOptions: I
            } = (0, i.default)({
                activeSubscription: null,
                skuIDs: [E],
                paymentSourceId: _,
                isGift: !1
            }), [T, p] = (0, o.useSubscriptionInvoicePreview)({
                subscriptionId: e.id,
                items: [{
                    planId: t,
                    quantity: 1
                }],
                renewal: !0,
                preventFetch: !(null != n),
                paymentSourceId: _,
                currency: I.currency,
                userDiscountOfferId: null == n ? void 0 : n.id
            }), S = null == T ? void 0 : null === (m = T.invoiceItems) || void 0 === m ? void 0 : null === (f = m.find(e => e.subscriptionPlanId === t)) || void 0 === f ? void 0 : null === (d = f.discounts) || void 0 === d ? void 0 : null === (u = d.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === u ? void 0 : u.amount, P = (0, l.getPrice)(t, !1, !1, I);
            return (0, s.formatPrice)(P.amount - (null != S ? S : 0), P.currency)
        }
}