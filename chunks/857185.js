function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NON_SUBSCRIBER_SENTINEL: function() {
            return T
        },
        maybeFetchPremiumLikelihood: function() {
            return S
        },
        useMaybeFetchPremiumLikelihood: function() {
            return h
        }
    });
    var i = n("470079"),
        r = n("399606"),
        a = n("544891"),
        s = n("570140"),
        o = n("821849"),
        l = n("594174"),
        u = n("509545"),
        d = n("111361"),
        _ = n("74538"),
        c = n("7252"),
        E = n("474936"),
        I = n("981631");
    let T = "nonSubscriber";
    async function f() {
        try {
            s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
            });
            let {
                body: e
            } = await a.HTTP.get({
                url: I.Endpoints.USER_PREMIUM_LIKELIHOOD
            });
            s.default.dispatch({
                type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                premiumLikelihood: function(e) {
                    return {
                        [T]: e.non_subscriber,
                        [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                        [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
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
            useExpectedValue: n
        } = e.getCurrentConfig({
            location: "443cca_1"
        }, {
            autoTrackExposure: !1
        }), i = c.default.shouldFetchPremiumLikelihood();
        A(l.default.getCurrentUser(), i, t, n)
    }

    function h(e) {
        let {
            enabled: t,
            useExpectedValue: n
        } = e.useExperiment({
            location: "443cca_2"
        }, {
            autoTrackExposure: !1
        }), a = (0, r.useStateFromStores)([c.default], () => c.default.shouldFetchPremiumLikelihood()), s = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUser());
        i.useEffect(() => {
            A(s, a, t, n)
        }, [s, a, t, n])
    }

    function A(e, t, n, i) {
        null != e && !(0, d.isPremium)(e) && n && (t && f(), i && (!u.default.isLoadedForSKU((0, _.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_0)) && !u.default.isFetchingForSKU((0, _.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_0)) && (0, o.fetchSubscriptionPlansForSKU)((0, _.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_0)), !u.default.isLoadedForSKU((0, _.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_2)) && !u.default.isFetchingForSKU((0, _.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_2)) && (0, o.fetchSubscriptionPlansForSKU)((0, _.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_2))))
    }
}