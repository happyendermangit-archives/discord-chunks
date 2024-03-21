function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
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
        v = n("646718");

    function p(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: p,
            onClose: C,
            onComplete: E,
            onSubscriptionConfirmation: m,
            analyticsLocations: _,
            analyticsObject: g,
            analyticsLocation: N,
            analyticsSourceLocation: I,
            isGift: S = !1,
            giftMessage: x,
            subscriptionTier: T,
            trialId: M,
            postSuccessGuild: b,
            openInvoiceId: R,
            applicationId: A,
            referralTrialOfferId: y,
            giftRecipient: w,
            returnRef: L,
            subscription: V
        } = null != e ? e : {}, P = !1, j = (0, r.v4)(), O = u.default.getCurrentUser(), U = (0, f.isPremiumExactly)(O, v.PremiumTypes.TIER_2);
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
                    loadId: j,
                    subscriptionTier: T,
                    skuId: (0, f.castPremiumSubscriptionAsSkuId)(T),
                    isGift: S,
                    giftMessage: x,
                    giftRecipient: w,
                    initialPlanId: t,
                    followupSKUInfo: p,
                    onClose: (e, t) => {
                        r(), null == C || C(e), e && (null == m || m(), !S && null != t && t === v.PremiumSubscriptionSKUs.TIER_2 && !U && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        P = !0, null == E || E(), !S && (0, o.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: m,
                    analyticsLocations: _,
                    analyticsObject: g,
                    analyticsLocation: N,
                    analyticsSourceLocation: I,
                    trialId: M,
                    postSuccessGuild: b,
                    planGroup: v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: R,
                    applicationId: A,
                    referralTrialOfferId: y,
                    returnRef: L,
                    subscription: V
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !P && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: j,
                    payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                    location: null != N ? N : g,
                    source: I,
                    subscription_type: h.SubscriptionTypes.PREMIUM,
                    is_gift: S,
                    eligible_for_trial: null != M,
                    application_id: A,
                    location_stack: _
                }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == C || C(P), P && (null == m || m())
            }
        })
    }
}