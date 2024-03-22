function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        NON_SUBSCRIBER_SENTINEL: function() {
            return h
        },
        maybeFetchPremiumLikelihood: function() {
            return I
        },
        useMaybeFetchPremiumLikelihood: function() {
            return p
        }
    });
    var r = i("884691"),
        n = i("65597"),
        s = i("872717"),
        a = i("913144"),
        l = i("775433"),
        u = i("697218"),
        c = i("10514"),
        o = i("764364"),
        d = i("719923"),
        f = i("676572"),
        S = i("646718"),
        m = i("49111");
    let h = "nonSubscriber";
    async function E() {
        try {
            a.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
            });
            let {
                body: e
            } = await s.HTTP.get({
                url: m.Endpoints.USER_PREMIUM_LIKELIHOOD
            });
            a.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                premiumLikelihood: function(e) {
                    return {
                        [h]: e.non_subscriber,
                        [S.PremiumSubscriptionSKUs.TIER_0]: e[S.PremiumSubscriptionSKUs.TIER_0],
                        [S.PremiumSubscriptionSKUs.TIER_2]: e[S.PremiumSubscriptionSKUs.TIER_2]
                    }
                }(e)
            })
        } catch (e) {
            404 === e.status ? a.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
            }) : a.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
            })
        }
    }

    function I(e) {
        let {
            enabled: t,
            useExpectedValue: i
        } = e.getCurrentConfig({
            location: "443cca_1"
        }, {
            autoTrackExposure: !1
        }), r = f.default.shouldFetchPremiumLikelihood(), n = u.default.getCurrentUser();
        k(n, r, t, i)
    }

    function p(e) {
        let {
            enabled: t,
            useExpectedValue: i
        } = e.useExperiment({
            location: "443cca_2"
        }, {
            autoTrackExposure: !1
        }), s = (0, n.useStateFromStores)([f.default], () => f.default.shouldFetchPremiumLikelihood()), a = (0, n.useStateFromStores)([u.default], () => u.default.getCurrentUser());
        r.useEffect(() => {
            k(a, s, t, i)
        }, [a, s, t, i])
    }

    function k(e, t, i, r) {
        null != e && !(0, o.isPremium)(e) && i && (t && E(), r && (!c.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_0)) && !c.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_0)) && (0, l.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_0)), !c.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_2)) && !c.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_2)) && (0, l.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(S.PremiumSubscriptionSKUs.TIER_2))))
    }
}