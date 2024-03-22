function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsInPremiumOfferExperience: function() {
            return E
        },
        useHasDiscountApplied: function() {
            return I
        },
        useActiveDiscountInfo: function() {
            return T
        },
        useFetchChurnUserDiscountOffer: function() {
            return S
        },
        useShouldFetchChurnOffer: function() {
            return P
        }
    }), n("222007");
    var r = n("884691"),
        i = n("866227"),
        a = n.n(i),
        l = n("446674"),
        s = n("872717"),
        o = n("521012"),
        u = n("324878"),
        c = n("77860"),
        d = n("154889"),
        f = n("917247"),
        m = n("646718"),
        _ = n("49111");

    function E() {
        let e = (0, f.usePremiumTrialOffer)(),
            t = (0, u.useHasActiveTrial)(),
            n = (0, d.usePremiumDiscountOffer)(),
            r = I();
        return null != e || t || null != n || r
    }
    let I = () => {
            var e;
            let t = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
                n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
            return null != n && a(Date.now()) <= a(n)
        },
        T = () => {
            var e;
            let t = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
                n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id;
            switch (n) {
                case m.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID:
                case m.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID:
                    return {
                        duration: 1, percentage: 30
                    };
                case m.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID:
                case m.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID:
                case m.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID:
                    return {
                        duration: 3, percentage: 30
                    };
                case m.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID:
                    return {
                        duration: 1, percentage: 40
                    };
                default:
                    return
            }
        },
        p = async () => {
            let e = null;
            try {
                var t;
                let n = await s.HTTP.post({
                    url: _.Endpoints.CHURN_USER_OFFER
                });
                e = null !== (t = n.body.offer) && void 0 !== t ? t : null
            } catch (e) {}
            return e
        }, S = e => {
            let [t, n] = r.useState(!1), [i, a] = r.useState(!1), [l, s] = r.useState(null);
            if (e) return {
                churnUserDiscountOffer: l,
                isFetchingChurnDiscountOffer: i
            };
            let o = () => {
                n(!0), a(!1)
            };
            return !i && !t && (a(!0), p().then(e => {
                s(e), o()
            }).catch(e => {
                o()
            })), {
                churnUserDiscountOffer: l,
                isFetchingChurnDiscountOffer: i
            }
        }, P = () => {
            let {
                enabled: e
            } = c.default.useExperiment({
                location: "useShouldFetchChurnOffer"
            }, {
                autoTrackExposure: !1
            }), t = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()), n = I(), r = null !== t && t.hasPremiumNitroMonthly, i = null != t && null != t.trialId;
            return e && r && !i && !n
        }
}