function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        discountOfferHasTier: function() {
            return d
        },
        usePremiumDiscountOffer: function() {
            return m
        }
    }), n("222007");
    var r = n("884691"),
        i = n("446674"),
        l = n("862337"),
        a = n("697218"),
        s = n("340412"),
        o = n("719923"),
        u = n("646718");

    function c(e) {
        return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
    }

    function d(e, t) {
        var n;
        if (null == e) return !1;
        let r = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
        return r.has(t)
    }

    function f(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getUserDiscountOffer(e)),
            [n, u] = r.useState(c(t)),
            d = (0, i.useStateFromStores)([a.default], () => (0, o.isPremium)(a.default.getCurrentUser()));
        return r.useEffect(() => {
            if (null == t || null == t.expires_at) return;
            let e = new l.Timeout,
                r = () => {
                    let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                    null == e || e.start(i, () => {
                        !n && c(t) ? u(!0) : r()
                    })
                };
            return r(), () => e.stop()
        }, [n, t]), n || d ? null : t
    }

    function m() {
        var e, t;
        let n = f(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
            r = f(u.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID),
            i = f(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID),
            l = f(u.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID);
        return null !== (t = null !== (e = null != n ? n : r) && void 0 !== e ? e : i) && void 0 !== t ? t : l
    }
}