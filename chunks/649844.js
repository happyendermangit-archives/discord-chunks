function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("748820"),
        r = n("77078"),
        l = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        v = n("646718");

    function E(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: E,
            onClose: C,
            onComplete: p,
            onSubscriptionConfirmation: _,
            analyticsLocations: m,
            analyticsObject: I,
            analyticsLocation: N,
            analyticsSourceLocation: S,
            isGift: g = !1,
            giftMessage: T,
            subscriptionTier: A,
            trialId: R,
            postSuccessGuild: x,
            openInvoiceId: L,
            applicationId: M,
            referralTrialOfferId: O,
            giftRecipient: w,
            returnRef: y,
            subscription: b
        } = null != e ? e : {}, P = !1, V = (0, s.v4)(), j = u.default.getCurrentUser(), U = (0, f.isPremiumExactly)(j, v.PremiumTypes.TIER_2);
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
                let {
                    onClose: s,
                    ...r
                } = n;
                return (0, i.jsx)(e, {
                    ...r,
                    loadId: V,
                    subscriptionTier: A,
                    skuId: (0, f.castPremiumSubscriptionAsSkuId)(A),
                    isGift: g,
                    giftMessage: T,
                    giftRecipient: w,
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: (e, t) => {
                        s(), null == C || C(e), e && (null == _ || _(), !g && null != t && t === v.PremiumSubscriptionSKUs.TIER_2 && !U && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        P = !0, null == p || p(), !g && (0, o.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: _,
                    analyticsLocations: m,
                    analyticsObject: I,
                    analyticsLocation: N,
                    analyticsSourceLocation: S,
                    trialId: R,
                    postSuccessGuild: x,
                    planGroup: v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: L,
                    applicationId: M,
                    referralTrialOfferId: O,
                    returnRef: y,
                    subscription: b
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !P && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: V,
                    payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                    location: null != N ? N : I,
                    source: S,
                    subscription_type: h.SubscriptionTypes.PREMIUM,
                    is_gift: g,
                    eligible_for_trial: null != R,
                    application_id: M,
                    location_stack: m
                }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == C || C(P), P && (null == _ || _())
            }
        })
    }
}