function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        NON_SUBSCRIBER_SENTINEL: function() {
            return E
        },
        maybeFetchPremiumLikelihood: function() {
            return S
        },
        useMaybeFetchPremiumLikelihood: function() {
            return I
        }
    });
    var r = i("884691"),
        n = i("65597"),
        u = i("872717"),
        s = i("913144"),
        o = i("775433"),
        l = i("697218"),
        a = i("10514"),
        c = i("764364"),
        d = i("719923"),
        f = i("676572"),
        h = i("646718"),
        p = i("49111");
    let E = "nonSubscriber";
    async function m() {
        try {
            s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
            });
            let {
                body: e
            } = await u.HTTP.get({
                url: p.Endpoints.USER_PREMIUM_LIKELIHOOD
            });
            s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                premiumLikelihood: function(e) {
                    return {
                        [E]: e.non_subscriber,
                        [h.PremiumSubscriptionSKUs.TIER_0]: e[h.PremiumSubscriptionSKUs.TIER_0],
                        [h.PremiumSubscriptionSKUs.TIER_2]: e[h.PremiumSubscriptionSKUs.TIER_2]
                    }
                }(e)
            })
        } catch (e) {
            404 === e.status ? s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
            }) : s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
            })
        }
    }

    function S(e) {
        let {
            enabled: t,
            useExpectedValue: i
        } = e.getCurrentConfig({
            location: "443cca_1"
        }, {
            autoTrackExposure: !1
        }), r = f.default.shouldFetchPremiumLikelihood(), n = l.default.getCurrentUser();
        L(n, r, t, i)
    }

    function I(e) {
        let {
            enabled: t,
            useExpectedValue: i
        } = e.useExperiment({
            location: "443cca_2"
        }, {
            autoTrackExposure: !1
        }), u = (0, n.useStateFromStores)([f.default], () => f.default.shouldFetchPremiumLikelihood()), s = (0, n.useStateFromStores)([l.default], () => l.default.getCurrentUser());
        r.useEffect(() => {
            L(s, u, t, i)
        }, [s, u, t, i])
    }

    function L(e, t, i, r) {
        null != e && !(0, c.isPremium)(e) && i && (t && m(), r && (!a.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_0)) && !a.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_0)) && (0, o.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_0)), !a.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_2)) && !a.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_2)) && (0, o.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_2))))
    }
}