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
        s = n("846519"),
        a = n("594174"),
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

    function c(e) {
        let t = (0, r.useStateFromStores)([o.default], () => o.default.getUserDiscountOffer(e)),
            [n, u] = i.useState(d(t)),
            _ = (0, r.useStateFromStores)([a.default], () => (0, l.isPremium)(a.default.getCurrentUser()));
        return i.useEffect(() => {
            if (null == t || null == t.expires_at) return;
            let e = new s.Timeout,
                i = () => {
                    let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                    null == e || e.start(r, () => {
                        !n && d(t) ? u(!0) : i()
                    })
                };
            return i(), () => e.stop()
        }, [n, t]), n || _ ? null : t
    }

    function E() {
        var e, t;
        let n = c(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
            i = c(u.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID),
            r = c(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID),
            s = c(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID);
        return null !== (t = null !== (e = null != n ? n : i) && void 0 !== e ? e : r) && void 0 !== t ? t : s
    }

    function I() {
        let e = c(u.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID),
            t = c(u.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID);
        return null != e ? e : t
    }
}