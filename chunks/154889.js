function(C, t, e) {
    "use strict";
    e.r(t), e.d(t, {
        hasUserDiscountExpired: function() {
            return a
        },
        discountOfferHasTier: function() {
            return o
        },
        usePremiumDiscountOffer: function() {
            return f
        }
    }), e("222007");
    var L = e("884691"),
        n = e("446674"),
        r = e("862337"),
        u = e("697218"),
        s = e("340412"),
        i = e("719923"),
        l = e("646718");

    function a(C) {
        return null != C && null != C.expires_at && Date.now() > Date.parse(C.expires_at)
    }

    function o(C, t) {
        var e;
        if (null == C) return !1;
        let L = new Set(null === (e = C.discount) || void 0 === e ? void 0 : e.plan_ids.map(C => l.SubscriptionPlanInfo[C].skuId));
        return L.has(t)
    }

    function d(C) {
        let t = (0, n.useStateFromStores)([s.default], () => s.default.getUserDiscountOffer(C)),
            [e, l] = L.useState(a(t)),
            o = (0, n.useStateFromStores)([u.default], () => (0, i.isPremium)(u.default.getCurrentUser()));
        return L.useEffect(() => {
            if (null == t || null == t.expires_at) return;
            let C = new r.Timeout,
                L = () => {
                    let n = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                    null == C || C.start(n, () => {
                        !e && a(t) ? l(!0) : L()
                    })
                };
            return L(), () => C.stop()
        }, [e, t]), e || o ? null : t
    }

    function f() {
        var C, t;
        let e = d(l.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
            L = d(l.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID),
            n = d(l.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID),
            r = d(l.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID);
        return null !== (t = null !== (C = null != e ? e : L) && void 0 !== C ? C : n) && void 0 !== t ? t : r
    }
}