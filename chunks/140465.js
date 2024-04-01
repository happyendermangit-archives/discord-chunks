function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useActiveDiscountInfo: function() {
            return S
        },
        useFetchChurnUserDiscountOffer: function() {
            return A
        },
        useHasDiscountApplied: function() {
            return f
        },
        useIsInPremiumOfferExperience: function() {
            return T
        },
        useShouldFetchChurnOffer: function() {
            return m
        }
    }), n("47120");
    var i = n("470079"),
        r = n("913527"),
        s = n.n(r),
        a = n("442837"),
        o = n("544891"),
        l = n("78839"),
        u = n("775412"),
        d = n("529537"),
        _ = n("104494"),
        c = n("639119"),
        E = n("474936"),
        I = n("981631");

    function T() {
        let e = (0, c.usePremiumTrialOffer)(),
            t = (0, u.useHasActiveTrial)(),
            n = (0, _.usePremiumDiscountOffer)(),
            i = f();
        return null != e || t || null != n || i
    }
    let f = () => {
            var e;
            let t = (0, a.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()),
                n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
            return null != n && s()(Date.now()) <= s()(n)
        },
        S = () => {
            var e;
            let t = (0, a.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
            switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
                case E.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID:
                case E.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID:
                    return {
                        duration: 1, percentage: 30
                    };
                case E.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID:
                case E.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID:
                case E.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID:
                    return {
                        duration: 3, percentage: 30
                    };
                case E.PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID:
                    return {
                        duration: 1, percentage: 40
                    };
                default:
                    return
            }
        },
        h = async () => {
            let e = null;
            try {
                var t;
                let n = await o.HTTP.post({
                    url: I.Endpoints.CHURN_USER_OFFER
                });
                e = null !== (t = n.body.offer) && void 0 !== t ? t : null
            } catch (e) {}
            return e
        }, A = e => {
            let [t, n] = i.useState(!1), [r, s] = i.useState(!1), [a, o] = i.useState(null);
            if (e) return {
                churnUserDiscountOffer: a,
                isFetchingChurnDiscountOffer: r
            };
            let l = () => {
                n(!0), s(!1)
            };
            return !r && !t && (s(!0), h().then(e => {
                o(e), l()
            }).catch(e => {
                l()
            })), {
                churnUserDiscountOffer: a,
                isFetchingChurnDiscountOffer: r
            }
        }, m = () => {
            let {
                enabled: e
            } = d.default.useExperiment({
                location: "useShouldFetchChurnOffer"
            }, {
                autoTrackExposure: !1
            }), t = (0, a.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()), n = f(), i = null !== t && t.hasPremiumNitroMonthly, r = null != t && null != t.trialId;
            return e && i && !r && !n
        }
}