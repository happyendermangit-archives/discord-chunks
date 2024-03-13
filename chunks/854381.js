function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        r = n("10514"),
        u = n("713518"),
        l = n("646718"),
        a = n("843455");

    function o(t) {
        var e, n;
        let {
            activeSubscription: o,
            skuIDs: s,
            paymentSourceId: c,
            isGift: d
        } = t;
        s = s.filter(t => t !== l.PremiumSubscriptionSKUs.NONE);
        let S = (0, i.useStateFromStores)([r.default], () => {
                let t = r.default.getPlanIdsForSkus(s).filter(t => !d || l.PREMIUM_PLANS.has(t));
                return t.length > 0 ? r.default.get(t[0]) : null
            }),
            E = null == S ? [] : (0, u.getCurrencies)(S.id, c, d),
            f = null !== (n = null !== (e = E.find(t => t === (null == o ? void 0 : o.currency))) && void 0 !== e ? e : E[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
        return {
            ...(0, u.useCurrencyWithPaymentSourceChange)(f, null == S ? void 0 : S.id, c, d, s),
            currencies: E
        }
    }
}