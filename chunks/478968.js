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
        l = n("986681"),
        a = n("719923"),
        s = n("153160"),
        o = n("809071"),
        u = n("154889"),
        c = n("646718");
    let d = e => {
            var t, n, d, f;
            let {
                paymentSourceId: m
            } = (0, l.default)({
                isGift: !1,
                activeSubscription: null
            }), _ = c.SubscriptionPlanInfo[e].skuId, {
                priceOptions: E
            } = (0, i.default)({
                activeSubscription: null,
                skuIDs: [_],
                paymentSourceId: m,
                isGift: !1
            }), T = (0, u.usePremiumDiscountOffer)(), [I, C] = (0, o.useSubscriptionInvoicePreview)({
                items: [{
                    planId: e,
                    quantity: 1
                }],
                renewal: !0,
                preventFetch: !(null != T),
                paymentSourceId: m,
                currency: E.currency
            }), p = null == I ? void 0 : null === (f = I.invoiceItems) || void 0 === f ? void 0 : null === (d = f.find(t => t.subscriptionPlanId === e)) || void 0 === d ? void 0 : null === (n = d.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, S = (0, a.getPrice)(e, !1, !1, E);
            return (0, s.formatPrice)(S.amount - (null != p ? p : 0), S.currency)
        },
        f = (e, t, n) => {
            var u, d, f, m;
            let {
                paymentSourceId: _
            } = (0, l.default)({
                isGift: !1,
                activeSubscription: null
            }), E = c.SubscriptionPlanInfo[t].skuId, {
                priceOptions: T
            } = (0, i.default)({
                activeSubscription: null,
                skuIDs: [E],
                paymentSourceId: _,
                isGift: !1
            }), [I, C] = (0, o.useSubscriptionInvoicePreview)({
                subscriptionId: e.id,
                items: [{
                    planId: t,
                    quantity: 1
                }],
                renewal: !0,
                preventFetch: !(null != n),
                paymentSourceId: _,
                currency: T.currency,
                userDiscountOfferId: null == n ? void 0 : n.id
            }), p = null == I ? void 0 : null === (m = I.invoiceItems) || void 0 === m ? void 0 : null === (f = m.find(e => e.subscriptionPlanId === t)) || void 0 === f ? void 0 : null === (d = f.discounts) || void 0 === d ? void 0 : null === (u = d.find(e => e.type === r.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === u ? void 0 : u.amount, S = (0, a.getPrice)(t, !1, !1, T);
            return (0, s.formatPrice)(S.amount - (null != p ? p : 0), S.currency)
        }
}