function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("442837"),
        r = n("509545"),
        s = n("212895"),
        a = n("474936"),
        o = n("231338");

    function l(e) {
        var t, n;
        let {
            activeSubscription: l,
            skuIDs: u,
            paymentSourceId: d,
            isGift: _
        } = e;
        u = u.filter(e => e !== a.PremiumSubscriptionSKUs.NONE);
        let c = (0, i.useStateFromStores)([r.default], () => {
                let e = r.default.getPlanIdsForSkus(u).filter(e => !_ || a.PREMIUM_PLANS.has(e));
                return e.length > 0 ? r.default.get(e[0]) : null
            }),
            E = null == c ? [] : (0, s.getCurrencies)(c.id, d, _),
            I = null !== (n = null !== (t = E.find(e => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : o.CurrencyCodes.USD;
        return {
            ...(0, s.useCurrencyWithPaymentSourceChange)(I, null == c ? void 0 : c.id, d, _, u),
            currencies: E
        }
    }
}