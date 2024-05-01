function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        discountOfferHasTier: function() {
            return _
        },
        hasUserDiscountExpired: function() {
            return d
        },
        usePremiumAnnualDiscountOffer: function() {
            return I
        },
        usePremiumDiscountOffer: function() {
            return E
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        a = n("846519"),
        s = n("594174"),
        o = n("295226"),
        l = n("74538"),
        u = n("474936");

    function d(e) {
        return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
    }

    function _(e, t) {
        var n;
        return null != e && new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId)).has(t)
    }

    function c(e, t) {
        let n = (0, r.useStateFromStores)([o.default], () => o.default.getUserDiscountOffer(e)),
            [u, _] = i.useState(d(n)),
            c = (0, r.useStateFromStores)([s.default], () => (0, l.isPremium)(s.default.getCurrentUser()));
        return i.useEffect(() => {
            if (null == n || null == n.expires_at) return;
            let e = new a.Timeout,
                t = () => {
                    let i = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
                    null == e || e.start(i, () => {
                        !u && d(n) ? _(!0) : t()
                    })
                };
            return t(), () => e.stop()
        }, [u, n]), u || c && !t ? null : n
    }

    function E() {
        var e, t;
        let n = c(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
            i = c(u.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID),
            r = c(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID),
            a = c(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID);
        return null !== (t = null !== (e = null != n ? n : i) && void 0 !== e ? e : r) && void 0 !== t ? t : a
    }

    function I() {
        let e = c(u.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID, !0),
            t = c(u.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID, !0);
        return null != e ? e : t
    }
}