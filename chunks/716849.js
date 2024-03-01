function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        NON_SUBSCRIBER_SENTINEL: function() {
            return h
        },
        maybeFetchPremiumLikelihood: function() {
            return E
        },
        useMaybeFetchPremiumLikelihood: function() {
            return p
        }
    });
    var r = i("884691"),
        n = i("65597"),
        s = i("872717"),
        l = i("913144"),
        a = i("775433"),
        u = i("697218"),
        c = i("10514"),
        d = i("764364"),
        o = i("676572"),
        f = i("646718"),
        S = i("49111");
    let h = "nonSubscriber";
    async function m() {
        try {
            l.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
            });
            let {
                body: e
            } = await s.default.get({
                url: S.Endpoints.USER_PREMIUM_LIKELIHOOD
            });
            l.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                premiumLikelihood: function(e) {
                    return {
                        [h]: e.non_subscriber,
                        [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                        [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                    }
                }(e)
            })
        } catch (e) {
            404 === e.status ? l.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
            }) : l.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
            })
        }
    }

    function E(e) {
        let {
            enabled: t,
            useExpectedValue: i
        } = e.getCurrentConfig({
            location: "443cca_1"
        }, {
            autoTrackExposure: !1
        }), r = o.default.shouldFetchPremiumLikelihood(), n = u.default.getCurrentUser();
        I(n, r, t, i)
    }

    function p(e) {
        let {
            enabled: t,
            useExpectedValue: i
        } = e.useExperiment({
            location: "443cca_2"
        }, {
            autoTrackExposure: !1
        }), s = (0, n.default)([o.default], () => o.default.shouldFetchPremiumLikelihood()), l = (0, n.default)([u.default], () => u.default.getCurrentUser());
        r.useEffect(() => {
            I(l, s, t, i)
        }, [l, s, t, i])
    }

    function I(e, t, i, r) {
        null != e && !(0, d.isPremium)(e) && i && (t && m(), r && (!c.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !c.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !c.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !c.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
    }
}