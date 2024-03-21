function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("748820"),
        s = n("77078"),
        l = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        E = n("646718");

    function v(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: v,
            onClose: C,
            onComplete: p,
            onSubscriptionConfirmation: _,
            analyticsLocations: I,
            analyticsObject: m,
            analyticsLocation: N,
            analyticsSourceLocation: g,
            isGift: T = !1,
            giftMessage: S,
            subscriptionTier: M,
            trialId: R,
            postSuccessGuild: x,
            openInvoiceId: A,
            applicationId: y,
            referralTrialOfferId: b,
            giftRecipient: w,
            returnRef: V,
            subscription: L
        } = null != e ? e : {}, P = !1, O = (0, r.v4)(), j = u.default.getCurrentUser(), U = (0, f.isPremiumExactly)(j, E.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
                let {
                    onClose: r,
                    ...s
                } = n;
                return (0, i.jsx)(e, {
                    ...s,
                    loadId: O,
                    subscriptionTier: M,
                    skuId: (0, f.castPremiumSubscriptionAsSkuId)(M),
                    isGift: T,
                    giftMessage: S,
                    giftRecipient: w,
                    initialPlanId: t,
                    followupSKUInfo: v,
                    onClose: (e, t) => {
                        r(), null == C || C(e), e && (null == _ || _(), !T && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !U && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        P = !0, null == p || p(), !T && (0, o.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: _,
                    analyticsLocations: I,
                    analyticsObject: m,
                    analyticsLocation: N,
                    analyticsSourceLocation: g,
                    trialId: R,
                    postSuccessGuild: x,
                    planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: A,
                    applicationId: y,
                    referralTrialOfferId: b,
                    returnRef: V,
                    subscription: L
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !P && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: O,
                    payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                    location: null != N ? N : m,
                    source: g,
                    subscription_type: h.SubscriptionTypes.PREMIUM,
                    is_gift: T,
                    eligible_for_trial: null != R,
                    application_id: y,
                    location_stack: I
                }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == C || C(P), P && (null == _ || _())
            }
        })
    }
}