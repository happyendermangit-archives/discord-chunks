function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        u = n("10514"),
        r = n("713518"),
        l = n("646718"),
        a = n("843455");

    function o(t) {
        var e, n;
        let {
            activeSubscription: o,
            skuIDs: s,
            paymentSourceId: c,
            isGift: S
        } = t;
        s = s.filter(t => t !== l.PremiumSubscriptionSKUs.NONE);
        let E = (0, i.useStateFromStores)([u.default], () => {
                let t = u.default.getPlanIdsForSkus(s).filter(t => !S || l.PREMIUM_PLANS.has(t));
                return t.length > 0 ? u.default.get(t[0]) : null
            }),
            d = null == E ? [] : (0, r.getCurrencies)(E.id, c, S),
            f = null !== (n = null !== (e = d.find(t => t === (null == o ? void 0 : o.currency))) && void 0 !== e ? e : d[0]) && void 0 !== n ? n : a.CurrencyCodes.USD;
        return {
            ...(0, r.useCurrencyWithPaymentSourceChange)(f, null == E ? void 0 : E.id, c, S, s),
            currencies: d
        }
    }
}